import { POSTS } from "@/features/posts/registry";
import type { QuizQuestion } from "./types";

/** 문제 데이터가 잘못되면 빌드를 멈춘다 (없는 글, 정답 범위 밖, 중복 id). */
export function validateQuestions(questions: QuizQuestion[]) {
  const slugs = new Set(POSTS.map((post) => post.slug));
  const ids = new Set<string>();

  for (const q of questions) {
    if (ids.has(q.id)) throw new Error(`[quiz] 중복된 문제 id: ${q.id}`);
    ids.add(q.id);
    if (!slugs.has(q.post)) throw new Error(`[quiz] ${q.id}: 없는 글 slug "${q.post}"`);
    if (q.choices.length < 2 || q.choices.length > 5) throw new Error(`[quiz] ${q.id}: 보기는 2~5개여야 한다`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length) {
      throw new Error(`[quiz] ${q.id}: answer가 보기 범위를 벗어났다`);
    }
  }
  return questions;
}

/** 링크에 보이는 문제 수(counts.generated.ts)가 실제 문제와 다르면 빌드를 멈춘다. */
export function validateQuestionCounts(questions: QuizQuestion[], counts: Record<string, number>) {
  const actual: Record<string, number> = {};
  for (const q of questions) actual[q.post] = (actual[q.post] ?? 0) + 1;
  const slugs = new Set([...Object.keys(actual), ...Object.keys(counts)]);
  for (const slug of slugs) {
    if (actual[slug] !== counts[slug]) {
      throw new Error(`[quiz] ${slug}: 문제 수가 counts.generated.ts와 다르다. \`pnpm content:index\`를 실행한다`);
    }
  }
  return questions;
}

export const questionHref = (q: QuizQuestion) => `/posts/${q.post}${q.anchor ? `#${q.anchor}` : ""}`;

export const quizHref = (path: string[]) => `/quiz/${path.join("/")}`;
