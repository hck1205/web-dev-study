export interface SpeakButtonProps {
  /** 읽을 영어 문장이나 단어 */
  text: string;
  /** 화면 낭독기용 이름. 기본은 "발음 듣기" */
  label?: string;
  /** 느리게 읽기 (예문 따라 읽기용) */
  slow?: boolean;
  size?: "sm" | "md";
}
