"use client";

import { Root } from "./badge.styled";
import type { BadgeProps } from "./badge.type";
import { BADGE_TONES } from "./badge.utils";

export function Badge({ tone = "neutral", children }: BadgeProps) {
  const { fg, bg } = BADGE_TONES[tone];

  return (
    <Root fg={fg} bg={bg}>
      {children}
    </Root>
  );
}
