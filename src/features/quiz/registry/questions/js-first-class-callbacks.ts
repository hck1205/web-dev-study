import type { QuizQuestion } from "../types";

export const JS_FIRST_CLASS_CALLBACKS: QuizQuestion[] = [
  {
    id: "js-first-class-callbacks-1",
    post: "js-first-class-callbacks",
    question: "`const say = shout;` 뒤에 `say.calls = 1`을 하면 `shout.calls`는?",
    choices: [
      "undefined. say는 shout의 복사본이다",
      "에러가 난다. 함수에는 속성을 붙일 수 없다",
      "1. 두 이름이 같은 함수 객체를 가리킨다",
      "undefined. 함수 대입은 이름만 복사한다",
    ],
    answer: 2,
    explanation:
      "함수는 호출할 수 있는 객체라서 속성을 붙일 수 있고, 대입은 복사가 아니라 같은 객체를 가리키는 이름을 하나 더 만든다. 그래서 say에 붙인 속성이 shout에서도 보인다.",
    anchor: "함수를-값처럼-다룬다는-말",
  },
  {
    id: "js-first-class-callbacks-2",
    post: "js-first-class-callbacks",
    question:
      "Express 에러 처리기 `handleError(err, req, res, next)`를 `(...args) => fn(...args)` 래퍼로 감싸 등록했더니 에러가 나도 불리지 않는다. 원인은?",
    choices: [
      "래퍼의 length가 0이라 Express가 일반 미들웨어로 취급해 에러 상황에서 건너뛴다",
      "화살표 함수는 Express 미들웨어로 등록할 수 없다",
      "래퍼가 next를 부르지 않아서다",
      "에러 처리기는 app.use가 아니라 app.error로 등록해야 한다",
    ],
    answer: 0,
    explanation:
      "Express는 함수의 length가 4인 미들웨어만 에러 처리기로 본다. 나머지 매개변수로 만든 래퍼는 length가 0이다. 래퍼의 매개변수를 넷으로 쓰거나 Object.defineProperty로 length를 맞춘다.",
    anchor: "받는-쪽은-함수의-무엇을-보나",
  },
  {
    id: "js-first-class-callbacks-3",
    post: "js-first-class-callbacks",
    question: "메서드에도 쓸 래퍼를 만들 때 원래 함수를 부르는 방법으로 가장 알맞은 것은?",
    choices: [
      "화살표 함수 래퍼 안에서 fn(...args)",
      "일반 함수 래퍼 안에서 fn(...args)",
      "화살표 함수 래퍼 안에서 fn.apply(this, args)",
      "일반 함수 래퍼 안에서 return fn.apply(this, args)",
    ],
    answer: 3,
    explanation:
      "래퍼가 받은 this를 원래 함수에 넘기려면 래퍼가 자기 this를 갖는 일반 함수여야 하고 apply로 넘겨야 한다. 화살표 함수는 바깥 this를 쓰고, fn(...args)는 this를 undefined로 부른다. return을 빼면 결과가 사라진다.",
    anchor: "감쌀-때-잃어버리는-것들",
  },
  {
    id: "js-first-class-callbacks-4",
    post: "js-first-class-callbacks",
    question: "`const fn = counter.increment; fn();`에서 TypeError가 나는 이유는? (increment는 this.count를 올리는 클래스 메서드)",
    choices: [
      "클래스 메서드는 변수에 담을 수 없어서",
      "this는 부르는 방식으로 정해지는데 점 앞에 객체 없이 불러 this가 undefined라서",
      "fn이 counter의 복사본이라 count가 없어서",
      "increment가 화살표 함수가 아니라서 prototype을 잃어서",
    ],
    answer: 1,
    explanation:
      "counter.increment로 꺼내면 함수 객체만 오고 counter는 따라오지 않는다. 그냥 fn()으로 부르면 strict 모드인 클래스 본문에서 this가 undefined다. () => counter.increment()로 감싸거나 bind로 묶어 넘긴다.",
    anchor: "넘기는-순간-사라지는-this",
  },
  {
    id: "js-first-class-callbacks-5",
    post: "js-first-class-callbacks",
    question:
      '`addEventListener("resize", () => update())` 뒤에 `removeEventListener("resize", () => update())`를 불렀다. 결과는?',
    choices: [
      "리스너가 떨어진다. 내용이 같으면 같은 함수로 본다",
      "에러가 난다",
      "두 리스너가 모두 붙는다",
      "리스너가 남는다. 모양만 같은 다른 함수 객체라서다",
    ],
    answer: 3,
    explanation:
      "함수는 참조로 비교한다. 인라인 화살표 함수는 매번 새 객체라 등록한 함수와 짝이 맞지 않는다. 함수를 변수에 담아 같은 참조로 떼거나 signal 옵션과 AbortController로 뗀다.",
    anchor: "모양이-같아도-다른-함수",
  },
  {
    id: "js-first-class-callbacks-6",
    post: "js-first-class-callbacks",
    question:
      "count가 0일 때 한 핸들러 안에서 `setCount(count + 1)`을 세 번 부른 경우와 `setCount((c) => c + 1)`을 세 번 부른 경우, 다음 렌더링의 count는?",
    choices: ["3과 3", "1과 1", "3과 1", "1과 3"],
    answer: 3,
    explanation:
      "값을 넘기면 지금 렌더링의 count인 0에 1을 더한 1을 세 번 넣는다. 함수를 넘기면 React가 업데이터를 큐에 쌓았다가 앞 결과를 다음 함수에 넘기며 차례로 불러 3이 된다.",
    anchor: "react에서-함수를-넘기는-자리",
  },
  {
    id: "js-first-class-callbacks-7",
    post: "js-first-class-callbacks",
    question: "브라우저와 Node.js 22에서 `setTimeout(save(), 1000)`처럼 함수 대신 undefined를 넘기면?",
    choices: [
      "둘 다 1초 뒤 save를 부른다",
      "브라우저는 조용히 아무것도 안 하고, Node.js는 TypeError를 던진다",
      "둘 다 TypeError를 던진다",
      "브라우저는 TypeError, Node.js는 무시한다",
    ],
    answer: 1,
    explanation:
      "save()는 그 자리에서 실행되고 반환값 undefined가 넘어간다. 브라우저는 함수가 아닌 값을 문자열 코드로 실행하려 해서 아무 일도 없고, Node.js는 callback 인자가 함수여야 한다는 TypeError를 던진다.",
    anchor: "넘기는-순간-사라지는-this",
  },
];
