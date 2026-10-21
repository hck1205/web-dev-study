import type { QuizQuestion } from "../types";

export const JS_PROTOTYPE_CHAIN: QuizQuestion[] = [
  {
    id: "js-prototype-chain-1",
    post: "js-prototype-chain",
    question: "`const counts = {}; counts[w] = (counts[w] || 0) + 1`로 단어를 셀 때 w가 \"constructor\"면 결과가 이상해지는 이유는?",
    choices: [
      "constructor는 예약어라 객체 키로 쓸 수 없어서",
      "counts에 없는 키를 읽으면 체인을 올라가 Object.prototype.constructor(Object 함수)를 찾고, 함수 + 1이 문자열이 되어서",
      "|| 연산자가 constructor를 false로 바꿔서",
      "Object.keys가 constructor를 숨겨서",
    ],
    answer: 1,
    explanation:
      "{}는 Object.prototype에 연결되어 있어서 constructor, toString 같은 이름을 물려받는다. 함수는 truthy라 || 0이 무시되고, 함수 + 1은 문자열 이어 붙이기가 된다. Object.create(null)이나 Map을 쓰면 해결된다.",
    anchor: "객체마다-숨은-연결이-하나-있다",
  },
  {
    id: "js-prototype-chain-2",
    post: "js-prototype-chain",
    question: "`function Dog() {} Dog.prototype.tricks = [];`에서 `a.tricks.push(\"sit\")`를 하면 다른 인스턴스 b의 tricks는?",
    choices: [
      "[\"sit\"]이 된다. push는 대입이 아니라 읽기라서 프로토타입의 배열 하나를 함께 바꾼다",
      "[]로 남는다. a에 자기 tricks가 새로 생긴다",
      "TypeError가 난다. 프로토타입의 속성은 읽기 전용이다",
      "undefined가 된다",
    ],
    answer: 0,
    explanation:
      "this.tricks를 읽으면 체인을 올라가 프로토타입의 배열을 찾고, push는 그 배열 자체를 바꾼다. 대입이 아니므로 섀도잉이 일어나지 않는다. 상태는 생성자나 클래스 필드에서 인스턴스마다 만들어야 한다.",
    anchor: "프로토타입에-둔-배열은-모두가-같이-쓴다",
  },
  {
    id: "js-prototype-chain-3",
    post: "js-prototype-chain",
    question: "base에 `writable: false`인 version이 있고 `child = Object.create(base)`일 때, 느슨한 모드에서 `child.version = 2`의 결과는?",
    choices: [
      "child에 version: 2가 생긴다",
      "base.version이 2로 바뀐다",
      "TypeError가 난다",
      "에러 없이 무시되고 child.version은 여전히 1이다",
    ],
    answer: 3,
    explanation:
      "체인 위의 같은 이름이 쓰기 금지면 대입이 막힌다. 엄격 모드는 TypeError를 던지지만 느슨한 모드는 조용히 무시해서 실제로 sloppy: 1 []이 찍혔다. 자기 속성을 꼭 만들려면 Object.defineProperty를 쓴다.",
    anchor: "읽을-때는-올라가고-쓸-때는-올라가지-않는다",
  },
  {
    id: "js-prototype-chain-4",
    post: "js-prototype-chain",
    question: "요청 본문 `{\"__proto__\": {\"isAdmin\": true}}`를 for...in 기반 깊은 merge로 {}에 합쳤더니 새 객체 `{}`의 isAdmin이 true가 됐다. 왜인가?",
    choices: [
      "JSON.parse가 __proto__를 실행해서",
      "merge가 결과 객체를 전역 변수로 만들어서",
      "merge가 target[\"__proto__\"]를 읽는 순간 접근자가 Object.prototype을 돌려주고, 거기에 isAdmin이 쓰여서",
      "for...in이 isAdmin을 모든 객체에 복사해서",
    ],
    answer: 2,
    explanation:
      "JSON.parse는 __proto__를 평범한 자기 키로 만들 뿐이다. 문제는 merge가 target[\"__proto__\"]로 Object.prototype을 꺼내 그 위에 값을 쓰는 데서 생긴다. 이후 모든 객체가 체인을 올라가 isAdmin: true를 읽는다.",
    anchor: "요청-하나가-모든-객체를-바꾸는-법",
  },
  {
    id: "js-prototype-chain-5",
    post: "js-prototype-chain",
    question: "`const fake = Object.create(Cat.prototype)`는 Cat 생성자를 부르지 않았다. `fake instanceof Cat`은?",
    choices: [
      "false. 생성자를 거치지 않았으니까",
      "true. instanceof는 체인에 Cat.prototype이 있는지만 본다",
      "TypeError가 난다",
      "Cat에 Symbol.hasInstance가 있을 때만 true",
    ],
    answer: 1,
    explanation:
      "instanceof는 왼쪽 객체의 [[Prototype]]부터 올라가며 오른쪽 함수의 prototype과 같은 객체를 찾는다. 누가 객체를 만들었는지는 보지 않는다. 반대로 setPrototypeOf로 연결을 바꾸면 진짜 인스턴스도 false가 된다.",
    anchor: "instanceof는-체인을-훑는다",
  },
  {
    id: "js-prototype-chain-6",
    post: "js-prototype-chain",
    question: "Next.js 서버 컴포넌트에서 클라이언트 컴포넌트로 `new Money(1000)`을 props로 넘기면?",
    choices: [
      "메서드까지 그대로 넘어간다",
      "자동으로 평범한 객체로 바뀌어 v만 넘어간다",
      "Classes or null prototypes are not supported 에러가 난다",
      "JSON.stringify 결과 문자열로 넘어간다",
    ],
    answer: 2,
    explanation:
      "이 경계는 직렬화를 거치므로 React가 [[Prototype]]이 Object.prototype인 객체만 허용한다. 클래스 인스턴스와 Object.create(null) 객체는 모두 같은 에러로 막혔다. 경계에서 평범한 객체로 바꿔 넘기고 메서드는 클라이언트 유틸로 옮긴다.",
    anchor: "체인이-끊기는-경계들",
  },
];
