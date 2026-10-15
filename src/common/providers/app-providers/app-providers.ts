"use client";

import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useServiceWorker } from "@/common/hooks/use-service-worker";

export function useAppProviders() {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 30_000 } } }),
  );

  useServiceWorker();

  return { queryClient };
}
