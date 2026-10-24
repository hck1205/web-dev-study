import type { QuizQuestion } from "../types";

export const CSS_POSITION_STACKING_CONTEXT: QuizQuestion[] = [
  {
    id: "css-position-stacking-context-1",
    post: "css-position-stacking-context",
    question:
      "`position: relative; border: 5px solid; padding: 20px`인 부모 안에서 `position: absolute; top: 0; left: 0`인 자식은 어디에 서나?",
    choices: [
      "부모 테두리 바깥 모서리",
      "부모 테두리 안쪽, padding 바깥 모서리(padding box)",
      "부모의 내용 칸 모서리(padding 20px 안쪽)",
      "뷰포트 왼쪽 위",
    ],
    answer: 1,
    explanation:
      "absolute의 포함 블록은 static이 아닌 가장 가까운 조상의 padding box다. 테두리 바로 안쪽에 붙고 부모의 padding은 무시한다.",
    anchor: "absolute는-누구를-기준으로-서나",
  },
  {
    id: "css-position-stacking-context-2",
    post: "css-position-stacking-context",
    question:
      "등장 애니메이션이 끝나 `transform: translateY(0)`이 남은 카드 안에서 `position: fixed` 모달이 스크롤을 따라 움직인다. 이유는?",
    choices: [
      "translateY(0)이 모달의 z-index를 0으로 만들어서",
      "fixed는 원래 가장 가까운 positioned 조상을 기준으로 해서",
      "transform이 none이 아니면 그 조상이 fixed의 포함 블록이 되어서",
      "애니메이션이 끝나도 브라우저가 레이아웃을 다시 계산하지 않아서",
    ],
    answer: 2,
    explanation:
      "transform, filter, backdrop-filter, contain: paint, 그런 속성의 will-change가 있는 조상은 fixed 후손의 포함 블록이 된다. 값이 0이어도 none이 아니면 해당된다. opacity나 transform: none은 포함 블록을 바꾸지 않는다.",
    anchor: "transform이-있는-조상-안의-fixed",
  },
  {
    id: "css-position-stacking-context-3",
    post: "css-position-stacking-context",
    question:
      "`position: relative; z-index: 1`인 main 안의 모달(z-index 9999)이 `z-index: 10`인 헤더 밑에 깔린다. 가장 근본적인 해결은?",
    choices: [
      "모달의 z-index를 2147483647로 올린다",
      "헤더의 z-index를 지운다",
      "모달에 position: fixed를 다시 적는다",
      "모달을 main 밖, body 바로 아래에서 그린다(포털)",
    ],
    answer: 3,
    explanation:
      "main이 쌓임 맥락이라 바깥에서는 main의 1과 헤더의 10만 비교되고, 모달의 숫자는 판 안에서만 쓰인다. 숫자를 올려도 소용없고, 모달을 그 맥락 밖으로 꺼내야 한다. 헤더 z-index를 지우면 다른 곳에서 헤더가 깔린다.",
    anchor: "z-index-9999가-지는-이유",
  },
  {
    id: "css-position-stacking-context-4",
    post: "css-position-stacking-context",
    question:
      "hover 시 `opacity: 0.9`가 되는 카드 안의 툴팁(absolute, z-index 9999)이 바로 다음 카드(position: relative, z-index 없음) 밑에 깔린다. 왜 그런가?",
    choices: [
      "opacity가 카드를 쌓임 맥락으로 만들어 바깥에서는 z-index 0 단계로 비교되고, 같은 단계에서는 나중 요소가 위라서",
      "opacity 1 미만 요소의 후손은 z-index가 무시되어 static으로 바뀌어서",
      "다음 카드의 relative가 자동으로 z-index: 1이 되어서",
      "툴팁이 카드의 overflow에 잘려서",
    ],
    answer: 0,
    explanation:
      "opacity 1 미만은 쌓임 맥락을 만들고, 그 판은 z-index 0·auto인 positioned 요소와 같은 단계에서 문서 순서대로 칠해진다. 다음 카드가 나중이니 위에 온다. 툴팁의 9999는 카드 판 안에서만 쓰인다.",
    anchor: "쌓임-맥락을-만드는-속성",
  },
  {
    id: "css-position-stacking-context-5",
    post: "css-position-stacking-context",
    question:
      "같은 쌓임 맥락 안에서 `position: relative`(z-index 없음) 상자와 float 상자가 겹친다. 어느 쪽이 위에 보이나?",
    choices: [
      "float. float는 항상 흐름 위에 떠서",
      "relative 상자. positioned 요소(z 0·auto)는 float와 인라인 내용 뒤에 칠해져서",
      "문서에서 나중에 나온 쪽",
      "z-index가 없으니 둘 다 같은 층이라 브라우저마다 다르다",
    ],
    answer: 1,
    explanation:
      "칠하는 순서는 맥락 배경, 음수 z, 일반 블록, float, 인라인, z 0·auto positioned, 양수 z다. positioned 요소가 float보다 나중에 칠해지니 위에 보인다. 문서 순서는 같은 단계 안에서만 쓰인다.",
    anchor: "한-맥락-안에서-칠하는-순서",
  },
  {
    id: "css-position-stacking-context-6",
    post: "css-position-stacking-context",
    question:
      "글자 뒤에 깔려고 `z-index: -1`을 준 장식이 부모 배경 밑으로 사라졌다. 부모에 무엇을 주면 장식이 부모 배경 위, 글자 아래에 서나?",
    choices: [
      "overflow: hidden",
      "z-index: -2",
      "isolation: isolate",
      "position: static",
    ],
    answer: 2,
    explanation:
      "부모가 쌓임 맥락이 아니면 음수 z 장식은 더 위쪽 맥락에서 칠해져 부모 배경에 덮인다. isolation: isolate로 부모를 맥락으로 만들면 부모 배경을 먼저 칠한 뒤 장식을 칠한다. 부모 자신의 위치나 순위는 바뀌지 않는다.",
    anchor: "한-맥락-안에서-칠하는-순서",
  },
  {
    id: "css-position-stacking-context-7",
    post: "css-position-stacking-context",
    question:
      "transform이 있는 조상 안에 둔 `dialog`를 `showModal()`로 열었다. 화면에는 z-index 2147483647인 fixed 요소도 있다. 결과는?",
    choices: [
      "dialog가 조상의 transform에 갇혀 조상 크기 안에 뜬다",
      "z-index 최댓값 요소가 dialog를 덮는다",
      "dialog를 body로 옮기기 전에는 열리지 않는다",
      "dialog가 top layer에 올라가 모든 쌓임 맥락 위, 뷰포트 기준으로 뜬다",
    ],
    answer: 3,
    explanation:
      "showModal()과 popover는 요소를 top layer에 올린다. top layer는 문서의 모든 쌓임 맥락보다 위에 있고 transform 조상의 포함 블록에도 갇히지 않는다. DOM을 옮기지 않고 포털과 같은 효과를 얻는다.",
    anchor: "모달은-body-아래로",
  },
];
