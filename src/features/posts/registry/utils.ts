import type { Difficulty, Post } from "./types";

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export const postHref = (slug: string) => `/posts/${slug}`;

export const sortByDateDesc = (posts: Post[]) => [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(date),
  );
}

// ---- 해시태그 ----

/** 태그 표기: 공백을 없앤 해시태그 형태. "Hash Table" → "HashTable" */
export const tagLabel = (tag: string) => tag.replace(/\s+/g, "");

/** URL 슬러그: 소문자 + 공백과 슬래시는 하이픈. "Hash Table" → "hash-table", "TCP/IP" → "tcp-ip" */
export const tagSlug = (tag: string) => tag.trim().toLowerCase().replace(/[\s/]+/g, "-");

export const tagHref = (tag: string) => `/tags/${tagSlug(tag)}`;

export interface TagCount {
  tag: string;
  slug: string;
  count: number;
}

/** 글 전체에서 태그를 모아 사용 횟수 내림차순(같으면 ABC 순)으로 정렬한다. 대소문자만 다른 태그는 하나로 합친다. */
export function collectTags(posts: Post[]): TagCount[] {
  const map = new Map<string, TagCount>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag);
      const current = map.get(slug);
      if (current) current.count += 1;
      else map.set(slug, { tag, slug, count: 1 });
    }
  }
  const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
  return [...map.values()].sort((a, b) => b.count - a.count || collator.compare(a.tag, b.tag));
}

export const postsWithTag = (posts: Post[], slug: string) => posts.filter((post) => post.tags.some((tag) => tagSlug(tag) === slug));

// ---- 회사 라벨 ----

/** 회사 이름을 태그 맨 앞에 붙인다(이미 있으면 그대로). 회사 라벨이 붙은 글을 해시태그·검색으로 모아 볼 수 있게 한다. */
export function withCompanyTags(post: Post): Post {
  if (!post.companies?.length) return post;
  const companySlugs = new Set(post.companies.map(tagSlug));
  return { ...post, tags: [...post.companies, ...post.tags.filter((tag) => !companySlugs.has(tagSlug(tag)))] };
}

/** 회사 라벨별 글 수. 많은 순(같으면 ABC 순). */
export const collectCompanies = (posts: Post[]): TagCount[] =>
  collectTags(posts.map((post) => ({ ...post, tags: post.companies ?? [] })));
