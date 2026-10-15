import type { NavNode } from "../nav-tree";

export interface SiteHeaderProps {
  /** 상단 메뉴. 각 항목은 children으로 하위 메뉴를 임의 깊이까지 가질 수 있다. */
  items: NavNode[];
}
