"use client";

import { Button, Counter, Root } from "./step-controls.styled";
import type { StepControlsProps } from "./step-controls.type";

/** 시각화 공용 컨트롤: 처음 / 이전 / 다음 / 자동 재생 */
export function StepControls({ player }: StepControlsProps) {
  return (
    <Root role="group" aria-label="단계 컨트롤">
      <Button type="button" onClick={player.reset} disabled={player.isFirst && !player.playing} aria-label="처음으로">
        ↺
      </Button>
      <Button type="button" onClick={player.prev} disabled={player.isFirst}>
        이전
      </Button>
      <Button type="button" primary onClick={player.next} disabled={player.isLast}>
        다음
      </Button>
      <Button type="button" onClick={player.togglePlay} aria-pressed={player.playing}>
        {player.playing ? "일시정지" : "자동 재생"}
      </Button>
      <Counter aria-live="polite">
        {player.index + 1} / {player.total}
      </Counter>
    </Root>
  );
}
