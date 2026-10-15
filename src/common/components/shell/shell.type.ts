import type { ReactNode } from "react";
import type { NavNode } from "../nav-tree";

export interface ShellProps {
  /** 상단 메뉴 트리 */
  navItems: NavNode[];
  /** 헤더 우측 액션 슬롯 */
  headerActions?: ReactNode;
  children: ReactNode;
}
