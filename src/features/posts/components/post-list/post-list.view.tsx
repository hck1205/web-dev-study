"use client";

import { Container, PageHeader } from "@/common/design-system";
import { PostItemList } from "../post-item-list";
import { usePostList } from "./post-list";

export function PostList() {
  const { posts } = usePostList();

  return (
    <Container size="narrow">
      <PageHeader title="글" />
      <PostItemList posts={posts} />
    </Container>
  );
}
