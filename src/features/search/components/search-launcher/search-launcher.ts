"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { ALL_TAGS, POSTS, postHref, tagHref, tagLabel } from "@/features/posts";
import { useGetSearchOpen, useResetSearchOpen, useSetSearchOpen } from "../../atoms/search-open";
import { searchPosts } from "../../engine";
import type { SuggestedTag } from "./search-launcher.type";

const MAX_RESULTS = 8;
const SUGGESTED_TAG_COUNT = 8;

export function useSearchLauncher() {
  const router = useRouter();
  const pathname = usePathname();
  const open = useGetSearchOpen();
  const setOpen = useSetSearchOpen();
  const close = useResetSearchOpen();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => searchPosts(query, POSTS).slice(0, MAX_RESULTS), [query]);
  const suggestedTags: SuggestedTag[] = ALL_TAGS.slice(0, SUGGESTED_TAG_COUNT).map(({ tag, slug }) => ({
    slug,
    label: tagLabel(tag),
    href: tagHref(tag),
  }));

  // 단축키: "/" 또는 Ctrl/⌘ + K 로 열기
  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      const isShortcut = (event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !typing);
      if (isShortcut) {
        event.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setOpen]);

  // 열릴 때 입력창에 포커스하고 배경 스크롤을 잠근다.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // 페이지가 바뀌면 닫고 검색어를 비운다.
  useEffect(() => {
    close();
    setQuery("");
  }, [pathname, close]);

  // 결과를 고르면 페이지 이동을 기다리지 않고 바로 닫는다.
  const selectResult = () => {
    close();
    setQuery("");
  };

  // Tab 포커스가 모달 밖(뒤 페이지)으로 빠져나가지 않게 처음과 끝을 잇는다.
  const trapFocus = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;
    const focusables = event.currentTarget.querySelectorAll<HTMLElement>("input, button, a[href]");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const onChange = (value: string) => {
    setQuery(value);
    setActiveIndex(0);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") close();
    else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      selectResult();
      router.push(postHref(results[activeIndex].post.slug));
    }
  };

  return {
    open,
    openSearch: () => setOpen(true),
    close,
    inputRef,
    query,
    results,
    activeIndex,
    suggestedTags,
    onChange,
    onKeyDown,
    setActiveIndex,
    selectResult,
    trapFocus,
  };
}
