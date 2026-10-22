"use client";

import { useCallback, useEffect, useState } from "react";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import { PASS_RATIO, type Stage, raiseStage, saveExplanation, setStage, stageOf, useGetStudyProgress, useSetStudyProgress } from "../../atoms/study-progress";
import { placementOf, roadmapCrumbs, roadmapHref } from "../../registry";

/** 글 페이지 끝의 학습 패널: 로드맵 위치, 앞뒤 글, 단계 체크, 내 말로 설명하기, 글 퀴즈 */
export function useStudyPanel(slug: string) {
  const progress = useGetStudyProgress();
  const setProgress = useSetStudyProgress();
  const placement = placementOf(slug);
  const post = getPostBySlug(slug);
  const saved = progress.posts[slug];
  const stage = stageOf(progress, slug);

  const [draft, setDraft] = useState(saved?.explanation ?? "");
  const [savedNote, setSavedNote] = useState<string | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);

  // 다른 글로 넘어가면 그 글의 설명을 다시 채운다 (localStorage는 첫 렌더 뒤에 읽히므로 저장값이 늦게 올 수 있다)
  useEffect(() => {
    setDraft(saved?.explanation ?? "");
    setSavedNote(null);
    setQuizOpen(false);
  }, [slug, saved?.explanation]);

  const toggleStage = useCallback(
    (target: Stage) => {
      // 이미 그 단계 이상이면 한 단계 아래로 되돌리고, 아니면 그 단계로 올린다
      setProgress((previous) => setStage(previous, slug, stageOf(previous, slug) >= target ? ((target - 1) as Stage) : target));
    },
    [setProgress, slug],
  );

  const save = useCallback(() => {
    setProgress((previous) => saveExplanation(previous, slug, draft));
    setSavedNote(draft.trim().length >= 20 ? "저장했다. 아래 원문 요약과 비교해 빠진 핵심이 있는지 본다." : "저장했다. 스무 글자가 넘으면 \"설명함\"으로 올라간다.");
  }, [draft, setProgress, slug]);

  const onQuizDone = useCallback(
    (score: number, total: number) => {
      if (total > 0 && score / total >= PASS_RATIO) setProgress((previous) => raiseStage(previous, slug, 3));
    },
    [setProgress, slug],
  );

  const neighbor = (target?: string) => {
    const neighborPost = target ? getPostBySlug(target) : undefined;
    return neighborPost ? { title: neighborPost.title, href: postHref(neighborPost.slug) } : undefined;
  };

  return {
    post,
    placement,
    stage,
    box: saved?.box ?? 0,
    due: saved?.due,
    crumbs: placement ? roadmapCrumbs(placement.roadmap) : [],
    roadmapHref: placement ? roadmapHref(placement.roadmap.path) : "/roadmap",
    position: placement ? { index: placement.index + 1, total: placement.roadmap.posts.length } : undefined,
    prev: neighbor(placement?.prev),
    next: neighbor(placement?.next),
    draft,
    setDraft,
    save,
    savedNote,
    explained: Boolean(saved?.explanation && saved.explanation.trim().length >= 20),
    quizOpen,
    openQuiz: () => setQuizOpen(true),
    onQuizDone,
    toggleStage,
  };
}
