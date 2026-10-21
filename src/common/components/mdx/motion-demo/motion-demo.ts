"use client";

import { useEffect, useRef, useState } from "react";

export function useMotionDemo() {
  // 화면에 보이는 동안만 시계를 돌린다. 스크롤해서 벗어나면 멈추고, 돌아오면 이어서 돈다
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
