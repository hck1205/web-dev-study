import { DIFFICULTY_LABELS, formatDate, getCategory, postHref } from "../../registry";
import type { Post } from "../../registry";

const DIFFICULTY_TONE = { easy: "success", medium: "warning", hard: "danger" } as const;

export function usePostCard(post: Post) {
  return {
    href: postHref(post.slug),
    category: getCategory(post.category),
    date: formatDate(post.date),
    difficulty: post.difficulty && { label: DIFFICULTY_LABELS[post.difficulty], tone: DIFFICULTY_TONE[post.difficulty] },
  };
}
