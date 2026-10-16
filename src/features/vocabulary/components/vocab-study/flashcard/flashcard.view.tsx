"use client";

import { HighlightedSentence } from "../../highlighted-sentence";
import { SpeakButton } from "../../speak-button";
import { Back, Card, Face, Front, Hint, Ipa, Judge, JudgeButton, Meaning, Sentence, Translation, Word } from "./flashcard.styled";
import type { FlashcardProps } from "./flashcard.type";

/** 앞면(단어·발음)을 보고 뜻을 떠올린 뒤 눌러 뒤집는다. 뒷면을 본 다음 알았는지 스스로 판정한다. */
export function Flashcard({ card, flipped, onFlip, onJudge }: FlashcardProps) {
  const { entry, example } = card;

  return (
    <>
      <Card
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "카드 앞면 보기" : "카드 뒤집기"}
        onClick={onFlip}
        onKeyDown={(event) => event.key === "Enter" && onFlip()}
      >
        <Face flipped={flipped}>
          <Front>
            <Word lang="en">{entry.word}</Word>
            <Ipa>
              {entry.ipa} <SpeakButton text={entry.word} size="sm" />
            </Ipa>
            <Hint>뜻을 떠올린 뒤 눌러서 뒤집기 · Space</Hint>
          </Front>
          <Back>
            <Meaning>{entry.meaning}</Meaning>
            <Sentence lang="en">
              <HighlightedSentence sentence={example.en} entry={entry} />
            </Sentence>
            <Translation>{example.ko}</Translation>
          </Back>
        </Face>
      </Card>

      <Judge visible={flipped}>
        <JudgeButton type="button" tone="danger" disabled={!flipped} onClick={() => onJudge(false)}>
          모르겠다 <kbd>1</kbd>
        </JudgeButton>
        <JudgeButton type="button" tone="success" disabled={!flipped} onClick={() => onJudge(true)}>
          알았다 <kbd>2</kbd>
        </JudgeButton>
      </Judge>
    </>
  );
}
