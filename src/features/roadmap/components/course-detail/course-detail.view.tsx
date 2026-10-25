"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Container, PageHeader } from "@/common/design-system";
import { CrumbLinks } from "@/common/components/crumb-links";
import { ProgressBar } from "../progress-bar";
import { StageMark } from "../stage-mark";
import { useCourseDetail } from "./course-detail";
import {
  Bridges,
  GroupTitle,
  Intro,
  LinkCard,
  LinkCards,
  NextTag,
  Picks,
  RoadmapLink,
  RoadmapLinks,
  Section,
  Step,
  StepHead,
  StepMeta,
  StepNumber,
  Steps,
} from "./course-detail.styled";

export function CourseDetail() {
  const { course, data } = useCourseDetail();

  if (!course || !data) {
    return (
      <Container size="narrow">
        <PageHeader title="없는 로드맵이다" lead={<Link href="/roadmap">로드맵 목록으로</Link>} />
      </Container>
    );
  }

  return (
    <Container size="narrow">
      <PageHeader eyebrow={<CrumbLinks items={[{ label: "로드맵", href: "/roadmap" }]} />} title={course.label} lead={course.description} />
      <ProgressBar counts={data.total.counts} total={data.total.total} withText />
      <Intro>
        단원 순서는{" "}
        {course.sources.map((source, index) => (
          <Fragment key={source}>
            {index > 0 && ", "}
            <a href={source}>{source.replace("https://", "")}</a>
          </Fragment>
        ))}
        를 참고했다.
      </Intro>

      {data.incoming.length > 0 && (
        <Bridges>
          이 길로 오는 곳:
          {data.incoming.map((item) => (
            <Link key={item.id} href={item.href} title={item.why}>
              {item.label}
            </Link>
          ))}
        </Bridges>
      )}

      <Steps>
        {data.groups.map((group, groupIndex) => (
          <Fragment key={`${group.label ?? "stages"}-${groupIndex}`}>
            {group.label && <GroupTitle aria-hidden="true">{group.label}</GroupTitle>}
            {group.stages.map((stage) => (
              <Step
                key={stage.number}
                id={`stage-${stage.number}`}
                reached={stage.stats.total > 0 && stage.stats.started === stage.stats.total}
                current={stage.isNext}
                last={stage.number === data.lastNumber}
                style={{ animationDelay: `${Math.min(stage.number, 12) * 40}ms` }}
              >
                <StepHead>
                  <StepNumber>{stage.number}</StepNumber>
                  <h3>{stage.label}</h3>
                  {stage.isNext && <NextTag>지금</NextTag>}
                </StepHead>
                <ProgressBar counts={stage.stats.counts} total={stage.stats.total} />
                <StepMeta>
                  {stage.stats.total > 0 ? `새 글 ${stage.stats.total}편 · 적용 ${stage.stats.done}편` : "앞 단계에서 이미 읽은 글이다"}
                </StepMeta>
                {stage.picks.length > 0 && (
                  <Picks>
                    {stage.picks.map((pick) => (
                      <li key={pick.slug}>
                        <Link href={pick.href}>
                          <StageMark stage={pick.stage} />
                          {pick.title}
                        </Link>
                      </li>
                    ))}
                  </Picks>
                )}
                {stage.roadmaps.length > 0 && (
                  <RoadmapLinks>
                    {stage.roadmaps.map((roadmap) => (
                      <li key={roadmap.key}>
                        <RoadmapLink href={roadmap.href}>{roadmap.label}</RoadmapLink>
                      </li>
                    ))}
                  </RoadmapLinks>
                )}
                {stage.links.length > 0 && (
                  <Bridges>
                    여기서도 배운다:
                    {stage.links.slice(0, 4).map((link) => (
                      <Link key={link.course} href={link.href}>
                        {link.courseLabel} › {link.stageLabel}
                      </Link>
                    ))}
                  </Bridges>
                )}
              </Step>
            ))}
          </Fragment>
        ))}
      </Steps>

      {data.next.length > 0 && (
        <Section>
          <h2>이어서 갈 곳</h2>
          <LinkCards>
            {data.next.map((item, index) => (
              <li key={item.id} style={{ animationDelay: `${index * 60}ms` }}>
                <LinkCard href={item.href}>
                  <strong>{item.label}</strong>
                  <span>{item.why}</span>
                </LinkCard>
              </li>
            ))}
          </LinkCards>
        </Section>
      )}
    </Container>
  );
}
