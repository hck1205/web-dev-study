import type { QuizQuestion } from "../types";

export const LINTERS_FORMATTERS: QuizQuestion[] = [
  {
    id: "linters-formatters-1",
    post: "linters-formatters",
    question: "await 없이 fetch를 부른 코드가 있다. Prettier와 ESLint(타입 기반 규칙 켬)를 각각 돌리면 어떻게 되나?",
    choices: [
      "Prettier가 세미콜론을 붙이며 경고하고, ESLint는 모양만 고친다",
      "둘 다 같은 경고를 낸다",
      "Prettier는 모양만 바꾸고 fetch는 그대로 두며, ESLint가 처리하지 않은 Promise로 보고한다",
      "Prettier가 await를 자동으로 붙여 준다",
    ],
    answer: 2,
    explanation:
      "포매터는 코드를 다시 찍어 모양만 맞추고 의미는 바꾸지 않는다. 처리하지 않은 Promise는 동작의 문제라서 린터, 그중에서도 반환 타입을 아는 no-floating-promises 규칙이 잡는다. 포매터가 await를 붙이면 의미가 바뀌니 그런 일은 하지 않는다.",
    anchor: "모양과-의미는-다른-문제다",
  },
  {
    id: "linters-formatters-2",
    post: "linters-formatters",
    question: "ESLint 규칙이 백 개 켜져 있어도 파일마다 구문 트리를 한 번만 걷는 이유는?",
    choices: [
      "규칙마다 따로 정규식으로 소스 문자열을 훑기 때문에",
      "규칙이 관심 있는 노드 종류(선택자)를 등록해 두고, 한 번 걸으며 그 노드에 도착할 때 해당 규칙만 부르기 때문에",
      "규칙 백 개를 하나의 규칙으로 합쳐서 컴파일하기 때문에",
      "변경된 줄만 다시 파싱하기 때문에",
    ],
    answer: 1,
    explanation:
      "ESLint는 소스를 AST로 바꾼 뒤 깊이 우선으로 한 번 걷는다. 규칙은 BinaryExpression이나 CallExpression 같은 선택자를 키로 등록해 두고, 그 노드에 도착하면 불린다. 문자열을 정규식으로 훑는 방식이 아니다.",
    anchor: "eslint는-구문-트리를-한-번-걸으며-규칙을-부른다",
  },
  {
    id: "linters-formatters-3",
    post: "linters-formatters",
    question: "flat config에서 tseslint.configs.base(파서만)에 규칙 객체를 붙였더니 .ts 파일이 모두 무시된다고 나온다. 원인은?",
    choices: [
      "flat config는 기본으로 .js, .mjs, .cjs만 검사해서, .ts를 가리키는 files 패턴이 있는 객체가 없으면 맞는 설정이 없기 때문",
      "TypeScript 파일은 ESLint 10에서 지원하지 않기 때문",
      ".eslintignore 파일이 없어서",
      "tsconfig.json의 strict가 꺼져 있어서",
    ],
    answer: 0,
    explanation:
      "flat config는 파일마다 files 패턴이 맞는 객체만 적용한다. 기본 대상은 JavaScript 확장자뿐이라, 어떤 객체에도 **/*.ts 같은 패턴이 없으면 그 파일은 맞는 설정이 없어 무시된다. typescript-eslint의 추천 묶음은 이 패턴을 갖고 있어 이 문제가 없다.",
    anchor: "flat-config-하나로-모인-설정",
  },
  {
    id: "linters-formatters-4",
    post: "linters-formatters",
    question: "타입 기반 린트 규칙을 pre-commit 훅보다 CI에서 돌리는 경우가 많은 이유로 가장 알맞은 것은?",
    choices: [
      "타입 기반 규칙은 CI 환경에서만 동작해서",
      "pre-commit 훅은 TypeScript 파일을 읽지 못해서",
      "타입 기반 규칙은 자동 수정이 안 되어서",
      "TypeScript 컴파일러로 프로젝트 전체 타입을 계산해야 해서 느리고, 바뀐 파일만 보면 다른 파일 변경의 영향을 놓칠 수 있어서",
    ],
    answer: 3,
    explanation:
      "어떤 값이 Promise인지 알려면 프로젝트 전체 타입이 필요해서 실습에서도 타입 없는 규칙의 두 배쯤 걸렸다. 커밋 훅은 몇 초 안에 끝나야 사람들이 끄지 않는다. 그래서 빠른 검사는 가까이, 타입 규칙을 포함한 전체 검사는 CI에 둔다.",
    anchor: "타입을-아는-규칙은-비싸다",
  },
  {
    id: "linters-formatters-5",
    post: "linters-formatters",
    question: "eslint-config-prettier를 설정 배열의 맨 앞에 넣었더니 여전히 quotes 오류가 난다. 왜 그런가?",
    choices: [
      "eslint-config-prettier는 TypeScript 파일에는 적용되지 않아서",
      "flat config는 뒤에 있는 객체가 이기므로, 뒤에서 다시 켠 quotes 규칙이 off를 덮어써서",
      "eslint-config-prettier는 규칙을 끄지 않고 Prettier를 실행만 해서",
      "Prettier 설정 파일이 없어서",
    ],
    answer: 1,
    explanation:
      "flat config는 맞는 객체를 앞에서부터 덮어써서 뒤의 설정이 이긴다. 모양 규칙을 끄는 eslint-config-prettier는 마지막에 둬야 앞에서 켠 규칙을 덮는다. Prettier를 ESLint 안에서 실행하는 건 이름이 비슷한 eslint-plugin-prettier다.",
    anchor: "eslint와-prettier가-서로-고치기-시작할-때",
  },
  {
    id: "linters-formatters-6",
    post: "linters-formatters",
    question: "ESLint에서 Biome로 옮기자는 제안이 왔다. 속도 말고 가장 먼저 확인할 것은?",
    choices: [
      "팀이 쓰던 React 훅·접근성·커스텀·타입 기반 규칙이 새 도구에 있는지",
      "Biome가 JSON 파일도 포맷하는지",
      "Biome 설정 파일 이름이 eslint.config.js와 같은지",
      "Biome가 Prettier보다 최신 버전인지",
    ],
    answer: 0,
    explanation:
      "Rust로 짠 도구는 확실히 빠르지만, 팀이 의지하던 플러그인 규칙이나 직접 만든 규칙은 그대로 옮겨지지 않는다. Biome의 타입 기반 규칙은 자체 추론이고 일부는 아직 실험 단계라 typescript-eslint와 결과가 다를 수 있다.",
    anchor: "rust로-다시-짠-도구들-biome와-oxlint",
  },
  {
    id: "linters-formatters-7",
    post: "linters-formatters",
    question: "CI에서 eslint에 --max-warnings 0을 주는 이유는?",
    choices: [
      "경고를 자동으로 오류로 고쳐 주기 때문에",
      "경고 메시지를 숨겨 로그를 줄이기 위해",
      "warn은 종료 코드를 바꾸지 않아 그대로 두면 경고가 쌓여도 CI가 통과하고, 쓸모없어진 eslint-disable 경고도 놓치기 때문에",
      "타입 기반 규칙을 켜려면 반드시 필요한 옵션이라서",
    ],
    answer: 2,
    explanation:
      "warn은 보고만 하고 종료 코드는 0이라서 몇백 개가 쌓여도 CI는 초록불이다. --max-warnings 0이면 경고 하나도 실패가 되어, ESLint 9부터 기본으로 나오는 쓸모없는 끄기 주석 경고까지 잡힌다.",
    anchor: "규칙을-끄는-주석이-쌓인다",
  },
];
