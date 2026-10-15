import type { ConceptNode } from "./concept-diagram.type";

export const NODE_W = 120;
export const NODE_H = 44;

export const nodeSize = (node: ConceptNode) => ({ w: node.w ?? NODE_W, h: node.h ?? NODE_H });

/** center에서 target 방향으로 그은 선이 노드 사각형 테두리와 만나는 점을 구한다. */
export function clipToNode(node: ConceptNode, target: { x: number; y: number }, gap = 3) {
  const { w, h } = nodeSize(node);
  const dx = target.x - node.x;
  const dy = target.y - node.y;
  if (dx === 0 && dy === 0) return { x: node.x, y: node.y };

  const scale = Math.min(w / 2 / Math.abs(dx || Number.EPSILON), h / 2 / Math.abs(dy || Number.EPSILON));
  const length = Math.hypot(dx, dy);
  const ux = dx / length;
  const uy = dy / length;

  return { x: node.x + dx * scale + ux * gap, y: node.y + dy * scale + uy * gap };
}
