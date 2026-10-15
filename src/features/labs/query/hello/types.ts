import type { UseQueryOptions } from "@tanstack/react-query";
import type { HelloResponse } from "@/features/labs/api/hello";

export type UseHelloQueryOptions = Omit<UseQueryOptions<HelloResponse>, "queryKey" | "queryFn">;
