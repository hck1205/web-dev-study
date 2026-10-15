"use client";

import { useEffect } from "react";
import { applyTheme, useGetTheme, useSetTheme } from "@/common/atoms/theme";
import { THEME_ORDER } from "./theme-toggle.type";

const LABELS = {
  system: "테마: 시스템 설정",
  light: "테마: 라이트",
  dark: "테마: 다크",
} as const;

export function useThemeToggle() {
  const theme = useGetTheme();
  const setTheme = useSetTheme();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const next = THEME_ORDER[(THEME_ORDER.indexOf(theme) + 1) % THEME_ORDER.length];

  return { theme, label: LABELS[theme], cycle: () => setTheme(next) };
}
