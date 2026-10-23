"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { QuizQuestion } from "../../registry/types";
import { useQuizKeys } from "../use-quiz-keys";
import type { DeckItem, QuizAnswer, QuizPhase, UseQuizRunnerOptions } from "./use-quiz-runner.type";
import { buildDeck, countCorrect } from "./use-quiz-runner.utils";

/** 문제 묶음 하나를 푸는 상태 기계. 토픽 퀴즈, 로드맵 관문, 글 하나 퀴즈가 모두 이걸 쓴다. */
export function useQuizRunner({ questions, onDone }: UseQuizRunnerOptions) {
  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [deck, setDeck] = useState<DeckItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const current = deck[index];
  const revealed = answers.length > index;
  const score = countCorrect(answers);

  // 섞기(Math.random)는 시작 버튼을 누른 뒤에만 한다. 정적 HTML과 첫 렌더가 달라지지 않게.
  const start = useCallback((list: QuizQuestion[]) => {
    setDeck(buildDeck(list));
    setIndex(0);
    setAnswers([]);
    setPhase("playing");
  }, []);

  const pick = useCallback(
    (displayIndex: number) => {
      if (!current || revealed) return;
      const picked = current.order[displayIndex];
      setAnswers((prev) => [...prev, { picked, correct: picked === current.question.answer }]);
    },
    [current, revealed],
  );

  const next = useCallback(() => {
    if (!revealed) return;
    if (index + 1 >= deck.length) setPhase("done");
    else setIndex(index + 1);
  }, [revealed, index, deck.length]);

  // 결과 화면으로 넘어갈 때 한 번만 알린다
  useEffect(() => {
    if (phase !== "done") return;
    const wrongPosts = [...new Set(deck.filter((_, i) => answers[i] && !answers[i].correct).map((item) => item.question.post))];
    onDoneRef.current?.(countCorrect(answers), deck.length, wrongPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useQuizKeys({
    enabled: phase === "playing",
    revealed,
    choiceCount: current?.order.length ?? 0,
    onPick: pick,
    onNext: next,
  });

  const wrong = deck.filter((_, i) => answers[i] && !answers[i].correct).map((item) => item.question);

  return {
    phase,
    deck,
    index,
    answers,
    current,
    currentAnswer: answers[index],
    score,
    wrong,
    start: () => start(questions),
    retryWrong: () => start(wrong),
    pick,
    next,
  };
}

export type QuizRunner = ReturnType<typeof useQuizRunner>;
