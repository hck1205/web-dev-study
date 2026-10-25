"use client";

import { TOPIC_TREE } from "../../registry";
import type { TopicGroupData } from "./topic-groups.type";
import { toLinkData } from "./topic-groups.utils";

export function useTopicGroups() {
  // 글이 아직 없는 토픽은 메뉴에는 남겨 두되 홈·토픽 목록에서는 보이지 않는다
  const groups: TopicGroupData[] = TOPIC_TREE.map((topic) => ({
    ...toLinkData(topic, []),
    children: (topic.children ?? [])
      .map((child) => toLinkData(child, [topic.id]))
      .filter((child) => child.count > 0),
  })).filter((group) => group.count > 0);

  return { groups };
}
