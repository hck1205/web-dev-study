"use client";

import { ALL_QUESTIONS, QUIZ_TOPICS, quizHref } from "../../registry";

export function useQuizIndex() {
  return {
    total: ALL_QUESTIONS.length,
    topics: QUIZ_TOPICS.map((summary) => ({ ...summary, href: quizHref(summary.path) })),
  };
}
