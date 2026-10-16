import type { StudyCard } from "../vocab-study.type";

export interface FlashcardProps {
  card: StudyCard;
  flipped: boolean;
  onFlip: () => void;
  onJudge: (knew: boolean) => void;
}
