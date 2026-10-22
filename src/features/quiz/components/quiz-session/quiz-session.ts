"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { findTopicByKey, topicCrumbs, topicKey } from "@/features/topics/registry";
import { useQuizRunner } from "../../hooks/use-quiz-runner";
import { questionsForTopic } from "../../registry";
import { sourcePosts } from "./quiz-session.utils";

export function useQuizSession() {
  const params = useParams<{ path?: string[] }>();
  const key = topicKey(params.path ?? []);
  const found = findTopicByKey(key);
  const questions = useMemo(() => questionsForTopic(key), [key]);
  const sources = useMemo(() => sourcePosts(questions), [questions]);
  const runner = useQuizRunner({ questions });

  // 다음 문제·결과로 넘어가면 카드가 화면 위쪽에서 시작하도록 맨 위로 올린다.
  useEffect(() => {
    if (runner.phase !== "intro") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [runner.phase, runner.index]);

  return {
    found: Boolean(found) && questions.length > 0,
    label: found?.topic.label ?? "",
    crumbs: found ? topicCrumbs(found) : [],
    questions,
    sources,
    runner,
  };
}
