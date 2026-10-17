"use client";

import { POSTS, postHref } from "@/features/posts";
import { FLAT_TOPICS, topicHref, topicKey } from "@/features/topics/registry";
import type { MapSection } from "./content-map.type";
import { relatedPosts } from "./content-map.utils";

export function useContentMap() {
  const sections: MapSection[] = FLAT_TOPICS.map(({ path, trail }) => {
    const key = topicKey(path);
    const posts = POSTS.filter((post) => post.topic === key)
      .sort((a, b) => a.title.localeCompare(b.title, "ko"))
      .map((post) => ({ slug: post.slug, title: post.title, href: postHref(post.slug), related: relatedPosts(post.slug) }));
    return { key, label: trail.map((topic) => topic.label).join(" › "), href: topicHref(path), depth: path.length, posts };
  }).filter((section) => section.posts.length > 0);

  return { sections, total: POSTS.length };
}
