export * from "./keyframes";

/** 애니메이션 공통 이징 */
export const easing = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  /** 살짝 지나쳤다 돌아온다. 튀어나오는 강조에만 쓴다 */
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
