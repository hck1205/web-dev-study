/** 노드 안에 그리는 작은 그림 */
export type TopologyIcon =
  | "client"
  | "server"
  | "router"
  | "switch"
  | "lb"
  | "firewall"
  | "internet"
  | "db"
  | "container"
  | "dns"
  | "gateway"
  | "lock";

/** 영역 색. public은 series3(초록), private는 series1(파랑), edge는 series2(주황), 그 외는 무채색 */
export type ZoneTone = "neutral" | "public" | "private" | "edge";

export interface TopologyZone {
  id: string;
  /** 왼쪽 위에 붙는 이름 (예: "VPC 10.0.0.0/16") */
  label: string;
  /** viewBox 좌표계에서 왼쪽 위 모서리와 크기 */
  x: number;
  y: number;
  w: number;
  h: number;
  tone?: ZoneTone;
}

export interface TopologyNode {
  id: string;
  /** 짧게 (영문 약 12자) */
  label: string;
  /** 라벨 아래 작은 글씨 (예: IP 주소) */
  sub?: string;
  /** viewBox 좌표계에서 노드 중심 */
  x: number;
  y: number;
  icon?: TopologyIcon;
  w?: number;
}

export interface TopologyLink {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}

export interface TopologyStep {
  /** 패킷이 지나는 노드 id 순서. 하나만 주면 그 노드만 강조한다 */
  path: string[];
  /** 패킷에 붙는 짧은 이름 (예: "SYN", "GET /") */
  packet?: string;
  /** 마지막 노드에서 막힌다 (방화벽 차단, 경로 없음 등) */
  blocked?: boolean;
  /** 경로 밖에서 함께 강조할 노드·영역 id */
  highlight?: string[];
  title: string;
  detail: string;
  /** 실제 값 예시 (코드 블록으로 표시) */
  payload?: string;
}

export interface NetworkTopologyProps {
  zones?: TopologyZone[];
  nodes: TopologyNode[];
  links: TopologyLink[];
  /** 없으면 정적인 그림에 연결선을 따라 점이 흐른다 */
  steps?: TopologyStep[];
  width?: number;
  height?: number;
  caption?: string;
}

export interface Point {
  x: number;
  y: number;
}
