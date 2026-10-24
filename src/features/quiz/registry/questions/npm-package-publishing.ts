import type { QuizQuestion } from "../types";

export const NPM_PACKAGE_PUBLISHING: QuizQuestion[] = [
  {
    id: "npm-package-publishing-1",
    post: "npm-package-publishing",
    question:
      ".gitignore에 .env를 적어 둔 패키지에 .npmignore를 새로 만들고 test/만 적었다. files 필드는 없다. npm pack을 하면 .env는 어떻게 되나?",
    choices: [
      ".gitignore가 여전히 적용되어 빠진다",
      "npm은 .env를 항상 자동으로 뺀다",
      ".npmignore가 있으면 .gitignore를 보지 않으므로 들어간다",
      "두 파일이 충돌해 npm pack이 실패한다",
    ],
    answer: 2,
    explanation:
      "files가 없을 때 npm은 .npmignore를 쓰고, 그 파일이 없을 때만 .gitignore를 대신 쓴다. 그래서 .npmignore를 만드는 순간 .gitignore의 .env 규칙이 사라진다. 넣을 것만 적는 files가 더 안전한 이유다.",
    anchor: "무엇이-tarball에-들어가는지부터-본다",
  },
  {
    id: "npm-package-publishing-2",
    post: "npm-package-publishing",
    question:
      "main만 쓰던 패키지에 exports를 추가해 마이너 버전으로 냈더니 사용자 코드가 ERR_PACKAGE_PATH_NOT_EXPORTED로 깨졌다. 왜인가?",
    choices: [
      "exports가 있으면 적힌 경로만 열리고, 사용자가 쓰던 dist 안쪽 경로가 막혔기 때문이다",
      "exports를 쓰면 CommonJS require가 전부 막히기 때문이다",
      "마이너 버전에서는 exports 필드를 읽지 않기 때문이다",
      "exports와 main을 함께 쓰면 Node가 둘 다 무시하기 때문이다",
    ],
    answer: 0,
    explanation:
      "exports는 공개 API의 경계라 적지 않은 경로는 파일이 있어도 패키지 밖에서 열 수 없다. 그동안 열리던 깊은 경로가 닫히는 것이니 깨는 변경이고 주 버전으로 내야 한다.",
    anchor: "exports는-문을-하나만-남긴다",
  },
  {
    id: "npm-package-publishing-3",
    post: "npm-package-publishing",
    question:
      "exports의 \".\" 조건 객체를 { default: \"./d.js\", import: \"./a.mjs\" } 순서로 적었다. ESM에서 import하면 어떤 파일이 열리나?",
    choices: [
      "./a.mjs. import 조건이 default보다 항상 우선한다",
      "./d.js. 조건은 위에서부터 읽어 처음 맞는 키를 고르고 default는 항상 맞는다",
      "둘 다 열려서 같은 모듈이 두 번 평가된다",
      "조건이 모호해서 Node가 에러를 낸다",
    ],
    answer: 1,
    explanation:
      "Node는 조건 객체의 키를 적힌 순서대로 훑다가 처음 맞는 것을 고른다. default는 어느 환경에서나 맞으니 맨 위에 두면 아래 조건은 닿지 않는다. 그래서 types는 맨 위, default는 맨 아래에 둔다.",
    anchor: "exports는-문을-하나만-남긴다",
  },
  {
    id: "npm-package-publishing-4",
    post: "npm-package-publishing",
    question:
      "ESM과 CJS 두 벌을 내는 패키지에 모듈 변수로 캐시를 두었다. 앱은 import로, 다른 라이브러리는 require로 이 패키지를 쓴다. 무슨 일이 생기나?",
    choices: [
      "Node가 두 형식을 하나로 합쳐 캐시를 공유한다",
      "require 쪽이 실패해서 앱이 시작되지 않는다",
      "lockfile이 두 벌 중 하나만 남겨서 문제가 없다",
      "두 파일이 따로 평가되어 캐시가 둘로 나뉘고 서로의 값을 못 본다",
    ],
    answer: 3,
    explanation:
      "index.mjs와 index.cjs는 서로 다른 모듈이라 각자 평가되고 모듈 변수도 각자 가진다. 실험에서도 양쪽에서 한 번씩 부르니 카운터가 각각 1이었다. 상태가 있으면 구현을 한 형식에만 두고 다른 쪽은 다시 내보내는 래퍼로 만든다.",
    anchor: "esm과-cjs를-둘-다-내보낼-때-생기는-일",
  },
  {
    id: "npm-package-publishing-5",
    post: "npm-package-publishing",
    question:
      "exports에 import: \"./dist/index.mjs\"만 있고 타입은 맨 위 types의 index.d.ts 하나뿐이다. moduleResolution nodenext 프로젝트에서 TS7016이 나는 이유는?",
    choices: [
      "TypeScript가 exports를 따라 index.mjs를 찾은 뒤 짝인 index.d.mts를 찾는데 없고, exports가 있으면 맨 위 types는 보지 않아서",
      "nodenext는 .d.ts 파일을 아예 지원하지 않아서",
      "types 필드는 main과 같은 폴더에 있어야만 읽혀서",
      "TypeScript는 ESM 패키지의 타입을 읽지 못해서",
    ],
    answer: 0,
    explanation:
      "nodenext는 런타임과 같은 규칙으로 exports를 따라가고, .mjs 옆에서는 .d.mts를, .cjs 옆에서는 .d.cts를 찾는다. 에러 메시지도 index.d.ts가 있지만 exports를 존중하면 닿지 않는다고 알려 준다. 조건마다 types를 적어 짝을 맞추면 고쳐진다.",
    anchor: "타입이-안-잡히는-패키지",
  },
  {
    id: "npm-package-publishing-6",
    post: "npm-package-publishing",
    question:
      "package.json에 chalk가 ^4.0.0으로 적혀 있고 4.0.0이 깔려 있다. Latest는 6.0.1이다. npm update를 하면?",
    choices: [
      "6.0.1로 올라가고 package.json도 ^6.0.1로 바뀐다",
      "lockfile 때문에 아무것도 바뀌지 않는다",
      "범위 안의 최신인 4.x(Wanted)까지만 올라가고 범위 문자열은 그대로다",
      "주 버전 차이가 있어 에러로 멈춘다",
    ],
    answer: 2,
    explanation:
      "npm update는 범위 안에서 가장 높은 버전까지만 올리고 lockfile과 node_modules를 갱신한다. 실험에서도 4.1.2까지만 올라갔고 package.json의 ^4.0.0은 그대로였다. 주 버전은 npm install chalk@6처럼 직접 올린다.",
    anchor: "outdated와-update는-범위-안에서만-움직인다",
  },
  {
    id: "npm-package-publishing-7",
    post: "npm-package-publishing",
    question:
      "npm workspaces에서 admin이 fmt의 빌드 결과를 import한다. 깨끗한 CI에서 npm run build --workspaces가 admin 빌드에서 실패했다. 가장 그럴듯한 원인은?",
    choices: [
      "워크스페이스끼리는 링크가 생기지 않아서",
      "npm이 의존 순서가 아니라 선언 순서로 돌아 admin이 fmt보다 먼저 빌드돼서",
      "--workspaces는 루트 스크립트만 실행해서",
      "private 워크스페이스는 빌드할 수 없어서",
    ],
    answer: 1,
    explanation:
      "npm은 워크스페이스를 의존 그래프로 정렬하지 않고 선언(폴더 정렬) 순서로 실행한다. 실험에서도 admin이 fmt보다 먼저 돌았다. 순서를 직접 적거나 위상 정렬을 해 주는 도구를 쓴다.",
    anchor: "여러-패키지를-한-저장소에서-npm-workspaces",
  },
];
