"use client";

import { useEffect, useState } from "react";

/**
 * 0부터 period까지 흐르다 다시 0으로 돌아가는 시계(ms). running일 때만 흐른다.
 * 움직임 줄이기 설정이면 멈춘 채 마지막 장면(period)을 보여 준다.
 */
export function useLoopClock(period: number, running: boolean) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(period);
      return;
    }
    let raf = 0;
    let last = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      // 초당 30번 정도만 다시 그린다
      if (now - last > 33) {
        last = now;
        setT((now - startedAt) % period);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [period, running]);

  return t;
}
