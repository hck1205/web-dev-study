"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavNode } from "./nav-tree.type";
import { collectTrailIds, isPathActive } from "./nav-tree.utils";

export function useNavTree(nodes: NavNode[]) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(collectTrailIds(nodes, pathname)));

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return {
    isExpanded: (id: string) => expanded.has(id),
    isActive: (node: NavNode) => isPathActive(pathname, node.href),
    toggle,
  };
}
