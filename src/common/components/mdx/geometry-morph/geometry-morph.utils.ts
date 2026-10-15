import type { MorphShape, MorphStep, ShapeFrame } from "./geometry-morph.type";

/**
 * 단계마다 모든 도형의 좌표를 채운다. 그 단계에 없는 도형은 바로 앞(없으면 처음 나오는) 단계의 좌표를 쓴다.
 * 그래야 숨겨진 도형이 엉뚱한 곳에서 날아오지 않는다.
 */
export function resolveFrames(shapes: MorphShape[], steps: MorphStep[]): ShapeFrame[] {
  const firstSeen: ShapeFrame = {};
  for (const step of steps) {
    for (const [id, points] of Object.entries(step.shapes)) firstSeen[id] ??= points;
  }

  const frames: ShapeFrame[] = [];
  steps.forEach((step, index) => {
    const prev = frames[index - 1] ?? firstSeen;
    frames.push(Object.fromEntries(shapes.map(({ id }) => [id, step.shapes[id] ?? prev[id] ?? []])));
  });
  return frames;
}

export const toPoints = (points: [number, number][]) => points.map(([x, y]) => `${x},${y}`).join(" ");
