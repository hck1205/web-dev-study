"use client";

import { POSTS, sortByDateDesc } from "../../registry";

export function usePostList() {
  return { posts: sortByDateDesc(POSTS) };
}
