import type { Breakpoint } from "./types";

// mobile-first: 기본 스타일은 모바일, 아래 기준 이상일 때 덮어쓴다.
export const BREAKPOINTS: Record<Breakpoint, number> = {
  tablet: 768,
  desktop: 1024,
};

export const mediaUp = (breakpoint: Breakpoint) => `@media (min-width: ${BREAKPOINTS[breakpoint]}px)`;
