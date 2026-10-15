import type { TocItem } from "./use-post-toc.type";

/** 본문 안의 h2/h3(rehype-slug가 id를 붙인 것)를 목차 항목으로 변환한다. */
export function extractToc(root: HTMLElement): TocItem[] {
  return Array.from(root.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]")).map((heading) => ({
    id: heading.id,
    text: heading.textContent ?? "",
    level: heading.tagName === "H2" ? 2 : 3,
  }));
}
