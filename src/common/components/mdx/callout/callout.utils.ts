import { color } from "@/common/design-system";
import type { CalloutKind } from "./callout.type";

export const CALLOUT_TONES: Record<CalloutKind, { fg: string; bg: string; label: string }> = {
  note: { fg: color.info, bg: color.infoSoft, label: "Note" },
  tip: { fg: color.success, bg: color.successSoft, label: "Tip" },
  warning: { fg: color.warning, bg: color.warningSoft, label: "Warning" },
};
