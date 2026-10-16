export type PartOfSpeech = "noun" | "verb" | "adjective" | "adverb";

/** CEFR 기준 난이도. 이 사전은 고급(C1~C2) 어휘만 담는다. */
export type CefrLevel = "C1" | "C2";

/** 어휘를 묶어 보는 주제. 공부할 때 필터로 쓴다. */
export type VocabTheme = "academic" | "business" | "tech" | "argument" | "emotion" | "everyday";

export interface VocabExample {
  /** 영어 예문. 표제어(또는 변화형: -s, -ed, -ing, -ly 등)가 반드시 들어간다. 빈칸 퀴즈가 이 부분을 가린다 */
  en: string;
  /** 자연스러운 한국어 번역 */
  ko: string;
  /** 이 예문에서 볼 점 (쓰임, 뉘앙스, 문법). 없어도 된다 */
  note?: string;
}

export interface VocabConfusable {
  word: string;
  /** 무엇이 다른지 한국어로 한두 문장 */
  note: string;
}

/** 사전의 한 항목. 표제어(word)가 사전 전체에서 유일해야 하며, 겹치면 빌드가 멈춘다. */
export interface VocabEntry {
  /** 표제어. 소문자 원형 (예: "ameliorate"). URL(/vocabulary/{word})로도 쓴다 */
  word: string;
  pos: PartOfSpeech[];
  /** 미국식 발음 기호. 예: "/əˈmiːliəreɪt/" */
  ipa: string;
  level: CefrLevel;
  /**
   * 규칙으로 찾기 어려운 변화형 (예: belie → "belying", "belied"). 예문에서 표제어를 찾을 때 함께 본다.
   * -s, -ed, -ing, -ly처럼 어간 뒤에 붙는 형태는 적지 않아도 된다.
   */
  forms?: string[];
  /** 한국어 핵심 뜻. 짧게 2~3개를 쉼표로 */
  meaning: string;
  /** 영영 정의 한 문장 */
  definition: string;
  /** 한국어 상세 설명: 뉘앙스, 어떤 글·상황에서 쓰는지, 격식 정도, 비슷한 말과의 차이. 3~5문장 */
  explanation: string;
  /** 3~4개. 업무·기술·일상 등 서로 다른 상황으로 */
  examples: VocabExample[];
  /** 자주 같이 쓰는 표현 3~5개 (예: "ameliorate the situation") */
  collocations: string[];
  synonyms: string[];
  antonyms?: string[];
  /** 파생어. 예: "amelioration (n.)" */
  family?: string[];
  /** 헷갈리기 쉬운 단어 */
  confusedWith?: VocabConfusable[];
  /** 어원 한 줄. 외우는 데 도움이 되는 정도로 */
  origin?: string;
  themes: VocabTheme[];
}
