"use client";

import { POSTS, sortByDateDesc } from "@/features/posts";

const LATEST_COUNT = 5;

export function useHome() {
  return { latest: sortByDateDesc(POSTS).slice(0, LATEST_COUNT) };
}
