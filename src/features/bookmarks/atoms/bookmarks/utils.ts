import { atomWithStorage } from "jotai/utils";
import type { BookmarkSlugs } from "./types";

/** 이 브라우저의 localStorage에만 저장된다 (로그인·서버 저장 없음). */
export const BOOKMARKS_STORAGE_KEY = "bookmarks";

export const bookmarksAtom = atomWithStorage<BookmarkSlugs>(BOOKMARKS_STORAGE_KEY, []);

/** 있으면 빼고, 없으면 맨 앞에 넣는다. */
export const toggleSlug = (slugs: BookmarkSlugs, slug: string): BookmarkSlugs =>
  slugs.includes(slug) ? slugs.filter((item) => item !== slug) : [slug, ...slugs];
