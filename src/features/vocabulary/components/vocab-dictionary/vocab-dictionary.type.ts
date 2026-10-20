import type { WordStatus } from "../../atoms/vocab-progress";
import type { CefrLevel, VocabTheme } from "../../registry";

export interface DictionaryFilters {
  query: string;
  level: CefrLevel | "all";
  theme: VocabTheme | "all";
  status: WordStatus | "all";
}

/** 목록 순서. 무작위는 누를 때마다 새로 섞는다 */
export type DictionaryOrder = "alpha" | "random";
