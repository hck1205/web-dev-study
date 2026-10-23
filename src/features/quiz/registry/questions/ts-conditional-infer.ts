import type { QuizQuestion } from "../types";

export const TS_CONDITIONAL_INFER: QuizQuestion[] = [
  {
    id: "ts-conditional-infer-1",
    post: "ts-conditional-infer",
    question:
      "반환 타입이 Parsed<T>(T extends \"number\" ? number : string)인 제네릭 함수에서 kind === \"number\"를 확인한 뒤 Number(raw)를 돌려줬는데 TS2322가 난다. 이유는?",
    choices: [
      "Number(raw)의 결과가 NaN일 수 있어서",
      "본문은 T를 모른 채 검사되어 조건부 타입이 미뤄진 채 남고, kind를 좁혀도 타입 매개변수 T는 좁혀지지 않아서",
      "조건부 타입은 함수 반환 타입 자리에 쓸 수 없어서",
      "strict 모드에서는 조건부 타입이 항상 never로 계산되어서",
    ],
    answer: 1,
    explanation:
      "부르는 쪽에서는 T가 정해져 바로 계산되지만, 본문은 T가 무엇이든 한 번만 검사되므로 Parsed<T>가 지연된 채 남는다. 지연된 타입에는 모든 가능한 T에 맞는 값만 들어갈 수 있다. 값 kind를 좁히는 것은 T를 좁히지 않는다.",
    anchor: "조건부-타입은-언제-계산되나",
  },
  {
    id: "ts-conditional-infer-2",
    post: "ts-conditional-infer",
    question: "입력 키에 따라 반환 타입이 바뀌는 함수를 단언 없이 통과시키는 방법으로 가장 알맞은 것은?",
    choices: [
      "반환 타입을 any로 두고 부르는 쪽에서 단언한다",
      "구현 시그니처에 조건부 타입을 그대로 쓰고 @ts-ignore를 붙인다",
      "키에서 타입으로 가는 인터페이스 표와 같은 키의 구현 객체를 두고, parsers[kind](raw)처럼 인덱스 접근으로 꺼낸다",
      "본문에서 if로 키를 나눠 각 갈래마다 반환한다",
    ],
    answer: 2,
    explanation:
      "parsers[kind]의 타입이 (raw: string) => ParseMap[K]로 계산되어 반환 타입과 같은 모양이 되니 검사기가 맞춰 볼 수 있다. 본문에서 분기하면 K를 모르는 ParseMap[K]가 모든 갈래의 교집합인 never로 취급되어 에러가 난다.",
    anchor: "오버로드와-구현-표로-풀기",
  },
  {
    id: "ts-conditional-infer-3",
    post: "ts-conditional-infer",
    question: "type ToArray<T> = T extends unknown ? T[] : never일 때 ToArray<string | number>의 결과와 그 의미는?",
    choices: [
      "(string | number)[]. 문자열과 숫자가 섞인 배열이다",
      "never. unknown 검사는 유니온을 거부한다",
      "unknown[]. 검사 자리의 타입으로 넓어진다",
      "string[] | number[]. 전부 문자열이거나 전부 숫자인 배열이라 섞인 배열은 들어가지 않는다",
    ],
    answer: 3,
    explanation:
      "검사 자리에 맨 타입 매개변수가 와서 유니온이 멤버마다 분배된다. 그 결과 string[]과 number[]의 유니온이 되어 섞인 배열을 받지 않는다. [T] extends [unknown]처럼 감싸면 분배되지 않아 (string | number)[]가 된다.",
    anchor: "분배가-일어나는-자리-일어나지-않는-자리",
  },
  {
    id: "ts-conditional-infer-4",
    post: "ts-conditional-infer",
    question: "두 함수의 매개변수 자리에서 같은 이름 infer U로 { id: number }와 { name: string }을 잡았다. U는?",
    choices: [
      "{ id: number } & { name: string }. 넣어 주는 자리에서 잡으면 교집합이 된다",
      "{ id: number } | { name: string }. 두 자리 모두의 후보를 합친다",
      "{ id: number }. 처음 잡은 것이 이긴다",
      "never. 같은 이름을 두 번 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "함수 매개변수는 반공변 위치라, 두 함수에 같은 값을 넘기려면 둘이 원하는 것을 모두 갖춰야 한다. 그래서 교집합이 나온다. 속성 값처럼 읽는 공변 위치에서 두 번 잡으면 유니온이 된다. UnionToIntersection이 이 성질을 쓴다.",
    anchor: "infer가-두-자리에서-잡으면",
  },
  {
    id: "ts-conditional-infer-5",
    post: "ts-conditional-infer",
    question: "type Unwrap<T> = T extends Promise<infer U> ? U : T로 Awaited를 대신하면 무엇이 틀리나?",
    choices: [
      "Promise<number>에서 number를 꺼내지 못한다",
      "async 함수의 반환 타입에는 쓸 수 없다",
      "Promise<Promise<number>>를 한 겹만 벗기고, then만 있는 thenable 객체는 열지 못한다",
      "null을 넣으면 컴파일 에러가 난다",
    ],
    answer: 2,
    explanation:
      "런타임의 await는 호출 가능한 then이 있는 객체면 열고, 결과가 또 thenable이면 다시 연다. 내장 Awaited는 then의 콜백 첫 매개변수를 infer로 잡아 재귀로 다시 열어서 이 동작을 따른다. Promise extends 하나로는 한 겹, Promise 클래스 모양만 연다.",
    anchor: "awaited를-직접-만들어-보기",
  },
  {
    id: "ts-conditional-infer-6",
    post: "ts-conditional-infer",
    question: "답글이 답글 배열을 갖는 Reply 타입에 점 경로 Path<T>를 그대로 걸었더니 TS2615가 나고 결과가 any가 됐다. 이 상태를 @ts-ignore로 덮으면 생기는 일과 해결책은?",
    choices: [
      "검사가 느려질 뿐 타입은 정확하다. 그대로 써도 된다",
      "register가 아무 문자열이나 받아 오타를 못 잡는다. 깊이 카운터를 넘겨 일정 깊이에서 never로 멈추게 한다",
      "TS2615는 경고라서 빌드에 영향이 없다. tsconfig에서 끄면 된다",
      "Reply를 interface 대신 type으로 바꾸면 순환이 풀린다",
    ],
    answer: 1,
    explanation:
      "자기 자신을 가리키는 데이터는 경로가 끝없이 길어져 계산이 끝나지 않고, 결과가 any로 무너진다. 덮고 쓰면 타입이 있는 척만 한다. Prev 튜플로 깊이를 하나씩 줄이다가 never가 되면 멈추게 해서 해결한다.",
    anchor: "점으로-이은-경로와-재귀의-끝",
  },
  {
    id: "ts-conditional-infer-7",
    post: "ts-conditional-infer",
    question: "type IsNever<T> = T extends never ? true : false에 never를 넣으면 무엇이 나오고, 왜 그런가?",
    choices: [
      "true. never는 never에 할당할 수 있다",
      "false. never는 어떤 타입에도 맞지 않는다",
      "컴파일 에러가 난다",
      "never. never는 멤버가 0개인 유니온이라 분배할 멤버가 없어 결과도 never다",
    ],
    answer: 3,
    explanation:
      "검사 자리의 맨 T에 never가 들어오면 분배가 일어나는데, 계산할 멤버가 하나도 없으니 결과가 never다. [T] extends [never]로 감싸 분배를 끄면 true가 나온다. 깊이 카운터가 never인지 확인할 때도 이렇게 감싼다.",
    anchor: "never로-거르고-never인지-묻기",
  },
];
