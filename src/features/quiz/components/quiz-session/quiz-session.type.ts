import type { QuizQuestion } from "../../registry";

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
