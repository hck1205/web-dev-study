import { POSTS, type Post } from "@/features/posts";
import { VOCABULARY } from "@/features/vocabulary/registry";
import { isInTopic, topicKey, topicLinkHref, type Topic } from "../../registry";
import type { TopicLinkData } from "./topic-groups.type";

/**
 * 글 대신 별도 페이지로 가는 토픽(topic.href)의 항목 수. 글 수와 함께 토픽 숫자에 더해진다.
 * 이런 토픽을 새로 만들면 여기에 그 페이지의 항목 수를 등록한다.
 */
const PAGE_ITEM_COUNTS: Record<string, number> = {
  "self-development/english/vocabulary": VOCABULARY.length,
};

/** 하위 토픽까지 포함한 글 수 + 별도 페이지 항목 수 */
export function countInTopic(key: string, posts: Post[] = POSTS) {
  const postCount = posts.filter((post) => isInTopic(post.topic, key)).length;
  const pageCount = Object.entries(PAGE_ITEM_COUNTS)
    .filter(([pageKey]) => isInTopic(pageKey, key))
    .reduce((sum, [, count]) => sum + count, 0);
  return postCount + pageCount;
}

export function toLinkData(topic: Topic, parentPath: string[], posts: Post[] = POSTS): TopicLinkData {
  const path = [...parentPath, topic.id];
  const key = topicKey(path);

  return {
    key,
    label: topic.label,
    description: topic.description,
    href: topicLinkHref(topic, path),
    count: countInTopic(key, posts),
  };
}
