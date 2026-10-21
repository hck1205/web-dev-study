import type { QuizQuestion } from "../types";

export const JAVASCRIPT_ROADMAP: QuizQuestion[] = [
  {
    id: "javascript-roadmap-1",
    post: "javascript-roadmap",
    question:
      "for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); 다음 줄에 Promise.resolve().then(() => console.log(\"then\")); console.log(\"end\");가 있다. 출력 순서는?",
    choices: [
      "0, 1, 2, then, end",
      "end, then, 3, 3, 3",
      "end, 0, 1, 2, then",
      "then, end, 3, 3, 3",
    ],
    answer: 1,
    explanation:
      "동기 코드인 end가 먼저, 마이크로태스크인 then이 다음, 태스크인 타이머가 마지막이다. var는 변수 하나를 공유하니 타이머 셋은 반복이 끝난 뒤의 3을 읽는다.",
    anchor: "11-자바스크립트가-실행되는-방식",
  },
  {
    id: "javascript-roadmap-2",
    post: "javascript-roadmap",
    question: "const draft = { ...cart }; draft.items.push(x); 뒤에 cart.items.length가 늘어난 이유는?",
    choices: [
      "전개 문법이 cart를 그대로 가리키는 별칭을 만들어서",
      "push가 모든 사본에 전파되는 메서드라서",
      "객체 전개는 얕은 복사라 items 배열은 같은 참조를 공유해서",
      "const로 선언한 객체는 복사되지 않아서",
    ],
    answer: 2,
    explanation:
      "객체 전개는 바깥 객체만 새로 만들고 안쪽 값은 참조를 그대로 옮긴다. 그래서 draft.items와 cart.items는 같은 배열이다. 원시값과 참조, 얕은 복사 글이 이 장면을 다룬다.",
    anchor: "07-복사와-불변성",
  },
  {
    id: "javascript-roadmap-3",
    post: "javascript-roadmap",
    question:
      "const { items = [] } = res?.data ?? {}; 에서 서버가 { data: { items: null } }을 보냈다. items는?",
    choices: ["[]", "undefined", "TypeError가 난다", "null"],
    answer: 3,
    explanation:
      "구조 분해 기본값은 꺼낸 값이 undefined일 때만 쓰인다. null은 값이 있는 것으로 보고 그대로 들어가서, 이어지는 items.map에서 터진다.",
    anchor: "08-최신-문법",
  },
  {
    id: "javascript-roadmap-4",
    post: "javascript-roadmap",
    question:
      "ES 모듈 파일에서 const add = total.add; add(1000);을 부르자 Cannot read properties of undefined (reading 'sum')이 났다. 원인 두 가지를 묶으면?",
    choices: [
      "점 없이 불러 this가 기본 바인딩이 되고, ES 모듈은 strict 모드라 그 값이 undefined다",
      "add가 화살표 함수라 this가 없다",
      "total이 const라 수정할 수 없다",
      "모듈 스코프에서는 객체 메서드를 꺼낼 수 없다",
    ],
    answer: 0,
    explanation:
      "this는 부르는 방식이 정하니 점 없이 부르면 기본 바인딩이다. strict 모드에서 기본 바인딩은 undefined라 sum을 읽다 터진다. 느슨한 모드였다면 전역 객체에 sum이 조용히 생겼다.",
    anchor: "09-this-프로토타입-객체-지향",
  },
  {
    id: "javascript-roadmap-5",
    post: "javascript-roadmap",
    question: "클로저 글을 읽기 전에 먼저 읽어 두면 좋은 장은?",
    choices: ["12 브라우저와 DOM", "01 변수와 스코프", "10 비동기", "09 this와 프로토타입"],
    answer: 1,
    explanation:
      "클로저는 함수가 자기가 쓰인 자리의 스코프를 기억하는 것이라, 렉시컬 스코프와 변수가 언제 새로 생기는지를 알아야 읽힌다. 장끼리 기대는 순서 그림에서 변수와 타입이 함수 장으로 이어진다.",
    anchor: "장끼리-기대는-순서",
  },
  {
    id: "javascript-roadmap-6",
    post: "javascript-roadmap",
    question: "React에서 effect의 정리 함수로 abort()를 불렀는데도 옛 응답이 화면을 덮는다. 먼저 펼 글은?",
    choices: ["디바운스와 스로틀", "이벤트 위임", "AbortController로 취소 설계하기", "타이머는 왜 늦게 울리나"],
    answer: 2,
    explanation:
      "abort는 신호를 받아 듣는 작업만 멈춘다. 요청 함수까지 신호가 전달됐는지, 못 넘기면 setState 직전에 signal.aborted를 확인하는지를 그 글에서 다룬다. 디바운스는 요청 수를 줄일 뿐 응답 순서를 보장하지 않는다.",
    anchor: "이-증상이면-이-글부터",
  },
];
