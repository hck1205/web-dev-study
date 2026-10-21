import type { QuizQuestion } from "../types";

export const JS_STRICT_MODE: QuizQuestion[] = [
  {
    id: "js-strict-mode-1",
    post: "js-strict-mode",
    question: "CommonJS 파일의 함수 안에서 선언하지 않은 `totl = 500`을 실행하면 어떻게 되나?",
    choices: [
      "ReferenceError가 난다",
      "전역 객체에 totl이 조용히 생긴다",
      "함수 지역 변수 totl이 생긴다",
      "SyntaxError로 파일이 로드되지 않는다",
    ],
    answer: 1,
    explanation:
      "CommonJS 파일은 지시어가 없으면 느슨한 모드라서 스코프 끝까지 찾지 못한 이름에 대입하면 globalThis에 새 속성을 만든다. 같은 코드를 ES 모듈로 돌리면 엄격 모드라서 ReferenceError가 난다. 지역 변수가 생기지는 않는다.",
    anchor: "조용한-실패를-에러로-바꾸는-모드",
  },
  {
    id: "js-strict-mode-2",
    post: "js-strict-mode",
    question: "다음 중 ES 모듈 파일 안에서 불러도 느슨한 모드로 실행되는 것은?",
    choices: [
      "class 본문 안의 메서드",
      "모듈 최상위의 함수",
      "new Function(\"return this\")로 만든 함수",
      "모듈 안에서 직접 부른 eval의 코드",
    ],
    answer: 2,
    explanation:
      "new Function과 간접 eval은 전역 스코프에서 새로 시작하는 코드라 부른 곳의 모드를 물려받지 않는다. 모듈 최상위와 class 본문은 자동으로 엄격 모드이고, 직접 eval은 부른 쪽의 모드를 물려받는다.",
    anchor: "어디서-켜지고-어디서-꺼지나",
  },
  {
    id: "js-strict-mode-3",
    post: "js-strict-mode",
    question: "\"use strict\"로 시작하는 analytics.js 뒤에 `var mode = 0644;`가 있는 오래된 스크립트를 cat으로 이어 붙였다. 결과는?",
    choices: [
      "두 파일 모두 정상 동작한다",
      "오래된 스크립트만 느슨한 모드로 따로 돈다",
      "지시어가 묶음 전체에 걸려 0644가 SyntaxError가 되고 파일 전체가 실행되지 않는다",
      "analytics.js의 지시어가 무시된다",
    ],
    answer: 2,
    explanation:
      "지시어는 파일 맨 앞에 있으면 그 파일 전체에 걸린다. 이어 붙인 뒤에는 오래된 코드까지 엄격 모드가 되어 옛 8진수 리터럴이 파싱 에러를 내고, 파싱에서 죽으니 분석 스크립트도 함께 멈춘다. 반대 순서였다면 뒤 파일의 지시어가 무시된다.",
    anchor: "지시어-하나가-남의-코드까지-바꾼다",
  },
  {
    id: "js-strict-mode-4",
    post: "js-strict-mode",
    question: "느슨한 모드에서 `Object.freeze({ a: 1 })`로 얼린 객체에 `frozen.a = 2`를 하면?",
    choices: [
      "에러 없이 지나가지만 값은 바뀌지 않는다",
      "TypeError가 난다",
      "a가 2로 바뀐다",
      "freeze가 풀린다",
    ],
    answer: 0,
    explanation:
      "느슨한 모드는 읽기 전용 속성에 대한 쓰기를 조용히 무시한다. 엄격 모드라면 Cannot assign to read only property 'a' TypeError가 난다. 불변 객체를 어기는 코드를 잡아 주는 건 엄격 모드다.",
    anchor: "에러로-바뀌는-조용한-실패들",
  },
  {
    id: "js-strict-mode-5",
    post: "js-strict-mode",
    question: "`function f(a) { a = 99; return arguments[0]; }`에 f(1)을 넣으면 느슨한 모드와 엄격 모드의 결과는?",
    choices: [
      "둘 다 99",
      "둘 다 1",
      "느슨한 모드 1, 엄격 모드 99",
      "느슨한 모드 99, 엄격 모드 1",
    ],
    answer: 3,
    explanation:
      "느슨한 모드에서 단순 매개변수를 가진 함수는 arguments와 매개변수가 연결돼 함께 바뀐다. 엄격 모드의 arguments는 호출 시 받은 값의 사본이라 매개변수를 바꿔도 그대로다. 이 연결이 엔진 최적화를 방해했다.",
    anchor: "arguments가-매개변수를-따라-바뀌지-않는다",
  },
  {
    id: "js-strict-mode-6",
    post: "js-strict-mode",
    question: "tsconfig의 `\"strict\": true`에 대한 설명으로 옳은 것은?",
    choices: [
      "자바스크립트 엄격 모드를 켜는 옵션 하나다",
      "타입 검사 옵션 묶음이고, 그중 alwaysStrict만 출력에 \"use strict\"를 넣어 런타임 동작과 관계가 있다",
      "React StrictMode를 켠다",
      "런타임에 null 검사 코드를 자동으로 넣는다",
    ],
    answer: 1,
    explanation:
      "strict는 strictNullChecks, noImplicitAny 등 아홉 개 옵션을 함께 켠다. 출력 코드에 흔적을 남기는 건 alwaysStrict 하나이고, 나머지는 컴파일할 때만 검사한다. 그래서 외부 JSON 같은 곳은 런타임 검사가 따로 필요하다.",
    anchor: "이름만-비슷한-두-strict",
  },
  {
    id: "js-strict-mode-7",
    post: "js-strict-mode",
    question: "개발 중 React 컴포넌트의 effect가 두 번 실행되고 요청이 두 번 나간다. 가장 알맞은 해석은?",
    choices: [
      "자바스크립트 엄격 모드가 함수를 두 번 부른다",
      "프로덕션에서도 똑같이 두 번 나가므로 StrictMode를 꺼야 한다",
      "React StrictMode가 개발 빌드에서 effect를 실행, 정리, 재실행하는 것이므로 정리 함수에서 요청을 취소하도록 고친다",
      "useEffect 의존성 배열이 비어서 생긴 버그다",
    ],
    answer: 2,
    explanation:
      "React StrictMode는 자바스크립트 엄격 모드와 상관없는 개발용 검사로, 정리가 빠진 effect를 드러내려고 일부러 두 번 실행한다. 프로덕션에서는 반복하지 않는다. 끄기보다 정리 함수에서 요청을 취소하거나 결과를 무시하게 고친다.",
    anchor: "이름만-비슷한-두-strict",
  },
];
