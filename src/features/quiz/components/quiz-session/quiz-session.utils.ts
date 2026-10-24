import { getPostBySlug, postHref } from "@/features/posts/registry";
import type { QuizQuestion } from "../../registry";

/** 한 번에 푸는 문제 수 상한. 큰 토픽(수백~수천 문제)은 매번 이만큼만 무작위로 뽑는다. */
export const QUIZ_LIMIT = 30;

/** 글마다 골고루 섞이도록 전체를 섞은 뒤 앞에서 limit개를 자른다 */
export function pickQuestions(questions: QuizQuestion[], limit = QUIZ_LIMIT) {
  if (questions.length <= limit) return questions;
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, limit);
}

/** 문제가 나온 글 목록 (중복 없이, 처음 나온 순서) */
export const sourcePosts = (questions: QuizQuestion[]) =>
  [...new Set(questions.map((q) => q.post))]
    .map(getPostBySlug)
    .filter((post) => post !== undefined)
    .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug) }));
