import type { MotionPattern, PatternMeta } from "./motion-demo.type";

export const PATTERN_META: Record<MotionPattern, PatternMeta> = {
  gooey: { title: "Gooey", hint: "덩어리가 녹아 붙는다", period: 4000 },
  "slide-in": { title: "Slide in", hint: "가장자리에서 들어온다", period: 3600 },
  "spring-pop": { title: "Spring pop", hint: "지나쳤다가 자리 잡는다", period: 3400 },
  stagger: { title: "Stagger", hint: "하나씩 차례로 들어온다", period: 3400 },
  "shared-element": { title: "Shared element", hint: "카드가 상세 화면이 된다", period: 4600 },
  ripple: { title: "Ripple", hint: "누른 자리에서 퍼진다", period: 3000 },
  "path-draw": { title: "Path draw", hint: "선이 스스로 그려진다", period: 3600 },
  marquee: { title: "Marquee", hint: "옆으로 끝없이 흐른다", period: 4000 },
  tilt: { title: "Tilt", hint: "커서 쪽으로 기운다", period: 4800 },
  sticky: { title: "Sticky", hint: "머리글이 위에 붙는다", period: 5800 },
  "scroll-snap": { title: "Scroll snap", hint: "놓으면 칸에 맞춰 선다", period: 6000 },
  "scroll-reveal": { title: "Scroll reveal", hint: "선을 넘으면 나타난다", period: 5200 },
  "scroll-progress": { title: "Scroll progress", hint: "읽은 만큼 막대가 찬다", period: 5800 },
  "zoom-on-scroll": { title: "Zoom on scroll", hint: "다가올수록 커진다", period: 6000 },
  parallax: { title: "Parallax", hint: "배경이 느리게 따라온다", period: 6000 },
  "horizontal-scroll": { title: "Horizontal scroll", hint: "세로 스크롤이 가로로 바뀐다", period: 6000 },
  scrollytelling: { title: "Scrollytelling", hint: "글이 지나가면 그림이 바뀐다", period: 6800 },
};

/** a~b 구간에서 0→1로 가는 값 (구간 밖은 0 또는 1) */
export const progress = (t: number, a: number, b: number) => Math.min(1, Math.max(0, (t - a) / (b - a)));

/** 시계가 a~b 구간에 있으면 true. 움직임 줄이기(still)면 늘 마지막 장면(true)을 보여 준다 */
export const during = (t: number, a: number, b: number, still: boolean) => still || (t >= a && t < b);

/** 한 주기 동안 -1→1→-1로 부드럽게 오가는 값 */
export const swing = (t: number, period: number, phase = 0) => Math.sin((2 * Math.PI * t) / period + phase);

export const STAGGER_ROWS = 5;
export const STAGGER_GAP_MS = 70;

export const MARQUEE_ITEMS = ["#React", "#CSS", "#SVG", "#Motion", "#FLIP", "#UX"];

/** 틸트의 최대 기울기(도) */
export const TILT_MAX_DEG = 12;

/** 리플을 일으키는 두 번의 탭: 시각(ms)과 버튼 안의 위치(%) */
export const RIPPLE_TAPS = [
  { at: 500, x: 28, y: 50 },
  { at: 1700, x: 72, y: 40 },
];
