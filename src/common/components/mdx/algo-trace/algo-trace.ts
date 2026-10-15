"use client";

import { useStepPlayer } from "@/common/hooks/use-step-player";
import type { AlgoTraceProps } from "./algo-trace.type";

export function useAlgoTrace({ steps }: AlgoTraceProps) {
  const player = useStepPlayer(steps.length, 1500);
  return { player, step: steps[player.index] };
}
