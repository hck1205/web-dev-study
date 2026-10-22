import type { QuizQuestion } from "../types";

export const RESOURCE_HINTS_LOADING: QuizQuestion[] = [
  {
    id: "resource-hints-loading-1",
    post: "resource-hints-loading",
    question: "히어로 이미지를 CSS `background-image`로 넣었더니 LCP가 HTML `<img>`보다 두 배 늦었다. 가장 직접적인 원인은?",
    choices: [
      "배경 이미지는 항상 Lowest 우선순위로 요청되어서",
      "CSS를 받아 해석하기 전에는 이미지 주소를 몰라 요청이 늦게 출발해서",
      "배경 이미지는 디코딩을 메인 스레드에서 해서",
      "배경 이미지는 LCP 후보가 될 수 없어서",
    ],
    answer: 1,
    explanation:
      "프리로드 스캐너는 HTML 속 주소만 미리 찾는다. CSS 배경은 CSS 응답을 받은 뒤 318ms에야 출발했고, preload를 더하자 11ms로 당겨져 HTML에 쓴 것과 같아졌다.",
    anchor: "늦게-발견되면-늦게-출발한다",
  },
  {
    id: "resource-hints-loading-2",
    post: "resource-hints-loading",
    question: "썸네일 16장 뒤의 히어로에 `fetchpriority=\"high\"`를 붙였더니 출발은 556ms에서 115ms로 당겨졌지만 LCP는 60ms만 줄었다. 왜 그런가?",
    choices: [
      "fetchpriority는 HTTP/1.1에서 무시되어서",
      "이미지 디코딩이 늦어서",
      "우선순위는 순서만 바꾸고, 이미 출발한 썸네일과 대역폭을 계속 나눠 써서",
      "LCP 요소가 썸네일로 바뀌어서",
    ],
    answer: 2,
    explanation:
      "fetchpriority는 연결을 기다리는 줄에서 맨 앞으로 끼워 넣을 뿐, 다른 다운로드를 멈추지 않는다. 받을 양 자체가 그대로라 대역폭이 병목이면 효과가 작다. 이때는 이미지 크기를 줄이는 쪽이 낫다.",
    anchor: "출발은-했는데-줄을-선다",
  },
  {
    id: "resource-hints-loading-3",
    post: "resource-hints-loading",
    question: "CDN 이미지를 위해 `<link rel=\"preconnect\" href=\"https://cdn…\" crossorigin>`을 걸었는데 연결이 두 개 열리고 이득이 없었다. 이유는?",
    choices: [
      "crossorigin preconnect는 CORS 모드 연결을 열어, 쿠키를 보내는 일반 img 요청이 그 연결을 못 써서",
      "preconnect는 이미지에는 적용되지 않아서",
      "CDN이 HTTP/2를 지원하지 않아서",
      "dns-prefetch를 함께 걸지 않아서",
    ],
    answer: 0,
    explanation:
      "크롬은 쿠키를 보내는 요청과 안 보내는 요청의 연결을 섞지 않는다. 일반 img는 crossorigin 없이 걸어야 미리 연 연결을 쓴다. 실험에서 맞춘 경우 대기가 301ms에서 2ms로 줄었다.",
    anchor: "연결을-미리-열어-두는-값",
  },
  {
    id: "resource-hints-loading-4",
    post: "resource-hints-loading",
    question: "폰트를 `<link rel=\"preload\" as=\"font\" type=\"font/woff2\">`로 걸었는데 같은 파일을 두 번 받았다. 무엇이 빠졌나?",
    choices: [
      "fetchpriority=\"high\"",
      "media 속성",
      "rel=\"modulepreload\"",
      "crossorigin 속성",
    ],
    answer: 3,
    explanation:
      "폰트는 같은 출처여도 CORS 모드로 요청하는데, crossorigin 없는 preload는 일반 모드로 받아 짝이 맞지 않는다. 크롬 콘솔에 credentials mode가 맞지 않는다는 경고가 뜨고 766KB를 두 번 받았다.",
    anchor: "preload를-잘못-쓰면-콘솔이-알려-준다",
  },
  {
    id: "resource-hints-loading-5",
    post: "resource-hints-loading",
    question: "500ms 늦게 오는 분석 스크립트를 `<head>`에 넣었다. `async`를 붙이면 일반 script와 비교해 어떻게 되나?",
    choices: [
      "FCP와 DCL 모두 스크립트가 올 때까지 늦어진다",
      "본문이 먼저 그려지고, DCL도 스크립트를 기다리지 않는다",
      "본문은 먼저 그려지지만 DCL은 스크립트 실행 뒤로 밀린다",
      "스크립트가 아예 실행되지 않는다",
    ],
    answer: 1,
    explanation:
      "실험에서 일반 script는 FCP 544ms, async는 FCP 40ms, DCL 20ms였다. DCL이 스크립트 실행 뒤로 밀리는 건 defer 쪽이다. 순서가 필요 없는 분석 코드에 async가 맞는 이유다.",
    anchor: "스크립트-하나가-첫-화면을-붙잡는-시간",
  },
  {
    id: "resource-hints-loading-6",
    post: "resource-hints-loading",
    question: "103 Early Hints를 켠 뒤 TTFB 대시보드가 갑자기 좋아졌다. 어떻게 해석해야 하나?",
    choices: [
      "서버 처리 시간이 실제로 줄었다",
      "CDN 캐시 적중률이 올라갔다",
      "크롬이 103 도착 시각을 responseStart로 잡아서 그렇고, 실제 최종 응답은 finalResponseHeadersStart로 봐야 한다",
      "HTTP/3로 바뀌었다",
    ],
    answer: 2,
    explanation:
      "실험에서 103을 보내자 responseStart는 507ms에서 4ms로 당겨졌지만 finalResponseHeadersStart는 504ms 그대로였다. 서버가 HTML을 만드는 시간은 변하지 않았으니 두 값을 함께 본다.",
    anchor: "서버가-먼저-귀띔하기",
  },
  {
    id: "resource-hints-loading-7",
    post: "resource-hints-loading",
    question: "Speculation Rules로 다음 글을 prefetch했는지 도착한 페이지에서 확인하려면 무엇을 보나?",
    choices: [
      "내비게이션 타이밍의 deliveryType이 navigational-prefetch인지",
      "document.referrer가 비어 있는지",
      "Cache-Control 헤더가 no-store인지",
      "performance.memory 값",
    ],
    answer: 0,
    explanation:
      "미리 받은 응답을 쓰면 deliveryType이 navigational-prefetch로 찍힌다. 실험에서는 no-store 응답도 미리 받아졌고 클릭에서 화면까지 526ms가 100ms로 줄었다. prerender됐는지는 activationStart가 0보다 큰지로 본다.",
    anchor: "다음-페이지를-미리-받아-두면",
  },
];
