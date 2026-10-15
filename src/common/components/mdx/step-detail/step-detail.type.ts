import type { ReactNode } from "react";

export interface StepDetailProps {
  /** 단계 번호 (0부터). 바뀔 때마다 패널이 다시 떠오른다 */
  index: number;
  title: string;
  detail?: ReactNode;
  /** 설명 아래에 붙일 것 (예: 실제 요청 내용) */
  children?: ReactNode;
}
