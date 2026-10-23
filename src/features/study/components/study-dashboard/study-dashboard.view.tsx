"use client";

import { Button, Container, PageHeader } from "@/common/design-system";
import { ProgressBar } from "@/features/roadmap/components/progress-bar";
import { AppliedPrompt } from "../applied-prompt";
import { ReviewSession } from "../review-session";
import { useStudyDashboard } from "./study-dashboard";
import { Actions, ItemLink, List, Minutes, RoadmapRow, Side, Stats, Step, StepNumber } from "./study-dashboard.styled";

export function StudyDashboard() {
  const study = useStudyDashboard();

  if (study.reviewing) {
    return (
      <Container size="narrow">
        <PageHeader title="오늘의 복습" lead={`만기 ${study.due.length}편 중 최대 20장. 토픽이 섞여 나오니 패턴이 아니라 내용으로 떠올린다.`} />
        <ReviewSession slugs={study.due} onExit={study.stopReview} />
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <PageHeader title="오늘 할 일" lead="하루 2시간 기준으로 세 토막이다. 복습으로 데우고, 새 글 두 편을 내 것으로 만들고, 응용 질문 하나로 엮는다." />

      <Stats>
        <div>
          <dt>연속</dt>
          <dd>
            {study.streak.current}일 <small>{study.streak.today ? "오늘 했음" : "오늘 아직"}</small>
          </dd>
        </div>
        <div>
          <dt>공부한 날</dt>
          <dd>{study.streak.total}일</dd>
        </div>
        <div>
          <dt>시작한 글</dt>
          <dd>
            {study.studied} <small>/ 661</small>
          </dd>
        </div>
      </Stats>

      <Step>
        <h2>
          <StepNumber aria-hidden>1</StepNumber>복습<Minutes>15분</Minutes>
        </h2>
        {study.due.length === 0 ? (
          <p>오늘 만기인 글이 없다. 읽은 글은 1·2·4·7·15일 간격으로 돌아온다.</p>
        ) : (
          <>
            <p>만기 {study.due.length}편. 면접 질문, 한 줄 요약, 4지선다가 섞여 나온다. 답을 열기 전에 결론부터 소리 내어 말한다.</p>
            <Actions>
              <Button onClick={study.startReview}>복습 시작</Button>
            </Actions>
          </>
        )}
      </Step>

      <Step>
        <h2>
          <StepNumber aria-hidden>2</StepNumber>새 글 2편<Minutes>80분</Minutes>
        </h2>
        {study.fresh.length === 0 ? (
          <p>로드맵의 글을 모두 열어 봤다.</p>
        ) : (
          <>
            <p>순서: 쉬운 설명을 먼저 읽고 → 원문과 그림을 끝까지 → 글 끝에서 내 말로 설명을 적고 → 퀴즈. 글 하나에 40분 정도.</p>
            <List>
              {study.fresh.map((post) => (
                <li key={post.slug}>
                  <ItemLink href={post.href}>
                    <strong>{post.title}</strong>
                    <span>{post.roadmapLabel}</span>
                  </ItemLink>
                </li>
              ))}
            </List>
          </>
        )}
      </Step>

      <Step>
        <h2>
          <StepNumber aria-hidden>3</StepNumber>응용<Minutes>20분</Minutes>
        </h2>
        <p>글 두어 편을 엮어야 답할 수 있는 상황 질문이다. 글을 덮고 결론부터 말한 뒤 포인트와 비교한다.</p>
        <AppliedPrompt />
      </Step>

      {study.weak.length > 0 && (
        <Side>
          <h2>자주 틀린 글</h2>
          <List>
            {study.weak.map((post) => (
              <li key={post.slug}>
                <ItemLink href={post.href}>
                  <strong>{post.title}</strong>
                  <span>
                    틀림 {post.wrong} · 맞음 {post.correct}
                  </span>
                </ItemLink>
              </li>
            ))}
          </List>
        </Side>
      )}

      {study.unexplained.length > 0 && (
        <Side>
          <h2>읽고 설명을 미룬 글</h2>
          <List>
            {study.unexplained.map((post) => (
              <li key={post.slug}>
                <ItemLink href={post.href}>
                  <strong>{post.title}</strong>
                  <span>사흘 넘게 "읽음"에 머물러 있다. 글 끝에서 다섯 문장만 적는다.</span>
                </ItemLink>
              </li>
            ))}
          </List>
        </Side>
      )}

      {study.roadmaps.length > 0 && (
        <Side>
          <h2>진행 중인 로드맵</h2>
          <List>
            {study.roadmaps.map((roadmap) => (
              <li key={roadmap.href}>
                <RoadmapRow href={roadmap.href}>
                  {roadmap.label}
                  <span>
                    {roadmap.stats.done} / {roadmap.stats.total}편 적용
                  </span>
                  <div>
                    <ProgressBar counts={roadmap.stats.counts} total={roadmap.stats.total} />
                  </div>
                </RoadmapRow>
              </li>
            ))}
          </List>
        </Side>
      )}
    </Container>
  );
}
