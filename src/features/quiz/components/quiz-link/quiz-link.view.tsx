"use client";

import { ArrowRightIcon } from "@/common/design-system";
import { useQuizLink } from "./quiz-link";
import { Meta, Root, Title } from "./quiz-link.styled";
import type { QuizLinkProps } from "./quiz-link.type";

/** 토픽 퀴즈로 가는 한 줄 링크. 토픽 페이지와 글 끝에 둔다. */
export function QuizLink({ topic }: QuizLinkProps) {
  const quiz = useQuizLink(topic);
  if (!quiz) return null;

  return (
    <Root href={quiz.href}>
      <Title>{quiz.label} 퀴즈 풀기</Title>
      <Meta>{quiz.count}문제</Meta>
      <ArrowRightIcon size={16} aria-hidden />
    </Root>
  );
}
