"use client";

import { useCallback, useEffect, useState } from "react";
import type { StepPlayer } from "./use-step-player.type";

/** 시각화를 한 단계씩 넘겨보는 상태. 자동 재생을 켜면 intervalMs마다 다음 단계로 간다. */
export function useStepPlayer(total: number, intervalMs = 1800): StepPlayer {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (index >= total - 1) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setIndex((current) => current + 1), intervalMs);
    return () => clearTimeout(timer);
  }, [playing, index, total, intervalMs]);

  const goTo = useCallback((next: number) => setIndex(Math.min(Math.max(next, 0), total - 1)), [total]);

  return {
    index,
    total,
    playing,
    intervalMs,
    isFirst: index === 0,
    isLast: index >= total - 1,
    next: () => goTo(index + 1),
    prev: () => {
      setPlaying(false);
      goTo(index - 1);
    },
    reset: () => {
      setPlaying(false);
      setIndex(0);
    },
    goTo: (value) => {
      setPlaying(false);
      goTo(value);
    },
    togglePlay: () => {
      // 마지막 단계에서 재생을 누르면 처음부터 다시 본다.
      if (index >= total - 1) setIndex(0);
      setPlaying((current) => !current);
    },
  };
}
