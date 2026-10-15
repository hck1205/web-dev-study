"use client";

import { IconButton, MonitorIcon, MoonIcon, SunIcon } from "@/common/design-system";
import { useThemeToggle } from "./theme-toggle";

const ICONS = { system: MonitorIcon, light: SunIcon, dark: MoonIcon } as const;

export function ThemeToggle() {
  const { theme, label, cycle } = useThemeToggle();
  const Icon = ICONS[theme];

  return (
    <IconButton label={label} onClick={cycle}>
      <Icon />
    </IconButton>
  );
}
