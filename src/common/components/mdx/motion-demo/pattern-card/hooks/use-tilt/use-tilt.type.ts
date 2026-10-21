export interface TiltAngle {
  /** 위아래로 기울기 (rotateX, 도) */
  rx: number;
  /** 좌우로 기울기 (rotateY, 도) */
  ry: number;
}

/** 무대 안의 커서 위치. 가운데가 0, 가장자리가 ±0.5 */
export interface TiltPointer {
  px: number;
  py: number;
}
