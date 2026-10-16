"use client";

import Link from "next/link";
import { Button, ChoiceChip, Container, PageHeader } from "@/common/design-system";
import { THEME_LABELS, type VocabTheme } from "../../registry";
import { ChoiceCard } from "./choice-card";
import { Flashcard } from "./flashcard";
import { StudySummary } from "./study-summary";
import { useVocabStudy } from "./vocab-study";
import {
  Bar,
  BarFill,
  Field,
  FieldLabel,
  ModeButton,
  Modes,
  Playing,
  ProgressRow,
  Setup,
  SetupStats,
} from "./vocab-study.styled";
import type { StudyMode } from "./vocab-study.type";
import { MODE_LABELS } from "./vocab-study.utils";

const MODES: StudyMode[] = ["flashcard", "meaning", "cloze", "listen"];
const SIZES = [10, 20, 30];
const THEMES = Object.keys(THEME_LABELS) as VocabTheme[];

export function VocabStudy() {
  const study = useVocabStudy();
  const { options } = study;

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <Link href="/vocabulary">어휘</Link>
          </nav>
        }
        title="어휘 학습"
        lead={
          study.phase === "setup"
            ? "복습할 때가 된 단어부터 나온다. 맞히면 다음 복습까지 간격이 1일 → 2일 → 4일 → 7일 → 15일로 늘고, 틀리면 다음 날 다시 나온다."
            : undefined
        }
      />

      {study.phase === "setup" && (
        <Setup>
          <SetupStats>
            <span>
              복습할 단어 <strong>{study.counts.due}</strong>
            </span>
            <span>
              새 단어 <strong>{study.counts.new}</strong>
            </span>
            <span>
              익힌 단어 <strong>{study.counts.mastered}</strong>
            </span>
          </SetupStats>

          <Field>
            <FieldLabel>방법</FieldLabel>
            <Modes>
              {MODES.filter((mode) => mode !== "listen" || study.canSpeak).map((mode) => (
                <ModeButton
                  key={mode}
                  type="button"
                  aria-pressed={options.mode === mode}
                  selected={options.mode === mode}
                  onClick={() => study.setOption("mode", mode)}
                >
                  <strong>{MODE_LABELS[mode].title}</strong>
                  <span>{MODE_LABELS[mode].detail}</span>
                </ModeButton>
              ))}
            </Modes>
          </Field>

          <Field>
            <FieldLabel>단어 수</FieldLabel>
            <div>
              {SIZES.map((size) => (
                <ChoiceChip key={size} selected={options.size === size} onClick={() => study.setOption("size", size)}>
                  {size}개
                </ChoiceChip>
              ))}
            </div>
          </Field>

          <Field>
            <FieldLabel>주제</FieldLabel>
            <div>
              <ChoiceChip selected={options.theme === "all"} onClick={() => study.setOption("theme", "all")}>
                전체
              </ChoiceChip>
              {THEMES.map((theme) => (
                <ChoiceChip key={theme} selected={options.theme === theme} onClick={() => study.setOption("theme", theme)}>
                  {THEME_LABELS[theme]}
                </ChoiceChip>
              ))}
            </div>
          </Field>

          <Button size="lg" onClick={study.start} disabled={study.poolSize === 0}>
            시작
          </Button>
        </Setup>
      )}

      {study.phase === "playing" && study.card && (
        <Playing>
          <ProgressRow>
            <span>
              <strong>{study.index + 1}</strong> / {study.deck.length}
            </span>
            <span>{MODE_LABELS[options.mode].title}</span>
          </ProgressRow>
          <Bar>
            <BarFill style={{ transform: `scaleX(${(study.index + (study.answered ? 1 : 0)) / study.deck.length})` }} />
          </Bar>

          {options.mode === "flashcard" ? (
            <Flashcard
              key={study.index}
              card={study.card}
              flipped={study.flipped}
              onFlip={study.flip}
              onJudge={study.judge}
            />
          ) : (
            <ChoiceCard
              key={study.index}
              card={study.card}
              mode={options.mode}
              picked={study.picked}
              isLast={study.index + 1 === study.deck.length}
              onChoose={study.choose}
              onNext={study.next}
            />
          )}
        </Playing>
      )}

      {study.phase === "done" && (
        <StudySummary results={study.results} onRetryWrong={study.retryWrong} onRestart={study.backToSetup} />
      )}
    </Container>
  );
}
