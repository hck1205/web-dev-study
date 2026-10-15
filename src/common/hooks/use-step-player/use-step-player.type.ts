export interface StepPlayer {
  /** 현재 단계 (0부터) */
  index: number;
  total: number;
  playing: boolean;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  prev: () => void;
  reset: () => void;
  goTo: (index: number) => void;
  togglePlay: () => void;
}
