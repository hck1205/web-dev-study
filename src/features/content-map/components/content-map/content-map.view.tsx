"use client";

import { Container, PageHeader } from "@/common/design-system";
import { useContentMap } from "./content-map";
import {
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
  const { sections, total } = useContentMap();

  return (
    <Container size="narrow">
      <PageHeader title="글 지도" />
      <Lead>
        글 {total}편을 토픽별로 모았다. 글마다 아래에 붙은 건 그 글이 링크하거나, 그 글을 가리키는 글이다.
      </Lead>
      {sections.map((section) => (
        <Section key={section.key} aria-labelledby={`map-${section.key}`}>
          <SectionTitle id={`map-${section.key}`} href={section.href}>
            {section.label}
          </SectionTitle>
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
    </Container>
  );
}
