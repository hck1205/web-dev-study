import type { QuizQuestion } from "../types";

export const TS_TYPE_SYSTEM_BASICS: QuizQuestion[] = [
  {
    id: "ts-type-system-basics-1",
    post: "ts-type-system-basics",
    question:
      "type UserId = string; type OrderId = string; 일 때 cancelOrder(orderId, userId)처럼 순서를 바꿔 넘기면 tsc는 어떻게 하나?",
    choices: [
      "TS2345로 인자 타입이 다르다고 막는다",
      "strict 모드에서만 오류를 낸다",
      "아무 오류 없이 통과시킨다",
      "경고만 내고 JS는 만들지 않는다",
    ],
    answer: 2,
    explanation:
      "타입 별칭은 같은 타입에 붙은 다른 이름일 뿐이고, TypeScript는 이름이 아니라 모양으로 비교한다. 둘 다 string이니 바꿔 넣어도 통과한다. 구분하려면 브랜드 타입처럼 모양 자체를 다르게 만들어야 한다.",
    anchor: "문자열-두-개를-구분하는-브랜드-타입",
  },
  {
    id: "ts-type-system-basics-2",
    post: "ts-type-system-basics",
    question:
      "renderButton({ label: \"삭제\", colour: \"danger\" })는 오류가 나는데, 같은 객체를 const props에 담아 renderButton(props)로 넘기면 통과한다. 왜일까?",
    choices: [
      "변수에 담으면 타입이 any가 되기 때문이다",
      "초과 속성 검사는 그 자리에서 만든 객체 리터럴에만 적용되기 때문이다",
      "const로 선언하면 속성이 readonly가 되기 때문이다",
      "colour가 color로 자동 변환되기 때문이다",
    ],
    answer: 1,
    explanation:
      "구조적 타이핑에서는 속성이 남아도 할당할 수 있다. 초과 속성 검사는 방금 만든 리터럴은 다른 곳에서 쓰일 일이 없으니 모르는 속성은 오타라고 보고 따로 거는 검사다. 변수에 담아 넘기면 그 객체가 다른 용도일 수 있어 검사하지 않는다.",
    anchor: "객체-리터럴에만-걸리는-검사",
  },
  {
    id: "ts-type-system-basics-3",
    post: "ts-type-system-basics",
    question: "외부에서 들어온 JSON을 any 대신 unknown으로 받을 때 달라지는 것은?",
    choices: [
      "확인하기 전에는 속성을 읽거나 호출할 수 없어 컴파일 단계에서 막힌다",
      "런타임에 값의 모양을 자동으로 검사한다",
      "JSON.parse가 더 빨라진다",
      "unknown은 null을 담을 수 없다",
    ],
    answer: 0,
    explanation:
      "unknown은 모든 값을 받지만 무엇인지 확인하기 전에는 쓰지 못하게 한다. 그래서 u.user.name 같은 코드가 TS18046으로 막힌다. 타입은 런타임에 사라지니 실제 검사는 typeof나 in으로 직접 해야 한다.",
    anchor: "집합으로-보는-any-unknown-never",
  },
  {
    id: "ts-type-system-basics-4",
    post: "ts-type-system-basics",
    question:
      "type Method = \"GET\" | \"POST\" 를 받는 send에 const req = { url: \"/a\", method: \"GET\" } 의 req.method를 넘기면 오류가 난다. 오타는 잡으면서 method를 \"GET\" 리터럴로 남기는 방법은?",
    choices: [
      "const req: { url: string; method: Method } = …",
      "let req = …",
      "… as any",
      "… satisfies { url: string; method: Method }",
    ],
    answer: 3,
    explanation:
      "객체 속성은 고칠 수 있어서 const 객체 안에서도 string으로 넓어진다. satisfies는 모양만 검사하고 타입은 값에서 추론하므로 method가 \"GET\"으로 남는다. 타입을 직접 적으면 method는 \"GET\" | \"POST\"가 되어 더 좁은 정보를 버린다.",
    anchor: "let은-넓히고-const는-좁힌다",
  },
  {
    id: "ts-type-system-basics-5",
    post: "ts-type-system-basics",
    question: "type AdminT = { id: string } & { id: number } 로 만든 뒤 { id: 1 }을 넣으면 어떤 일이 생기나?",
    choices: [
      "선언하는 줄에서 TS2430 오류가 난다",
      "선언은 통과하고, 값을 넣는 곳에서 id가 never라는 오류가 난다",
      "id가 string | number가 되어 통과한다",
      "뒤에 쓴 number가 앞의 string을 덮어써서 통과한다",
    ],
    answer: 1,
    explanation:
      "교차 타입은 충돌을 선언 시점에 알리지 않고 id를 string & number, 곧 never로 만든다. 그래서 값을 넣을 때 'number is not assignable to never'가 나와 원인을 찾기 어렵다. interface의 extends는 같은 충돌을 선언하는 줄에서 알려 준다.",
    anchor: "type과-interface-중-무엇을-쓰나",
  },
  {
    id: "ts-type-system-basics-6",
    post: "ts-type-system-basics",
    question:
      "const user = (await res.json()) as User; 로 받았는데 화면에 undefined가 찍힌다. 가장 먼저 의심할 곳은?",
    choices: [
      "tsconfig의 target이 낮다",
      "User 인터페이스를 type으로 바꿔야 한다",
      "as는 검사가 아니라서 실제 응답 모양이 User와 다를 수 있다",
      "res.json()이 타입을 지워서 값이 사라졌다",
    ],
    answer: 2,
    explanation:
      "타입은 컴파일 뒤에 지워지고, as User는 검사가 아니라 개발자의 보증일 뿐이다. 실제 응답 본문을 네트워크 탭에서 보고, 경계에서 unknown으로 받아 타입 가드나 스키마 검증으로 확인해야 한다.",
    anchor: "컴파일이-끝나면-타입은-사라진다",
  },
];
