import type { Stage } from "../../atoms/study-progress";

export interface ProgressBarProps {
  /** 단계별 글 수 */
  counts: Record<Stage, number>;
  total: number;
  /** 막대 아래 "n / m · k%" 글자를 보여 줄지 */
  withText?: boolean;
}
