"use client";

import { Container, EmptyState, PageHeader } from "@/common/design-system";
import { useTagIndex } from "./tag-index";
import { Count, List, Section, SectionTitle, TagChip } from "./tag-index.styled";

export function TagIndex() {
  const { companies, tags } = useTagIndex();

  return (
    <Container size="narrow">
      <PageHeader title="태그" />
      {companies.length > 0 && (
        <Section>
          <SectionTitle>회사</SectionTitle>
          <List>
            {companies.map((company) => (
              <li key={company.slug}>
                <TagChip href={company.href} company>
                  #{company.label}
                  <Count>{company.count}</Count>
                </TagChip>
              </li>
            ))}
          </List>
        </Section>
      )}
      {companies.length > 0 && <SectionTitle>전체 태그</SectionTitle>}
      {tags.length === 0 ? (
        <EmptyState>아직 태그가 없습니다.</EmptyState>
      ) : (
        <List>
          {tags.map((tag) => (
            <li key={tag.slug}>
              <TagChip href={tag.href}>
                #{tag.label}
                <Count>{tag.count}</Count>
              </TagChip>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
}
