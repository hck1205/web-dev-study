"use client";

import { ChevronDownIcon } from "@/common/design-system";
import { useNavTree } from "./nav-tree";
import { List, NodeLabel, NodeLink, Row, Toggle } from "./nav-tree.styled";
import type { NavNode, NavTreeProps } from "./nav-tree.type";

type TreeApi = ReturnType<typeof useNavTree>;

interface ItemsProps extends TreeApi {
  nodes: NavNode[];
  nested?: boolean;
  onNavigate?: () => void;
}

// 재귀 렌더링: children이 있으면 같은 컴포넌트로 한 단계 더 그린다 (깊이 제한 없음)
function Items({ nodes, nested, onNavigate, ...tree }: ItemsProps) {
  return (
    <List nested={nested}>
      {nodes.map((node) => {
        const hasChildren = !!node.children?.length;
        const expanded = tree.isExpanded(node.id);

        return (
          <li key={node.id}>
            <Row>
              {node.href ? (
                <NodeLink href={node.href} active={tree.isActive(node)} onClick={onNavigate}>
                  {node.label}
                </NodeLink>
              ) : (
                <NodeLabel>{node.label}</NodeLabel>
              )}
              {hasChildren && (
                <Toggle
                  type="button"
                  expanded={expanded}
                  aria-expanded={expanded}
                  aria-label={`${node.label} 하위 메뉴 ${expanded ? "접기" : "펼치기"}`}
                  onClick={() => tree.toggle(node.id)}
                >
                  <ChevronDownIcon size={18} />
                </Toggle>
              )}
            </Row>
            {hasChildren && expanded && <Items nodes={node.children!} nested onNavigate={onNavigate} {...tree} />}
          </li>
        );
      })}
    </List>
  );
}

export function NavTree({ nodes, onNavigate }: NavTreeProps) {
  const tree = useNavTree(nodes);

  return <Items nodes={nodes} onNavigate={onNavigate} {...tree} />;
}
