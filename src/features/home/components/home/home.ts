"use client";

import { CATEGORIES, POSTS, sortByDateDesc } from "@/features/posts";
import type { HomeCategory } from "./home.type";

const LATEST_COUNT = 3;

export function useHome() {
  const categories: HomeCategory[] = CATEGORIES.map((category) => ({
    ...category,
    count: POSTS.filter((post) => post.category === category.id).length,
    href: `/posts?category=${category.id}`,
  }));

  return { categories, latest: sortByDateDesc(POSTS).slice(0, LATEST_COUNT) };
}
