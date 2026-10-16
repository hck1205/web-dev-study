import type { VocabEntry } from "../../registry";

export interface HighlightedSentenceProps {
  sentence: string;
  entry: Pick<VocabEntry, "word" | "forms">;
  /** true면 표제어 자리를 빈칸으로 가린다 (빈칸 퀴즈) */
  blank?: boolean;
}
