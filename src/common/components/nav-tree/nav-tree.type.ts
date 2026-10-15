/** 임의 깊이로 중첩할 수 있는 메뉴 노드. features에서 이 형태로 변환해 넘긴다. */
export interface NavNode {
  /** 트리 전체에서 유일해야 한다 (예: 경로 "programming/algorithms") */
  id: string;
  label: string;
  href?: string;
  children?: NavNode[];
}

export interface NavTreeProps {
  nodes: NavNode[];
  /** 링크를 눌러 이동할 때 호출 (메뉴 닫기 등) */
  onNavigate?: () => void;
}
