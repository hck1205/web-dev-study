export type ThemeMode = "light" | "dark";

/** 테마에 따라 값이 달라지는 색상 토큰. 컴포넌트에서는 `color.*`(CSS 변수)로만 참조한다. */
export interface ThemeColors {
  bg: string;
  bgSubtle: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderStrong: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  onAccent: string;
  success: string;
  successSoft: string;
  warning: string;
  warningSoft: string;
  danger: string;
  dangerSoft: string;
  info: string;
  infoSoft: string;
  codeBg: string;
  codeBorder: string;
  syntaxComment: string;
  syntaxKeyword: string;
  syntaxString: string;
  syntaxNumber: string;
  syntaxTitle: string;
  syntaxType: string;
  /** 범주형 데이터 색 (고정 순서, 산점도는 3개까지). dataviz 검증 통과값 */
  series1: string;
  series2: string;
  series3: string;
}
