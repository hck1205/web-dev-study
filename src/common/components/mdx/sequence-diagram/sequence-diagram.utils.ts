import type { Layout, SequenceActor, StepState } from "./sequence-diagram.type";

const MIN_WIDTH = 360;
const LANE_MIN = 100;
const HEADER_HEIGHT = 44;
const ROW_HEIGHT = 56;

/** viewBox 좌표계에서 배우(세로줄)와 단계(가로 화살표)의 위치를 계산한다. 배우가 적으면 줄 간격이 넓어진다. */
export function computeLayout(actors: SequenceActor[], stepCount: number): Layout {
  const width = Math.max(MIN_WIDTH, actors.length * LANE_MIN);
  const lane = width / actors.length;
  const actorX = Object.fromEntries(actors.map((actor, index) => [actor.id, lane * (index + 0.5)]));

  return {
    width,
    lane,
    headerHeight: HEADER_HEIGHT,
    rowHeight: ROW_HEIGHT,
    actorX,
    height: HEADER_HEIGHT + 12 + stepCount * ROW_HEIGHT + 8,
    rowY: (index) => HEADER_HEIGHT + 12 + index * ROW_HEIGHT + ROW_HEIGHT * 0.62,
  };
}

export const stepState = (index: number, current: number): StepState =>
  index === current ? "active" : index < current ? "past" : "ghost";
