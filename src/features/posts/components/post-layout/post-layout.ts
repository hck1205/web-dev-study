"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { TOPIC_TREE, findTopic, topicHref } from "@/features/topics/registry";
import { formatDate, getPostByPathname, tagHref, tagLabel, tagSlug } from "../../registry";
import { usePostToc } from "./hooks/use-post-toc";

export function usePostLayout() {
  const pathname = usePathname();
  const bodyRef = useRef<HTMLDivElement>(null);
  const post = getPostByPathname(pathname);
  const toc = usePostToc(bodyRef, pathname);
  const found = post ? findTopic(TOPIC_TREE, post.topic.split("/")) : undefined;

  return {
    bodyRef,
    post,
    // 토픽 경로(브레드크럼). 예: Programming / Algorithms
    crumbs: (found?.trail ?? []).map((topic, index) => ({
      label: topic.label,
      href: topicHref(found!.path.slice(0, index + 1)),
    })),
    date: post ? formatDate(post.date) : undefined,
    tags: (post?.tags ?? []).map((tag) => ({ slug: tagSlug(tag), label: tagLabel(tag), href: tagHref(tag) })),
    toc,
  };
}
