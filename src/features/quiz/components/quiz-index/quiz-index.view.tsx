"use client";

import { ArrowRightIcon, Container, EmptyState, PageHeader } from "@/common/design-system";
import { useQuizIndex } from "./quiz-index";
import { Count, Label, Row, RowLink, Rows } from "./quiz-index.styled";

export function QuizIndex() {
  const { total, topics } = useQuizIndex();

  return (
    <Container size="narrow">
      <PageHeader
        title="퀴즈"
        lead={`글에서 뽑은 문제 ${total}개를 토픽별로 모았다. 틀린 문제는 해설과 함께 근거가 된 글로 이어진다.`}
      />
      {topics.length === 0 ? (
        <EmptyState>아직 문제가 없다.</EmptyState>
      ) : (
        <Rows>
          {topics.map((topic, index) => (
            <Row key={topic.key} depth={topic.depth} style={{ animationDelay: `${index * 30}ms` }}>
              <RowLink href={topic.href}>
                <Label>{topic.label}</Label>
                <Count>{topic.count}문제</Count>
                <ArrowRightIcon size={16} aria-hidden />
              </RowLink>
            </Row>
          ))}
        </Rows>
      )}
    </Container>
  );
}
