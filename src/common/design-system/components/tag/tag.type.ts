import type { ReactNode } from "react";

export interface TagProps {
  /** 지정하면 링크, 없으면 단순 텍스트 */
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
