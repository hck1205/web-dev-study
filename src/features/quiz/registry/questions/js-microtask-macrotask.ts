import type { QuizQuestion } from "../types";

export const JS_MICROTASK_MACROTASK: QuizQuestion[] = [
  {
    id: "js-microtask-macrotask-1",
    post: "js-microtask-macrotask",
    question:
      "Promise.resolve().then(a1).then(a2).then(a3)와 Promise.resolve().then(b1).then(b2)를 차례로 만들면 출력 순서는?",
    choices: ["a1 a2 a3 b1 b2", "a1 b1 a2 b2 a3", "b1 b2 a1 a2 a3", "a1 b1 b2 a2 a3"],
    answer: 1,
    explanation:
      "체인의 다음 콜백은 앞 콜백이 끝나 결과 Promise가 정해질 때 큐 맨 뒤에 들어간다. 처음엔 a1, b1만 큐에 있고 하나씩 실행될 때마다 다음 고리가 뒤에 서서 번갈아 돈다. 체인 하나를 먼저 다 돌린다는 답이 흔한 오해다.",
    anchor: "장부를-적으며-푸는-법",
  },
  {
    id: "js-microtask-macrotask-2",
    post: "js-microtask-macrotask",
    question:
      "await null을 두 번 하는 slow()와 한 번 하는 fast()를 차례로 부르고, then 콜백 p를 등록한 뒤 sync를 찍었다. 마지막에 찍히는 것은?",
    choices: ["f2", "p", "sync", "s3"],
    answer: 3,
    explanation:
      "await 하나마다 함수의 나머지가 마이크로태스크 큐 맨 뒤에 다시 선다. s2를 찍은 slow는 두 번째 await에서 f2와 p 뒤로 밀려나서 s3이 마지막이다. 실제 출력은 s1 f1 sync s2 f2 p s3이다.",
    anchor: "await-하나는-한-틱이다",
  },
  {
    id: "js-microtask-macrotask-3",
    post: "js-microtask-macrotask",
    question:
      "retry(fn) 호출 직후 같은 동기 코드에서 mock.timers.tick(1000)을 두 번 했는데 fn이 한 번만 불렸다. 가장 그럴듯한 원인은?",
    choices: [
      "가짜 타이머가 1000ms보다 짧은 간격을 무시해서",
      "fn이 async라서 가짜 타이머와 함께 쓸 수 없어서",
      "sleep의 setTimeout은 catch 뒤, 즉 마이크로태스크에서 예약되는데 시계를 돌릴 때 아직 돌지 않아서",
      "mock.timers.enable이 setImmediate까지 막아서",
    ],
    answer: 2,
    explanation:
      "첫 실패를 catch로 받아 sleep을 부르는 일은 await 뒤라서 마이크로태스크로 예약된다. 테스트가 동기 코드 안에서 바로 시계를 돌리면 예약된 타이머가 없어 아무 일도 일어나지 않는다. 시계를 돌리기 전에 진짜 태스크를 하나 기다려 마이크로태스크를 비워야 한다.",
    anchor: "처음-테스트는-장부의-어디서-어긋났나",
  },
  {
    id: "js-microtask-macrotask-4",
    post: "js-microtask-macrotask",
    question:
      "Node.js 22에서 같은 시각에 만료된 setTimeout 두 개가 각자 then으로 p1, p2를 예약한다. 출력은?",
    choices: ["t1 t2 p1 p2", "p1 p2 t1 t2", "t1 p1 t2 p2", "실행할 때마다 다르다"],
    answer: 2,
    explanation:
      "Node.js 11부터는 브라우저처럼 타이머 콜백 하나가 끝날 때마다 마이크로태스크를 비운다. t1 t2 p1 p2는 타이머를 몰아서 돌리던 Node.js 10 이하의 동작이다.",
    anchor: "nodejs-11에서-바뀐-순서",
  },
  {
    id: "js-microtask-macrotask-5",
    post: "js-microtask-macrotask",
    question: "브라우저에서 queueMicrotask 콜백이 에러를 던지면 어떻게 되나?",
    choices: [
      "unhandledrejection 이벤트로 보고되고 큐가 멈춘다",
      "잡히지 않은 예외로 error 이벤트가 나고, 큐의 나머지 마이크로태스크는 계속 돈다",
      "에러가 조용히 사라진다",
      "다음 태스크로 미뤄져 다시 실행된다",
    ],
    answer: 1,
    explanation:
      "queueMicrotask의 에러는 Promise 거부가 아니라 잡히지 않은 예외라서 error 이벤트로 보고된다. then에서 던진 에러는 거부가 되어 unhandledrejection으로 간다. 어느 쪽이든 나머지 마이크로태스크는 이어서 실행된다.",
    anchor: "마이크로태스크에서-던진-에러는-어디로-가나",
  },
  {
    id: "js-microtask-macrotask-6",
    post: "js-microtask-macrotask",
    question: "같은 동기 코드에서 DOM을 세 번 바꿨을 때 MutationObserver 콜백은 언제, 몇 번 불리나?",
    choices: [
      "변경마다 즉시 동기로 세 번",
      "다음 태스크에서 세 번",
      "다음 렌더링 직후 한 번",
      "동기 코드가 끝난 뒤 마이크로태스크로 한 번, 기록 3개를 받는다",
    ],
    answer: 3,
    explanation:
      "첫 변경 때 알림을 마이크로태스크로 한 번 예약하고, 이후 변경은 기록만 더한다. 그래서 동기 코드가 끝나자마자, 렌더링보다는 먼저 한 번에 전달된다.",
    anchor: "dom-변경은-마이크로태스크로-묶인다",
  },
  {
    id: "js-microtask-macrotask-7",
    post: "js-microtask-macrotask",
    question: "setTimeout(0)과 MessageChannel 메시지를 동시에 예약했을 때 순서에 대해 맞는 말은?",
    choices: [
      "서로 다른 태스크 소스라 명세가 순서를 보장하지 않는다",
      "MessageChannel은 마이크로태스크라 항상 먼저다",
      "setTimeout이 항상 먼저다",
      "둘 다 렌더링 단계에서 실행된다",
    ],
    answer: 0,
    explanation:
      "둘 다 태스크지만 소스가 달라 큐가 따로 있고, 어느 큐를 먼저 꺼낼지는 브라우저가 고른다. 실험에서 늘 같은 순서가 나와도 거기에 기대면 안 된다. 보장되는 건 마이크로태스크가 둘보다 먼저라는 것뿐이다.",
    anchor: "매크로태스크라는-말은-명세에-없다",
  },
];
