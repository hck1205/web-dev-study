"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/common/design-system";
import { QuizPlayer } from "../quiz-player";
import { useQuizSession } from "./quiz-session";
import { IntroMeta, Sources, SourcesToggle } from "./quiz-session.styled";
import { CrumbLinks } from "@/common/components/crumb-links";

export function QuizSession() {
  const quiz = useQuizSession();

  if (!quiz.found) {
    return (
      <Container size="narrow">
        <PageHeader title="이 토픽에는 아직 문제가 없다" lead={<Link href="/quiz">다른 토픽 퀴즈 보기</Link>} />
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <CrumbLinks items={[{ label: "퀴즈", href: "/quiz" }, ...quiz.crumbs.slice(0, -1)]} />
          </nav>
        }
        title={`${quiz.label} 퀴즈`}
      />
      <QuizPlayer
        runner={quiz.runner}
        intro={
          <>
            <IntroMeta>
              {quiz.sampled
                ? `${quiz.questions.length}문제 중 ${quiz.picked}문제를 무작위로 낸다. 다시 풀면 다른 문제가 나온다.`
                : `${quiz.questions.length}문제. 문제와 보기 순서는 풀 때마다 섞인다.`}{" "}
              키보드로는 숫자 키로 고르고 Enter로 넘어간다.
            </IntroMeta>
            <Sources>
              <SourcesToggle>
                <summary>문제가 나온 글 {quiz.sources.length}편</summary>
                <ul>
                  {quiz.sources.map((post) => (
                    <li key={post.slug}>
                      <Link href={post.href}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              </SourcesToggle>
            </Sources>
          </>
        }
      />
    </Container>
  );
}
