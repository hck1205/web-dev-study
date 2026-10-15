import type { Post } from "@/features/posts";

export interface SearchResult {
  post: Post;
  /** 매칭 점수. 클수록 관련도가 높다. */
  score: number;
  /** 글이 속한 토픽 경로 라벨 (예: "Programming / Algorithms") */
  topicPath: string;
}
