import type { QuizQuestion } from "../types";

export const JS_OPTIONAL_CHAINING_NULLISH: QuizQuestion[] = [
  {
    id: "js-optional-chaining-nullish-1",
    post: "js-optional-chaining-nullish",
    question: "const o = { shipping: {} }; 일 때 o.shipping?.address.city는 어떻게 되나?",
    choices: [
      "undefined",
      "TypeError: Cannot read properties of undefined (reading 'city')",
      "null",
      "빈 문자열",
    ],
    answer: 1,
    explanation:
      "?.는 바로 왼쪽 값 shipping만 검사한다. shipping은 빈 객체라 통과하고, address가 undefined인데 뒤가 평범한 점이라 city를 읽다가 터진다. 없을 수 있는 자리마다 ?.를 따로 붙여야 한다.",
    anchor: "물음표-하나가-체인을-멈춘다",
  },
  {
    id: "js-optional-chaining-nullish-2",
    post: "js-optional-chaining-nullish",
    question: "const n = null; 일 때 n?.[f()]를 평가하면 f는 몇 번 불리나?",
    choices: ["1번", "2번", "에러가 나서 알 수 없다", "0번"],
    answer: 3,
    explanation:
      "?.에서 멈추면 같은 체인에 이어지는 대괄호 안의 식, 함수 호출과 인자까지 모두 평가하지 않는다. 이것이 옵셔널 체인의 단락이다. 그래서 f는 한 번도 불리지 않고 결과는 undefined다.",
    anchor: "한-번-멈추면-체인-끝까지-건너뛴다",
  },
  {
    id: "js-optional-chaining-nullish-3",
    post: "js-optional-chaining-nullish",
    question: "const api = { name: \"api\" }; 일 때 api.name?.()의 결과는?",
    choices: [
      "name이 함수가 아니니 undefined",
      "\"api\"",
      "TypeError: api.name is not a function",
      "SyntaxError",
    ],
    answer: 2,
    explanation:
      "fn?.()는 왼쪽 값이 null이나 undefined일 때만 호출을 건너뛴다. 문자열은 null이 아니니 통과하고, 문자열을 부르다가 TypeError가 난다. 함수가 없을 수 있을 때 쓰는 문법이지 함수가 아닐 수 있을 때 쓰는 문법이 아니다.",
    anchor: "대괄호와-함수-호출에도-붙는다",
  },
  {
    id: "js-optional-chaining-nullish-4",
    post: "js-optional-chaining-nullish",
    question: "API가 { size: null }을 돌려줬다. const { size = \"M\" } = res; 다음 size의 값은?",
    choices: ["null", "\"M\"", "undefined", "TypeError"],
    answer: 0,
    explanation:
      "구조 분해 기본값과 기본 매개변수는 undefined일 때만 적용되고 null은 값으로 받는다. JSON 응답은 없는 값을 null로 보내는 경우가 많아서 이런 자리에는 res.size ?? \"M\"이 안전하다.",
    anchor: "null-병합은-null과-undefined만-없는-값으로-본다",
  },
  {
    id: "js-optional-chaining-nullish-5",
    post: "js-optional-chaining-nullish",
    question: "const bonus = undefined; 일 때 10 + bonus ?? 5의 결과는?",
    choices: ["15", "10", "5", "NaN"],
    answer: 3,
    explanation:
      "??는 우선순위가 낮아서 (10 + bonus) ?? 5로 묶인다. 10 + undefined는 NaN이고 NaN은 null이 아니니 ?? 5는 아무 일도 하지 않는다. 기본값을 계산에 쓸 때는 10 + (bonus ?? 5)처럼 괄호로 감싼다.",
    anchor: "괄호-없이는-섞을-수-없다",
  },
  {
    id: "js-optional-chaining-nullish-6",
    post: "js-optional-chaining-nullish",
    question: "setter가 있는 속성에 obj.theme ??= \"light\"와 obj.theme = obj.theme ?? \"light\"를 실행했다. theme에 이미 \"dark\"가 있다면?",
    choices: [
      "둘 다 setter를 부른다",
      "??=는 setter를 부르지 않고, 두 번째 줄만 \"dark\"로 setter를 부른다",
      "둘 다 setter를 부르지 않는다",
      "??=만 setter를 부른다",
    ],
    answer: 1,
    explanation:
      "논리 대입 연산자는 왼쪽에 이미 값이 있으면 대입 자체를 건너뛴다. a = a ?? b는 같은 값이라도 언제나 대입하므로 setter, Proxy 트랩, 얼린 객체의 오류가 그대로 일어난다.",
    anchor: "비어-있을-때만-대입하는-논리-대입",
  },
  {
    id: "js-optional-chaining-nullish-7",
    post: "js-optional-chaining-nullish",
    question: "컴포넌트에서 const items = data?.items ?? [];를 useEffect 의존성에 넣었다. data가 아직 undefined일 때 생기는 일은?",
    choices: [
      "빈 배열끼리는 같다고 보니 effect는 한 번만 돈다",
      "?? []는 렌더링 사이에 캐시되어 문제가 없다",
      "렌더링마다 새 배열이라 effect가 매번 다시 실행된다",
      "의존성 배열에 배열을 넣으면 React가 오류를 던진다",
    ],
    answer: 2,
    explanation:
      "React는 의존성을 Object.is로 비교하고, [] 리터럴은 렌더링마다 새 객체를 만든다. 내용이 같아도 다른 배열이라 effect가 매번 돈다. 모듈 밖 빈 배열 상수나 useMemo로 같은 객체를 유지한다.",
    anchor: "react에서-빈-배열-기본값이-effect를-계속-부른다",
  },
];
