"use client";

import { Box, Title } from "./callout.styled";
import type { CalloutProps } from "./callout.type";
import { CALLOUT_COLORS, CALLOUT_LABELS } from "./callout.utils";

export function Callout({ kind = "note", title, children }: CalloutProps) {
  const accent = CALLOUT_COLORS[kind];

  return (
    <Box accent={accent} role="note">
      <Title accent={accent}>{title ?? CALLOUT_LABELS[kind]}</Title>
      {children}
    </Box>
  );
}
