import type { ReactNode } from "react";
import type { NavNode } from "../nav-tree";

export interface ShellProps {
  /** 상단 메뉴 트리 */
  navItems: NavNode[];
  children: ReactNode;
}
