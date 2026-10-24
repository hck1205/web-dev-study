import type { GraphEdge, GraphNode } from "./roadmap-graph.type";

/**
 * 노드를 층으로 나눈다. 들어오는 선이 없는 노드가 0층이고,
 * 나머지는 앞 노드들 중 가장 깊은 층 + 1 (가장 긴 경로). 같은 층 안에서는 원래 순서를 지킨다.
 */
export function layerNodes(nodes: GraphNode[], edges: GraphEdge[]): GraphNode[][] {
  const incoming = new Map<string, string[]>();
  for (const edge of edges) incoming.set(edge.to, [...(incoming.get(edge.to) ?? []), edge.from]);

  const depth = new Map<string, number>();
  const visiting = new Set<string>();
  const depthOf = (id: string): number => {
    const known = depth.get(id);
    if (known !== undefined) return known;
    // 고리가 있으면 그 자리에서 끊는다
    if (visiting.has(id)) return 0;
    visiting.add(id);
    const parents = incoming.get(id) ?? [];
    const value = parents.length ? Math.max(...parents.map(depthOf)) + 1 : 0;
    visiting.delete(id);
    depth.set(id, value);
    return value;
  };

  // 어디와도 이어지지 않은 노드는 맨 아래 따로 둔다 (0층에 섞이면 출발점처럼 보인다)
  const linked = new Set(edges.flatMap((edge) => [edge.from, edge.to]));
  const alone = edges.length ? nodes.filter((node) => !linked.has(node.id)) : [];

  const layers: GraphNode[][] = [];
  for (const node of nodes) {
    if (alone.includes(node)) continue;
    const layer = depthOf(node.id);
    (layers[layer] ??= []).push(node);
  }
  const result = orderByParents(layers.filter(Boolean), incoming);
  return alone.length ? [...result, alone] : result;
}

/**
 * 층 안의 순서를 앞 노드들의 평균 위치로 다시 정한다(바리센터). 선이 서로 덜 꼬이고 카드 뒤로 덜 숨는다.
 * 위치는 층 폭에 대한 비율이라 층마다 노드 수가 달라도 비교할 수 있다.
 */
function orderByParents(layers: GraphNode[][], incoming: Map<string, string[]>): GraphNode[][] {
  const position = new Map<string, number>();
  const place = (layer: GraphNode[]) => layer.forEach((node, index) => position.set(node.id, (index + 0.5) / layer.length));
  place(layers[0] ?? []);
  return layers.map((layer, depth) => {
    if (depth === 0) return layer;
    const score = (node: GraphNode) => {
      const parents = (incoming.get(node.id) ?? []).map((id) => position.get(id)).filter((value) => value !== undefined);
      return parents.length ? parents.reduce((sum, value) => sum + value, 0) / parents.length : 0.5;
    };
    const sorted = [...layer].sort((a, b) => score(a) - score(b));
    place(sorted);
    return sorted;
  });
}

/** 값을 [lo, hi] 사이로 자른다 */
const clamp = (value: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, value));

/** 선이 카드 옆을 지날 때 카드와 띄우는 거리(px) */
const CHANNEL_MARGIN = 20;

/**
 * 중간 층을 지나갈 때 카드를 피해 갈 x 좌표를 고른다.
 * 후보는 층 양 바깥과 카드 사이 틈이고, 그중 직선으로 갔을 때의 x에 가장 가까운 것을 쓴다.
 */
function pickChannel(layer: DOMRect[], ideal: number, box: DOMRect): number {
  const rects = [...layer].sort((a, b) => a.left - b.left);
  const left = (rect: DOMRect) => rect.left - box.left;
  const right = (rect: DOMRect) => rect.right - box.left;
  const candidates: number[] = [];
  if (rects.length === 0) return ideal;
  candidates.push(clamp(left(rects[0]) - CHANNEL_MARGIN, 6, box.width - 6));
  for (let i = 0; i < rects.length - 1; i += 1) {
    const gap = left(rects[i + 1]) - right(rects[i]);
    if (gap >= 12) candidates.push(right(rects[i]) + gap / 2);
  }
  candidates.push(clamp(right(rects[rects.length - 1]) + CHANNEL_MARGIN, 6, box.width - 6));
  return candidates.reduce((best, x) => (Math.abs(x - ideal) < Math.abs(best - ideal) ? x : best));
}

/** 위에서 아래로 내려가는 S자 곡선 조각. x가 같으면 직선이 된다 */
function segment(x1: number, y1: number, x2: number, y2: number) {
  if (Math.abs(x1 - x2) < 0.5) return `L ${x2} ${y2}`;
  const bend = Math.max(14, (y2 - y1) / 2);
  return `C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}`;
}

/**
 * 위 노드 아래에서 아래 노드 위로 내려가는 선.
 * 출발·도착점은 상대 노드 쪽으로 조금 치우쳐서 한 노드에서 여러 선이 나가도 겹치지 않는다.
 * 층을 건너뛰는 선은 중간 층의 카드를 지나지 않고 카드 사이 틈이나 바깥으로 돌아간다.
 */
export function edgeCurve(from: DOMRect, to: DOMRect, box: DOMRect, between: DOMRect[][] = []) {
  const fromCenter = from.left + from.width / 2 - box.left;
  const toCenter = to.left + to.width / 2 - box.left;
  const x1 = fromCenter + clamp((toCenter - fromCenter) * 0.25, -from.width * 0.35, from.width * 0.35);
  const x2 = toCenter + clamp((fromCenter - toCenter) * 0.25, -to.width * 0.35, to.width * 0.35);
  const y1 = from.bottom - box.top;
  // 화살촉이 카드에 묻히지 않게 살짝 위에서 멈춘다
  const y2 = to.top - box.top - 4;

  // 중간 층마다 지나갈 x와, 그 층 위아래 틈의 세로 위치를 정한다
  const points: [number, number][] = [[x1, y1]];
  let prevBottom = y1;
  for (const layer of between) {
    if (layer.length === 0) continue;
    const top = Math.min(...layer.map((rect) => rect.top)) - box.top;
    const bottom = Math.max(...layer.map((rect) => rect.bottom)) - box.top;
    const ideal = x1 + ((x2 - x1) * ((top + bottom) / 2 - y1)) / Math.max(1, y2 - y1);
    const x = pickChannel(layer, ideal, box);
    points.push([x, (prevBottom + top) / 2], [x, bottom]);
    prevBottom = bottom;
  }
  points.push([x2, y2]);

  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i += 1) {
    const [px, py] = points[i - 1];
    const [x, y] = points[i];
    d += ` ${segment(px, py, x, y)}`;
  }
  return d;
}
