"use client";

import { useStepPlayer } from "@/common/hooks/use-step-player";
import type { AlgoTraceProps } from "./algo-trace.type";
import { diffMemory } from "./algo-trace.utils";

export function useAlgoTrace({ steps }: AlgoTraceProps) {
  const player = useStepPlayer(steps.length, 1500);
  const step = steps[player.index];
  const prevMemory = player.index > 0 ? (steps[player.index - 1].memory ?? []) : [];

  return { player, step, memory: diffMemory(prevMemory, step.memory ?? []) };
}
