"use client";

import Link from "next/link";
import { Button } from "@/common/design-system";
import { CrumbLinks } from "@/common/components/crumb-links";
import { PostQuiz } from "@/features/quiz/components/post-quiz";
import { STAGE_HINTS, STAGE_LABELS, type Stage } from "../../atoms/study-progress";
import { StageMark } from "../stage-mark";
import { useStudyPanel } from "./study-panel";
import {
  Compare,
  Crumbs,
  Explain,
  ExplainActions,
  Head,
  NeighborLink,
  Neighbors,
  Position,
  Review,
  Root,
  StageButton,
  Stages,
  StepNumber,
  TextArea,
} from "./study-panel.styled";
import type { StudyPanelProps } from "./study-panel.type";

const STAGES: Stage[] = [1, 2, 3, 4];

export function StudyPanel({ slug }: StudyPanelProps) {
  const panel = useStudyPanel(slug);
  if (!panel.post) return null;

  return (
    <Root aria-labelledby="study-panel-title">
      <Head>
        <Crumbs aria-label="로드맵 위치">
          <CrumbLinks items={[{ label: "로드맵", href: "/roadmap" }, ...panel.crumbs]} />
        </Crumbs>
        <h2 id="study-panel-title">이 글을 내 것으로</h2>
        <Position>
          {panel.position && (
            <>
              <Link href={panel.roadmapHref}>이 로드맵</Link>의 {panel.position.index} / {panel.position.total}번째 글 ·{" "}
            </>
          )}
          지금 단계: <StageMark stage={panel.stage} withLabel />
        </Position>
      </Head>

      <Stages aria-label="마스터 단계">
        {STAGES.map((target) => {
          const done = panel.stage >= target;
          // 적용함은 퀴즈로만 올라간다. 되돌리기만 손으로 할 수 있다
          const manual = target !== 3 || done;
          return (
            <li key={target}>
              <StageButton type="button" active={panel.stage === target} done={done} disabled={!manual} onClick={() => manual && panel.toggleStage(target)} aria-pressed={done}>
                <strong>
                  <StepNumber done={done} aria-hidden>
                    {target}
                  </StepNumber>
                  {STAGE_LABELS[target]}
                </strong>
                <span>{STAGE_HINTS[target]}</span>
              </StageButton>
            </li>
          );
        })}
      </Stages>

      <Explain>
        <h3>내 말로 설명하기</h3>
        <p>글을 닫고 핵심을 다섯 문장 안에 적는다. 읽고 바로 퀴즈를 풀면 알아보기만 되고, 적어 보면 떠올리기가 된다. 면접에서 쓰는 건 후자다.</p>
        <TextArea value={panel.draft} onChange={(event) => panel.setDraft(event.target.value)} placeholder="이 글은 … 문제를 풀기 위해 … 한다. 핵심은 …" aria-label="내 말로 설명하기" />
        <ExplainActions>
          <Button variant="secondary" onClick={panel.save}>
            저장
          </Button>
          {panel.savedNote && <span role="status">{panel.savedNote}</span>}
        </ExplainActions>
        {panel.explained && (
          <Compare>
            <summary>원문 요약과 비교하기</summary>
            <div>{panel.post.summary}</div>
          </Compare>
        )}
      </Explain>

      <Explain>
        <h3>이 글 퀴즈</h3>
        <p>80% 이상 맞히면 "적용함"으로 올라간다. 복습은 로드맵 상자 간격(1·2·4·7·15일)으로 다시 잡힌다.</p>
        <PostQuiz slug={slug} onDone={panel.onQuizDone} />
        {panel.due && panel.box > 0 && (
          <Review>
            복습 상자 {panel.box} · 다음 복습 {panel.due}
          </Review>
        )}
      </Explain>

      {(panel.prev || panel.next) && (
        <Neighbors>
          {panel.prev ? (
            <NeighborLink href={panel.prev.href} side="prev">
              <small>← 앞 글</small>
              <strong>{panel.prev.title}</strong>
            </NeighborLink>
          ) : (
            <span />
          )}
          {panel.next && (
            <NeighborLink href={panel.next.href} side="next">
              <small>다음 글 →</small>
              <strong>{panel.next.title}</strong>
            </NeighborLink>
          )}
        </Neighbors>
      )}
    </Root>
  );
}
