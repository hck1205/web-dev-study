"use client";

import Link from "next/link";
import { Button, EmptyState } from "@/common/design-system";
import { QuestionCard } from "@/features/quiz/components/quiz-player";
import { useReviewSession } from "./review-session";
import { Actions, Answer, Card, Counter, Done, Hint, Kind, Question, Root } from "./review-session.styled";
import type { ReviewSessionProps } from "./review-session.type";
import { KIND_LABELS } from "./review-session.utils";

/** 오늘 만기인 글을 카드로 넘기며 떠올린다. 알았다/몰랐다로 상자가 오르내린다 */
export function ReviewSession(props: ReviewSessionProps) {
  const session = useReviewSession(props);

  if (session.phase === "empty") return <EmptyState>오늘 복습할 글이 없다. 새 글을 읽거나 로드맵으로 가자.</EmptyState>;
  if (session.phase === "loading") return <Hint>카드를 준비하는 중…</Hint>;

  if (session.phase === "done") {
    return (
      <Done>
        <h2>
          {session.cards.length}장 중 {session.knew}장을 떠올렸다
        </h2>
        <p>
          {session.missed.length === 0
            ? "모두 떠올렸다. 상자가 한 칸씩 올라가서 다음 복습은 더 멀어진다."
            : "몰랐던 글은 내일 다시 나온다. 지금 바로 다시 읽어 두면 내일은 쉽게 떠오른다."}
        </p>
        {session.missed.length > 0 && (
          <ul>
            {session.missed.map((result) => {
              const card = session.cards.find((item) => item.slug === result.slug);
              return (
                <li key={result.slug}>
                  <Link href={card?.href ?? `/posts/${result.slug}`} target="_blank" rel="noopener noreferrer">
                    {card?.title ?? result.slug} ↗
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <Actions>
          {props.onExit && (
            <Button variant="secondary" onClick={props.onExit}>
              오늘 할 일로
            </Button>
          )}
          <Button variant="ghost" href="/roadmap">
            로드맵으로
          </Button>
        </Actions>
      </Done>
    );
  }

  const card = session.card;
  if (!card) return null;

  return (
    <Root>
      <Counter>
        <span>
          {session.index + 1} / {session.cards.length}
        </span>
        <span>떠올린 카드 {session.knew}</span>
      </Counter>

      {card.kind === "quiz" && card.quiz ? (
        <>
          <Kind>
            {KIND_LABELS.quiz}
            <Link href={card.href} target="_blank" rel="noopener noreferrer">
              {card.title} ↗
            </Link>
          </Kind>
          <QuestionCard
            key={`${card.slug}-${session.index}`}
            item={card.quiz}
            number={session.index + 1}
            answer={session.quizAnswer}
            isLast={session.index + 1 === session.cards.length}
            onPick={session.pickChoice}
            onNext={session.nextAfterQuiz}
          />
        </>
      ) : (
        <Card key={`${card.slug}-${session.index}`}>
          <Kind>
            {KIND_LABELS[card.kind]}
            <Link href={card.href} target="_blank" rel="noopener noreferrer">
              {card.title} ↗
            </Link>
          </Kind>
          <Question>{card.question}</Question>
          {!session.revealed ? (
            <>
              <Hint>소리 내어 답하거나 머릿속으로 결론부터 말해 본다. 다 말한 뒤에 답을 연다.</Hint>
              <Actions>
                <Button onClick={session.reveal}>답 보기</Button>
              </Actions>
            </>
          ) : (
            <>
              <Answer>{card.answer}</Answer>
              <Hint>내 답에 결론과 이유가 들어 있었나? 빠진 게 있으면 "몰랐다"를 누른다. 솔직할수록 복습이 정확해진다.</Hint>
              <Actions>
                <Button onClick={() => session.judge(true)}>알았다</Button>
                <Button variant="secondary" onClick={() => session.judge(false)}>
                  몰랐다
                </Button>
              </Actions>
            </>
          )}
        </Card>
      )}
    </Root>
  );
}
