export interface SequenceActor {
  id: string;
  /** 짧게 쓴다 (예: "사용자", "인가 서버") */
  label: string;
}

export interface SequenceStep {
  from: string;
  /** from과 같으면 자기 자신에게 하는 동작(예: 값 생성)으로 그린다 */
  to: string;
  /** 화살표 위에 붙는 짧은 라벨 (예: "GET /authorize") */
  label: string;
  /** 설명 패널의 제목 */
  title: string;
  /** 쉬운 말로 풀어 쓴 설명 */
  detail: string;
  /** 실제 주고받는 값의 예 (코드 블록으로 표시) */
  payload?: string;
}

export interface SequenceDiagramProps {
  actors: SequenceActor[];
  steps: SequenceStep[];
  caption?: string;
}

export type StepState = "ghost" | "past" | "active";

export interface Layout {
  width: number;
  height: number;
  lane: number;
  headerHeight: number;
  rowHeight: number;
  actorX: Record<string, number>;
  rowY: (index: number) => number;
}
