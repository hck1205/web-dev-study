import type { QuizQuestion } from "../types";

export const EVENT_LOOP: QuizQuestion[] = [
  {
    id: "event-loop-1",
    post: "event-loop",
    question: "클릭 핸들러 첫 줄에서 스피너를 켜고 300ms짜리 정렬을 한 뒤 스피너를 끄면, 스피너가 화면에 보이지 않는 이유는?",
    choices: [
      "DOM 변경이 비동기라 정렬이 끝난 뒤에 적용되기 때문에",
      "렌더링은 태스크 사이에서만 일어나는데, 핸들러가 끝났을 때는 이미 스피너가 꺼져 있기 때문에",
      "브라우저가 50ms가 넘는 태스크 안의 DOM 변경을 무시하기 때문에",
      "스피너 애니메이션이 마이크로태스크 큐에서 기다리기 때문에",
    ],
    answer: 1,
    explanation:
      "DOM 값은 그 줄에서 바로 바뀌지만 화면을 그리는 일은 같은 메인 스레드에서 태스크가 끝난 뒤에야 온다. 그때는 스피너가 다시 숨겨진 상태라 한 번도 그려지지 않는다.",
    anchor: "화면은-태스크-사이에서만-그려진다",
  },
  {
    id: "event-loop-2",
    post: "event-loop",
    question:
      "console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); Promise.resolve().then(() => console.log(\"C\")); console.log(\"D\"); 의 출력 순서는?",
    choices: ["A D B C", "A B C D", "A D C B", "A C D B"],
    answer: 2,
    explanation:
      "스크립트라는 태스크가 끝날 때까지 A와 D가 먼저 찍힌다. 스택이 비면 마이크로태스크 C를 전부 비우고, 그다음 태스크인 B가 실행된다. 지연이 0이어도 setTimeout은 다음 태스크로 밀린다.",
    anchor: "출력-순서-퍼즐-풀기",
  },
  {
    id: "event-loop-3",
    post: "event-loop",
    question: "긴 반복문 중간에 await Promise.resolve()를 넣었다. 화면 멈춤이 해결되지 않는 이유는?",
    choices: [
      "await 뒷부분은 마이크로태스크라 렌더링과 입력보다 먼저 전부 실행되기 때문에",
      "await는 동기 함수 안에서만 동작하기 때문에",
      "Promise.resolve()는 4ms 이상 기다리게 만들기 때문에",
      "await가 Web Worker로 작업을 옮기기 때문에",
    ],
    answer: 0,
    explanation:
      "마이크로태스크 큐는 빌 때까지 한 번에 비워지므로 렌더링이나 다음 태스크가 끼어들 틈이 없다. 메인 스레드를 실제로 양보하려면 setTimeout, MessageChannel, scheduler.yield()처럼 태스크를 거쳐야 한다.",
    anchor: "마이크로태스크는-끝까지-비운다",
  },
  {
    id: "event-loop-4",
    post: "event-loop",
    question: "300ms 작업을 50ms 조각으로 나누고 조각 사이에 양보했을 때 생기는 트레이드오프는?",
    choices: [
      "INP는 나빠지지만 전체 작업은 빨리 끝난다",
      "메모리 사용량이 조각 수만큼 늘어난다",
      "마이크로태스크가 렌더링보다 늦게 실행된다",
      "클릭은 빨리 처리되지만 전체 작업 완료 시간은 조금 늘어난다",
    ],
    answer: 3,
    explanation:
      "조각 사이에 들어온 입력이 바로 처리되니 입력 지연이 줄어 INP가 좋아진다. 대신 양보한 시간만큼 전체 작업은 늦게 끝나고, 너무 잘게 쪼개면 양보 비용이 일보다 커진다.",
    anchor: "50ms가-넘으면-긴-작업이다",
  },
  {
    id: "event-loop-5",
    post: "event-loop",
    question: "Node.js에서 fs.readFile 콜백 안에서 setTimeout(fn, 0)과 setImmediate(fn)를 등록하면?",
    choices: [
      "항상 setTimeout이 먼저다",
      "항상 setImmediate가 먼저다",
      "실행할 때마다 순서가 달라진다",
      "둘 다 마이크로태스크라 등록한 순서대로다",
    ],
    answer: 1,
    explanation:
      "I/O 콜백은 poll 단계에서 실행되고 그 바로 다음이 check 단계라서 setImmediate가 먼저 돈다. 타이머는 다음 바퀴의 timers 단계에서 실행된다. 순서가 들쭉날쭉한 건 메인 모듈에서 둘을 함께 부를 때다.",
    anchor: "nodejs는-단계를-돈다",
  },
  {
    id: "event-loop-6",
    post: "event-loop",
    question: "같은 코드를 ES 모듈로 실행했더니 Promise 콜백이 process.nextTick 콜백보다 먼저 찍혔다. 이유는?",
    choices: [
      "ES 모듈에서는 process.nextTick이 setImmediate로 바뀌기 때문에",
      "ES 모듈은 libuv 대신 브라우저 이벤트 루프를 쓰기 때문에",
      "nextTick 큐는 원래 Promise 큐보다 늦게 비워지기 때문에",
      "ES 모듈의 최상위 코드가 Promise 처리 안에서 평가되어, 끝난 시점이 이미 마이크로태스크를 비우는 중이기 때문에",
    ],
    answer: 3,
    explanation:
      "CommonJS에서는 콜백이 끝날 때 nextTick 큐를 Promise 큐보다 먼저 비운다. ES 모듈은 최상위 평가 자체가 Promise 처리 중에 일어나서 그 시점에는 Promise 콜백이 먼저 나온다. nextTick이 항상 먼저라고 외우면 여기서 틀린다.",
    anchor: "nexttick은-promise보다-먼저다",
  },
];
