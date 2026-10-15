"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/common/design-system";
import { PostItemList } from "@/features/posts/components/post-item-list";
import { QuizLink } from "@/features/quiz/components/quiz-link";
import { TopicLinkList } from "../topic-groups";
import { useTopicPage } from "./topic-page";
import { QuizSection, Section } from "./topic-page.styled";

export function TopicPage() {
  const page = useTopicPage();

  if (!page.found) {
    return (
      <Container size="narrow">
        <PageHeader
          title="토픽을 찾을 수 없습니다"
          lead={<Link href="/topics">전체 토픽 보기</Link>}
        />
      </Container>
    );
  }

  const { topic, topicKey, crumbs, subtopics, posts } = page;

  return (
    <Container size="narrow">
      <PageHeader
        eyebrow={
          <nav aria-label="경로">
            <Link href="/topics">Topics</Link>
            {crumbs.slice(0, -1).map((crumb) => (
              <span key={crumb.href}>
                {" / "}
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
          </nav>
        }
        title={topic.label}
        lead={topic.description}
      />

      {subtopics.length > 0 && (
        <Section>
          <TopicLinkList topics={subtopics} />
        </Section>
      )}

      <PostItemList posts={posts} emptyMessage="아직 이 토픽에 글이 없습니다." />

      <QuizSection>
        <QuizLink topic={topicKey} />
      </QuizSection>
    </Container>
  );
}
