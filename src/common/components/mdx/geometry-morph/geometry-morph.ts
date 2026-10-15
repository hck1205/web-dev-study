"use client";

import { useMemo } from "react";
import { useInView } from "@/common/hooks/use-in-view";
import { useStepPlayer } from "@/common/hooks/use-step-player";
import type { GeometryMorphProps } from "./geometry-morph.type";
import { resolveFrames } from "./geometry-morph.utils";
import { useShapeTween } from "./hooks/use-shape-tween";

export function useGeometryMorph({ shapes, steps }: GeometryMorphProps) {
  const player = useStepPlayer(steps.length, 2600);
  const { ref, inView } = useInView<HTMLDivElement>();
  const frames = useMemo(() => resolveFrames(shapes, steps), [shapes, steps]);
  // 화면에 들어오기 전에는 첫 단계에 머문다.
  const index = inView ? player.index : 0;
  const frame = useShapeTween(frames, index);
  const step = steps[index];

  return { player, ref, inView, index, step, frame };
}
