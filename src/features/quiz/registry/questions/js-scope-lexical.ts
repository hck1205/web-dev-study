import type { QuizQuestion } from "../types";

export const JS_SCOPE_LEXICAL: QuizQuestion[] = [
  {
    id: "js-scope-lexical-1",
    post: "js-scope-lexical",
    question:
      "const label = \"global\"; function show() { console.log(label) } function run() { const label = \"run\"; show() } run(); 의 출력과 이유는?",
    choices: [
      "run. show를 run 안에서 불렀으니 run의 label을 본다",
      "global. show를 코드에 쓴 곳이 전역이라 show의 바깥은 전역이다",
      "undefined. show 안에는 label이 선언되지 않았다",
      "ReferenceError. 같은 이름을 두 번 선언했다",
    ],
    answer: 1,
    explanation:
      "자바스크립트는 렉시컬 스코프라서 바깥 범위가 호출한 곳이 아니라 함수를 쓴 곳으로 정해진다. 호출한 곳을 따라 run을 찍는 건 bash의 local 같은 동적 스코프다. 두 label은 서로 다른 범위에 있어서 재선언도 아니다.",
    anchor: "쓴-자리가-바깥을-정한다",
  },
  {
    id: "js-scope-lexical-2",
    post: "js-scope-lexical",
    question:
      "let currentUser = null; 아래 if 블록에서 let currentUser = { name } 을 쓰고 블록 밖에서 currentUser를 찍으면?",
    choices: [
      "{ name }이 찍힌다. 블록 안의 대입이 바깥에 반영된다",
      "SyntaxError가 난다. 같은 이름을 두 번 선언했다",
      "null이 찍힌다. 블록 안에서 같은 이름의 새 변수가 생겨 바깥을 가렸다",
      "ReferenceError가 난다. 블록을 나가면 currentUser가 사라진다",
    ],
    answer: 2,
    explanation:
      "안쪽 블록의 let은 바깥 변수에 값을 넣지 않고 새 변수를 만들어 바깥 이름을 가린다. 다른 범위라서 재선언 오류도 나지 않는다. ESLint no-shadow가 이런 실수를 잡는다.",
    anchor: "같은-이름으로-가리기",
  },
  {
    id: "js-scope-lexical-3",
    post: "js-scope-lexical",
    question:
      "makePricer(rate)가 반환한 price 함수가 makePricer가 끝난 뒤에도 rate를 읽을 수 있는 이유는?",
    choices: [
      "price 함수 객체가 만들어질 때 그 환경을 [[Environment]]에 저장해 두기 때문이다",
      "rate가 전역 객체에 복사되기 때문이다",
      "price를 호출하면 makePricer가 다시 실행되기 때문이다",
      "rate가 원시 값이라 값이 함수 코드에 박히기 때문이다",
    ],
    answer: 0,
    explanation:
      "함수 객체는 만들어질 때의 환경을 저장하고, 호출될 때 새 환경의 바깥을 그 저장된 환경으로 잇는다. 그 환경이 참조되는 동안 rate는 살아 있다. 이게 클로저이고, 렉시컬 스코프의 결과다.",
    anchor: "함수는-태어난-환경을-들고-다닌다",
  },
  {
    id: "js-scope-lexical-4",
    post: "js-scope-lexical",
    question:
      "느슨한 모드의 함수 안에서 선언하지 않은 count에 count = 1 을 대입하면?",
    choices: [
      "ReferenceError가 난다",
      "함수 지역 변수 count가 생긴다",
      "아무 일도 일어나지 않는다",
      "전역 객체에 count 속성이 생긴다",
    ],
    answer: 3,
    explanation:
      "스코프 체인 끝까지 이름을 못 찾으면 느슨한 모드의 쓰기는 전역 객체에 새 속성을 만든다. 엄격 모드에서는 ReferenceError가 난다. ES 모듈은 자동으로 엄격 모드라 이 사고가 덜 난다.",
    anchor: "선언-없이-대입하면-전역이-생긴다",
  },
  {
    id: "js-scope-lexical-5",
    post: "js-scope-lexical",
    question:
      "let x = \"outer\"; function f(read = () => x) { let x = \"inner\"; return read() } f() 의 결과는?",
    choices: [
      "\"inner\"",
      "\"outer\"",
      "ReferenceError",
      "undefined",
    ],
    answer: 1,
    explanation:
      "기본값 식은 함수 본문보다 바깥인 매개변수 범위에서 평가된다. 그 범위에는 x가 없어 바깥의 outer를 본다. 본문의 let x는 그보다 안쪽이라 기본값의 화살표 함수에서는 보이지 않는다.",
    anchor: "매개변수-기본값에는-따로-범위가-있다",
  },
  {
    id: "js-scope-lexical-6",
    post: "js-scope-lexical",
    question:
      "중단점에서 바깥 함수의 변수를 콘솔에 쳤더니 ReferenceError가 났다. 가장 가능성 높은 이유는?",
    choices: [
      "바깥 함수가 이미 끝나서 모든 변수가 지워졌다",
      "개발자 도구는 블록 범위 변수를 보여 주지 못한다",
      "안쪽 함수가 그 변수를 쓰지 않아 V8이 Context에 담지 않았다",
      "중단점에서는 스코프 체인이 끊긴다",
    ],
    answer: 2,
    explanation:
      "V8은 스코프 분석으로 안쪽 함수가 실제로 쓰는 변수만 Context에 넣는다. 그래서 Scope 패널의 Closure 칸에도 쓰는 변수만 보인다. 확인하려면 안쪽 함수에서 그 변수를 한 번 읽게 하거나 바깥 함수에서 멈춘다.",
    anchor: "개발자-도구에서-스코프-체인-보기",
  },
  {
    id: "js-scope-lexical-7",
    post: "js-scope-lexical",
    question:
      "부모 컴포넌트 안에 자식 컴포넌트 함수를 정의해 부모의 state를 바로 썼다. 무엇이 문제인가?",
    choices: [
      "자식이 부모 state를 읽지 못해 undefined가 된다",
      "부모가 렌더링될 때마다 새 함수라 React가 다른 타입으로 보고 자식을 다시 마운트한다",
      "자식이 렌더링되지 않는다",
      "문제없다. React가 같은 컴포넌트로 인식한다",
    ],
    answer: 1,
    explanation:
      "렌더마다 안쪽 함수가 새로 만들어지고 React는 컴포넌트 타입이 같은 함수인지로 짝을 맞춘다. 매번 다른 함수라 언마운트 후 다시 마운트되어 내부 state와 입력값이 초기화된다. 컴포넌트를 최상위로 옮기고 props로 넘긴다.",
    anchor: "react에서-컴포넌트-안에-컴포넌트를-쓰면",
  },
];
