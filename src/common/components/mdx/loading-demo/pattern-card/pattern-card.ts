"use client";

import { useLoopClock } from "../hooks/use-loop-clock";
import { PATTERN_META } from "../loading-demo.utils";
import type { PatternCardProps } from "./pattern-card.type";

export function usePatternCard({ pattern, running }: PatternCardProps) {
  const meta = PATTERN_META[pattern];
  const t = useLoopClock(meta.period, running);
  return { meta, t };
}
