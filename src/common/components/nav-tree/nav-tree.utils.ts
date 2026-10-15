import type { NavNode } from "./nav-tree.type";

/** 현재 경로가 노드의 href와 같거나 그 하위인지 확인한다. */
export const isPathActive = (pathname: string, href?: string) =>
  !!href && (pathname === href || pathname.startsWith(`${href}/`));

/** 노드 자신 또는 후손 중 하나라도 현재 경로와 일치하면 true */
export function isNodeInTrail(node: NavNode, pathname: string): boolean {
  return isPathActive(pathname, node.href) || (node.children ?? []).some((child) => isNodeInTrail(child, pathname));
}

/** 현재 경로로 가는 길에 있는 모든 하위 노드 id (처음부터 펼쳐둘 노드) */
export function collectTrailIds(nodes: NavNode[], pathname: string): string[] {
  return nodes.flatMap((node) =>
    node.children?.length && isNodeInTrail(node, pathname) ? [node.id, ...collectTrailIds(node.children, pathname)] : [],
  );
}
