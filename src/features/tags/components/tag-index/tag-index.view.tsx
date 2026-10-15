"use client";

import { Container, EmptyState, PageHeader } from "@/common/design-system";
import { useTagIndex } from "./tag-index";
import { Count, List, TagChip } from "./tag-index.styled";

export function TagIndex() {
  const { tags } = useTagIndex();

  return (
    <Container size="narrow">
      <PageHeader title="태그" />
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
