"use client";

import { useCallback, useEffect, useState } from "react";
import { useQuizRunner } from "../../hooks/use-quiz-runner";
import type { QuizQuestion } from "../../registry/types";
import type { PostQuizProps } from "./post-quiz.type";

/**
 * 글 하나의 문제만 푼다. 문제 본문은 글 페이지 번들에 싣지 않고 버튼을 눌렀을 때 내려받는다
 * (registry/index.ts가 문제 전체를 모은다).
 */
export function usePostQuiz({ slug, onDone }: PostQuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const registry = await import("../../registry");
    setQuestions(registry.questionsForPost(slug));
    setLoading(false);
  }, [slug]);

  const runner = useQuizRunner({
    questions: questions ?? [],
    onDone: (score, total) => onDone?.(score, total),
  });

  // 문제를 받아 오면 바로 시작한다 (이미 "풀기"를 눌렀으니 시작 화면을 한 번 더 보이지 않는다)
  const { start } = runner;
  useEffect(() => {
    if (questions && questions.length > 0 && runner.phase === "intro") start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  return { questions, loading, load, runner, empty: questions !== null && questions.length === 0 };
}
