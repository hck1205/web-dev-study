export interface TopicLinkData {
  key: string;
  label: string;
  description?: string;
  href: string;
  /** 하위 토픽의 글까지 포함한 글 수 (+ 어휘 사전처럼 별도 페이지가 있는 토픽은 그 항목 수) */
  count: number;
}

export interface TopicGroupData extends TopicLinkData {
  children: TopicLinkData[];
}
