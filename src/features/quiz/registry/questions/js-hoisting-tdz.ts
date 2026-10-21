import type { QuizQuestion } from "../types";

export const JS_HOISTING_TDZ: QuizQuestion[] = [
  {
    id: "js-hoisting-tdz-1",
    post: "js-hoisting-tdz",
    question:
      "console.log(a); console.log(b); var a = 1; let b = 2; 를 실행하면 어떻게 되나?",
    choices: [
      "undefined가 찍히고, 두 번째 줄에서 ReferenceError가 난다",
      "둘 다 undefined가 찍힌다",
      "첫 줄에서 바로 ReferenceError가 난다",
      "1과 2가 찍힌다",
    ],
    answer: 0,
    explanation:
      "등록 단계에서 var a는 undefined로 초기화되지만 let b는 이름만 등록되고 비어 있다. 그래서 a는 undefined가 찍히고 b는 TDZ라 ReferenceError가 난다. 값 1과 2는 선언 줄이 실행돼야 들어간다.",
    anchor: "실행-전에-이름부터-등록한다",
  },
  {
    id: "js-hoisting-tdz-2",
    post: "js-hoisting-tdz",
    question:
      "함수 선언 function formatPrice를 const formatPrice = () => ... 로 바꿨더니 위쪽 호출에서 오류가 났다. 왜인가?",
    choices: [
      "화살표 함수는 호출할 수 없는 함수라서",
      "const는 호이스팅되지 않아 이름 자체가 없어서",
      "함수 선언은 등록 단계에서 함수 객체까지 초기화되지만 const는 선언 줄 전까지 초기화 전이라서",
      "화살표 함수는 엄격 모드에서만 동작해서",
    ],
    answer: 2,
    explanation:
      "const도 이름은 실행 전에 등록된다. 다만 선언 줄이 실행되기 전까지 비어 있어 TDZ에 걸린다. 오류 문구가 is not defined가 아니라 Cannot access ... before initialization인 것이 이름이 등록돼 있다는 증거다.",
    anchor: "선언마다-초기화하는-시점이-다르다",
  },
  {
    id: "js-hoisting-tdz-3",
    post: "js-hoisting-tdz",
    question:
      "function readLimit() { return limit } 을 정의하고 let limit = 10 아래에서 readLimit()을 부르면?",
    choices: [
      "ReferenceError. return limit이 글자로 선언보다 위에 있어서",
      "undefined. let도 var처럼 초기화되어서",
      "SyntaxError. 함수 안에서 아래쪽 변수를 참조해서",
      "10. 호출 시점에는 선언 줄이 이미 실행돼 TDZ가 끝나서",
    ],
    answer: 3,
    explanation:
      "TDZ는 코드의 위치가 아니라 실행 시점이 기준이다. 같은 함수도 선언 줄 실행 전에 부르면 ReferenceError, 뒤에 부르면 10을 돌려준다. 그래서 TDZ 버그는 실행 경로에 따라 나타났다 사라질 수 있다.",
    anchor: "tdz는-위치가-아니라-시간이다",
  },
  {
    id: "js-hoisting-tdz-4",
    post: "js-hoisting-tdz",
    question:
      "let theme = \"light\"; function render() { console.log(theme); let theme = \"dark\" } render(); 의 결과는?",
    choices: [
      "light가 찍힌다",
      "ReferenceError가 난다",
      "undefined가 찍힌다",
      "dark가 찍힌다",
    ],
    answer: 1,
    explanation:
      "함수 범위에 theme가 등록된 순간부터 그 범위 전체에서 theme는 안쪽 이름을 가리킨다. 아직 초기화 전이라 바깥 light를 보지 않고 ReferenceError가 난다. let도 호이스팅된다는 증거다.",
    anchor: "바깥-이름이-있어도-tdz가-이긴다",
  },
  {
    id: "js-hoisting-tdz-5",
    post: "js-hoisting-tdz",
    question:
      "format.mjs와 config.mjs가 서로 import하고, config 최상위에서 formatPrice(1000)을 부른다. 어떤 일이 생기나?",
    choices: [
      "config가 먼저 실행되어 아직 초기화 전인 formatPrice를 읽어 ReferenceError가 난다",
      "엔진이 순환을 감지해 import 자체를 SyntaxError로 막는다",
      "formatPrice가 undefined로 들어와 TypeError가 난다",
      "format이 먼저 실행되므로 정상 동작한다",
    ],
    answer: 0,
    explanation:
      "ES 모듈은 의존 관계의 깊은 쪽부터 실행해서 config가 format보다 먼저 돈다. import로 받은 이름은 format의 칸에 연결된 라이브 바인딩이라 TDZ가 그대로 보인다. undefined를 받아 TypeError가 나는 건 CommonJS의 순환이다.",
    anchor: "순환-import가-tdz를-부른다",
  },
  {
    id: "js-hoisting-tdz-6",
    post: "js-hoisting-tdz",
    question:
      "React 파일 최상위에 const ICONS = { home: HomeIcon } 을 쓰고 그 아래에 const HomeIcon = () => ... 를 정의했다. 결과는?",
    choices: [
      "문제없다. 컴포넌트는 렌더링 때 실행되기 때문이다",
      "HomeIcon이 undefined로 들어가 아이콘만 안 보인다",
      "모듈을 읽는 순간 TDZ에 걸려 ReferenceError가 난다",
      "React가 자동으로 정의 순서를 맞춰 준다",
    ],
    answer: 2,
    explanation:
      "객체 리터럴은 모듈을 읽는 순간 평가되므로 아직 초기화 전인 HomeIcon을 읽는다. 컴포넌트 본문 안에서 아래쪽 컴포넌트를 쓰는 건 렌더링 때 실행되어 괜찮지만, 최상위에서 즉시 평가되는 값은 정의 아래로 옮겨야 한다.",
    anchor: "react-파일에서-만나는-경우",
  },
  {
    id: "js-hoisting-tdz-7",
    post: "js-hoisting-tdz",
    question:
      "느슨한 모드에서 if 블록 안에 function inner() {} 를 선언하고, 블록 실행 뒤 블록 밖에서 typeof inner를 찍으면?",
    choices: [
      "\"undefined\". 블록 안 함수는 블록 밖에서 보이지 않는다",
      "\"function\". 웹 호환 규칙(Annex B)으로 바깥 범위에도 복사된다",
      "ReferenceError",
      "SyntaxError",
    ],
    answer: 1,
    explanation:
      "느슨한 모드에서는 바깥 함수 범위에 var처럼 inner가 등록되고 블록이 실행될 때 함수가 복사된다. 엄격 모드에서는 블록 범위에만 있어 undefined가 나온다. ES 모듈은 자동으로 엄격 모드다.",
    anchor: "블록-안의-함수-선언은-모드마다-다르다",
  },
];
