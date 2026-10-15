import type { DeckItem, QuizAnswer } from "../quiz-session.type";

export interface QuestionCardProps {
  item: DeckItem;
  number: number;
  answer?: QuizAnswer;
  isLast: boolean;
  onPick: (displayIndex: number) => void;
  onNext: () => void;
}

export type ChoiceState = "idle" | "correct" | "wrong" | "dim";
