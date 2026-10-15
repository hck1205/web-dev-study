"use client";

import { Container } from "@/common/design-system";
import { PostItem } from "../post-item";
import { usePostList } from "./post-list";
import { Empty, List, Page, Title } from "./post-list.styled";

export function PostList() {
  const { posts } = usePostList();

  return (
    <Container size="narrow">
      <Page>
        <Title>글</Title>
        {posts.length === 0 ? (
          <Empty>아직 글이 없습니다.</Empty>
        ) : (
          <List>
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </List>
        )}
      </Page>
    </Container>
  );
}
