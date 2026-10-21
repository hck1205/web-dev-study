import type { QuizQuestion } from "../types";

export const JS_FUNCTION_FORMS: QuizQuestion[] = [
  {
    id: "js-function-forms-1",
    post: "js-function-forms",
    question: "`const named = function inner() {};` 뒤에 `named.name`과 `typeof inner`는?",
    choices: ['"named"와 "function"', '"inner"와 "function"', '"named"와 "undefined"', '"inner"와 "undefined"'],
    answer: 3,
    explanation:
      "이름 있는 함수 표현식은 붙인 이름이 name이 되고, 그 이름은 함수 안에서만 보인다. 그래서 바깥에서 inner는 선언되지 않은 이름이라 typeof가 undefined다. 익명 표현식이었다면 변수 이름 named가 추론되어 name이 된다.",
    anchor: "함수를-만드는-문법들",
  },
  {
    id: "js-function-forms-2",
    post: "js-function-forms",
    question:
      "객체 리터럴 안에 `stop: () => console.log(this.seconds)`처럼 메서드를 화살표 함수로 썼다. `obj.stop()`을 부르면 this는?",
    choices: [
      "obj다. 점 앞의 객체가 this가 된다",
      "객체를 감싼 바깥 스코프의 this다",
      "항상 전역 객체다",
      "stop 함수 자신이다",
    ],
    answer: 1,
    explanation:
      "화살표 함수는 자기 this가 없고, 객체 리터럴은 스코프를 만들지 않는다. 그래서 객체를 감싼 모듈 최상위나 바깥 함수의 this를 쓴다. 호출 방식으로 this가 정해지는 건 일반 함수와 메서드 축약의 규칙이다.",
    anchor: "화살표-함수가-갖지-않는-것",
  },
  {
    id: "js-function-forms-3",
    post: "js-function-forms",
    question: '`function greet(name = "손님") { return name; }`에서 `greet(null)`의 결과는?',
    choices: ['"손님"', "undefined", "TypeError", "null"],
    answer: 3,
    explanation:
      "기본값 매개변수는 인자가 undefined일 때만 쓰인다. null은 값으로 보고 그대로 들어간다. null까지 기본값으로 바꾸려면 본문에서 ??를 쓴다.",
    anchor: "매개변수-자리에서-일어나는-일",
  },
  {
    id: "js-function-forms-4",
    post: "js-function-forms",
    question:
      "CommonJS 파일(.cjs) 최상위에 `const show = () => console.log(arguments.length); show(1, 2, 3);`를 두고 실행하면?",
    choices: [
      "3이 찍힌다",
      "ReferenceError: arguments is not defined",
      "5가 찍힌다. 모듈 래퍼 함수의 arguments를 빌려 왔다",
      "0이 찍힌다",
    ],
    answer: 2,
    explanation:
      "화살표 함수는 자기 arguments가 없어서 바깥 것을 쓴다. Node.js는 CommonJS 파일을 exports, require, module, __filename, __dirname을 받는 함수로 감싸 실행하므로 그 다섯 개가 보인다. ES 모듈이었다면 바깥에 arguments가 없어 ReferenceError가 난다.",
    anchor: "arguments-객체와-나머지-매개변수",
  },
  {
    id: "js-function-forms-5",
    post: "js-function-forms",
    question:
      'strict 모드가 아닌 `function f(a) { arguments[0] = 99; return a; }`에서 `f(1)`의 결과와, 매개변수를 `a = 0`으로 바꿨을 때의 결과는?',
    choices: ["99, 99", "1, 1", "99, 1", "1, 99"],
    answer: 2,
    explanation:
      "sloppy 모드에서 매개변수가 단순하면 arguments와 매개변수가 연결되어 한쪽을 바꾸면 다른 쪽도 바뀐다. 기본값, 구조 분해, 나머지 매개변수가 하나라도 있으면 이 연결을 만들지 않는다. strict 모드에서도 연결이 없다.",
    anchor: "arguments-객체와-나머지-매개변수",
  },
  {
    id: "js-function-forms-6",
    post: "js-function-forms",
    question: "`<button onClick={handleClick()}>`처럼 괄호를 붙였고 handleClick이 setState를 부른다. 어떻게 되나?",
    choices: [
      "클릭할 때마다 두 번씩 실행된다",
      "아무 일도 없다. React가 괄호를 무시한다",
      "렌더링 중에 실행되어 상태 변경과 렌더링이 반복되다 Too many re-renders 에러가 난다",
      "첫 클릭에만 실행되고 그 뒤로는 실행되지 않는다",
    ],
    answer: 2,
    explanation:
      "괄호를 붙이면 렌더링하면서 함수를 실행하고 그 반환값을 onClick에 넣는다. 렌더링 중 상태를 바꾸니 다시 렌더링하고 또 실행하는 고리가 생긴다. 함수 자체를 넘기거나 () => handleClick(id)로 감싼다.",
    anchor: "react-컴포넌트에서-만나는-함수-모양",
  },
  {
    id: "js-function-forms-7",
    post: "js-function-forms",
    question: "생성자로 쓸 함수를 만들 때 이 글이 권하는 문법과 그 이유는?",
    choices: [
      "화살표 함수. this가 고정되어 안전하다",
      "class. 생성자 역할을 분리해 new 없이 부르면 에러로 막아 준다",
      "메서드 축약. 객체 안에 두면 prototype이 자동으로 생긴다",
      "익명 함수 표현식. 이름이 없어 충돌하지 않는다",
    ],
    answer: 1,
    explanation:
      "function은 일반 호출과 new를 모두 받아서 new를 빼먹는 실수가 생겼다. class는 new 없이 부르면 TypeError가 난다. 화살표 함수와 메서드 축약은 prototype이 없어 생성자로 쓸 수 없다.",
    anchor: "화살표-함수가-갖지-않는-것",
  },
];
