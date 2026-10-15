"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/common/design-system";
import { PostItemList } from "@/features/posts/components/post-item-list";
import { useTagPage } from "./tag-page";

export function TagPage() {
  const page = useTagPage();

  if (!page.found) {
    return (
      <Container size="narrow">
        <PageHeader title="태그를 찾을 수 없습니다" lead={<Link href="/tags">전체 태그 보기</Link>} />
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={<Link href="/tags">태그</Link>}
        title={`#${page.label}`}
        lead={`글 ${page.posts.length}개`}
      />
      <PostItemList posts={page.posts} />
    </Container>
  );
}
