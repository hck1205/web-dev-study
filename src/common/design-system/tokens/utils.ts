import type { ThemeColors } from "./types";

const kebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

const cssVarName = (key: string) => `--ds-color-${kebab(key)}`;

/** { bg: "#fff" } → "--ds-color-bg: #fff;" */
export function toCssVars(colors: ThemeColors): string {
  return Object.entries(colors)
    .map(([key, value]) => `${cssVarName(key)}: ${value};`)
    .join("\n");
}

/** { bg: ... } → { bg: "var(--ds-color-bg)" } */
export function toCssVarRefs(colors: ThemeColors): Record<keyof ThemeColors, string> {
  return Object.fromEntries(
    Object.keys(colors).map((key) => [key, `var(${cssVarName(key)})`]),
  ) as Record<keyof ThemeColors, string>;
}
