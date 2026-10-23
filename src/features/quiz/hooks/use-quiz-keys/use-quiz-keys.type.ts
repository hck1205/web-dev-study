export interface UseQuizKeysOptions {
  enabled: boolean;
  /** 정답을 공개했는지. 공개 전에는 숫자 키, 공개 후에는 Enter를 받는다 */
  revealed: boolean;
  choiceCount: number;
  onPick: (displayIndex: number) => void;
  onNext: () => void;
}
