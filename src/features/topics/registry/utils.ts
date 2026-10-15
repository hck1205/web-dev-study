import type { FlatTopic, Topic } from "./types";

const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });

/** 모든 레벨의 형제 노드를 라벨 ABC 순으로 정렬한 새 트리를 반환한다. */
export function sortTopics(topics: Topic[]): Topic[] {
  return [...topics]
    .sort((a, b) => collator.compare(a.label, b.label))
    .map((topic) => (topic.children ? { ...topic, children: sortTopics(topic.children) } : topic));
}

export const topicKey = (path: string[]) => path.join("/");

export const topicHref = (path: string[]) => `/topics/${topicKey(path)}`;

export function flattenTopics(topics: Topic[], parentPath: string[] = [], parentTrail: Topic[] = []): FlatTopic[] {
  return topics.flatMap((topic) => {
    const path = [...parentPath, topic.id];
    const trail = [...parentTrail, topic];
    return [{ topic, path, trail }, ...flattenTopics(topic.children ?? [], path, trail)];
  });
}

export function findTopic(topics: Topic[], path: string[]): FlatTopic | undefined {
  const key = topicKey(path);
  return flattenTopics(topics).find((flat) => topicKey(flat.path) === key);
}

/** 글의 토픽 경로가 주어진 경로와 같거나 그 하위인지 확인한다. */
export const isInTopic = (postTopic: string, key: string) => postTopic === key || postTopic.startsWith(`${key}/`);
