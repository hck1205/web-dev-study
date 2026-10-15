import { css } from "@emotion/react";

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
    --bg: #fff;
  }
  html {
    -webkit-text-size-adjust: 100%;
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
    background: var(--bg);
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
  img {
    max-width: 100%;
    height: auto;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #111;
    }
    body {
      color: #ececec;
    }
    a {
      color: #7aa7ff;
    }
    pre {
      background: #1c1c1e;
    }
  }
`;
