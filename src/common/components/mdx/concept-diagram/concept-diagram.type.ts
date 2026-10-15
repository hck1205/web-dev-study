export interface ConceptNode {
  id: string;
  label: string;
  /** 라벨 아래 작은 보조 설명 */
  sub?: string;
  /** viewBox 좌표계에서 노드 중심 위치 */
  x: number;
  y: number;
  w?: number;
  h?: number;
}

export interface ConceptEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  /** 기본값 "end": 화살표가 to 쪽에만 있다 */
  arrow?: "end" | "both" | "none";
}

export interface ConceptDiagramProps {
  nodes: ConceptNode[];
  edges: ConceptEdge[];
  width?: number;
  height?: number;
  caption?: string;
}
