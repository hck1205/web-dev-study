"use client";

import Link from "next/link";
import { Button } from "@/common/design-system";
import { HighlightedSentence } from "../../highlighted-sentence";
import { SpeakButton } from "../../speak-button";
import { useChoiceCard } from "./choice-card";
import {
  Choice,
  Choices,
  Feedback,
  Footer,
  Mark,
  Prompt,
  PromptLabel,
  PromptWord,
  Root,
  Sentence,
  Translation,
  Verdict,
} from "./choice-card.styled";
import type { ChoiceCardProps } from "./choice-card.type";
import { choiceState, PROMPTS } from "./choice-card.utils";

/** 뜻 고르기 · 빈칸 채우기 · 듣고 고르기 공용 4지선다 카드 */
export function ChoiceCard({ card, mode, picked, isLast, onChoose, onNext }: ChoiceCardProps) {
  const { entry, example, choices } = card;
  const revealed = picked !== null;
  const correct = picked === entry.word;
  const { nextRef, href } = useChoiceCard(entry.word, revealed);

  return (
    <Root>
      <PromptLabel>{PROMPTS[mode]}</PromptLabel>
      <Prompt>
        {mode === "meaning" && (
          <>
            <PromptWord lang="en">{entry.word}</PromptWord>
            <SpeakButton text={entry.word} size="sm" />
          </>
        )}
        {mode === "cloze" && (
          <div>
            <Sentence lang="en">
              <HighlightedSentence sentence={example.en} entry={entry} blank={!revealed} />
            </Sentence>
            <Translation>{example.ko}</Translation>
          </div>
        )}
        {mode === "listen" && (
          <>
            <SpeakButton text={entry.word} label="다시 듣기" />
            <span>버튼을 눌러 다시 들을 수 있다</span>
          </>
        )}
      </Prompt>

      <Choices>
        {choices.map((choice, index) => {
          const state = choiceState(choice.word, entry.word, picked);
          return (
            <li key={choice.word} style={{ animationDelay: `${80 + index * 50}ms` }}>
              <Choice
                type="button"
                state={state}
                aria-disabled={revealed}
                lang={mode === "meaning" ? "ko" : "en"}
                onClick={() => onChoose(choice.word)}
              >
                <Mark state={state} aria-hidden>
                  {state === "correct" ? "✓" : state === "wrong" ? "✕" : index + 1}
                </Mark>
                <span>{choice.label}</span>
              </Choice>
            </li>
          );
        })}
      </Choices>

      {revealed && (
        <Feedback correct={correct} role="status">
          <Verdict correct={correct}>{correct ? "맞았다" : "틀렸다"}</Verdict>
          <p>
            <strong lang="en">{entry.word}</strong> {entry.ipa} · {entry.meaning}
          </p>
          {mode !== "cloze" && (
            <p lang="en">
              <HighlightedSentence sentence={example.en} entry={entry} />
            </p>
          )}
          <Footer>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              자세히 보기 ↗
            </Link>
            <Button ref={nextRef} onClick={onNext}>
              {isLast ? "결과 보기" : "다음"}
            </Button>
          </Footer>
        </Feedback>
      )}
    </Root>
  );
}
