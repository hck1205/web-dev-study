import type { DeckItem, QuizAnswer } from "@/features/quiz/hooks/use-quiz-runner";

export interface QuizResultProps {
  deck: DeckItem[];
  answers: QuizAnswer[];
  score: number;
  onRetryWrong: () => void;
  onRestart: () => void;
  /** 결과 화면의 세 번째 버튼. 없으면 "다른 토픽"(/quiz)으로 간다 */
  home?: { href: string; label: string };
}
