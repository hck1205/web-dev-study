import type { Post } from "./types";

// 새 글을 추가하는 방법: src/app/posts/{slug}/page.mdx 를 만들고 여기에 항목을 추가한다.
export const POSTS: Post[] = [
  {
    slug: "two-sum",
    title: "Two Sum",
    summary: "합이 target이 되는 두 원소의 인덱스를 찾는다. 해시맵으로 O(n²)을 O(n)으로 줄이는 기본 패턴.",
    topic: "programming/algorithms",
    tags: ["Array", "Hash Table"],
    date: "2026-10-15",
    difficulty: "easy",
  },
  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    summary: "괄호 문자열이 올바른지 판별한다. 스택이 왜 \"가장 최근에 열린 것부터 닫는\" 문제에 맞는지 살펴본다.",
    topic: "programming/algorithms",
    tags: ["Stack", "String"],
    date: "2026-10-14",
    difficulty: "easy",
  },
  {
    slug: "http-caching",
    title: "HTTP 캐시 기본기",
    summary: "Cache-Control, ETag, 304 응답으로 브라우저 캐시가 동작하는 방식과 정적 자산 캐싱 전략을 정리한다.",
    topic: "programming/network",
    tags: ["HTTP", "Cache"],
    date: "2026-10-13",
  },
];
