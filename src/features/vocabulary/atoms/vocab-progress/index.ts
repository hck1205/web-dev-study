"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { vocabProgressAtom } from "./utils";

export type { VocabProgress, WordProgress, WordStatus } from "./types";
export { BOX_INTERVAL_DAYS, MAX_BOX, STATUS_LABELS, countByStatus, localDate, reviewWord, wordStatus } from "./utils";

export const useGetVocabProgress = () => useAtomValue(vocabProgressAtom);
export const useSetVocabProgress = () => useSetAtom(vocabProgressAtom);
export const useResetVocabProgress = () => useResetAtom(vocabProgressAtom);
