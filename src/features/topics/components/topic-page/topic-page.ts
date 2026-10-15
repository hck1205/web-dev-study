"use client";

import { useParams } from "next/navigation";
import { POSTS, sortByDateDesc } from "@/features/posts";
import { findTopic, isInTopic, TOPIC_TREE, topicCrumbs, topicKey } from "../../registry";
import { toLinkData } from "../topic-groups";

export function useTopicPage() {
  const params = useParams<{ path?: string[] }>();
  const found = findTopic(TOPIC_TREE, params.path ?? []);

  if (!found) return { found: false as const };

  const key = topicKey(found.path);

  return {
    found: true as const,
    topic: found.topic,
    crumbs: topicCrumbs(found),
    subtopics: (found.topic.children ?? []).map((child) => toLinkData(child, found.path)),
    posts: sortByDateDesc(POSTS.filter((post) => isInTopic(post.topic, key))),
  };
}
