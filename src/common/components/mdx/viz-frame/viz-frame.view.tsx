"use client";

import { Caption, Figure } from "./viz-frame.styled";
import type { VizFrameProps } from "./viz-frame.type";

/** 모든 시각화 컴포넌트가 공유하는 틀(테두리·여백·캡션). */
export function VizFrame({ caption, captionAt = "top", children }: VizFrameProps) {
  return (
    <Figure>
      {caption && captionAt === "top" && <Caption at="top">{caption}</Caption>}
      {children}
      {caption && captionAt === "bottom" && <Caption at="bottom">{caption}</Caption>}
    </Figure>
  );
}
