"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Button, ResultMark } from "@/common/design-system";
import { questionHref } from "../../../registry/utils";
import {
  Actions,
  Message,
  Review,
  ReviewAnswer,
  ReviewItem,
  ReviewQuestion,
  Ring,
  RingLabel,
  Root,
  Summary,
} from "./quiz-result.styled";
import type { QuizResultProps } from "./quiz-result.type";
import { resultMessage } from "./quiz-result.utils";

export function QuizResult({ deck, answers, score, onRetryWrong, onRestart, home }: QuizResultProps) {
  const total = deck.length;
  const wrongCount = total - score;

  return (
    <Root>
      <Summary>
        <Ring viewBox="0 0 120 120" aria-hidden style={{ "--to": `${1 - score / total}` } as CSSProperties}>
          <circle cx="60" cy="60" r="52" pathLength={1} />
          <circle cx="60" cy="60" r="52" pathLength={1} />
        </Ring>
        <RingLabel>
          <strong>{score}</strong>
          <span>/ {total}</span>
        </RingLabel>
      </Summary>
      <Message>{resultMessage(score, total)}</Message>

      <Actions>
        {wrongCount > 0 && <Button onClick={onRetryWrong}>틀린 {wrongCount}문제 다시</Button>}
        <Button variant="secondary" onClick={onRestart}>
          처음부터 다시
        </Button>
        <Button variant="ghost" href={home?.href ?? "/quiz"}>
          {home?.label ?? "다른 토픽"}
        </Button>
      </Actions>

      <Review>
        {deck.map(({ question }, i) => {
          const answer = answers[i];
          return (
            <ReviewItem key={question.id} style={{ animationDelay: `${300 + i * 40}ms` }}>
              <ResultMark pass={answer.correct} label={answer.correct ? "맞음" : "틀림"} />
              <div>
                <ReviewQuestion>{question.question}</ReviewQuestion>
                {!answer.correct && <ReviewAnswer>고른 답: {question.choices[answer.picked]}</ReviewAnswer>}
                <ReviewAnswer>정답: {question.choices[question.answer]}</ReviewAnswer>
                <Link href={questionHref(question)} target="_blank" rel="noopener noreferrer">
                  글에서 다시 보기 ↗
                </Link>
              </div>
            </ReviewItem>
          );
        })}
      </Review>
    </Root>
  );
}
