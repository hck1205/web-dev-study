"use client";

import { useEffect, useRef } from "react";
import { getPostBySlug } from "@/features/posts/registry";
import { findTopicByKey, topicCrumbs } from "@/features/topics/registry";
import { questionHref } from "../../../registry";
import type { DeckItem, QuizAnswer } from "../quiz-session.type";

export function useQuestionCard(item: DeckItem, answer?: QuizAnswer) {
  const { question } = item;
  const post = getPostBySlug(question.post);
  const topic = post ? findTopicByKey(post.topic) : undefined;
  const nextRef = useRef<HTMLButtonElement>(null);
  const revealed = Boolean(answer);

  // 정답이 공개되면 해설이 보이게 스크롤하고, Enter로 바로 넘어가도록 다음 버튼에 포커스를 둔다.
  useEffect(() => {
    if (!revealed) return;
    const button = nextRef.current;
    button?.focus({ preventScroll: true });
    button?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [revealed]);

  return {
    question,
    nextRef,
    related: {
      postTitle: post?.title ?? question.post,
      postHref: questionHref(question),
      topics: topic ? topicCrumbs(topic) : [],
    },
  };
}
