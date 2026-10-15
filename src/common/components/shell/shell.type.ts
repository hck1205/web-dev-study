import type { ReactNode } from "react";

export interface ShellProps {
  children: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
