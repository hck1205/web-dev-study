"use client";

import { useSearchParams } from "next/navigation";
import { CATEGORIES, POSTS, filterByCategory, isCategoryId, sortByDateDesc } from "../../registry";
import type { CategoryChip } from "./post-list.type";

export function usePostList() {
  const params = useSearchParams();
  const raw = params.get("category");
  const category = isCategoryId(raw) ? raw : undefined;

  const chips: CategoryChip[] = [
    { id: "all", label: "전체", href: "/posts", active: !category, count: POSTS.length },
    ...CATEGORIES.map((c) => ({
      id: c.id,
      label: c.label,
      href: `/posts?category=${c.id}`,
      active: c.id === category,
      count: POSTS.filter((post) => post.category === c.id).length,
    })),
  ];

  return { chips, posts: sortByDateDesc(filterByCategory(POSTS, category)) };
}
