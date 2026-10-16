"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { localDate, useGetVocabProgress, wordStatus } from "../../atoms/vocab-progress";
import { findWord, hasWord, VOCABULARY, vocabHref, type VocabTheme } from "../../registry";

/** 동의어·반의어가 사전에 있으면 그 단어 페이지로 링크한다 */
const toWordLink = (word: string) => ({ word, href: hasWord(word) ? vocabHref(word) : undefined });

export function useVocabEntry() {
  const params = useParams<{ word?: string }>();
  const entry = findWord(decodeURIComponent(params.word ?? ""));
  const progress = useGetVocabProgress();
  const [context, setContext] = useState<VocabTheme | "all">("all");
  /** 번역 가리기: 켜면 예문 번역이 가려지고, 예문마다 눌러서 확인한다 */
  const [hideTranslation, setHideTranslation] = useState(false);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  if (!entry) return { found: false as const };

  const index = VOCABULARY.indexOf(entry);
  const prev = VOCABULARY[index - 1];
  const next = VOCABULARY[index + 1];
  const record = progress[entry.word];

  const contexts = [...new Set(entry.examples.map((example) => example.context).filter((c) => c !== undefined))];
  const examples = entry.examples
    .map((example, index) => ({ ...example, index }))
    .filter((example) => context === "all" || example.context === context);

  return {
    found: true as const,
    entry,
    examples,
    contexts,
    context,
    setContext,
    hideTranslation,
    toggleHideTranslation: () => {
      setHideTranslation((value) => !value);
      setRevealed(new Set());
    },
    isRevealed: (index: number) => !hideTranslation || revealed.has(index),
    reveal: (index: number) => setRevealed((current) => new Set(current).add(index)),
    synonyms: entry.synonyms.map(toWordLink),
    antonyms: (entry.antonyms ?? []).map(toWordLink),
    status: wordStatus(record, localDate()),
    record,
    prev: prev && { word: prev.word, href: vocabHref(prev.word) },
    next: next && { word: next.word, href: vocabHref(next.word) },
  };
}
