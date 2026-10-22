"use client";

import { useCallback, useEffect, useState } from "react";
import type { QuizAnswer } from "@/features/quiz/hooks/use-quiz-runner";
import { reviewPost, useSetStudyProgress } from "@/features/roadmap/atoms/study-progress";
import { loadInterviewQuestions } from "../../registry";
import type { ReviewCard, ReviewPhase, ReviewResult, ReviewSessionProps } from "./review-session.type";
import { buildCards } from "./review-session.utils";

export function useReviewSession({ slugs, limit = 20 }: ReviewSessionProps) {
  const setProgress = useSetStudyProgress();
  const [phase, setPhase] = useState<ReviewPhase>(slugs.length === 0 ? "empty" : "loading");
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<QuizAnswer | undefined>(undefined);
  const [results, setResults] = useState<ReviewResult[]>([]);

  // 면접 질문(2.5MB)과 퀴즈 문제는 복습을 시작할 때만 내려받는다
  useEffect(() => {
    if (slugs.length === 0) return;
    let cancelled = false;
    Promise.all([loadInterviewQuestions(), import("@/features/quiz/registry")]).then(([interview, quiz]) => {
      if (cancelled) return;
      setCards(buildCards(slugs.slice(0, limit), interview, quiz.questionsForPost));
      setPhase("playing");
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const card = cards[index];

  const judge = useCallback(
    (knew: boolean) => {
      if (!card) return;
      setResults((previous) => [...previous, { slug: card.slug, knew }]);
      setProgress((previous) => reviewPost(previous, card.slug, knew));
      setRevealed(false);
      setQuizAnswer(undefined);
      if (index + 1 >= cards.length) setPhase("done");
      else setIndex(index + 1);
    },
    [card, cards.length, index, setProgress],
  );

  const pickChoice = useCallback(
    (displayIndex: number) => {
      if (!card?.quiz || quizAnswer) return;
      const picked = card.quiz.order[displayIndex];
      setQuizAnswer({ picked, correct: picked === card.quiz.question.answer });
    },
    [card, quizAnswer],
  );

  // 4지선다는 고른 뒤 "다음"을 누르면 맞았는지로 판정한다
  const nextAfterQuiz = useCallback(() => {
    if (quizAnswer) judge(quizAnswer.correct);
  }, [judge, quizAnswer]);

  const knew = results.filter((result) => result.knew).length;

  return {
    phase,
    cards,
    card,
    index,
    revealed,
    reveal: () => setRevealed(true),
    judge,
    quizAnswer,
    pickChoice,
    nextAfterQuiz,
    results,
    knew,
    missed: results.filter((result) => !result.knew),
  };
}
