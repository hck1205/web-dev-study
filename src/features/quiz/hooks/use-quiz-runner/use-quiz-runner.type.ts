import type { QuizQuestion } from "../../registry/types";

/** 섞인 문제 한 장. order[보기 표시 순서] = 원래 choices 인덱스 */
export interface DeckItem {
  question: QuizQuestion;
  order: number[];
}

/** picked는 원래 choices 기준 인덱스 */
export interface QuizAnswer {
  picked: number;
  correct: boolean;
}

export type QuizPhase = "intro" | "playing" | "done";

export interface UseQuizRunnerOptions {
  questions: QuizQuestion[];
  /** 한 바퀴를 다 풀었을 때 (점수, 문제 수, 틀린 문제의 글 slug 목록) */
  onDone?: (score: number, total: number, wrongPosts: string[]) => void;
}
