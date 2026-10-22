"use client";

import { Badge, Container, PageHeader, color } from "@/common/design-system";
import { ProgressBar } from "../progress-bar";
import { ProgressTools } from "../progress-tools";
import { useRoadmapIndex } from "./roadmap-index";
import { CardDescription, CardHead, CardMeta, Cards, Legend, NextLink, NextList, RoadmapCard, Section, TierCard, Tiers } from "./roadmap-index.styled";

const TIER_TONES = { 1: "accent", 2: "info", 3: "neutral" } as const;

export function RoadmapIndex() {
  const { tiers, tierLabels, next, roadmaps } = useRoadmapIndex();

  return (
    <Container size="narrow">
      <PageHeader
        title="학습 로드맵"
        lead="글 661편을 읽는 순서다. 로드맵 안의 로드맵을 따라 앞 글을 먼저 이해하고 다음으로 넘어간다. 글마다 읽음 → 설명함 → 적용함 → 응용함 네 단계를 기록한다."
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
        <h2>로드맵</h2>
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
