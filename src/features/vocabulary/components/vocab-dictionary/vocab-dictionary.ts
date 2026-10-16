"use client";

import { useMemo, useState } from "react";
import { countByStatus, localDate, useGetVocabProgress, wordStatus } from "../../atoms/vocab-progress";
import { VOCABULARY, vocabHref } from "../../registry";
import type { DictionaryFilters } from "./vocab-dictionary.type";
import { filterEntries, groupByLetter } from "./vocab-dictionary.utils";

const INITIAL: DictionaryFilters = { query: "", level: "all", theme: "all", status: "all" };

export function useVocabDictionary() {
  const progress = useGetVocabProgress();
  const [filters, setFilters] = useState<DictionaryFilters>(INITIAL);
  const today = localDate();

  const filtered = useMemo(() => filterEntries(VOCABULARY, filters, progress, today), [filters, progress, today]);

  const update = <K extends keyof DictionaryFilters>(key: K, value: DictionaryFilters[K]) =>
    setFilters((current) => ({ ...current, [key]: value }));

  return {
    total: VOCABULARY.length,
    counts: countByStatus(VOCABULARY, progress, today),
    filters,
    update,
    reset: () => setFilters(INITIAL),
    isFiltered: JSON.stringify(filters) !== JSON.stringify(INITIAL),
    resultCount: filtered.length,
    groups: groupByLetter(filtered).map(({ letter, items }) => ({
      letter,
      items: items.map((entry) => ({
        entry,
        href: vocabHref(entry.word),
        status: wordStatus(progress[entry.word], today),
      })),
    })),
  };
}
