import type { QuizQuestion } from "../types";

export const REACT_COMPONENT_PATTERNS: QuizQuestion[] = [
  {
    id: "react-component-patterns-1",
    post: "react-component-patterns",
    question: "Modal에 primaryLabel, danger, isPrimaryLoading 같은 버튼 관련 props가 계속 늘어난다. 가장 알맞은 고침은?",
    choices: [
      "버튼 설정을 buttons 배열 하나로 묶어 받는다",
      "footer 슬롯을 두고 버튼은 쓰는 쪽이 Button으로 직접 만들어 넣게 한다",
      "Modal을 화면마다 복사해 따로 만든다",
      "버튼 설정을 Context로 내려보낸다",
    ],
    answer: 1,
    explanation:
      "props가 느는 원인은 틀인 Modal이 내용까지 정하려 해서다. footer 슬롯으로 돌려주면 버튼의 색과 로딩은 Button이 맡고 Modal은 포커스와 Esc 같은 틀의 일만 남는다. 배열로 묶으면 모양만 바뀌고 설정 객체가 계속 커진다.",
    anchor: "내용은-부모가-만들어-넘긴다",
  },
  {
    id: "react-component-patterns-2",
    post: "react-component-patterns",
    question: "Children.map과 cloneElement로 Tab에 isSelected를 꽂던 Tabs가, Tab을 div로 감싸자 동작하지 않았다. 왜 그런가?",
    choices: [
      "cloneElement는 개발 모드에서만 동작해서",
      "div가 클릭 이벤트를 막아서",
      "Children.map은 직계 자식만 훑어서 감싼 안쪽의 Tab에는 props가 닿지 않아서",
      "React 19에서 cloneElement가 제거되어서",
    ],
    answer: 2,
    explanation:
      "Children.map은 바로 아래 자식만 본다. 한 겹 감싸면 그 자식은 div라서 Tab을 찾지 못한다. Context로 연결하면 몇 단계 아래에 놓여도 부품이 값을 읽는다.",
    anchor: "부품끼리-안쪽에서-이야기한다",
  },
  {
    id: "react-component-patterns-3",
    post: "react-component-patterns",
    question: "훅이 생긴 뒤에도 Render Props가 여전히 알맞은 경우는?",
    choices: [
      "가상화 목록이 화면에 보이는 줄마다 쓰는 쪽의 행 마크업을 그려야 할 때",
      "두 컴포넌트가 마우스 위치 같은 상태 로직을 나눠 쓸 때",
      "컴포넌트에 ref를 전달할 때",
      "전역 상태를 구독할 때",
    ],
    answer: 0,
    explanation:
      "훅은 값을 돌려줄 수는 있지만 라이브러리가 렌더링하는 트리 안쪽에 들어갈 수 없다. 라이브러리가 그리는 자리 한가운데에 쓰는 쪽의 마크업을 끼워야 할 때는 함수를 넘기는 방식이 맞다. 상태 로직을 나누는 일은 커스텀 훅이 대신한다.",
    anchor: "render-props와-hoc가-하던-일",
  },
  {
    id: "react-component-patterns-4",
    post: "react-component-patterns",
    question: "Headless 훅이 onClick을 그대로 돌려주지 않고 getButtonProps({ onClick })처럼 prop getter를 쓰는 이유는?",
    choices: [
      "타입 추론을 빠르게 하려고",
      "렌더링 횟수를 줄이려고",
      "서버 렌더링에서 이벤트를 막으려고",
      "쓰는 쪽 핸들러와 훅의 핸들러를 합쳐, 한쪽이 다른 쪽을 덮어쓰지 않게 하려고",
    ],
    answer: 3,
    explanation:
      "훅의 onClick과 쓰는 쪽 onClick을 둘 다 JSX에 쓰면 뒤의 것이 앞의 것을 덮어 열고 닫기가 고장 난다. prop getter는 쓰는 쪽 값을 받아 둘 다 부르도록 합쳐 준다. aria 속성과 id의 짝도 함께 맞춘다.",
    anchor: "로직만-주고-마크업은-맡긴다",
  },
  {
    id: "react-component-patterns-5",
    post: "react-component-patterns",
    question: "Toggle에 value={false}와 onChange를 넘겼는데 눌러도 켜지지 않는다. 가장 그럴듯한 원인은?",
    choices: [
      "defaultValue를 같이 주지 않아서",
      "부모가 onChange에서 state를 바꾸지 않아 value가 계속 false여서",
      "Toggle이 memo로 감싸져 있어서",
      "onChange가 비동기로 불려서",
    ],
    answer: 1,
    explanation:
      "value가 있으면 제어 모드라 Toggle은 값을 직접 바꾸지 않고 onChange로 요청만 한다. 부모가 그 콜백에서 state를 바꿔 새 value를 내려 줘야 화면이 바뀐다. 제어 모드에서 defaultValue는 쓰이지 않는다.",
    anchor: "제어와-비제어를-둘-다-받는다",
  },
  {
    id: "react-component-patterns-6",
    post: "react-component-patterns",
    question: "Button asChild 안에 Link를 넣었더니 Button의 클래스와 클릭 핸들러가 사라졌다. 무엇을 확인해야 하나?",
    choices: [
      "Link가 받은 나머지 props를 실제 a 태그까지 펼쳐 주고 ref를 받는지",
      "Button의 as prop을 \"a\"로 줬는지",
      "Link를 두 개 넣었는지",
      "Button이 서버 컴포넌트인지",
    ],
    answer: 0,
    explanation:
      "asChild는 Slot으로 자식 하나에 className, 핸들러, ref를 합쳐 넘긴다. 자식 컴포넌트가 ...rest를 버리면 합친 props가 DOM에 닿지 않는다. as는 별개의 방식이라 함께 줄 이유가 없다.",
    anchor: "어떤-태그로-그릴지-바꾼다",
  },
  {
    id: "react-component-patterns-7",
    post: "react-component-patterns",
    question: "비슷한 카드 두 개를 보자마자 GenericCard로 합쳤다가 variant와 renderHeader가 계속 늘었다. 이 글이 권하는 판단은?",
    choices: [
      "처음부터 모든 경우를 받는 설정 객체로 설계했어야 한다",
      "Context로 카드 설정을 내려보내면 해결된다",
      "같은 이유로 세 번쯤 바뀌는 걸 확인한 뒤 합치고, 이미 틀린 추상화는 쓰는 곳에 다시 펼친다",
      "Render Props로 바꾸면 해결된다",
    ],
    answer: 2,
    explanation:
      "틀린 추상화는 쓰는 곳마다 그 모양에 맞춰 비틀어져 중복보다 풀기 어렵다. 겉모양이 같아도 바뀌는 이유가 다르면 따로 두는 게 맞다. 걷어 내고 다시 펼치는 것도 리팩터링이다.",
    anchor: "추상화가-비싸지는-순간",
  },
];
