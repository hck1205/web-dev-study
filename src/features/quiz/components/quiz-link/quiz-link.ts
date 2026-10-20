"use client";

import { findQuizTopic } from "../../registry/summary";
import { quizHref } from "../../registry/utils";

export function useQuizLink(topic: string) {
  const summary = findQuizTopic(topic);
  return summary ? { label: summary.label, count: summary.count, href: quizHref(summary.path) } : null;
}
