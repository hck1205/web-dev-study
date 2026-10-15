"use client";

import { Global, css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { useState, type ReactNode } from "react";
import { EmotionRegistry } from "@/lib/emotion-registry";

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family:
      system-ui,
      -apple-system,
      "Segoe UI",
      Roboto,
      "Noto Sans KR",
      sans-serif;
    line-height: 1.7;
    color: #1a1a1a;
    background: #fff;
  }
  a {
    color: #0b5fff;
  }
  pre {
    padding: 1rem;
    overflow-x: auto;
    border-radius: 8px;
    background: #f5f5f7;
  }
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.9em;
  }
  @media (prefers-color-scheme: dark) {
    body {
      color: #ececec;
      background: #111;
    }
    a {
      color: #7aa7ff;
    }
    pre {
      background: #1c1c1e;
    }
  }
`;

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 30_000 } } }),
  );

  return (
    <EmotionRegistry>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>{children}</JotaiProvider>
      </QueryClientProvider>
    </EmotionRegistry>
  );
}
