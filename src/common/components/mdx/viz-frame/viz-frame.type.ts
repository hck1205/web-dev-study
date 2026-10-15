import type { ReactNode } from "react";

export interface VizFrameProps {
  caption?: string;
  /** 캡션 위치. 단계형 시각화는 위, 정적인 그림은 아래가 자연스럽다. */
  captionAt?: "top" | "bottom";
  children: ReactNode;
}
