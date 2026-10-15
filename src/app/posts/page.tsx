"use client";

import { Suspense } from "react";
import { PostList } from "@/features/posts/components/post-list";

export default function PostsPage() {
  // useSearchParams는 Suspense 경계가 필요하다.
  return (
    <Suspense>
      <PostList />
    </Suspense>
  );
}
