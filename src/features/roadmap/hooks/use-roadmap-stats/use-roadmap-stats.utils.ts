import { type StudyProgress, stageCounts, stageOf } from "../../atoms/study-progress";
import { CHECKPOINTS, FLAT_ROADMAPS, findRoadmap, tierOf } from "../../registry";
import type { FlatRoadmap, Tier } from "../../registry";
import { roadmapKey } from "../../registry/utils";

export interface RequirementStatus {
  roadmap: FlatRoadmap;
  /** 요구 로드맵의 글을 모두 읽었는지 */
  met: boolean;
  readPercent: number;
}

/** "먼저 읽어 두면 좋은" 로드맵을 얼마나 읽었나 */
export function requirementStatus(roadmap: FlatRoadmap, progress: StudyProgress): RequirementStatus[] {
  return (roadmap.node.requires ?? [])
    .map((key) => findRoadmap(key))
    .filter((required) => required !== undefined)
    .map((required) => {
      const read = required.posts.filter((slug) => stageOf(progress, slug) >= 1).length;
      return { roadmap: required, met: read === required.posts.length, readPercent: required.posts.length ? Math.round((read / required.posts.length) * 100) : 100 };
    });
}

export function checkpointStats(roadmap: FlatRoadmap, progress: StudyProgress) {
  const key = roadmapKey(roadmap.path);
  // 이 로드맵과 그 아래 로드맵의 관문
  const mine = CHECKPOINTS.filter((checkpoint) => {
    const owner = roadmapKey(checkpoint.roadmap.path);
    return owner === key || owner.startsWith(`${key}/`);
  });
  const passed = mine.filter((checkpoint) => progress.checkpoints[checkpoint.id]?.passedAt).length;
  return { total: mine.length, passed };
}

export function roadmapStats(roadmap: FlatRoadmap, progress: StudyProgress) {
  const stages = stageCounts(roadmap.posts, progress);
  const nextSlug = roadmap.posts.find((slug) => stageOf(progress, slug) === 0);
  return { ...stages, nextSlug, checkpoints: checkpointStats(roadmap, progress), requirements: requirementStatus(roadmap, progress) };
}

/** 전체 로드맵 순서(최상위 순서 → 안의 순서)대로 모든 글 */
export const ORDERED_SLUGS: string[] = FLAT_ROADMAPS.filter((roadmap) => roadmap.path.length === 1).flatMap((roadmap) => roadmap.posts);

/**
 * 다음에 읽을 글. 등급 1 글을 로드맵 순서대로 먼저, 다 읽으면 등급 2, 그다음 3.
 * 로드맵마다 앞 글부터 읽게 되므로 "먼저 이해하고 넘어가는" 순서가 지켜진다.
 */
export function nextSlugs(progress: StudyProgress, count: number, maxTier: Tier = 3): string[] {
  const picked: string[] = [];
  for (const tier of [1, 2, 3] as Tier[]) {
    if (tier > maxTier) break;
    for (const slug of ORDERED_SLUGS) {
      if (picked.length >= count) return picked;
      if (tierOf(slug) === tier && stageOf(progress, slug) === 0) picked.push(slug);
    }
  }
  return picked;
}

/** 등급별 글 수와 완료 수 */
export function tierStats(progress: StudyProgress) {
  const result: Record<Tier, { total: number; done: number; started: number }> = {
    1: { total: 0, done: 0, started: 0 },
    2: { total: 0, done: 0, started: 0 },
    3: { total: 0, done: 0, started: 0 },
  };
  for (const slug of ORDERED_SLUGS) {
    const entry = result[tierOf(slug)];
    const stage = stageOf(progress, slug);
    entry.total += 1;
    if (stage >= 1) entry.started += 1;
    if (stage >= 3) entry.done += 1;
  }
  return result;
}
