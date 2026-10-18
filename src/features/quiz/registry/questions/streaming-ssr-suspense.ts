import type { QuizQuestion } from "../types";

export const STREAMING_SSR_SUSPENSE: QuizQuestion[] = [
  {
    id: "streaming-ssr-suspense-1",
    post: "streaming-ssr-suspense",
    question: "스트리밍 SSR에서 셸(shell)이 늦게 나가는 경우는?",
    choices: [
      "Suspense 경계 안쪽의 리뷰 API가 느릴 때",
      "Suspense 경계 밖에 있는 컴포넌트가 데이터를 기다릴 때",
      "fallback이 실제 내용보다 작을 때",
      "경계가 세 개 이상일 때",
    ],
    answer: 1,
    explanation:
      "셸은 경계 바깥과 fallback으로 만든 첫 HTML이라 경계 밖의 기다림은 그대로 셸을 늦춘다. 경계 안쪽이 느린 건 셸을 붙잡지 않고, 나중에 숨긴 HTML과 교체 스크립트로 따라온다.",
    anchor: "셸이-먼저-나가고-경계-안쪽이-뒤따른다",
  },
  {
    id: "streaming-ssr-suspense-2",
    post: "streaming-ssr-suspense",
    question: "React 19에서 경계 조각이 서버에서 211ms에 도착했는데 화면에는 345ms에 나타났다. 이유로 가장 알맞은 것은?",
    choices: [
      "브라우저가 JS 번들을 받아 하이드레이션할 때까지 기다렸다",
      "nginx가 응답을 버퍼링했다",
      "직전 화면 갱신 뒤 300ms 간격을 두려고 교체를 모아서 처리했다",
      "HTML 파서가 닫는 태그를 기다렸다",
    ],
    answer: 2,
    explanation:
      "React 19의 `$RC`는 바로 자리를 바꾸지 않고 목록에 넣은 뒤, 직전 갱신(`$RT`)에서 300ms가 되는 시점에 한꺼번에 바꾼다. 교체는 인라인 스크립트로 일어나므로 하이드레이션이나 JS 번들과는 상관이 없다.",
    anchor: "react-19는-교체를-모아서-한다",
  },
  {
    id: "streaming-ssr-suspense-3",
    post: "streaming-ssr-suspense",
    question: "셸이 200으로 나간 뒤 Suspense 경계 안의 컴포넌트가 에러를 던지면 어떻게 되나?",
    choices: [
      "응답 상태 코드가 500으로 바뀐다",
      "응답이 끊기고 브라우저가 흰 화면을 보여 준다",
      "onShellError가 불려 대체 HTML로 교체된다",
      "그 경계에 `$RX`가 와서 브라우저가 그 부분을 다시 렌더링하고, 상태 코드는 200으로 남는다",
    ],
    answer: 3,
    explanation:
      "상태 줄은 셸과 함께 이미 떠났으니 바꿀 수 없다. React는 그 경계를 `<!--$!-->`로 표시해 클라이언트 렌더링으로 넘기고, onShellError는 셸을 만들지 못했을 때만 불린다.",
    anchor: "상태-코드는-첫-조각과-함께-떠난다",
  },
  {
    id: "streaming-ssr-suspense-4",
    post: "streaming-ssr-suspense",
    question: "Express에서 compression 미들웨어를 쓰는데 React 스트림을 PassThrough를 거쳐 보내자 스트리밍이 멈췄다. 원인은?",
    choices: [
      "gzip은 원래 스트리밍을 지원하지 않는다",
      "PassThrough가 chunked 헤더를 지운다",
      "React가 조각마다 부르는 `flush()`를 PassThrough가 갖고 있지 않아 압축기가 끝까지 모은다",
      "compression이 Content-Length를 계산하려고 응답을 기다린다",
    ],
    answer: 2,
    explanation:
      "React는 쓰는 대상에 `flush` 메서드가 있으면 조각마다 불러 준다. `res`에 바로 연결하면 compression이 붙인 flush가 불려 셸이 먼저 나가지만, PassThrough에는 그 메서드가 없어 압축기가 내용을 쌓아 둔다.",
    anchor: "중간에서-모아-버리는-것들",
  },
  {
    id: "streaming-ssr-suspense-5",
    post: "streaming-ssr-suspense",
    question: "Next.js 16에서 `generateMetadata`가 0.8초 걸리는 페이지를 Twitterbot으로 요청하면 어떻게 오나?",
    choices: [
      "0.8초를 기다린 뒤 `<title>`이 `<head>` 안에 들어간 HTML을 받는다",
      "첫 바이트는 바로 오고 `<title>`은 본문 뒤에 스트리밍된다",
      "메타데이터 없이 본문만 받는다",
      "봇에게는 항상 CSR 페이지가 간다",
    ],
    answer: 0,
    explanation:
      "Next는 `htmlLimitedBots` 정규식에 걸리는 봇에게는 메타데이터를 기다렸다가 head에 넣어 보낸다. 브라우저와 JS를 실행하는 구글봇은 기다리지 않고 제목을 본문 뒤에 받는다.",
    anchor: "봇과-링크-미리보기가-보는-html",
  },
  {
    id: "streaming-ssr-suspense-6",
    post: "streaming-ssr-suspense",
    question: "`curl`의 time_starttransfer가 0.01초로 나왔는데도 실제로는 스트리밍이 안 되고 있을 수 있는 경우는?",
    choices: [
      "HTTP/2로 연결했을 때",
      "압축이 켜져 있어 gzip 헤더 10바이트만 먼저 나갔을 때",
      "onShellReady에서 pipe했을 때",
      "Transfer-Encoding이 chunked일 때",
    ],
    answer: 1,
    explanation:
      "압축기는 본문을 모으는 중에도 gzip 헤더를 먼저 보낼 수 있어서 첫 바이트 시간만 보면 빠르게 보인다. 조각 크기와 도착 시각을 함께 보거나 `Accept-Encoding: identity`로 다시 재야 한다.",
    anchor: "중간에서-모아-버리는-것들",
  },
];
