"use client";

import { Eyebrow, Lead, Root, Title } from "./page-header.styled";
import type { PageHeaderProps } from "./page-header.type";

/** 목록·토픽·태그 등 페이지 상단의 제목 영역 */
export function PageHeader({ title, lead, eyebrow }: PageHeaderProps) {
  return (
    <Root>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {lead && <Lead>{lead}</Lead>}
    </Root>
  );
}
