import type { Category, CategoryId, Difficulty, Post } from "./types";

export const CATEGORIES: Category[] = [
  { id: "web", label: "Web", description: "브라우저, 렌더링, React · Next.js" },
  { id: "network", label: "Network", description: "HTTP, TCP/IP, DNS, 캐시, 보안" },
  { id: "infra", label: "Infra", description: "Docker, CI/CD, 배포, 관측성" },
  { id: "algorithms", label: "Algorithms", description: "문제 풀이와 해설, 자료구조" },
  { id: "cs", label: "CS", description: "OS, 데이터베이스, 시스템 디자인" },
];

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export const getCategory = (id: CategoryId) => CATEGORIES.find((category) => category.id === id);

export const isCategoryId = (value: string | null): value is CategoryId =>
  CATEGORIES.some((category) => category.id === value);

export const postHref = (slug: string) => `/posts/${slug}`;

export const sortByDateDesc = (posts: Post[]) => [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const filterByCategory = (posts: Post[], category?: CategoryId) =>
  category ? posts.filter((post) => post.category === category) : posts;

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(date),
  );
}
