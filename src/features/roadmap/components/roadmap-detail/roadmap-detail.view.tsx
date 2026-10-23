"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Badge, Container, EmptyState, PageHeader, ResultMark } from "@/common/design-system";
import { CrumbLinks } from "@/common/components/crumb-links";
import { ProgressBar } from "../progress-bar";
import { StageMark } from "../stage-mark";
import { useRoadmapDetail } from "./roadmap-detail";
import {
  CheckpointLink,
  Flag,
  NextTag,
  Order,
  PostLink,
  PostSummary,
  Requirements,
  RoadmapLink,
  RoadmapMeta,
  Rows,
  Summary,
  TitleRow,
} from "./roadmap-detail.styled";

// 관문 퀴즈는 문제 전체를 싣는다. 로드맵 목록만 볼 때는 내려받지 않게 따로 떼어 둔다.
const CheckpointQuiz = dynamic(() => import("../checkpoint-quiz").then((module) => module.CheckpointQuiz), { ssr: false });

const TIER_TONES = { 1: "accent", 2: "info", 3: "neutral" } as const;

export function RoadmapDetail() {
  const { roadmap, checkpointId, crumbs, rows, stats } = useRoadmapDetail();

  if (!roadmap || !stats) {
    return (
      <Container size="narrow">
        <PageHeader title="없는 로드맵이다" lead={<Link href="/roadmap">로드맵 목록으로</Link>} />
      </Container>
    );
  }

  if (checkpointId) return <CheckpointQuiz id={checkpointId} />;

  const unmet = stats.requirements.filter((requirement) => !requirement.met);
  let order = 0;

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <CrumbLinks items={crumbs.slice(0, -1)} />
          </nav>
        }
        title={roadmap.node.label}
        lead={roadmap.node.description}
      />

      <Summary>
        <ProgressBar counts={stats.counts} total={stats.total} withText />
        {unmet.length > 0 && (
          <Requirements>
            먼저 읽어 두면 좋은 로드맵:{" "}
            {unmet.map((requirement, index) => (
              <span key={requirement.roadmap.path.join("/")}>
                {index > 0 && ", "}
                <Link href={`/roadmap/${requirement.roadmap.path.join("/")}`}>
                  {requirement.roadmap.node.label} ({requirement.readPercent}% 읽음)
                </Link>
              </span>
            ))}
          </Requirements>
        )}
      </Summary>

      {rows.length === 0 ? (
        <EmptyState>아직 글이 없다.</EmptyState>
      ) : (
        <Rows>
          {rows.map((row, index) => (
            <li key={row.kind === "post" ? row.slug : row.kind === "roadmap" ? row.key : row.id} style={{ animationDelay: `${index * 30}ms` }}>
              {row.kind === "post" && (
                <PostLink href={row.href} isNext={row.isNext}>
                  <Order aria-hidden>{(order += 1)}</Order>
                  <TitleRow>
                    <StageMark stage={row.stage} />
                    <strong>{row.title}</strong>
                    {row.tier !== roadmap.tier && <Badge tone={TIER_TONES[row.tier]}>등급 {row.tier}</Badge>}
                    {row.isNext && <NextTag>다음</NextTag>}
                  </TitleRow>
                  <PostSummary style={{ gridColumn: 2 }}>{row.summary}</PostSummary>
                </PostLink>
              )}
              {row.kind === "roadmap" && (
                <RoadmapLink href={row.href}>
                  <h3>{row.label}</h3>
                  {row.description && <p>{row.description}</p>}
                  <ProgressBar counts={row.stats.counts} total={row.stats.total} />
                  <RoadmapMeta>
                    글 {row.stats.total}편 · 적용 {row.stats.done}편
                    {row.stats.checkpoints.total > 0 && ` · 관문 ${row.stats.checkpoints.passed}/${row.stats.checkpoints.total}`}
                  </RoadmapMeta>
                </RoadmapLink>
              )}
              {row.kind === "checkpoint" && (
                <CheckpointLink href={row.href} passed={row.passed}>
                  <Flag aria-hidden>{row.passed ? <ResultMark pass label="통과" size="sm" /> : "⚑"}</Flag>
                  <span>
                    <strong>{row.label}</strong>
                    <br />
                    <small>
                      앞의 {row.count}편에서 뽑은 문제 · 80% 이상이면 통과{row.score ? ` · 지난 점수 ${row.score}` : ""}
                    </small>
                  </span>
                </CheckpointLink>
              )}
            </li>
          ))}
        </Rows>
      )}
    </Container>
  );
}
