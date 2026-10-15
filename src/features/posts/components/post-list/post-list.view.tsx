"use client";

import { Container } from "@/common/design-system";
import { PostCard } from "../post-card";
import { usePostList } from "./post-list";
import { Chip, Chips, Count, Empty, Grid, Lead, Page, Title } from "./post-list.styled";

export function PostList() {
  const { chips, posts } = usePostList();

  return (
    <Container>
      <Page>
        <Title>글</Title>
        <Lead>공부하며 정리한 글 모음입니다.</Lead>

        <Chips aria-label="카테고리">
          {chips.map((chip) => (
            <Chip key={chip.id} href={chip.href} active={chip.active} scroll={false}>
              {chip.label}
              <Count>{chip.count}</Count>
            </Chip>
          ))}
        </Chips>

        {posts.length === 0 ? (
          <Empty>아직 이 카테고리에 글이 없습니다.</Empty>
        ) : (
          <Grid>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Grid>
        )}
      </Page>
    </Container>
  );
}
