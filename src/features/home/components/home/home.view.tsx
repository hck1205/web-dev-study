"use client";

import Link from "next/link";
import { ArrowRightIcon, Button, Card, Container } from "@/common/design-system";
import { PostCard } from "@/features/posts/components/post-card";
import { useHome } from "./home";
import {
  Actions,
  CategoryCount,
  CategoryDesc,
  CategoryGrid,
  CategoryName,
  Eyebrow,
  Hero,
  HeroLead,
  HeroTitle,
  PostGrid,
  Section,
  SectionHead,
} from "./home.styled";

export function Home() {
  const { categories, latest } = useHome();

  return (
    <Container>
      <Hero>
        <Eyebrow>Web · Network · Infra · Algorithms · CS</Eyebrow>
        <HeroTitle>
          만들고, 부딪히고,
          <br />
          <em>이해한 만큼 기록합니다.</em>
        </HeroTitle>
        <HeroLead>
          웹 애플리케이션 개발부터 네트워크, 서버 인프라, 알고리즘까지. CS 전반을 공부하며 정리하는 개인 학습 공간입니다.
        </HeroLead>
        <Actions>
          <Button href="/posts" size="lg">
            글 보러가기 <ArrowRightIcon size={18} />
          </Button>
          <Button href="/labs/stack" variant="secondary" size="lg">
            Labs
          </Button>
        </Actions>
      </Hero>

      <Section>
        <SectionHead>
          <h2>주제</h2>
        </SectionHead>
        <CategoryGrid>
          {categories.map((category) => (
            <Card key={category.id} href={category.href}>
              <CategoryName>
                {category.label}
                <CategoryCount>{category.count}</CategoryCount>
              </CategoryName>
              <CategoryDesc>{category.description}</CategoryDesc>
            </Card>
          ))}
        </CategoryGrid>
      </Section>

      <Section>
        <SectionHead>
          <h2>최근 글</h2>
          <Link href="/posts">전체 보기</Link>
        </SectionHead>
        <PostGrid>
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </PostGrid>
      </Section>
    </Container>
  );
}
