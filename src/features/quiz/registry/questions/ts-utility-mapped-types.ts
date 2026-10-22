import type { QuizQuestion } from "../types";

export const TS_UTILITY_MAPPED_TYPES: QuizQuestion[] = [
  {
    id: "ts-utility-mapped-types-1",
    post: "ts-utility-mapped-types",
    question: "User에 없는 키로 `type A = Omit<User, \"emial\">`을 쓰면 어떻게 되나?",
    choices: [
      "TS2344 에러가 나서 오타를 바로 알 수 있다",
      "email 필드가 빠진 타입이 된다",
      "에러 없이 User와 똑같은 타입이 된다",
      "never 타입이 된다",
    ],
    answer: 2,
    explanation:
      "Omit의 K는 keyof T가 아니라 아무 키나 받도록 선언되어 있어서, 없는 키를 빼라고 하면 뺄 것이 없을 뿐 에러가 나지 않는다. 같은 오타를 Pick에 쓰면 K extends keyof T 제약 때문에 TS2344가 난다.",
    anchor: "원본-하나에서-뽑아내는-다섯-가지-모양",
  },
  {
    id: "ts-utility-mapped-types-2",
    post: "ts-utility-mapped-types",
    question: "`type IsString<T> = T extends string ? \"yes\" : \"no\"`일 때 `IsString<\"hi\" | 42>`의 결과는?",
    choices: ["\"no\"", "\"yes\" | \"no\"", "\"yes\"", "never"],
    answer: 1,
    explanation:
      "검사 자리에 맨 타입 매개변수가 있으면 조건부 타입은 유니온을 멤버별로 나눠 계산한 뒤 합친다. \"hi\"는 \"yes\", 42는 \"no\"가 되어 둘의 유니온이 나온다. 통째로 검사하려면 [T] extends [string]처럼 감싼다.",
    anchor: "타입에-if를-거는-조건부-타입",
  },
  {
    id: "ts-utility-mapped-types-3",
    post: "ts-utility-mapped-types",
    question: "`Circle | Square`(둘 다 kind, id를 가지고 각자 radius, size를 가짐)에 `Omit<Shape, \"id\">`를 쓰면 radius와 size가 사라지는 이유는?",
    choices: [
      "유니온의 keyof는 모든 멤버에 공통인 키뿐이라 kind만 남기 때문이다",
      "Omit이 선택 필드를 자동으로 지우기 때문이다",
      "판별 필드 kind가 있으면 나머지 필드는 숨겨지기 때문이다",
      "strict 옵션이 꺼져 있을 때만 생기는 버그다",
    ],
    answer: 0,
    explanation:
      "Omit은 Pick<T, Exclude<keyof T, K>>로 만들어져 있고, 유니온의 keyof는 공통 키(kind, id)만 돌려준다. 그중 id를 빼면 kind 하나만 남는다. T extends unknown ? Omit<T, K> : never로 분배시키면 멤버마다 따로 적용된다.",
    anchor: "원본-하나에서-뽑아내는-다섯-가지-모양",
  },
  {
    id: "ts-utility-mapped-types-4",
    post: "ts-utility-mapped-types",
    question: "`const routes: Record<string, Route> = { home: ..., settings: ... }`에서 `routes.setings.path`를 쓰면?",
    choices: [
      "TS2551 에러로 오타를 알려 준다",
      "컴파일도 통과하고 실행하면 undefined가 찍힌다",
      "Record는 키를 알고 있어서 settings로 자동 교정된다",
      "컴파일은 통과하고 실행하면 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "타입 주석을 달면 변수 타입이 아무 문자열 키를 허용하는 Record로 넓어져, 리터럴에 어떤 키가 있었는지 사라진다. 그래서 오타 키도 통과하고, 실행하면 undefined의 path를 읽다 TypeError가 난다. satisfies로 바꾸면 리터럴 모양이 남아 TS2551로 잡힌다.",
    anchor: "satisfies로-검사만-받기",
  },
  {
    id: "ts-utility-mapped-types-5",
    post: "ts-utility-mapped-types",
    question: "키 이름을 as로 getId, getName처럼 바꾸는 매핑된 타입 Getters<T>를 `email?: string` 필드가 있는 타입에 쓰면 getEmail은?",
    choices: [
      "as로 키를 바꿨으므로 항상 필수 필드가 된다",
      "키 이름이 바뀌어 원본과 연결이 끊기고 never가 된다",
      "원본의 ?를 물려받아 선택 필드가 된다",
      "템플릿 리터럴 키에는 수식어를 쓸 수 없어 에러가 난다",
    ],
    answer: 2,
    explanation:
      "[K in keyof T]처럼 원본의 키를 그대로 도는 동형 매핑은 as로 이름을 바꿔도 원래의 ?와 readonly를 물려받는다. 실제로 펼쳐 보면 getEmail?로 나온다. 수식어를 떼려면 -?나 -readonly를 써야 한다.",
    anchor: "partial을-열어-보면-키를-도는-반복문이다",
  },
  {
    id: "ts-utility-mapped-types-6",
    post: "ts-utility-mapped-types",
    question: "`async function fetchUser()`가 돌려주는 객체 타입을 꺼내려면 어떻게 쓰나?",
    choices: [
      "ReturnType<fetchUser>",
      "Awaited<ReturnType<typeof fetchUser>>",
      "ReturnType<typeof fetchUser>",
      "typeof fetchUser()",
    ],
    answer: 1,
    explanation:
      "async 함수의 ReturnType은 Promise로 감싸여 나오므로 Awaited로 한 겹 벗겨야 한다. 함수 값을 타입 자리로 옮기려면 typeof가 필요해서 ReturnType<fetchUser>는 에러가 나고, 타입 수준 typeof 뒤에는 호출식을 쓸 수 없다.",
    anchor: "안쪽-타입을-꺼내는-infer",
  },
];
