"use client";

import { useParams } from "next/navigation";
import { POSTS, sortByDateDesc } from "@/features/posts";
import { FLAT_TOPICS, findTopic, isInTopic, TOPIC_TREE, topicHref, topicKey } from "../../registry";
import { toLinkData } from "../topic-groups/topic-groups.utils";
import type { Crumb } from "./topic-page.type";

export function useTopicPage() {
  const params = useParams<{ path?: string[] }>();
  const path = params.path ?? [];
  const found = findTopic(TOPIC_TREE, path);

  if (!found) return { found: false as const };

  const key = topicKey(found.path);
  const crumbs: Crumb[] = found.trail.map((topic, index) => ({
    label: topic.label,
    href: topicHref(found.path.slice(0, index + 1)),
  }));

  return {
    found: true as const,
    topic: found.topic,
    crumbs,
    subtopics: (found.topic.children ?? []).map((child) => toLinkData(child, found.path)),
    posts: sortByDateDesc(POSTS.filter((post) => isInTopic(post.topic, key))),
    totalTopics: FLAT_TOPICS.length,
  };
}
