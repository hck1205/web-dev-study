import type { QuizQuestion } from "../types";

export const CODE_SPLITTING: QuizQuestion[] = [
  {
    id: "code-splitting-1",
    post: "code-splitting",
    question: "번들을 brotli로 압축해 전송량을 1/4로 줄였다. 그래도 저가형 폰에서 여전히 느린 이유는?",
    choices: [
      "brotli는 모바일 브라우저가 지원하지 않는다",
      "파싱·컴파일·실행 비용은 압축을 푼 코드 크기를 따르고, 실행은 메인 스레드에서 하기 때문에",
      "압축을 하면 캐시가 되지 않기 때문에",
      "압축 해제가 서버에서 일어나기 때문에",
    ],
    answer: 1,
    explanation:
      "압축은 네트워크로 보내는 양만 줄인다. 받은 뒤에는 풀린 코드 전체를 파싱하고 실행해야 하고, 실행은 메인 스레드를 붙잡는다. 그래서 자바스크립트는 같은 크기의 이미지보다 비싸다.",
    anchor: "다운로드보다-비싼-것",
  },
  {
    id: "code-splitting-2",
    post: "code-splitting",
    question: "첫 화면 대표 이미지를 그리는 히어로 컴포넌트를 React.lazy로 나누면 어떻게 될까?",
    choices: [
      "초기 번들이 줄어 LCP가 빨라진다",
      "Suspense가 이미지를 미리 받아 두어 차이가 없다",
      "청크 요청과 실행을 한 번 더 기다리게 되어 LCP가 늦어진다",
      "서버 렌더링이 자동으로 켜져 더 빨라진다",
    ],
    answer: 2,
    explanation:
      "첫 화면에 보이는 컴포넌트는 어차피 바로 받아야 한다. lazy로 나누면 진입 청크를 실행한 뒤에야 그 청크를 요청하니 왕복과 실행이 한 번 더 붙는다. 컴포넌트 단위 분할은 당장 안 보이는 무거운 것에만 쓴다.",
    anchor: "라우트로-자를까-컴포넌트로-자를까",
  },
  {
    id: "code-splitting-3",
    post: "code-splitting",
    question: "import { debounce } from \"lodash\"로 함수 하나만 가져왔는데 lodash 전체가 번들에 들어왔다. 이유는?",
    choices: [
      "lodash 패키지가 CommonJS라서 번들러가 어떤 export가 쓰이는지 정적으로 확정할 수 없기 때문에",
      "개발 모드에서만 그렇고 프로덕션에서는 debounce만 남는다",
      "debounce가 lodash의 다른 모든 함수를 내부에서 부르기 때문에",
      "named import는 트리 셰이킹 대상이 아니기 때문에",
    ],
    answer: 0,
    explanation:
      "CommonJS의 require와 module.exports는 실행 중에 바뀔 수 있어 무엇이 export되는지 미리 알 수 없다. 그래서 번들러는 안전하게 통째로 넣는다. ES 모듈로 배포하는 lodash-es를 쓰거나 lodash/debounce를 직접 가져오면 된다.",
    anchor: "commonjs는-흔들어도-안-떨어진다",
  },
  {
    id: "code-splitting-4",
    post: "code-splitting",
    question: "import \"./button.css\"를 쓰는 프로젝트의 package.json에 \"sideEffects\": false를 적었다. 무슨 일이 생길까?",
    choices: [
      "CSS가 별도 청크로 분리된다",
      "아무 변화가 없다. sideEffects는 자바스크립트 파일에만 적용된다",
      "개발 서버에서만 스타일이 사라진다",
      "가져다 쓰는 이름이 없는 CSS import가 지워져 프로덕션에서 스타일이 깨진다",
    ],
    answer: 3,
    explanation:
      "sideEffects: false는 쓰이지 않는 모듈은 지워도 된다는 약속이다. CSS import는 가져오는 이름이 없으니 프로덕션 빌드에서 통째로 사라진다. CSS와 폴리필은 [\"*.css\", \"./src/polyfills.js\"]처럼 목록으로 빼 둔다.",
    anchor: "사이드-이펙트가-있으면-지우지-못한다",
  },
  {
    id: "code-splitting-5",
    post: "code-splitting",
    question: "아이콘 하나를 배럴 파일(index.ts)로 가져왔더니 개발 서버가 느려졌다. 가장 그럴듯한 이유는?",
    choices: [
      "배럴 파일은 동적 import로 바뀌어 요청이 늘어난다",
      "개발 서버는 트리 셰이킹을 하지 않아 배럴 아래의 모든 모듈을 변환하고 실행한다",
      "배럴 파일은 소스맵을 만들지 못한다",
      "index.ts라는 이름은 캐시되지 않는다",
    ],
    answer: 1,
    explanation:
      "배럴은 폴더 안의 모듈을 모두 다시 내보낸다. 개발 서버와 테스트 러너는 트리 셰이킹을 하지 않으니, 하나만 가져와도 배럴이 내보내는 모듈 전부를 처리한다. 무거운 모듈은 경로를 직접 적어 가져오거나 optimizePackageImports를 쓴다.",
    anchor: "배럴-파일이-끌고-오는-것들",
  },
  {
    id: "code-splitting-6",
    post: "code-splitting",
    question: "사용자가 다음에 갈 가능성이 높은 페이지의 청크를 미리 받아 두려면 어떤 힌트가 맞을까?",
    choices: [
      "rel=\"preload\". 높은 우선순위로 지금 받는다",
      "rel=\"preconnect\". 청크 파일을 받아 둔다",
      "rel=\"prefetch\". 한가할 때 낮은 우선순위로 받아 캐시에 둔다",
      "아무 힌트도 필요 없다. 브라우저가 알아서 받는다",
    ],
    answer: 2,
    explanation:
      "prefetch는 다음 이동에 쓸 것을 낮은 우선순위로 받아 둔다. preload는 지금 페이지에 곧 필요한 것을 높은 우선순위로 받는 힌트라, 다음 페이지용으로 쓰면 지금 급한 CSS나 LCP 이미지와 대역폭을 다툰다.",
    anchor: "미리-받을까-필요할-때-받을까",
  },
  {
    id: "code-splitting-7",
    post: "code-splitting",
    question: "editor 청크가 toolbar를, toolbar가 markdown을 각각 동적 import한다. 화면이 늦게 완성되는 이유와 대책으로 맞는 것은?",
    choices: [
      "앞 청크를 실행해야 다음 청크를 알게 되어 왕복이 줄줄이 쌓인다. 함께 쓰는 것은 합치거나 나란히 요청한다",
      "청크가 작아 압축이 너무 잘 되기 때문이다. 압축을 끈다",
      "HTTP/2에서는 동시에 요청할 수 없기 때문이다. HTTP/1.1로 바꾼다",
      "해시가 붙은 파일은 캐시되지 않기 때문이다. 해시를 뺀다",
    ],
    answer: 0,
    explanation:
      "청크를 깊게 중첩해 나누면 요청 워터폴이 생긴다. 셋이 함께 필요하다면 같은 청크로 합치거나 Promise.all로 나란히 부르고, modulepreload로 미리 알려 준다.",
    anchor: "너무-잘게-쪼개면-생기는-일",
  },
];
