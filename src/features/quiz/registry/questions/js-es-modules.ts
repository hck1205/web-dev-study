import type { QuizQuestion } from "../types";

export const JS_ES_MODULES: QuizQuestion[] = [
  {
    id: "js-es-modules-1",
    post: "js-es-modules",
    question:
      "counter 모듈이 count를 내보내고 increment()로 1씩 올린다. ESM에서 import한 count와 CJS에서 구조 분해로 받은 count를 increment() 두 번 뒤에 읽으면?",
    choices: ["ESM 2, CJS 0", "둘 다 2", "둘 다 0", "ESM 0, CJS 2"],
    answer: 0,
    explanation:
      "ESM의 import는 내보낸 모듈의 변수 칸에 연결된 라이브 바인딩이라 바뀐 값을 본다. CJS는 module.exports를 만들 때 값을 복사하고, 구조 분해로 한 번 더 복사하니 0에 머문다.",
    anchor: "내보낸-것은-값이-아니라-변수다",
  },
  {
    id: "js-es-modules-2",
    post: "js-es-modules",
    question:
      'theme.mjs가 let theme = "light"; export default theme; export { theme as current }를 하고 나중에 theme = "dark"로 바꿨다. import한 default와 current는?',
    choices: [
      "둘 다 \"dark\"",
      "둘 다 \"light\"",
      "default는 \"light\", current는 \"dark\"",
      "default는 \"dark\", current는 \"light\"",
    ],
    answer: 2,
    explanation:
      "export default 식은 그 순간의 값을 숨은 *default* 변수에 담아서 원래 변수와 연결되지 않는다. export { theme as current }는 theme 변수 자체를 내보내니 바뀐 값이 보인다.",
    anchor: "default는-이름이-default인-내보내기일-뿐이다",
  },
  {
    id: "js-es-modules-3",
    post: "js-es-modules",
    question:
      'main.mjs의 첫 줄이 console.log("main")이고 그 아래에 import "./a.mjs"가 있다. a.mjs는 console.log("a")만 한다. 출력 순서는?',
    choices: [
      "main, a (코드 순서대로)",
      "a, main",
      "main만 찍힌다",
      "실행 시점에 따라 달라진다",
    ],
    answer: 1,
    explanation:
      "import는 위치와 상관없이 본문보다 먼저 처리된다. 엔진은 링크를 마친 뒤 의존성부터 깊이 우선으로 평가하고 자기 본문은 마지막에 실행한다. CJS의 require였다면 코드 순서대로 main이 먼저다.",
    anchor: "실행하기-전에-연결부터-한다",
  },
  {
    id: "js-es-modules-4",
    post: "js-es-modules",
    question: "index.js가 export * from \"./button.js\"만 한다. button.js에 export default가 있을 때 import Button from \"./index.js\"는?",
    choices: [
      "button의 default를 그대로 받는다",
      "undefined를 받는다",
      "런타임에 TypeError가 난다",
      "링크 단계에서 does not provide an export named 'default' SyntaxError가 난다",
    ],
    answer: 3,
    explanation:
      "export *는 default를 다시 내보내지 않는다. 없는 이름을 import하면 코드를 실행하기 전 링크 단계에서 SyntaxError로 멈춘다. 배럴 파일에는 export { default } from ...을 따로 적어야 한다.",
    anchor: "default는-이름이-default인-내보내기일-뿐이다",
  },
  {
    id: "js-es-modules-5",
    post: "js-es-modules",
    question: "번들 없이 브라우저에서 main → a, b → c로 이어진 모듈을 불렀더니 늦게 실행된다. 가장 직접적인 원인과 처방은?",
    choices: [
      "모듈 스크립트는 동기로 실행되어서. defer를 붙인다",
      "import를 파싱해야 다음 파일을 알 수 있어 왕복이 쌓인다. modulepreload로 미리 알린다",
      "CORS 검사가 느려서. 같은 출처로 옮긴다",
      "엄격 모드라서. 엄격 모드를 끈다",
    ],
    answer: 1,
    explanation:
      "브라우저는 파일을 받아 파싱해야 그 파일의 import를 알기 때문에 그래프 깊이만큼 요청이 순서대로 쌓인다. modulepreload로 그래프를 미리 알려 주면 동시에 받는다. 모듈 스크립트는 이미 defer처럼 동작한다.",
    anchor: "브라우저는-import를-만날-때마다-한-번-더-요청한다",
  },
  {
    id: "js-es-modules-6",
    post: "js-es-modules",
    question: "Node 22의 CJS 파일에서 require(\"./config.mjs\")가 ERR_REQUIRE_ASYNC_MODULE로 실패했다. 이유는?",
    choices: [
      "CJS에서는 ESM을 절대 불러올 수 없다",
      "확장자 .mjs를 빼야 한다",
      "불러온 ESM 그래프 어딘가에 최상위 await가 있어 동기로 끝낼 수 없다",
      "package.json에 type이 없어서다",
    ],
    answer: 2,
    explanation:
      "Node 22.12부터 require(esm)이 되지만 require는 동기 함수라 비동기로 평가되는 그래프는 받을 수 없다. 최상위 await가 있으면 await import()로 바꿔야 한다.",
    anchor: "node에서-두-시스템이-만나는-자리",
  },
  {
    id: "js-es-modules-7",
    post: "js-es-modules",
    question: "React.lazy(() => import(\"./chart\"))를 썼는데 chart 파일은 export function Chart만 있다. 어떻게 고치나?",
    choices: [
      "import(\"./chart\").then((m) => ({ default: m.Chart }))로 감싼다",
      "Suspense를 하나 더 감싼다",
      "import 대신 require를 쓴다",
      "React.memo로 감싼다",
    ],
    answer: 0,
    explanation:
      "React.lazy는 동적 import가 돌려준 네임스페이스의 default를 컴포넌트로 쓴다. 이름 있는 내보내기만 있으면 undefined를 그리려다 Element type is invalid로 실패하니, default 모양으로 감싸서 넘긴다.",
    anchor: "react-코드에서-모듈-경계를-만나는-순간",
  },
];
