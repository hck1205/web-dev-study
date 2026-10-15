import type { QuizQuestion } from "../../registry";
import type { DeckItem, QuizAnswer } from "./quiz-session.type";

/** Fisher–Yates. 원본은 건드리지 않는다. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** 문제 순서와 각 문제의 보기 순서를 함께 섞는다. 정답 위치를 외워서 푸는 걸 막는다. */
export const buildDeck = (questions: QuizQuestion[]): DeckItem[] =>
  shuffle(questions).map((question) => ({ question, order: shuffle(question.choices.map((_, index) => index)) }));

export const countCorrect = (answers: QuizAnswer[]) => answers.filter((answer) => answer.correct).length;

/** 문제가 나온 글 slug 목록 (중복 없이, 처음 나온 순서) */
export const sourceSlugs = (questions: QuizQuestion[]) => [...new Set(questions.map((q) => q.post))];
