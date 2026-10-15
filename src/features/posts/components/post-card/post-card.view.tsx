"use client";

import { Badge, Card } from "@/common/design-system";
import { usePostCard } from "./post-card";
import { BadgeRow, Meta, Summary, Title } from "./post-card.styled";
import type { PostCardProps } from "./post-card.type";

export function PostCard({ post }: PostCardProps) {
  const { href, category, date, difficulty } = usePostCard(post);

  return (
    <Card href={href}>
      <BadgeRow>
        {category && <Badge tone="accent">{category.label}</Badge>}
        {difficulty && <Badge tone={difficulty.tone}>{difficulty.label}</Badge>}
      </BadgeRow>
      <Title>{post.title}</Title>
      <Summary>{post.summary}</Summary>
      <Meta>
        <time dateTime={post.date}>{date}</time>
        <span>{post.tags.map((tag) => `#${tag}`).join(" ")}</span>
      </Meta>
    </Card>
  );
}
