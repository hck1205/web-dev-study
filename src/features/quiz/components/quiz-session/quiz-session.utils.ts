import { getPostBySlug, postHref } from "@/features/posts/registry";
import type { QuizQuestion } from "../../registry";

/** 문제가 나온 글 목록 (중복 없이, 처음 나온 순서) */
export const sourcePosts = (questions: QuizQuestion[]) =>
  [...new Set(questions.map((q) => q.post))]
    .map(getPostBySlug)
    .filter((post) => post !== undefined)
    .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug) }));
