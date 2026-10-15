import { toNavNodes } from "./nav";
import { TOPICS } from "./topics";
import { flattenTopics, sortTopics } from "./utils";

export type { FlatTopic, Topic } from "./types";
export { findTopic, flattenTopics, isInTopic, sortTopics, topicHref, topicKey } from "./utils";

/** ABC 순으로 정렬된 토픽 트리 */
export const TOPIC_TREE = sortTopics(TOPICS);

export const FLAT_TOPICS = flattenTopics(TOPIC_TREE);

/** 상단 메뉴용 노드. 토픽 트리와 같은 구조(ABC 순)다. */
export const TOPIC_NAV = toNavNodes(TOPIC_TREE);
