"use client";

import { VizFrame } from "../viz-frame";
import { StepControls } from "../step-controls";
import { useAlgoTrace } from "./algo-trace";
import { Cell, CellWrap, Cells, Chip, Chips, Empty, Index, Memory, MemoryTitle, Pointer, Say, Stage } from "./algo-trace.styled";
import type { AlgoTraceProps } from "./algo-trace.type";

/** 배열/문자열을 한 칸씩 훑으며 "기억 장소"가 어떻게 변하는지 보여주는 알고리즘 추적기 */
export function AlgoTrace(props: AlgoTraceProps) {
  const { cells, memoryLabel = "기억", caption } = props;
  const { player, step, memory } = useAlgoTrace(props);

  return (
    <VizFrame caption={caption}>
      <Stage>
        <Cells>
          {cells.map((cell, index) => {
            const state = step.found?.includes(index) ? "found" : step.pointer === index ? "current" : "idle";
            return (
              <CellWrap key={index}>
                {/* key에 단계 번호를 넣어, 단계가 바뀔 때마다 애니메이션이 다시 재생되게 한다 */}
                <Pointer key={`p-${player.index}`} visible={step.pointer === index}>
                  ▼
                </Pointer>
                <Cell key={`c-${state === "idle" ? "idle" : player.index}`} state={state}>
                  {cell}
                </Cell>
                <Index>{index}</Index>
              </CellWrap>
            );
          })}
        </Cells>

        {step.memory && (
          <Memory>
            <MemoryTitle>{memoryLabel}</MemoryTitle>
            <Chips>
              {memory.items.length === 0 && memory.leaving.length === 0 && <Empty>비어 있음</Empty>}
              {memory.items.map((item, index) => (
                <Chip key={`${player.index}-${index}-${item.value}`} motion={item.entering ? "enter" : undefined}>
                  {item.value}
                </Chip>
              ))}
              {memory.leaving.map((value, index) => (
                <Chip key={`leave-${player.index}-${index}`} motion="leave" aria-hidden="true">
                  {value}
                </Chip>
              ))}
            </Chips>
          </Memory>
        )}
      </Stage>
      <Say key={player.index} aria-live="polite">
        {step.caption}
      </Say>
      <StepControls player={player} />
    </VizFrame>
  );
}
