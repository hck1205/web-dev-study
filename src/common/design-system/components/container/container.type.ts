import type { ReactNode } from "react";

export type ContainerSize = "narrow" | "wide";

export interface ContainerProps {
  size?: ContainerSize;
  children: ReactNode;
  className?: string;
}
