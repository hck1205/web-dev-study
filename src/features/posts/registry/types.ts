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
}
