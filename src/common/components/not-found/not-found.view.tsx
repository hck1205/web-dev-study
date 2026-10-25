"use client";

import Link from "next/link";
import { Container, EmptyState, PageHeader } from "@/common/design-system";
import { Links } from "./not-found.styled";

/** 없는 주소로 왔을 때. 글 목록·검색·홈으로 돌아갈 길만 준다. */
export function NotFound() {
  return (
    <Container size="narrow">
      <PageHeader title="찾는 페이지가 없다" lead="주소가 바뀌었거나, 글이 다른 이름으로 옮겨졌을 수 있다." />
      <EmptyState>
        이 주소에는 아무것도 없다.
        <Links>
          <Link href="/">홈으로</Link>
          <Link href="/posts">글 목록</Link>
          <Link href="/topics">주제별로 보기</Link>
          <Link href="/roadmap">로드맵</Link>
        </Links>
      </EmptyState>
    </Container>
  );
}
