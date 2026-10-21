"use client";

import { useEffect, useState } from "react";
import type { Point } from "../../network-topology.type";
import { easeInOut } from "./use-packet-motion.utils";

/**
 * 패킷을 꺾은선을 따라 처음부터 끝까지 옮긴다. runKey가 바뀔 때마다 다시 출발한다.
 * 꺾은선을 따라가는 이동은 CSS만으로 모든 브라우저에서 할 수 없어서 requestAnimationFrame으로 계산한다.
 * 움직임 줄이기 설정이면 바로 도착한 상태가 된다.
 */
export function usePacketMotion(at: (t: number) => Point, runKey: string, duration: number, enabled: boolean) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(1);
      return;
    }
    let raf = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setT(progress);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    setT(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [runKey, duration, enabled]);

  return { position: at(easeInOut(t)), arrived: t >= 1 };
}
