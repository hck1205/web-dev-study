export interface TopicLinkData {
  key: string;
  label: string;
  description?: string;
  href: string;
  /** 하위 토픽의 글까지 포함한 글 수 */
  count: number;
}

export interface TopicGroupData extends TopicLinkData {
  children: TopicLinkData[];
}
