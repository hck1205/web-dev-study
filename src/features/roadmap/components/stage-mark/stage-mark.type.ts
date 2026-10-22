import type { Stage } from "../../atoms/study-progress";

export interface StageMarkProps {
  stage: Stage;
  /** 라벨까지 같이 보여 줄지 */
  withLabel?: boolean;
}
