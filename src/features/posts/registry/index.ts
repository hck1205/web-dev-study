import { POSTS } from "./posts";
import { collectTags, postHref } from "./utils";

export type { Difficulty, Post } from "./types";
export { POSTS } from "./posts";
export type { TagCount } from "./utils";
export {
  DIFFICULTY_LABELS,
  collectTags,
  formatDate,
  postHref,
  postsWithTag,
  sortByDateDesc,
  tagHref,
  tagLabel,
  tagSlug,
} from "./utils";

export const getPostBySlug = (slug: string) => POSTS.find((post) => post.slug === slug);

export const getPostByPathname = (pathname: string) => POSTS.find((post) => postHref(post.slug) === pathname);

/** page.mdx에서 `export const metadata = getPostMetadata("slug")`로 사용한다. */
export function getPostMetadata(slug: string) {
  const post = getPostBySlug(slug);
  if (!post) throw new Error(`Unknown post slug: ${slug}`);
  return { title: post.title, description: post.summary };
}

export const ALL_TAGS = collectTags(POSTS);
