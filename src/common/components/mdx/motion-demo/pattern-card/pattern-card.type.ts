import type { MotionPattern } from "../motion-demo.type";

export interface PatternCardProps {
  pattern: MotionPattern;
  running: boolean;
  /** 한 개만 보여 줄 때는 화면을 크게 */
  large?: boolean;
}

export interface SceneProps {
  t: number;
  /** 움직임 줄이기: 시계가 멈추고 마지막 장면을 보여 준다 */
  still: boolean;
  running: boolean;
  period: number;
}
