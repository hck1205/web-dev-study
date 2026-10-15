"use client";

import { Badge } from "@/common/design-system";
import { usePostItem } from "./post-item";
import { Body, Date, Meta, Root, Summary, Title, TitleLink } from "./post-item.styled";
import type { PostItemProps } from "./post-item.type";

export function PostItem({ post }: PostItemProps) {
  const { href, topicLabel, date, difficulty } = usePostItem(post);

  return (
    <Root>
      <Date dateTime={post.date}>{date}</Date>
      <Body>
        <Title>
          <TitleLink href={href}>{post.title}</TitleLink>
        </Title>
        <Summary>{post.summary}</Summary>
        <Meta>
          {topicLabel && <span>{topicLabel}</span>}
          {difficulty && <Badge tone={difficulty.tone}>{difficulty.label}</Badge>}
          {post.tags.length > 0 && <span>{post.tags.map((tag) => `#${tag}`).join(" ")}</span>}
        </Meta>
      </Body>
    </Root>
  );
}
