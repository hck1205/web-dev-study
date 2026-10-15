"use client";

import { Button } from "@/common/design-system";
import { useQuestionCard } from "./question-card";
import {
  Choice,
  ChoiceList,
  ChoiceText,
  Explanation,
  Footer,
  KeyHint,
  Mark,
  Numbering,
  Question,
  Related,
  Root,
  Verdict,
} from "./question-card.styled";
import type { QuestionCardProps } from "./question-card.type";
import { choiceState } from "./question-card.utils";
import { CrumbLinks } from "@/common/components/crumb-links";

export function QuestionCard({ item, number, answer, isLast, onPick, onNext }: QuestionCardProps) {
  const { question, nextRef, related } = useQuestionCard(item, answer);

  return (
    <Root>
      <Numbering>문제 {number}</Numbering>
      <Question>{question.question}</Question>

      <ChoiceList>
        {item.order.map((original, display) => {
          const state = choiceState(original, question.answer, answer);
          return (
            <li key={original} style={{ animationDelay: `${80 + display * 50}ms` }}>
              <Choice
                type="button"
                state={state}
                aria-disabled={Boolean(answer)}
                onClick={() => onPick(display)}
              >
                <Mark state={state} aria-hidden>
                  {state === "correct" ? "✓" : state === "wrong" ? "✕" : display + 1}
                </Mark>
                <ChoiceText>{question.choices[original]}</ChoiceText>
              </Choice>
            </li>
          );
        })}
      </ChoiceList>

      {answer && (
        <Explanation correct={answer.correct} role="status">
          <Verdict correct={answer.correct}>{answer.correct ? "맞았다" : "틀렸다"}</Verdict>
          <p>{question.explanation}</p>
          <Related>
            {related.topics.length > 0 && (
              <div>
                <dt>관련 토픽</dt>
                <dd>
                  <CrumbLinks items={related.topics} />
                </dd>
              </div>
            )}
            <div>
              <dt>관련 글</dt>
              <dd>
                <a href={related.postHref} target="_blank" rel="noopener noreferrer">
                  {related.postTitle} ↗
                </a>
              </dd>
            </div>
          </Related>
          <Footer>
            <KeyHint>Enter</KeyHint>
            <Button ref={nextRef} onClick={onNext}>
              {isLast ? "결과 보기" : "다음 문제"}
            </Button>
          </Footer>
        </Explanation>
      )}
    </Root>
  );
}
