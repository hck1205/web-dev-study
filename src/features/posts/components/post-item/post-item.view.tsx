"use client";

import { Badge, Tag } from "@/common/design-system";
import { usePostItem } from "./post-item";
import { Body, Date, Meta, Root, Summary, Title, TitleLink } from "./post-item.styled";
import type { PostItemProps } from "./post-item.type";

export function PostItem({ post }: PostItemProps) {
  const { href, topicLabel, date, difficulty, tags } = usePostItem(post);

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
          {tags.map((tag) => (
            <Tag key={tag.slug} href={tag.href}>
              {tag.label}
            </Tag>
          ))}
        </Meta>
      </Body>
    </Root>
  );
}
