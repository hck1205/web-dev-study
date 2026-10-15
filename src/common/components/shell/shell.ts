"use client";

import { usePathname } from "next/navigation";
import type { NavItem } from "./shell.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "Algorithms", href: "/algorithms/two-sum", prefix: "/algorithms" },
  { label: "Labs", href: "/labs/stack", prefix: "/labs" },
];

export function useShell() {
  const pathname = usePathname();

  return {
    navItems: NAV_ITEMS.map((item) => ({ ...item, active: pathname.startsWith(item.prefix) })),
  };
}
