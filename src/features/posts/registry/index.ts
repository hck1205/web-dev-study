import { POSTS } from "./posts";
import { postHref } from "./utils";

export type { Category, CategoryId, Difficulty, Post } from "./types";
export { POSTS } from "./posts";
export {
  CATEGORIES,
  DIFFICULTY_LABELS,
  filterByCategory,
  formatDate,
  getCategory,
  isCategoryId,
  postHref,
  sortByDateDesc,
} from "./utils";

export const getPostBySlug = (slug: string) => POSTS.find((post) => post.slug === slug);

export const getPostByPathname = (pathname: string) => POSTS.find((post) => postHref(post.slug) === pathname);

/** page.mdx에서 `export const metadata = getPostMetadata("slug")`로 사용한다. */
export function getPostMetadata(slug: string) {
  const post = getPostBySlug(slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return { title: post.title, description: post.summary };
}
