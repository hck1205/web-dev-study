export type CategoryId = "web" | "network" | "infra" | "algorithms" | "cs";

export type Difficulty = "easy" | "medium" | "hard";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export interface Post {
  /** URL 슬러그. 글 경로는 /posts/{slug} */
  slug: string;
  title: string;
  summary: string;
  category: CategoryId;
  tags: string[];
  /** YYYY-MM-DD */
  date: string;
  /** 알고리즘 문제 글에만 사용 */
  difficulty?: Difficulty;
}
