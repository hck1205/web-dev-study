import type { Post } from "./types";

// 새 글을 추가하는 방법: src/app/posts/{slug}/page.mdx 를 만들고 여기에 항목을 추가한다.
export const POSTS: Post[] = [
  {
    slug: "pythagorean-theorem",
    title: "피타고라스 정리, 삼각형 네 개를 옮겨 보면",
    summary: "거리 계산 코드마다 들어 있는 a² + b² = c². 삼각형 네 개의 자리만 바꾸는 증명과 피타고라스 수, 역, 그리고 n차원 거리 공식까지 이어 봤다.",
    topic: "self-development/math",
    tags: ["Math", "Geometry", "Algorithm"],
    date: "2026-10-15",
    keywords: ["피타고라스 정리", "유클리드 거리", "피타고라스 수"],
  },
  {
    slug: "what-happens-google-com",
    title: "주소창에 google.com을 치면 일어나는 일",
    summary: "엔터를 누른 순간부터 화면이 뜰 때까지. URL 해석과 HSTS, DNS 조회, TCP·TLS 핸드셰이크, HTTP/2 요청과 리다이렉트, 렌더링 파이프라인을 순서대로 따라갔다.",
    topic: "programming/network",
    tags: ["DNS", "TCP", "TLS", "HTTP", "Browser"],
    date: "2026-10-15",
    keywords: ["DNS", "HTTPS", "TLS 핸드셰이크", "3-way handshake", "HSTS", "렌더링 파이프라인", "HTTP/2"],
  },
  {
    slug: "cookie-session-login",
    title: "쿠키와 세션으로 로그인 상태 유지하기",
    summary: "HTTP는 방금 누가 왔는지 기억하지 못한다. 서버가 세션을 보관하고 쿠키로 번호표를 돌려주는 흐름과 쿠키 옵션, CSRF까지 정리했다.",
    topic: "programming/backend/auth",
    tags: ["Authentication", "Cookie", "Session", "Security"],
    date: "2026-10-15",
    keywords: ["쿠키 세션", "세션 쿠키", "세션 ID", "Set-Cookie", "CSRF"],
  },
  {
    slug: "token-login",
    title: "토큰으로 로그인하기: JWT와 리프레시 토큰",
    summary: "서버가 아무것도 기억하지 않고 서명된 토큰만 확인하는 방식. JWT를 뜯어보고, 변조가 막히는 이유와 리프레시 토큰, 쿠키 세션과의 차이를 따라가 봤다.",
    topic: "programming/backend/auth",
    tags: ["Authentication", "JWT", "Token", "Security"],
    date: "2026-10-15",
    keywords: ["JWT", "리프레시 토큰", "액세스 토큰"],
  },
  {
    slug: "oauth",
    title: "OAuth 2.0, 비밀번호 대신 열쇠를 빌려주는 규칙",
    summary: "'구글로 계속하기' 버튼 뒤에서 오가는 요청을 한 단계씩 따라가 봤다. 인가 코드 흐름과 PKCE까지.",
    topic: "programming/backend/auth",
    tags: ["OAuth", "Security", "HTTP", "Authorization"],
    date: "2026-10-15",
    keywords: ["OAuth", "PKCE", "인가 코드"],
  },
  {
    slug: "vector-db",
    title: "벡터 DB, 뜻이 가까운 것을 찾는 데이터베이스",
    summary: "글자가 아니라 뜻으로 검색한다는 게 무슨 뜻일까. 임베딩, 코사인 유사도, HNSW 그래프 탐색, RAG까지 그림으로 따라가 봤다.",
    topic: "programming/database",
    tags: ["VectorDB", "Embedding", "AI", "Search"],
    date: "2026-10-15",
    keywords: ["벡터 DB", "임베딩", "HNSW", "RAG"],
  },
];
