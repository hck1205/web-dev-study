import type { QuizAnswer } from "../quiz-session.type";

export interface QuizProgressProps {
  total: number;
  /** 지금 풀고 있는 문제 (0부터) */
  index: number;
  answers: QuizAnswer[];
  score: number;
}
