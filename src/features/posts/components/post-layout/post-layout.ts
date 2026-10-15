"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { findTopicByKey, topicCrumbs } from "@/features/topics/registry";
import { formatDate, getPostByPathname } from "../../registry";
import { usePostToc } from "./hooks/use-post-toc";

export function usePostLayout() {
  const pathname = usePathname();
  const bodyRef = useRef<HTMLDivElement>(null);
  const post = getPostByPathname(pathname);
  const toc = usePostToc(bodyRef, pathname);
  const topic = post ? findTopicByKey(post.topic) : undefined;

  return {
    bodyRef,
    post,
    // 토픽 경로(브레드크럼). 예: Programming / Algorithms
    crumbs: topic ? topicCrumbs(topic) : [],
    date: post ? formatDate(post.date) : undefined,
    toc,
  };
}
