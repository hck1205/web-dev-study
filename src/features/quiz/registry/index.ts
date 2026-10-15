import { POSTS } from "@/features/posts/registry";
import { FLAT_TOPICS, isInTopic, topicKey } from "@/features/topics/registry";
import { QUESTION_SETS } from "./questions";
import type { QuizQuestion, TopicQuizSummary } from "./types";
import { validateQuestions } from "./utils";

export type { QuizQuestion, TopicQuizSummary } from "./types";
export { questionHref, quizHref } from "./utils";

export const ALL_QUESTIONS = validateQuestions(QUESTION_SETS.flat());

const postTopic = new Map(POSTS.map((post) => [post.slug, post.topic]));

/** 토픽 키("programming/backend")에 속한 글(하위 토픽 포함)의 문제를 모은다. */
export const questionsForTopic = (key: string): QuizQuestion[] =>
  ALL_QUESTIONS.filter((q) => isInTopic(postTopic.get(q.post) ?? "", key));

export const questionsForPost = (slug: string) => ALL_QUESTIONS.filter((q) => q.post === slug);

/** 문제가 하나 이상 있는 토픽만, 트리 순서(부모 → 자식)대로. */
export const QUIZ_TOPICS: TopicQuizSummary[] = FLAT_TOPICS.map(({ topic, path }) => ({
  key: topicKey(path),
  path,
  label: topic.label,
  depth: path.length - 1,
  count: questionsForTopic(topicKey(path)).length,
})).filter((summary) => summary.count > 0);

export const findQuizTopic = (key: string) => QUIZ_TOPICS.find((summary) => summary.key === key);
