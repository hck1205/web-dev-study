"use client";

import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useEmotionRegistry } from "./emotion-registry";
import type { EmotionRegistryProps } from "./emotion-registry.type";

// App Router에서 Emotion 스타일을 SSR 시점에 <head>로 내보낸다.
export function EmotionRegistry({ children }: EmotionRegistryProps) {
  const { cache, collectStyles } = useEmotionRegistry();

  useServerInsertedHTML(() => {
    const collected = collectStyles();
    if (!collected) return null;

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${collected.names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: collected.styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
