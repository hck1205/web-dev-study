"use client";

import Link from "next/link";
import { Button, ChoiceChip, Container, EmptyState, PageHeader } from "@/common/design-system";
import { STATUS_LABELS, type WordStatus } from "../../atoms/vocab-progress";
import { POS_LABELS, THEME_LABELS, type CefrLevel, type VocabTheme } from "../../registry";
import { useVocabDictionary } from "./vocab-dictionary";
import {
  ChipRow,
  Group,
  GroupTitle,
  Jump,
  Level,
  Meaning,
  Pos,
  Row,
  RowLink,
  Rows,
  SearchInput,
  Stats,
  StatusDot,
  Toolbar,
  Word,
} from "./vocab-dictionary.styled";

const LEVELS: CefrLevel[] = ["C1", "C2"];
const THEMES = Object.keys(THEME_LABELS) as VocabTheme[];
const STATUSES: WordStatus[] = ["new", "due", "learning", "mastered"];

export function VocabDictionary() {
  const dict = useVocabDictionary();
  const { filters, update } = dict;

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={<Link href="/topics/self-development/english">English</Link>}
        title="어휘"
        lead={`고급(C1~C2) 영어 어휘 ${dict.total}개. 뜻과 뉘앙스, 예문을 읽고 학습에서 카드와 퀴즈로 익힌다. 학습 기록은 이 브라우저에만 저장된다.`}
      />

      <Stats>
        <span>
          복습할 단어 <strong>{dict.counts.due}</strong>
        </span>
        <span>
          새 단어 <strong>{dict.counts.new}</strong>
        </span>
        <span>
          익힌 단어 <strong>{dict.counts.mastered}</strong>
        </span>
        <Button href="/vocabulary/study">학습하기</Button>
      </Stats>

      <Toolbar>
        <SearchInput
          type="search"
          placeholder="단어, 뜻, 동의어로 찾기"
          value={filters.query}
          onChange={(event) => update("query", event.target.value)}
          aria-label="어휘 검색"
        />
        <ChipRow aria-label="난이도">
          <ChoiceChip selected={filters.level === "all"} onClick={() => update("level", "all")}>
            전체
          </ChoiceChip>
          {LEVELS.map((level) => (
            <ChoiceChip key={level} selected={filters.level === level} onClick={() => update("level", level)}>
              {level}
            </ChoiceChip>
          ))}
        </ChipRow>
        <ChipRow aria-label="주제">
          <ChoiceChip selected={filters.theme === "all"} onClick={() => update("theme", "all")}>
            모든 주제
          </ChoiceChip>
          {THEMES.map((theme) => (
            <ChoiceChip key={theme} selected={filters.theme === theme} onClick={() => update("theme", theme)}>
              {THEME_LABELS[theme]}
            </ChoiceChip>
          ))}
        </ChipRow>
        <ChipRow aria-label="학습 상태">
          <ChoiceChip selected={filters.status === "all"} onClick={() => update("status", "all")}>
            모든 상태
          </ChoiceChip>
          {STATUSES.map((status) => (
            <ChoiceChip
              key={status}
              selected={filters.status === status}
              count={dict.counts[status]}
              onClick={() => update("status", status)}
            >
              {STATUS_LABELS[status]}
            </ChoiceChip>
          ))}
        </ChipRow>
      </Toolbar>

      {dict.groups.length > 0 && (
        <Jump aria-label="첫 글자로 이동">
          {dict.groups.map(({ letter }) => (
            <a key={letter} href={`#letter-${letter}`}>
              {letter}
            </a>
          ))}
        </Jump>
      )}

      {dict.groups.length === 0 ? (
        <EmptyState>
          맞는 단어가 없다.{" "}
          {dict.isFiltered && (
            <button type="button" onClick={dict.reset}>
              조건 지우기
            </button>
          )}
        </EmptyState>
      ) : (
        dict.groups.map(({ letter, items }) => (
          <Group key={letter} id={`letter-${letter}`}>
            <GroupTitle>{letter}</GroupTitle>
            <Rows>
              {items.map(({ entry, href, status }, index) => (
                <Row key={entry.word} style={{ animationDelay: `${Math.min(index, 12) * 25}ms` }}>
                  <RowLink href={href}>
                    <StatusDot status={status} title={STATUS_LABELS[status]} aria-label={STATUS_LABELS[status]} />
                    <Word>{entry.word}</Word>
                    <Pos>{entry.pos.map((pos) => POS_LABELS[pos]).join(" ")}</Pos>
                    <Level>{entry.level}</Level>
                    <Meaning>{entry.meaning}</Meaning>
                  </RowLink>
                </Row>
              ))}
            </Rows>
          </Group>
        ))
      )}
    </Container>
  );
}
