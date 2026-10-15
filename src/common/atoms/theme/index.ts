"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { themeAtom } from "./utils";

export type { ThemePreference } from "./types";
export { THEME_STORAGE_KEY } from "./constants";
export { applyTheme } from "./utils";

export const useGetTheme = () => useAtomValue(themeAtom);
export const useSetTheme = () => useSetAtom(themeAtom);
export const useResetTheme = () => useResetAtom(themeAtom);
