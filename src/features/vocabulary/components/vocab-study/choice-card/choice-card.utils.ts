import type { ChoiceState } from "./choice-card.type";

export function choiceState(word: string, answer: string, picked: string | null): ChoiceState {
  if (picked === null) return "idle";
  if (word === answer) return "correct";
  if (word === picked) return "wrong";
  return "dim";
}

export const PROMPTS = {
  meaning: "이 단어의 뜻은?",
  cloze: "빈칸에 들어갈 단어는?",
  listen: "들은 단어는?",
} as const;
