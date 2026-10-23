"use client";

import { useEffect, useMemo, useState } from "react";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import { localDate, recordApplied, stageOf, useGetStudyProgress, useSetStudyProgress } from "@/features/roadmap/atoms/study-progress";
import { APPLIED_QUESTIONS } from "../../registry/applied";
import { pickApplied } from "./applied-prompt.utils";

export function useAppliedPrompt() {
  const progress = useGetStudyProgress();
  const setProgress = useSetStudyProgress();
  const [today] = useState(() => localDate());
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [judged, setJudged] = useState<boolean | null>(null);

  const question = useMemo(() => pickApplied(APPLIED_QUESTIONS, progress, today), [progress, today]);

  // 질문이 바뀌면 입력을 비운다 (판정 뒤 다음 질문으로 넘어갈 때)
  useEffect(() => {
    setAnswer("");
    setRevealed(false);
    setJudged(null);
  }, [question?.id]);

  const posts = (question?.posts ?? []).map((slug) => {
    const post = getPostBySlug(slug);
    return { slug, title: post?.title ?? slug, href: postHref(slug), read: stageOf(progress, slug) >= 1 };
  });
  const unread = posts.filter((post) => !post.read);

  const judge = (knew: boolean) => {
    if (!question) return;
    setJudged(knew);
    setProgress((previous) => recordApplied(previous, question.id, question.posts, knew, answer));
  };

  const answered = Object.values(progress.applied ?? {});

  return {
    question,
    posts,
    unread,
    answer,
    setAnswer,
    revealed,
    reveal: () => setRevealed(true),
    judged,
    judge,
    total: APPLIED_QUESTIONS.length,
    done: answered.filter((result) => result.knew).length,
  };
}
