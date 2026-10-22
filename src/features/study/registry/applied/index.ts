import { POSTS } from "@/features/posts/registry";
import { DATA_APPLIED } from "./data";
import { FE_APPLIED } from "./fe";
import { INFRA_APPLIED } from "./infra";
import { NET_APPLIED } from "./net";
import { SD_APPLIED } from "./sd";
import type { AppliedQuestion } from "./types";

export type { AppliedQuestion } from "./types";

/** 데이터가 어긋나면 빌드를 멈춘다: 중복 id, 없는 글, 글 수 범위 */
function validate(questions: AppliedQuestion[]) {
  const slugs = new Set(POSTS.map((post) => post.slug));
  const ids = new Set<string>();
  for (const question of questions) {
    if (ids.has(question.id)) throw new Error(`[applied] 중복된 id: ${question.id}`);
    ids.add(question.id);
    if (question.posts.length < 2 || question.posts.length > 4) throw new Error(`[applied] ${question.id}: 글은 2~4편이어야 한다`);
    for (const slug of question.posts) if (!slugs.has(slug)) throw new Error(`[applied] ${question.id}: 없는 글 "${slug}"`);
  }
  return questions;
}

/** 영역별 파일을 모은 응용 질문 전체 */
export const APPLIED_QUESTIONS: AppliedQuestion[] = validate([...NET_APPLIED, ...FE_APPLIED, ...DATA_APPLIED, ...INFRA_APPLIED, ...SD_APPLIED]);

export const findApplied = (id: string) => APPLIED_QUESTIONS.find((question) => question.id === id);
