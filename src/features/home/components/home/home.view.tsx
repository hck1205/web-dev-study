"use client";

import Link from "next/link";
import { Container } from "@/common/design-system";
import { PostItem } from "@/features/posts/components/post-item";
import { TopicGroups } from "@/features/topics/components/topic-groups";
import { useHome } from "./home";
import { Intro, Page, PostList, Section, SectionHead } from "./home.styled";

export function Home() {
  const { latest } = useHome();

  return (
    <Container size="narrow">
      <Page>
        <Intro>
          <h1>web-dev-study</h1>
          <p>개발하며 공부한 것들을 기록하는 블로그입니다.</p>
        </Intro>

        <Section>
          <SectionHead>
            <h2>최근 글</h2>
            <Link href="/posts">전체 글</Link>
          </SectionHead>
          <PostList>
            {latest.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </PostList>
        </Section>

        <Section>
          <SectionHead>
            <h2>주제</h2>
          </SectionHead>
          <TopicGroups />
        </Section>
      </Page>
    </Container>
  );
}
