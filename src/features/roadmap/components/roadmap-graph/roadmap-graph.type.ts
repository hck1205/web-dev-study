/** done: 다 적용함 · progress: 시작함 · next: 앞 노드를 다 읽어서 지금 할 차례 · todo: 아직 앞 노드가 남았다 */
export type GraphNodeState = "done" | "progress" | "next" | "todo";

export interface GraphNode {
  id: string;
  label: string;
  /** 노드 아래 작은 글씨 (예: "글 82편 · 적용 3") */
  sub?: string;
  href: string;
  /** 적용까지 끝낸 비율 0~100 */
  percent: number;
  state: GraphNodeState;
}

export interface GraphEdge {
  from: string;
  to: string;
  /** requires: 먼저 읽어 두면 좋은 관계 · order: 같은 로드맵 안에서 다음 순서 */
  kind: "requires" | "order";
  /** 앞 노드를 다 읽어서 이 길이 열렸는지 */
  met: boolean;
}

export interface RoadmapGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  /** 화면 낭독기용 그래프 이름 */
  label: string;
}

/** 화면에 그릴 연결선 하나 (컨테이너 기준 px 좌표) */
export interface EdgePath {
  key: string;
  d: string;
  from: string;
  to: string;
  kind: GraphEdge["kind"];
  met: boolean;
}
