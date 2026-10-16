import { atomWithStorage } from "jotai/utils";
import type { VocabProgress, WordProgress, WordStatus } from "./types";

export const STATUS_LABELS: Record<WordStatus, string> = {
  new: "새 단어",
  due: "복습할 단어",
  learning: "익히는 중",
  mastered: "익힌 단어",
};

/** 이 브라우저의 localStorage에만 저장된다. */
export const VOCAB_PROGRESS_STORAGE_KEY = "vocab-progress";

export const vocabProgressAtom = atomWithStorage<VocabProgress>(VOCAB_PROGRESS_STORAGE_KEY, {});

/** 상자 번호별 다음 복습까지의 날 수. 잘 아는 단어일수록 드물게 다시 본다 */
export const BOX_INTERVAL_DAYS = [0, 1, 2, 4, 7, 15] as const;

export const MAX_BOX = BOX_INTERVAL_DAYS.length - 1;

/** 로컬 날짜를 YYYY-MM-DD로 */
export function localDate(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(date: string, days: number) {
  const [y, m, d] = date.split("-").map(Number);
  return localDate(new Date(y, m - 1, d + days));
}

/** 한 번 풀거나 카드를 넘긴 결과를 반영한다. 맞으면 상자를 올리고, 틀리면 1번 상자(내일 다시)로 보낸다. */
export function reviewWord(progress: VocabProgress, word: string, knew: boolean, today = localDate()): VocabProgress {
  const current: WordProgress = progress[word] ?? { box: 0, due: today, correct: 0, wrong: 0 };
  const box = knew ? Math.min(current.box + 1, MAX_BOX) : 1;
  return {
    ...progress,
    [word]: {
      box,
      due: addDays(today, BOX_INTERVAL_DAYS[box]),
      correct: current.correct + (knew ? 1 : 0),
      wrong: current.wrong + (knew ? 0 : 1),
    },
  };
}

export function wordStatus(progress: WordProgress | undefined, today = localDate()): WordStatus {
  if (!progress) return "new";
  if (progress.due <= today) return "due";
  return progress.box >= MAX_BOX - 1 ? "mastered" : "learning";
}

/** 상태별 단어 수 */
export function countByStatus(words: { word: string }[], progress: VocabProgress, today = localDate()) {
  const counts: Record<WordStatus, number> = { new: 0, due: 0, learning: 0, mastered: 0 };
  for (const { word } of words) counts[wordStatus(progress[word], today)] += 1;
  return counts;
}
