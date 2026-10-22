import { atomWithStorage } from "jotai/utils";
import type { CheckpointResult, PostProgress, Stage, StudyProgress } from "./types";

/** 이 브라우저의 localStorage에만 저장된다. 기기를 옮길 때는 JSON으로 내보내고 가져온다 */
export const STUDY_PROGRESS_STORAGE_KEY = "study-progress";

export const EMPTY_PROGRESS: StudyProgress = { posts: {}, checkpoints: {} };

export const studyProgressAtom = atomWithStorage<StudyProgress>(STUDY_PROGRESS_STORAGE_KEY, EMPTY_PROGRESS);

export const STAGE_LABELS: Record<Stage, string> = {
  0: "안 봄",
  1: "읽음",
  2: "설명함",
  3: "적용함",
  4: "응용함",
};

/** 각 단계를 어떻게 얻는지 */
export const STAGE_HINTS: Record<Stage, string> = {
  0: "아직 열어 보지 않았다",
  1: "글과 그림을 끝까지 봤다",
  2: "핵심을 내 말로 다섯 문장 안에 적었다",
  3: "이 글의 퀴즈를 80% 이상 맞혔다",
  4: "다른 글과 엮는 질문에 답했다",
};

/** 관문 통과 기준 */
export const PASS_RATIO = 0.8;

/** 상자 번호별 다음 복습까지의 날 수 (어휘 사전과 같은 라이트너 간격) */
export const BOX_INTERVAL_DAYS = [0, 1, 2, 4, 7, 15] as const;
export const MAX_BOX = BOX_INTERVAL_DAYS.length - 1;

export function localDate(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(date: string, days: number) {
  const [y, m, d] = date.split("-").map(Number);
  return localDate(new Date(y, m - 1, d + days));
}

const emptyPost = (today: string): PostProgress => ({ stage: 0, box: 0, due: today, correct: 0, wrong: 0, updatedAt: today });

export const stageOf = (progress: StudyProgress, slug: string): Stage => progress.posts[slug]?.stage ?? 0;

/** 단계를 정한다. 낮은 단계로 되돌리는 것도 허용한다(잘못 눌렀을 때) */
export function setStage(progress: StudyProgress, slug: string, stage: Stage, today = localDate()): StudyProgress {
  const current = progress.posts[slug] ?? emptyPost(today);
  // 처음 읽음으로 바꾸면 내일 첫 복습이 잡히도록 상자 1에 둔다
  const box = current.box === 0 && stage >= 1 ? 1 : current.box;
  const due = current.box === 0 && stage >= 1 ? addDays(today, BOX_INTERVAL_DAYS[1]) : current.due;
  return { ...progress, posts: { ...progress.posts, [slug]: { ...current, stage, box, due, updatedAt: today } } };
}

/** 단계는 올리기만 한다 (퀴즈 통과처럼 자동으로 올릴 때) */
export const raiseStage = (progress: StudyProgress, slug: string, stage: Stage, today = localDate()) =>
  stageOf(progress, slug) >= stage ? progress : setStage(progress, slug, stage, today);

export function saveExplanation(progress: StudyProgress, slug: string, explanation: string, today = localDate()): StudyProgress {
  const current = progress.posts[slug] ?? emptyPost(today);
  const next = { ...current, explanation, updatedAt: today };
  const withText = { ...progress, posts: { ...progress.posts, [slug]: next } };
  // 다섯 문장 안의 설명을 남기면 "설명함"으로 올린다. 비우면 단계는 그대로 둔다
  return explanation.trim().length >= 20 ? raiseStage(withText, slug, 2, today) : withText;
}

/** 복습 결과를 반영한다. 맞으면 상자를 올리고, 틀리면 1번 상자(내일 다시)로 */
export function reviewPost(progress: StudyProgress, slug: string, knew: boolean, today = localDate()): StudyProgress {
  const current = progress.posts[slug] ?? emptyPost(today);
  const box = knew ? Math.min(current.box + 1, MAX_BOX) : 1;
  return {
    ...progress,
    posts: {
      ...progress.posts,
      [slug]: {
        ...current,
        stage: current.stage === 0 ? 1 : current.stage,
        box,
        due: addDays(today, BOX_INTERVAL_DAYS[box]),
        correct: current.correct + (knew ? 1 : 0),
        wrong: current.wrong + (knew ? 0 : 1),
        updatedAt: today,
      },
    },
  };
}

export function recordCheckpoint(progress: StudyProgress, id: string, score: number, total: number, today = localDate()): StudyProgress {
  const passed = total > 0 && score / total >= PASS_RATIO;
  const previous = progress.checkpoints[id];
  const result: CheckpointResult = { score, total, passedAt: passed ? today : previous?.passedAt, updatedAt: today };
  return { ...progress, checkpoints: { ...progress.checkpoints, [id]: result } };
}

export const isDue = (post: PostProgress | undefined, today = localDate()) => Boolean(post && post.stage >= 1 && post.due <= today);

/** 글 목록의 단계별 개수와 완료율. 완료는 "적용함" 이상으로 센다 */
export function stageCounts(slugs: string[], progress: StudyProgress) {
  const counts: Record<Stage, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
  for (const slug of slugs) counts[stageOf(progress, slug)] += 1;
  const started = slugs.length - counts[0];
  const done = counts[3] + counts[4];
  return { counts, total: slugs.length, started, done, percent: slugs.length ? Math.round((done / slugs.length) * 100) : 0 };
}

/** 내보낸 JSON이 이 모양인지 확인한다. 아니면 null */
export function parseProgress(text: string): StudyProgress | null {
  try {
    const data = JSON.parse(text) as Partial<StudyProgress>;
    if (!data || typeof data !== "object" || typeof data.posts !== "object" || data.posts === null) return null;
    return { posts: data.posts, checkpoints: typeof data.checkpoints === "object" && data.checkpoints ? data.checkpoints : {} };
  } catch {
    return null;
  }
}
