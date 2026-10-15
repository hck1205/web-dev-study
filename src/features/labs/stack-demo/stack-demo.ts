"use client";

import { useQuery } from "@tanstack/react-query";
import { atom, useAtom } from "jotai";
import { httpClient } from "@/common/api/http-client";
import type { HelloResponse } from "@/features/labs/hello";

const countAtom = atom(0);

export function useStackDemo() {
  const [count, setCount] = useAtom(countAtom);
  const hello = useQuery({
    queryKey: ["hello"],
    queryFn: async () => (await httpClient.get<HelloResponse>("/hello")).data,
  });

  return {
    count,
    increase: () => setCount((c) => c + 1),
    hello,
  };
}
