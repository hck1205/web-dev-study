export interface VectorPoint {
  id: string;
  label: string;
  /** viewBox 좌표 (기본 400 × 260) */
  x: number;
  y: number;
  /** groups의 id. 색이 정해진다 */
  group?: string;
  /** 이름표를 점의 어느 쪽에 둘지. 기본은 오른쪽(오른쪽 끝 근처면 자동으로 왼쪽) */
  labelAt?: "right" | "left";
}

/** 범주(군집). 산점도는 색 구분 한계 때문에 3개까지만 쓴다. */
export interface VectorGroup {
  id: string;
  label: string;
}

export interface VectorQuery {
  label: string;
  x: number;
  y: number;
  /** 이름표를 점의 어느 쪽에 둘지. 다른 이름표와 겹칠 때 바꾼다 (기본 오른쪽) */
  labelAt?: "right" | "left";
}

export interface VectorStep {
  /** 이 단계에서 일어나는 일 (설명 패널) */
  caption: string;
  /** 질문(검색어) 점을 보여준다 */
  query?: boolean;
  /** 질문에서 이 점들까지 선을 긋고 강조한다 (가장 가까운 이웃) */
  neighbors?: string[];
  /** 질문을 중심으로 이 반지름의 원을 그린다 (검색 범위) */
  radius?: number;
  /** 그래프 연결선(edges)을 보여준다 */
  showEdges?: boolean;
  /** 그래프를 따라 이동하는 탐색 경로 (점 id 순서) */
  path?: string[];
  /** 원점에서 이 점들(과 질문)까지 화살표를 그린다 (벡터 = 방향과 길이) */
  vectors?: string[];
}

export interface VectorSpaceProps {
  points: VectorPoint[];
  groups?: VectorGroup[];
  query?: VectorQuery;
  /** 점 id 쌍. 근사 최근접 탐색용 그래프 */
  edges?: [string, string][];
  steps: VectorStep[];
  caption?: string;
  width?: number;
  height?: number;
}
