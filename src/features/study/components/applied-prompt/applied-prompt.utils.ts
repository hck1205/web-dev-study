import type { StudyProgress } from "@/features/roadmap/atoms/study-progress";
import { stageOf } from "@/features/roadmap/atoms/study-progress";
import type { AppliedQuestion } from "../../registry/applied";

/**
 * 오늘 풀 응용 질문을 고른다.
 * 1순위: 엮인 글을 모두 읽었고 아직 안 푼 것 → 2순위: 읽었지만 "아직"이었던 것 → 3순위: 일부만 읽은 것(글을 더 읽으라는 신호).
 * 같은 순위 안에서는 날짜 기반으로 하나를 고정해 하루 동안 같은 질문이 나오게 한다.
 */
export function pickApplied(questions: AppliedQuestion[], progress: StudyProgress, today: string): AppliedQuestion | undefined {
  const applied = progress.applied ?? {};
  const readAll = (question: AppliedQuestion) => question.posts.every((slug) => stageOf(progress, slug) >= 1);
  const readSome = (question: AppliedQuestion) => question.posts.some((slug) => stageOf(progress, slug) >= 1);

  const tiers = [
    questions.filter((question) => readAll(question) && !applied[question.id]),
    questions.filter((question) => readAll(question) && applied[question.id] && !applied[question.id].knew),
    questions.filter((question) => !readAll(question) && readSome(question) && !applied[question.id]),
  ];
  const pool = tiers.find((tier) => tier.length > 0);
  if (!pool) return undefined;
  const seed = [...today].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return pool[seed % pool.length];
}
