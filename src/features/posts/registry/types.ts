export type Difficulty = "easy" | "medium" | "hard";

export interface Post {
  /** URL 슬러그. 글 경로는 /posts/{slug} */
  slug: string;
  title: string;
  summary: string;
  /** 토픽 경로 (예: "programming/algorithms"). features/topics/registry/topics.ts의 id를 "/"로 이어 쓴다. */
  topic: string;
  tags: string[];
  /** YYYY-MM-DD */
  date: string;
  /** 알고리즘 문제 글에만 사용 */
  difficulty?: Difficulty;
  /**
   * 다른 글 본문에 이 단어가 나오면 이 글로 자동 링크된다(백링크, 새 창).
   * 글 하나당 처음 한 번만 걸린다. 너무 흔한 단어는 피하고, 이 글을 대표하는 말만 적는다.
   */
  keywords?: string[];
  /**
   * 채용 공고를 분석해 쓴 글이면 그 회사 이름(소문자, 예: "coupang").
   * 글에 회사 라벨이 붙고, 같은 이름의 해시태그가 자동으로 추가되어 /tags/{회사}에서 모아 볼 수 있다.
   */
  companies?: string[];
}
