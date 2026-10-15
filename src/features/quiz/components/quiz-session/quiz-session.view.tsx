"use client";

import Link from "next/link";
import { Button, Container, PageHeader } from "@/common/design-system";
import { QuestionCard } from "./question-card";
import { QuizProgress } from "./quiz-progress";
import { QuizResult } from "./quiz-result";
import { useQuizSession } from "./quiz-session";
import { Intro, IntroMeta, Sources } from "./quiz-session.styled";
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

      {quiz.phase === "intro" && (
        <Intro>
          <IntroMeta>
            {quiz.questions.length}문제. 문제와 보기 순서는 풀 때마다 섞인다. 키보드로는 숫자 키로 고르고 Enter로 넘어간다.
          </IntroMeta>
          <Button size="lg" onClick={quiz.start}>
            시작
          </Button>
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
        </Intro>
      )}

      {quiz.phase === "playing" && quiz.current && (
        <>
          <QuizProgress total={quiz.deck.length} index={quiz.index} answers={quiz.answers} score={quiz.score} />
          <QuestionCard
            key={`${quiz.current.question.id}-${quiz.index}`}
            item={quiz.current}
            number={quiz.index + 1}
            answer={quiz.currentAnswer}
            isLast={quiz.index + 1 === quiz.deck.length}
            onPick={quiz.pick}
            onNext={quiz.next}
          />
        </>
      )}

      {quiz.phase === "done" && (
        <QuizResult
          deck={quiz.deck}
          answers={quiz.answers}
          score={quiz.score}
          onRetryWrong={quiz.retryWrong}
          onRestart={quiz.start}
        />
      )}
    </Container>
  );
}
