import type { QuizQuestion } from "../types";

export const JS_IIFE_MODULE_PATTERN: QuizQuestion[] = [
  {
    id: "js-iife-module-pattern-1",
    post: "js-iife-module-pattern",
    question:
      "클래식 스크립트 두 개가 각자 최상위에 `var count`와 `function render()`를 선언했다. 첫 파일의 `add()`가 `render()`를 부르면 어떻게 되나?",
    choices: [
      "파일마다 스코프가 따로라서 첫 파일의 render가 불린다",
      "같은 이름이 두 번 선언돼 두 번째 파일 로드 때 SyntaxError가 난다",
      "전역이 하나라서 나중에 로드된 파일의 render가 불린다",
      "두 render가 차례로 모두 불린다",
    ],
    answer: 2,
    explanation:
      "모듈이 아닌 script의 최상위 var와 함수 선언은 모두 전역 객체에 붙는다. 파일은 경계가 아니라서 나중에 온 선언이 앞의 것을 덮어쓰고, add는 이름으로 찾다가 덮어쓴 함수를 부른다. var 중복 선언은 에러가 아니다.",
    anchor: "만들자마자-부르는-함수",
  },
  {
    id: "js-iife-module-pattern-2",
    post: "js-iife-module-pattern",
    question: "`function () { ... }()`가 문법 에러인 이유로 맞는 것은?",
    choices: [
      "문장 맨 앞의 function은 선언문으로 읽히고, 선언문은 값이 아니라 바로 부를 수 없다",
      "익명 함수는 어디서도 호출할 수 없다",
      "함수 본문 뒤에는 반드시 세미콜론이 와야 한다",
      "strict mode에서만 허용되는 문법이다",
    ],
    answer: 0,
    explanation:
      "파서는 문장 첫머리의 function을 함수 선언문으로 해석한다. 선언문은 이름이 필요하고 값이 아니라서 바로 호출할 수 없다. 괄호로 감싸거나 !, void를 앞에 붙이면 표현식 자리로 읽혀 바로 부를 수 있다.",
    anchor: "괄호를-빼면-문법-에러가-난다",
  },
  {
    id: "js-iife-module-pattern-3",
    post: "js-iife-module-pattern",
    question:
      "세미콜론 없이 `const log = function () { console.log(\"log 호출됨\"); }` 다음 줄에 `(function () { console.log(\"초기화\"); })()`를 썼다. 실행하면?",
    choices: [
      "초기화가 찍히고 정상 종료한다",
      "초기화와 log 호출됨이 차례로 찍힌다",
      "아무것도 찍히지 않고 SyntaxError가 난다",
      "log 호출됨이 찍히고, 그 반환값을 부르다 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "다음 줄이 (로 시작하면 자동 세미콜론 삽입이 일어나지 않아 앞의 함수 표현식을 IIFE를 인자로 넘겨 호출한 것으로 읽는다. 그 함수가 log 호출됨을 찍고 undefined를 돌려주니, 남은 ()가 undefined를 부르다 터진다. 정작 초기화 코드는 실행되지 않는다.",
    anchor: "세미콜론-하나가-빠졌을-때",
  },
  {
    id: "js-iife-module-pattern-4",
    post: "js-iife-module-pattern",
    question:
      "모듈 패턴에서 `return { add, count: items.length }`로 내보냈다. add를 두 번 부른 뒤 `Cart.count`는?",
    choices: [
      "2, 클로저가 items를 기억하니까",
      "0, IIFE가 실행되던 순간의 숫자를 복사해 둔 값이라서",
      "undefined, 비공개 값이라 읽을 수 없어서",
      "TypeError, count는 함수가 아니라서",
    ],
    answer: 1,
    explanation:
      "count에는 반환하던 순간 items.length를 계산한 원시값 0이 들어갔다. 원시값은 복사되니 나중에 items가 바뀌어도 따라오지 않는다. 최신 값을 보이려면 count() 같은 접근 함수를 내보내야 한다.",
    anchor: "공개한-값은-따라오지-않는다",
  },
  {
    id: "js-iife-module-pattern-5",
    post: "js-iife-module-pattern",
    question:
      "revealing module 패턴으로 만든 Price에서 `Price.format`을 다른 함수로 바꿨다. 안에서 format을 부르는 `Price.label`의 결과는?",
    choices: [
      "바꾼 format이 반영된다. 객체 속성을 다시 읽으니까",
      "에러가 난다. 공개 메서드는 읽기 전용이라서",
      "바뀌지 않는다. label은 클로저 안의 지역 함수 format을 직접 부르니까",
      "label도 함께 undefined가 된다",
    ],
    answer: 2,
    explanation:
      "label 안의 format은 반환 객체의 속성이 아니라 IIFE 안에서 선언한 지역 함수를 가리킨다. 그래서 공개 객체의 속성을 갈아 끼워도 내부 호출은 옛 함수를 쓴다. 테스트 스텁이 안 먹는 이유가 이것이고, 반영하려면 내부에서도 공개 객체를 거쳐 부른다.",
    anchor: "공개한-값은-따라오지-않는다",
  },
  {
    id: "js-iife-module-pattern-6",
    post: "js-iife-module-pattern",
    question:
      "`App.coupon = (function (cart) { ... })(App.cart)`가 있는 b.js가 App.cart를 만드는 a.js보다 먼저 실행됐다. 언제 어떤 문제가 생기나?",
    choices: [
      "로드 시점에 바로 ReferenceError가 난다",
      "a.js가 실행되면 cart 매개변수도 자동으로 새 값을 가리킨다",
      "App 객체가 덮어써져서 cart 모듈이 사라진다",
      "cart가 undefined로 굳어서, 나중에 쿠폰을 적용할 때 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "IIFE는 호출되는 순간 인자를 평가해 매개변수에 넣는다. 그때 App.cart가 undefined였으니 coupon 안의 cart는 계속 undefined다. a.js가 나중에 App.cart를 만들어도 바뀌지 않고, cart.add를 읽는 순간에야 에러가 난다.",
    anchor: "파일-여러-개를-하나의-이름-아래-모으기",
  },
  {
    id: "js-iife-module-pattern-7",
    post: "js-iife-module-pattern",
    question:
      "Node 서버에서 모듈 최상위 `let currentUser`에 요청마다 사용자를 넣고 await 뒤에 읽었다. 동시 요청이 오면 어떻게 되나?",
    choices: [
      "기다리는 사이 다른 요청이 값을 덮어써서 다른 사용자의 값이 응답에 섞일 수 있다",
      "요청마다 모듈이 새로 평가돼서 문제없다",
      "Node가 요청을 하나씩만 처리하니 섞일 일이 없다",
      "두 번째 요청이 에러로 거절된다",
    ],
    answer: 0,
    explanation:
      "모듈은 프로세스에서 한 번만 평가되니 모듈 변수는 모든 요청이 함께 쓴다. 한 요청이 await에서 쉬는 동안 이벤트 루프가 다른 요청을 처리하며 값을 덮는다. 요청별 값은 인자로 넘기거나 AsyncLocalStorage에 둔다.",
    anchor: "모듈-변수는-프로세스에-하나다",
  },
];
