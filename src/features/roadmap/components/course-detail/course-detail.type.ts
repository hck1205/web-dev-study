import type { CourseStageStats } from "../../hooks/use-roadmap-stats";

export interface NumberedStage extends CourseStageStats {
  number: number;
}

export interface StageGroup {
  /** 묶음 이름. 없으면 제목 없이 단계만 보인다 */
  label?: string;
  stages: NumberedStage[];
}
