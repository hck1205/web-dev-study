import type { QuizQuestion } from "../types";

export const TS_DECLARATION_FILES_MODULES: QuizQuestion[] = [
  {
    id: "ts-declaration-files-modules-1",
    post: "ts-declaration-files-modules",
    question:
      "import { createTheme } from \"typed-lib\"가 잘 되던 프로젝트에 import 없는 .d.ts로 declare module \"typed-lib\" { interface Theme { brand: string } }를 추가하자 TS2305가 났다. 원인은?",
    choices: [
      "Theme이 type 별칭이라 보강할 수 없어서",
      "파일이 스크립트라서 보강이 아니라 typed-lib 모듈을 새로 선언한 것이 되어 원래 선언을 가렸기 때문이다",
      "include에 그 .d.ts가 빠져서",
      "skipLibCheck가 켜져 있어서",
    ],
    answer: 1,
    explanation:
      "import나 export가 없는 파일 안의 declare module은 앰비언트 모듈 선언이 되고, 검사기는 그것을 실제 패키지보다 먼저 쓴다. 그래서 Theme 말고는 아무것도 없는 모듈이 됐다. 파일 맨 위에 import \"typed-lib\"를 넣어 모듈로 만들면 기존 선언에 합쳐진다.",
    anchor: "있는-타입에-필드-더하기-모듈-보강",
  },
  {
    id: "ts-declaration-files-modules-2",
    post: "ts-declaration-files-modules",
    question:
      "package.json에 \"types\": \"./dist/types/index.d.ts\"와 \"exports\": { \".\": { \"import\": \"./dist/esm/index.js\" } }만 있다. moduleResolution이 bundler인 앱에서 TS7016이 나는 이유는?",
    choices: [
      "bundler 모드는 .d.ts를 전혀 읽지 않기 때문이다",
      "@types 패키지가 우선이기 때문이다",
      "exports가 있으면 최상위 types를 보지 않고, import 조건으로 찾은 JS 옆에 .d.ts가 없기 때문이다",
      "type: module 패키지는 타입을 배포할 수 없기 때문이다",
    ],
    answer: 2,
    explanation:
      "bundler와 nodenext는 exports를 따르므로 types 조건이 없으면 dist/esm/index.js 옆에서 index.d.ts를 찾다가 실패한다. 메시지에 'There are types at ...'이 함께 나온다. exports 안에 types 조건을 맨 앞에 넣으면 해결되고, node10 해석에서는 원래 문제가 없었다.",
    anchor: "exports에-types가-빠진-패키지",
  },
  {
    id: "ts-declaration-files-modules-3",
    post: "ts-declaration-files-modules",
    question: "import도 export도 없는 global.d.ts에 declare global { interface Window { dataLayer: unknown[] } }를 쓰면?",
    choices: [
      "TS2669가 난다. declare global은 모듈 파일 안에서만 쓸 수 있다",
      "정상적으로 Window가 확장된다",
      "Window가 dataLayer 하나만 가진 타입으로 바뀐다",
      "런타임에 window.dataLayer가 만들어진다",
    ],
    answer: 0,
    explanation:
      "declare global은 모듈 안에서 전역에 선언을 더할 때 쓰는 문법이라 스크립트 파일에서는 TS2669가 난다. 파일 끝에 export {}를 넣거나, 스크립트 파일이라면 declare global 없이 interface Window를 바로 쓴다. 선언 파일은 런타임 값을 만들지 않는다.",
    anchor: "전역에-붙이기-declare-global과-window",
  },
  {
    id: "ts-declaration-files-modules-4",
    post: "ts-declaration-files-modules",
    question: "같은 파일에 같은 이름으로 두 번 선언했을 때 합쳐지지 않고 TS2300 중복 에러가 나는 것은?",
    choices: [
      "interface 두 개",
      "function과 같은 이름의 namespace",
      "class와 같은 이름의 interface",
      "type 별칭 두 개",
    ],
    answer: 3,
    explanation:
      "선언 병합은 인터페이스, namespace와 함수·클래스·enum 같은 조합에만 적용된다. 타입 별칭은 합쳐지지 않으니, 다른 곳에서 보강할 수 있게 열어 둘 타입은 interface로 내보낸다.",
    anchor: "같은-이름이-합쳐지는-규칙-선언-병합",
  },
  {
    id: "ts-declaration-files-modules-5",
    post: "ts-declaration-files-modules",
    question:
      "types/legacy-slug.d.ts에 declare module \"legacy-slug\"를 정확히 썼는데 CI의 tsc에서 여전히 TS7016이 난다. 먼저 확인할 것은?",
    choices: [
      "esModuleInterop이 켜져 있는지",
      "tsc --explainFiles로 그 .d.ts가 프로그램에 들어 있는지(include에 types 폴더가 있는지)",
      "@types/legacy-slug 버전이 맞는지",
      "skipLibCheck를 끄면 해결되는지",
    ],
    answer: 1,
    explanation:
      "선언을 써도 그 파일이 include에 잡히지 않으면 검사기는 존재조차 모른다. 편집기는 열린 파일을 함께 봐서 되는데 CI만 실패하는 경우가 대부분 이것이다. --explainFiles 출력에 그 파일이 'Matched by include pattern'으로 나와야 한다.",
    anchor: "타입-없는-라이브러리에-직접-타입-붙이기",
  },
  {
    id: "ts-declaration-files-modules-6",
    post: "ts-declaration-files-modules",
    question: "tsconfig에 \"types\": []를 적었을 때 일어나는 일로 맞는 것은?",
    choices: [
      "import하는 모든 패키지의 @types를 찾지 않는다",
      ".d.ts 파일을 하나도 읽지 않는다",
      "@types의 전역 선언(describe 등)이 자동으로 들어오지 않지만, 직접 import한 모듈의 @types는 그대로 찾는다",
      "lib.dom.d.ts가 빠진다",
    ],
    answer: 2,
    explanation:
      "types는 node_modules/@types를 전역으로 자동 포함하는 목록만 정한다. 그래서 describe에 TS2593이 나지만 import slug from \"legacy-slug\"의 @types는 여전히 해석된다. DOM 타입은 lib 옵션이 정한다.",
    anchor: "전역-타입이-어디서-오는지-정하는-types",
  },
  {
    id: "ts-declaration-files-modules-7",
    post: "ts-declaration-files-modules",
    question: "큰 JS 프로젝트에 checkJs를 단계적으로 도입하는 순서로 가장 알맞은 것은?",
    choices: [
      "모든 파일을 한 번에 .ts로 바꾸고 에러를 any로 막는다",
      "checkJs를 켜고 skipLibCheck로 에러를 숨긴다",
      "@types만 설치하면 JS 파일도 검사된다",
      "고칠 파일에 // @ts-check로 시작해, 나중에 checkJs를 켜고 남은 파일에 // @ts-nocheck를 붙여 줄여 간다",
    ],
    answer: 3,
    explanation:
      "파일 단위로 켰다가 전체로 넓히고, 못 고친 파일 목록을 @ts-nocheck로 관리하면 남은 작업량이 보인다. JSDoc의 @typedef import()로 .ts 타입을 가져다 쓸 수 있어 공통 타입부터 옮기면 된다. skipLibCheck는 선언 파일 검사만 건너뛴다.",
    anchor: "js-프로젝트에-jsdoc으로-타입-들이기",
  },
];
