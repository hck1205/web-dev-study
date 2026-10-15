"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isNodeInTrail } from "../nav-tree/nav-tree.utils";
import type { NavNode } from "../nav-tree";
import { useDropdown } from "./hooks/use-dropdown";

export function useSiteHeader(items: NavNode[]) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdown = useDropdown();
  const { close } = dropdown;

  // 페이지 이동 시 모바일 메뉴와 드롭다운을 닫는다.
  useEffect(() => {
    setMenuOpen(false);
    close();
  }, [pathname, close]);

  return {
    dropdown,
    menuOpen,
    toggleMenu: () => setMenuOpen((open) => !open),
    closeMenu: () => setMenuOpen(false),
    entries: items.map((item) => ({ item, active: isNodeInTrail(item, pathname) })),
  };
}
