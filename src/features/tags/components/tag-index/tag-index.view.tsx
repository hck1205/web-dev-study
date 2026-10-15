"use client";

import { Container } from "@/common/design-system";
import { useTagIndex } from "./tag-index";
import { Count, Empty, List, Page, TagChip, Title } from "./tag-index.styled";

export function TagIndex() {
  const { tags } = useTagIndex();

  return (
    <Container size="narrow">
      <Page>
        <Title>태그</Title>
        {tags.length === 0 ? (
          <Empty>아직 태그가 없습니다.</Empty>
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
      </Page>
    </Container>
  );
}
