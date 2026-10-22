import type { QuizQuestion } from "../types";

export const TSCONFIG_STRICT: QuizQuestion[] = [
  {
    id: "tsconfig-strict-1",
    post: "tsconfig-strict",
    question: "strict 없이 `const user = users.find(...); user.name`을 검사하면 에러가 없는 이유는?",
    choices: [
      "find가 항상 값을 찾는다고 TypeScript가 증명했기 때문이다",
      "strictNullChecks가 꺼져 있으면 undefined가 모든 타입에 섞인 것으로 보고 검사하지 않기 때문이다",
      "noImplicitAny가 꺼져 있어 user가 any가 되기 때문이다",
      "find의 반환 타입이 lib 파일에서 any로 선언되어 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "strictNullChecks가 꺼져 있으면 null과 undefined를 별도 타입으로 다루지 않아 find의 결과가 그냥 User로 보인다. user 자체는 User로 추론되므로 any 때문은 아니다. 켜면 User | undefined가 되어 TS18048이 난다.",
    anchor: "strict-한-줄이-켜는-검사들",
  },
  {
    id: "tsconfig-strict-2",
    post: "tsconfig-strict",
    question: "strict: true인 프로젝트에서 `const list = [1, 2, 3]; list[5].toFixed();`는 어떻게 되나?",
    choices: [
      "TS2532 에러가 난다",
      "범위를 벗어난 인덱스라 TS2493 에러가 난다",
      "에러 없이 통과하고 실행하면 TypeError가 난다",
      "list가 튜플로 추론되어 never가 된다",
    ],
    answer: 2,
    explanation:
      "strict 묶음만으로는 인덱스 접근 결과가 number로 보여서 그대로 통과한다. 인덱스로 읽은 값에 | undefined를 붙이는 건 strict 밖의 noUncheckedIndexedAccess다. 배열 리터럴은 튜플이 아니라 number[]로 추론된다.",
    anchor: "strict를-켜도-통과하는-코드",
  },
  {
    id: "tsconfig-strict-3",
    post: "tsconfig-strict",
    question: "번들러 없이 Node로 직접 실행하는 서버 코드에 moduleResolution: bundler를 쓰면 생기는 문제는?",
    choices: [
      "exports 필드를 읽지 못해 패키지를 못 찾는다",
      "모든 import에 .ts 확장자를 써야 해서 실행이 안 된다",
      "CommonJS로만 출력되어 import 문을 쓸 수 없다",
      "확장자 없는 상대 import가 검사는 통과하지만 실행할 때 ERR_MODULE_NOT_FOUND가 난다",
    ],
    answer: 3,
    explanation:
      "bundler는 번들러처럼 확장자를 붙여 찾아 주므로 ./util 같은 import가 통과한다. 하지만 Node의 ESM은 확장자를 붙여 주지 않아 실행할 때 모듈을 못 찾는다. Node가 직접 실행하는 코드는 nodenext로 검사해 .js 확장자를 쓰게 해야 한다.",
    anchor: "import-문자열을-파일로-바꾸는-규칙",
  },
  {
    id: "tsconfig-strict-4",
    post: "tsconfig-strict",
    question: "`export { User } from \"./types\"`(User는 interface)가 tsc에서는 괜찮은데 esbuild나 Node의 타입 제거로 실행하면 깨지는 이유는?",
    choices: [
      "파일 하나만 보고 변환하는 도구는 User가 타입인지 몰라 문장을 남기고, 실행할 때 없는 값을 찾기 때문이다",
      "esbuild는 interface 문법을 지원하지 않기 때문이다",
      "re-export는 ES 모듈 표준에 없는 문법이기 때문이다",
      "tsc가 types.ts를 먼저 컴파일하지 않았기 때문이다",
    ],
    answer: 0,
    explanation:
      "파일 단위 변환기는 다른 파일을 열지 않아 User가 지워도 되는 타입인지 판단할 수 없다. 남은 export 문이 실행될 때 types.ts에 User 값이 없어 SyntaxError가 난다. isolatedModules를 켜면 tsc가 TS1205로 미리 알려 주고 export type을 쓰게 한다.",
    anchor: "파일-하나만-보고-변환하는-도구들",
  },
  {
    id: "tsconfig-strict-5",
    post: "tsconfig-strict",
    question: "skipLibCheck: true일 때 직접 쓴 env.d.ts에서 같은 전역 변수를 다른 타입으로 두 번 선언하면?",
    choices: [
      "TS2451 에러가 난다. skipLibCheck는 node_modules만 건너뛴다",
      "나중 선언이 앞 선언을 덮어쓴다는 경고가 난다",
      "빌드가 멈춘다",
      "아무 에러도 나지 않는다. skipLibCheck는 모든 .d.ts를 건너뛴다",
    ],
    answer: 3,
    explanation:
      "skipLibCheck는 이름과 달리 node_modules만이 아니라 모든 .d.ts 파일의 검사를 건너뛴다. 그래서 직접 쓴 선언 파일의 중복 선언이나 없는 타입 이름도 조용히 통과한다. 전역 선언은 .ts 파일의 declare global로 옮기면 검사를 받는다.",
    anchor: "skiplibcheck가-건너뛰는-것",
  },
  {
    id: "tsconfig-strict-6",
    post: "tsconfig-strict",
    question: "프로젝트 참조를 쓰는 모노레포에서 공용 패키지를 고친 뒤 앱 폴더에서 `tsc -p .`만 돌렸더니 'Cannot find module'이 났다. 가장 그럴듯한 원인은?",
    choices: [
      "앱의 moduleResolution이 bundler라서",
      "참조하는 쪽은 상대의 빌드된 .d.ts를 읽는데, tsc -p는 참조한 프로젝트를 빌드하지 않아서",
      "composite를 앱 쪽에 켜지 않아서",
      "skipLibCheck가 켜져 있어서",
    ],
    answer: 1,
    explanation:
      "프로젝트 참조에서는 참조하는 쪽이 소스가 아니라 상대가 빌드한 .d.ts를 본다. tsc -b로 돌려야 참조한 프로젝트부터 순서대로 빌드하고, 바뀌지 않은 프로젝트는 건너뛴다. composite는 참조되는 쪽에 켜는 옵션이다.",
    anchor: "저장소가-커지면-프로젝트를-나눈다",
  },
  {
    id: "tsconfig-strict-7",
    post: "tsconfig-strict",
    question: "오래된 코드에 strict를 켤 때 `@ts-ignore` 대신 `@ts-expect-error`를 권하는 이유는?",
    choices: [
      "@ts-expect-error는 런타임 에러까지 막아 주기 때문이다",
      "@ts-ignore는 strict 모드에서 동작하지 않기 때문이다",
      "아래 줄이 고쳐지면 @ts-expect-error는 TS2578을 내서 남은 주석을 지우게 하기 때문이다",
      "@ts-expect-error는 에러 코드를 지정해 하나만 막을 수 있기 때문이다",
    ],
    answer: 2,
    explanation:
      "@ts-ignore는 아래 줄에 에러가 있든 없든 계속 덮어 두지만, @ts-expect-error는 에러가 없어지면 Unused directive 에러를 낸다. 그래서 고친 뒤 주석이 남아 다른 에러를 숨기는 일이 줄어든다. 둘 다 에러 코드를 골라 막는 기능은 없다.",
    anchor: "이미-있는-코드에-strict를-켜는-순서",
  },
];
