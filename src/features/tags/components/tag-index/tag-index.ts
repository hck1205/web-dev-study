"use client";

import { ALL_COMPANIES, ALL_TAGS, tagHref, tagLabel, type TagCount } from "@/features/posts";

const toChip = ({ tag, slug, count }: TagCount) => ({ slug, label: tagLabel(tag), href: tagHref(tag), count });

export function useTagIndex() {
  return {
    /** 채용 공고에서 나온 글의 회사 라벨. 회사별로 따로 모아 볼 수 있게 위에 따로 보여 준다. */
    companies: ALL_COMPANIES.map(toChip),
    tags: ALL_TAGS.filter((tag) => !ALL_COMPANIES.some((company) => company.slug === tag.slug)).map(toChip),
  };
}
