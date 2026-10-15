export interface TraceStep {
  /** 지금 보고 있는 칸 (cells의 인덱스) */
  pointer?: number;
  /** 성공으로 강조할 칸들 */
  found?: number[];
  /** 지금 "기억하고 있는 것" (스택, 해시맵 등)의 내용. 왼쪽이 먼저 들어간 것 */
  memory?: string[];
  /** 한 줄 설명 (쉬운 말) */
  caption: string;
}

export interface AlgoTraceProps {
  cells: string[];
  steps: TraceStep[];
  /** 기억 장소 이름 (예: "스택", "해시맵") */
  memoryLabel?: string;
  caption?: string;
}
