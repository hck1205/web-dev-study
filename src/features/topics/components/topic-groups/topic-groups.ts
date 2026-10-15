"use client";

import { TOPIC_TREE } from "../../registry";
import type { TopicGroupData } from "./topic-groups.type";
import { toLinkData } from "./topic-groups.utils";

export function useTopicGroups() {
  const groups: TopicGroupData[] = TOPIC_TREE.map((topic) => ({
    ...toLinkData(topic, []),
    children: (topic.children ?? []).map((child) => toLinkData(child, [topic.id])),
  }));

  return { groups };
}
