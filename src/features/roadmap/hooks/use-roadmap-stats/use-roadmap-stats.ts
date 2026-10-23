"use client";

import { useMemo } from "react";
import { useGetStudyProgress } from "../../atoms/study-progress";
import type { FlatRoadmap } from "../../registry";
import { roadmapStats } from "./use-roadmap-stats.utils";

/** 로드맵 하나의 진행 상황 (단계별 개수, 다음 글, 관문, 선행 로드맵) */
export function useRoadmapStats(roadmap: FlatRoadmap) {
  const progress = useGetStudyProgress();
  return useMemo(() => roadmapStats(roadmap, progress), [roadmap, progress]);
}
