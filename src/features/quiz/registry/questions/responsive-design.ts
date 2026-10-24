import type { QuizQuestion } from "../types";

export const RESPONSIVE_DESIGN: QuizQuestion[] = [
  {
    id: "responsive-design-1",
    post: "responsive-design",
    question: "viewport 메타 태그가 없는 페이지를 휴대폰에서 열면 min-width: 768px 미디어 쿼리가 켜진다. 왜 그런가?",
    choices: [
      "휴대폰의 기기 픽셀 폭이 1000px를 넘어서",
      "브라우저가 페이지를 980px 정도의 레이아웃 뷰포트에 그린 뒤 축소해 보여 주고, 쿼리도 그 폭으로 판정해서",
      "미디어 쿼리는 원래 데스크톱 브라우저에서만 정확하게 동작해서",
      "initial-scale 값이 없으면 브라우저가 쿼리를 무시해서",
    ],
    answer: 1,
    explanation:
      "메타 태그가 없으면 모바일 브라우저는 데스크톱용 페이지라고 보고 약 980px 폭의 레이아웃 뷰포트에 그린 뒤 통째로 줄인다. 미디어 쿼리의 width도 이 레이아웃 뷰포트를 보니 768px 이상 규칙이 켜진다. 기기 픽셀 폭은 레이아웃에 쓰이지 않는다.",
    anchor: "뷰포트-메타-태그가-없으면-980px로-그린다",
  },
  {
    id: "responsive-design-2",
    post: "responsive-design",
    question: "스크롤되는 문서 안의 첫 화면 섹션을 휴대폰에서 주소창이 펴진 상태에도 다 보이게 하려 한다. 가장 알맞은 높이는?",
    choices: [
      "min-height: 100vh",
      "min-height: 100lvh",
      "min-height: 100svh",
      "min-height: 100dvh",
    ],
    answer: 2,
    explanation:
      "vh와 lvh는 주소창이 접힌 가장 큰 높이라서 주소창이 펴져 있으면 아래가 가려진다. dvh는 주소창 상태에 따라 값이 바뀌어 문서 흐름 안에서 쓰면 스크롤할 때 섹션 높이가 들썩인다. 항상 다 보이는 가장 작은 높이인 svh가 맞다.",
    anchor: "100vh가-휴대폰에서-넘치는-이유",
  },
  {
    id: "responsive-design-3",
    post: "responsive-design",
    question: "같은 카드 컴포넌트를 넓은 메인 영역과 280px 사이드바에 함께 넣는다. 사이드바에서도 넓은 배치가 켜지는 문제를 가장 직접적으로 푸는 방법은?",
    choices: [
      "카드의 부모에 container-type: inline-size를 주고 @container로 카드 배치를 바꾼다",
      "미디어 쿼리 브레이크포인트를 1280px로 올린다",
      "카드 자신에 container-type을 주고 같은 요소의 grid-template-columns를 @container로 바꾼다",
      "카드 폭을 100vw로 고정한다",
    ],
    answer: 0,
    explanation:
      "미디어 쿼리는 뷰포트만 보니 사이드바 안의 카드도 화면이 넓으면 넓은 배치가 된다. 컨테이너 쿼리는 카드가 놓인 상자의 폭을 묻는다. 요소는 자기 자신을 질문할 수 없어서 컨테이너는 감싸는 부모에 선언해야 한다.",
    anchor: "화면-대신-자리를-보는-컨테이너-쿼리",
  },
  {
    id: "responsive-design-4",
    post: "responsive-design",
    question: "제목에 font-size: 5vw만 쓰면 생기는 문제는?",
    choices: [
      "모바일에서 글자가 항상 최대 크기로 고정된다",
      "브라우저가 vw 단위를 글자 크기에 허용하지 않는다",
      "다크 모드에서 글자가 흐려진다",
      "브라우저를 확대해도 글자가 커지지 않아 텍스트 확대 기준(WCAG 1.4.4)을 어긴다",
    ],
    answer: 3,
    explanation:
      "확대하면 CSS 픽셀 기준 뷰포트가 좁아져 vw 값도 같이 줄어드니 확대 효과가 상쇄된다. 그래서 clamp(1.75rem, 1.2rem + 2.2vw, 3rem)처럼 선호값에 rem을 섞고 최소·최대도 rem으로 둔다. vw 자체는 글자 크기에 쓸 수 있다.",
    anchor: "글자-크기를-clamp로-부드럽게",
  },
  {
    id: "responsive-design-5",
    post: "responsive-design",
    question: "flex 아이템 안에 긴 URL이 있어 아이템이 화면 밖으로 넘친다. 아이템에 overflow-wrap: anywhere를 줬는데도 아이템 폭이 줄지 않는다면 함께 확인할 것은?",
    choices: [
      "flex 아이템의 기본 min-width: auto 때문에 내용보다 작아지지 않으니 min-width: 0을 준다",
      "body에 overflow-x: hidden을 준다",
      "아이템에 width: 100vw를 준다",
      "부모에 position: sticky를 준다",
    ],
    answer: 0,
    explanation:
      "flex 아이템은 기본 min-width가 auto라 안의 내용 최소 폭보다 작아지지 않는다. min-width: 0을 주면 줄어들 수 있고 그 안에서 줄바꿈이 일어난다. overflow-x: hidden은 원인을 숨길 뿐이고 sticky를 깨뜨릴 수도 있다.",
    anchor: "가로-스크롤-범인-찾기",
  },
  {
    id: "responsive-design-6",
    post: "responsive-design",
    question: "하단 고정 바에 padding-bottom: env(safe-area-inset-bottom)을 줬는데 아이폰에서 값이 늘 0이다. 먼저 확인할 것은?",
    choices: [
      "padding 대신 margin을 썼는지",
      "브라우저가 env() 함수를 지원하는지",
      "viewport 메타 태그에 viewport-fit=cover가 있는지",
      "html의 font-size가 16px인지",
    ],
    answer: 2,
    explanation:
      "viewport-fit=cover가 없으면 iOS는 페이지를 안전한 영역 안에만 그리고 safe-area-inset 값은 0이 된다. 노치와 홈 바 아래까지 그리겠다고 선언해야 그만큼의 여백 값이 들어온다. iOS 사파리는 env()를 지원한다.",
    anchor: "노치와-홈-바를-피해-가장자리-비우기",
  },
];
