import type { Post } from "./types";

// 새 글을 추가하는 방법: src/app/posts/{slug}/page.mdx 를 만들고 여기에 항목을 추가한다.
export const POSTS: Post[] = [
  {
    slug: "oauth",
    title: "OAuth 2.0: 비밀번호 없이 열쇠만 빌려주는 방법",
    summary: "'구글로 계속하기'를 누르면 무슨 일이 일어날까? 발렛 키 비유와 단계별 그림으로 OAuth와 PKCE를 쉽게 이해한다.",
    topic: "programming/network",
    tags: ["OAuth", "Security", "HTTP", "Authentication"],
    date: "2026-10-15",
  },
  {
    slug: "two-sum",
    title: "Two Sum",
    summary: "두 숫자를 더해 목표가 되는 짝 찾기. '짝이 이미 지나갔나?'를 공책(해시맵)으로 바로 확인하는 방법을 그림으로 따라간다.",
    topic: "programming/algorithms",
    tags: ["Array", "Hash Table"],
    date: "2026-10-15",
    difficulty: "easy",
  },
  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    summary: "괄호가 올바르게 짝지어졌는지 접시 쌓기(스택)로 확인한다. 한 글자씩 읽으며 쌓이고 빠지는 모습을 그림으로 본다.",
    topic: "programming/algorithms",
    tags: ["Stack", "String"],
    date: "2026-10-14",
    difficulty: "easy",
  },
  {
    slug: "http-caching",
    title: "HTTP 캐시 기본기",
    summary: "브라우저의 냉장고, HTTP 캐시. Cache-Control과 ETag, 304 응답이 오가는 모습을 단계별 그림으로 이해한다.",
    topic: "programming/network",
    tags: ["HTTP", "Cache"],
    date: "2026-10-13",
  },
];
