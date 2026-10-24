"use client";

import { useMemo, useState } from "react";
import { POSTS, getPostBySlug, postHref } from "@/features/posts/registry";
import { useGetStudyProgress } from "../../atoms/study-progress";
import { courseGraph, courseStats, nextSlugs, roadmapStats, tierStats, topGraph } from "../../hooks/use-roadmap-stats";
import { COURSES, TOP_ROADMAPS, courseHref, placementOf, roadmapHref } from "../../registry";

const TIER_LABELS = { 1: "핵심", 2: "실무·면접", 3: "참고" } as const;

export type RoadmapView = "graph" | "list";

export function useRoadmapIndex() {
  const progress = useGetStudyProgress();
  const [view, setView] = useState<RoadmapView>("graph");

  const data = useMemo(() => {
    const tiers = tierStats(progress);
    const next = nextSlugs(progress, 3)
      .map((slug) => ({ slug, post: getPostBySlug(slug), placement: placementOf(slug) }))
      .filter((item) => item.post && item.placement)
      .map((item) => ({
        slug: item.slug,
        title: item.post!.title,
        href: postHref(item.slug),
        roadmapLabel: item.placement!.roadmap.trail.map((node) => node.label).join(" › "),
        tier: item.placement!.tier,
      }));

    const roadmaps = TOP_ROADMAPS.map((roadmap) => {
      const stats = roadmapStats(roadmap, progress);
      return {
        key: roadmap.path[0],
        href: roadmapHref(roadmap.path),
        label: roadmap.node.label,
        description: roadmap.node.description,
        tier: roadmap.tier,
        tierLabel: TIER_LABELS[roadmap.tier],
        stats,
        locked: stats.requirements.some((requirement) => !requirement.met),
        requirementLabels: stats.requirements.filter((requirement) => !requirement.met).map((requirement) => requirement.roadmap.node.label),
      };
    });

    const courses = COURSES.map((course) => {
      const stats = courseStats(course, progress);
      return { id: course.id, label: course.label, description: course.description, href: courseHref(course.id), total: stats.total, stageCount: course.stages.length };
    });

    return {
      tiers,
      tierLabels: TIER_LABELS,
      next,
      roadmaps,
      courses,
      courseGraph: courseGraph(progress),
      graph: topGraph(progress),
      postCount: POSTS.length,
    };
  }, [progress]);
  return { ...data, view, setView };
}
