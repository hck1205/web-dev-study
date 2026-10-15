"use client";

import { useQuery } from "@tanstack/react-query";
import { getHello } from "@/features/labs/api/hello";
import type { UseHelloQueryOptions } from "./types";
import { helloKeys } from "./utils";

export type { UseHelloQueryOptions } from "./types";

// axios 호출(getHello)을 react-query로 감싼 훅
export function useHelloQuery(options?: UseHelloQueryOptions) {
  return useQuery({
    queryKey: helloKeys.all,
    queryFn: getHello,
    ...options,
  });
}
