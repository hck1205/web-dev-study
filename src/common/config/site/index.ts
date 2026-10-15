/** 사이트 이름·소개. 헤더·푸터·홈·<title>이 모두 여기를 쓴다. React에 의존하지 않아 서버(layout.tsx)에서도 import할 수 있다. */
export const SITE = {
  name: "Matt's Blog",
  description: "개발하며 공부한 것들을 기록하는 블로그",
} as const;
