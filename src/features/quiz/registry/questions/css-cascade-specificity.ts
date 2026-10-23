import type { QuizQuestion } from "../types";

export const CSS_CASCADE_SPECIFICITY: QuizQuestion[] = [
  {
    id: "css-cascade-specificity-1",
    post: "css-cascade-specificity",
    question:
      "vendor 레이어 안의 `.header .nav button`(0,2,1)과 레이어 밖의 `.btn`(0,1,0)이 같은 버튼의 color를 정한다. 어느 쪽이 이기고, 왜 그런가?",
    choices: [
      "vendor 쪽. 명시도가 더 높아서",
      "레이어 밖의 .btn. 레이어 비교가 명시도보다 먼저이고 일반 선언은 레이어 밖이 가장 세서",
      "vendor 쪽. 레이어에 넣은 규칙이 레이어 밖보다 우선해서",
      "문서에서 나중에 나온 쪽. 레이어와 명시도는 등장 순서 뒤에 비교해서",
    ],
    answer: 1,
    explanation:
      "캐스케이드는 출처와 중요도, style 속성, 레이어, 명시도, 등장 순서를 차례로 비교하고 앞에서 갈리면 뒤는 보지 않는다. 일반 선언끼리는 레이어 밖의 규칙이 모든 레이어를 이기므로 명시도까지 가지 않는다.",
    anchor: "두-선언이-부딪히면-브라우저가-묻는-순서",
  },
  {
    id: "css-cascade-specificity-2",
    post: "css-cascade-specificity",
    question:
      "`.hidden { display: none !important }`가 걸린 요소에 자바스크립트로 `el.style.display = \"block\"`을 넣었다. 결과는?",
    choices: [
      "보이지 않는다. style 속성의 일반 선언은 !important 선언을 이기지 못해서",
      "보인다. style 속성은 어떤 선택자보다 명시도가 높아서",
      "보인다. 자바스크립트로 넣은 값은 캐스케이드를 거치지 않아서",
      "브라우저마다 다르다. 명세가 이 경우를 정하지 않아서",
    ],
    answer: 0,
    explanation:
      "!important는 첫 번째 질문인 출처와 중요도에서 갈리기 때문에 style 속성의 일반 선언보다 앞선다. style 속성이 선택자를 이기는 건 중요도가 같을 때의 이야기다. 인라인으로도 이기려면 style 속성에 !important를 붙여야 한다.",
    anchor: "style-속성과-important",
  },
  {
    id: "css-cascade-specificity-3",
    post: "css-cascade-specificity",
    question:
      "`.card` 안의 `p.title`에 `:is(#sidebar, .card) p { color: red }`와 `.card p.title { color: blue }`가 걸린다. 요소는 #sidebar 안에 있지 않다. 글자색은?",
    choices: [
      "파란색. 실제로 맞은 건 .card라서 :is() 부분은 (0,1,0)으로 계산되어",
      "파란색. :is()는 점수가 0이라서",
      "빨간색. :is()는 괄호 안에서 가장 센 #sidebar 점수를 써서 (1,0,1)이 되어",
      "빨간색. :is()가 들어간 규칙은 항상 먼저 적용되어",
    ],
    answer: 2,
    explanation:
      ":is()의 명시도는 실제로 맞은 선택자가 아니라 괄호 안에 적힌 것 중 가장 센 선택자의 점수다. 그래서 (1,0,1)이 (0,2,1)을 이긴다. 항상 0점인 건 :where()다.",
    anchor: "명시도는-자리마다-따로-센다",
  },
  {
    id: "css-cascade-specificity-4",
    post: "css-cascade-specificity",
    question:
      "부모가 `font-size: 16px; line-height: 1.5em`이고 자식이 `font-size: 32px`이다. 자식의 줄 간격이 글자보다 작아 줄이 겹치는 이유는?",
    choices: [
      "line-height는 상속되지 않아 초깃값 normal이 쓰여서",
      "em이 부모에서 24px로 계산된 뒤 그 계산된 값이 상속되어서",
      "자식의 font-size가 line-height보다 나중에 계산되어 무시되어서",
      "em은 항상 루트 글자 크기를 기준으로 해서",
    ],
    answer: 1,
    explanation:
      "상속은 부모의 계산된 값을 넘긴다. 1.5em은 부모에서 24px이 되고 자식도 24px을 받는다. 단위 없는 1.5는 숫자 그대로 넘어가 자식 글자 크기에 곱해져 48px이 된다.",
    anchor: "아무도-정하지-않은-속성은-어디서-오나",
  },
  {
    id: "css-cascade-specificity-5",
    post: "css-cascade-specificity",
    question: "div에 `display: initial`을 주면 어떻게 되나?",
    choices: [
      "블록 그대로다. initial은 브라우저 기본값으로 돌아가는 값이라서",
      "부모의 display를 물려받는다",
      "display: none이 된다",
      "인라인이 된다. display의 명세 초깃값이 inline이라서",
    ],
    answer: 3,
    explanation:
      "initial은 브라우저 기본 스타일시트가 아니라 명세에 적힌 속성의 초깃값을 쓴다. div가 블록인 건 기본 스타일시트 덕분이라, 그 값으로 돌아가려면 revert를 써야 한다.",
    anchor: "inherit-initial-unset-revert",
  },
  {
    id: "css-cascade-specificity-6",
    post: "css-cascade-specificity",
    question:
      "`@layer vendor, mine;` 순서에서 vendor에 `.tag { color: red !important }`, mine에 `.tag { color: blue !important }`가 있다. 결과는?",
    choices: [
      "빨간색. important 선언끼리는 레이어 순서가 뒤집혀 먼저 선언한 레이어가 이겨서",
      "파란색. 나중에 선언한 레이어가 항상 이겨서",
      "파란색. 등장 순서가 뒤라서",
      "둘 다 important라 서로 무효가 되어 상속된 색이 쓰인다",
    ],
    answer: 0,
    explanation:
      "important에서는 출처 순서가 뒤집히듯 레이어 순서도 뒤집힌다. 아래 층이 꼭 지키라고 표시한 값을 위층이 덮지 못하게 한 설계다. 그래서 외부 CSS의 !important는 레이어로 내려도 내 일반 선언으로 덮을 수 없다.",
    anchor: "외부-css를-아래-층에-깔기",
  },
  {
    id: "css-cascade-specificity-7",
    post: "css-cascade-specificity",
    question:
      "Styles 패널에서 선언에 취소선과 노란 경고 아이콘이 함께 붙어 있다. 무엇을 뜻하나?",
    choices: [
      "더 높은 명시도의 규칙에 졌다",
      "브라우저가 이해하지 못한 속성이나 값이라 캐스케이드에 참여하지 않았다",
      "적용은 됐지만 이 요소에서는 효과가 없다",
      "조상에게서 상속된 값이다",
    ],
    answer: 1,
    explanation:
      "경고 아이콘이 붙은 취소선은 오타 난 속성 이름이나 단위가 빠진 값처럼 잘못된 선언이다. 단순히 진 선언은 아이콘 없이 취소선만 있고, 효과 없는 선언은 흐린 글씨에 정보 아이콘이 붙는다.",
    anchor: "개발자-도구에서-진-선언-읽기",
  },
];
