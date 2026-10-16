import type { StudyCard, StudyMode } from "../vocab-study.type";

export interface ChoiceCardProps {
  card: StudyCard;
  mode: Exclude<StudyMode, "flashcard">;
  picked: string | null;
  isLast: boolean;
  onChoose: (word: string) => void;
  onNext: () => void;
}

export type ChoiceState = "idle" | "correct" | "wrong" | "dim";
