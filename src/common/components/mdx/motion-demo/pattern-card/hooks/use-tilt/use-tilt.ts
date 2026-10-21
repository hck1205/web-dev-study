"use client";

import { useState, type PointerEvent } from "react";
import type { TiltPointer } from "./use-tilt.type";

/**
 * 마우스·펜이 올라와 있으면 커서 위치를 돌려준다. 손가락(touch)은 hover가 없으니 무시하고,
 * pointer가 null이면 보여 주는 쪽에서 자동 재생으로 대신한다.
 */
export function useTilt(enabled: boolean) {
  const [pointer, setPointer] = useState<TiltPointer | null>(null);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!enabled || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    setPointer({ px: (e.clientX - r.left) / r.width - 0.5, py: (e.clientY - r.top) / r.height - 0.5 });
  };
  const onPointerLeave = () => setPointer(null);

  return { pointer, handlers: { onPointerMove, onPointerLeave } };
}
