import type { QuizQuestion } from "../types";

export const REACT_RERENDER: QuizQuestion[] = [
  {
    id: "react-rerender-1",
    post: "react-rerender",
    question: "props가 하나도 없는 Header가 부모 SearchPage의 state가 바뀔 때마다 다시 렌더링된다. 이유는?",
    choices: [
      "Header가 context를 읽고 있어서",
      "부모가 렌더링되면 자식은 props와 상관없이 기본으로 다시 렌더링되어서",
      "StrictMode가 렌더링을 두 번 일으켜서",
      "Header의 key가 렌더링마다 바뀌어서",
    ],
    answer: 1,
    explanation:
      "React는 부모가 렌더링되면 그 아래 자식을 props가 바뀌었는지 보지 않고 전부 다시 렌더링한다. 이걸 끊으려면 상태를 아래로 옮기거나 자식을 memo로 감싼다. StrictMode의 이중 호출은 개발 모드의 검사일 뿐 렌더링 원인이 아니다.",
    anchor: "다시-렌더링되는-이유는-따로-있다",
  },
  {
    id: "react-rerender-2",
    post: "react-rerender",
    question: "줄마다 입력칸이 있는 목록에서 인덱스를 key로 쓰고 맨 앞에 항목을 넣었다. 어떤 일이 생기나?",
    choices: [
      "새 항목만 마운트되고 나머지는 그대로다",
      "React가 경고를 띄우고 렌더링을 멈춘다",
      "모든 줄이 언마운트됐다가 새로 마운트된다",
      "기존 컴포넌트가 한 칸씩 다른 항목의 props를 받아, 입력칸 상태가 엉뚱한 항목에 붙는다",
    ],
    answer: 3,
    explanation:
      "React는 key로 이전 컴포넌트와 짝을 찾는데, 인덱스 key는 위치를 가리키므로 key 0의 컴포넌트가 이제 새 항목의 props를 받는다. 컴포넌트 안의 state는 자리에 남아 한 칸씩 어긋난다. 모든 줄이 새로 마운트되는 건 렌더링마다 무작위 key를 만들 때의 일이다.",
    anchor: "이전-트리와-짝을-맞추는-규칙",
  },
  {
    id: "react-rerender-3",
    post: "react-rerender",
    question: "memo로 감싼 ProductItem에 onSelect={() => open(p.id)}를 넘기면 memo가 거의 효과가 없다. 왜 그런가?",
    choices: [
      "화살표 함수는 렌더링마다 새로 만들어져 Object.is 비교에서 매번 다르다고 판정되어서",
      "memo는 함수 props를 비교하지 않고 항상 렌더링해서",
      "화살표 함수는 직렬화할 수 없어서",
      "memo는 props가 세 개 이상이면 비교를 포기해서",
    ],
    answer: 0,
    explanation:
      "memo는 각 prop을 Object.is로 비교하는데, 함수와 객체는 내용이 아니라 참조를 본다. 렌더링마다 새로 만든 함수는 늘 다른 값이라 memo가 매번 렌더링을 허락한다. useCallback으로 참조를 고정하면 해결된다.",
    anchor: "내용이-같아도-다른-객체",
  },
  {
    id: "react-rerender-4",
    post: "react-rerender",
    question: "useCallback이 실제로 렌더링을 줄여 주는 경우는?",
    choices: [
      "어떤 자식에 넘기든 항상",
      "함수 본문이 길어서 생성 비용이 클 때",
      "memo로 감싼 자식에 넘기거나 다른 훅의 의존성 배열에 들어갈 때",
      "이벤트 핸들러를 DOM 요소에 직접 붙일 때",
    ],
    answer: 2,
    explanation:
      "useCallback은 렌더링 사이에 같은 함수 참조를 돌려줄 뿐 그 자체로 렌더링을 막지 않는다. 받는 쪽이 memo로 비교하거나 의존성 배열로 참조를 볼 때만 의미가 있다. memo 없는 자식에 넘기면 자식은 어차피 부모를 따라 렌더링되고 비교 비용만 는다.",
    anchor: "memo와-usememo-usecallback이-듣는-경우",
  },
  {
    id: "react-rerender-5",
    post: "react-rerender",
    question: "Provider에 value={{ items, setItems }}를 넘기는 CartProvider의 문제와 가장 알맞은 개선은?",
    choices: [
      "문제없다. context는 바뀐 필드를 읽는 컴포넌트만 렌더링한다",
      "렌더링마다 새 객체라 구독자 전부가 깨어난다. value를 고정하고 상태와 dispatch를 다른 context로 나눈다",
      "setItems는 context로 넘길 수 없으니 props로 내려야 한다",
      "구독하는 컴포넌트를 memo로 감싸면 해결된다",
    ],
    answer: 1,
    explanation:
      "value가 Object.is로 달라지면 그 context를 읽는 모든 컴포넌트가 다시 렌더링되고, memo도 이걸 막지 못한다. useContext에는 일부만 구독하는 selector가 없으므로, 참조가 바뀌지 않는 dispatch를 별도 context로 빼면 버튼 같은 컴포넌트는 깨어나지 않는다.",
    anchor: "context는-값이-바뀌면-구독자를-전부-깨운다",
  },
  {
    id: "react-rerender-6",
    post: "react-rerender",
    question: "async 핸들러에서 await 전에 setState 2번, await 뒤에 setState 2번을 부른다. createRoot로 띄운 React 18 앱의 렌더링 횟수는?",
    choices: ["1번", "4번", "3번", "2번"],
    answer: 3,
    explanation:
      "React 18은 await 뒤의 업데이트도 자동으로 배칭한다. await 전 두 업데이트가 한 번, await 뒤 두 업데이트가 한 번 렌더링되어 모두 2번이다. React 17이었다면 await 뒤의 setState가 각각 바로 렌더링되어 3번이 된다.",
    anchor: "여러-번-바꿔도-렌더링은-한-번",
  },
  {
    id: "react-rerender-7",
    post: "react-rerender",
    question: "검색어에 useDeferredValue를 적용했는데 입력이 여전히 버벅인다. 가장 먼저 의심할 것은?",
    choices: [
      "미룬 값을 받는 목록 컴포넌트가 memo로 감싸져 있지 않다",
      "디바운스 시간을 지정하지 않았다",
      "useDeferredValue는 React 18에서 동작하지 않는다",
      "입력창 value에 deferredQuery를 넣지 않았다",
    ],
    answer: 0,
    explanation:
      "급한 렌더링에서 부모가 렌더링될 때 목록이 memo가 아니면 같이 렌더링되어 미룬 의미가 없다. 미룬 값은 받는 쪽이 건너뛸 수 있어야 효과가 있다. 입력창 value에 미룬 값을 넣으면 오히려 입력이 늦게 따라온다.",
    anchor: "급한-업데이트와-미뤄도-되는-업데이트",
  },
  {
    id: "react-rerender-8",
    post: "react-rerender",
    question: "useEffect 안에서 fetch한 결과를 setItems로 넣는데, 의존성 배열에 렌더링마다 새로 만드는 filters 객체가 들어 있다. 무슨 일이 생기나?",
    choices: [
      "React가 Maximum update depth exceeded 에러를 던지고 멈춘다",
      "filters 내용이 같으니 effect는 처음 한 번만 돈다",
      "콘솔에 아무것도 안 찍힌 채 같은 요청이 끝없이 반복된다",
      "StrictMode에서만 두 번 요청하고 끝난다",
    ],
    answer: 2,
    explanation:
      "의존성은 Object.is로 비교하니 새 객체는 매번 바뀐 것으로 보이고, 응답이 올 때마다 새 배열로 상태를 바꿔 다시 렌더링된다. 요청이 비동기라 React의 무한 루프 검사에도 걸리지 않아서, 실제로 재 보면 개발 빌드에서도 경고 없이 3초에 천 번 넘게 요청이 나간다. Network 탭이나 서버 요청 수로 알아챈다.",
    anchor: "렌더링이-멈추지-않을-때-남는-흔적",
  },
];
