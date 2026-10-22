"use client";

import { Button } from "@/common/design-system";
import { QuestionCard } from "./question-card";
import { Intro } from "./quiz-player.styled";
import type { QuizPlayerProps } from "./quiz-player.type";
import { QuizProgress } from "./quiz-progress";
import { QuizResult } from "./quiz-result";

/** 문제 묶음을 푸는 화면: 시작 → 문제 카드 → 결과. 상태는 useQuizRunner가 든다. */
export function QuizPlayer({ runner, intro, home }: QuizPlayerProps) {
  if (runner.phase === "intro") {
    return (
      <Intro>
        {intro}
        <Button size="lg" onClick={runner.start}>
          시작
        </Button>
      </Intro>
    );
  }

  if (runner.phase === "playing" && runner.current) {
    return (
      <>
        <QuizProgress total={runner.deck.length} index={runner.index} answers={runner.answers} score={runner.score} />
        <QuestionCard
          key={`${runner.current.question.id}-${runner.index}`}
          item={runner.current}
          number={runner.index + 1}
          answer={runner.currentAnswer}
          isLast={runner.index + 1 === runner.deck.length}
          onPick={runner.pick}
          onNext={runner.next}
        />
      </>
    );
  }

  return (
    <QuizResult deck={runner.deck} answers={runner.answers} score={runner.score} onRetryWrong={runner.retryWrong} onRestart={runner.start} home={home} />
  );
}
