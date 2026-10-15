import type { Post } from "../../registry";

export interface PostItemListProps {
  posts: Post[];
  /** 글이 없을 때 보여줄 문구 */
  emptyMessage?: string;
}
