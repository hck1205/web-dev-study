/** [시각(ms), 스크롤 위치(rem)] 한 쌍. 키 사이는 부드럽게(smoothstep) 이어진다 */
export type ScrollKey = readonly [at: number, value: number];

const smooth = (x: number) => x * x * (3 - 2 * x);

export const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/** 시계 t에서의 스크롤 위치. 첫 키 앞은 첫 값, 마지막 키 뒤는 마지막 값이다 */
export function scrollAt(t: number, keys: readonly ScrollKey[]) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i += 1) {
    const [a, from] = keys[i - 1];
    const [b, to] = keys[i];
    if (t < b) return from + (to - from) * smooth((t - a) / (b - a));
  }
  return keys[keys.length - 1][1];
}

/** 손으로 굴린 듯한 스크롤 경로와, 움직임 줄이기일 때 보여 줄 멈춘 위치(still) */
export interface ScrollPlan {
  keys: readonly ScrollKey[];
  still: number;
}

/* ---------- sticky ---------- */

export const STICKY = {
  plan: {
    keys: [[0, 0], [600, 0], [1800, 3.2], [2500, 3.2], [3700, 6.6], [4700, 6.6], [5500, 0]],
    still: 3.6,
  } satisfies ScrollPlan,
  headH: 1.3,
  rowH: 0.9,
  sections: [
    { label: "A", y: 0, rows: 4 },
    { label: "B", y: 5.2, rows: 6 },
  ],
};

/** 위로 밀려 올라가던 머리글이 top: 0에 붙고, 다음 머리글이 오면 밀려난다 */
export function stickyTop(y: number, s: number, nextY: number | undefined, headH: number) {
  const stuck = Math.max(y - s, 0);
  return nextY === undefined ? stuck : Math.min(stuck, nextY - s - headH);
}

/* ---------- scroll snap ---------- */

export const SNAP = {
  cards: 4,
  /** 카드 폭과 간격(뷰포트 폭에 대한 %) */
  cardW: 78,
  gap: 6,
  segment: 1500,
  dragFrom: 500,
  dragTo: 900,
  /** 손가락을 놓기 전까지 끌린 거리(카드 한 칸에 대한 비율) */
  dragMax: 0.32,
};

/** 지금 맞춰 선 카드, 끌린 거리, 끌고 있는지 */
export function snapState(t: number, still: boolean) {
  if (still) return { index: 1, drag: 0, dragging: false, rewinding: false };
  const seg = Math.floor(t / SNAP.segment);
  const local = t % SNAP.segment;
  if (seg >= SNAP.cards - 1) {
    // 마지막 칸에서 잠깐 쉬었다가 처음으로 되돌아간다
    return local < SNAP.dragFrom
      ? { index: SNAP.cards - 1, drag: 0, dragging: false, rewinding: false }
      : { index: 0, drag: 0, dragging: false, rewinding: true };
  }
  if (local < SNAP.dragFrom) return { index: seg, drag: 0, dragging: false, rewinding: false };
  if (local < SNAP.dragTo) {
    const drag = ((local - SNAP.dragFrom) / (SNAP.dragTo - SNAP.dragFrom)) * SNAP.dragMax;
    return { index: seg, drag, dragging: true, rewinding: false };
  }
  return { index: seg + 1, drag: 0, dragging: false, rewinding: false };
}

/** 카드 index가 가운데에 오도록 트랙을 옮길 거리(뷰포트 폭에 대한 %) */
export const snapOffset = (index: number, drag: number) =>
  (100 - SNAP.cardW) / 2 - (index + drag) * (SNAP.cardW + SNAP.gap);

/* ---------- scroll reveal ---------- */

export const REVEAL = {
  plan: { keys: [[0, 0], [500, 0], [3500, 6.6]], still: 6.6 } satisfies ScrollPlan,
  cards: [1.2, 3.8, 6.4, 9.0, 11.6],
  cardH: 2.1,
  /** 이 선(뷰포트 위에서부터 rem)을 넘어 올라오면 나타난다 */
  threshold: 5.4,
  fadeOutAt: 4600,
};

/* ---------- scroll progress ---------- */

export const PROGRESS = {
  plan: {
    keys: [[0, 0], [500, 0], [3800, 9], [4600, 9], [5400, 0]],
    still: 5.76,
  } satisfies ScrollPlan,
  max: 9,
  lines: 22,
  lineGap: 0.72,
};

/* ---------- zoom on scroll ---------- */

export const ZOOM = {
  plan: {
    keys: [[0, 0], [500, 0], [2600, 2.4], [3400, 2.4], [4200, 4.2], [4800, 4.2], [5600, 0]],
    still: 2.4,
  } satisfies ScrollPlan,
  imageY: 2.8,
  imageH: 4,
  /** 이만큼 스크롤하면 원래 크기가 된다 */
  fullAt: 2.4,
  minScale: 0.55,
};

export const zoomScale = (s: number) =>
  ZOOM.minScale + (1 - ZOOM.minScale) * clamp(s / ZOOM.fullAt, 0, 1);

/* ---------- parallax ---------- */

export const PARALLAX = {
  plan: {
    keys: [[0, 0], [500, 0], [3600, 7], [4400, 7], [5400, 0]],
    still: 4,
  } satisfies ScrollPlan,
  bgSpeed: 0.3,
  cards: [0.8, 3.8, 6.8, 9.8, 12.8],
  blobs: [
    { x: 8, y: 1.5, r: 3.2 },
    { x: 62, y: 4.5, r: 2.6 },
    { x: 22, y: 8, r: 2.8 },
  ],
};

/* ---------- horizontal scroll ---------- */

export const HSCROLL = {
  plan: {
    keys: [[0, 0], [400, 0], [1400, 2.6], [3600, 8.6], [4200, 11], [4800, 11], [5600, 0]],
    still: 6.1,
  } satisfies ScrollPlan,
  /** 섹션이 붙기 시작하는 스크롤 위치와, 붙어 있는 동안의 거리 */
  pinAt: 2.6,
  pinFor: 6,
  sectionH: 4.4,
  cards: 4,
  cardW: 70,
  gap: 5,
  max: 11,
};

/** 세로 스크롤 s에서 섹션의 위치(rem)와 가로 진행률(0~1) */
export function hscrollState(s: number) {
  const { pinAt, pinFor } = HSCROLL;
  const top = s < pinAt ? pinAt - s : s < pinAt + pinFor ? 0 : pinAt + pinFor - s;
  const p = clamp((s - pinAt) / pinFor, 0, 1);
  return { top, p, pinned: s >= pinAt && s < pinAt + pinFor };
}

/* ---------- scrollytelling ---------- */

export const STORY = {
  plan: {
    keys: [[0, 0], [400, 0], [1400, 3], [2200, 3], [3200, 6], [4000, 6], [5000, 8], [5800, 8], [6500, 0]],
    still: 6,
  } satisfies ScrollPlan,
  graphicH: 3.2,
  steps: [2.6, 5.6, 8.6],
  stepH: 2.2,
  /** 글 영역 위에서부터 이 선을 넘으면 그 단계가 주인공이 된다 */
  trigger: 1.4,
  base: [0.42, 0.55, 0.32],
  grown: [0.72, 0.95, 0.66],
};

/** 트리거 선을 넘은 마지막 단계(없으면 -1) */
export const storyActive = (s: number) =>
  STORY.steps.reduce((active, y, i) => (y - s < STORY.trigger ? i : active), -1);

/** 지금 스크롤 위치(rem). 움직임 줄이기면 계획에 적힌 멈춘 위치를 쓴다 */
export const scrollOf = (plan: ScrollPlan, t: number, still: boolean) => (still ? plan.still : scrollAt(t, plan.keys));
