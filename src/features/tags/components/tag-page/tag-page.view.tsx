"use client";

import Link from "next/link";
import { Container } from "@/common/design-system";
import { PostItem } from "@/features/posts/components/post-item";
import { useTagPage } from "./tag-page";
import { Back, Count, Lead, List, Page, Title } from "./tag-page.styled";

export function TagPage() {
  const page = useTagPage();

  if (!page.found) {
    return (
      <Container size="narrow">
        <Page>
          <Title>태그를 찾을 수 없습니다</Title>
          <Back>
            <Link href="/tags">전체 태그 보기</Link>
          </Back>
        </Page>
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <Page>
        <Back>
          <Link href="/tags">태그</Link>
        </Back>
        <Title>#{page.label}</Title>
        <Lead>
          글 <Count>{page.posts.length}</Count>개
        </Lead>
        <List>
          {page.posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </List>
      </Page>
    </Container>
  );
}
