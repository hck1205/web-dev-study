import type { DeckItem, QuizAnswer } from "../quiz-session.type";

export interface QuizResultProps {
  deck: DeckItem[];
  answers: QuizAnswer[];
  score: number;
  onRetryWrong: () => void;
  onRestart: () => void;
}
