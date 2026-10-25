export interface MapPost {
  slug: string;
  title: string;
  href: string;
  /** 직접 링크 → 키워드 백링크 → 이 글로 오는 글 순서로 모은 관련 글 */
  related: { slug: string; title: string; href: string }[];
}

export interface MapSection {
  key: string;
  /** "Database › SQL" (최상위 토픽 이름은 그룹 제목에 있으므로 뺀다) */
  label: string;
  href: string;
  depth: number;
  posts: MapPost[];
}

/** 최상위 토픽 하나. 접혀 있다가 펼치면 그 아래 섹션을 렌더링한다 */
export interface MapGroup {
  key: string;
  label: string;
  href: string;
  count: number;
  sections: MapSection[];
}
