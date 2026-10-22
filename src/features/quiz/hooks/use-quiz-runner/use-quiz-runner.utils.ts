import { shuffle } from "@/common/utils/shuffle";
import type { QuizQuestion } from "../../registry/types";
import type { DeckItem, QuizAnswer } from "./use-quiz-runner.type";

/** 문제 순서와 각 문제의 보기 순서를 함께 섞는다. 정답 위치를 외워서 푸는 걸 막는다. */
export const buildDeck = (questions: QuizQuestion[]): DeckItem[] =>
  shuffle(questions).map((question) => ({ question, order: shuffle(question.choices.map((_, index) => index)) }));

export const countCorrect = (answers: QuizAnswer[]) => answers.filter((answer) => answer.correct).length;
