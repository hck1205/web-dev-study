"use client";

import { STAGE_LABELS } from "../../atoms/study-progress";
import { Cell, Cells, Label, Root } from "./stage-mark.styled";
import type { StageMarkProps } from "./stage-mark.type";

/** 글 하나의 마스터 단계(0~4)를 네 칸으로 보여 준다. 3단계부터는 초록으로 바뀐다 */
export function StageMark({ stage, withLabel = false }: StageMarkProps) {
  return (
    <Root title={STAGE_LABELS[stage]} aria-label={`단계: ${STAGE_LABELS[stage]}`}>
      <Cells aria-hidden>
        {[1, 2, 3, 4].map((cell) => (
          <Cell key={cell} filled={stage >= cell} stage={stage} />
        ))}
      </Cells>
      {withLabel && <Label>{STAGE_LABELS[stage]}</Label>}
    </Root>
  );
}
