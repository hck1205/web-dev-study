"use client";

import { EmptyState } from "@/common/design-system";
import { PostItem } from "../post-item";
import { List } from "./post-item-list.styled";
import type { PostItemListProps } from "./post-item-list.type";

/** 글 목록. 홈·전체 글·토픽·태그 페이지가 공유한다. */
export function PostItemList({ posts, emptyMessage = "아직 글이 없습니다." }: PostItemListProps) {
  if (posts.length === 0) return <EmptyState>{emptyMessage}</EmptyState>;

  return (
    <List>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </List>
  );
}
