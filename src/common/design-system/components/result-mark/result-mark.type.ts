export interface ResultMarkProps {
  pass: boolean;
  /** 화면 낭독기용 이름. 예) "통과" / "실패", "맞음" / "틀림" */
  label: string;
  size?: "sm" | "md";
}
