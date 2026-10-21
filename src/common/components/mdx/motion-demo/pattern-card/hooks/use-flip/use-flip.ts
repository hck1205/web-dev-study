"use client";

import { useLayoutEffect, useRef } from "react";
import { anim } from "@/common/design-system";

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** 부모 기준 위치. 스크롤해도 값이 바뀌지 않게 화면 좌표 대신 부모와의 차이를 쓴다 */
function measure(el: HTMLElement): Box {
  const r = el.getBoundingClientRect();
  const p = el.parentElement?.getBoundingClientRect() ?? r;
  return { x: r.left - p.left, y: r.top - p.top, w: r.width, h: r.height };
}

/**
 * layoutKey가 바뀔 때마다 FLIP으로 옮긴다.
 * First(바뀌기 전 상자) → Last(바뀐 뒤 상자) → Invert(transform으로 원래 자리처럼 되돌림) → Play(transform을 풀며 이동).
 * 레이아웃은 한 번만 바뀌고, 움직이는 동안에는 transform만 바뀐다.
 */
export function useFlip<T extends HTMLElement>(layoutKey: string, durationMs = 700) {
  const ref = useRef<T>(null);
  const first = useRef<Box | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 이전 이동이 남아 있으면 지우고 진짜 자리(Last)를 잰다
    el.style.transition = "none";
    el.style.transform = "";
    const last = measure(el);
    const prev = first.current;
    first.current = last;
    if (!prev || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dx = prev.x - last.x;
    const dy = prev.y - last.y;
    const sx = prev.w / last.w;
    const sy = prev.h / last.h;
    if (dx === 0 && dy === 0 && sx === 1 && sy === 1) return;

    // Invert: 새 자리에서 옛 자리처럼 보이게 한다 (화면에 그리기 전이라 깜빡이지 않는다)
    el.style.transformOrigin = "top left";
    el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
    el.getBoundingClientRect(); // 되돌린 상태를 스타일에 확정시킨다
    // Play: transform을 풀면 새 자리로 미끄러진다
    el.style.transition = `transform ${durationMs}ms ${anim.easing.inOut}`;
    el.style.transform = "";
  }, [layoutKey, durationMs]);

  return ref;
}
