import type { NavNode } from "@/common/components/nav-tree";
import type { Topic } from "./types";
import { topicHref, topicKey } from "./utils";

/** 토픽 트리를 메뉴 노드로 변환한다. */
export function toNavNodes(topics: Topic[], parentPath: string[] = []): NavNode[] {
  return topics.map((topic) => {
    const path = [...parentPath, topic.id];
    return {
      id: topicKey(path),
      label: topic.label,
      href: topicHref(path),
      children: topic.children ? toNavNodes(topic.children, path) : undefined,
    };
  });
}
