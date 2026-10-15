import type { CalloutKind } from "./callout.type";

export const CALLOUT_COLORS: Record<CalloutKind, string> = {
  note: "#0b5fff",
  tip: "#1a9d5b",
  warning: "#d98a00",
};

export const CALLOUT_LABELS: Record<CalloutKind, string> = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
};
