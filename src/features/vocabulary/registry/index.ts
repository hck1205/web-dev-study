import type { VocabEntry } from "./types";
import { sortByWord, validateVocabulary } from "./utils";
import { WORDS_A } from "./words/a";
import { WORDS_B } from "./words/b";
import { WORDS_C } from "./words/c";
import { WORDS_D } from "./words/d";
import { WORDS_E } from "./words/e";
import { WORDS_F } from "./words/f";
import { WORDS_G } from "./words/g";
import { WORDS_H } from "./words/h";
import { WORDS_I } from "./words/i";
import { WORDS_J } from "./words/j";
import { WORDS_L } from "./words/l";
import { WORDS_M } from "./words/m";
import { WORDS_N } from "./words/n";
import { WORDS_O } from "./words/o";
import { WORDS_P } from "./words/p";
import { WORDS_R } from "./words/r";
import { WORDS_S } from "./words/s";
import { WORDS_T } from "./words/t";
import { WORDS_U } from "./words/u";
import { WORDS_V } from "./words/v";
import { WORDS_Z } from "./words/z";

export type { CefrLevel, PartOfSpeech, VocabConfusable, VocabEntry, VocabExample, VocabTheme } from "./types";
export { POS_LABELS, THEME_LABELS, splitAtWord, vocabHref, wordKey, wordPattern } from "./utils";

/** 사전 전체 (ABC 순). 새 단어는 words/{첫 글자}.ts 에 추가한다. 이미 있는 단어면 빌드가 멈춘다. */
export const VOCABULARY: VocabEntry[] = sortByWord(validateVocabulary([...WORDS_A, ...WORDS_B, ...WORDS_C, ...WORDS_D, ...WORDS_E, ...WORDS_F, ...WORDS_G, ...WORDS_H, ...WORDS_I, ...WORDS_J, ...WORDS_L, ...WORDS_M, ...WORDS_N, ...WORDS_O, ...WORDS_P, ...WORDS_R, ...WORDS_S, ...WORDS_T, ...WORDS_U, ...WORDS_V, ...WORDS_Z]));

const byWord = new Map(VOCABULARY.map((entry) => [entry.word, entry]));

export const findWord = (word: string) => byWord.get(word.trim().toLowerCase());

export const hasWord = (word: string) => byWord.has(word.trim().toLowerCase());
