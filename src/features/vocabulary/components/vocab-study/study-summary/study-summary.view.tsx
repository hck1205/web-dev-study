"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Button, ResultMark } from "@/common/design-system";
import { findWord, vocabHref } from "../../../registry";
import { Actions, Item, List, Message, Ring, RingLabel, Root, Summary } from "./study-summary.styled";
import type { StudySummaryProps } from "./study-summary.type";

/** 이번 학습 결과: 맞힌 비율 고리 + 단어별 결과. 틀린 단어는 내일 다시 나오도록 이미 기록됐다. */
export function StudySummary({ results, onRetryWrong, onRestart }: StudySummaryProps) {
  const known = results.filter((result) => result.knew).length;
  const wrong = results.length - known;

  return (
    <Root>
      <Summary>
        <Ring viewBox="0 0 120 120" aria-hidden style={{ "--to": `${1 - known / results.length}` } as CSSProperties}>
          <circle cx="60" cy="60" r="52" pathLength={1} />
          <circle cx="60" cy="60" r="52" pathLength={1} />
        </Ring>
        <RingLabel>
          <strong>{known}</strong>
          <span>/ {results.length}</span>
        </RingLabel>
      </Summary>
      <Message>
        {wrong === 0
          ? "전부 알았다. 다음 복습일까지 이 단어들은 쉬어도 된다."
          : `${wrong}개는 내일 다시 나온다. 지금 한 번 더 보고 가면 더 오래 남는다.`}
      </Message>
      <Actions>
        {wrong > 0 && <Button onClick={onRetryWrong}>틀린 {wrong}개 다시</Button>}
        <Button variant="secondary" onClick={onRestart}>
          다른 단어로 계속
        </Button>
        <Button variant="ghost" href="/vocabulary">
          사전으로
        </Button>
      </Actions>
      <List>
        {results.map((result, index) => {
          const entry = findWord(result.word);
          return (
            <Item key={result.word} style={{ animationDelay: `${300 + index * 40}ms` }}>
              <ResultMark pass={result.knew} label={result.knew ? "알았다" : "몰랐다"} size="sm" />
              <Link href={vocabHref(result.word)} lang="en">
                {result.word}
              </Link>
              <span>{entry?.meaning}</span>
            </Item>
          );
        })}
      </List>
    </Root>
  );
}
