"use client";

import { POSTS } from "@/features/posts";
import { useGetBookmarks, useResetBookmarks } from "../../atoms/bookmarks";

export function useBookmarkList() {
  const slugs = useGetBookmarks();
  const reset = useResetBookmarks();
  const bySlug = new Map(POSTS.map((post) => [post.slug, post]));

  // 저장된 순서(최근에 추가한 것부터)를 유지하고, 삭제된 글의 slug는 건너뛴다.
  const posts = slugs.flatMap((slug) => {
    const post = bySlug.get(slug);
    return post ? [post] : [];
  });

  return { posts, clear: reset };
}
