"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const getReduced = () => window.matchMedia(REDUCED).matches;
const getServerReduced = () => false;

/**
 * 0부터 period까지 흐르다 다시 0으로 돌아가는 시계(ms). running일 때만 흐르고, 멈췄다 다시 돌면 이어서 흐른다.
 * 움직임 줄이기 설정이면 still이 true가 되고 시계는 멈춘다. 장면은 still일 때 마지막 모습을 그린다.
 */
export function useLoopClock(period: number, running: boolean) {
  const still = useSyncExternalStore(subscribe, getReduced, getServerReduced);
  const [t, setT] = useState(0);
  const elapsed = useRef(0);

  useEffect(() => {
    if (!running || still) return;
    let raf = 0;
    let last = 0;
    const startedAt = performance.now() - elapsed.current;
    const tick = (now: number) => {
      // 초당 30번 정도만 다시 그린다. 부드러운 이동은 CSS transition이 맡는다
      if (now - last > 33) {
        last = now;
        elapsed.current = (now - startedAt) % period;
        setT(elapsed.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [period, running, still]);

  return { t, still };
}
