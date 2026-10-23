import type { QuizQuestion } from "../types";

export const FRONTEND_BUILD_TOOLING: QuizQuestion[] = [
  {
    id: "frontend-build-tooling-1",
    post: "frontend-build-tooling",
    question: "같은 2000개 컴포넌트 앱에서 Vite 개발 서버는 0.4초 만에 떴지만 첫 화면까지 4~5초가 걸렸다. 이유로 가장 알맞은 것은?",
    choices: [
      "Vite가 시작할 때 소스 전체를 묶느라 시간이 걸려서",
      "Vite는 소스를 묶지 않아 브라우저가 모듈마다 요청하고, 서버가 요청마다 변환해서",
      "Vite는 타입 검사를 먼저 끝내야 화면을 보내서",
      "HMR 웹소켓 연결이 끝날 때까지 화면을 그리지 않아서",
    ],
    answer: 1,
    explanation:
      "Vite 개발 서버는 시작 비용이 거의 없는 대신 브라우저가 import를 따라 모듈을 하나씩 요청해 실험에서 요청이 2009개였다. webpack은 시작할 때 번들을 만들어 11초가 걸렸지만 첫 화면은 번들 하나라 빨랐다. 두 방식은 시간을 쓰는 자리가 다르다.",
    anchor: "묶어서-띄우는-서버-요청받고-바꾸는-서버",
  },
  {
    id: "frontend-build-tooling-2",
    post: "frontend-build-tooling",
    question: "Vite에서 CommonJS 패키지인 dayjs를 optimizeDeps.exclude에 넣었더니 브라우저에서 \"does not provide an export named 'default'\"가 났다. 왜인가?",
    choices: [
      "dayjs가 ESM 전용 패키지라서",
      "exclude한 패키지는 node_modules에서 지워져서",
      "사전 번들링이 CommonJS를 ES 모듈로 감싸 주는데, 그 단계를 건너뛰어 브라우저가 module.exports를 읽지 못해서",
      "lockfile 해시가 바뀌어 캐시가 무효가 되어서",
    ],
    answer: 2,
    explanation:
      "브라우저의 ES 모듈 로더는 require와 module.exports를 모른다. 의존성 사전 번들링이 CommonJS 패키지를 ES 모듈로 감싸고 여러 파일을 하나로 묶는다. 이 단계를 빼면 default export가 없는 모듈로 보인다.",
    anchor: "node_modules는-미리-한-번-묶어-둔다",
  },
  {
    id: "frontend-build-tooling-3",
    post: "frontend-build-tooling",
    question: "validate.ts만 고쳤는데 서버 로그에는 hmr update /src/SignupForm.tsx가 찍혔다. 무슨 뜻인가?",
    choices: [
      "validate.ts는 스스로 accept하지 않아서 import하는 쪽으로 올라갔고, accept가 있는 SignupForm.tsx가 경계가 되었다",
      "Vite가 파일 이름을 잘못 기록한 버그다",
      "validate.ts는 HMR 대상이 아니라 무시되고 SignupForm.tsx만 다시 그려졌다",
      "두 파일이 같은 청크에 묶여 있어서 이름이 바뀌어 보인다",
    ],
    answer: 0,
    explanation:
      "HMR은 바뀐 모듈에서 import 그래프를 거슬러 올라가 accept를 선언한 경계를 찾는다. React 플러그인이 컴포넌트 파일에 accept를 넣어 두었으니 SignupForm.tsx가 경계가 되어 새 validate.ts와 함께 다시 실행된다. 진입 파일까지 경계 없이 닿으면 전체 새로고침이다.",
    anchor: "고친-파일-하나를-바꿔-끼우는-길",
  },
  {
    id: "frontend-build-tooling-4",
    post: "frontend-build-tooling",
    question: "컴포넌트 파일에 export function isValidEmail을 추가한 뒤로 저장할 때마다 입력이 지워진다. 가장 알맞은 해결은?",
    choices: [
      "// @refresh reset 주석을 파일 맨 위에 단다",
      "isValidEmail을 다른 파일로 옮겨 컴포넌트 파일은 컴포넌트만 export하게 한다",
      "useState를 useRef로 바꿔 상태를 보존한다",
      "vite --force로 의존성을 다시 묶는다",
    ],
    answer: 1,
    explanation:
      "React 플러그인은 모듈의 export가 모두 컴포넌트일 때만 바꿔 끼운다. 함수가 섞이면 그 함수를 쓰는 다른 모듈이 옛 함수를 들고 있게 되므로 invalidate하고 전체 새로고침한다. @refresh reset은 오히려 매번 다시 마운트하게 만든다.",
    anchor: "fast-refresh가-상태를-지키는-조건",
  },
  {
    id: "frontend-build-tooling-5",
    post: "frontend-build-tooling",
    question: "esbuild로 파일마다 변환한 코드에서 export { Order } from \"./status.js\"가 런타임 SyntaxError를 냈다. Order는 interface다. 원인과 예방책은?",
    choices: [
      "esbuild가 interface를 지원하지 않는다. tsc로만 빌드해야 한다",
      "Order가 순환 import에 걸렸다. import 순서를 바꾼다",
      "Node.js가 TypeScript 파일을 직접 읽지 못해서다. 확장자를 .ts로 바꾼다",
      "파일 하나만 보는 변환기는 Order가 타입인지 몰라 재export를 남기고, status.js에서는 interface가 지워져서다. export type을 쓰고 isolatedModules나 verbatimModuleSyntax를 켠다",
    ],
    answer: 3,
    explanation:
      "esbuild, SWC 같은 빠른 변환기는 다른 파일의 타입 정보를 보지 않는다. 그래서 타입 재export를 값으로 남기고, 대상 모듈에는 그 이름이 없어 에러가 난다. isolatedModules를 켜면 tsc가 TS1205로 미리 알려 준다.",
    anchor: "트랜스파일러는-파일-하나만-본다",
  },
  {
    id: "frontend-build-tooling-6",
    post: "frontend-build-tooling",
    question: "Babel의 core-js 플러그인을 usage-global로 켰더니 쓰지도 않는 Set.prototype.union과 이터레이터 헬퍼 폴리필까지 들어갔다. 왜 그런가?",
    choices: [
      "core-js는 기능을 하나만 넣을 수 없어 전부 넣어서",
      "browserslist 기본값이 모든 폴리필을 요구해서",
      "플러그인이 타입을 몰라 메서드 이름과 생성자 사용으로 기능 사용을 추측하기 때문에, new Set이나 .filter를 보면 관련 폴리필을 넣어서",
      "Babel 8에서 usage-global이 entry 방식으로 바뀌어서",
    ],
    answer: 2,
    explanation:
      "items.filter의 items가 배열인지 이터레이터인지 알 수 없으니 이터레이터 헬퍼도 넣고, new Set을 보면 새 Set 메서드도 넣는다. 그 결과 gzip 2.7KB였던 모듈이 23.6KB가 됐다. 대상 브라우저를 낮출수록 이 목록이 길어진다.",
    anchor: "타깃을-낮추면-번들이-커진다",
  },
  {
    id: "frontend-build-tooling-7",
    post: "frontend-build-tooling",
    question: "Vite에서 import.meta.env[key]처럼 키를 변수로 꺼내면 빌드 결과에 무엇이 들어가나?",
    choices: [
      "키를 빌드 때 알 수 없으니 VITE_로 시작하는 변수 전체가 객체로 번들에 박힌다",
      "아무것도 들어가지 않고 런타임에 서버에서 값을 받아 온다",
      "DB_PASSWORD 같은 접두사 없는 변수까지 모두 들어간다",
      "빌드가 에러로 멈춘다",
    ],
    answer: 0,
    explanation:
      "환경 변수는 빌드 때 글자로 치환되므로, 어떤 키를 쓸지 모르면 VITE_ 변수 전체와 MODE 같은 기본값을 담은 객체를 넣는다. 코드에 이름을 적지 않은 비밀 키까지 새어 나간다. 접두사 없는 변수는 여전히 들어가지 않는다.",
    anchor: "환경-변수는-빌드-때-글자로-박힌다",
  },
];
