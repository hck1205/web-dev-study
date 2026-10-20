import type { LoadingPattern } from "../loading-demo.type";

export interface PatternCardProps {
  pattern: LoadingPattern;
  running: boolean;
  /** 한 개만 보여 줄 때는 화면을 크게 */
  large?: boolean;
}
