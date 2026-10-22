import type { ReactNode } from "react";
import type { QuizRunner } from "../../hooks/use-quiz-runner";

export interface QuizPlayerProps {
  runner: QuizRunner;
  /** 시작 전 화면. 시작 버튼은 player가 그리니 설명·출처만 넘긴다 */
  intro?: ReactNode;
  /** 결과 화면의 세 번째 버튼 */
  home?: { href: string; label: string };
}
