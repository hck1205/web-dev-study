"use client";

import Link from "next/link";
import { Button } from "@/common/design-system";
import { useAppliedPrompt } from "./applied-prompt";
import { Actions, Links, Points, Prompt, Root, TextArea } from "./applied-prompt.styled";

/** 오늘의 응용 질문 한 개: 글 여러 편을 엮어 답하고, 포인트와 비교해 자기 채점한다 */
export function AppliedPrompt() {
  const applied = useAppliedPrompt();

  if (!applied.question) {
    return (
      <Prompt as="p" style={{ fontWeight: 400 }}>
        아직 엮을 글이 없다. 글을 두어 편 읽으면 그 글들을 엮는 질문이 여기 나온다. (질문 {applied.total}개 준비)
      </Prompt>
    );
  }

  return (
    <Root>
      <Prompt>{applied.question.prompt}</Prompt>
      <Links aria-label="엮이는 글">
        {applied.posts.map((post) => (
          <li key={post.slug} data-unread={!post.read}>
            <Link href={post.href} target="_blank" rel="noopener noreferrer">
              {post.title} ↗{!post.read && " (아직 안 읽음)"}
            </Link>
          </li>
        ))}
      </Links>
      <TextArea value={applied.answer} onChange={(event) => applied.setAnswer(event.target.value)} placeholder="결론부터. 어디서부터 보나, 무엇을 고르나, 왜 그런가." aria-label="내 답" />
      {!applied.revealed ? (
        <Actions>
          <Button variant="secondary" onClick={applied.reveal}>
            포인트 보기
          </Button>
          <span>먼저 답을 적거나 소리 내어 말한 뒤에 연다.</span>
        </Actions>
      ) : (
        <>
          <Points>
            {applied.question.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </Points>
          {applied.judged === null ? (
            <Actions>
              <Button onClick={() => applied.judge(true)}>엮어서 답했다</Button>
              <Button variant="secondary" onClick={() => applied.judge(false)}>
                아직
              </Button>
              <span>포인트의 절반 이상을 내 답이 짚었으면 "엮어서 답했다".</span>
            </Actions>
          ) : (
            <Actions>
              <span>
                {applied.judged ? "엮인 글들이 응용함으로 올라갔다." : "내일 다시 나온다. 빠진 포인트의 글을 지금 열어 두자."} 지금까지 엮은 질문 {applied.done} / {applied.total}
              </span>
            </Actions>
          )}
        </>
      )}
    </Root>
  );
}
