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
