import { atomWithStorage } from "jotai/utils";
import { THEME_STORAGE_KEY } from "./constants";
import type { ThemePreference } from "./types";

export const themeAtom = atomWithStorage<ThemePreference>(THEME_STORAGE_KEY, "system");

/** system이면 data-theme을 제거해 OS 설정(prefers-color-scheme)을 따르게 한다. */
export function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  if (preference === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", preference);
  }
}
