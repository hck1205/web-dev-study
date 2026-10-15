"use client";

import { useState } from "react";
import { collectInsertedStyles, createRegistryState } from "./emotion-registry.utils";

export function useEmotionRegistry() {
  const [state] = useState(createRegistryState);

  return {
    cache: state.cache,
    collectStyles: () => collectInsertedStyles(state),
  };
}
