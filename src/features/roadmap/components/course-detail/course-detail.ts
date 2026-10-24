"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useGetStudyProgress } from "../../atoms/study-progress";
import { courseStats, incomingCourses } from "../../hooks/use-roadmap-stats";
import { COURSES, courseHref, findCourse } from "../../registry";
import type { StageGroup } from "./course-detail.type";

export function useCourseDetail() {
  const params = useParams<{ id?: string }>();
  const course = params.id ? findCourse(params.id) : undefined;
  const progress = useGetStudyProgress();

  const data = useMemo(() => {
    if (!course) return undefined;
    const stats = courseStats(course, progress);
    // 같은 group이 이어지는 단계를 한 묶음으로. 번호는 묶음과 상관없이 처음부터 센다
    const groups: StageGroup[] = [];
    stats.stages.forEach((stage, index) => {
      const last = groups.at(-1);
      const item = { ...stage, number: index + 1 };
      if (last && last.label === stage.group) last.stages.push(item);
      else groups.push({ label: stage.group, stages: [item] });
    });
    const next = course.next.map((link) => {
      const target = COURSES.find((item) => item.id === link.course)!;
      return { id: target.id, label: target.label, why: link.why, href: courseHref(target.id) };
    });
    const incoming = incomingCourses(course.id).map((item) => ({ ...item, href: courseHref(item.id) }));
    return { groups, total: stats.total, lastNumber: stats.stages.length, next, incoming };
  }, [course, progress]);

  return { course, data };
}
