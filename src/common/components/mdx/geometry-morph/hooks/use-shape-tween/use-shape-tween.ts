"use client";

import { useEffect, useRef, useState } from "react";
import type { ShapeFrame } from "../../geometry-morph.type";
import { easeInOutCubic, lerpFrame } from "./use-shape-tween.utils";

/**
 * 단계가 바뀌면 도형 꼭짓점을 현재 위치에서 목표 위치로 부드럽게 옮긴다.
 * CSS로는 polygon 좌표를 모든 브라우저에서 보간할 수 없어서 requestAnimationFrame으로 직접 계산한다.
 * 움직임 줄이기 설정이면 바로 목표 위치로 간다.
 */
export function useShapeTween(frames: ShapeFrame[], index: number, duration = 900) {
  const [frame, setFrame] = useState(frames[index]);
  const currentRef = useRef(frames[index]);
  const framesRef = useRef(frames);
  framesRef.current = frames;

  useEffect(() => {
    const target = framesRef.current[index];
    const from = currentRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      currentRef.current = target;
      setFrame(target);
      return;
    }

    let raf = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startedAt) / duration);
      const next = lerpFrame(from, target, easeInOutCubic(t));
      currentRef.current = next;
      setFrame(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, duration]);

  return frame;
}
