import { color } from "../../tokens";
import type { BadgeTone } from "./badge.type";

export const BADGE_TONES: Record<BadgeTone, { fg: string; bg: string }> = {
  neutral: { fg: color.textMuted, bg: color.bgSubtle },
  accent: { fg: color.accent, bg: color.accentSoft },
  success: { fg: color.success, bg: color.successSoft },
  warning: { fg: color.warning, bg: color.warningSoft },
  danger: { fg: color.danger, bg: color.dangerSoft },
  info: { fg: color.info, bg: color.infoSoft },
};
