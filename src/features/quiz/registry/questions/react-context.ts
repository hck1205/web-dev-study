import type { QuizQuestion } from "../types";

export const REACT_CONTEXT: QuizQuestion[] = [
  {
    id: "react-context-1",
    post: "react-context",
    question: "Provider 아래에 memo로 감싼 Middle이 있고, 그 아래 Leaf가 context를 읽는다. Provider 값이 바뀌면?",
    choices: [
      "Middle이 렌더링을 건너뛰니 Leaf도 렌더링되지 않는다",
      "Middle과 Leaf가 모두 렌더링된다",
      "Middle은 건너뛰고 Leaf만 따로 렌더링된다",
      "Provider 아래 모든 컴포넌트가 memo와 상관없이 렌더링된다",
    ],
    answer: 2,
    explanation:
      "React는 value가 바뀌면 그 context를 읽는 컴포넌트를 찾아 렌더링을 예약한다. memo는 props만 비교하므로 Middle은 건너뛰지만 Leaf는 context 변경으로 깨어난다. 실험에서도 Middle 1번, Leaf 4번이었다.",
    anchor: "값이-바뀌면-일어나는-일",
  },
  {
    id: "react-context-2",
    post: "react-context",
    question: "Provider의 value를 useMemo로 고정했는데도 장바구니 담기 버튼(add만 사용)이 담을 때마다 렌더링된다. 이유는?",
    choices: [
      "items가 실제로 바뀌어 value가 새 객체가 되고, 같은 context를 읽는 버튼도 깨어나서",
      "useMemo는 context value에 쓸 수 없어서",
      "add 함수를 useCallback으로 감싸지 않아서",
      "버튼이 memo로 감싸져 있지 않아서",
    ],
    answer: 0,
    explanation:
      "useMemo는 Provider가 상관없는 이유로 렌더링될 때 새 객체가 생기는 것만 막는다. items가 바뀌면 value도 바뀌는 게 맞고, 그 context를 읽는 모든 소비자가 깨어난다. 상태와 동작을 다른 context로 나누면 버튼은 렌더링되지 않는다.",
    anchor: "상태와-동작을-나누면",
  },
  {
    id: "react-context-3",
    post: "react-context",
    question: "로그인 정보 context의 기본값을 null로 두고 커스텀 훅에서 에러를 던지게 하는 이유로 가장 알맞은 것은?",
    choices: [
      "null이 아니면 TypeScript가 컴파일되지 않아서",
      "기본값은 Provider가 있어도 항상 먼저 쓰여서",
      "기본값이 객체면 리렌더링이 늘어나서",
      "Provider를 빠뜨렸을 때 가짜 기본값으로 조용히 동작하지 않고 바로 실패하게 하려고",
    ],
    answer: 3,
    explanation:
      "기본값은 위에 Provider가 하나도 없을 때만 쓰인다. 그럴듯한 가짜 객체를 넣어 두면 Provider를 빼먹어도 에러 없이 돌아가 로그인 버튼이 아무 일도 안 하는 버그가 된다. null과 에러로 일찍 크게 실패하게 한다.",
    anchor: "기본값이-쓰이는-때",
  },
  {
    id: "react-context-4",
    post: "react-context",
    question: "context에는 한 번 만든 저장소 객체만 넣고, 소비자는 useSyncExternalStore와 셀렉터로 구독하게 했다. 왜 부분 구독이 가능해지나?",
    choices: [
      "React가 저장소 객체를 깊게 비교해서",
      "context 값은 바뀌지 않아 context로는 아무도 깨지 않고, 저장소 알림 뒤 셀렉터 결과가 달라진 컴포넌트만 렌더링되어서",
      "useSyncExternalStore가 context 전파를 꺼 버려서",
      "저장소가 컴포넌트를 직접 다시 그려서",
    ],
    answer: 1,
    explanation:
      "context는 전달 통로로만 쓰이고 값(저장소 참조)은 한 번도 바뀌지 않는다. 값의 변화는 저장소가 구독자에게 알리고, useSyncExternalStore가 셀렉터 결과를 지난번과 비교해 다른 컴포넌트만 렌더링한다. 셀렉터가 매번 새 배열을 돌려주면 이 비교가 무너진다.",
    anchor: "context에-셀렉터가-없는-이유",
  },
  {
    id: "react-context-5",
    post: "react-context",
    question: "Provider가 분명히 위에 있는데 소비자가 기본값을 받는다. 가장 의심할 만한 원인은?",
    choices: [
      "Provider가 Portal 안에 있어서",
      "value를 useMemo로 감싸서",
      "같은 패키지가 두 벌 설치되어 createContext가 두 번 실행되고 context 객체가 둘이 되어서",
      "소비자가 memo로 감싸져 있어서",
    ],
    answer: 2,
    explanation:
      "Provider는 A 객체에 값을 넣고 소비자는 B 객체에서 꺼내면 Provider가 없는 것과 같아 기본값이 나온다. 모노레포의 중복 버전이나 중복 번들에서 생기니 npm ls나 pnpm why로 확인한다. Portal은 React 트리의 원래 자리를 따르므로 context를 그대로 읽는다.",
    anchor: "현장에서-context가-말썽일-때",
  },
  {
    id: "react-context-6",
    post: "react-context",
    question: "React 19에서 early return 뒤에서도 context 값을 읽을 수 있는 방법은?",
    choices: [
      "use(Context)를 부른다. 훅이 아니라 조건문 안에서도 부를 수 있다",
      "useContext를 부른다. 19부터 조건부 호출이 허용됐다",
      "Context.Consumer만 쓸 수 있다",
      "불가능하다. context는 항상 컴포넌트 맨 위에서 읽어야 한다",
    ],
    answer: 0,
    explanation:
      "use는 useContext와 같은 값을 돌려주지만 조건문과 반복문 안에서 부를 수 있다. useContext는 여전히 훅이라 호출 순서 규칙을 따라야 한다. 19에서는 context 객체를 바로 Provider로 쓰는 것도 새로 생겼다.",
    anchor: "react-19에서-달라진-두-가지",
  },
];
