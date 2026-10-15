"use client";

import Link from "next/link";
import { useTopicGroups } from "./topic-groups";
import { Count, Group, GroupTitle, Links, TopicLink } from "./topic-groups.styled";
import type { TopicLinkData } from "./topic-groups.type";

export function TopicLinkList({ topics }: { topics: TopicLinkData[] }) {
  return (
    <Links>
      {topics.map((topic) => (
        <li key={topic.key}>
          <TopicLink href={topic.href}>
            {topic.label}
            <Count>{topic.count}</Count>
          </TopicLink>
        </li>
      ))}
    </Links>
  );
}

/** 최상위 토픽별로 하위 토픽 링크를 나열한다. 토픽 트리가 바뀌면 자동으로 반영된다. */
export function TopicGroups() {
  const { groups } = useTopicGroups();

  return (
    <>
      {groups.map((group) => (
        <Group key={group.key}>
          <GroupTitle>
            <Link href={group.href}>{group.label}</Link>
          </GroupTitle>
          <TopicLinkList topics={group.children.length > 0 ? group.children : [group]} />
        </Group>
      ))}
    </>
  );
}
