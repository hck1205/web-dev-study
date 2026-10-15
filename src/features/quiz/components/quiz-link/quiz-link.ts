"use client";

import { findQuizTopic, quizHref } from "../../registry";

export function useQuizLink(topic: string) {
  const summary = findQuizTopic(topic);
  return summary ? { label: summary.label, count: summary.count, href: quizHref(summary.path) } : null;
}
