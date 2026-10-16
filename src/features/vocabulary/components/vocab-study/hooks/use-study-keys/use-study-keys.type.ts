export interface UseStudyKeysOptions {
  enabled: boolean;
  /** 1~4 (카드 모드에서는 1=모르겠다, 2=알았다) */
  onNumber: (index: number) => void;
  /** 스페이스: 카드 뒤집기 */
  onFlip?: () => void;
  /** Enter: 다음 */
  onNext?: () => void;
}
