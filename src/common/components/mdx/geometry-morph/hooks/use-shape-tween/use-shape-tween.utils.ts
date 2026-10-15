import type { ShapeFrame } from "../../geometry-morph.type";

/** 천천히 출발해 천천히 멈춘다 */
export const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function lerpFrame(from: ShapeFrame, to: ShapeFrame, t: number): ShapeFrame {
  return Object.fromEntries(
    Object.entries(to).map(([id, points]) => {
      const start = from[id];
      if (!start || start.length !== points.length) return [id, points];
      return [id, points.map(([x, y], i) => [start[i][0] + (x - start[i][0]) * t, start[i][1] + (y - start[i][1]) * t])];
    }),
  );
}
