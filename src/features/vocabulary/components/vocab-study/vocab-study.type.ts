import type { VocabEntry, VocabExample } from "../../registry";

/** 카드: 앞면(단어)을 보고 뜻을 떠올린 뒤 뒤집어 확인 / 나머지는 4지선다 */
export type StudyMode = "flashcard" | "meaning" | "cloze" | "listen";

export interface StudyOptions {
  mode: StudyMode;
  size: number;
  theme: string;
}

export interface StudyChoice {
  /** 보기로 보여 줄 글자 (뜻 또는 단어) */
  label: string;
  /** 이 보기가 가리키는 표제어 */
  word: string;
}

export interface StudyCard {
  entry: VocabEntry;
  /** 빈칸 퀴즈·카드 뒷면에 쓸 예문 */
  example: VocabExample;
  /** 4지선다 보기 (카드 모드에서는 비어 있다) */
  choices: StudyChoice[];
}

export interface StudyResult {
  word: string;
  knew: boolean;
}

export type StudyPhase = "setup" | "playing" | "done";
