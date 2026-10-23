"use client";

import { Container } from "@/common/design-system";
import { Prose } from "@/common/components/mdx/prose";
import { BookmarkButton } from "@/features/bookmarks/components/bookmark-button";
import { QuizLink } from "@/features/quiz/components/quiz-link";
import { StudyPanel } from "@/features/roadmap/components/study-panel";
import { CompanyLabels } from "../company-labels";
import { DifficultyBadge } from "../difficulty-badge";
import { PostTags } from "../post-tags";
import { usePostLayout } from "./post-layout";
import {
  BadgeRow,
  Body,
  Column,
  Crumbs,
  DesktopToc,
  Grid,
  Header,
  Meta,
  MetaEnd,
  MobileToc,
  Page,
  PostQuiz,
  Summary,
  TocLink,
  TocList,
  TocTitle,
  Title,
} from "./post-layout.styled";
import type { PostLayoutProps } from "./post-layout.type";
import type { TocItem } from "./hooks/use-post-toc";
import { CrumbLinks } from "@/common/components/crumb-links";

function TocLinks({ items, activeId }: { items: TocItem[]; activeId: string | null }) {
  return (
    <TocList>
      {items.map((item) => (
        <li key={item.id}>
          <TocLink href={`#${item.id}`} level={item.level} active={item.id === activeId}>
            {item.text}
          </TocLink>
        </li>
      ))}
    </TocList>
  );
}

export function PostLayout({ children }: PostLayoutProps) {
  const { bodyRef, post, crumbs, date, toc } = usePostLayout();

  return (
    <Container>
      <Page>
        <Grid>
          <Column>
            {post && (
              <Header>
                <BadgeRow>
                  <Crumbs aria-label="토픽 경로">
                    <CrumbLinks items={crumbs} />
                  </Crumbs>
                  <CompanyLabels companies={post.companies} />
                  {post.difficulty && <DifficultyBadge difficulty={post.difficulty} />}
                </BadgeRow>
                <Title>{post.title}</Title>
                <Summary>{post.summary}</Summary>
                <Meta>
                  <time dateTime={post.date}>{date}</time>
                  <PostTags tags={post.tags} />
                  <MetaEnd>
                    <BookmarkButton slug={post.slug} withLabel />
                  </MetaEnd>
                </Meta>
              </Header>
            )}

            {toc.items.length > 0 && (
              <MobileToc>
                <summary>목차</summary>
                <nav aria-label="목차">
                  <TocLinks items={toc.items} activeId={toc.activeId} />
                </nav>
              </MobileToc>
            )}

            <Body ref={bodyRef}>
              <Prose>{children}</Prose>
            </Body>

            {post && (
              <>
                <StudyPanel slug={post.slug} />
                <PostQuiz>
                  <QuizLink topic={post.topic} />
                </PostQuiz>
              </>
            )}
          </Column>

          {toc.items.length > 0 && (
            <DesktopToc>
              <nav aria-label="목차">
                <TocTitle>목차</TocTitle>
                <TocLinks items={toc.items} activeId={toc.activeId} />
              </nav>
            </DesktopToc>
          )}
        </Grid>
      </Page>
    </Container>
  );
}
