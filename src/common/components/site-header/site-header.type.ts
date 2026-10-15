import type { ReactNode } from "react";
import type { NavNode } from "../nav-tree";

export interface SiteHeaderProps {
  /** 상단 메뉴. 각 항목은 children으로 하위 메뉴를 임의 깊이까지 가질 수 있다. */
  items: NavNode[];
  /** 테마 토글 앞에 놓일 액션(검색 버튼 등). features에서 주입한다. */
  actions?: ReactNode;
}
