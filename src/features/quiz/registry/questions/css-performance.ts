import type { QuizQuestion } from "../types";

export const CSS_PERFORMANCE: QuizQuestion[] = [
  {
    id: "css-performance-1",
    post: "css-performance",
    question: "head에 있는 일반 스타일시트가 800ms 늦게 오면 어떤 일이 일어나나?",
    choices: [
      "HTML 파싱이 멈춰서 DOM도 800ms 뒤에 만들어진다",
      "DOM은 계속 만들어지지만 CSS가 올 때까지 화면을 그리지 않는다",
      "스타일 없이 먼저 그렸다가 CSS가 오면 다시 그린다",
      "CSS가 늦으면 브라우저가 기다리지 않고 건너뛴다",
    ],
    answer: 1,
    explanation:
      "CSS는 파싱이 아니라 렌더링을 막는다. 파서는 DOM을 끝까지 만들지만 CSSOM이 없으니 그리지 못하고, 실험에서 FCP가 CSS 도착 직후인 848ms에 찍혔다. 먼저 그렸다가 다시 그리는 FOUC를 피하려고 기다리는 쪽을 고른 것이다.",
    anchor: "스타일시트-하나가-첫-화면을-붙잡는다",
  },
  {
    id: "css-performance-2",
    post: "css-performance",
    question:
      "크리티컬 CSS를 인라인하고 전체 시트를 media=\"print\" + onload 요령으로 붙였더니 같은 CSS를 두 번 받았다. 가장 그럴듯한 원인은?",
    choices: [
      "media=\"print\" 시트는 원래 두 번 요청된다",
      "noscript 안의 link가 함께 실행됐다",
      "CSS 응답이 캐시되지 않아서 media를 바꿀 때 다시 요청했다",
      "onload가 두 번 호출됐다",
    ],
    answer: 2,
    explanation:
      "실험 서버가 no-store로 응답하자 처음엔 VeryLow로 받아 두고, media를 all로 바꾸는 순간 VeryHigh로 다시 받았다. Cache-Control: max-age만 붙이자 한 번만 받았다. noscript 안의 link는 자바스크립트가 켜진 환경에서는 쓰이지 않는다.",
    anchor: "첫-화면에-필요한-규칙만-먼저-보내기",
  },
  {
    id: "css-performance-3",
    post: "css-performance",
    question: "300ms 걸리는 CSS 파일 세 개를 @import로 줄줄이 이으면 link 세 개로 나란히 둘 때보다 왜 느린가?",
    choices: [
      "@import된 파일은 우선순위가 낮게 요청되기 때문이다",
      "@import는 HTTP/2 다중화를 쓰지 못하기 때문이다",
      "@import된 규칙은 해석이 더 오래 걸리기 때문이다",
      "부모 파일을 받아 해석해야 다음 파일의 존재를 알아서 요청이 직렬로 이어지기 때문이다",
    ],
    answer: 3,
    explanation:
      "프리로드 스캐너는 HTML에 적힌 a.css만 알 수 있고, b.css와 c.css는 앞 파일을 받아 읽어야 보인다. 실험에서 요청 시작 시각이 8ms, 313ms, 619ms로 계단을 그렸고 FCP는 948ms 대 336ms였다. 세 요청의 우선순위는 모두 VeryHigh로 같았다.",
    anchor: "import는-요청을-한-줄로-세운다",
  },
  {
    id: "css-performance-4",
    post: "css-performance",
    question: "개발 서버에서는 멀쩡한 버튼 색이 프로덕션 빌드에서만 빠졌다. 안 쓰는 CSS 제거 도구를 쓴다면 먼저 의심할 코드는?",
    choices: [
      "className={VARIANT[variant]}처럼 매핑 객체에서 이름을 꺼내는 코드",
      "className=\"btn--primary\"처럼 이름을 그대로 쓴 코드",
      "className={`btn--${variant}`}처럼 이름을 조립하는 코드",
      ":where(.btn)으로 기본 스타일을 쓴 코드",
    ],
    answer: 2,
    explanation:
      "PurgeCSS 같은 도구는 소스에서 클래스 이름을 문자열로 찾는다. 이름을 조립하면 btn--primary라는 문자열이 소스에 없어서 규칙이 지워지고, 실험에서도 결과가 비었다. 완성된 이름을 매핑 객체에 두거나 safelist에 등록한다.",
    anchor: "안-쓰는-규칙은-얼마나-되나",
  },
  {
    id: "css-performance-5",
    post: "css-performance",
    question: "요소 2만 개짜리 페이지에서 body에 theme-dark 클래스를 붙였더니 스타일 재계산이 54ms 걸렸다. 가장 효과가 큰 수정은?",
    choices: [
      "선택자를 짧게 바꿔 매칭 비용을 줄인다",
      ".theme-dark * 같은 넓은 규칙을 실제로 바뀌는 요소만 고르는 규칙으로 바꾼다",
      "CSS 파일을 여러 개로 나눈다",
      "theme-dark 클래스를 html 요소에 붙인다",
    ],
    answer: 1,
    explanation:
      "재계산 비용은 다시 계산할 요소 수가 크게 좌우한다. .theme-dark *는 2만 개 전부를 대상으로 만들었고, .theme-dark .row로 좁히면 5,000개, 7ms대였다. 복잡한 선택자와 단순한 선택자의 차이는 7.4ms 대 8.1ms에 그쳤다.",
    anchor: "클래스-하나가-다시-계산하게-만드는-범위",
  },
  {
    id: "css-performance-6",
    post: "css-performance",
    question: "Emotion에서 행마다 다른 색을 props로 스타일 안에 넣었더니 cssRules가 647개가 됐다. 런타임 라이브러리를 유지하면서 규칙 폭증을 막는 방법은?",
    choices: [
      "바뀌는 값만 CSS 변수로 빼고 style={{ \"--hue\": hue }}로 넘긴다",
      "React.memo로 행 컴포넌트를 감싼다",
      "styled 대신 css prop을 쓴다",
      "useInsertionEffect를 직접 호출한다",
    ],
    answer: 0,
    explanation:
      "스타일 문자열이 값마다 달라지면 해시도 달라져서 규칙이 값 수만큼 생긴다. 색을 hsl(var(--hue) ...)로 바꾸자 규칙이 3개로 줄고 처음 그리기도 204ms에서 164ms가 됐다. 다만 렌더링마다 직렬화와 해시는 남아서 정적 CSS(88ms)보다는 느렸다.",
    anchor: "런타임-css-in-js가-렌더링마다-하는-일",
  },
  {
    id: "css-performance-7",
    post: "css-performance",
    question:
      "@layer vendor, components; 순서에서 vendor의 #app .card .title { color: red }와 components의 .title { color: blue }가 충돌하면?",
    choices: [
      "나중에 선언된 레이어인 components가 이겨서 파란색이다",
      "명시도가 높은 vendor 규칙이 이겨서 빨간색이다",
      "둘 다 레이어 안에 있으니 나중에 쓴 줄이 이긴다",
      "레이어끼리 충돌하면 브라우저 기본값으로 돌아간다",
    ],
    answer: 0,
    explanation:
      "캐스케이드는 레이어 순서를 명시도보다 먼저 비교한다. 그래서 (1, 2, 1)짜리 vendor 규칙이 (0, 1, 0)짜리 components 규칙에 지고, 크롬에서도 rgb(0, 0, 255)가 나왔다. 단 !important끼리는 순서가 뒤집혀 먼저 선언한 레이어가 이긴다.",
    anchor: "명시도-싸움을-layer로-끝내기",
  },
];
