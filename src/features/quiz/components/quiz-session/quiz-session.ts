"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import { findTopicByKey, topicCrumbs, topicKey } from "@/features/topics/registry";
import { questionsForTopic, type QuizQuestion } from "../../registry";
import { useQuizKeys } from "./hooks/use-quiz-keys";
import type { DeckItem, QuizAnswer, QuizPhase } from "./quiz-session.type";
import { buildDeck, countCorrect, sourceSlugs } from "./quiz-session.utils";

export function useQuizSession() {
  const params = useParams<{ path?: string[] }>();
  const key = topicKey(params.path ?? []);
  const found = findTopicByKey(key);
  const questions = useMemo(() => questionsForTopic(key), [key]);

  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [deck, setDeck] = useState<DeckItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const current = deck[index];
  const revealed = answers.length > index;

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

  // 다음 문제·결과로 넘어가면 카드가 화면 위쪽에서 시작하도록 맨 위로 올린다.
  useEffect(() => {
    if (phase !== "intro") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phase, index]);

  useQuizKeys({
    enabled: phase === "playing",
    revealed,
    choiceCount: current?.order.length ?? 0,
    onPick: pick,
    onNext: next,
  });

  const wrong = deck.filter((_, i) => answers[i] && !answers[i].correct).map((item) => item.question);

  return {
    found: Boolean(found) && questions.length > 0,
    label: found?.topic.label ?? "",
    crumbs: found ? topicCrumbs(found) : [],
    questions,
    sources: sourceSlugs(questions)
      .map(getPostBySlug)
      .filter((post) => post !== undefined)
      .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug) })),
    phase,
    deck,
    index,
    answers,
    current,
    currentAnswer: answers[index],
    score: countCorrect(answers),
    wrong,
    start: () => start(questions),
    retryWrong: () => start(wrong),
    pick,
    next,
  };
}
