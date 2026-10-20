import type { LoadingPattern, PatternMeta } from "./loading-demo.type";

export const PATTERN_META: Record<LoadingPattern, PatternMeta> = {
  spinner: { title: "Spinner", hint: "끝을 모를 때 돈다", period: 2400 },
  skeleton: { title: "Skeleton", hint: "모양 먼저, 내용은 나중", period: 3200 },
  "progress-bar": { title: "Progress bar", hint: "얼마나 남았는지 보인다", period: 3800 },
  "lazy-loading": { title: "Lazy loading", hint: "보일 때 불러온다", period: 3800 },
  "progress-ring": { title: "Progress ring", hint: "좁은 자리의 진행률", period: 3800 },
  "blur-up": { title: "Blur-up image", hint: "흐린 미리보기 뒤 선명하게", period: 3200 },
  stepper: { title: "Stepper", hint: "단계를 하나씩 지운다", period: 4200 },
  "infinite-scroll": { title: "Infinite scroll", hint: "끝에 닿으면 더 붙인다", period: 4800 },
  "streaming-text": { title: "Streaming text", hint: "토큰이 오는 대로 쓴다", period: 4600 },
  "optimistic-ui": { title: "Optimistic UI", hint: "먼저 바꾸고 나중에 확인", period: 4000 },
  "pull-to-refresh": { title: "Pull to refresh", hint: "당겨서 새로 받는다", period: 3800 },
  "loading-button": { title: "Loading button", hint: "누른 버튼이 상태를 말한다", period: 3600 },
};

/** a~b 구간에서 0→1로 가는 값 (구간 밖은 0 또는 1) */
export const progress = (t: number, a: number, b: number) => Math.min(1, Math.max(0, (t - a) / (b - a)));

export const STREAM_TEXT = "스켈레톤을 먼저 보여 주고, 토큰이 도착하는 대로 한 단어씩 이어 쓴다.";
