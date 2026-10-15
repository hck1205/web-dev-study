"use client";

import { Global } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { globalStyle } from "@/common/design-system";
import { EmotionRegistry } from "../emotion-registry";
import { useAppProviders } from "./app-providers";
import type { AppProvidersProps } from "./app-providers.type";

export function AppProviders({ children }: AppProvidersProps) {
  const { queryClient } = useAppProviders();

  return (
    <EmotionRegistry>
      <Global styles={globalStyle} />
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>{children}</JotaiProvider>
      </QueryClientProvider>
    </EmotionRegistry>
  );
}
