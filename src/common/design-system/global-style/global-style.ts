import { css } from "@emotion/react";
import { color, darkColors, font, lightColors, motion, radius, toCssVars } from "../tokens";

// 테마 우선순위: html[data-theme] 수동 선택 > OS 설정(prefers-color-scheme)
export const globalStyle = css`
  :root {
    color-scheme: light;
    ${toCssVars(lightColors)}
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      color-scheme: dark;
      ${toCssVars(darkColors)}
    }
  }
  :root[data-theme="dark"] {
    color-scheme: dark;
    ${toCssVars(darkColors)}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
  }
  body {
    margin: 0;
    background: ${color.bg};
    color: ${color.text};
    font-family: ${font.sans};
    font-size: ${font.size.base};
    line-height: ${font.leading.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition:
      background ${motion.base},
      color ${motion.base};
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    letter-spacing: -0.02em;
  }
  p {
    margin: 0;
  }
  a {
    color: ${color.accent};
    text-underline-offset: 0.2em;
  }
  a:hover {
    color: ${color.accentHover};
  }
  img,
  svg,
  video {
    max-width: 100%;
  }
  button {
    font: inherit;
    color: inherit;
  }
  ::selection {
    background: ${color.accentSoft};
  }
  :focus-visible {
    outline: 2px solid ${color.accent};
    outline-offset: 2px;
    border-radius: ${radius.sm};
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      transition: none !important;
      /* 애니메이션은 즉시 끝난 상태로 보여준다 (반복 애니메이션도 1회로) */
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
