"use client";

import { useCallback, useEffect, useMemo } from "react";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import { useQuizRunner } from "@/features/quiz/hooks/use-quiz-runner";
import { questionsForPost } from "@/features/quiz/registry";
import { raiseStage, recordCheckpoint, useSetStudyProgress } from "../../atoms/study-progress";
import { findCheckpoint, roadmapCrumbs, roadmapHref } from "../../registry";

/** 관문 하나: 앞선 글들의 퀴즈를 모두 모아 푼다. 80% 이상이면 통과로 기록하고, 맞힌 글은 "적용함"으로 올린다 */
export function useCheckpointQuiz(id: string) {
  const checkpoint = findCheckpoint(id);
  const setProgress = useSetStudyProgress();

  const questions = useMemo(() => (checkpoint ? checkpoint.posts.flatMap((slug) => questionsForPost(slug)) : []), [checkpoint]);
  const sources = useMemo(
    () =>
      (checkpoint?.posts ?? [])
        .map(getPostBySlug)
        .filter((post) => post !== undefined)
        .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug) })),
    [checkpoint],
  );

  const onDone = useCallback(
    (score: number, total: number, wrongPosts: string[]) => {
      setProgress((previous) => {
        let next = recordCheckpoint(previous, id, score, total);
        // 이 관문에서 한 문제도 틀리지 않은 글은 적용 단계로 올린다
        for (const slug of checkpoint?.posts ?? []) if (!wrongPosts.includes(slug)) next = raiseStage(next, slug, 3);
        return next;
      });
    },
    [checkpoint, id, setProgress],
  );

  const runner = useQuizRunner({ questions, onDone });

  useEffect(() => {
    if (runner.phase !== "intro") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [runner.phase, runner.index]);

  return {
    checkpoint,
    crumbs: checkpoint ? [{ label: "로드맵", href: "/roadmap" }, ...roadmapCrumbs(checkpoint.roadmap)] : [],
    backHref: checkpoint ? roadmapHref(checkpoint.roadmap.path) : "/roadmap",
    questions,
    sources,
    runner,
  };
}
