import type { PartOfSpeech, VocabEntry, VocabTheme } from "./types";

/** 표제어 비교용 키: 앞뒤 공백 제거 + 소문자 */
export const wordKey = (word: string) => word.trim().toLowerCase();

export const vocabHref = (word: string) => `/vocabulary/${encodeURIComponent(wordKey(word))}`;

/**
 * 예문에서 표제어(변화형 포함)를 찾는 정규식. 빈칸 퀴즈와 예문 강조에 쓴다.
 * 끝 글자 e/y는 변화형에서 바뀌므로(alleviate → alleviating, belie → belying) 어간만 맞춘다.
 */
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function wordPattern(word: string, forms: string[] = []) {
  const key = wordKey(word);
  const stem = key.length > 5 ? key.replace(/(e|y)$/, "") : key;
  const alternatives = [`${escape(stem)}[a-z]*`, ...forms.map((form) => escape(wordKey(form)))];
  return new RegExp(`\\b(?:${alternatives.join("|")})\\b`, "i");
}

/**
 * 사전 데이터가 잘못되면 빌드를 멈춘다.
 * 중복 표제어(대소문자 무시), 소문자가 아닌 표제어, 예문 부족, 표제어가 없는 예문, 같은 예문 반복을 잡는다.
 */
/** 단어 하나에 필요한 최소 예문 수 */
export const MIN_EXAMPLES = 3;

export function validateVocabulary(entries: VocabEntry[]) {
  const seen = new Map<string, number>();
  entries.forEach((entry, index) => {
    const key = wordKey(entry.word);
    if (seen.has(key)) throw new Error(`[vocabulary] 중복된 표제어: "${entry.word}" (이미 있는 단어다)`);
    seen.set(key, index);
    if (entry.word !== key) throw new Error(`[vocabulary] 표제어는 소문자 원형으로 쓴다: "${entry.word}"`);
    if (entry.examples.length < MIN_EXAMPLES) throw new Error(`[vocabulary] ${entry.word}: 예문은 ${MIN_EXAMPLES}개 이상`);
    if (new Set(entry.examples.map((example) => example.en.trim())).size !== entry.examples.length) {
      throw new Error(`[vocabulary] ${entry.word}: 같은 예문이 두 번 들어 있다`);
    }
    for (const example of entry.examples) {
      if (!wordPattern(entry.word, entry.forms).test(example.en)) {
        throw new Error(`[vocabulary] ${entry.word}: 예문에 표제어가 없다 → "${example.en}"`);
      }
    }
  });
  return entries;
}

const collator = new Intl.Collator("en", { sensitivity: "base" });

export const sortByWord = (entries: VocabEntry[]) => [...entries].sort((a, b) => collator.compare(a.word, b.word));

// ---- 화면 표시용 이름 ----

export const POS_LABELS: Record<PartOfSpeech, string> = { noun: "n.", verb: "v.", adjective: "adj.", adverb: "adv." };

export const THEME_LABELS: Record<VocabTheme, string> = {
  academic: "학술",
  business: "비즈니스",
  tech: "기술",
  argument: "논증",
  emotion: "감정",
  everyday: "일상",
};

/** 예문을 [앞, 표제어, 뒤]로 나눈다. 표제어를 강조하거나 빈칸으로 바꿀 때 쓴다. */
export function splitAtWord(sentence: string, entry: Pick<VocabEntry, "word" | "forms">) {
  const match = wordPattern(entry.word, entry.forms).exec(sentence);
  if (!match) return { before: sentence, hit: "", after: "" };
  return {
    before: sentence.slice(0, match.index),
    hit: match[0],
    after: sentence.slice(match.index + match[0].length),
  };
}
