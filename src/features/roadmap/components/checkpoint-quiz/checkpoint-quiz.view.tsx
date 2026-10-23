"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/common/design-system";
import { CrumbLinks } from "@/common/components/crumb-links";
import { QuizPlayer } from "@/features/quiz/components/quiz-player";
import { useCheckpointQuiz } from "./checkpoint-quiz";
import { IntroMeta, Sources } from "./checkpoint-quiz.styled";
import type { CheckpointQuizProps } from "./checkpoint-quiz.type";

export function CheckpointQuiz({ id }: CheckpointQuizProps) {
  const quiz = useCheckpointQuiz(id);

  if (!quiz.checkpoint || quiz.questions.length === 0) {
    return (
      <Container size="narrow">
        <PageHeader title="없는 관문이다" lead={<Link href="/roadmap">로드맵 목록으로</Link>} />
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <CrumbLinks items={quiz.crumbs} />
          </nav>
        }
        title={quiz.checkpoint.label}
      />
      <QuizPlayer
        runner={quiz.runner}
        home={{ href: quiz.backHref, label: "로드맵으로" }}
        intro={
          <>
            <IntroMeta>
              앞의 글 {quiz.sources.length}편에서 뽑은 {quiz.questions.length}문제. 80% 이상 맞히면 관문을 통과하고, 한 문제도 틀리지 않은 글은 "적용함"으로 올라간다.
            </IntroMeta>
            <Sources>
              <p>문제가 나온 글</p>
              <ul>
                {quiz.sources.map((post) => (
                  <li key={post.slug}>
                    <Link href={post.href}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </Sources>
          </>
        }
      />
    </Container>
  );
}
