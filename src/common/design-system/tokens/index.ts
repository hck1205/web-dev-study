import { lightColors } from "./palette";
import { toCssVarRefs } from "./utils";

export type { ThemeColors, ThemeMode } from "./types";
export { darkColors, lightColors } from "./palette";
export { toCssVars } from "./utils";

/** 색상: CSS 변수 참조. 라이트/다크가 자동으로 바뀐다. 예) `color: ${color.text};` */
export const color = toCssVarRefs(lightColors);

/** 간격 (4px 단위) */
export const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
} as const;

export const radius = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  full: "9999px",
} as const;

export const font = {
  sans: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", "Segoe UI", Roboto, sans-serif`,
  mono: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`,
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
  leading: { tight: 1.25, snug: 1.4, normal: 1.6, relaxed: 1.8 },
} as const;

export const shadow = {
  sm: "0 1px 2px rgb(15 23 42 / 0.06)",
  md: "0 4px 12px rgb(15 23 42 / 0.08)",
  lg: "0 12px 32px rgb(15 23 42 / 0.12)",
} as const;

export const layout = {
  header: "3.5rem",
  narrow: "44rem",
  wide: "72rem",
  toc: "15rem",
} as const;

export const zIndex = { header: 20, overlay: 30 } as const;

export const motion = {
  fast: "120ms ease",
  base: "200ms ease",
} as const;
