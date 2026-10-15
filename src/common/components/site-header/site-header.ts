"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "./site-header.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "글", href: "/posts", prefix: "/posts" },
  { label: "Labs", href: "/labs/stack", prefix: "/labs" },
];

export function useSiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // 페이지 이동 시 모바일 메뉴를 닫는다.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return {
    navItems: NAV_ITEMS.map((item) => ({ ...item, active: pathname.startsWith(item.prefix) })),
    menuOpen,
    toggleMenu: () => setMenuOpen((open) => !open),
  };
}
