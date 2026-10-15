"use client";

import { DifficultyBadge } from "../difficulty-badge";
import { PostTags } from "../post-tags";
import { usePostItem } from "./post-item";
import { Body, Meta, PublishedAt, Root, Summary, Title, TitleLink } from "./post-item.styled";
import type { PostItemProps } from "./post-item.type";

/** 글 목록의 한 줄: 날짜 · 제목 · 요약 · 토픽 · 난이도 · 태그 */
export function PostItem({ post }: PostItemProps) {
  const { href, topicLabel, date } = usePostItem(post);

  return (
    <Root>
      <PublishedAt dateTime={post.date}>{date}</PublishedAt>
      <Body>
        <Title>
          <TitleLink href={href}>{post.title}</TitleLink>
        </Title>
        <Summary>{post.summary}</Summary>
        <Meta>
          {topicLabel && <span>{topicLabel}</span>}
          {post.difficulty && <DifficultyBadge difficulty={post.difficulty} />}
          <PostTags tags={post.tags} />
        </Meta>
      </Body>
    </Root>
  );
}
