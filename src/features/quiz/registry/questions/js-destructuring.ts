import type { QuizQuestion } from "../types";

export const JS_DESTRUCTURING: QuizQuestion[] = [
  {
    id: "js-destructuring-1",
    post: "js-destructuring",
    question: "`const { a = 1, b = 2, c = 3 } = { a: undefined, b: null, c: 0 }` 다음에 a, b, c는?",
    choices: ["1, 2, 3", "1, null, 0", "1, 2, 0", "undefined, null, 0"],
    answer: 1,
    explanation:
      "구조 분해 기본값은 꺼낸 값이 정확히 undefined일 때만 들어간다. null과 0은 값이 있다고 보고 그대로 담는다. JSON 응답의 null 필드에 기본값이 안 들어가는 이유다.",
    anchor: "기본값은-undefined일-때만-들어간다",
  },
  {
    id: "js-destructuring-2",
    post: "js-destructuring",
    question: "`function fetchJson(url, { retry = 3 } = {})`를 `fetchJson(\"/api\", null)`로 부르면?",
    choices: [
      "retry가 3이 된다",
      "retry가 null이 된다",
      "바깥 기본값 = {}는 undefined에만 반응하므로 null에서 retry를 꺼내다 TypeError가 난다",
      "SyntaxError가 난다",
    ],
    answer: 2,
    explanation:
      "매개변수 기본값도 undefined일 때만 쓰인다. null이 그대로 패턴에 들어가 null에서 속성을 읽다가 TypeError가 난다. null까지 받으려면 본문에서 options ?? {}로 꺼낸다.",
    anchor: "매개변수-자리에서-바로-꺼내기",
  },
  {
    id: "js-destructuring-3",
    post: "js-destructuring",
    question: "무한히 값을 내는 제너레이터 gen에 대해 옳은 것은?",
    choices: [
      "`const [a, b] = gen()`은 next를 두 번 부르고 이터레이터를 닫는다. `const [a, ...rest] = gen()`은 끝나지 않는다",
      "둘 다 끝나지 않는다. 배열 패턴은 먼저 전체를 배열로 바꾸기 때문이다",
      "둘 다 TypeError다. 제너레이터는 배열이 아니기 때문이다",
      "`[a, b]`는 끝나지 않고 `[a, ...rest]`는 끝난다",
    ],
    answer: 0,
    explanation:
      "배열 패턴은 이터레이터에서 자리 수만큼만 next()를 부르고 return()으로 닫는다. ...rest는 done이 나올 때까지 모으니 무한 제너레이터에서는 끝나지 않는다.",
    anchor: "배열-패턴은-이터레이터를-돈다",
  },
  {
    id: "js-destructuring-4",
    post: "js-destructuring",
    question: "세미콜론 없는 코드에서 `const list = [3, 4]` 다음 줄에 `[a, b] = [b, a]`를 썼다(a=1, b=2). 결과는?",
    choices: [
      "a=2, b=1로 바뀐다",
      "SyntaxError가 난다",
      "a=2, b=2가 된다",
      "에러 없이 a=1, b=2 그대로이고 list가 [2, 1]이 된다",
    ],
    answer: 3,
    explanation:
      "다음 줄이 [로 시작하면 ASI가 세미콜론을 넣지 않고 [3, 4][a, b] = [b, a]로 이어 읽는다. 쉼표 연산자로 인덱스 접근 후 대입하니 교환은 일어나지 않고 그 결과가 list에 담긴다.",
    anchor: "이미-있는-변수에-담을-때-생기는-두-가지-함정",
  },
  {
    id: "js-destructuring-5",
    post: "js-destructuring",
    question: "`function Profile({ userId, options = {} })`의 options를 useEffect 의존성에 넣었더니 요청이 끝없이 반복된다. 원인은?",
    choices: [
      "useEffect가 의존성 배열의 내용을 깊게 비교하지 못해서",
      "기본값 {}가 렌더링마다 새 객체로 만들어져 참조 비교에서 매번 바뀐 것으로 보이기 때문에",
      "구조 분해가 props 객체를 복사하기 때문에",
      "userId가 숫자라서",
    ],
    answer: 1,
    explanation:
      "기본값 식은 렌더링마다 평가되어 매번 새 {}를 만든다. 의존성은 Object.is로 비교하니 매번 다르고, effect 안의 setData가 다시 렌더링을 불러 고리가 된다. 기본값을 모듈 상수로 빼면 1번만 돈다.",
    anchor: "react-코드-곳곳의-구조-분해",
  },
  {
    id: "js-destructuring-6",
    post: "js-destructuring",
    question: "TypeScript에서 `function greet({ name: string })`는 무엇을 뜻하나?",
    choices: [
      "name의 타입을 string으로 지정한다",
      "문법 에러다",
      "name 키의 값을 string이라는 이름의 변수에 담는다",
      "name이 없으면 기본값 'string'을 쓴다",
    ],
    answer: 2,
    explanation:
      "구조 분해 패턴 안의 콜론은 이름 바꾸기다. noImplicitAny가 켜져 있으면 Binding element 'string' implicitly has an 'any' type으로 잡히지만, 꺼져 있으면 조용히 통과한다. 타입은 ({ name }: { name: string })처럼 패턴 뒤에 붙인다.",
    anchor: "typescript에서-콜론의-뜻이-겹친다",
  },
];
