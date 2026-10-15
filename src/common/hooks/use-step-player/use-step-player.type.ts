export interface StepPlayer {
  /** 현재 단계 (0부터) */
  index: number;
  total: number;
  playing: boolean;
  /** 자동 재생 시 한 단계에 머무는 시간 (ms) */
  intervalMs: number;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  prev: () => void;
  reset: () => void;
  goTo: (index: number) => void;
  togglePlay: () => void;
}
