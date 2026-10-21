"use client";

import { useInView } from "@/common/hooks/use-in-view";

export function useLoadingDemo() {
  // 화면에 들어온 뒤에만 시계를 돌린다
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return { ref, inView };
}
