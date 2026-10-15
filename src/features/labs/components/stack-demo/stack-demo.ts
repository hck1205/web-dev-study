"use client";

import { useGetCount, useResetCount, useSetCount } from "@/features/labs/atoms/count";
import { useHelloQuery } from "@/features/labs/query/hello";

export function useStackDemo() {
  const count = useGetCount();
  const setCount = useSetCount();
  const resetCount = useResetCount();
  const hello = useHelloQuery();

  return {
    count,
    increase: () => setCount((c) => c + 1),
    resetCount,
    hello,
  };
}
