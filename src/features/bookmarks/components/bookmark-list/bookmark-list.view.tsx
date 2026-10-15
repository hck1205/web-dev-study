"use client";

import { Button, Container, PageHeader } from "@/common/design-system";
import { PostItemList } from "@/features/posts/components/post-item-list";
import { useBookmarkList } from "./bookmark-list";
import { Actions } from "./bookmark-list.styled";

export function BookmarkList() {
  const { posts, clear } = useBookmarkList();

  return (
    <Container size="narrow">
      <PageHeader title="즐겨찾기" lead="별을 누른 글이 모인다. 이 브라우저에만 저장된다." />
      <PostItemList posts={posts} emptyMessage="아직 즐겨찾기한 글이 없다. 글 옆의 별을 누르면 여기에 모인다." />
      {posts.length > 0 && (
        <Actions>
          <Button variant="ghost" onClick={clear}>
            모두 지우기
          </Button>
        </Actions>
      )}
    </Container>
  );
}
