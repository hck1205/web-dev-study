"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { getPostBySlug, postHref } from "@/features/posts/registry";
import { type Stage, stageOf, useGetStudyProgress } from "../../atoms/study-progress";
import { roadmapStats } from "../../hooks/use-roadmap-stats";
import { CHECKPOINTS, checkpointHref, findRoadmap, isCheckpoint, isPost, isRoadmap, postSlug, roadmapCrumbs, roadmapHref, roadmapKey, tierOf } from "../../registry";
import type { FlatRoadmap, RoadmapItem } from "../../registry";

export interface PostRow {
  kind: "post";
  slug: string;
  title: string;
  summary: string;
  href: string;
  tier: 1 | 2 | 3;
  stage: Stage;
  /** 앞 글을 다 읽어서 지금 읽을 차례인 글 */
  isNext: boolean;
}

export interface RoadmapRow {
  kind: "roadmap";
  key: string;
  href: string;
  label: string;
  description?: string;
  stats: ReturnType<typeof roadmapStats>;
}

export interface CheckpointRow {
  kind: "checkpoint";
  id: string;
  href: string;
  label: string;
  description?: string;
  count: number;
  passed: boolean;
  score?: string;
}

export type Row = PostRow | RoadmapRow | CheckpointRow;

export function useRoadmapDetail() {
  const params = useParams<{ path?: string[] }>();
  const segments = params.path ?? [];
  const progress = useGetStudyProgress();

  // 마지막 조각이 cp-N이면 관문 퀴즈 화면이다
  const checkpointId = /^cp-\d+$/.test(segments[segments.length - 1] ?? "") ? segments.join("/") : null;
  const roadmap: FlatRoadmap | undefined = findRoadmap(roadmapKey(checkpointId ? segments.slice(0, -1) : segments));

  const detail = useMemo(() => {
    if (!roadmap) return null;
    const stats = roadmapStats(roadmap, progress);
    let previousRead = true;
    let checkpointCount = 0;

    const toRow = (item: RoadmapItem): Row | null => {
      if (isRoadmap(item)) {
        const child = findRoadmap(roadmapKey([...roadmap.path, item.id]));
        if (!child) return null;
        const childStats = roadmapStats(child, progress);
        previousRead = previousRead && childStats.started === childStats.total;
        return { kind: "roadmap", key: roadmapKey(child.path), href: roadmapHref(child.path), label: child.node.label, description: child.node.description, stats: childStats };
      }
      if (isCheckpoint(item)) {
        checkpointCount += 1;
        const id = `${roadmapKey(roadmap.path)}/cp-${checkpointCount}`;
        const checkpoint = CHECKPOINTS.find((entry) => entry.id === id);
        const result = progress.checkpoints[id];
        return {
          kind: "checkpoint",
          id,
          href: checkpointHref(id),
          label: item.checkpoint,
          description: item.description,
          count: checkpoint?.posts.length ?? 0,
          passed: Boolean(result?.passedAt),
          score: result ? `${result.score}/${result.total}` : undefined,
        };
      }
      if (isPost(item)) {
        const slug = postSlug(item);
        const post = getPostBySlug(slug);
        if (!post) return null;
        const stage = stageOf(progress, slug);
        const isNext = previousRead && stage === 0;
        previousRead = previousRead && stage >= 1;
        return { kind: "post", slug, title: post.title, summary: post.summary, href: postHref(slug), tier: tierOf(slug), stage, isNext };
      }
      return null;
    };

    const rows = roadmap.node.items.map(toRow).filter((row): row is Row => row !== null);
    return { rows, stats };
  }, [roadmap, progress]);

  return {
    roadmap,
    checkpointId,
    crumbs: roadmap ? [{ label: "로드맵", href: "/roadmap" }, ...roadmapCrumbs(roadmap)] : [{ label: "로드맵", href: "/roadmap" }],
    rows: detail?.rows ?? [],
    stats: detail?.stats,
  };
}
