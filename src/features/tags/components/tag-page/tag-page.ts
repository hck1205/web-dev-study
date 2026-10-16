"use client";

import { useParams } from "next/navigation";
import { ALL_COMPANIES, ALL_TAGS, POSTS, postsWithTag, sortByDateDesc, tagLabel } from "@/features/posts";

export function useTagPage() {
  const params = useParams<{ tag?: string }>();
  // 한글 태그는 URL 인코딩된 채로 올 수 있어 디코딩한다.
  const slug = decodeURIComponent(params.tag ?? "").toLowerCase();
  const found = ALL_TAGS.find((item) => item.slug === slug);

  if (!found) return { found: false as const };

  return {
    found: true as const,
    label: tagLabel(found.tag),
    isCompany: ALL_COMPANIES.some((company) => company.slug === slug),
    posts: sortByDateDesc(postsWithTag(POSTS, slug)),
  };
}
