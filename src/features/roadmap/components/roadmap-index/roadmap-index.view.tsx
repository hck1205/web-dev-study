"use client";

import { Badge, ChoiceChip, Container, PageHeader, color } from "@/common/design-system";
import { ProgressBar } from "../progress-bar";
import { ProgressTools } from "../progress-tools";
import { RoadmapGraph } from "../roadmap-graph";
import { useRoadmapIndex } from "./roadmap-index";
import { CardDescription, CardHead, CardMeta, Cards, Legend, NextLink, NextList, RoadmapCard, Section, SectionHead, TierCard, Tiers } from "./roadmap-index.styled";

const TIER_TONES = { 1: "accent", 2: "info", 3: "neutral" } as const;

export function RoadmapIndex() {
  const { tiers, tierLabels, next, roadmaps, courses, courseGraph, graph, postCount, view, setView } = useRoadmapIndex();

  return (
    <Container size="narrow">
      <PageHeader
        title="학습 로드맵"
        lead={`글 ${postCount}편을 읽는 순서다. 큰 로드맵 하나를 골라 단계대로 가면 되고, 단계마다 다른 큰 로드맵과 이어지는 곳이 표시된다. 글마다 읽음 → 설명함 → 적용함 → 응용함 네 단계를 기록한다.`}
      />

      <Tiers>
        {([1, 2, 3] as const).map((tier) => (
          <TierCard key={tier}>
            <dt>
              등급 {tier} · {tierLabels[tier]}
            </dt>
            <dd>
              {tiers[tier].done} <small>/ {tiers[tier].total}편 적용</small>
            </dd>
          </TierCard>
        ))}
      </Tiers>
      <Legend aria-label="막대 색 뜻">
        <li>
          <i style={{ background: color.info }} /> 읽음
        </li>
        <li>
          <i style={{ background: color.accent }} /> 설명함
        </li>
        <li>
          <i style={{ background: color.success }} /> 적용·응용함
        </li>
      </Legend>

      <Section>
        <h2>큰 로드맵</h2>
        <CardDescription>
          화살표는 &quot;다 읽고 나면 이어 가기 좋은 곳&quot;이다. 어디서 시작해도 결국 시스템 디자인과 AI 개발에서 다시 만난다.
        </CardDescription>
        <div style={{ marginTop: "0.75rem" }}>
          <RoadmapGraph nodes={courseGraph.nodes} edges={courseGraph.edges} label="큰 로드맵 지도" />
        </div>
        <Cards>
          {courses.map((course, index) => (
            <li key={course.id} style={{ animationDelay: `${index * 40}ms` }}>
              <RoadmapCard href={course.href} locked={false}>
                <CardHead>
                  <h3>{course.label}</h3>
                </CardHead>
                <CardDescription>{course.description}</CardDescription>
                <ProgressBar counts={course.total.counts} total={course.total.total} />
                <CardMeta>
                  <span>{course.stageCount}단계</span>
                  <span>글 {course.total.total}편</span>
                  <span>적용 {course.total.done}편</span>
                </CardMeta>
              </RoadmapCard>
            </li>
          ))}
        </Cards>
      </Section>

      <Section>
        <h2>다음에 읽을 글</h2>
        {next.length === 0 ? (
          <CardDescription>등급 3까지 모두 열어 봤다. 이제 /study에서 복습과 응용만 돌리면 된다.</CardDescription>
        ) : (
          <NextList>
            {next.map((item, index) => (
              <li key={item.slug} style={{ animationDelay: `${index * 60}ms` }}>
                <NextLink href={item.href}>
                  <strong>{item.title}</strong>
                  <span>
                    {item.roadmapLabel} · 등급 {item.tier}
                  </span>
                </NextLink>
              </li>
            ))}
          </NextList>
        )}
      </Section>

      <Section>
        <SectionHead>
          <h2>세부 로드맵</h2>
          <div role="group" aria-label="보기 방식">
            <ChoiceChip selected={view === "graph"} onClick={() => setView("graph")}>
              지도
            </ChoiceChip>
            <ChoiceChip selected={view === "list"} onClick={() => setView("list")}>
              목록
            </ChoiceChip>
          </div>
        </SectionHead>
        {view === "graph" ? (
          <RoadmapGraph nodes={graph.nodes} edges={graph.edges} label="최상위 로드맵 지도" />
        ) : (
          <Cards>
          {roadmaps.map((roadmap, index) => (
            <li key={roadmap.key} style={{ animationDelay: `${index * 40}ms` }}>
              <RoadmapCard href={roadmap.href} locked={roadmap.locked}>
                <CardHead>
                  <h3>{roadmap.label}</h3>
                  <Badge tone={TIER_TONES[roadmap.tier]}>{roadmap.tierLabel}</Badge>
                </CardHead>
                {roadmap.description && <CardDescription>{roadmap.description}</CardDescription>}
                <ProgressBar counts={roadmap.stats.counts} total={roadmap.stats.total} />
                <CardMeta>
                  <span>글 {roadmap.stats.total}편</span>
                  <span>적용 {roadmap.stats.done}편</span>
                  {roadmap.stats.checkpoints.total > 0 && (
                    <span>
                      관문 {roadmap.stats.checkpoints.passed}/{roadmap.stats.checkpoints.total}
                    </span>
                  )}
                  {roadmap.locked && <span>먼저: {roadmap.requirementLabels.join(", ")}</span>}
                </CardMeta>
              </RoadmapCard>
            </li>
          ))}
        </Cards>
        )}
      </Section>

      <Section>
        <h2>진행 기록</h2>
        <CardDescription>기록은 이 브라우저에만 저장된다. 다른 기기로 옮길 때는 JSON으로 내보내고 가져온다.</CardDescription>
        <div style={{ marginTop: "0.75rem" }}>
          <ProgressTools />
        </div>
      </Section>
    </Container>
  );
}
