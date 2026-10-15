import { POSTS, type Post } from "@/features/posts";
import { isInTopic, topicHref, topicKey, type Topic } from "../../registry";
import type { TopicLinkData } from "./topic-groups.type";

export function toLinkData(topic: Topic, parentPath: string[], posts: Post[] = POSTS): TopicLinkData {
  const path = [...parentPath, topic.id];
  const key = topicKey(path);

  return {
    key,
    label: topic.label,
    description: topic.description,
    href: topicHref(path),
    count: posts.filter((post) => isInTopic(post.topic, key)).length,
  };
}
