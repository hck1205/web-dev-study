import { TOPIC_TREE, findTopic } from "@/features/topics/registry";
import { DIFFICULTY_LABELS, formatDate, postHref, tagHref, tagLabel, tagSlug } from "../../registry";
import type { Post } from "../../registry";

const DIFFICULTY_TONE = { easy: "success", medium: "warning", hard: "danger" } as const;

export function usePostItem(post: Post) {
  const topic = findTopic(TOPIC_TREE, post.topic.split("/"));

  return {
    href: postHref(post.slug),
    topicLabel: topic?.topic.label,
    date: formatDate(post.date),
    tags: post.tags.map((tag) => ({ slug: tagSlug(tag), label: tagLabel(tag), href: tagHref(tag) })),
    difficulty: post.difficulty && { label: DIFFICULTY_LABELS[post.difficulty], tone: DIFFICULTY_TONE[post.difficulty] },
  };
}
