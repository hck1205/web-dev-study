"use client";

import { StepControls } from "../step-controls";
import { useAlgoTrace } from "./algo-trace";
import { Caption, Cell, CellWrap, Cells, Chip, Chips, Empty, Frame, Index, Memory, MemoryTitle, Pointer, Say, Stage } from "./algo-trace.styled";
import type { AlgoTraceProps } from "./algo-trace.type";

/** 배열/문자열을 한 칸씩 훑으며 "기억 장소"가 어떻게 변하는지 보여주는 알고리즘 추적기 */
export function AlgoTrace(props: AlgoTraceProps) {
  const { cells, memoryLabel = "기억", caption } = props;
  const { player, step } = useAlgoTrace(props);

  return (
    <Frame>
      {caption && <Caption>{caption}</Caption>}
      <Stage>
        <Cells>
          {cells.map((cell, index) => {
            const state = step.found?.includes(index) ? "found" : step.pointer === index ? "current" : "idle";
            return (
              <CellWrap key={index}>
                <Pointer visible={step.pointer === index}>▼</Pointer>
                <Cell state={state}>{cell}</Cell>
                <Index>{index}</Index>
              </CellWrap>
            );
          })}
        </Cells>

        {step.memory && (
          <Memory>
            <MemoryTitle>{memoryLabel}</MemoryTitle>
            <Chips>
              {step.memory.length === 0 ? (
                <Empty>비어 있음</Empty>
              ) : (
                step.memory.map((item, index) => <Chip key={`${item}-${index}`}>{item}</Chip>)
              )}
            </Chips>
          </Memory>
        )}
      </Stage>
      <Say aria-live="polite">{step.caption}</Say>
      <StepControls player={player} />
    </Frame>
  );
}
