import type { Point, TopologyIcon, TopologyLink, TopologyNode } from "./network-topology.type";

export const NODE_W = 104;
export const NODE_H = 40;

export const nodeWidth = (node: TopologyNode) => node.w ?? NODE_W;

/** center에서 target 쪽으로 그은 선이 노드 테두리와 만나는 점 */
export function clipToNode(node: TopologyNode, target: Point, gap = 3): Point {
  const w = nodeWidth(node);
  const dx = target.x - node.x;
  const dy = target.y - node.y;
  if (dx === 0 && dy === 0) return { x: node.x, y: node.y };
  const scale = Math.min(w / 2 / Math.abs(dx || Number.EPSILON), NODE_H / 2 / Math.abs(dy || Number.EPSILON));
  const length = Math.hypot(dx, dy);
  return { x: node.x + dx * scale + (dx / length) * gap, y: node.y + dy * scale + (dy / length) * gap };
}

export const linkKey = (a: string, b: string) => (a < b ? `${a}|${b}` : `${b}|${a}`);

/** 경로가 지나는 연결(방향 무관)의 key 목록 */
export function pathLinkKeys(path: string[]) {
  return new Set(path.slice(1).map((id, index) => linkKey(path[index], id)));
}

/** 패킷이 지나는 꺾은선: 노드 중심을 차례로 잇는다 */
export const pathPoints = (path: string[], byId: Record<string, TopologyNode>): Point[] =>
  path.map((id) => byId[id]).filter(Boolean).map((node) => ({ x: node.x, y: node.y }));

/** 홉 수에 따라 이동 시간을 정한다 (500~900ms) */
export const travelDuration = (hops: number) => Math.min(900, Math.max(500, hops * 300));

/** 꺾은선 위 t(0~1) 위치. 구간 길이에 비례해 나눈다 */
export function pointAlong(points: Point[], t: number): Point {
  if (points.length === 1) return points[0];
  const lengths = points.slice(1).map((p, i) => Math.hypot(p.x - points[i].x, p.y - points[i].y));
  const total = lengths.reduce((sum, value) => sum + value, 0) || 1;
  let remain = t * total;
  for (let i = 0; i < lengths.length; i += 1) {
    if (remain <= lengths[i] || i === lengths.length - 1) {
      const r = lengths[i] === 0 ? 1 : Math.min(1, remain / lengths[i]);
      return { x: points[i].x + (points[i + 1].x - points[i].x) * r, y: points[i].y + (points[i + 1].y - points[i].y) * r };
    }
    remain -= lengths[i];
  }
  return points[points.length - 1];
}

export const linkExists = (links: TopologyLink[], a: string, b: string) =>
  links.some((link) => linkKey(link.from, link.to) === linkKey(a, b));

/** 16×16 칸 안의 선 그림 (stroke로 그린다) */
export const ICON_PATHS: Record<TopologyIcon, string> = {
  client: "M2 3h12v8H2z M0.5 13.5h15",
  server: "M2 2h12v5H2z M2 9h12v5H2z M4.5 4.5h1 M4.5 11.5h1",
  router: "M8 1a7 7 0 1 0 0.01 0z M4 8h8 M8 4v8 M10 6l2 2-2 2 M6 6L4 8l2 2",
  switch: "M1.5 4h13v8h-13z M4 7h8 M10 5.5L12 7l-2 1.5 M12 9H4 M6 7.5L4 9l2 1.5",
  lb: "M8 2v4 M8 6L3 13 M8 6v7 M8 6l5 7 M6 2h4",
  firewall: "M1.5 2.5h13v11h-13z M1.5 6.2h13 M1.5 9.8h13 M6 2.5v3.7 M10 6.2v3.6 M6 9.8v3.7",
  internet: "M8 1a7 7 0 1 0 0.01 0z M1 8h14 M8 1c-3 3.5-3 10.5 0 14 M8 1c3 3.5 3 10.5 0 14",
  db: "M2.5 3.5c0-2 11-2 11 0v9c0 2-11 2-11 0z M2.5 3.5c0 2 11 2 11 0 M2.5 8c0 2 11 2 11 0",
  container: "M2 4.5L8 1.5l6 3v7l-6 3-6-3z M2 4.5l6 3 6-3 M8 7.5v7",
  dns: "M2 3h12v10H2z M4.5 6.5h7 M4.5 9.5h4",
  gateway: "M2 14V6l6-4 6 4v8 M5.5 14V9h5v5",
  lock: "M3.5 7.5h9v7h-9z M5.5 7.5V5a2.5 2.5 0 0 1 5 0v2.5",
};
