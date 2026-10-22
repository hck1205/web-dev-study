import type { QuizQuestion } from "../types";

export const TS_NARROWING: QuizQuestion[] = [
  {
    id: "ts-narrowing-1",
    post: "ts-narrowing",
    question: "e: unknown 일 때 if (typeof e === \"object\") 블록 안에서 e의 타입은?",
    choices: ["object", "object | null", "Record<string, unknown>", "unknown 그대로"],
    answer: 1,
    explanation:
      "런타임에서 typeof null이 \"object\"라서 검사기도 null을 남긴다. e && typeof e === \"object\"처럼 참 검사를 함께 하거나 e !== null을 붙여야 object로 좁혀진다.",
    anchor: "검사기는-코드의-갈림길을-따라간다",
  },
  {
    id: "ts-narrowing-2",
    post: "ts-narrowing",
    question:
      "{ loading: boolean; data?: string[]; error?: Error } 대신 status 태그를 둔 판별 유니온으로 바꾸면 무엇이 좋아지나?",
    choices: [
      "런타임에 상태 값을 자동으로 검증한다",
      "번들 크기가 줄어든다",
      "불가능한 상태 조합을 막고, status를 확인한 갈래에서 data를 undefined 검사 없이 쓸 수 있다",
      "data 속성을 선택적으로 만들 수 있다",
    ],
    answer: 2,
    explanation:
      "플래그와 선택 속성 조합은 로딩 중인데 데이터와 에러가 함께 있는 상태도 허용하고, 데이터가 있다는 사실을 표현하지 못한다. 판별 유니온은 상태마다 속성 묶음을 따로 두어 status === \"success\" 갈래에서 data가 확실히 있다고 알려 준다.",
    anchor: "공통-태그-하나로-갈래를-나누는-판별-유니온",
  },
  {
    id: "ts-narrowing-3",
    post: "ts-narrowing",
    question:
      "PaymentStatus에 \"partially_refunded\"를 추가했을 때, 이를 처리하지 않은 switch가 오류 메시지에 빠진 상태 이름까지 찍으며 실패하게 하려면?",
    choices: [
      "default에서 const unhandled: never = status; 를 둔다",
      "함수 반환 타입을 string으로 적는다",
      "noImplicitReturns를 켠다",
      "status를 as PaymentStatus로 단언한다",
    ],
    answer: 0,
    explanation:
      "모든 갈래를 처리하면 default의 status는 never가 되어 통과하고, 빠진 갈래가 있으면 Type '\"partially_refunded\"' is not assignable to type 'never'처럼 이름이 찍힌다. 반환 타입 명시나 noImplicitReturns도 경로 누락은 잡지만 어느 상태가 빠졌는지는 알려 주지 않는다.",
    anchor: "빠진-갈래를-컴파일러가-찾게-하기",
  },
  {
    id: "ts-narrowing-4",
    post: "ts-narrowing",
    question:
      "function isUserLie(v: unknown): v is User { return typeof v === \"object\" && v !== null && \"id\" in v; } 는 tsc를 통과한다. 이 가드에 { id: 1, nickname: \"kim\" }을 넣고 raw.name.toUpperCase()를 부르면?",
    choices: [
      "tsc가 가드 본문이 name을 확인하지 않았다고 오류를 낸다",
      "가드가 false를 돌려줘 else 갈래로 간다",
      "raw.name이 빈 문자열로 채워진다",
      "가드가 true를 돌려주고 컴파일도 통과해 런타임에 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "검사기는 타입 서술어를 약속으로 믿을 뿐 본문이 그 약속을 지키는지 확인하지 않는다. 그래서 value is User는 as User와 같은 무게다. 오류는 가드가 아니라 그 결과를 쓰는 곳에서 드러난다.",
    anchor: "직접-만드는-타입-가드",
  },
  {
    id: "ts-narrowing-5",
    post: "ts-narrowing",
    question:
      "const assertNum = (v: unknown): asserts v is number => { … }; assertNum(x); 에서 TS2775가 나는 이유는?",
    choices: [
      "단언 함수는 void가 아닌 값을 돌려줘야 하기 때문이다",
      "단언 함수를 부르는 이름에 타입이 명시적으로 적혀 있어야 하는데, 변수 타입을 추론에 맡겼기 때문이다",
      "화살표 함수는 throw를 쓸 수 없기 때문이다",
      "asserts는 unknown을 받을 수 없기 때문이다",
    ],
    answer: 1,
    explanation:
      "제어 흐름 분석 도중에 그 변수의 타입을 다시 추론해야 하는 순환을 피하려고, 단언 함수는 호출 대상 이름이 명시적 타입을 가져야 한다. 변수에 함수 타입을 적거나 function 선언으로 바꾸면 통과한다.",
    anchor: "통과하지-못하면-던지는-단언-함수",
  },
  {
    id: "ts-narrowing-6",
    post: "ts-narrowing",
    question:
      "TypeScript 5.9에서 (Product | undefined)[] 배열에 대해 결과가 Product[]로 좁혀지는 것은?",
    choices: [
      "found.filter(Boolean)",
      "found.map((p) => p)",
      "found.filter((p) => p !== undefined)",
      "둘 다 좁혀지지 않아 항상 서술어를 직접 적어야 한다",
    ],
    answer: 2,
    explanation:
      "5.5부터 p !== undefined 같은 간단한 화살표 함수는 반환 타입이 p is Product로 추론된다. Boolean은 서술어 없이 boolean을 돌려주는 함수로 선언되어 있어 지금도 좁히지 못한다.",
    anchor: "직접-만드는-타입-가드",
  },
  {
    id: "ts-narrowing-7",
    post: "ts-narrowing",
    question:
      "if (session.user !== null) { logout(); return session.user.name; } 에서 logout()이 session.user를 null로 바꾼다. tsc는 어떻게 하나?",
    choices: [
      "함수 호출 뒤에도 좁힌 타입을 유지해 통과시키고, 런타임에 TypeError가 난다",
      "logout() 호출 뒤 좁힘을 풀어 'possibly null' 오류를 낸다",
      "logout이 session을 바꾸는지 분석해 경고한다",
      "session이 const라서 user를 바꿀 수 없다고 오류를 낸다",
    ],
    answer: 0,
    explanation:
      "함수 호출마다 모든 속성의 좁힘을 풀면 대부분의 코드가 오류가 되므로 TypeScript는 이 경우를 일부러 검사하지 않는다. 공유 상태를 좁힌 뒤 다른 함수를 부를 때는 좁힌 값을 지역 const에 먼저 꺼내 둔다.",
    anchor: "다시-할당하면-좁힌-것이-풀린다",
  },
];
