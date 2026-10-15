"use client";

import Link from "next/link";
import { SITE } from "@/common/config/site";
import { Container, PageHeader } from "@/common/design-system";
import { PostItemList } from "@/features/posts/components/post-item-list";
import { TopicGroups } from "@/features/topics/components/topic-groups";
import { useHome } from "./home";
import { Section, SectionHead } from "./home.styled";

export function Home() {
  const { latest } = useHome();

  return (
    <Container size="narrow">
      <PageHeader title={SITE.name} lead={`${SITE.description}입니다.`} />

      <Section>
        <SectionHead>
          <h2>최근 글</h2>
          <Link href="/posts">전체 글</Link>
        </SectionHead>
        <PostItemList posts={latest} />
      </Section>

      <Section>
        <SectionHead>
          <h2>주제</h2>
        </SectionHead>
        <TopicGroups />
      </Section>
    </Container>
  );
}
