import type { QuizQuestion } from "../types";

export const RENDERING_SSR: QuizQuestion[] = [
  {
    id: "rendering-ssr-1",
    post: "rendering-ssr",
    question: "리뷰 컴포넌트가 Suspense 안에서 아직 끝나지 않은 Promise를 기다릴 때 renderToString은 어떻게 하나?",
    choices: [
      "Promise가 끝날 때까지 기다렸다가 완성된 HTML을 돌려준다",
      "예외를 던진다",
      "경계 안을 fallback으로 채우고 브라우저에서 다시 그리라는 표시를 남긴다",
      "경계 안을 빈 문자열로 둔다",
    ],
    answer: 2,
    explanation:
      "renderToString은 동기라서 기다리지 않는다. fallback과 <!--$!--> 표시를 남기고, 브라우저가 그 경계를 처음부터 렌더링한다. 그래서 리뷰는 HTML에 들어가지 않고 봇에게도 보이지 않는다.",
    anchor: "rendertostring과-rendertopipeablestream",
  },
  {
    id: "rendering-ssr-2",
    post: "rendering-ssr",
    question: "renderToPipeableStream의 onShellReady에서 pipe를 시작한 뒤, Suspense 경계 안에서 상품이 없다는 걸 알았다. 404로 응답할 수 있나?",
    choices: [
      "res.statusCode를 바꾸면 된다",
      "없다. 상태 코드와 헤더는 첫 조각과 함께 이미 나갔다",
      "onAllReady에서 다시 쓰면 된다",
      "React가 자동으로 404로 바꿔 준다",
    ],
    answer: 1,
    explanation:
      "스트림을 보내기 시작한 순간 상태 코드는 확정된다. 404나 리다이렉트를 판단할 데이터는 셸을 보내기 전, Suspense 경계 바깥에서 먼저 확인해야 한다.",
    anchor: "상태-코드는-렌더링하기-전에-정한다",
  },
  {
    id: "rendering-ssr-3",
    post: "rendering-ssr",
    question: "무거운 페이지 10개를 동시에 요청하자 1ms짜리 /fast 응답이 163ms 걸렸다. 이유는?",
    choices: [
      "renderToString이 동기라서 렌더링하는 동안 이벤트 루프가 다른 요청을 집어 들지 못해서",
      "TCP 연결 수가 제한되어서",
      "/fast가 같은 데이터를 기다려서",
      "Node.js가 요청마다 스레드를 새로 만들어서",
    ],
    answer: 0,
    explanation:
      "Node.js 프로세스는 한 번에 하나의 자바스크립트만 실행한다. 동기 렌더링이 이어지는 동안 다른 요청은 줄을 서고, 헬스 체크까지 늦어질 수 있다. 캐시, 그리는 양 줄이기, 프로세스 여러 개로 대응한다.",
    anchor: "렌더링은-cpu를-쓰고-nodejs는-한-줄로-일한다",
  },
  {
    id: "rendering-ssr-4",
    post: "rendering-ssr",
    question: "상품 100ms, 리뷰 150ms, 추천 200ms를 하나씩 await하던 SSR 코드를 Promise.all로 바꾸면 TTFB는 대략 어떻게 되나? (렌더링은 무시)",
    choices: ["450ms → 450ms", "450ms → 150ms", "450ms → 200ms", "200ms → 100ms"],
    answer: 2,
    explanation:
      "일렬로 기다리면 세 시간의 합이고, 함께 출발하면 가장 느린 조회 시간이 된다. 실측도 0.45초에서 0.20초로 줄었다. 정말 앞 결과가 필요한 조회만 기다리게 둔다.",
    anchor: "서버-안에도-폭포가-있다",
  },
  {
    id: "rendering-ssr-5",
    post: "rendering-ssr",
    question: "모듈 최상위 변수 currentUser에 요청의 사용자를 넣고 await 뒤 렌더링했더니 alice가 bob의 이름을 받았다. 가장 알맞은 수정은?",
    choices: [
      "await를 지워 동기로 만든다",
      "요청별 값을 props·context나 AsyncLocalStorage로 그 요청의 흐름에만 흘린다",
      "변수를 const로 바꾼다",
      "응답에 Vary: Cookie를 붙인다",
    ],
    answer: 1,
    explanation:
      "서버의 모듈 변수는 프로세스의 모든 요청이 공유해서 await 사이에 다른 요청이 덮어쓴다. 요청별 값은 요청과 함께 흘러야 하고, store나 QueryClient도 서버에서는 요청마다 만든다. Vary는 캐시 문제이지 이 문제와 상관없다.",
    anchor: "모듈-변수는-모든-사용자가-같이-쓴다",
  },
  {
    id: "rendering-ssr-6",
    post: "rendering-ssr",
    question: "쿠키로 이름을 넣은 SSR 페이지에 Cache-Control: public, s-maxage=60을 붙이고 nginx proxy_cache를 앞에 뒀다. bob은 무엇을 받나?",
    choices: [
      "자기 이름이 든 새 페이지",
      "nginx가 쿠키를 보고 캐시를 건너뛴 페이지",
      "먼저 요청한 alice의 이름이 든 캐시 사본",
      "502 오류",
    ],
    answer: 2,
    explanation:
      "캐시 키는 기본적으로 주소라서 쿠키가 달라도 같은 요청으로 본다. 실측에서 bob은 X-Cache-Status: HIT로 alice의 페이지를 받았다. 개인화한 HTML은 private, no-store로 막거나 개인화 부분을 HTML 밖으로 뺀다.",
    anchor: "ssr-결과를-캐시에-올리기",
  },
];
