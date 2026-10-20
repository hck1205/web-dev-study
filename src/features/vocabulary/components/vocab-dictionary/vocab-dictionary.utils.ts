import type { VocabProgress } from "../../atoms/vocab-progress";
import { wordStatus } from "../../atoms/vocab-progress";
import type { VocabEntry } from "../../registry";
import type { DictionaryFilters } from "./vocab-dictionary.type";

/** 표제어·뜻·동의어에서 찾는다 (대소문자 무시, 모든 단어 AND) */
function matchesQuery(entry: VocabEntry, query: string) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = [entry.word, entry.meaning, entry.definition, ...entry.synonyms].join(" ").toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

export function filterEntries(entries: VocabEntry[], filters: DictionaryFilters, progress: VocabProgress, today: string) {
  return entries.filter(
    (entry) =>
      matchesQuery(entry, filters.query) &&
      (filters.level === "all" || entry.level === filters.level) &&
      (filters.theme === "all" || entry.themes.includes(filters.theme)) &&
      (filters.status === "all" || wordStatus(progress[entry.word], today) === filters.status),
  );
}

/** 첫 글자별로 묶는다 (이미 ABC 순으로 정렬된 목록을 받는다) */
export function groupByLetter(entries: VocabEntry[]) {
  const groups = new Map<string, VocabEntry[]>();
  for (const entry of entries) {
    const letter = entry.word[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), entry]);
  }
  return [...groups].map(([letter, items]) => ({ letter, items }));
}

/** 섞어 둔 순위(표제어 → 자리)대로 줄 세운다 */
export function orderByRank(entries: VocabEntry[], rank: Map<string, number>) {
  return [...entries].sort((a, b) => (rank.get(a.word) ?? 0) - (rank.get(b.word) ?? 0));
}
