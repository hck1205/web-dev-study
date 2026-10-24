import { type StudyProgress, stageCounts, stageOf } from "../../atoms/study-progress";
import { CHECKPOINTS, FLAT_ROADMAPS, findRoadmap, tierOf } from "../../registry";
import type { FlatRoadmap, Tier, Track } from "../../registry";
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

/** 그래프 노드 한 칸 (roadmap-graph의 GraphNode와 같은 모양) */
export interface RoadmapGraphNode {
  id: string;
  label: string;
  sub?: string;
  href: string;
  percent: number;
  state: "done" | "progress" | "next" | "todo";
}

export interface RoadmapGraphEdge {
  from: string;
  to: string;
  kind: "requires" | "order";
  met: boolean;
}

const nodeOf = (roadmap: FlatRoadmap, progress: StudyProgress, open: boolean): RoadmapGraphNode => {
  const stats = roadmapStats(roadmap, progress);
  const state = stats.total > 0 && stats.done === stats.total ? "done" : stats.started > 0 ? "progress" : open ? "next" : "todo";
  return {
    id: roadmapKey(roadmap.path),
    label: roadmap.node.label,
    sub: `글 ${stats.total}편 · 적용 ${stats.done}`,
    href: `/roadmap/${roadmapKey(roadmap.path)}`,
    percent: stats.percent,
    state,
  };
};

const allRead = (roadmap: FlatRoadmap | undefined, progress: StudyProgress) =>
  Boolean(roadmap && roadmap.posts.every((slug) => stageOf(progress, slug) >= 1));

/**
 * 최상위 로드맵 지도. requires 경로("backend/api")를 최상위 로드맵("backend")으로 올려 선을 긋는다.
 * 선이 열리는(met) 건 그 requires 로드맵들을 다 읽었을 때다.
 */
export function topGraph(progress: StudyProgress): { nodes: RoadmapGraphNode[]; edges: RoadmapGraphEdge[] } {
  const tops = FLAT_ROADMAPS.filter((roadmap) => roadmap.path.length === 1);
  const edges: RoadmapGraphEdge[] = [];
  for (const roadmap of tops) {
    const to = roadmap.path[0];
    const bySource = new Map<string, boolean>();
    for (const key of roadmap.node.requires ?? []) {
      const from = key.split("/")[0];
      if (from === to) continue;
      bySource.set(from, (bySource.get(from) ?? true) && allRead(findRoadmap(key), progress));
    }
    for (const [from, met] of bySource) edges.push({ from, to, kind: "requires", met });
  }
  const anyStarted = tops.some((roadmap) => roadmapStats(roadmap, progress).started > 0);
  const nodes = tops.map((roadmap, index) => {
    const incoming = edges.filter((edge) => edge.to === roadmap.path[0]);
    // "지금 할 차례"는 앞 로드맵을 다 읽어 길이 열린 곳. 아무것도 시작 안 했으면 첫 로드맵 하나만
    const open = incoming.length > 0 ? incoming.every((edge) => edge.met) : !anyStarted && index === 0;
    return nodeOf(roadmap, progress, open);
  });
  return { nodes, edges };
}

/** 직무별 경로의 단계 한 칸 */
export interface TrackStepStats {
  label: string;
  roadmaps: { key: string; label: string; href: string }[];
  stats: ReturnType<typeof stageCounts>;
  /** 앞 단계를 다 읽었고 이 단계는 아직 다 읽지 않은 첫 칸 */
  isNext: boolean;
}

/**
 * 직무별 경로의 단계마다 진행률. 단계 안의 로드맵 글을 모아 센다.
 * 같은 글이 앞 단계에 이미 나왔으면(인터넷, Git 같은 공통 로드맵) 뒤 단계에서는 다시 세지 않는다.
 */
export function trackStats(track: Track, progress: StudyProgress) {
  const counted = new Set<string>();
  let foundNext = false;
  const steps: TrackStepStats[] = track.steps.map((step) => {
    const roadmaps = step.roadmaps.map((key) => findRoadmap(key)).filter((roadmap) => roadmap !== undefined);
    const posts = [...new Set(roadmaps.flatMap((roadmap) => roadmap.posts))].filter((slug) => !counted.has(slug));
    for (const slug of posts) counted.add(slug);
    const stats = stageCounts(posts, progress);
    const isNext = !foundNext && stats.started < stats.total;
    if (isNext) foundNext = true;
    return {
      label: step.label,
      roadmaps: roadmaps.map((roadmap) => ({ key: roadmapKey(roadmap.path), label: roadmap.node.label, href: `/roadmap/${roadmapKey(roadmap.path)}` })),
      stats,
      isNext,
    };
  });
  return { steps, total: stageCounts([...counted], progress) };
}
