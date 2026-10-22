import type { QuizQuestion } from "../types";

export const BUNDLER_BASICS: QuizQuestion[] = [
  {
    id: "bundler-basics-1",
    post: "bundler-basics",
    question: "esbuild로 `--target=chrome79`를 주고 `orders.at(-1)?.id ?? 0`과 `Object.groupBy(...)`를 변환했다. 크롬 79에서 여전히 실패하는 이유는?",
    choices: [
      "?.와 ??를 풀어 쓰지 못해서",
      "at과 Object.groupBy는 문법이 아니라 런타임 함수라 변환으로는 생기지 않아서",
      "target 값은 압축할 때만 적용되어서",
      "크롬 79는 ES 모듈을 읽지 못해서",
    ],
    answer: 1,
    explanation:
      "esbuild는 ?.와 ??처럼 문법은 풀어 썼지만 Object.groupBy와 Array.prototype.at은 그대로 남겼다. 없는 함수는 core-js 같은 폴리필을 함께 실어야 생긴다. 트랜스파일과 폴리필은 서로 다른 일이다.",
    anchor: "문법은-바꿔-주지만-기능은-채워-주지-않는다",
  },
  {
    id: "bundler-basics-2",
    post: "bundler-basics",
    question: "Babel 8에서 `preset-env` 옵션 안에만 `targets: \"chrome 79\"`를 적고 `polyfill-corejs3` 플러그인을 썼더니 `at`의 폴리필이 빠졌다. 왜 그런가?",
    choices: [
      "core-js 3에는 at 폴리필이 없어서",
      "usage-global 방식은 인스턴스 메서드를 다루지 않아서",
      "플러그인은 preset 안의 targets를 모르고 browserslist 기본값으로 판단해서",
      "Babel 8은 chrome 79를 대상으로 지정할 수 없어서",
    ],
    answer: 2,
    explanation:
      "debug 출력을 보면 플러그인은 chrome 109가 든 기본 목록을 쓰고 있었다. targets를 설정 최상위로 옮기자 es.array.at과 es.object.group-by가 함께 들어갔다. preset과 플러그인이 같은 대상을 보게 하려면 최상위에 둔다.",
    anchor: "문법은-바꿔-주지만-기능은-채워-주지-않는다",
  },
  {
    id: "bundler-basics-3",
    post: "bundler-basics",
    question: "3000개 모듈 앱을 Vite 개발 서버로 열면 요청이 3005개, 빌드 결과는 2개였다. 개발 서버가 묶지 않는 이유로 가장 알맞은 것은?",
    choices: [
      "파일을 고칠 때 그 모듈 하나만 다시 변환하면 되도록",
      "브라우저 캐시를 쓰지 않으려고",
      "개발 서버는 압축을 할 수 없어서",
      "HTTP/2에서는 요청이 많을수록 빨라서",
    ],
    answer: 0,
    explanation:
      "개발 서버는 요청 온 모듈만 그때 변환하니 서버가 바로 뜨고, 저장하면 그 모듈만 HMR로 바꿔 끼운다. 대신 페이지를 처음 열 때는 요청이 모듈 수만큼 생긴다. node_modules 의존성만 미리 한 파일로 묶어 요청을 줄인다.",
    anchor: "개발-서버는-묶지-않는다",
  },
  {
    id: "bundler-basics-4",
    post: "bundler-basics",
    question: "직접 만든 빌드 스크립트에서 esbuild로 묶기만 하고 압축은 다른 도구로 했더니 번들이 두 배로 커졌다. 가장 먼저 의심할 것은?",
    choices: [
      "source map이 번들 안에 들어갔다",
      "트리 셰이킹이 꺼졌다",
      "브라우저 대상이 너무 낮게 잡혔다",
      "process.env.NODE_ENV가 production으로 바뀌지 않아 개발용 React가 들어갔다",
    ],
    answer: 3,
    explanation:
      "esbuild는 define이 없으면 압축할 때만 production으로 정한다. 압축을 끄고 묶으면 react-dom-client.development가 들어가고, 실험에서 gzip 128KB 대 69KB로 차이가 났다. 번들 분석에서 development 파일 이름이 보이는지 확인한다.",
    anchor: "개발용-코드가-프로덕션에-실리면",
  },
  {
    id: "bundler-basics-5",
    post: "bundler-basics",
    question: "프로덕션에서 source map을 다루는 방법으로 가장 알맞은 것은?",
    choices: [
      "만들지 않는다. 압축 코드만으로도 스택을 읽을 수 있다",
      "hidden source map으로 만들어 공개 서버에는 올리지 않고 에러 수집 도구에만 올린다",
      "번들과 같은 폴더에 공개해서 누구나 디버깅할 수 있게 한다",
      "개발 서버에서만 만들고 빌드에서는 끈다",
    ],
    answer: 1,
    explanation:
      "source map의 sourcesContent에는 원본 코드가 통째로 들어갈 수 있어서 공개하면 원본과 주석이 그대로 보인다. 그렇다고 안 만들면 운영 에러가 o 함수 1번째 줄 42번째 글자처럼만 보인다. 만들되 숨기고 수집 도구에만 넘긴다.",
    anchor: "줄어든-코드에서-원래-줄을-찾는다",
  },
  {
    id: "bundler-basics-6",
    post: "bundler-basics",
    question: "webpack 5로 올린 뒤 브라우저에서 `process is not defined`가 났다. 바른 대응은?",
    choices: [
      "window.process = {}를 index.html 맨 위에 넣는다",
      "webpack 4로 되돌린다",
      "빌드 때 정해지는 값이면 define으로 바꾸고, 클라이언트에 노출해도 되는 값인지 확인한다",
      "모든 환경 변수를 DefinePlugin으로 번들에 넣는다",
    ],
    answer: 2,
    explanation:
      "webpack 5부터 Node 전역과 코어 모듈을 자동으로 채우지 않는다. define한 값은 번들에 글자 그대로 박히므로 비밀 값을 넣으면 누구나 읽는다. Vite의 VITE_, Next.js의 NEXT_PUBLIC_ 접두사가 이 경계를 만든다.",
    anchor: "운영에서-번들러가-범인일-때",
  },
  {
    id: "bundler-basics-7",
    post: "bundler-basics",
    question: "같은 3000개 모듈 앱에서 webpack은 7.7초, 압축을 끄면 3~4초가 걸렸다. 이 결과에서 알 수 있는 것은?",
    choices: [
      "자바스크립트 압축기 terser가 빌드 시간의 큰 몫을 쓴다",
      "webpack은 모듈 그래프를 만들지 않는다",
      "압축을 끄면 결과물 크기도 그대로다",
      "Rust 도구는 결과물이 항상 더 작다",
    ],
    answer: 0,
    explanation:
      "압축을 끄자 webpack은 3~4초, Rollup은 9초대에서 6초로 줄었다. 압축기를 esbuild나 SWC 기반으로 바꾸면 빌드가 꽤 빨라진다. 결과물 크기는 도구마다 gzip 33~47KB로 달라서 속도와 따로 잰다.",
    anchor: "같은-앱을-여섯-도구로-묶어-보면",
  },
];
