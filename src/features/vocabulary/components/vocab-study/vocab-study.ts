"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { countByStatus, localDate, reviewWord, useGetVocabProgress, useSetVocabProgress } from "../../atoms/vocab-progress";
import { useSpeech } from "../../hooks/use-speech";
import { VOCABULARY, type VocabTheme } from "../../registry";
import { useStudyKeys } from "./hooks/use-study-keys";
import type { StudyCard, StudyOptions, StudyPhase, StudyResult } from "./vocab-study.type";
import { buildDeck, pickWords } from "./vocab-study.utils";

const DEFAULT_OPTIONS: StudyOptions = { mode: "flashcard", size: 10, theme: "all" };

export function useVocabStudy() {
  const progress = useGetVocabProgress();
  const setProgress = useSetVocabProgress();
  const { supported: canSpeak, speak } = useSpeech();

  const [options, setOptions] = useState<StudyOptions>(DEFAULT_OPTIONS);
  const [phase, setPhase] = useState<StudyPhase>("setup");
  const [deck, setDeck] = useState<StudyCard[]>([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<StudyResult[]>([]);
  const [flipped, setFlipped] = useState(false);
  /** 4지선다에서 고른 보기 (공개 전에는 null) */
  const [picked, setPicked] = useState<string | null>(null);

  const today = localDate();
  const pool = useMemo(
    () => (options.theme === "all" ? VOCABULARY : VOCABULARY.filter((entry) => entry.themes.includes(options.theme as VocabTheme))),
    [options.theme],
  );
  const card = deck[index];
  const answered = results.length > index;

  // 섞기(Math.random)는 시작 버튼을 누른 뒤에만 한다. 정적 HTML과 첫 렌더가 달라지지 않게.
  const startWith = useCallback(
    (words: typeof VOCABULARY) => {
      setDeck(buildDeck(words, VOCABULARY, options.mode));
      setIndex(0);
      setResults([]);
      setFlipped(false);
      setPicked(null);
      setPhase("playing");
    },
    [options.mode],
  );

  const start = () => startWith(pickWords(pool, progress, options.size, today));

  const record = useCallback(
    (knew: boolean) => {
      if (!card || answered) return;
      setResults((prev) => [...prev, { word: card.entry.word, knew }]);
      setProgress((prev) => reviewWord(prev, card.entry.word, knew, localDate()));
    },
    [card, answered, setProgress],
  );

  const next = useCallback(() => {
    if (!answered) return;
    setFlipped(false);
    setPicked(null);
    if (index + 1 >= deck.length) setPhase("done");
    else setIndex(index + 1);
  }, [answered, index, deck.length]);

  /** 카드 모드: 알았다/모르겠다를 누르면 기록하고 바로 다음 카드로 */
  const judge = useCallback(
    (knew: boolean) => {
      if (!card || answered) return;
      record(knew);
      setFlipped(false);
      if (index + 1 >= deck.length) setPhase("done");
      else setIndex(index + 1);
    },
    [card, answered, record, index, deck.length],
  );

  const choose = useCallback(
    (word: string) => {
      if (!card || answered) return;
      setPicked(word);
      record(word === card.entry.word);
    },
    [card, answered, record],
  );

  // 듣기 모드는 카드가 바뀔 때 자동으로 읽어 준다.
  useEffect(() => {
    if (phase === "playing" && options.mode === "listen" && card) speak(card.entry.word);
  }, [phase, options.mode, card, speak]);

  const flashcard = options.mode === "flashcard";
  useStudyKeys({
    enabled: phase === "playing",
    onNumber: (n) => {
      if (flashcard) {
        if (flipped && n <= 1) judge(n === 1);
      } else if (card?.choices[n]) choose(card.choices[n].word);
    },
    onFlip: flashcard ? () => setFlipped((value) => !value) : undefined,
    onNext: flashcard ? undefined : next,
  });

  const wrongWords = results.filter((result) => !result.knew).map((result) => result.word);

  return {
    canSpeak,
    speak,
    options,
    setOption: <K extends keyof StudyOptions>(key: K, value: StudyOptions[K]) =>
      setOptions((current) => ({ ...current, [key]: value })),
    poolSize: pool.length,
    counts: countByStatus(pool, progress, today),
    phase,
    deck,
    index,
    card,
    results,
    flipped,
    flip: () => setFlipped((value) => !value),
    picked,
    answered,
    start,
    judge,
    choose,
    next,
    retryWrong: () => startWith(VOCABULARY.filter((entry) => wrongWords.includes(entry.word))),
    backToSetup: () => setPhase("setup"),
  };
}
