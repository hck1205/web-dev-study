/** 토픽 트리의 한 노드. children에 같은 구조를 중첩해 임의 깊이의 하위 메뉴를 만들 수 있다. */
export interface Topic {
  /** URL 세그먼트. kebab-case (예: "server-infra") */
  id: string;
  label: string;
  description?: string;
  /** 글 목록 대신 별도 페이지로 가는 토픽(예: 어휘 사전)이면 그 주소. 메뉴와 토픽 링크가 이곳으로 간다 */
  href?: string;
  children?: Topic[];
}

/** 트리를 평탄화한 항목. path는 루트부터 이 노드까지의 id 목록. */
export interface FlatTopic {
  topic: Topic;
  path: string[];
  /** 루트부터 이 노드까지(자기 자신 포함)의 토픽 목록. 브레드크럼에 쓴다. */
  trail: Topic[];
}
