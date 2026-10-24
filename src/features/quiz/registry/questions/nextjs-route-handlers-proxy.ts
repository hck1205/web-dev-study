import type { QuizQuestion } from "../types";

export const NEXTJS_ROUTE_HANDLERS_PROXY: QuizQuestion[] = [
  {
    id: "nextjs-route-handlers-proxy-1",
    post: "nextjs-route-handlers-proxy",
    question: "세션이 없으면 /login으로 보내는 proxy를 배포했더니 리다이렉트가 끝없이 반복된다. 가장 그럴듯한 원인은?",
    choices: [
      "NextResponse.redirect가 308을 돌려줘서",
      "matcher에 /login이 들어 있어 로그인 페이지 요청도 다시 /login으로 보내서",
      "proxy가 Edge 런타임이 아니라서",
      "next.config의 redirects가 proxy보다 늦게 실행되어서",
    ],
    answer: 1,
    explanation:
      "리다이렉트 목적지도 matcher에 걸리면 그 요청에서도 세션이 없으니 또 /login으로 보낸다. matcher를 제외 목록으로 바꿔 login을 빼거나 코드에서 목적지면 통과시킨다. next.config의 redirects는 오히려 proxy보다 먼저 실행된다.",
    anchor: "무한-리다이렉트를-고치는-matcher",
  },
  {
    id: "nextjs-route-handlers-proxy-2",
    post: "nextjs-route-handlers-proxy",
    question: "matcher가 \"/((?!api|_next/static|_next/image|favicon.ico|login).*)\"일 때 proxy가 실행되지 않는 경로는?",
    choices: ["/dashboard/api", "/blog/api", "/apiary", "/"],
    answer: 2,
    explanation:
      "부정 전방 탐색은 그 단어로 시작하는지만 보고 단어 경계를 보지 않는다. 그래서 /apiary도 api로 시작해 제외된다. 중간에 api가 있는 /dashboard/api와 루트 /는 proxy가 돈다. 실제 서버에서도 같은 결과였다.",
    anchor: "무한-리다이렉트를-고치는-matcher",
  },
  {
    id: "nextjs-route-handlers-proxy-3",
    post: "nextjs-route-handlers-proxy",
    question: "proxy가 세션을 x-user-id 요청 헤더로 넘기고, /api/me는 그 헤더를 믿는다. matcher가 api를 제외한다면?",
    choices: [
      "클라이언트가 x-user-id를 직접 넣어 보내면 그 값을 그대로 믿는다",
      "Next가 x-로 시작하는 헤더를 자동으로 지워서 안전하다",
      "proxy가 돌지 않으니 헤더가 항상 비어 있다",
      "Route Handler는 요청 헤더를 읽을 수 없다",
    ],
    answer: 0,
    explanation:
      "proxy가 돌지 않는 경로에서는 클라이언트가 보낸 헤더가 그대로 들어온다. 실험에서 x-user-id: admin을 넣자 그대로 돌려줬다. proxy가 붙인 헤더를 믿는 대신 데이터를 읽는 자리에서 세션을 다시 확인한다.",
    anchor: "proxy가-할-수-있는-일",
  },
  {
    id: "nextjs-route-handlers-proxy-4",
    post: "nextjs-route-handlers-proxy",
    question: "Next 16에서 Edge 런타임으로 돌던 middleware.ts를 proxy.ts로 이름만 바꾸면 무엇이 문제인가?",
    choices: [
      "proxy는 matcher를 지원하지 않는다",
      "proxy는 쿠키를 읽을 수 없다",
      "proxy는 Node.js 런타임 고정이라 Edge에 기대던 동작이 바뀔 수 있다",
      "아무 문제 없다. 런타임까지 그대로 옮겨진다",
    ],
    answer: 2,
    explanation:
      "proxy는 Node.js 런타임에서만 돌고 runtime 설정을 줄 수 없다. Edge 런타임이 꼭 필요하면 당분간 middleware.ts를 유지하라는 것이 업그레이드 문서의 안내다. 두 파일을 같이 두면 빌드가 실패한다.",
    anchor: "middleware가-proxy로-이름을-바꾼-이유",
  },
  {
    id: "nextjs-route-handlers-proxy-5",
    post: "nextjs-route-handlers-proxy",
    question: "CVE-2025-29927이 미들웨어 인증을 무력화한 방식은?",
    choices: [
      "matcher 정규식에 백트래킹 폭탄을 넣었다",
      "내부용 x-middleware-subrequest 헤더를 외부에서 보내 미들웨어를 건너뛰게 했다",
      "서버 액션 ID를 추측해 직접 호출했다",
      "쿠키 서명을 위조했다",
    ],
    answer: 1,
    explanation:
      "Next는 미들웨어 재귀를 막으려고 x-middleware-subrequest 헤더를 썼는데, 외부 요청이 이 헤더를 보내도 미들웨어를 건너뛰었다. 고쳐진 뒤에도 교훈은 같다. 인증은 문지기 하나에 맡기지 말고 데이터를 읽고 쓰는 자리에서 다시 확인한다.",
    anchor: "proxy만-믿으면-안-되는-이유",
  },
  {
    id: "nextjs-route-handlers-proxy-6",
    post: "nextjs-route-handlers-proxy",
    question: "route.js에 GET과 POST만 export했다. PUT 요청이 오면?",
    choices: [
      "404 Not Found",
      "500 Internal Server Error",
      "GET 핸들러가 대신 실행된다",
      "405 Method Not Allowed",
    ],
    answer: 3,
    explanation:
      "export하지 않은 HTTP 메서드는 Next가 405로 답한다. 실험에서도 PUT은 405였다. 지원하는 메서드는 GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS다.",
    anchor: "route-handler로-api-만들기",
  },
  {
    id: "nextjs-route-handlers-proxy-7",
    post: "nextjs-route-handlers-proxy",
    question: "옛 주소 /old-blog/:slug를 /blog/:slug로 영구히 옮기려 한다. 어디에 두는 게 가장 알맞나?",
    choices: [
      "next.config의 redirects. 요청 내용을 볼 필요 없는 고정 규칙이라 proxy보다 먼저, 싸게 처리된다",
      "proxy.js. 모든 리다이렉트는 proxy에서 해야 한다",
      "Route Handler에서 302를 돌려준다",
      "페이지 컴포넌트에서 useEffect로 router.push한다",
    ],
    answer: 0,
    explanation:
      "요청을 보지 않고 정할 수 있는 규칙은 next.config에 둔다. proxy보다 먼저 처리되고, permanent: true면 메서드를 지키는 308이 나간다. 쿠키나 헤더를 봐야 정할 수 있는 이동만 proxy로 간다.",
    anchor: "nextconfig의-규칙과-proxy-중-무엇을-쓰나",
  },
];
