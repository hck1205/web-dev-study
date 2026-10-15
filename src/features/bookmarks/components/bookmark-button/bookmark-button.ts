"use client";

import { toggleSlug, useGetBookmarks, useSetBookmarks } from "../../atoms/bookmarks";

export function useBookmarkButton(slug: string) {
  const bookmarks = useGetBookmarks();
  const setBookmarks = useSetBookmarks();
  const active = bookmarks.includes(slug);

  return {
    active,
    label: active ? "즐겨찾기에서 빼기" : "즐겨찾기에 추가",
    toggle: () => setBookmarks((current) => toggleSlug(current, slug)),
  };
}
