"use client";

import { Container, PageHeader } from "@/common/design-system";
import { useContentMap } from "./content-map";
import {
  Group,
  GroupCount,
  GroupLink,
  GroupToggle,
  Lead,
  PostLink,
  PostList,
  PostRow,
  Related,
  RelatedLabel,
  RelatedLink,
  Section,
  SectionTitle,
} from "./content-map.styled";

export function ContentMap() {
  const { groups, open, toggle, total } = useContentMap();

  return (
    <Container size="narrow">
      <PageHeader title="글 지도" />
      <Lead>
        글 {total}편을 토픽별로 모았다. 주제를 누르면 그 아래 글이 펼쳐지고, 글마다 아래에 붙은 건 그 글이 링크하거나 그 글을
        가리키는 글이다.
      </Lead>
      {groups.map((group) => {
        const expanded = open.has(group.key);
        const panelId = `map-${group.key}`;
        return (
          <Group key={group.key}>
            <GroupToggle type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => toggle(group.key)}>
              <span aria-hidden>{expanded ? "▾" : "▸"}</span>
              {group.label}
              <GroupCount>{group.count}편</GroupCount>
            </GroupToggle>
            <GroupLink href={group.href}>토픽 페이지</GroupLink>
            {expanded && (
              <div id={panelId}>
                {group.sections.map((section) => (
                  <Section key={section.key} open={group.sections.length === 1}>
                    <summary>
                      {section.label} <GroupCount>{section.posts.length}편</GroupCount>
                    </summary>
                    <SectionTitle href={section.href}>토픽 페이지 →</SectionTitle>
                    <PostList>
                      {section.posts.map((post) => (
                        <PostRow key={post.slug}>
                          <PostLink href={post.href}>{post.title}</PostLink>
                          {post.related.length > 0 && (
                            <Related>
                              <RelatedLabel aria-hidden>이어서</RelatedLabel>
                              {post.related.map((other) => (
                                <li key={other.slug}>
                                  <RelatedLink href={other.href}>{other.title}</RelatedLink>
                                </li>
                              ))}
                            </Related>
                          )}
                        </PostRow>
                      ))}
                    </PostList>
                  </Section>
                ))}
              </div>
            )}
          </Group>
        );
      })}
    </Container>
  );
}
