"use client";

import { useId } from "react";
import { useInView } from "@/common/hooks/use-in-view";
import { useStepPlayer } from "@/common/hooks/use-step-player";
import type { SequenceDiagramProps } from "./sequence-diagram.type";
import { computeLayout } from "./sequence-diagram.utils";

export function useSequenceDiagram({ actors, steps }: SequenceDiagramProps) {
  const player = useStepPlayer(steps.length);
  // SVG marker id는 문서 안에서 유일해야 한다 (같은 글에 다이어그램이 여러 개일 수 있다).
  const uid = useId().replace(/:/g, "");
  // 화면에 들어온 뒤에만 애니메이션을 재생한다.
  const { ref, inView } = useInView<HTMLDivElement>();

  return {
    player,
    uid,
    ref,
    inView,
    layout: computeLayout(actors, steps.length),
    step: steps[player.index],
  };
}
