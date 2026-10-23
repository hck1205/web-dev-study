import type { QuizAnswer } from "@/features/quiz/hooks/use-quiz-runner";
import type { ChoiceState } from "./question-card.type";

/** 정답 공개 후 보기 하나의 상태. original은 원래 choices 인덱스. */
export function choiceState(original: number, correctIndex: number, answer?: QuizAnswer): ChoiceState {
  if (!answer) return "idle";
  if (original === correctIndex) return "correct";
  if (original === answer.picked) return "wrong";
  return "dim";
}
