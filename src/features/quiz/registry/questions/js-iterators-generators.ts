import type { QuizQuestion } from "../types";

export const JS_ITERATORS_GENERATORS: QuizQuestion[] = [
  {
    id: "js-iterators-generators-1",
    post: "js-iterators-generators",
    question: "제너레이터 함수 첫 줄에 console.log를 넣고 함수를 불렀는데 아무것도 찍히지 않는다. 이유는?",
    choices: [
      "제너레이터 함수는 마이크로태스크로 미뤄져 나중에 실행되어서",
      "console.log는 제너레이터 안에서 무시되어서",
      "부르면 본문 대신 멈춰 있는 제너레이터 객체를 돌려주고, next()를 불러야 본문이 돌기 시작해서",
      "제너레이터는 for...of 안에서만 실행할 수 있어서",
    ],
    answer: 2,
    explanation:
      "function*로 만든 함수는 부르는 순간 한 줄도 실행하지 않고 시작 전 상태의 제너레이터 객체를 준다. 첫 next()가 본문을 처음부터 첫 yield까지 돌린다. 비동기로 미뤄지는 게 아니라 아예 시작하지 않은 것이다.",
    anchor: "같은-일을-제너레이터로",
  },
  {
    id: "js-iterators-generators-2",
    post: "js-iterators-generators",
    question: "range 객체의 [Symbol.iterator]()가 자기 자신을 돌려주게 만들었더니 [...r]을 두 번째 했을 때 빈 배열이 나왔다. 왜 그런가?",
    choices: [
      "위치가 객체에 하나뿐이라 한 번 끝까지 돈 뒤에는 끝난 상태로 남아 있어서",
      "전개 문법이 같은 객체를 두 번 펼치지 못하게 막아서",
      "Symbol.iterator가 한 번만 호출될 수 있어서",
      "첫 번째 전개가 return()을 불러 객체를 지워서",
    ],
    answer: 0,
    explanation:
      "이터러블이 돌 때마다 새 이터레이터를 만들면 위치가 따로 생겨 여러 번 돌 수 있다. 자기 자신을 돌려주면 위치가 하나라 한 번 돌고 나면 done: true만 나온다. 제너레이터 객체와 values()가 돌려주는 이터레이터가 이 모양이다.",
    anchor: "이터러블을-손으로-만들어-보기",
  },
  {
    id: "js-iterators-generators-3",
    post: "js-iterators-generators",
    question: "function* g() { yield 1; return 99; }에서 [...g()]의 결과는?",
    choices: ["[1, 99]", "[99]", "[1, undefined]", "[1]"],
    answer: 3,
    explanation:
      "return 99는 { value: 99, done: true }로 나오는데, 전개와 for...of는 done이 true인 결과의 value를 버린다. return 값은 yield*의 결과로 받거나 next()를 직접 부를 때만 볼 수 있다.",
    anchor: "같은-일을-제너레이터로",
  },
  {
    id: "js-iterators-generators-4",
    post: "js-iterators-generators",
    question: "const name = yield \"이름은?\"가 있는 제너레이터에 c.next(\"A\"), c.next(\"B\")를 차례로 불렀다. name에는 무엇이 들어가나?",
    choices: [
      "\"A\". 처음 넘긴 값이 첫 yield에 들어간다",
      "\"B\". 첫 next는 첫 yield까지 돌리는 호출이라 인자를 받아 줄 yield가 없다",
      "undefined. next의 인자는 yield 식에 들어가지 않는다",
      "\"이름은?\". yield 식은 내보낸 값을 그대로 돌려준다",
    ],
    answer: 1,
    explanation:
      "첫 next()는 본문을 처음부터 첫 yield까지 돌리고 멈춘다. 그때는 아직 멈춘 yield가 없으니 인자는 버려진다. 두 번째 next(\"B\")가 멈춰 있던 yield 자리를 \"B\"로 바꾼다.",
    anchor: "next값으로-안에-값을-넣는다",
  },
  {
    id: "js-iterators-generators-5",
    post: "js-iterators-generators",
    question: "finally 블록 안에 yield가 있는 제너레이터에 return(\"종료\")를 불렀다. 무엇이 돌아오나?",
    choices: [
      "{ value: \"종료\", done: true }가 바로 돌아오고 finally는 건너뛴다",
      "TypeError가 난다. finally에는 yield를 쓸 수 없다",
      "finally의 yield 값과 done: false가 돌아오고, 다음 next()에서야 { value: \"종료\", done: true }가 나온다",
      "finally를 끝까지 돌리고 yield는 무시한 뒤 { value: \"종료\", done: true }를 준다",
    ],
    answer: 2,
    explanation:
      "return()은 멈춘 자리에서 return을 한 것처럼 만들어 finally를 실행하는데, finally 안에서 yield를 만나면 거기서 다시 멈춘다. break도 return()을 부르니 반복문을 빠져나온 뒤 정리가 중간에서 멈춰 버린다. 그래서 finally에는 yield를 두지 않는다.",
    anchor: "return과-throw로-바깥에서-끝내기",
  },
  {
    id: "js-iterators-generators-6",
    post: "js-iterators-generators",
    question: "[wait(300), failAfter(100)]처럼 이미 시작한 Promise 배열을 try 안의 for await로 돌렸는데 Node.js 프로세스가 100ms 만에 죽었다. 원인은?",
    choices: [
      "for await가 첫 Promise를 기다리는 동안 두 번째가 실패했고, 그 거부를 아직 아무도 await하지 않아 처리되지 않은 거부가 되어서",
      "for await는 동기 배열을 받을 수 없어서",
      "try...catch는 for await 안의 에러를 잡지 못해서",
      "Promise가 동시에 두 개 이상 실패하면 Node.js가 항상 종료해서",
    ],
    answer: 0,
    explanation:
      "for await는 원소를 차례로 await한다. 앞의 300ms짜리를 기다리는 사이 뒤의 Promise가 거부되면 처리할 핸들러가 붙어 있지 않아 Node.js 기본 설정이 프로세스를 끝낸다. 이미 시작한 작업 여러 개는 Promise.all이나 allSettled로 기다린다.",
    anchor: "비동기-제너레이터와-for-await",
  },
  {
    id: "js-iterators-generators-7",
    post: "js-iterators-generators",
    question: "redux-saga의 yield call(fetchUser, 7)을 테스트에서 네트워크 없이 검사할 수 있는 이유는?",
    choices: [
      "call이 fetch를 자동으로 가짜로 바꿔 주어서",
      "call은 함수를 부르지 않고 무엇을 부를지 적은 객체만 만들어, gen.next()로 꺼낸 값을 비교하고 결과는 next(값)으로 넣을 수 있어서",
      "제너레이터 안의 fetch는 테스트 환경에서 실행되지 않아서",
      "saga 미들웨어가 테스트 모드에서 응답을 캐시해서",
    ],
    answer: 1,
    explanation:
      "call은 type이 CALL이고 fn과 args를 담은 평범한 객체를 만든다. 실제 호출과 결과 주입은 미들웨어가 next()와 throw()로 한다. 그래서 테스트에서는 next()를 한 단계씩 부르며 나온 객체를 비교하고 원하는 응답을 넣으면 된다.",
    anchor: "redux-saga는-왜-제너레이터를-골랐나",
  },
];
