import type { QuizQuestion } from "../types";

export const SPACING_SIZING_TYPE_SCALE: QuizQuestion[] = [
  {
    id: "spacing-sizing-type-scale-1",
    post: "spacing-sizing-type-scale",
    question: "기기 픽셀 비율이 1.5인 화면에서 5px 대신 4의 배수 간격을 쓰면 좋은 이유는?",
    choices: [
      "4의 배수만 CSS에서 rem으로 바꿀 수 있어서",
      "8px은 기기 픽셀 12개로 딱 떨어지지만 5px은 7.5개가 되어 경계가 픽셀 중간에 걸려 흐려질 수 있어서",
      "1.5배 화면은 홀수 px 값을 무시해서",
      "4의 배수를 쓰면 브라우저가 레이아웃을 다시 계산하지 않아서",
    ],
    answer: 1,
    explanation:
      "CSS 픽셀에 DPR을 곱한 값이 정수가 아니면 선과 경계가 기기 픽셀 사이에 걸려 번진다. 4의 배수는 1.5배에서도 정수로 떨어지고, 반으로 나눠도 정수가 남는다.",
    anchor: "기본-단위-하나를-정한다-4pt와-8pt",
  },
  {
    id: "spacing-sizing-type-scale-2",
    post: "spacing-sizing-type-scale",
    question: "간격 스케일의 큰 값 쪽을 4px 간격으로 촘촘하게 두지 않는 이유는?",
    choices: [
      "사람은 차이를 비율로 느껴서 56px과 60px처럼 큰 값의 작은 차이는 거의 구분되지 않아서",
      "CSS 변수는 열 개 넘게 만들 수 없어서",
      "큰 값은 브라우저가 자동으로 8의 배수로 반올림해서",
      "큰 여백은 clamp()로만 쓸 수 있어서",
    ],
    answer: 0,
    explanation:
      "4px과 8px은 두 배 차이라 확실히 다르지만 56px과 60px은 7% 차이라 같아 보인다. 구분되지 않는 값을 여럿 두면 고르는 사람만 헷갈리니 큰 쪽은 성글게 둔다.",
    anchor: "간격-스케일은-점점-벌어진다",
  },
  {
    id: "spacing-sizing-type-scale-3",
    post: "spacing-sizing-type-scale",
    question: "카드 안 제목과 본문 사이가 16px이고 카드와 카드 사이가 12px이면 어떤 문제가 생기나?",
    choices: [
      "카드의 그림자가 겹쳐 그려진다",
      "터치 대상 크기 기준을 어긴다",
      "줄 높이가 4의 배수에서 벗어난다",
      "눈이 간격을 먼저 읽어 위 카드 본문과 아래 카드 제목을 한 덩어리로 묶어 본다",
    ],
    answer: 3,
    explanation:
      "가까운 것끼리 묶어 보는 근접성 때문에 안쪽 여백이 바깥 여백보다 크면 묶음이 뒤바뀌어 보인다. 그래서 안쪽 여백은 바깥 여백보다 작거나 같게 둔다.",
    anchor: "안쪽-여백은-바깥-여백보다-작게",
  },
  {
    id: "spacing-sizing-type-scale-4",
    post: "spacing-sizing-type-scale",
    question: "1.2 스케일에 \"24px 이상은 1.25배, 아래는 1.5배\" 규칙으로 4px 줄 높이를 붙였더니 23px과 28px이 모두 36px이 됐다. 이유는?",
    choices: [
      "4px 그리드는 32px 이상을 표현할 수 없어서",
      "Math.round가 소수 첫째 자리만 보기 때문에",
      "24px 경계에서 줄 높이 비율이 1.5에서 1.25로 바뀌어 큰 글자의 줄 높이가 덜 커졌기 때문에",
      "1.2 비율은 음정 이름이 없어서 스케일로 쓸 수 없기 때문에",
    ],
    answer: 2,
    explanation:
      "23 × 1.5 = 34.5는 36으로, 28 × 1.25 = 35도 36으로 반올림된다. 규칙이 바뀌는 경계에서 생긴 겹침이라, 23px 쪽을 32px로 내리는 식으로 손으로 다듬는다.",
    anchor: "줄-높이를-그리드에-붙인다",
  },
  {
    id: "spacing-sizing-type-scale-5",
    post: "spacing-sizing-type-scale",
    question: "14px 글자(줄 높이 20px) 옆에 아이콘을 둘 때 가장 정렬이 쉬운 방법은?",
    choices: [
      "아이콘을 14px로 만들고 vertical-align: baseline으로 둔다",
      "아이콘 상자를 20px로 두고 16px 그림을 넣어 inline-flex와 align-items: center로 가운데를 맞춘다",
      "아이콘에 position: absolute를 주고 top: 3px로 내린다",
      "글자의 line-height를 아이콘 크기에 맞춰 16px로 줄인다",
    ],
    answer: 1,
    explanation:
      "아이콘 상자 높이를 줄 높이와 같게 두면 위아래로 2px씩 남아 글자 줄과 가운데가 맞는다. 기본 baseline 정렬은 기준선 아래 꼬리 자리만큼 비어 아이콘이 떠 보인다.",
    anchor: "아이콘-상자를-줄-높이에-맞춘다",
  },
  {
    id: "spacing-sizing-type-scale-6",
    post: "spacing-sizing-type-scale",
    question: "`@media (min-width: var(--bp-tablet))`이 동작하지 않는 이유는?",
    choices: [
      "CSS 변수는 요소에 붙는 값인데 미디어 쿼리는 요소와 상관없이 문서 전체에서 판단하기 때문",
      "min-width에는 px만 쓸 수 있고 변수는 문자열이기 때문",
      "미디어 쿼리 안의 변수는 :root가 아니라 body에서만 읽기 때문",
      "var()는 @layer 안에서만 동작하기 때문",
    ],
    answer: 0,
    explanation:
      "미디어 쿼리 조건에는 CSS 변수를 쓸 수 없다. 그래서 브레이크포인트는 TypeScript 상수로 두고 미디어 쿼리 문자열을 만들거나, 빌드 도구로 @custom-media를 펼친다.",
    anchor: "브레이크포인트-토큰은-따로-둔다",
  },
  {
    id: "spacing-sizing-type-scale-7",
    post: "spacing-sizing-type-scale",
    question: "간격 토큰은 rem으로 두면서 테두리 두께는 px로 두는 이유로 맞는 것은?",
    choices: [
      "border-width는 rem 단위를 지원하지 않아서",
      "rem 테두리는 다크 모드에서 색이 바뀌어서",
      "px 테두리만 box-sizing: border-box에 포함되어서",
      "기본 글자 크기를 키울 때 여백은 함께 커져야 비율이 유지되지만, 1px 선은 커질 이유가 없고 1.25px처럼 되면 흐려져서",
    ],
    answer: 3,
    explanation:
      "토큰 단위는 사용자가 기본 글자 크기를 키웠을 때 함께 커져야 하는지로 정한다. 글자와 여백은 함께 커져야 답답하지 않고, 선과 그림자 오프셋은 고정해야 또렷하다.",
    anchor: "rem으로-정할까-px로-정할까",
  },
];
