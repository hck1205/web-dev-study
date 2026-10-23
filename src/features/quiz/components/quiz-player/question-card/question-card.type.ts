import type { DeckItem, QuizAnswer } from "@/features/quiz/hooks/use-quiz-runner";

export interface QuestionCardProps {
  item: DeckItem;
  number: number;
  answer?: QuizAnswer;
  isLast: boolean;
  onPick: (displayIndex: number) => void;
  onNext: () => void;
}

export type ChoiceState = "idle" | "correct" | "wrong" | "dim";
