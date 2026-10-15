export type Point = [number, number];

/** 색 구분. series1~3은 범주, accent는 강조, muted는 배경 조각, outline은 테두리만 */
export type MorphTone = "series1" | "series2" | "series3" | "accent" | "muted" | "outline";

export interface MorphShape {
  id: string;
  tone?: MorphTone;
}

export interface MorphLabel {
  x: number;
  y: number;
  text: string;
  tone?: MorphTone | "text";
  size?: "sm" | "md" | "lg";
}

export interface MorphStep {
  title: string;
  detail?: string;
  /**
   * 이 단계에서 보이는 도형과 꼭짓점 좌표. 같은 도형은 단계마다 꼭짓점 수가 같아야 한다.
   * 빠진 도형은 이전 위치에서 흐려지며 사라지고, 다시 나오면 그 자리에서 나타난다.
   */
  shapes: Record<string, Point[]>;
  labels?: MorphLabel[];
  /** 테두리를 굵게 하고 빛나게 할 도형 */
  focus?: string[];
}

export interface GeometryMorphProps {
  /** SVG 좌표계 크기 (viewBox). 화면 폭에 맞춰 비율을 유지하며 줄어든다 */
  width: number;
  height: number;
  shapes: MorphShape[];
  steps: MorphStep[];
  caption?: string;
}

export type ShapeFrame = Record<string, Point[]>;
