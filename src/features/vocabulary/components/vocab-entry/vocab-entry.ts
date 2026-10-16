"use client";

import { useParams } from "next/navigation";
import { localDate, useGetVocabProgress, wordStatus } from "../../atoms/vocab-progress";
import { findWord, hasWord, VOCABULARY, vocabHref } from "../../registry";

/** 동의어·반의어가 사전에 있으면 그 단어 페이지로 링크한다 */
const toWordLink = (word: string) => ({ word, href: hasWord(word) ? vocabHref(word) : undefined });

export function useVocabEntry() {
  const params = useParams<{ word?: string }>();
  const entry = findWord(decodeURIComponent(params.word ?? ""));
  const progress = useGetVocabProgress();

  if (!entry) return { found: false as const };

  const index = VOCABULARY.indexOf(entry);
  const prev = VOCABULARY[index - 1];
  const next = VOCABULARY[index + 1];
  const record = progress[entry.word];

  return {
    found: true as const,
    entry,
    synonyms: entry.synonyms.map(toWordLink),
    antonyms: (entry.antonyms ?? []).map(toWordLink),
    status: wordStatus(record, localDate()),
    record,
    prev: prev && { word: prev.word, href: vocabHref(prev.word) },
    next: next && { word: next.word, href: vocabHref(next.word) },
  };
}
