"use client";

import { ALL_TAGS, tagHref, tagLabel } from "@/features/posts";

export function useTagIndex() {
  return {
    tags: ALL_TAGS.map(({ tag, slug, count }) => ({ slug, label: tagLabel(tag), href: tagHref(tag), count })),
  };
}
