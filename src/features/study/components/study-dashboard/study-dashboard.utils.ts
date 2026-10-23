import { getPostBySlug, postHref } from "@/features/posts/registry";
import { type StudyProgress, isDue, localDate, stageOf } from "@/features/roadmap/atoms/study-progress";
import { nextSlugs, roadmapStats } from "@/features/roadmap/hooks/use-roadmap-stats";
import { TOP_ROADMAPS, placementOf, roadmapHref } from "@/features/roadmap/registry";

/** 오늘 만기인 글 (상자 순서대로: 오래 못 본 것부터) */
export function dueSlugs(progress: StudyProgress, today = localDate()) {
  return Object.entries(progress.posts)
    .filter(([, post]) => isDue(post, today))
    .sort((a, b) => a[1].due.localeCompare(b[1].due) || a[1].box - b[1].box)
    .map(([slug]) => slug);
}

/** 활동한 날짜 목록으로 연속 일수와 총 일수를 센다 */
export function streak(progress: StudyProgress, today = localDate()) {
  const days = new Set(Object.values(progress.posts).map((post) => post.updatedAt));
  for (const checkpoint of Object.values(progress.checkpoints)) days.add(checkpoint.updatedAt);
  let current = 0;
  const cursor = new Date(today);
  // 오늘 아직 안 했으면 어제부터 센다
  if (!days.has(localDate(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(localDate(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { current, total: days.size, today: days.has(today) };
}

/** 읽기만 하고 설명을 안 쓴 채 사흘이 지난 글 */
export function unexplained(progress: StudyProgress, today = localDate(), limit = 5) {
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - 3);
  const line = localDate(cutoff);
  return Object.entries(progress.posts)
    .filter(([, post]) => post.stage === 1 && post.updatedAt <= line)
    .sort((a, b) => a[1].updatedAt.localeCompare(b[1].updatedAt))
    .slice(0, limit)
    .map(([slug]) => toLink(slug))
    .filter((item) => item !== null);
}

/** 틀린 횟수가 맞힌 횟수보다 많은 글 */
export function weakPosts(progress: StudyProgress, limit = 5) {
  return Object.entries(progress.posts)
    .filter(([, post]) => post.wrong > 0 && post.wrong >= post.correct)
    .sort((a, b) => b[1].wrong - b[1].correct - (a[1].wrong - a[1].correct))
    .slice(0, limit)
    .map(([slug, post]) => {
      const link = toLink(slug);
      return link ? { ...link, wrong: post.wrong, correct: post.correct } : null;
    })
    .filter((item) => item !== null);
}

/** 시작했지만 덜 끝난 최상위 로드맵, 적용률 낮은 순 */
export function roadmapsInProgress(progress: StudyProgress) {
  return TOP_ROADMAPS.map((roadmap) => ({ roadmap, stats: roadmapStats(roadmap, progress) }))
    .filter(({ stats }) => stats.started > 0 && stats.done < stats.total)
    .sort((a, b) => a.stats.percent - b.stats.percent)
    .map(({ roadmap, stats }) => ({ label: roadmap.node.label, href: roadmapHref(roadmap.path), stats }));
}

export function newPosts(progress: StudyProgress, count: number) {
  return nextSlugs(progress, count)
    .map((slug) => {
      const link = toLink(slug);
      const placement = placementOf(slug);
      return link && placement ? { ...link, roadmapLabel: placement.roadmap.trail.map((node) => node.label).join(" › ") } : null;
    })
    .filter((item) => item !== null);
}

function toLink(slug: string) {
  const post = getPostBySlug(slug);
  return post ? { slug, title: post.title, href: postHref(slug) } : null;
}

export { stageOf };
