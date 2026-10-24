"use client";

import { useCallback, useMemo, useState } from "react";
import { POSTS, postHref } from "@/features/posts";
import { FLAT_TOPICS, TOPIC_TREE, topicHref, topicKey } from "@/features/topics/registry";
import type { MapGroup, MapSection } from "./content-map.type";
import { relatedPosts } from "./content-map.utils";

function buildSections(): MapSection[] {
  return FLAT_TOPICS.map(({ path, trail }) => {
    const key = topicKey(path);
    const posts = POSTS.filter((post) => post.topic === key)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"))
      .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug), related: relatedPosts(post.slug) }));
    return {
      key,
      // 그룹 제목이 "Programming › AI"까지 보여 주므로 섹션 이름은 그 아래 경로만 쓴다
      label: trail.slice(2).map((topic) => topic.label).join(" › ") || trail[trail.length - 1].label,
      href: topicHref(path),
      depth: path.length,
      posts,
    };
  }).filter((section) => section.posts.length > 0);
}

export function useContentMap() {
  // 1,100편을 한 번에 펼치면 페이지가 수십만 px가 된다. Programming 하나에 거의 다 몰리므로
  // 두 번째 층(AI, Algorithms, Backend …)으로 묶어 접어 두고, 연 것만 그린다.
  const groups = useMemo<MapGroup[]>(() => {
    const sections = buildSections();
    const toGroup = (path: string[], label: string): MapGroup => {
      const key = topicKey(path);
      const mine = sections.filter((section) => section.key === key || section.key.startsWith(`${key}/`));
      return {
        key,
        label,
        href: topicHref(path),
        count: mine.reduce((sum, section) => sum + section.posts.length, 0),
        sections: mine,
      };
    };
    return TOPIC_TREE.flatMap((topic) =>
      topic.children?.length
        ? topic.children.map((child) => toGroup([topic.id, child.id], `${topic.label} › ${child.label}`))
        : [toGroup([topic.id], topic.label)],
    ).filter((group) => group.count > 0);
  }, []);

  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const toggle = useCallback((key: string) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  return { groups, open, toggle, total: POSTS.length };
}
