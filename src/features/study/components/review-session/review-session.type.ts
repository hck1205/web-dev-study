import type { QuizQuestion } from "@/features/quiz/registry/types";

export type CardKind = "interview" | "summary" | "quiz";

/** 복습 카드 한 장. 글 하나에 한 장씩, 종류는 섞인다 */
export interface ReviewCard {
  slug: string;
  title: string;
  href: string;
  kind: CardKind;
  /** 앞면 */
  question: string;
  /** 뒷면 (quiz는 QuestionCard가 보여 주므로 비어 있다) */
  answer: string;
  quiz?: { question: QuizQuestion; order: number[] };
}

export interface ReviewResult {
  slug: string;
  knew: boolean;
}

export type ReviewPhase = "loading" | "playing" | "done" | "empty";

export interface ReviewSessionProps {
  /** 복습할 글. 비어 있으면 "오늘 할 복습이 없다"를 보여 준다 */
  slugs: string[];
  /** 한 번에 넘길 최대 카드 수 */
  limit?: number;
  onExit?: () => void;
}
