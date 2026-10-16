import type { WordStatus } from "../../atoms/vocab-progress";
import type { CefrLevel, VocabTheme } from "../../registry";

export interface DictionaryFilters {
  query: string;
  level: CefrLevel | "all";
  theme: VocabTheme | "all";
  status: WordStatus | "all";
}
