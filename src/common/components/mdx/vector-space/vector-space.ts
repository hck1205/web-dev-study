"use client";

import { useId } from "react";
import { useInView } from "@/common/hooks/use-in-view";
import { useStepPlayer } from "@/common/hooks/use-step-player";
import type { VectorSpaceProps } from "./vector-space.type";
import { groupColors, originOf } from "./vector-space.utils";

export function useVectorSpace({ points, groups, steps, height = 260 }: VectorSpaceProps) {
  const player = useStepPlayer(steps.length, 2200);
  const { ref, inView } = useInView<HTMLDivElement>();
  const uid = useId().replace(/:/g, "");
  const step = steps[player.index];
  const byId = Object.fromEntries(points.map((point) => [point.id, point]));

  // 이웃·경로에 포함된 점은 강조하고, 나머지는 흐리게 한다.
  const focus = new Set([...(step.neighbors ?? []), ...(step.path ?? [])]);

  return {
    player,
    ref,
    inView,
    uid,
    step,
    byId,
    focus,
    colors: groupColors(groups),
    origin: originOf(height),
  };
}
