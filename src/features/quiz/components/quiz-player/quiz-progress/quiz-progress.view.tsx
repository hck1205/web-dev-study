"use client";

import { Bar, Root, Segment, Stats } from "./quiz-progress.styled";
import type { QuizProgressProps } from "./quiz-progress.type";

/** 문제마다 한 칸. 맞으면 초록, 틀리면 빨강, 지금 문제는 강조색으로 채워진다. */
export function QuizProgress({ total, index, answers, score }: QuizProgressProps) {
  return (
    <Root>
      <Stats>
        <span>
          <strong>{index + 1}</strong> / {total}
        </span>
        <span>맞힌 문제 {score}</span>
      </Stats>
      <Bar role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={index + 1} aria-label="진행">
        {Array.from({ length: total }, (_, i) => (
          <Segment
            key={i}
            state={answers[i] ? (answers[i].correct ? "correct" : "wrong") : i === index ? "current" : "todo"}
          />
        ))}
      </Bar>
    </Root>
  );
}
