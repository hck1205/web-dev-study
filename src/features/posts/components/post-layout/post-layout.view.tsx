"use client";

import Link from "next/link";
import { Badge, Container } from "@/common/design-system";
import { Prose } from "@/common/components/mdx/prose";
import { DIFFICULTY_LABELS } from "../../registry";
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
  MobileToc,
  Page,
  Summary,
  TocLink,
  TocList,
  TocTitle,
  Title,
} from "./post-layout.styled";
import type { PostLayoutProps } from "./post-layout.type";
import type { TocItem } from "./hooks/use-post-toc";

const DIFFICULTY_TONE = { easy: "success", medium: "warning", hard: "danger" } as const;

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
                    {crumbs.map((crumb, index) => (
                      <span key={crumb.href}>
                        {index > 0 && " / "}
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </span>
                    ))}
                  </Crumbs>
                  {post.difficulty && (
                    <Badge tone={DIFFICULTY_TONE[post.difficulty]}>{DIFFICULTY_LABELS[post.difficulty]}</Badge>
                  )}
                </BadgeRow>
                <Title>{post.title}</Title>
                <Summary>{post.summary}</Summary>
                <Meta>
                  <time dateTime={post.date}>{date}</time>
                  {post.tags.length > 0 && <span>{post.tags.map((tag) => `#${tag}`).join("  ")}</span>}
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
