import type { EmotionCache } from "@emotion/cache";
import type { ReactNode } from "react";

export interface EmotionRegistryProps {
  children: ReactNode;
}

export interface EmotionRegistryState {
  cache: EmotionCache;
  flush: () => string[];
}
