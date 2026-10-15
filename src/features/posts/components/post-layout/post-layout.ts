"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { formatDate, getCategory, getPostByPathname } from "../../registry";
import { usePostToc } from "./hooks/use-post-toc";

export function usePostLayout() {
  const pathname = usePathname();
  const bodyRef = useRef<HTMLDivElement>(null);
  const post = getPostByPathname(pathname);
  const toc = usePostToc(bodyRef, pathname);

  return {
    bodyRef,
    post,
    category: post ? getCategory(post.category) : undefined,
    date: post ? formatDate(post.date) : undefined,
    toc,
  };
}
