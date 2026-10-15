import { findTopicByKey } from "@/features/topics/registry";
import { formatDate, postHref } from "../../registry";
import type { Post } from "../../registry";

export function usePostItem(post: Post) {
  return {
    href: postHref(post.slug),
    topicLabel: findTopicByKey(post.topic)?.topic.label,
    date: formatDate(post.date),
  };
}
