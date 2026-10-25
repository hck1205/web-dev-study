import type { QuizQuestion } from "../types";

export const SEO_REDIRECTS_SITE_MIGRATION: QuizQuestion[] = [
  {
    id: "seo-redirects-site-migration-1",
    post: "seo-redirects-site-migration",
    question: "글 주소를 영구히 바꾸면서 Next.js 미들웨어에 NextResponse.redirect(url)만 썼다. 검색 결과에는 어떤 일이 생기기 쉬운가?",
    choices: [
      "기본이 308이라 아무 문제 없다",
      "기본이 307이라 임시 이동으로 읽혀 예전 주소가 대표로 남을 수 있다",
      "미들웨어 리다이렉트는 검색 엔진이 따라가지 않아 새 주소가 색인되지 않는다",
      "기본이 303이라 검색 엔진이 POST로 다시 요청한다",
    ],
    answer: 1,
    explanation:
      "NextResponse.redirect는 상태를 주지 않으면 307을 낸다. 307은 임시 이동이라 검색 엔진은 원래 주소를 대표로 유지하는 쪽으로 본다. 영구 이동이면 308이나 301을 명시하고 curl -sI로 코드를 확인한다.",
    anchor: "서버에-리다이렉트를-거는-자리",
  },
  {
    id: "seo-redirects-site-migration-2",
    post: "seo-redirects-site-migration",
    question: "사이트를 옮기면서 예전 글 주소를 모두 새 사이트 홈으로 301 리다이렉트했다. 왜 검색 유입이 줄어드나?",
    choices: [
      "301은 PageRank를 15% 잃기 때문이다",
      "검색 엔진은 홈으로 가는 리다이렉트를 따라가지 않기 때문이다",
      "내용이 다른 목적지라 소프트 404로 보고 예전 주소의 신호를 넘기지 않기 때문이다",
      "홈의 canonical이 예전 도메인을 가리키게 되기 때문이다",
    ],
    answer: 2,
    explanation:
      "리다이렉트 목적지는 같은 내용이 있는 곳이어야 한다. 글이 홈으로 가면 구글은 소프트 404로 보고 링크와 순위를 넘기지 않는다. 301 자체로 PageRank가 준다는 말은 구글이 2016년에 부정했다.",
    anchor: "모든-구-주소를-홈으로-보내면-생기는-일",
  },
  {
    id: "seo-redirects-site-migration-3",
    post: "seo-redirects-site-migration",
    question: "규칙표가 /x → /y, /y → /z, /z → /y 일 때 /x로 들어온 요청은 어떻게 되나?",
    choices: [
      "/y와 /z 사이를 오가다 리다이렉트 상한에 걸린다",
      "/z에서 멈추고 200을 받는다",
      "/x는 루프에 속하지 않으니 /y에서 끝난다",
      "브라우저가 루프를 감지하고 /x를 다시 보여 준다",
    ],
    answer: 0,
    explanation:
      "/x 자체는 루프의 일부가 아니지만 /y로 들어가는 순간 /y와 /z가 서로를 가리키는 고리에 빠진다. 결국 브라우저는 ERR_TOO_MANY_REDIRECTS, curl은 종료 코드 47로 끝난다. 체인을 접을 때 지나온 주소를 집합에 넣어 두면 이런 출발점도 찾아낼 수 있다.",
    anchor: "리다이렉트-체인을-한-번에-접기",
  },
  {
    id: "seo-redirects-site-migration-4",
    post: "seo-redirects-site-migration",
    question: "Search Console의 주소 변경 도구를 써야 하는 이전은?",
    choices: [
      "http://example.com을 https://example.com으로 옮길 때",
      "같은 도메인에서 /blog/를 /posts/로 바꿀 때",
      "old.example을 new.example로 옮길 때",
      "모든 이전에서 리다이렉트 대신 쓴다",
    ],
    answer: 2,
    explanation:
      "주소 변경 도구는 도메인이나 서브도메인처럼 호스트가 바뀔 때 쓴다. 두 속성 소유 확인과 예전 사이트의 301이 있어야 신청된다. 프로토콜이나 경로만 바뀌는 이전은 리다이렉트로 충분하고, 도구를 써도 리다이렉트는 대신할 수 없다.",
    anchor: "도메인과-프로토콜을-바꿀-때",
  },
  {
    id: "seo-redirects-site-migration-5",
    post: "seo-redirects-site-migration",
    question: "몇 시간 점검하는 동안 모든 페이지에 '점검 중' 안내를 낸다. 검색 엔진에 가장 안전한 응답은?",
    choices: [
      "200과 점검 안내 HTML",
      "503과 Retry-After 헤더",
      "robots.txt를 Disallow: /로 바꾸기",
      "모든 주소를 /maintenance로 302 리다이렉트",
    ],
    answer: 1,
    explanation:
      "503은 일시적으로 처리할 수 없다는 뜻이라 검색 엔진이 색인을 유지하고 나중에 다시 온다. 200으로 내면 모든 페이지가 같은 내용으로 바뀐 것처럼 보이고, robots.txt로 막으면 크롤링이 끊기고 되돌리기를 잊기 쉽다. 다만 503도 며칠씩 이어지면 색인에서 빠질 수 있다.",
    anchor: "점검-중에는-503과-retry-after",
  },
  {
    id: "seo-redirects-site-migration-6",
    post: "seo-redirects-site-migration",
    question: "구글 문서 기준으로 지운 페이지에 404 대신 410을 줄 때 기대할 수 있는 것은?",
    choices: [
      "검색 결과에서 크게 다르지 않고, 일부러 지웠다는 의도를 로그와 모니터링에 남길 수 있다",
      "410을 받은 주소는 즉시 색인에서 빠지고 404는 영원히 남는다",
      "410은 순위 신호를 홈으로 넘겨 준다",
      "410은 429처럼 크롤링 속도를 줄인다",
    ],
    answer: 0,
    explanation:
      "구글은 429를 뺀 4xx를 모두 내용이 없다는 신호로 같게 다룬다. 410이 조금 빨리 빠진다는 말이 있지만 큰 차이는 아니다. 410의 쓸모는 깨진 링크(404)와 의도한 삭제를 구분해 볼 수 있다는 데 있다.",
    anchor: "지운-페이지는-404인가-410인가",
  },
];
