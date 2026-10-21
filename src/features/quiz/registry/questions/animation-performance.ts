import type { QuizQuestion } from "../types";

export const ANIMATION_PERFORMANCE: QuizQuestion[] = [
  {
    id: "animation-performance-1",
    post: "animation-performance",
    question: "상자 400개를 2초 동안 움직이며 트레이스를 떴다. transform 애니메이션에서 메인 스레드의 Layout·스타일 계산·Paint가 모두 0회였던 이유는?",
    choices: [
      "transform은 GPU 메모리를 쓰지 않기 때문이다",
      "이미 그린 층을 옮기기만 하는 일이라 합성 단계에서 끝나고, 합성 스레드가 돌리기 때문이다",
      "트레이스가 transform 애니메이션을 기록하지 못하기 때문이다",
      "transform은 1초에 한 번만 갱신되기 때문이다",
    ],
    answer: 1,
    explanation:
      "transform과 opacity는 그려 둔 층의 위치와 투명도만 바꾸면 되어 레이아웃과 페인트가 필요 없다. 크롬 계열에서는 이 애니메이션을 합성 스레드에 넘겨서 메인 스레드는 쉰다. 같은 조건에서 left는 레이아웃 119회, 페인트 이벤트 4만 7천 개가 생겼다.",
    anchor: "속성마다-깨우는-단계가-다르다",
  },
  {
    id: "animation-performance-2",
    post: "animation-performance",
    question: "background-color 애니메이션은 트레이스에서 어떻게 나타났나?",
    choices: [
      "Layout과 Paint가 모두 0회였다",
      "Layout은 0회지만 매 프레임 스타일 계산과 Paint가 일어났고, 합성 실패 이유에 background-color가 찍혔다",
      "Layout만 매 프레임 일어났다",
      "합성 스레드에서 돌아 compositeFailed가 0이었다",
    ],
    answer: 1,
    explanation:
      "색은 위치를 바꾸지 않으니 레이아웃은 건너뛰지만 그림이 달라져 매 프레임 다시 그린다. 트레이스의 Animation 이벤트에는 compositeFailed 8192와 unsupportedProperties: [\"background-color\"]가 남았다. 색 변화는 두 층을 겹치고 opacity를 바꾸는 식으로 대신할 수 있다.",
    anchor: "합성-단계에서-끝나는-애니메이션",
  },
  {
    id: "animation-performance-3",
    post: "animation-performance",
    question: "카드 400개에 CSS로 `will-change: transform`을 항상 걸어 두었다. 실제로 일어난 일과 권장 방식으로 맞는 것은?",
    choices: [
      "층 수는 그대로라 아무 영향이 없다",
      "층이 4개에서 404개로 늘어 메모리를 더 쓴다. 움직이기 직전에 걸고 끝나면 auto로 되돌린다",
      "모든 애니메이션이 자동으로 2배 빨라진다",
      "will-change: left로 바꾸면 층이 줄면서 left 애니메이션도 합성된다",
    ],
    answer: 1,
    explanation:
      "will-change는 요소를 미리 별도 층으로 올린다. 400개에 걸자 층이 404개가 되었고 층마다 그림을 따로 들고 있어 메모리를 쓴다. will-change: left는 층을 만들지 않았다. 합성할 수 없는 속성이라 미리 알려도 소용이 없다.",
    anchor: "will-change는-층을-미리-만든다",
  },
  {
    id: "animation-performance-4",
    post: "animation-performance",
    question: "500ms마다 120ms짜리 작업을 끼워 넣고 rAF 간격을 쟀더니 중앙값은 16.7ms였다. 이 결과를 어떻게 읽어야 하나?",
    choices: [
      "중앙값이 정상이니 사용자는 끊김을 못 느낀다",
      "rAF 측정이 고장 났다",
      "끊김은 최대 간격(116.7ms)과 긴 프레임 개수에서 드러나므로 중앙값이 아니라 꼬리를 봐야 한다",
      "120Hz 화면에서만 문제가 된다",
    ],
    answer: 2,
    explanation:
      "대부분의 프레임은 정상이라 중앙값은 멀쩡하지만, 긴 작업이 낀 순간 한 번에 100ms 넘게 비면서 2초에 프레임 16개가 사라졌다. 사용자가 느끼는 건 그 순간의 멈춤이라 최댓값과 긴 프레임 수를 본다.",
    anchor: "한-프레임에-쓸-수-있는-시간",
  },
  {
    id: "animation-performance-5",
    post: "animation-performance",
    question: "rAF 간격만으로 애니메이션의 부드러움을 판단하면 놓치는 경우는?",
    choices: [
      "합성 스레드에서만 도는 애니메이션은 메인 스레드가 막혀도 움직일 수 있어 rAF 간격과 실제 부드러움이 다를 수 있다",
      "rAF는 탭이 보일 때만 호출되므로 측정이 불가능하다",
      "rAF는 항상 33ms 간격이라 60fps를 잴 수 없다",
      "rAF는 CSS 애니메이션이 있으면 호출되지 않는다",
    ],
    answer: 0,
    explanation:
      "rAF는 메인 스레드의 프레임을 보여 준다. transform 애니메이션처럼 합성 스레드로 넘어간 움직임은 메인 스레드와 따로 돌 수 있어서, 트레이스의 Layout·Paint 이벤트와 합성 여부를 같이 봐야 전체가 보인다.",
    anchor: "끊김을-재는-방법",
  },
  {
    id: "animation-performance-6",
    post: "animation-performance",
    question: "운영체제에서 움직임 줄이기를 켠 사용자를 위한 대응으로 가장 알맞은 것은?",
    choices: [
      "모든 애니메이션과 전환을 완전히 없앤다",
      "아무것도 하지 않는다. 브라우저가 알아서 모든 애니메이션을 끈다",
      "위치 이동·확대·패럴랙스는 빼고 필요한 상태 변화는 짧은 투명도 변화로 바꾸며, JS 애니메이션은 matchMedia로 직접 끈다",
      "애니메이션 속도를 두 배로 빠르게 한다",
    ],
    answer: 2,
    explanation:
      "reduce는 없애 달라가 아니라 줄여 달라는 뜻이다. Playwright로 흉내 내면 미디어 쿼리 안의 규칙대로 slide 600ms가 fade 200ms로 바뀐다. 스프링이나 자동 캐러셀처럼 JS로 움직이는 것은 CSS가 막아 주지 않으니 직접 설정을 읽는다.",
    anchor: "움직임이-불편한-사람들",
  },
  {
    id: "animation-performance-7",
    post: "animation-performance",
    question: "홈 화면에 저절로 넘어가는 캐러셀을 넣었다. 가장 직접 걸리는 WCAG 기준은?",
    choices: [
      "2.3.3 Animation from Interactions (AAA)",
      "2.2.2 Pause, Stop, Hide (A)",
      "1.4.3 대비 (AA)",
      "2.4.7 포커스 표시 (AA)",
    ],
    answer: 1,
    explanation:
      "저절로 시작해 5초 넘게 움직이고 다른 내용과 함께 보이면 2.2.2에 따라 멈출 수 있어야 한다. 2.3.3은 사용자의 동작으로 생기는 움직임을 끌 수 있게 하라는 기준이라 저절로 넘어가는 캐러셀과는 대상이 다르다.",
    anchor: "접근성-기준에서-보는-움직임",
  },
];
