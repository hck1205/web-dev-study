import type { QuizQuestion } from "../types";

export const JS_THIS_BINDING: QuizQuestion[] = [
  {
    id: "js-this-binding-1",
    post: "js-this-binding",
    question: "클래스 메서드를 `const add = store.add; add(\"pen\")`처럼 부르면 this가 사라지는 이유는?",
    choices: [
      "클래스 메서드는 인스턴스에 복사되지 않아서 함수가 없다",
      "대입이 함수 값만 꺼내고 점 앞의 객체(base)를 버려서, 호출할 때 넘길 this가 없다",
      "변수에 담은 함수는 화살표 함수로 바뀐다",
      "const로 선언한 변수에 담으면 this가 얼어 붙는다",
    ],
    answer: 1,
    explanation:
      "this는 함수에 저장되지 않고 호출할 때 Reference Record의 base에서 온다. 대입은 그 기록에서 함수 값만 꺼내므로 이후 add()는 기본 바인딩이 되고, 클래스 본문은 엄격 모드라 undefined가 된다.",
    anchor: "this는-함수가-아니라-호출에-붙는다",
  },
  {
    id: "js-this-binding-2",
    post: "js-this-binding",
    question: "`const user = { name: \"kim\", hello() { return this?.name; } }`일 때 `(user.hello)()`와 `(0, user.hello)()`의 결과는?",
    choices: [
      "둘 다 \"kim\"",
      "둘 다 undefined",
      "\"kim\"과 undefined",
      "undefined와 \"kim\"",
    ],
    answer: 2,
    explanation:
      "괄호로만 감싸면 Reference Record가 그대로 통과해 this가 user로 남는다. 쉼표 연산자는 값을 꺼내는 연산이라 base가 사라지고 기본 바인딩이 된다. 번들러가 (0, fn)() 형태를 쓰는 이유가 이것이다.",
    anchor: "네-가지-규칙",
  },
  {
    id: "js-this-binding-3",
    post: "js-this-binding",
    question: "`const BoundBox = Box.bind({ tag: \"ignored\" }); new BoundBox(7)`에서 Box 안의 this는?",
    choices: [
      "bind로 묶은 { tag: \"ignored\" }",
      "globalThis",
      "undefined라서 TypeError가 난다",
      "new가 새로 만든 객체",
    ],
    answer: 3,
    explanation:
      "우선순위는 new가 bind보다 높다. bind로 묶은 this는 무시되고 새 객체가 만들어지며, 결과는 Box의 인스턴스다. bind가 이기는 건 call이나 메서드 호출 같은 나머지 규칙이다.",
    anchor: "규칙끼리-부딪히면",
  },
  {
    id: "js-this-binding-4",
    post: "js-this-binding",
    question: "Node.js에서 `setTimeout(store.add, 0)`이 `Cannot read properties of undefined (reading 'push')`로 터졌다. 이때 add 안의 this는?",
    choices: [
      "Node.js 타이머의 Timeout 객체",
      "undefined",
      "store",
      "globalThis",
    ],
    answer: 0,
    explanation:
      "Node.js는 콜백을 Timeout 객체의 _onTimeout 속성으로 붙여 부르기 때문에 this가 Timeout이다. this가 undefined였다면 'items'를 읽다가 멈췄을 것이고, 실제로는 this.items가 undefined라서 'push'에서 멈췄다. 스택의 [as _onTimeout] 표시가 그 단서다.",
    anchor: "점이-사라지는-자리들",
  },
  {
    id: "js-this-binding-5",
    post: "js-this-binding",
    question: "`btn.addEventListener(\"click\", function () { ... })` 리스너를 화살표 함수로 바꿨더니 this로 버튼을 찾던 코드가 깨졌다. 가장 알맞은 수정은?",
    choices: [
      "화살표 함수에 .call(btn)을 붙인다",
      "this 대신 event.currentTarget을 쓴다",
      "리스너를 capture 단계로 등록한다",
      "\"use strict\"를 리스너 안에 넣는다",
    ],
    answer: 1,
    explanation:
      "일반 함수 리스너는 this로 currentTarget을 받지만 화살표 함수는 자기 this가 없어 그 값을 무시한다. call로도 화살표 함수의 this는 바뀌지 않는다. event.currentTarget은 함수 모양과 상관없이 리스너를 단 요소를 가리킨다.",
    anchor: "받는-쪽이-this를-정해-주는-api",
  },
  {
    id: "js-this-binding-6",
    post: "js-this-binding",
    question: "React 클래스 컴포넌트에서 `onClick={this.handleClick}`(handleClick은 일반 메서드)이 클릭 시 TypeError를 내는 이유는?",
    choices: [
      "React가 핸들러를 new로 부르기 때문",
      "JSX가 메서드를 문자열로 바꾸기 때문",
      "React DOM이 핸들러를 점 없이 listener(event)로 부르고, 클래스 본문은 엄격 모드라 this가 undefined라서",
      "setState는 비동기라 this가 늦게 정해지기 때문",
    ],
    answer: 2,
    explanation:
      "JSX에는 함수 값만 넘어가고 React DOM은 그 함수를 그냥 부른다. 클래스 본문은 자동으로 엄격 모드라 기본 바인딩이 undefined가 되고 this.setState에서 터진다. 생성자에서 bind하거나 클래스 필드 화살표 함수로 고친다.",
    anchor: "react-클래스-컴포넌트에서-사라지던-this",
  },
];
