"use client";

import { splitAtWord } from "../../registry";
import { Blank, Hit } from "./highlighted-sentence.styled";
import type { HighlightedSentenceProps } from "./highlighted-sentence.type";

/** 예문 속 표제어를 강조하거나 빈칸으로 바꿔 보여 준다. */
export function HighlightedSentence({ sentence, entry, blank = false }: HighlightedSentenceProps) {
  const { before, hit, after } = splitAtWord(sentence, entry);
  return (
    <>
      {before}
      {hit && (blank ? <Blank aria-label="빈칸">{" ".repeat(Math.max(6, hit.length))}</Blank> : <Hit>{hit}</Hit>)}
      {after}
    </>
  );
}
