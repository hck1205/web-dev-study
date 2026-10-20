"use client";

import { useMemo, useState } from "react";
import { shuffle } from "@/common/utils/shuffle";
import { countByStatus, localDate, useGetVocabProgress, wordStatus } from "../../atoms/vocab-progress";
import { VOCABULARY, vocabHref } from "../../registry";
import type { DictionaryFilters, DictionaryOrder } from "./vocab-dictionary.type";
import { filterEntries, groupByLetter, orderByRank } from "./vocab-dictionary.utils";

const INITIAL: DictionaryFilters = { query: "", level: "all", theme: "all", status: "all" };

export function useVocabDictionary() {
  const progress = useGetVocabProgress();
  const [filters, setFilters] = useState<DictionaryFilters>(INITIAL);
  /** 무작위 순서일 때 표제어마다 정해 둔 자리. null이면 ABC 순 */
  const [rank, setRank] = useState<Map<string, number> | null>(null);
  const order: DictionaryOrder = rank ? "random" : "alpha";
  const today = localDate();

  const filtered = useMemo(() => filterEntries(VOCABULARY, filters, progress, today), [filters, progress, today]);

  // 섞기(Math.random)는 버튼을 누른 뒤에만 한다. 정적 HTML과 첫 렌더가 달라지지 않게.
  const reshuffle = () => setRank(new Map(shuffle(VOCABULARY).map((entry, index) => [entry.word, index])));

  const toItem = (entry: (typeof VOCABULARY)[number]) => ({
    entry,
    href: vocabHref(entry.word),
    status: wordStatus(progress[entry.word], today),
  });

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
    order,
    setOrder: (next: DictionaryOrder) => (next === "random" ? reshuffle() : setRank(null)),
    reshuffle,
    /** ABC 순이면 첫 글자별 묶음, 무작위면 제목 없는 묶음 하나 */
    groups: rank
      ? filtered.length > 0
        ? [{ letter: null, items: orderByRank(filtered, rank).map(toItem) }]
        : []
      : groupByLetter(filtered).map(({ letter, items }) => ({ letter, items: items.map(toItem) })),
  };
}
