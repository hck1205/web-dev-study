"use client";

import { Button, Buttons, Counter, Root, Segment, Track } from "./step-controls.styled";
import type { StepControlsProps } from "./step-controls.type";

/** 시각화 공용 컨트롤: 진행 막대(눌러서 이동) + 처음 / 이전 / 다음 / 자동 재생 */
export function StepControls({ player }: StepControlsProps) {
  return (
    <Root role="group" aria-label="단계 컨트롤">
      <Track>
        {Array.from({ length: player.total }, (_, i) => (
          <Segment
            key={i}
            type="button"
            aria-label={`${i + 1}단계로`}
            aria-current={i === player.index ? "step" : undefined}
            state={i < player.index ? "done" : i === player.index ? "current" : "todo"}
            // 자동 재생 중에는 현재 칸이 다음 단계까지 남은 시간만큼 차오른다.
            timing={player.playing && i === player.index ? player.intervalMs : 0}
            onClick={() => player.goTo(i)}
          >
            <i key={`${player.index}-${player.playing}`} />
          </Segment>
        ))}
      </Track>
      <Buttons>
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
      </Buttons>
    </Root>
  );
}
