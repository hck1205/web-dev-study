"use client";

import { useMemo, useState } from "react";
import { localDate, useGetStudyProgress } from "@/features/roadmap/atoms/study-progress";
import { dueSlugs, newPosts, roadmapsInProgress, streak, unexplained, weakPosts } from "./study-dashboard.utils";

/** 하루 2시간 기준: 복습 15분 → 새 글 2편 → 응용 20분 */
const NEW_PER_DAY = 2;

export function useStudyDashboard() {
  const progress = useGetStudyProgress();
  const [reviewing, setReviewing] = useState(false);
  // 날짜는 렌더마다 바뀌지 않게 한 번만 읽는다 (자정을 넘기면 새로고침)
  const [today] = useState(() => localDate());

  const plan = useMemo(
    () => ({
      due: dueSlugs(progress, today),
      fresh: newPosts(progress, NEW_PER_DAY),
      streak: streak(progress, today),
      unexplained: unexplained(progress, today),
      weak: weakPosts(progress),
      roadmaps: roadmapsInProgress(progress),
      studied: Object.keys(progress.posts).length,
    }),
    [progress, today],
  );

  return { ...plan, reviewing, startReview: () => setReviewing(true), stopReview: () => setReviewing(false) };
}
