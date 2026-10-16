import { shuffle } from "@/common/utils/shuffle";
import { type VocabProgress, wordStatus } from "../../atoms/vocab-progress";
import type { VocabEntry } from "../../registry";
import type { StudyCard, StudyChoice, StudyMode } from "./vocab-study.type";

export const MODE_LABELS: Record<StudyMode, { title: string; detail: string }> = {
  flashcard: { title: "카드", detail: "단어를 보고 뜻을 떠올린 뒤 뒤집어 확인한다" },
  meaning: { title: "뜻 고르기", detail: "단어를 보고 알맞은 뜻을 고른다" },
  cloze: { title: "빈칸 채우기", detail: "예문의 빈칸에 들어갈 단어를 고른다" },
  listen: { title: "듣고 고르기", detail: "발음을 듣고 맞는 단어를 고른다" },
};

/**
 * 이번에 공부할 단어를 고른다. 복습할 때가 된 단어 → 새 단어 → 익히는 중인 단어 순으로 채우고,
 * 고른 단어들의 순서는 섞는다.
 */
export function pickWords(pool: VocabEntry[], progress: VocabProgress, size: number, today: string) {
  const byStatus = (status: ReturnType<typeof wordStatus>) =>
    pool.filter((entry) => wordStatus(progress[entry.word], today) === status);
  const due = byStatus("due").sort((a, b) => progress[a.word].due.localeCompare(progress[b.word].due));
  const ordered = [...due, ...shuffle(byStatus("new")), ...shuffle(byStatus("learning")), ...shuffle(byStatus("mastered"))];
  return shuffle(ordered.slice(0, size));
}

/** 정답 하나와 오답 셋. 빈칸·듣기 문제는 품사가 같은 단어를 오답으로 먼저 고른다(문장에 그럴듯하게 들어가도록). */
function buildChoices(entry: VocabEntry, all: VocabEntry[], mode: StudyMode): StudyChoice[] {
  const others = all.filter((other) => other.word !== entry.word);
  const samePos = shuffle(others.filter((other) => other.pos.some((pos) => entry.pos.includes(pos))));
  const rest = shuffle(others.filter((other) => !samePos.includes(other)));
  const distractors = (mode === "meaning" ? shuffle(others) : [...samePos, ...rest]).slice(0, 3);
  const toChoice = (item: VocabEntry): StudyChoice => ({ label: mode === "meaning" ? item.meaning : item.word, word: item.word });
  return shuffle([entry, ...distractors].map(toChoice));
}

export function buildDeck(words: VocabEntry[], all: VocabEntry[], mode: StudyMode): StudyCard[] {
  return words.map((entry) => ({
    entry,
    example: entry.examples[Math.floor(Math.random() * entry.examples.length)],
    choices: mode === "flashcard" ? [] : buildChoices(entry, all, mode),
  }));
}
