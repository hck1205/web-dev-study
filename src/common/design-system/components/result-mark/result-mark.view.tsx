"use client";

import { Root } from "./result-mark.styled";
import type { ResultMarkProps } from "./result-mark.type";

/** 맞음/틀림을 나타내는 작은 원형 표시 (✓ / ✕). 테스트 결과, 퀴즈 결과 목록에 쓴다. */
export function ResultMark({ pass, label, size = "md" }: ResultMarkProps) {
  return (
    <Root pass={pass} size={size} role="img" aria-label={label}>
      {pass ? "✓" : "✕"}
    </Root>
  );
}
