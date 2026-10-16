"use client";

import Link from "next/link";
import { Badge, Button, ChoiceChip, Container, PageHeader } from "@/common/design-system";
import { HighlightedSentence } from "../highlighted-sentence";
import { SpeakButton } from "../speak-button";
import { STATUS_LABELS } from "../../atoms/vocab-progress";
import { POS_LABELS, THEME_LABELS } from "../../registry";
import { useVocabEntry } from "./vocab-entry";
import {
  Chips,
  Confusable,
  Definition,
  Example,
  ExampleContext,
  ExampleList,
  ExampleText,
  ExampleTools,
  Explanation,
  Head,
  Ipa,
  Meaning,
  Meta,
  Nav,
  Note,
  RevealButton,
  Section,
  SectionTitle,
  Translation,
  WordChip,
  WordLink,
} from "./vocab-entry.styled";

export function VocabEntry() {
  const page = useVocabEntry();

  if (!page.found) {
    return (
      <Container size="narrow">
        <PageHeader title="사전에 없는 단어다" lead={<Link href="/vocabulary">어휘 목록으로</Link>} />
      </Container>
    );
  }

  const { entry } = page;

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <Link href="/vocabulary">어휘</Link> / {entry.word[0].toUpperCase()}
          </nav>
        }
        title={entry.word}
      />

      <Head>
        <Ipa>{entry.ipa}</Ipa>
        <SpeakButton text={entry.word} label={`${entry.word} 발음 듣기`} />
      </Head>
      <Meta>
        <Badge>{entry.pos.map((pos) => POS_LABELS[pos]).join(" · ")}</Badge>
        <Badge tone="accent">{entry.level}</Badge>
        {entry.themes.map((theme) => (
          <Badge key={theme}>{THEME_LABELS[theme]}</Badge>
        ))}
        <Badge tone={page.status === "mastered" ? "success" : page.status === "due" ? "warning" : "neutral"}>
          {STATUS_LABELS[page.status]}
          {page.record ? ` · 맞힘 ${page.record.correct} / 틀림 ${page.record.wrong}` : ""}
        </Badge>
      </Meta>

      <Meaning>{entry.meaning}</Meaning>
      <Definition>{entry.definition}</Definition>
      <Explanation>{entry.explanation}</Explanation>

      <Section>
        <SectionTitle>예문 {entry.examples.length}개</SectionTitle>
        <ExampleTools>
          <ChoiceChip selected={page.context === "all"} onClick={() => page.setContext("all")}>
            전체
          </ChoiceChip>
          {page.contexts.map((context) => (
            <ChoiceChip key={context} selected={page.context === context} onClick={() => page.setContext(context)}>
              {THEME_LABELS[context]}
            </ChoiceChip>
          ))}
          <ChoiceChip selected={page.hideTranslation} onClick={page.toggleHideTranslation}>
            번역 가리기
          </ChoiceChip>
        </ExampleTools>
        <ExampleList>
          {page.examples.map((example, order) => (
            <Example key={example.en} style={{ animationDelay: `${order * 60}ms` }}>
              {example.context && <ExampleContext>{THEME_LABELS[example.context]}</ExampleContext>}
              <ExampleText>
                <p lang="en">
                  <HighlightedSentence sentence={example.en} entry={entry} />
                </p>
                <SpeakButton text={example.en} label="예문 듣기" slow size="sm" />
              </ExampleText>
              {page.isRevealed(example.index) ? (
                <Translation>{example.ko}</Translation>
              ) : (
                <RevealButton type="button" onClick={() => page.reveal(example.index)}>
                  뜻을 떠올린 뒤 눌러서 번역 보기
                </RevealButton>
              )}
              {example.note && page.isRevealed(example.index) && <Note>{example.note}</Note>}
            </Example>
          ))}
        </ExampleList>
      </Section>

      <Section>
        <SectionTitle>자주 같이 쓰는 표현</SectionTitle>
        <Chips>
          {entry.collocations.map((collocation) => (
            <WordChip key={collocation} lang="en">
              {collocation}
            </WordChip>
          ))}
        </Chips>
      </Section>

      <Section>
        <SectionTitle>비슷한 말{page.antonyms.length > 0 && " · 반대말"}</SectionTitle>
        <Chips>
          {page.synonyms.map(({ word, href }) =>
            href ? (
              <WordLink key={word} href={href} lang="en">
                ≈ {word}
              </WordLink>
            ) : (
              <WordChip key={word} lang="en">
                ≈ {word}
              </WordChip>
            ),
          )}
          {page.antonyms.map(({ word, href }) =>
            href ? (
              <WordLink key={word} href={href} lang="en">
                ↔ {word}
              </WordLink>
            ) : (
              <WordChip key={word} lang="en">
                ↔ {word}
              </WordChip>
            ),
          )}
        </Chips>
      </Section>

      {entry.family && entry.family.length > 0 && (
        <Section>
          <SectionTitle>같은 뿌리의 말</SectionTitle>
          <Chips>
            {entry.family.map((item) => (
              <WordChip key={item} lang="en">
                {item}
              </WordChip>
            ))}
          </Chips>
        </Section>
      )}

      {entry.confusedWith && entry.confusedWith.length > 0 && (
        <Section>
          <SectionTitle>헷갈리기 쉬운 말</SectionTitle>
          {entry.confusedWith.map((item) => (
            <Confusable key={item.word}>
              <strong lang="en">{item.word}</strong>
              <p>{item.note}</p>
            </Confusable>
          ))}
        </Section>
      )}

      {entry.origin && (
        <Section>
          <SectionTitle>어원</SectionTitle>
          <Explanation>{entry.origin}</Explanation>
        </Section>
      )}

      <Nav>
        {page.prev ? <Link href={page.prev.href}>← {page.prev.word}</Link> : <span />}
        <Button variant="secondary" href="/vocabulary/study">
          학습하기
        </Button>
        {page.next ? <Link href={page.next.href}>{page.next.word} →</Link> : <span />}
      </Nav>
    </Container>
  );
}
