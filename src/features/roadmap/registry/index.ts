import { POSTS } from "@/features/posts/registry";
import { ROADMAPS } from "./roadmaps";
import { COURSES } from "./courses";
import type { FlatCheckpoint, FlatRoadmap, PostPlacement } from "./types";
import { flattenCheckpoints, flattenRoadmaps, placePosts, roadmapKey, validateCourses, validateRoadmaps } from "./utils";

export type { Checkpoint, FlatCheckpoint, FlatRoadmap, PostItem, PostPlacement, RoadmapItem, RoadmapNode, Course, CourseLink, CourseStage, Tier } from "./types";
export { checkpointHref, isCheckpoint, isPost, isRoadmap, postSlug, roadmapHref, roadmapKey } from "./utils";

export { COURSES, ROADMAPS };

/** 부모 → 자식 순으로 평탄화한 모든 로드맵 */
export const FLAT_ROADMAPS: FlatRoadmap[] = flattenRoadmaps(ROADMAPS);

validateRoadmaps(
  FLAT_ROADMAPS,
  POSTS.map((post) => post.slug),
);
validateCourses(COURSES, FLAT_ROADMAPS);

const placements: Map<string, PostPlacement> = placePosts(FLAT_ROADMAPS);

export const CHECKPOINTS: FlatCheckpoint[] = flattenCheckpoints(FLAT_ROADMAPS);

/** 최상위 로드맵 */
export const TOP_ROADMAPS = FLAT_ROADMAPS.filter((roadmap) => roadmap.path.length === 1);

export const findRoadmap = (key: string) => FLAT_ROADMAPS.find((roadmap) => roadmapKey(roadmap.path) === key);

export const findCheckpoint = (id: string) => CHECKPOINTS.find((checkpoint) => checkpoint.id === id);

/** 글이 로드맵 어디에 있는지. 모든 글은 한 로드맵에 들어 있다 */
export const placementOf = (slug: string) => placements.get(slug);

export const roadmapCrumbs = (roadmap: FlatRoadmap) =>
  roadmap.trail.map((node, index) => ({ label: node.label, href: `/roadmap/${roadmapKey(roadmap.path.slice(0, index + 1))}` }));

/** 로드맵 노드 안의 직접 하위 로드맵 */
export const childRoadmaps = (roadmap: FlatRoadmap) =>
  FLAT_ROADMAPS.filter((other) => other.path.length === roadmap.path.length + 1 && roadmapKey(other.path.slice(0, -1)) === roadmapKey(roadmap.path));

/** 로드맵 안(하위 포함)의 글마다 등급 */
export const tierOf = (slug: string) => placements.get(slug)?.tier ?? 2;

export const courseHref = (id: string) => `/roadmap/course/${id}`;

export const findCourse = (id: string) => COURSES.find((course) => course.id === id);

/** 상단 메뉴의 로드맵 하위 항목 (서버 layout에서 쓰므로 React에 의존하지 않는다) */
export const COURSE_NAV = [
  ...COURSES.map((course) => ({ id: `roadmap/course/${course.id}`, label: course.label, href: courseHref(course.id) })),
];
