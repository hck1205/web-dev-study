import { POSTS } from "@/features/posts/registry";
import { FLAT_TOPICS, isInTopic, topicKey } from "@/features/topics/registry";
import { QUESTION_COUNTS } from "./counts.generated";
import type { TopicQuizSummary } from "./types";

// 문제 본문(questions/)을 import하지 않는다. 글·토픽 페이지의 퀴즈 링크가 이 모듈만 읽어서
// 페이지마다 문제 전체가 번들에 실리지 않게 한다.

/** 토픽(하위 토픽 포함)에 속한 글들의 문제 수 */
const countForTopic = (key: string) =>
  POSTS.reduce((sum, post) => sum + (isInTopic(post.topic, key) ? (QUESTION_COUNTS[post.slug] ?? 0) : 0), 0);

/** 문제가 하나 이상 있는 토픽만, 트리 순서(부모 → 자식)대로. */
export const QUIZ_TOPICS: TopicQuizSummary[] = FLAT_TOPICS.map(({ topic, path }) => ({
  key: topicKey(path),
  path,
  label: topic.label,
  depth: path.length - 1,
  count: countForTopic(topicKey(path)),
})).filter((summary) => summary.count > 0);

export const findQuizTopic = (key: string) => QUIZ_TOPICS.find((summary) => summary.key === key);
