"use client";

import { Body, Root } from "./step-detail.styled";
import type { StepDetailProps } from "./step-detail.type";

/** 단계형 시각화 아래의 설명 패널: "번호. 제목" + 설명. 단계가 바뀌면 살짝 떠오르며 바뀐다. */
export function StepDetail({ index, title, detail, children }: StepDetailProps) {
  return (
    <Root aria-live="polite">
      <Body key={index}>
        <h4>
          {index + 1}. {title}
        </h4>
        {detail && <p>{detail}</p>}
        {children}
      </Body>
    </Root>
  );
}
