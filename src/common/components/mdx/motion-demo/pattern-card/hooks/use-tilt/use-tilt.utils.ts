import { TILT_MAX_DEG } from "../../../motion-demo.utils";
import type { TiltAngle } from "./use-tilt.type";

/** 커서 위치(-0.5~0.5)를 기울기로 바꾼다. 커서가 있는 쪽 가장자리가 보는 사람 쪽으로 다가온다 */
export const angleFromPointer = (px: number, py: number): TiltAngle => ({
  rx: py * 2 * TILT_MAX_DEG,
  ry: -px * 2 * TILT_MAX_DEG,
});
