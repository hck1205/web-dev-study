/** 1: 모든 것이 기대는 핵심, 2: 실무·면접, 3: 참고(사례, 자격증, 자기개발). 로드맵은 1부터 연다 */
export type Tier = 1 | 2 | 3;

/** 로드맵 안의 글 하나. 문자열이면 slug 그대로, 객체면 등급을 따로 준다 */
export type PostItem = string | { post: string; tier?: Tier };

/** 관문. 앞선 글들의 퀴즈를 묶어 풀고 80% 이상이면 통과한다 */
export interface Checkpoint {
  checkpoint: string;
  description?: string;
}

/**
 * 로드맵 노드. items 안에 글, 관문, 또 다른 로드맵이 순서대로 들어간다.
 * 순서가 곧 공부 순서다: 앞 항목을 읽어야 다음 항목이 "다음 할 일"로 열린다.
 */
export interface RoadmapNode {
  /** 부모 안에서 유일한 kebab-case id. 경로는 부모 id를 "/"로 이은 것 */
  id: string;
  label: string;
  description?: string;
  /** 이 로드맵 안 글들의 기본 등급 (글마다 덮어쓸 수 있다). 없으면 부모를 따른다 */
  tier?: Tier;
  /** 먼저 읽어 두면 좋은 로드맵의 절대 경로 (예: "foundations/http"). 다 읽기 전에는 잠긴 것으로 표시한다 */
  requires?: string[];
  items: RoadmapItem[];
}

export type RoadmapItem = PostItem | Checkpoint | RoadmapNode;

/** 평탄화한 로드맵 노드 */
export interface FlatRoadmap {
  node: RoadmapNode;
  /** 루트부터 이 노드까지의 id 목록 */
  path: string[];
  /** 루트부터 이 노드까지(자기 자신 포함) */
  trail: RoadmapNode[];
  /** 하위 로드맵까지 포함한 모든 글 slug (순서대로) */
  posts: string[];
  /** 이 로드맵 글들의 기본 등급 */
  tier: Tier;
}

/** 글 하나가 로드맵 어디에 있는지 */
export interface PostPlacement {
  slug: string;
  tier: Tier;
  /** 글이 직접 들어 있는 로드맵 */
  roadmap: FlatRoadmap;
  /** 같은 로드맵(하위 포함) 안에서의 순서 */
  index: number;
  prev?: string;
  next?: string;
}

/** 평탄화한 관문 */
export interface FlatCheckpoint {
  /** "{로드맵 경로}/cp-{번호}" */
  id: string;
  label: string;
  description?: string;
  roadmap: FlatRoadmap;
  /** 이 관문 앞에 놓인 글들 (하위 로드맵 포함) */
  posts: string[];
}
