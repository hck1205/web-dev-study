import type { QuizQuestion } from "../types";

export const MICRO_FRONTEND_INTEGRATION_PATTERNS: QuizQuestion[] = [
  {
    id: "micro-frontend-integration-patterns-1",
    post: "micro-frontend-integration-patterns",
    question:
      "페이지 서버가 조각 세 개(20ms, 60ms, 1500ms)를 동시에 요청하고 Promise.all로 모두 모은 뒤 응답한다. 사용자가 첫 바이트를 받는 시각은 대략?",
    choices: [
      "20ms 무렵, 가장 빠른 조각이 오자마자",
      "1.5초 무렵, 가장 느린 조각이 올 때",
      "1.58초 무렵, 세 조각 시간을 더한 만큼",
      "60ms 무렵, 본문 조각이 오면",
    ],
    answer: 1,
    explanation:
      "요청은 동시에 나가니 시간이 더해지지는 않지만, 다 모아서 보내면 가장 느린 조각이 첫 바이트를 정한다. 실험에서도 1.56초였다. 조각마다 시간 제한을 두거나 스트리밍으로 준비된 조각부터 보내야 한다.",
    anchor: "가장-느린-조각이-첫-바이트를-정한다",
  },
  {
    id: "micro-frontend-integration-patterns-2",
    post: "micro-frontend-integration-patterns",
    question: "HTML 스트리밍으로 조각을 합칠 때 느린 추천 조각을 문서 맨 위에 두면 어떻게 되나?",
    choices: [
      "브라우저가 알아서 순서를 바꿔 빠른 조각부터 그린다",
      "느린 조각만 비고 나머지는 바로 보인다",
      "HTML은 앞에서부터 쓰니 그 뒤의 조각도 모두 추천 조각을 기다린다",
      "스트리밍이 자동으로 꺼진다",
    ],
    answer: 2,
    explanation:
      "스트리밍은 응답을 순서대로 흘려보내므로 앞의 조각이 늦으면 뒤의 조각을 쓸 수 없다. 느린 조각은 문서 뒤로 보내거나, 자리만 먼저 보내고 나중에 내용을 끼우는 방식(React의 Suspense 스트리밍)을 쓴다.",
    anchor: "가장-느린-조각이-첫-바이트를-정한다",
  },
  {
    id: "micro-frontend-integration-patterns-3",
    post: "micro-frontend-integration-patterns",
    question: "iframe 리모트가 보낸 높이 메시지를 셸이 받을 때 반드시 확인해야 하는 것은?",
    choices: [
      "e.data에 height 숫자가 있는지만 보면 된다",
      "메시지가 JSON 문자열인지",
      "e.timeStamp가 최근인지",
      "e.origin이 허용한 리모트 출처이고 e.source가 그 iframe의 window인지",
    ],
    answer: 3,
    explanation:
      "같은 페이지의 다른 프레임도 postMessage를 보낼 수 있다. 실험에서도 숨긴 다른 출처 프레임이 높이 99999를 보냈고 origin 검사로 버렸다. 같은 통로로 중요한 메시지를 주고받기 시작하면 이 검사가 없을 때 가짜 메시지 공격 경로가 된다.",
    anchor: "iframe은-높이부터-알려-줘야-한다",
  },
  {
    id: "micro-frontend-integration-patterns-4",
    post: "micro-frontend-integration-patterns",
    question:
      "React 19 셸에서 `<cart-list onCheckout={fn} />`을 렌더링했다. 리모트 요소가 `new CustomEvent(\"checkout\")`을 보내면?",
    choices: [
      "fn이 호출되지 않는다. React 19는 on 뒤 글자를 그대로 쓰니 Checkout 이벤트를 듣는다",
      "fn이 호출된다. 이벤트 이름은 대소문자를 구분하지 않는다",
      "React 19도 함수 props를 버리니 어떤 이벤트에도 반응하지 않는다",
      "oncheckout 속성이 HTML에 문자열로 들어가 브라우저가 실행한다",
    ],
    answer: 0,
    explanation:
      "실험에서 onCheckout은 Checkout 이벤트에만 반응했고 소문자 checkout에는 반응하지 않았다. 소문자 이벤트를 받으려면 oncheckout이라고 적는다. React 18이었다면 함수 prop 자체가 사라졌다.",
    anchor: "web-components로-감쌀-때-넘어가는-것과-막히는-것",
  },
  {
    id: "micro-frontend-integration-patterns-5",
    post: "micro-frontend-integration-patterns",
    question: "셸 CSS에 `body { color: blue }`와 `p { color: red }`가 있다. 리모트의 Shadow DOM 안 `<p>`의 글자색은?",
    choices: [
      "red. 셸 선택자가 Shadow DOM 안에도 적용된다",
      "blue. p 선택자는 막히지만 body에서 상속되는 color는 경계를 넘는다",
      "검정. Shadow DOM은 모든 스타일을 초기화한다",
      "브라우저마다 다르다",
    ],
    answer: 1,
    explanation:
      "Shadow DOM은 바깥 선택자를 막지만 상속 속성과 CSS 변수는 통과시킨다. 실험에서도 안쪽 p는 파란색, serif였고 --brand 변수 색을 받았다. 상속까지 끊으려면 :host에 all: initial을 준다.",
    anchor: "web-components로-감쌀-때-넘어가는-것과-막히는-것",
  },
  {
    id: "micro-frontend-integration-patterns-6",
    post: "micro-frontend-integration-patterns",
    question:
      "single-spa 앱이 mount에서 window에 resize 리스너를 달고 unmount에서 DOM만 지운다. 이 앱을 세 번 켰다 끈 뒤 resize가 한 번 일어나면?",
    choices: [
      "앱이 꺼져 있으니 아무 일도 없다",
      "bootstrap이 한 번만 불리니 핸들러도 한 번 돈다",
      "꺼진 앱의 핸들러가 세 번 돈다",
      "single-spa가 unmount 때 리스너를 자동으로 정리한다",
    ],
    answer: 2,
    explanation:
      "mount는 켤 때마다 불리고 문서는 그대로 살아 있으니 정리하지 않은 리스너가 하나씩 쌓인다. 실험에서도 세 번 켠 뒤 resize 한 번에 핸들러가 세 번 불렸다. unmount 뒤에 전역 리스너, 타이머, 구독이 남지 않는다는 것을 리모트 계약에 넣는다.",
    anchor: "single-spa는-생명주기-세-개를-지키게-한다",
  },
  {
    id: "micro-frontend-integration-patterns-7",
    post: "micro-frontend-integration-patterns",
    question:
      "다른 출처 CDN의 리모트 스크립트를 `<script src>`로 불렀더니 에러 수집 도구에 `Script error.`만 쌓인다. 무엇을 고쳐야 하나?",
    choices: [
      "리모트 스크립트를 type=\"module\"로 바꾸고 CORS는 그대로 둔다",
      "window.onerror 대신 console.error를 가로챈다",
      "소스맵을 공개 서버에 올린다",
      "스크립트에 crossorigin=\"anonymous\"를 주고 CDN이 Access-Control-Allow-Origin을 돌려주게 한다",
    ],
    answer: 3,
    explanation:
      "crossorigin 없이 다른 출처에서 로드한 스크립트의 에러는 브라우저가 메시지와 파일 이름을 가린다. 두 설정을 갖추자 실험에서 TypeError와 파일 주소가 그대로 보였다. Module Federation은 output.crossOriginLoading이 이 속성을 붙인다.",
    anchor: "리모트마다-따로-재고-따로-잡는다",
  },
];
