"use client";

import { Container, PageHeader } from "@/common/design-system";
import { TopicGroups } from "@/features/topics/components/topic-groups";

export default function TopicsPage() {
  return (
    <Container>
      <PageHeader title="Topics" lead="주제별로 글을 모아 본다. 숫자는 하위 주제까지 합친 글 수다." />
      <TopicGroups />
    </Container>
  );
}
