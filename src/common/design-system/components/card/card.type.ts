import type { ReactNode } from "react";

export interface CardProps {
  /** 지정하면 카드 전체가 링크가 된다 */
  href?: string;
  children: ReactNode;
  className?: string;
}
