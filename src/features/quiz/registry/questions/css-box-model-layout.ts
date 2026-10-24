import type { QuizQuestion } from "../types";

export const CSS_BOX_MODEL_LAYOUT: QuizQuestion[] = [
  {
    id: "css-box-model-layout-1",
    post: "css-box-model-layout",
    question:
      "390px 화면에서 `width: 100%; padding: 16px; border: 2px solid`인 카드가 가로 스크롤을 만든다. box-sizing은 기본값이다. 실제 너비와 이유는?",
    choices: [
      "390px. width: 100%는 항상 테두리까지 포함해서",
      "422px. padding만 바깥에 더해지고 border는 안쪽에 그려져서",
      "426px. content-box에서 width는 내용 칸이라 padding 32px과 border 4px이 더해져서",
      "406px. 한쪽 padding만 더해져서",
    ],
    answer: 2,
    explanation:
      "box-sizing의 초깃값 content-box에서 width는 내용 칸의 너비다. 390 + 16 × 2 + 2 × 2 = 426px이 된다. border-box로 바꾸면 width가 테두리 바깥까지라 390px에 맞는다.",
    anchor: "width가-가리키는-겹을-바꾸는-box-sizing",
  },
  {
    id: "css-box-model-layout-2",
    post: "css-box-model-layout",
    question: "`span`에 `width: 200px; margin: 20px`을 줬다. 어떻게 되나?",
    choices: [
      "width는 무시되고, 위아래 margin도 줄 높이에 영향을 주지 않는다",
      "200px 너비로 그려지고 위아래 margin 20px이 생긴다",
      "width만 적용되고 margin은 모두 무시된다",
      "span이 자동으로 inline-block이 된다",
    ],
    answer: 0,
    explanation:
      "인라인 상자는 글자처럼 줄 안에 흐르므로 width와 height가 무시되고, 위아래 margin은 효과가 없다. 좌우 margin과 padding은 적용된다. 크기를 가져야 하면 inline-block으로 바꾼다.",
    anchor: "블록은-줄을-차지하고-인라인은-줄-안에-들어간다",
  },
  {
    id: "css-box-model-layout-3",
    post: "css-box-model-layout",
    question:
      "배경색이 있는 div 안의 첫 자식 h2에 margin-top: 30px을 줬더니 제목과 배경 위쪽 사이가 아니라 div 바깥에 여백이 생겼다. 고치는 방법으로 맞지 않는 것은?",
    choices: [
      "부모에 padding-top: 1px을 준다",
      "부모에 display: flow-root를 준다",
      "부모를 flex 컨테이너로 만든다",
      "h2의 margin-top을 margin-left로 바꿔 본다",
    ],
    answer: 3,
    explanation:
      "부모와 첫 자식의 위 마진이 맞닿아 합쳐진 것이라, 둘 사이에 padding·border를 두거나 부모가 새 BFC나 flex 컨테이너가 되면 상쇄가 끊긴다. 좌우 마진은 원래 합쳐지지 않지만 위 여백 문제를 풀지는 못한다.",
    anchor: "위아래-마진이-하나로-합쳐질-때",
  },
  {
    id: "css-box-model-layout-4",
    post: "css-box-model-layout",
    question:
      "위 상자 margin-bottom: 24px, 아래 상자 margin-top: -10px이 맞닿았다. 두 상자 사이 거리는?",
    choices: ["34px", "24px", "14px", "-10px"],
    answer: 2,
    explanation:
      "합쳐진 마진은 양수 중 가장 큰 값과 음수 중 가장 작은 값을 더한다. 24 + (-10) = 14px이다. 양수끼리라면 큰 값 하나만 남는다.",
    anchor: "합쳐진-마진을-직접-계산해-보기",
  },
  {
    id: "css-box-model-layout-5",
    post: "css-box-model-layout",
    question:
      "float 자식만 있는 부모의 높이가 0이 됐다. display: flow-root로 고쳐지는 이유는?",
    choices: [
      "flow-root가 자식의 float를 none으로 바꿔서",
      "부모가 새 블록 서식 맥락이 되어 안의 float를 높이 계산에 넣어서",
      "flow-root가 부모에 clear: both를 자동으로 줘서",
      "부모가 인라인 블록이 되어 내용에 맞게 늘어나서",
    ],
    answer: 1,
    explanation:
      "새 BFC는 안쪽 float를 높이 계산에 포함한다. overflow: hidden도 BFC를 만들지만 그림자·드롭다운이 잘리고 sticky 기준이 바뀌는 부작용이 있다. flow-root는 다른 효과 없이 BFC만 만든다.",
    anchor: "새-블록-서식-맥락-만들기",
  },
  {
    id: "css-box-model-layout-6",
    post: "css-box-model-layout",
    question:
      "너비 300px 부모 안의 자식에 `padding-top: 50%`를 줬다. 자식의 높이는? (내용 없음)",
    choices: [
      "0px. 부모 높이가 auto라 퍼센트가 무시되어서",
      "부모 높이의 50%",
      "150px. 위아래 padding의 퍼센트도 포함 블록의 너비를 기준으로 해서",
      "자식 자신의 너비 50%",
    ],
    answer: 2,
    explanation:
      "padding과 margin의 퍼센트는 네 방향 모두 포함 블록의 너비를 기준으로 한다. 높이를 기준으로 하면 순환이 생기기 때문이다. 퍼센트가 auto로 무시되는 건 부모 높이가 정해지지 않았을 때의 height 퍼센트다.",
    anchor: "퍼센트-padding은-부모-너비를-본다",
  },
  {
    id: "css-box-model-layout-7",
    post: "css-box-model-layout",
    question:
      "가로 넘침을 막으려고 overflow-x: hidden만 줬는데 세로 스크롤바가 생기고 아래로 펼쳐지던 메뉴가 잘린다. 이유는?",
    choices: [
      "한 축이 hidden이고 다른 축이 visible이면 다른 축이 auto로 바뀌어서",
      "overflow-x가 overflow-y까지 hidden으로 덮어써서",
      "hidden은 요소 높이를 0으로 만들어서",
      "브라우저 버그라 overflow: clip으로도 같은 일이 생긴다",
    ],
    answer: 0,
    explanation:
      "한 축이 hidden·auto·scroll인데 다른 축이 visible이면 그 축의 계산값이 auto가 된다. overflow-x: clip은 스크롤 컨테이너를 만들지 않아 다른 축이 visible로 남는다.",
    anchor: "넘치는-내용을-다루는-overflow",
  },
];
