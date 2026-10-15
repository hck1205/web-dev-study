"use client";

import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useAppProviders() {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 30_000 } } }),
  );

  return { queryClient };
}
