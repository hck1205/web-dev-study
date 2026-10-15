"use client";

import Link from "next/link";
import { Container } from "@/common/design-system";
import { PostItem } from "@/features/posts/components/post-item";
import { TopicLinkList } from "../topic-groups";
import { useTopicPage } from "./topic-page";
import { BackLink, Breadcrumb, Empty, Lead, List, Page, Section, Title } from "./topic-page.styled";

export function TopicPage() {
  const page = useTopicPage();

  if (!page.found) {
    return (
      <Container size="narrow">
        <Page>
          <Title>토픽을 찾을 수 없습니다</Title>
          <Lead>주소가 잘못되었거나 삭제된 토픽입니다.</Lead>
          <BackLink href="/topics">전체 토픽 보기</BackLink>
        </Page>
      </Container>
    );
  }

  const { topic, crumbs, subtopics, posts } = page;

  return (
    <Container size="narrow">
      <Page>
        <Breadcrumb aria-label="경로">
          <Link href="/topics">Topics</Link>
          {crumbs.map((crumb, index) => (
            <span key={crumb.href}>
              / {index === crumbs.length - 1 ? crumb.label : <Link href={crumb.href}>{crumb.label}</Link>}
            </span>
          ))}
        </Breadcrumb>
        <Title>{topic.label}</Title>
        {topic.description && <Lead>{topic.description}</Lead>}

        {subtopics.length > 0 && (
          <Section>
            <TopicLinkList topics={subtopics} />
          </Section>
        )}

        <Section>
          
          {posts.length === 0 ? (
            <Empty>아직 이 토픽에 글이 없습니다.</Empty>
          ) : (
            <List>
              {posts.map((post) => (
                <PostItem key={post.slug} post={post} />
              ))}
            </List>
          )}
        </Section>
      </Page>
    </Container>
  );
}
