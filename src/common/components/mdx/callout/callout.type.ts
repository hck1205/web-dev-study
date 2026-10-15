import type { ReactNode } from "react";

export type CalloutKind = "note" | "tip" | "warning";

export interface CalloutProps {
  kind?: CalloutKind;
  title?: string;
  children: ReactNode;
}
