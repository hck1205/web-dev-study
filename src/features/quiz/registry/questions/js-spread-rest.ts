import type { QuizQuestion } from "../types";

export const JS_SPREAD_REST: QuizQuestion[] = [
  {
    id: "js-spread-rest-1",
    post: "js-spread-rest",
    question: "다음 중 TypeError가 나는 것은?",
    choices: ["{ ...null }", "[...null]", "{ ...\"hi\" }", "[...\"hi\"]"],
    answer: 1,
    explanation:
      "배열 전개는 이터레이터로 값을 꺼내니 이터러블이 아닌 null에서 TypeError가 난다. 객체 전개는 null과 undefined를 무시하고 빈 결과를 낸다. 문자열은 이터러블이자 인덱스 속성을 가진 값이라 양쪽 다 펼쳐진다.",
    anchor: "배열-전개는-이터레이터에서-꺼낸다",
  },
  {
    id: "js-spread-rest-2",
    post: "js-spread-rest",
    question: "`class User { greet() {} }`의 인스턴스 u를 `{ ...u }`로 복사했다. 결과에 대해 옳은 것은?",
    choices: [
      "greet 메서드와 프로토타입이 그대로 복사된다",
      "greet는 복사되지만 instanceof User는 false다",
      "TypeError가 난다",
      "자기 속성만 복사되어 greet가 없고 instanceof User도 false다",
    ],
    answer: 3,
    explanation:
      "객체 전개는 자기 속성 중 열거 가능한 것만 새 평범한 객체에 정의한다. 메서드는 프로토타입에 있어서 빠지고, 결과는 User의 인스턴스가 아니다. Date나 Map도 같은 이유로 빈 객체가 된다.",
    anchor: "객체-전개는-자기-속성만-베낀다",
  },
  {
    id: "js-spread-rest-3",
    post: "js-spread-rest",
    question: "`{ ...{ retry: 3, timeoutMs: 5000 }, ...{ retry: undefined } }`의 결과는?",
    choices: [
      "{ retry: 3, timeoutMs: 5000 }",
      "{ timeoutMs: 5000 }",
      "{ retry: undefined, timeoutMs: 5000 }",
      "TypeError",
    ],
    answer: 2,
    explanation:
      "객체 전개는 뒤에 쓴 값이 이기고, 키가 있으면 값이 undefined여도 덮어쓴다. 구조 분해 기본값이 undefined일 때만 들어가는 것과 반대다. 폼의 빈 필드가 기본값을 지우는 버그가 여기서 나온다.",
    anchor: "뒤에-쓴-것이-이긴다",
  },
  {
    id: "js-spread-rest-4",
    post: "js-spread-rest",
    question: "Node 22에서 `Math.max(...prices)`가 prices 13만 개에서 RangeError를 냈다. 원인과 처방으로 맞는 것은?",
    choices: [
      "원소마다 인자 하나가 되어 스택을 채우기 때문이다. reduce나 for 문으로 최댓값을 구한다",
      "Math.max의 인자 개수가 명세상 65535개로 제한되기 때문이다. 배열을 반으로 나눠 부른다",
      "전개가 재귀로 구현되어 있기 때문이다. Math.max.apply로 바꾼다",
      "숫자가 너무 커서 생기는 오버플로다. BigInt로 바꾼다",
    ],
    answer: 0,
    explanation:
      "함수 호출의 전개는 원소를 하나하나 인자로 스택에 올린다. 스택 한도를 넘으면 재귀가 없어도 RangeError가 난다. apply와 push(...big)도 같은 문제가 있어서, 크기를 모르는 배열은 reduce나 for 문으로 처리한다.",
    anchor: "펼친-만큼-값을-치른다",
  },
  {
    id: "js-spread-rest-5",
    post: "js-spread-rest",
    question: "`list.reduce((acc, r) => ({ ...acc, [r.id]: r }), {})`가 행 1만 개에서 수십 초 걸렸다. 가장 알맞은 설명은?",
    choices: [
      "계산된 키 [r.id]가 느려서다",
      "단계마다 지금까지 모은 속성을 전부 복사해 전체 복사량이 n²/2가 되기 때문이다",
      "reduce가 원래 느린 메서드라서다",
      "객체 전개가 깊은 복사를 하기 때문이다",
    ],
    answer: 1,
    explanation:
      "k번째 단계에서 k개를 새 객체로 복사하니 합치면 n²/2번이다. 누산기는 reduce가 막 만든 객체라 직접 고쳐도 불변성이 깨지지 않고, 그 버전은 3ms였다. 객체 전개는 얕은 복사다.",
    anchor: "펼친-만큼-값을-치른다",
  },
  {
    id: "js-spread-rest-6",
    post: "js-spread-rest",
    question: "`function Button({ variant, ...rest }) { return <button className=\"btn\" {...rest} /> }`에 `className=\"wide\"`를 넘기면?",
    choices: [
      "btn과 wide가 합쳐진다",
      "className은 rest에 담기지 않아 무시된다",
      "React가 경고를 내고 btn을 유지한다",
      "뒤에 펼친 rest의 className이 이겨 class가 wide만 남는다",
    ],
    answer: 3,
    explanation:
      "JSX props도 객체 전개처럼 뒤에 쓴 값이 이긴다. className을 rest 앞에 썼으니 호출하는 쪽 값이 덮어쓴다. 지켜야 하는 prop은 전개 뒤에 쓰고, 합쳐야 하는 prop은 꺼내서 직접 합친다.",
    anchor: "react-컴포넌트에서-props를-펼칠-때",
  },
  {
    id: "js-spread-rest-7",
    post: "js-spread-rest",
    question: "TypeScript에서 `const pos = [10, 20]; move(...pos)`가 TS2556 에러를 내는 이유는? (move는 x, y 두 인자)",
    choices: [
      "number[]는 길이를 모르니 정확히 두 인자를 받는 함수에 펼칠 수 없다",
      "TypeScript는 함수 호출에서 전개를 지원하지 않는다",
      "pos가 const라서 펼칠 수 없다",
      "move가 나머지 매개변수를 쓰지 않아 런타임 에러가 나기 때문이다",
    ],
    answer: 0,
    explanation:
      "[10, 20]은 number[]로 추론되어 원소가 몇 개인지 타입에 없다. as const로 길이가 정해진 튜플을 만들거나 나머지 매개변수로 받는 함수에 펼치면 통과한다. 런타임에서는 그대로 실행된다.",
    anchor: "typescript는-길이를-모르는-전개를-막는다",
  },
];
