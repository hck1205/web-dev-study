import type { StudyResult } from "../vocab-study.type";

export interface StudySummaryProps {
  results: StudyResult[];
  onRetryWrong: () => void;
  onRestart: () => void;
}
