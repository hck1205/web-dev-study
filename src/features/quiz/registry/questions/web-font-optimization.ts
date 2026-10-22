import type { QuizQuestion } from "../types";

export const WEB_FONT_OPTIMIZATION: QuizQuestion[] = [
  {
    id: "web-font-optimization-1",
    post: "web-font-optimization",
    question: "외부 CSS 안에 @font-face가 있을 때, 폰트 요청이 CSS 응답이 끝난 뒤에야 나가는 이유는?",
    choices: [
      "브라우저는 @font-face를 읽고, 그 폰트를 쓰는 요소가 있다는 걸 스타일 계산에서 확인한 뒤에 요청한다",
      "폰트는 우선순위가 가장 낮아서 다른 요청이 끝나길 기다린다",
      "폰트는 HTTP/1.1 연결을 따로 써야 해서 앞 연결이 끝나길 기다린다",
      "CSS 파일이 캐시되기 전에는 폰트를 요청할 수 없다",
    ],
    answer: 0,
    explanation:
      "쓰지 않을 폰트를 받지 않으려고 브라우저는 실제로 그 폰트로 그릴 글자가 있는지 확인한 뒤에 요청한다. 실험에서 CSS가 317ms에 끝나고 폰트 요청은 319ms에 나갔다. preload를 걸자 12ms에 요청이 나갔다.",
    anchor: "폰트는-css를-읽은-뒤에야-발견된다",
  },
  {
    id: "web-font-optimization-2",
    post: "web-font-optimization",
    question: "폰트 preload를 넣었는데 Network 패널에 같은 woff2가 두 번 보이고 두 번째 요청이 preload 없을 때와 같은 시각에 나갔다. 가장 그럴듯한 원인은?",
    choices: [
      "type=\"font/woff2\"를 빠뜨렸다",
      "as=\"font\" 대신 as=\"style\"을 썼다",
      "crossorigin 속성을 빠뜨렸다",
      "font-display를 지정하지 않았다",
    ],
    answer: 2,
    explanation:
      "폰트는 같은 출처에서도 CORS 모드로 요청된다. crossorigin 없는 preload는 다른 모드로 받아서 재사용되지 못하고, 크롬은 credentials mode does not match 경고를 남겼다. font-display는 보여 주는 방식이지 요청 재사용과는 상관없다.",
    anchor: "폰트는-css를-읽은-뒤에야-발견된다",
  },
  {
    id: "web-font-optimization-3",
    post: "web-font-optimization",
    question: "font-display: swap인데 폰트가 51ms 만에 도착했다. CLS는 어떻게 나왔나?",
    choices: [
      "폰트가 빨리 왔으니 교체가 일어나지 않아 0이다",
      "대체 폰트로 이미 그린 뒤에 바뀌어서 느린 폰트와 같은 0.1281이 났다",
      "swap은 레이아웃 이동을 CLS에서 빼 주므로 0이다",
      "교체가 두 번 일어나 두 배로 커졌다",
    ],
    answer: 1,
    explanation:
      "swap은 블록 기간이 거의 없어서 대체 폰트로 먼저 그린다. 폰트가 빨리 와도 첫 그리기보다 늦으면 바꿔 끼우면서 줄바꿈이 달라져 밀린다. 그래서 1.5초짜리 폰트와 똑같이 CLS 0.1281이 나왔다.",
    anchor: "받는-동안-글자를-어떻게-보여-줄까",
  },
  {
    id: "web-font-optimization-4",
    post: "web-font-optimization",
    question: "한글 사이트에서 next/font를 썼는데도 폰트 교체 때 문단이 밀린다. 실험에서 확인한 이유는?",
    choices: [
      "next/font가 font-display를 block으로 바꾸기 때문이다",
      "size-adjust는 사파리에서만 동작하기 때문이다",
      "기준 대체 폰트가 라틴 폰트라서 한글은 size-adjust가 걸리지 않은 다음 시스템 폰트로 그려지기 때문이다",
      "가변 폰트에는 size-adjust를 쓸 수 없기 때문이다",
    ],
    answer: 2,
    explanation:
      "Liberation Sans에 size-adjust 50%를 주자 영문은 절반이 됐지만 한글은 116.5px에서 114.2px로 거의 그대로였다. 그 폰트에 한글 글리프가 없어서 한글은 다른 시스템 폰트로 넘어가기 때문이다. 대체용 @font-face의 local()에 한글이 있는 폰트를 넣고 비율을 따로 재야 한다.",
    anchor: "대체-폰트를-웹-폰트-크기에-맞추기",
  },
  {
    id: "web-font-optimization-5",
    post: "web-font-optimization",
    question: "font-display: optional로 지연 없이 폰트를 줬는데도 첫 방문에 대체 폰트로 끝났다. 무엇을 더하면 첫 방문에도 웹 폰트로 그려졌나?",
    choices: [
      "font-display를 fallback으로 바꾼다",
      "폰트 preload를 head에 추가한다",
      "unicode-range를 지운다",
      "local()을 src 맨 앞에 둔다",
    ],
    answer: 1,
    explanation:
      "optional은 블록 기간 약 100ms 안에 준비된 폰트만 쓴다. preload 없이는 스타일 계산 뒤에야 요청하고 해석 시간도 필요해서 첫 그리기를 놓쳤다. preload를 더하자 19ms에 도착해 웹 폰트로 그려졌고 CLS도 0이었다.",
    anchor: "첫-방문은-대체-폰트로-끝내는-optional",
  },
  {
    id: "web-font-optimization-6",
    post: "web-font-optimization",
    question: "Pretendard 동적 서브셋 CSS로 한글 문단 세 개(638자)를 열었을 때 받은 폰트에 가장 가까운 것은?",
    choices: [
      "조각 1개, 약 38KB",
      "92개 조각 전부, 약 2.9MB",
      "통짜 파일 하나, 약 2MB",
      "조각 13개, 약 340KB",
    ],
    answer: 3,
    explanation:
      "unicode-range 덕분에 필요한 조각만 받지만, 자주 쓰는 한글이 여러 조각에 흩어져 있어 짧은 글도 13개, 340KB를 받았다. 38KB 하나는 영문만 있는 페이지의 결과다. 콘텐츠가 정해져 있다면 그 글자만 남긴 정적 서브셋이 더 작을 수 있다.",
    anchor: "필요한-글자만-받는-unicode-range",
  },
  {
    id: "web-font-optimization-7",
    post: "web-font-optimization",
    question: "요즘 구글 폰트 CDN 대신 직접 호스팅을 권하는 가장 큰 이유는?",
    choices: [
      "구글 폰트는 woff2를 지원하지 않는다",
      "CDN 폰트는 font-display를 쓸 수 없다",
      "브라우저가 HTTP 캐시를 사이트별로 나눠서 다른 사이트에서 받은 폰트를 재사용하지 못하고, 새 출처 연결 비용만 남는다",
      "직접 호스팅하면 CORS가 필요 없어서 모든 출처에서 쓸 수 있다",
    ],
    answer: 2,
    explanation:
      "크롬 86부터 캐시가 최상위 사이트별로 분할되어 사이트 간 캐시 공유라는 장점이 사라졌다. 남는 건 CSS 출처와 파일 출처에 새로 여는 연결 비용이다. 구글 폰트도 URL에 display=swap을 붙이면 font-display를 쓸 수 있다.",
    anchor: "직접-호스팅과-폰트-cdn",
  },
];
