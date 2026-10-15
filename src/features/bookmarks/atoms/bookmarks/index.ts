"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { bookmarksAtom } from "./utils";

export type { BookmarkSlugs } from "./types";
export { toggleSlug } from "./utils";

export const useGetBookmarks = () => useAtomValue(bookmarksAtom);
export const useSetBookmarks = () => useSetAtom(bookmarksAtom);
export const useResetBookmarks = () => useResetAtom(bookmarksAtom);
