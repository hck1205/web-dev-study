"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { findTopicByKey, topicCrumbs, topicKey } from "@/features/topics/registry";
import { useQuizRunner } from "../../hooks/use-quiz-runner";
import { questionsForTopic } from "../../registry";
import { pickQuestions, QUIZ_LIMIT, sourcePosts } from "./quiz-session.utils";

export function useQuizSession() {
  const params = useParams<{ path?: string[] }>();
  const key = topicKey(params.path ?? []);
  const found = findTopicByKey(key);
  const questions = useMemo(() => questionsForTopic(key), [key]);
  const sources = useMemo(() => sourcePosts(questions), [questions]);
  // 큰 토픽은 QUIZ_LIMIT개만 뽑아 낸다. 다시 시작할 때마다 새로 뽑는다.
  const [round, setRound] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- round가 바뀔 때마다 다시 뽑는 것이 목적이다
  const picked = useMemo(() => pickQuestions(questions), [questions, round]);
  const runner = useQuizRunner({ questions: picked });
  const start = useCallback(() => {
    runner.start();
    setRound((value) => value + 1);
  }, [runner]);

  // 다음 문제·결과로 넘어가면 카드가 화면 위쪽에서 시작하도록 맨 위로 올린다.
  useEffect(() => {
    if (runner.phase !== "intro") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [runner.phase, runner.index]);

  return {
    found: Boolean(found) && questions.length > 0,
    label: found?.topic.label ?? "",
    crumbs: found ? topicCrumbs(found) : [],
    questions,
    picked: picked.length,
    sampled: picked.length < questions.length,
    limit: QUIZ_LIMIT,
    sources,
    runner: { ...runner, start },
  };
}
