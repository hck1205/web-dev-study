"use client";

import { Box, Title } from "./callout.styled";
import type { CalloutProps } from "./callout.type";
import { CALLOUT_TONES } from "./callout.utils";

export function Callout({ kind = "note", title, children }: CalloutProps) {
  const { fg, bg, label } = CALLOUT_TONES[kind];

  return (
    <Box fg={fg} bg={bg} role="note">
      <Title fg={fg}>{title ?? label}</Title>
      {children}
    </Box>
  );
}
