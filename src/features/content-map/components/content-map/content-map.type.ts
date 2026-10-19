export interface MapPost {
  slug: string;
  title: string;
  href: string;
  /** 직접 링크 → 키워드 백링크 → 이 글로 오는 글 순서로 모은 관련 글 */
  related: { slug: string; title: string; href: string }[];
}

export interface MapSection {
  key: string;
  /** "Programming › Database › SQL" */
  label: string;
  href: string;
  depth: number;
  posts: MapPost[];
}
