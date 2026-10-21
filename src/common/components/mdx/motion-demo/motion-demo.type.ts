/** 그림으로 보여 줄 수 있는 UI 애니메이션 패턴 */
export type MotionPattern =
  | "gooey"
  | "slide-in"
  | "spring-pop"
  | "stagger"
  | "shared-element"
  | "ripple"
  | "path-draw"
  | "marquee"
  | "tilt";

export interface MotionDemoProps {
  /** 하나만 주면 큰 카드 하나, 여러 개면 격자로 보여 준다 */
  patterns: MotionPattern[];
  caption?: string;
}

export interface PatternMeta {
  title: string;
  /** 카드 아래 한 줄 설명 (평서체, 짧게) */
  hint: string;
  /** 한 바퀴 도는 시간(ms). 끝나면 처음부터 다시 재생한다 */
  period: number;
}
