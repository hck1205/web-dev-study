import { toNavNodes } from "./nav";
import { TOPICS } from "./topics";
import type { FlatTopic } from "./types";
import { findTopic, flattenTopics, sortTopics, topicHref } from "./utils";

export type { FlatTopic, Topic } from "./types";
export { findTopic, flattenTopics, isInTopic, sortTopics, topicHref, topicKey, topicLinkHref } from "./utils";

/** ABC 순으로 정렬된 토픽 트리 */
export const TOPIC_TREE = sortTopics(TOPICS);

export const FLAT_TOPICS = flattenTopics(TOPIC_TREE);

/** 상단 메뉴용 노드. 토픽 트리와 같은 구조(ABC 순)다. */
export const TOPIC_NAV = toNavNodes(TOPIC_TREE);

/** 글의 토픽 키("programming/algorithms")로 토픽을 찾는다. */
export const findTopicByKey = (key: string) => findTopic(TOPIC_TREE, key.split("/"));

/** 루트부터 해당 토픽까지의 링크 목록 (브레드크럼). 예: Programming / Algorithms */
export const topicCrumbs = (found: FlatTopic) =>
  found.trail.map((topic, index) => ({ label: topic.label, href: topicHref(found.path.slice(0, index + 1)) }));
