"use client";

import { useEffect, useState, type RefObject } from "react";
import type { TocItem } from "./use-post-toc.type";
import { extractToc } from "./use-post-toc.utils";

/** 본문 ref에서 목차를 추출하고, 스크롤 위치에 맞춰 현재 섹션 id를 추적한다. */
export function usePostToc(bodyRef: RefObject<HTMLElement | null>, key: string) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const toc = extractToc(body);
    setItems(toc);
    setActiveId(toc[0]?.id ?? null);

    const headings = toc.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      // 헤더 아래 상단 영역에 들어온 제목을 현재 섹션으로 본다.
      { rootMargin: "-80px 0px -70% 0px" },
    );
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [bodyRef, key]);

  return { items, activeId };
}
