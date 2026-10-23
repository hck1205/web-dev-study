import type { QuizQuestion } from "../types";

export const RUNTIME_VALIDATION_ZOD: QuizQuestion[] = [
  {
    id: "runtime-validation-zod-1",
    post: "runtime-validation-zod",
    question: "JSON.parse(body) as User로 받은 값의 name이 null일 때 에러는 어디서 나나?",
    choices: [
      "as User 줄에서 TypeScript가 런타임 예외를 던진다",
      "tsc가 컴파일 단계에서 막는다",
      "JSON.parse가 실패한다",
      "단언은 런타임 코드가 없으니 name을 처음 쓰는 자리(예: toUpperCase)에서 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "as는 검사기에게 하는 보증일 뿐이라 컴파일 뒤에 아무것도 남지 않는다. 틀린 값은 앱 안으로 들어와 쓰는 자리에서 터지고, 스택 트레이스는 원인이 아닌 증상을 가리킨다. 경계에서 parse하면 그 자리에서 필드 경로와 이유가 나온다.",
    anchor: "타입-단언은-검사가-아니라-약속이다",
  },
  {
    id: "runtime-validation-zod-2",
    post: "runtime-validation-zod",
    question: "interface User와 손으로 쓴 isUser 가드 대신 z.infer로 타입을 뽑으면 무엇이 좋아지나?",
    choices: [
      "검증 규칙과 타입이 같은 스키마에서 나와 필드를 추가해도 둘이 어긋나지 않는다",
      "검증이 컴파일 시간에 끝나 런타임 비용이 없다",
      "번들 크기가 줄어든다",
      "서버 응답이 자동으로 고쳐진다",
    ],
    answer: 0,
    explanation:
      "가드는 value is User라고 선언하면 검사기가 본문을 확인하지 않아서, 인터페이스만 고치고 가드를 빼먹어도 통과한다. 스키마에서 타입을 뽑으면 필드 추가가 곧 검증 추가다. 검증 자체는 여전히 런타임에 돈다.",
    anchor: "스키마-하나에서-타입을-뽑는다",
  },
  {
    id: "runtime-validation-zod-3",
    post: "runtime-validation-zod",
    question: "환경 변수 DEBUG=false를 z.coerce.boolean()으로 읽으면 결과는?",
    choices: [
      "false",
      "검증 실패",
      "true. Boolean(\"false\")처럼 빈 문자열이 아닌 문자열은 모두 참이 된다",
      "undefined",
    ],
    answer: 2,
    explanation:
      "coerce는 자바스크립트의 형 변환을 그대로 쓴다. 같은 이유로 빈 칸과 null은 z.coerce.number()에서 0이 된다. 문자열 불리언은 \"true\", \"false\" 같은 값을 규칙대로 읽는 z.stringbool()을 쓴다.",
    anchor: "들어온-값을-바꾸는-coerce와-transform",
  },
  {
    id: "runtime-validation-zod-4",
    post: "runtime-validation-zod",
    question: "비밀번호 확인 refine에 path: [\"pw2\"]를 주는 이유는?",
    choices: [
      "주지 않으면 refine이 실행되지 않는다",
      "주지 않으면 에러가 객체 전체(formErrors)에 붙어 어느 입력 칸 아래에 보여 줄지 알 수 없다",
      "비동기 검사를 쓰려면 path가 필요하다",
      "pw2를 출력 타입에서 지우기 위해서다",
    ],
    answer: 1,
    explanation:
      "객체 단계의 refine은 기본으로 루트 경로에 에러를 남긴다. path를 주면 flattenError 결과의 fieldErrors.pw2로 들어가 그 칸 아래에 보여 줄 수 있다.",
    anchor: "필드-사이의-규칙은-refine으로",
  },
  {
    id: "runtime-validation-zod-5",
    post: "runtime-validation-zod",
    question: "API 응답 검증에 z.strictObject를 쓰지 않는 편이 나은 이유는?",
    choices: [
      "strictObject는 중첩 객체를 검사하지 못해서",
      "strictObject는 null을 허용하지 않아서",
      "strictObject는 번들 크기가 훨씬 커서",
      "서버가 필드를 하나 추가하는 하위 호환 변경만으로 unrecognized_keys 실패가 나 화면이 깨지기 때문이다",
    ],
    answer: 3,
    explanation:
      "응답에는 클라이언트가 모르는 필드가 늘 생길 수 있다. 기본 z.object는 모르는 키를 버리니 그런 변경에 강하다. 요청 본문처럼 들어오면 안 되는 키를 막아야 하는 곳에서 strictObject를 고려한다.",
    anchor: "신뢰-경계는-어디인가",
  },
  {
    id: "runtime-validation-zod-6",
    post: "runtime-validation-zod",
    question:
      "서버가 주문 상태에 \"refunded\"를 추가했고 클라이언트는 z.array(Order)로 목록을 검증한다. 무슨 일이 생기고 어떻게 완화하나?",
    choices: [
      "그 원소만 자동으로 빠진다. 따로 할 일은 없다",
      "배열 전체가 실패한다. 원소마다 safeParse해 실패한 것만 빼거나, 모르는 값을 catch로 대체 값으로 받는다",
      "z.enum이 새 값을 자동으로 배운다",
      "타입 에러가 나서 배포가 막힌다",
    ],
    answer: 1,
    explanation:
      "배열 스키마는 원소 하나만 틀려도 전체가 실패한다. 표시용 필드라면 원소별 검증이나 catch로 화면을 살리고, 돈이나 권한처럼 위험한 값은 실패시킨다. 어느 쪽이든 issues를 에러 추적 도구로 보내 계약 변경을 빨리 안다.",
    anchor: "검증에-실패하면-무엇을-할까",
  },
  {
    id: "runtime-validation-zod-7",
    post: "runtime-validation-zod",
    question: "엄격한 CSP(unsafe-eval 금지) 사이트에서 zod 4에 z.config({ jitless: true })를 주는 이유는?",
    choices: [
      "zod가 new Function으로 검사 코드를 만들려는 시도 자체를 하지 않게 해서 CSP 위반 보고를 막는다",
      "jitless를 켜야 zod가 동작한다",
      "번들에서 로케일 파일을 뺀다",
      "검증 속도를 높인다",
    ],
    answer: 0,
    explanation:
      "zod 4는 가능하면 new Function으로 객체 검사 코드를 만들어 빠르게 돈다. CSP가 막으면 느린 경로로 돌아가 동작은 하지만 위반 보고가 남을 수 있다. jitless는 그 시도를 처음부터 건너뛰고, 대신 JIT 경로보다 느려진다.",
    anchor: "번들-크기와-속도-zod-zodmini-valibot",
  },
];
