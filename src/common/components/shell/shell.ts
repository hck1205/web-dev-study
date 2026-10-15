import type { NavItem } from "./shell.type";

export const NAV_ITEMS: NavItem[] = [
  { label: "Algorithms", href: "/algorithms/two-sum" },
  { label: "Labs", href: "/labs/stack" },
];

export function useShell() {
  return { navItems: NAV_ITEMS };
}
