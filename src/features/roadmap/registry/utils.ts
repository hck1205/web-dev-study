import type { Checkpoint, FlatCheckpoint, FlatRoadmap, PostItem, PostPlacement, RoadmapItem, RoadmapNode, Tier } from "./types";

export const isRoadmap = (item: RoadmapItem): item is RoadmapNode => typeof item === "object" && "items" in item;
export const isCheckpoint = (item: RoadmapItem): item is Checkpoint => typeof item === "object" && "checkpoint" in item;
export const isPost = (item: RoadmapItem): item is PostItem => !isRoadmap(item) && !isCheckpoint(item);

export const postSlug = (item: PostItem) => (typeof item === "string" ? item : item.post);
const postTier = (item: PostItem, fallback: Tier) => (typeof item === "string" ? fallback : (item.tier ?? fallback));

export const roadmapKey = (path: string[]) => path.join("/");
export const roadmapHref = (path: string[]) => `/roadmap/${roadmapKey(path)}`;
export const checkpointHref = (id: string) => `/roadmap/${id}`;

/** 하위 로드맵까지 포함한 모든 글 slug (순서대로) */
export function postsOf(node: RoadmapNode): string[] {
  return node.items.flatMap((item) => (isRoadmap(item) ? postsOf(item) : isPost(item) ? [postSlug(item)] : []));
}

export function flattenRoadmaps(nodes: RoadmapNode[], parentPath: string[] = [], parentTrail: RoadmapNode[] = [], parentTier: Tier = 2): FlatRoadmap[] {
  return nodes.flatMap((node) => {
    const path = [...parentPath, node.id];
    const trail = [...parentTrail, node];
    const tier = node.tier ?? parentTier;
    const children = node.items.filter(isRoadmap);
    return [{ node, path, trail, posts: postsOf(node), tier }, ...flattenRoadmaps(children, path, trail, tier)];
  });
}

/** 글마다 어느 로드맵의 몇 번째인지, 앞뒤 글은 무엇인지 */
export function placePosts(flat: FlatRoadmap[]): Map<string, PostPlacement> {
  const placements = new Map<string, PostPlacement>();
  // 글이 직접 들어 있는(가장 깊은) 로드맵이 그 글의 자리다. flat은 부모 → 자식 순이라 나중 것이 더 깊다.
  for (const roadmap of flat) {
    roadmap.node.items.filter(isPost).forEach((item) => {
      const slug = postSlug(item);
      const index = roadmap.posts.indexOf(slug);
      placements.set(slug, {
        slug,
        tier: postTier(item, roadmap.tier),
        roadmap,
        index,
        prev: roadmap.posts[index - 1],
        next: roadmap.posts[index + 1],
      });
    });
  }
  return placements;
}

export function flattenCheckpoints(flat: FlatRoadmap[]): FlatCheckpoint[] {
  return flat.flatMap((roadmap) => {
    const before: string[] = [];
    let count = 0;
    return roadmap.node.items.flatMap((item) => {
      if (isRoadmap(item)) {
        before.push(...postsOf(item));
        return [];
      }
      if (isPost(item)) {
        before.push(postSlug(item));
        return [];
      }
      count += 1;
      return [{ id: `${roadmapKey(roadmap.path)}/cp-${count}`, label: item.checkpoint, description: item.description, roadmap, posts: [...before] }];
    });
  });
}

/** 데이터가 어긋나면 빌드를 멈춘다: 없는 글, 두 번 들어간 글, 로드맵에 빠진 글, 없는 requires 경로 */
export function validateRoadmaps(flat: FlatRoadmap[], allSlugs: string[]) {
  const known = new Set(allSlugs);
  const seen = new Map<string, string>();
  const keys = new Set(flat.map((roadmap) => roadmapKey(roadmap.path)));
  for (const roadmap of flat) {
    const key = roadmapKey(roadmap.path);
    for (const item of roadmap.node.items.filter(isPost)) {
      const slug = postSlug(item);
      if (!known.has(slug)) throw new Error(`[roadmap] ${key}: 없는 글 "${slug}"`);
      const where = seen.get(slug);
      if (where) throw new Error(`[roadmap] "${slug}"가 두 로드맵에 들어 있다: ${where}, ${key}`);
      seen.set(slug, key);
    }
    for (const required of roadmap.node.requires ?? []) {
      if (!keys.has(required)) throw new Error(`[roadmap] ${key}: requires에 없는 로드맵 "${required}"`);
    }
  }
  const missing = allSlugs.filter((slug) => !seen.has(slug));
  if (missing.length) throw new Error(`[roadmap] 로드맵에 빠진 글 ${missing.length}편: ${missing.join(", ")}`);
}
