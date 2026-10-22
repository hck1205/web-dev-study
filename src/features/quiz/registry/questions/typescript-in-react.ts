import type { QuizQuestion } from "../types";

export const TYPESCRIPT_IN_REACT: QuizQuestion[] = [
  {
    id: "typescript-in-react-1",
    post: "typescript-in-react",
    question: "`const Card: FC<{ title: string }>`로 만든 컴포넌트에 `<Card title=\"a\">본문</Card>`처럼 자식을 넘기면 @types/react 18 이후에는?",
    choices: [
      "FC가 children을 자동으로 넣어 주므로 통과한다",
      "통과하지만 본문은 무시된다",
      "children이 props에 없어서 TS2322 에러가 난다",
      "FC는 19에서 제거되어 Card 선언부터 에러다",
    ],
    answer: 2,
    explanation:
      "@types/react 18부터 FC는 children을 몰래 추가하지 않아서, props에 children을 적지 않으면 자식을 넘길 때 에러가 난다. FC를 쓰든 함수 선언을 쓰든 받을 props는 직접 적어야 한다. FC 자체는 여전히 있다.",
    anchor: "props-타입을-적는-자리",
  },
  {
    id: "typescript-in-react-2",
    post: "typescript-in-react",
    question: "children 타입이 ReactNode인 컴포넌트에 `{user}`(일반 객체)를 자식으로 넘기면?",
    choices: [
      "컴파일 에러가 난다. ReactNode에는 일반 객체가 들어 있지 않다",
      "통과하고 화면에 [object Object]가 찍힌다",
      "통과하고 React가 JSON으로 바꿔 보여 준다",
      "통과하지만 런타임에서 경고만 남긴다",
    ],
    answer: 0,
    explanation:
      "ReactNode는 엘리먼트, 문자열, 숫자, null, boolean, 배열처럼 React가 그릴 수 있는 것의 유니온이라 일반 객체는 TS2322로 막힌다. 타입이 없었다면 런타임에서 Objects are not valid as a React child 에러가 난다.",
    anchor: "children에-들어갈-수-있는-것",
  },
  {
    id: "typescript-in-react-3",
    post: "typescript-in-react",
    question: "`function onClick(e: MouseEvent<HTMLButtonElement>)` 안에서 `e.target.value`가 에러인 이유는?",
    choices: [
      "button 요소에는 value 속성이 없기 때문이다",
      "합성 이벤트는 target을 제공하지 않기 때문이다",
      "target은 실제로 누른 요소라 버튼 안의 다른 요소일 수 있어 EventTarget으로 선언되어 있기 때문이다",
      "MouseEvent 대신 ChangeEvent를 써야 하기 때문이다",
    ],
    answer: 2,
    explanation:
      "이벤트는 버튼 안의 아이콘 같은 자식에서 일어나 버블링으로 올라오므로 target이 무엇일지 알 수 없다. 핸들러를 단 요소인 currentTarget만 HTMLButtonElement로 확정되어 e.currentTarget.value를 쓰면 된다. ChangeEvent는 호환성 때문에 target도 요소 타입인 예외다.",
    anchor: "이벤트-객체의-타입은-어디서-오나",
  },
  {
    id: "typescript-in-react-4",
    post: "typescript-in-react",
    question: "`@types/react` 19에서 `useRef<HTMLInputElement>(null)`의 타입과 그 이유로 맞는 것은?",
    choices: [
      "RefObject<HTMLInputElement>. effect에서는 항상 요소가 있기 때문이다",
      "RefObject<HTMLInputElement | null>. 커밋 전과 언마운트 뒤에는 current가 null이기 때문이다",
      "MutableRefObject<HTMLInputElement>. 19에서도 읽기 전용 ref와 구분하기 때문이다",
      "HTMLInputElement | null. useRef는 상자 없이 값을 바로 돌려주기 때문이다",
    ],
    answer: 1,
    explanation:
      "DOM ref는 렌더링 중에는 비어 있다가 커밋 때 요소가 들어오고, 언마운트되거나 조건부 렌더링으로 빠지면 다시 null이 된다. 19의 타입은 이를 RefObject<HTMLInputElement | null>로 드러내서 쓰기 전에 확인하게 한다. 19에서는 useRef에 인자가 꼭 필요하다.",
    anchor: "ref는-처음엔-비어-있다",
  },
  {
    id: "typescript-in-react-5",
    post: "typescript-in-react",
    question: "판별 유니온 props를 `function Dialog({ kind, message, ...rest }: DialogProps)`로 받고 `if (kind === \"confirm\") rest.onConfirm`을 쓰면?",
    choices: [
      "kind로 좁혀져 rest.onConfirm을 쓸 수 있다",
      "rest가 any가 되어 통과한다",
      "구조 분해 자체가 유니온 props에서는 금지되어 있다",
      "kind와 rest의 연결이 끊겨 rest.onConfirm에서 TS2339 에러가 난다",
    ],
    answer: 3,
    explanation:
      "나머지 패턴으로 꺼낸 rest는 kind와 별개의 변수라서, kind를 확인해도 rest의 타입이 좁혀지지 않는다. 그래서 rest는 {} | { onConfirm, ... }로 남아 onConfirm 접근이 에러가 된다. props를 통째로 받아 props.kind로 좁힌 뒤 꺼내 쓰면 된다.",
    anchor: "같이-와야-하는-props-같이-오면-안-되는-props",
  },
  {
    id: "typescript-in-react-6",
    post: "typescript-in-react",
    question: "커스텀 훅이 `return [on, toggle]`을 돌려주면 `<button onClick={toggle}>`에서 에러가 나는 이유는?",
    choices: [
      "배열 리터럴이 (boolean | (() => void))[]로 추론되어 위치별 타입이 사라지기 때문이다",
      "훅은 배열을 돌려줄 수 없기 때문이다",
      "toggle이 렌더링마다 새로 만들어지기 때문이다",
      "useState의 setter는 onClick에 넘길 수 없기 때문이다",
    ],
    answer: 0,
    explanation:
      "배열 리터럴은 기본으로 원소 타입들의 유니온 배열로 추론되므로 두 번째 원소도 boolean일 수 있는 값이 된다. as const나 반환 타입 [boolean, () => void]를 적어 튜플로 고정하면 해결된다. 새 함수가 만들어지는 건 성능 이야기지 타입 에러의 원인이 아니다.",
    anchor: "context와-커스텀-훅이-돌려주는-타입",
  },
  {
    id: "typescript-in-react-7",
    post: "typescript-in-react",
    question: "input을 감싸며 onChange가 문자열을 받게 하려고 `ComponentProps<\"input\"> & { onChange: (value: string) => void }`로 적었다. `onChange={(value: string) => ...}`를 넘기면?",
    choices: [
      "뒤에 적은 onChange가 앞의 것을 덮어써 통과한다",
      "두 onChange가 교차되어 이벤트 핸들러이면서 문자열 핸들러여야 하므로 TS2322 에러가 난다",
      "onChange가 any가 되어 무엇이든 통과한다",
      "런타임에서 onChange가 두 번 불린다",
    ],
    answer: 1,
    explanation:
      "교차 타입(&)은 같은 이름의 속성을 덮어쓰지 않고 두 타입을 모두 만족하게 만든다. 그래서 onChange는 ChangeEventHandler와 문자열 핸들러의 교차가 되어 문자열만 받는 함수가 들어갈 수 없다. Omit으로 원래 onChange를 먼저 빼고 더해야 한다.",
    anchor: "기본-요소를-감싸는-컴포넌트",
  },
];
