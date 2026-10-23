import type { QuizQuestion } from "../types";

export const CSS_CUSTOM_PROPERTIES: QuizQuestion[] = [
  {
    id: "css-custom-properties-1",
    post: "css-custom-properties",
    question:
      "Sass로 .dark { $brand: #7aa2ff; }를 적었는데 다크 모드에서 색이 바뀌지 않는다. 이유는?",
    choices: [
      ".dark의 명시도가 :root보다 낮아서 진다",
      "Sass 변수는 컴파일할 때만 있는 이름이라, 블록 안의 지역 변수는 쓰는 곳이 없으면 결과 CSS에 아무것도 남지 않는다",
      "브라우저가 $로 시작하는 변수를 지원하지 않아서 무시한다",
      "다크 모드는 미디어 쿼리 안에서만 바꿀 수 있어서다",
    ],
    answer: 1,
    explanation:
      "Sass는 빌드가 끝나면 값을 문자열로 박고 이름을 남기지 않는다. .dark 안의 $brand는 그 블록 안에서만 쓰이는 지역 변수라 컴파일 결과에 .dark 규칙 자체가 사라졌다. 런타임에 조상에서 다시 정하는 일은 CSS 변수만 할 수 있다.",
    anchor: "변수는-이름이-아니라-속성이다",
  },
  {
    id: "css-custom-properties-2",
    post: "css-custom-properties",
    question:
      "부모 글자색이 초록이고 .c1 { color: red; color: var(--gap); }이며 --gap은 20px이다. .c1의 글자색은?",
    choices: [
      "빨강. 틀린 선언을 버리고 앞의 color: red로 돌아간다",
      "검정. color의 초깃값이 쓰인다",
      "초록. 계산값 시점에 무효가 되어 unset처럼 상속값을 받는다",
      "투명. 무효인 색은 transparent로 처리된다",
    ],
    answer: 2,
    explanation:
      "var()가 든 선언은 읽을 때 검사할 수 없어 캐스케이드에서 일단 이긴다. 그 순간 color: red는 버려진다. 계산값 단계에서 20px이 색이 아님을 알게 되면 unset처럼 처리하고, color는 상속 속성이라 부모의 초록이 나온다.",
    anchor: "대체값이-있어도-무효가-되는-순간",
  },
  {
    id: "css-custom-properties-3",
    post: "css-custom-properties",
    question: "var(--nope, orange)에서 대체값 orange가 쓰이는 경우는?",
    choices: [
      "--nope이 정의되지 않았거나 순환 등으로 무효 값일 때",
      "--nope의 값이 그 속성에 맞지 않을 때",
      "--nope이 부모에서 상속된 값일 때",
      "항상 쓰이고 --nope은 무시된다",
    ],
    answer: 0,
    explanation:
      "대체값은 변수가 없을 때의 기본값이다. 변수가 있는데 속성에 맞지 않는 값이면 대체값으로 가지 않고 계산값 시점에 무효가 된다. 순환에 걸린 변수는 보장된 무효 값이 되어 없는 것처럼 취급되므로 대체값이 쓰인다.",
    anchor: "대체값이-있어도-무효가-되는-순간",
  },
  {
    id: "css-custom-properties-4",
    post: "css-custom-properties",
    question: "--size: 10;일 때 width: var(--size)px가 10px이 되지 않는 이유와 고치는 방법은?",
    choices: [
      "px 단위를 변수 이름에 붙여야 해서 --size-px로 바꾼다",
      "브라우저가 공백을 넣어서 '10 px'가 되므로 trim()한다",
      "숫자 변수는 width에 쓸 수 없어서 고칠 방법이 없다",
      "var()는 토큰을 끼워 넣을 뿐 이어 붙이지 않아 10과 px가 따로 남는다. calc(var(--size) * 1px)로 단위를 곱한다",
    ],
    answer: 3,
    explanation:
      "var()는 변수의 토큰을 그 자리에 붙여 넣고 속성 문법으로 해석한다. 숫자 토큰 10 뒤에 px 토큰이 따로 붙은 것이라 width 값이 아니고, 선언이 무효가 되어 auto로 돌아갔다. 단위 없는 숫자는 calc로 단위를 곱한다.",
    anchor: "var는-쓰는-자리에서-토큰을-끼워-넣는다",
  },
  {
    id: "css-custom-properties-5",
    post: "css-custom-properties",
    question:
      "같은 1초 transition을 걸었는데 @property로 등록한 --pct는 부드럽게 바뀌고 등록하지 않은 --plain은 바로 100%로 뛴다. 왜인가?",
    choices: [
      "등록하지 않은 변수는 transition 속성에 이름을 적을 수 없어서",
      "등록하지 않은 변수는 타입이 없는 토큰 덩어리라 브라우저가 사잇값을 계산할 수 없어서",
      "등록하지 않은 변수는 상속되지 않아서",
      "--plain이 inherits: false여서",
    ],
    answer: 1,
    explanation:
      "@property로 syntax를 주면 브라우저가 값의 타입을 알아 0%와 100% 사이를 보간할 수 있다. 측정에서도 전환은 --pct 하나만 만들어졌고 500ms 지점에서 50%였다. 등록하지 않은 변수는 토큰일 뿐이라 바로 끝 값으로 바뀐다.",
    anchor: "property로-타입을-붙이면-달라지는-것",
  },
  {
    id: "css-custom-properties-6",
    post: "css-custom-properties",
    question:
      "드래그하는 동안 1초에 수십 번 바뀌는 포인터 좌표를 CSS 변수로 넘기려 한다. 어디에 setProperty하는 게 좋은가?",
    choices: [
      ":root. 한 곳에서 관리해야 테마와 일관되다",
      "body. :root보다 한 단계 아래라 재계산이 절반으로 준다",
      "그 좌표를 실제로 쓰는 요소. 바뀐 변수를 상속하는 요소만 다시 계산하기 때문이다",
      "어디든 같다. CSS 변수 변경은 스타일 재계산을 일으키지 않는다",
    ],
    answer: 2,
    explanation:
      "바뀐 변수를 상속하는 모든 요소가 스타일을 다시 계산한다. 측정에서 20,000개 요소가 있는 페이지의 :root를 바꾸면 63ms, 요소 하나짜리 컨테이너에서 바꾸면 0.1ms 미만이었다. 자주 바뀌는 값은 쓰는 요소 가까이에 두고 React 상태 대신 ref로 바꾼다.",
    anchor: "자바스크립트로-바꾸면-다시-계산하는-범위",
  },
  {
    id: "css-custom-properties-7",
    post: "css-custom-properties",
    question:
      "Sass의 darken() 대신 color-mix(in srgb, var(--accent) 80%, black)로 호버 색을 만들면 좋은 점은?",
    choices: [
      "계산값 단계에서 섞으니 테마에서 --accent만 바꿔도 파생 색이 함께 바뀐다",
      "대비 검사를 브라우저가 자동으로 해 준다",
      "모든 브라우저에서 Sass보다 정확한 색이 나온다",
      "빌드 시간에 색을 미리 계산해 런타임 비용이 없다",
    ],
    answer: 0,
    explanation:
      "Sass 색 함수는 컴파일할 때 값을 박아서 --accent를 바꿔도 파생 색이 옛 값에 남는다. color-mix와 상대 색 문법은 변수가 끼워 넣어진 뒤 계산되므로 기본 색 하나만 바꾸면 된다. 다만 대비는 자동으로 보장되지 않아 토큰 단계에서 따로 검사한다.",
    anchor: "파생-색은-변수에서-계산한다",
  },
];
