import { POSTS } from "@/features/posts/registry";
import { FLAT_TOPICS, isInTopic, topicKey } from "@/features/topics/registry";
import { QUESTION_SETS } from "./questions";
import { QUESTION_COUNTS } from "./counts.generated";
import type { QuizQuestion } from "./types";
import { validateQuestionCounts, validateQuestions } from "./utils";

export type { QuizQuestion, TopicQuizSummary } from "./types";
export { questionHref, quizHref } from "./utils";
export { findQuizTopic, QUIZ_TOPICS } from "./summary";

export const ALL_QUESTIONS = validateQuestionCounts(validateQuestions(QUESTION_SETS.flat()), QUESTION_COUNTS);

const postTopic = new Map(POSTS.map((post) => [post.slug, post.topic]));

/** 토픽 키("programming/backend")에 속한 글(하위 토픽 포함)의 문제를 모은다. */
export const questionsForTopic = (key: string): QuizQuestion[] =>
  ALL_QUESTIONS.filter((q) => isInTopic(postTopic.get(q.post) ?? "", key));

export const questionsForPost = (slug: string) => ALL_QUESTIONS.filter((q) => q.post === slug);
