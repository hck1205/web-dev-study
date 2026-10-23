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

/** 위 노드의 아래 가운데에서 아래 노드의 위 가운데로 내려가는 부드러운 곡선 */
export function edgeCurve(from: DOMRect, to: DOMRect, box: DOMRect) {
  const x1 = from.left + from.width / 2 - box.left;
  const y1 = from.bottom - box.top;
  const x2 = to.left + to.width / 2 - box.left;
  // 화살촉이 카드에 묻히지 않게 살짝 위에서 멈춘다
  const y2 = to.top - box.top - 4;
  const bend = Math.max(18, (y2 - y1) / 2);
  return `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}`;
}
