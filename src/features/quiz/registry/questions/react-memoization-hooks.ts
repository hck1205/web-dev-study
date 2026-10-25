import type { QuizQuestion } from "../types";

export const REACT_MEMOIZATION_HOOKS: QuizQuestion[] = [
  {
    id: "react-memoization-hooks-1",
    post: "react-memoization-hooks",
    question: "useMemo의 의존 값이 A, B, A, A 순서로 바뀌며 네 번 렌더링됐다. 계산 함수는 몇 번 불리나?",
    choices: ["1번", "2번", "3번", "4번"],
    answer: 2,
    explanation:
      "useMemo는 지난번 입력 하나만 기억하는 칸 하나짜리 캐시다. 세 번째 A는 바로 앞이 B였으니 맞지 않아 다시 계산하고, 네 번째 A만 캐시를 쓴다. 이전에 본 값을 모두 기억한다면 2번이었을 것이다.",
    anchor: "세-도구가-기억하는-것",
  },
  {
    id: "react-memoization-hooks-2",
    post: "react-memoization-hooks",
    question: "memo로 감싼 ProductRow에 product와 useCallback으로 고정한 onAdd, 그리고 JSX 자식 PriceTag를 넘긴다. 부모가 렌더링될 때마다 ProductRow도 렌더링되는 이유는?",
    choices: [
      "memo는 세 개 이상의 props를 비교하지 않는다",
      "children은 부모가 렌더링마다 새로 만드는 엘리먼트 객체라 얕은 비교에서 매번 다르다",
      "useCallback은 memo와 함께 쓸 수 없다",
      "JSX 자식이 있으면 React가 memo를 자동으로 끈다",
    ],
    answer: 1,
    explanation:
      "JSX는 렌더링마다 새 객체를 만드는 함수 호출이고, children은 props의 한 칸일 뿐이다. 내용이 같아도 Object.is로 다르니 memo가 그 칸에서 진다. 자식 대신 price 같은 데이터를 넘기거나 memo 경계를 옮긴다.",
    anchor: "children이-memo를-깨는-이유",
  },
  {
    id: "react-memoization-hooks-3",
    post: "react-memoization-hooks",
    question: "const rows = data ?? []; 를 useMemo의 의존성에 넣었다. 언제 문제가 되나?",
    choices: [
      "data가 undefined인 로딩 동안 렌더링마다 새 빈 배열이 생겨 매번 다시 계산한다",
      "data가 도착한 뒤부터 매번 다시 계산한다",
      "빈 배열은 의존성 배열에 넣을 수 없어서 에러가 난다",
      "문제없다. 빈 배열끼리는 Object.is로 같다",
    ],
    answer: 0,
    explanation:
      "[]는 평가할 때마다 새 배열이라 data가 없는 동안 참조가 매번 다르다. 데이터가 도착하면 data 자체가 유지되니 괜찮아진다. 컴포넌트 밖에 빈 배열 상수를 두면 해결된다.",
    anchor: "의존성이-매번-새로-태어나면",
  },
  {
    id: "react-memoization-hooks-4",
    post: "react-memoization-hooks",
    question: "memo의 비교 함수에서 item의 id와 price만 비교하고 onSave는 빼먹었다. 어떤 버그가 생길 수 있나?",
    choices: [
      "비교 함수가 false를 돌려줘 항상 렌더링된다",
      "React가 비교 함수를 무시하고 얕은 비교로 돌아간다",
      "onSave가 undefined로 바뀐다",
      "부모가 새 state를 읽는 새 onSave를 넘겨도 자식이 렌더링을 건너뛰어 오래된 콜백을 계속 쓴다",
    ],
    answer: 3,
    explanation:
      "비교 함수가 true를 돌려주면 렌더링을 건너뛰고, 자식은 지난 렌더링의 props를 그대로 쓴다. 그 안의 onSave는 예전 state를 붙잡은 함수다. 비교 함수를 쓴다면 모든 prop을 다뤄야 한다.",
    anchor: "비교-함수를-직접-넘길-때",
  },
  {
    id: "react-memoization-hooks-5",
    post: "react-memoization-hooks",
    question: "React Compiler를 켰는데 렌더링 중에 ref.current를 읽는 컴포넌트는 빨라지지 않았다. 왜인가?",
    choices: [
      "컴파일러가 빌드를 실패시켜서 이전 빌드가 배포됐다",
      "컴파일러는 ref를 쓰는 컴포넌트를 런타임에 두 번 렌더링한다",
      "규칙을 어긴 컴포넌트를 찾으면 빌드 에러 없이 그 컴포넌트는 컴파일하지 않고 원래대로 둔다",
      "컴파일러는 React 18에서만 ref를 지원한다",
    ],
    answer: 2,
    explanation:
      "컴파일러는 렌더링이 순수하다는 가정 위에서 캐시를 넣는다. 렌더링 중 ref 접근, 조건부 훅, props 변경을 찾으면 CompileError를 기록하고 그 컴포넌트를 건너뛴다. 빌드는 성공하니 린트로 미리 확인해야 한다.",
    anchor: "규칙을-어기면-조용히-빠진다",
  },
  {
    id: "react-memoization-hooks-6",
    post: "react-memoization-hooks",
    question: "컴파일러 출력에서 map 안의 onSelect={() => onOpen(p.id)}는 어떻게 다뤄지나?",
    choices: [
      "검색어가 바뀌어 목록을 다시 계산하면 줄마다 새 함수가 만들어진다",
      "줄마다 영구히 같은 함수로 고정된다",
      "컴파일러가 인라인 함수를 금지하고 에러를 낸다",
      "useCallback으로 자동 변환되어 의존성이 빈 배열이 된다",
    ],
    answer: 0,
    explanation:
      "컴파일러는 목록 전체를 products, query, onOpen이 그대로일 때 캐시한다. 하나라도 바뀌면 map을 다시 돌고 그 안의 화살표 함수도 줄마다 새로 만든다. 무거운 목록의 구조 조정은 여전히 사람 몫이다.",
    anchor: "react-compiler가-넣는-캐시",
  },
];
