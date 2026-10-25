import type { QuizQuestion } from "../types";

export const REACT_RECONCILIATION_KEYS: QuizQuestion[] = [
  {
    id: "react-reconciliation-keys-1",
    post: "react-reconciliation-keys",
    question:
      "tab === \"personal\" ? <AmountInput label=\"개인\" /> : <AmountInput label=\"법인\" /> 에서 탭을 바꿔도 입력한 금액이 남는다. 이유는?",
    choices: [
      "label이 달라도 같은 부모의 같은 자리에 같은 타입이 와서 React가 같은 Fiber를 다시 쓰기 때문이다",
      "AmountInput이 memo로 감싸져 있지 않아서 상태가 공유되기 때문이다",
      "삼항 연산자는 두 갈래를 모두 마운트해 두고 하나만 보여 주기 때문이다",
      "브라우저가 입력칸 값을 자동 완성으로 다시 채우기 때문이다",
    ],
    answer: 0,
    explanation:
      "React는 부모, 형제 사이의 이름(key 또는 순서), 타입이 같으면 이전 Fiber를 다시 쓰고 props만 바꿔 넣는다. 상태는 그 Fiber의 memoizedState에 있으니 그대로 남는다. 갈래마다 다른 key를 주면 초기화된다.",
    anchor: "상태는-컴포넌트가-아니라-자리에-붙는다",
  },
  {
    id: "react-reconciliation-keys-2",
    post: "react-reconciliation-keys",
    question:
      "<>{flag && <Banner />}<Counter /></>는 flag를 꺼도 Counter 상태가 남는데, flag ? <><Banner /><Counter /></> : <Counter />는 초기화된다. 차이는 무엇인가?",
    choices: [
      "&&는 Banner를 숨기기만 하고 언마운트하지 않는다",
      "삼항 연산자 쪽은 Counter에 key가 자동으로 붙지 않는다",
      "&&가 남긴 false도 빈 자리로 세어져 Counter가 계속 1번 자리에 있지만, 삼항 쪽은 Counter가 0번 자리로 당겨진다",
      "Fragment 안의 컴포넌트는 항상 새로 마운트된다",
    ],
    answer: 2,
    explanation:
      "React는 false, null, undefined를 아무것도 그리지 않는 자리로 취급하지만 자리 번호는 센다. 삼항 쪽에서는 Counter가 1번에서 0번 자리로 옮겨 갔고 0번의 이전 타입은 Banner라 짝을 찾지 못한다. Banner도 && 쪽에서는 정상적으로 언마운트된다.",
    anchor: "조건부-렌더링에서-갈리는-다섯-장면",
  },
  {
    id: "react-reconciliation-keys-3",
    post: "react-reconciliation-keys",
    question: "칸반 보드에서 같은 key를 가진 카드를 다른 열(다른 부모)로 옮기면 카드 컴포넌트는 어떻게 되나?",
    choices: [
      "key가 같으니 상태를 유지한 채 DOM 노드만 옮겨진다",
      "key는 같은 부모 아래 형제끼리만 비교되므로 언마운트됐다가 새로 마운트된다",
      "React가 중복 key 경고를 띄우고 렌더링을 멈춘다",
      "이전 열과 새 열에 카드가 하나씩 남는다",
    ],
    answer: 1,
    explanation:
      "key는 형제 안에서만 짝을 짓는 이름표라 부모를 건너가지 못한다. 부모가 달라지면 새 카드로 마운트되어 펼침 상태 같은 것이 사라진다. 그런 상태는 카드 id로 찾는 상위 저장소에 둔다.",
    anchor: "key는-자리를-다시-만드는-스위치다",
  },
  {
    id: "react-reconciliation-keys-4",
    post: "react-reconciliation-keys",
    question: "key가 a b c d인 목록을 d a b c로 바꾸면 React는 DOM 노드를 몇 번 옮기나?",
    choices: [
      "1번. d만 맨 앞으로 옮긴다",
      "0번. key가 같으면 DOM은 건드리지 않는다",
      "4번. 순서가 바뀌면 모두 다시 붙인다",
      "3번. d를 고정하고 a, b, c를 뒤로 옮긴다",
    ],
    answer: 3,
    explanation:
      "placeChild는 재사용한 Fiber의 이전 인덱스가 lastPlacedIndex보다 작으면 이동으로 표시한다. d(이전 3)를 먼저 제자리로 두니 last가 3이 되고, 뒤의 a, b, c는 모두 3보다 작아 이동이다. 최소 이동이 아니라 앞에서부터 훑는 탐욕 규칙이라 맨 뒤를 맨 앞으로 옮길 때 비싸다.",
    anchor: "목록은-두-번-훑는다",
  },
  {
    id: "react-reconciliation-keys-5",
    post: "react-reconciliation-keys",
    question: "Form 컴포넌트 안에서 function Field() { return <input /> }를 정의해 <Field />로 쓰면 글자를 칠 때마다 포커스가 빠진다. 왜 그런가?",
    choices: [
      "렌더링마다 Field가 새 함수 객체가 되어 React가 다른 타입으로 보고 input을 버린 뒤 새로 만들기 때문이다",
      "input에 key가 없어서 React가 인덱스로 짝을 짓기 때문이다",
      "제어 컴포넌트는 값이 바뀔 때마다 포커스를 초기화하기 때문이다",
      "StrictMode가 컴포넌트를 두 번 마운트하기 때문이다",
    ],
    answer: 0,
    explanation:
      "React는 컴포넌트 타입을 참조로 비교한다. 부모 안에서 정의한 함수는 렌더링마다 새로 만들어지니 매번 다른 타입이고, 그 아래 DOM이 새로 만들어지면서 포커스가 body로 빠진다. 렌더 중에 memo나 HOC, lazy를 부르는 것도 같은 문제를 만든다.",
    anchor: "타입이-바뀌는-줄-모르고-바꾸는-코드",
  },
  {
    id: "react-reconciliation-keys-6",
    post: "react-reconciliation-keys",
    question: "같은 자리의 div에서 className과 style.color만 바뀌었다. 사용자가 그 안의 비제어 input에 쳐 둔 글은 어떻게 되나?",
    choices: [
      "style이 바뀌면 React가 div를 새로 만들어 글이 지워진다",
      "React state가 아니라서 렌더링마다 defaultValue로 되돌아간다",
      "같은 타입이라 DOM 노드를 그대로 두고 바뀐 속성만 고치므로 글이 남는다",
      "React 19부터는 비제어 input의 값을 매 렌더링 초기화한다",
    ],
    answer: 2,
    explanation:
      "같은 태그끼리 짝이 맞으면 React는 DOM 노드를 다시 쓰고 바뀐 속성만 고친다. 실험에서도 class와 color만 바뀌고 입력칸의 글은 남았다. DOM이 들고 있는 상태(입력값, 스크롤, 포커스)도 React state와 같은 규칙으로 유지되거나 사라진다.",
    anchor: "같은-타입이면-dom-노드는-그대로-둔다",
  },
];
