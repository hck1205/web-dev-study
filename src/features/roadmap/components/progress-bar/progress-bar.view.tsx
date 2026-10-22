"use client";

import { Fill, Root, Text, Track } from "./progress-bar.styled";
import type { ProgressBarProps } from "./progress-bar.type";

/** 읽음(파랑) → 설명함(강조색) → 적용·응용(초록) 순서로 채워지는 막대 */
export function ProgressBar({ counts, total, withText = false }: ProgressBarProps) {
  const done = counts[3] + counts[4];
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <Root>
      <Track role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label={`적용까지 끝낸 글 ${done} / ${total}`}>
        {([4, 3, 2, 1] as const).map((stage) => (
          <Fill key={stage} stage={stage} ratio={total ? counts[stage] / total : 0} />
        ))}
      </Track>
      {withText && (
        <Text>
          <span>
            {total - counts[0]}편 시작 · {done}편 적용
          </span>
          <span>{percent}%</span>
        </Text>
      )}
    </Root>
  );
}
