export interface PostRelations {
  /** 본문에 직접 쓴 /posts/{slug} 링크 */
  links: string[];
  /** 다른 글의 키워드가 본문에 나와 자동 백링크가 걸리는 글 */
  mentions: string[];
}
