import type { QuizQuestion } from "../types";

export const JS_ARRAY_TRANSFORM: QuizQuestion[] = [
  {
    id: "js-array-transform-1",
    post: "js-array-transform",
    question: "장바구니가 비었을 때만 `items.map(...).reduce((s, n) => s + n)`가 TypeError를 던진다. 이유는?",
    choices: [
      "map이 빈 배열에서 undefined를 돌려주기 때문에",
      "시작값이 없으면 첫 원소를 누산기로 쓰는데, 원소가 없어서 누산기로 쓸 값이 없기 때문에",
      "reduce는 원소가 두 개 이상이어야만 동작하기 때문에",
      "화살표 함수에 return이 빠졌기 때문에",
    ],
    answer: 1,
    explanation:
      "시작값을 생략하면 reduce는 첫 원소를 누산기로 삼고 두 번째 원소부터 콜백을 부른다. 빈 배열에는 그 첫 원소가 없어서 명세대로 TypeError를 던진다. 원소가 하나면 콜백 없이 그 원소를 그대로 돌려주므로 터지지 않는다.",
    anchor: "누산기를-따라가-본다",
  },
  {
    id: "js-array-transform-2",
    post: "js-array-transform",
    question: '`["10", "10", "10"].map(parseInt)`의 결과는?',
    choices: ["[10, 10, 10]", "[10, NaN, NaN]", "[10, NaN, 2]", "[NaN, NaN, NaN]"],
    answer: 2,
    explanation:
      "map은 콜백에 인덱스를 두 번째 인자로 넘기고 parseInt는 그것을 진법으로 쓴다. parseInt(\"10\", 0)은 10, 1진법은 없어서 NaN, parseInt(\"10\", 2)는 2진수 10이라 2다.",
    anchor: "콜백은-인자를-세-개-받는다",
  },
  {
    id: "js-array-transform-3",
    post: "js-array-transform",
    question: "선택한 항목이 전부 결제 가능할 때 버튼을 켜려고 `selected.every(canPay)`를 썼다. 아무것도 선택하지 않으면?",
    choices: [
      "every가 false를 돌려줘서 버튼이 꺼진다",
      "빈 배열이라 TypeError가 난다",
      "every가 undefined를 돌려줘서 버튼이 꺼진다",
      "every가 true를 돌려줘서 버튼이 켜진다",
    ],
    answer: 3,
    explanation:
      "빈 배열의 every는 반례가 없으니 true다(공허한 참). 그래서 선택이 없을 때 버튼이 켜진다. `selected.length > 0 &&`으로 빈 경우를 따로 막아야 한다.",
    anchor: "답이-나오면-멈추는-메서드",
  },
  {
    id: "js-array-transform-4",
    post: "js-array-transform",
    question: "`ids.filter(async (id) => id % 2 === 0)`의 결과는 (ids = [1, 2, 3])?",
    choices: [
      "[1, 2, 3]: 콜백이 돌려준 Promise가 truthy라 전부 남는다",
      "[2]: filter가 Promise를 기다린 뒤 거른다",
      "[]: Promise는 falsy라 전부 빠진다",
      "Promise로 감싼 [2]가 나온다",
    ],
    answer: 0,
    explanation:
      "async 함수는 항상 Promise를 돌려주고, filter는 그 Promise를 기다리지 않고 참거짓만 본다. 객체인 Promise는 truthy라 모든 원소가 통과한다. 에러도 경고도 없어서 찾기 어려운 버그다.",
    anchor: "콜백-안의-await는-기다려-주지-않는다",
  },
  {
    id: "js-array-transform-5",
    post: "js-array-transform",
    question: "별점 다섯 칸을 그리려고 `new Array(5).map((_, i) => <Star key={i} />)`를 썼는데 아무것도 안 나온다. 왜인가?",
    choices: [
      "new Array(5)는 [5]라는 원소 하나짜리 배열을 만들기 때문에",
      "map은 JSX를 돌려줄 수 없기 때문에",
      "new Array(5)는 인덱스 속성이 없는 희소 배열이고, map은 빈 칸에서 콜백을 부르지 않기 때문에",
      "key에 인덱스를 써서 React가 렌더링을 건너뛰기 때문에",
    ],
    answer: 2,
    explanation:
      "new Array(5)는 길이만 5인 빈 칸(hole) 배열이다. map, forEach, filter는 속성이 없는 자리를 건너뛰어 결과도 빈 칸 다섯 개다. Array.from({ length: 5 }, fn)으로 처음부터 빈 칸 없는 배열을 만든다.",
    anchor: "빈-칸이-있는-배열",
  },
  {
    id: "js-array-transform-6",
    post: "js-array-transform",
    question: "100만 개 배열에서 조건에 맞는 앞의 세 개만 필요하다. 콜백 호출 수가 가장 적은 방법은?",
    choices: [
      "arr.filter(cond).slice(0, 3)",
      "arr.values().filter(cond).take(3).toArray()",
      "arr.flatMap((x) => (cond(x) ? [x] : [])).slice(0, 3)",
      "arr.map(cond) 뒤에 앞에서 세 개를 고른다",
    ],
    answer: 1,
    explanation:
      "배열 메서드는 항상 끝까지 돌고 중간 배열을 만든다. 이터레이터 헬퍼는 원소를 하나씩 흘려보내서 take(3)이 다 차면 멈춘다. 글의 예에서 filter는 100만 번, 이터레이터는 54번 불렸다.",
    anchor: "체인이-길어지면-배열도-늘어난다",
  },
  {
    id: "js-array-transform-7",
    post: "js-array-transform",
    question: "주문 목록에서 필터된 목록과 합계를 화면에 보여 줘야 한다. React에서 권하는 방법은?",
    choices: [
      "visible과 total을 각각 useState로 두고 useEffect에서 갱신한다",
      "렌더링 중에 filter와 reduce로 바로 계산하고, 정말 무거울 때만 useMemo로 감싼다",
      "orders 배열의 원소에 visible 속성을 직접 써 둔다",
      "합계는 reduce 대신 forEach 안에서 전역 변수에 더한다",
    ],
    answer: 1,
    explanation:
      "다른 상태에서 계산할 수 있는 값을 상태로 따로 두면 한 번 더 렌더링되고 한 프레임 동안 옛 값이 보인다. 렌더링 중에 계산하는 게 기본이고, 측정해서 무거울 때 useMemo를 쓴다. 원소를 직접 고치면 원본 상태가 바뀌어 다른 문제가 생긴다.",
    anchor: "react-컴포넌트에서-이-메서드들이-하는-일",
  },
];
