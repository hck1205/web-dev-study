import type { QuizQuestion } from "../types";

export const TS_GENERICS: QuizQuestion[] = [
  {
    id: "ts-generics-1",
    post: "ts-generics",
    question: "function first(items: any[]) { return items[0]; } 대신 first<T>(items: T[]): T | undefined 로 바꾸면 무엇이 달라지나?",
    choices: [
      "런타임에 T를 보고 배열 원소 타입을 검사한다",
      "넣은 배열의 원소 타입이 결과 타입으로 이어져, 문자열 배열에서 꺼낸 값에 toFixed를 부르면 컴파일 오류가 난다",
      "숫자 배열만 받을 수 있게 된다",
      "결과가 항상 unknown이 되어 매번 확인해야 한다",
    ],
    answer: 1,
    explanation:
      "any[]는 무엇이든 받지만 결과도 any라서 입력과 출력의 연결이 끊긴다. T는 호출마다 인자에서 정해져 반환 타입으로 이어진다. T는 컴파일할 때만 있고 런타임에는 남지 않는다.",
    anchor: "any를-쓰면-입력과-출력이-따로-논다",
  },
  {
    id: "ts-generics-2",
    post: "ts-generics",
    question:
      "longest<T extends { length: number }>(a: T, b: T)에 longest(\"abc\", [1, 2])를 넘기면 오류가 어떻게 나나?",
    choices: [
      "T가 string | number[]로 정해져 통과한다",
      "첫 인자에서 오류가 난다",
      "T가 \"abc\"로 정해지고, 두 번째 인자가 \"abc\" 자리에 못 들어간다는 오류가 난다",
      "length 제약을 만족하지 못한다는 오류가 난다",
    ],
    answer: 2,
    explanation:
      "검사기는 후보 중 나머지를 모두 담는 타입이 없으면 유니온을 새로 만들지 않고 첫 후보를 고른다. 그래서 T = \"abc\"가 되고 number[]가 그 자리에 맞지 않는다는 오류가 두 번째 인자에 찍힌다. 섞어 받으려면 타입 인자를 직접 적는다.",
    anchor: "후보가-여럿이면-검사기가-고른다",
  },
  {
    id: "ts-generics-3",
    post: "ts-generics",
    question: "getProp<T, K extends keyof T>(obj: T, key: K): T[K] 에서 getProp(user, \"id\")의 반환 타입은? (user: { id: number; name: string })",
    choices: ["number", "string | number", "unknown", "\"id\""],
    answer: 0,
    explanation:
      "K는 인자에서 리터럴 \"id\"로 추론되고, T[K]는 User[\"id\"], 곧 number다. 키에 따라 반환 타입이 달라지는 것이 이 모양의 장점이다. 없는 키를 넘기면 keyof User 제약에 걸려 막힌다.",
    anchor: "키-이름을-타입으로-받는다",
  },
  {
    id: "ts-generics-4",
    post: "ts-generics",
    question: "async function fetchJson<T>(url: string): Promise<T> 를 fetchJson<User>(\"/api/me\")로 부르는 코드의 문제는?",
    choices: [
      "타입 인자를 적으면 런타임이 느려진다",
      "T를 생략하면 컴파일 오류가 난다",
      "Promise<T>는 await할 수 없다",
      "T가 반환 타입에만 있어 실제로는 as User와 같고, 응답이 바뀌어도 검사하지 못한다",
    ],
    answer: 3,
    explanation:
      "T가 매개변수 어디에도 없으면 추론할 근거가 없어 호출하는 쪽이 적는 대로 된다. 생략하면 Promise<unknown>이 된다. 검증 함수를 인자로 받아 T를 그 반환 타입에서 얻게 하면 같은 모양으로 실제 검사를 할 수 있다.",
    anchor: "반환에만-쓰인-제네릭은-as와-같다",
  },
  {
    id: "ts-generics-5",
    post: "ts-generics",
    question:
      "pickColor<C extends string>(colors: C[], fallback: C)에 pickColor([\"red\", \"blue\"], \"green\")이 통과해 버린다. fallback을 목록 안의 색으로만 제한하려면?",
    choices: [
      "fallback: NoInfer<C> 로 바꾼다",
      "C에 기본값 = string을 준다",
      "fallback: string 으로 바꾼다",
      "colors를 as const로 넘긴다",
    ],
    answer: 0,
    explanation:
      "fallback도 C의 후보를 내놓아 C가 \"red\" | \"blue\" | \"green\"으로 넓어졌다. NoInfer<C>(5.4부터)는 그 자리에서 후보를 모으지 않고 정해진 C로 검사만 하게 한다. 그래서 C는 colors에서만 정해지고 \"green\"이 막힌다.",
    anchor: "기본값과-추론을-막는-noinfer",
  },
  {
    id: "ts-generics-6",
    post: "ts-generics",
    question: ".tsx 파일에서 const identity = <T>(x: T) => x; 가 오류 나는 이유와 해결은?",
    choices: [
      "화살표 함수는 제네릭을 쓸 수 없으니 function으로만 써야 한다",
      "<T>가 JSX 태그로 읽힌다. <T,>나 <T extends unknown>으로 쓴다",
      "T라는 이름이 예약어라서 다른 이름을 써야 한다",
      "strict 모드에서만 나는 오류라 끄면 된다",
    ],
    answer: 1,
    explanation:
      ".tsx에서는 <T>를 JSX 여는 태그로 파싱해 닫는 태그가 없다는 오류가 난다. 쉼표를 붙이거나 extends를 적으면 제네릭으로 읽힌다. 함수 선언문으로 써도 해결된다.",
    anchor: "컴포넌트와-훅에-타입-매개변수를-단다",
  },
  {
    id: "ts-generics-7",
    post: "ts-generics",
    question: "useLocalStorage<T>(key, initial)를 useLocalStorage(\"theme\", \"light\")로 부르면 T는?",
    choices: ["\"light\"", "unknown", "string", "\"light\" | \"dark\""],
    answer: 2,
    explanation:
      "T가 반환 타입 맨 위가 아니라 튜플과 상태 안에 쓰이고 원시 타입 제약도 없어서 리터럴이 string으로 넓어진다. 그래서 setTheme(\"blue\")도 통과한다. 허용 값을 좁히려면 useLocalStorage<\"light\" | \"dark\">처럼 타입 인자를 적는다.",
    anchor: "컴포넌트와-훅에-타입-매개변수를-단다",
  },
];
