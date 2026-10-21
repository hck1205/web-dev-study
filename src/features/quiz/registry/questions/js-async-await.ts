import type { QuizQuestion } from "../types";

export const JS_ASYNC_AWAIT: QuizQuestion[] = [
  {
    id: "js-async-await-1",
    post: "js-async-await",
    question:
      "items.forEach(async (item) => { await save(item); }); 바로 다음 줄에 console.log(\"모두 저장했다\")가 있다. 이 로그는 언제 찍히나?",
    choices: [
      "모든 save가 끝난 뒤",
      "첫 번째 save가 끝난 뒤",
      "save가 하나도 끝나기 전에 곧바로",
      "에러가 나서 찍히지 않는다",
    ],
    answer: 2,
    explanation:
      "async 콜백은 첫 await에서 Promise를 돌려주고 빠지는데 forEach는 그 반환값을 버린다. 그래서 forEach는 바로 끝나고 다음 줄이 실행된다. 기다리려면 for...of 안에서 await하거나 Promise.all(items.map(...))을 쓴다.",
    anchor: "foreach는-반환값을-버린다",
  },
  {
    id: "js-async-await-2",
    post: "js-async-await",
    question: "async 함수 load()를 부르면 '2. await 앞'이 찍히고 그 뒤 호출한 쪽의 '3'이 찍힌다. 이유는?",
    choices: [
      "async 함수 본문은 첫 await까지 동기로 실행되고, await에서 함수가 빠지며 호출한 쪽은 pending Promise를 받아 계속 가기 때문",
      "async 함수 전체가 다음 태스크로 미뤄지기 때문",
      "console.log가 비동기로 동작하기 때문",
      "await가 스레드를 잠시 멈추기 때문",
    ],
    answer: 0,
    explanation:
      "async 함수는 호출과 동시에 실행을 시작해 첫 await까지 달린다. await에서 실행 문맥을 보관하고 스택에서 빠지면 호출한 쪽이 다음 줄을 실행한다. 스레드는 멈추지 않는다.",
    anchor: "async-함수는-부르는-즉시-promise를-준다",
  },
  {
    id: "js-async-await-3",
    post: "js-async-await",
    question: "300·100·200ms 걸리는 독립 요청 세 개를 for...of 안에서 await하는 것과 Promise.all로 기다리는 것의 걸리는 시간은?",
    choices: [
      "둘 다 약 300ms",
      "for...of 약 600ms, Promise.all 약 300ms",
      "for...of 약 300ms, Promise.all 약 600ms",
      "둘 다 약 600ms",
    ],
    answer: 1,
    explanation:
      "for 안의 await는 앞 요청이 끝나야 다음을 보내므로 시간의 합이 걸린다. Promise.all은 모두 동시에 시작하니 가장 긴 요청 시간이 전체 시간이 된다.",
    anchor: "하나씩-기다릴까-한꺼번에-보낼까",
  },
  {
    id: "js-async-await-4",
    post: "js-async-await",
    question:
      "userP(200ms 성공)와 postsP(50ms 실패)를 먼저 시작하고 try 안에서 await userP; await postsP; 순서로 기다렸다. Node.js 22에서 결과는?",
    choices: [
      "catch가 postsP의 에러를 받는다",
      "userP 결과만 돌려준다",
      "postsP가 거부되는 시점에 핸들러가 없어 처리되지 않은 거부로 프로세스가 종료된다",
      "postsP의 거부는 무시된다",
    ],
    answer: 2,
    explanation:
      "await postsP 줄에 도달하기 전에 postsP가 거부됐고, 그때 아무도 그 Promise를 기다리고 있지 않았다. Node 15부터 처리되지 않은 거부는 프로세스를 끝낸다. 동시에 시작한 Promise는 Promise.all로 처음부터 함께 기다린다.",
    anchor: "미리-시작해-둔-promise가-먼저-실패하면",
  },
  {
    id: "js-async-await-5",
    post: "js-async-await",
    question: "async 함수의 try 블록 안에서 return fail()과 return await fail()의 차이는? (fail은 나중에 거부되는 Promise)",
    choices: [
      "차이가 없다",
      "return fail()은 문법 에러다",
      "return await는 거부를 이행으로 바꾼다",
      "return fail()은 try를 빠져나간 뒤 거부되므로 catch가 못 받고, return await는 catch가 받는다",
    ],
    answer: 3,
    explanation:
      "return promise는 Promise를 넘기고 함수를 끝내므로 거부가 try 밖에서 일어난다. return await는 try 안에서 결과를 기다려 거부가 catch로 간다. 비동기 스택 트레이스에 함수 프레임이 남는 것도 덤이다.",
    anchor: "return과-return-await는-try-안에서-다르다",
  },
  {
    id: "js-async-await-6",
    post: "js-async-await",
    question: "useEffect(async () => { ... })처럼 async 함수를 바로 넘기면 안 되는 이유는?",
    choices: [
      "React가 async 함수를 실행하지 않아서",
      "async 함수는 Promise를 돌려주는데 effect의 반환값은 cleanup 함수여야 해서",
      "effect 안에서는 fetch를 쓸 수 없어서",
      "async 함수는 렌더링을 막아서",
    ],
    answer: 1,
    explanation:
      "effect가 돌려준 값은 cleanup으로 쓰이는데 async 함수의 반환값은 항상 Promise다. effect 안에서 async 함수를 선언해 부르고, cleanup에서는 무시 플래그나 abort로 늦은 응답을 막는다.",
    anchor: "react-effect에는-async를-바로-넘기지-않는다",
  },
  {
    id: "js-async-await-7",
    post: "js-async-await",
    question: "300·100·200·100·300ms 일감 다섯 개를 동시에 2개까지만 돌리면(손이 빈 일꾼이 다음 일감을 가져감) 전체 시간은?",
    choices: ["300ms", "1000ms", "600ms", "500ms"],
    answer: 2,
    explanation:
      "A가 300, B가 100을 가져가고, 100ms에 B가 200을 가져간다. 300ms에 둘 다 비어 A가 100, B가 300을 가져가므로 B가 600ms에 끝난다. 실제 setTimeout으로 돌려도 약 600ms가 나온다.",
    anchor: "하나씩-기다릴까-한꺼번에-보낼까",
  },
];
