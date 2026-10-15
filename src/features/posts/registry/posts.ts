import type { Post } from "./types";

// 새 글을 추가하는 방법: src/app/posts/{slug}/page.mdx 를 만들고 여기에 항목을 추가한다.
export const POSTS: Post[] = [
  {
    slug: "vector-db",
    title: "벡터 DB, 뜻이 가까운 것을 찾는 데이터베이스",
    summary: "글자가 아니라 뜻으로 검색한다는 게 무슨 뜻일까. 임베딩, 코사인 유사도, HNSW 그래프 탐색, RAG까지 그림으로 따라가 봤다.",
    topic: "programming/database",
    tags: ["VectorDB", "Embedding", "AI", "Search"],
    date: "2026-10-15",
  },
  {
    slug: "oauth",
    title: "OAuth 2.0, 비밀번호 대신 열쇠를 빌려주는 규칙",
    summary: "'구글로 계속하기' 버튼 뒤에서 오가는 요청을 한 단계씩 따라가 봤다. 인가 코드 흐름과 PKCE까지.",
    topic: "programming/network",
    tags: ["OAuth", "Security", "HTTP", "Authorization"],
    date: "2026-10-15",
  },
  {
    slug: "two-sum",
    title: "Two Sum",
    summary: "필요한 짝을 계산하고, 그 짝을 이미 봤는지 해시맵으로 확인한다. 한 번의 순회로 끝나는 이유를 따라가 본다.",
    topic: "programming/algorithms",
    tags: ["Array", "Hash Table"],
    date: "2026-10-15",
    difficulty: "easy",
  },
  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    summary: "가장 최근에 연 괄호부터 닫아야 한다. 스택에 괄호가 쌓였다 빠지는 모습으로 판별 과정을 본다.",
    topic: "programming/algorithms",
    tags: ["Stack", "String"],
    date: "2026-10-14",
    difficulty: "easy",
  },
  {
    slug: "http-caching",
    title: "HTTP 캐시 기본기",
    summary: "배포했는데 화면이 안 바뀌는 이유. max-age, ETag, 304가 오가는 과정과 정적 파일 캐싱 설정을 정리했다.",
    topic: "programming/network",
    tags: ["HTTP", "Cache"],
    date: "2026-10-13",
  },
];
