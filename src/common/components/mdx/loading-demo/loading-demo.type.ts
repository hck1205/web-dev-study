/** 그림으로 보여 줄 수 있는 로딩 패턴 */
export type LoadingPattern =
  | "spinner"
  | "skeleton"
  | "progress-bar"
  | "lazy-loading"
  | "progress-ring"
  | "blur-up"
  | "stepper"
  | "infinite-scroll"
  | "streaming-text"
  | "optimistic-ui"
  | "pull-to-refresh"
  | "loading-button";

export interface LoadingDemoProps {
  /** 하나만 주면 큰 카드 하나, 여러 개면 격자로 보여 준다 */
  patterns: LoadingPattern[];
  caption?: string;
}

export interface PatternMeta {
  title: string;
  /** 카드 아래 한 줄 설명 (평서체, 짧게) */
  hint: string;
  /** 한 바퀴 도는 시간(ms). 끝나면 처음부터 다시 재생한다 */
  period: number;
}
