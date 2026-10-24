import type { QuizQuestion } from "../types";

export const JS_LOOPS_CONTROL_FLOW: QuizQuestion[] = [
  {
    id: "js-loops-control-flow-1",
    post: "js-loops-control-flow",
    question: "forEach 콜백 안에서 조건을 만나면 return했는데 뒤 요소도 계속 처리된다. 왜 그럴까?",
    choices: [
      "return은 콜백 한 번만 끝내고, forEach는 다음 요소로 콜백을 다시 부르기 때문에",
      "forEach는 return 값을 무시하고 예외만 멈춤 신호로 받기 때문에",
      "화살표 함수 안의 return은 바깥 함수의 return으로 취급되기 때문에",
      "forEach는 비동기로 돌아서 return이 늦게 반영되기 때문에",
    ],
    answer: 0,
    explanation:
      "forEach는 요소마다 콜백 함수를 부르는 메서드라서 콜백의 return은 그 회차만 끝내고 continue처럼 동작한다. 중간에 멈추려면 for...of와 break를 쓰거나 some, every, find처럼 멈추는 메서드를 쓴다. 콜백 안의 break는 문법 에러다.",
    anchor: "foreach는-반복문이-아니라-콜백을-부르는-함수다",
  },
  {
    id: "js-loops-control-flow-2",
    post: "js-loops-control-flow",
    question: "[30, 10, 20].forEach(async (ms) => { await wait(ms); log.push(ms) }) 바로 다음 줄에서 log.push('끝')을 하면 log의 최종 순서는?",
    choices: [
      "30, 10, 20, 끝",
      "끝, 30, 10, 20",
      "끝, 10, 20, 30",
      "10, 20, 30, 끝",
    ],
    answer: 2,
    explanation:
      "forEach는 async 콜백이 돌려준 Promise를 버리고 바로 다음 요소로 가서 세 작업이 동시에 출발하고, forEach가 곧바로 끝나 '끝'이 먼저 들어간다. 그 뒤 짧은 타이머부터 끝나 10, 20, 30 순서가 된다. 순서대로 기다리려면 for...of 안에서 await한다.",
    anchor: "await를-넣으면-foreach는-기다리지-않는다",
  },
  {
    id: "js-loops-control-flow-3",
    post: "js-loops-control-flow",
    question: "배열에 for...in을 쓰면 안 되는 이유로 가장 알맞은 것은?",
    choices: [
      "for...in은 배열의 마지막 요소를 건너뛴다",
      "for...in은 값을 주므로 인덱스를 알 수 없다",
      "for...in은 이터러블이 아닌 값에서만 동작해 배열에서 TypeError가 난다",
      "키를 문자열로 주고, 배열에 붙인 속성과 프로토타입에 덧붙인 열거 가능한 속성까지 돌기 때문에",
    ],
    answer: 3,
    explanation:
      "for...in은 열거 가능한 속성 이름을 문자열로 돌고 프로토타입 체인까지 올라간다. 그래서 인덱스가 \"0\" 같은 문자열이 되고, Array.prototype에 누가 메서드를 붙였다면 그것도 나온다. 배열 값은 for...of로 돈다.",
    anchor: "forin은-키를-세고-물려받은-것까지-센다",
  },
  {
    id: "js-loops-control-flow-4",
    post: "js-loops-control-flow",
    question: "URL 쿼리에서 읽은 code 값으로 switch (code) { case 1: ... }를 썼는데 case 1이 한 번도 맞지 않는다. 원인은?",
    choices: [
      "switch는 숫자 case를 정렬한 뒤 이진 탐색해서 1은 건너뛴다",
      "switch는 ===로 비교하는데 쿼리 값은 문자열 \"1\"이라서",
      "case 1 뒤에 break가 없어서 default로 흘러갔다",
      "switch는 == 비교라서 \"1\"이 true로 바뀌었다",
    ],
    answer: 1,
    explanation:
      "switch는 형 변환 없이 엄격 비교를 한다. 쿼리, input.value, dataset에서 온 값은 문자열이라 숫자 case와 맞지 않는다. 숫자로 바꾸거나 case 값을 문자열로 맞춘다.",
    anchor: "switch는-로-비교하고-break가-없으면-아래로-흘러간다",
  },
  {
    id: "js-loops-control-flow-5",
    post: "js-loops-control-flow",
    question: "switch에서 case 1과 case 2에 각각 let x를 선언했더니 SyntaxError가 났다. 가장 알맞은 해결은?",
    choices: [
      "case마다 중괄호로 블록을 열어 각자 변수를 갖게 한다",
      "let을 const로 바꾼다",
      "각 case 끝에 break를 넣는다",
      "default를 맨 위로 옮긴다",
    ],
    answer: 0,
    explanation:
      "switch 전체가 블록 하나라서 case마다 같은 이름을 선언하면 같은 블록에 두 번 선언한 셈이 된다. case 1: { ... }처럼 중괄호를 주면 블록이 나뉜다. break나 const로는 해결되지 않는다.",
    anchor: "switch는-로-비교하고-break가-없으면-아래로-흘러간다",
  },
  {
    id: "js-loops-control-flow-6",
    post: "js-loops-control-flow",
    question: "사용자 입력 문자열 key로 const LABEL = { paid: '결제 완료' }를 조회할 때 생길 수 있는 문제는?",
    choices: [
      "객체 조회는 switch보다 항상 느리다",
      "key가 대문자면 자동으로 소문자로 바뀌어 다른 값이 나온다",
      "key가 \"toString\"이면 프로토타입의 함수가 나와 ?? 기본값도 동작하지 않는다",
      "객체 키는 넣은 순서와 상관없이 정렬되어 조회 결과가 바뀐다",
    ],
    answer: 2,
    explanation:
      "일반 객체는 Object.prototype을 물려받아 LABEL[\"toString\"]이 함수가 된다. undefined가 아니라서 ?? 기본값도 끼어들지 못한다. Object.hasOwn으로 확인하거나, 프로토타입 없는 객체나 Map을 쓴다.",
    anchor: "ifelse-객체-조회-일찍-돌아가기-중에-고르기",
  },
  {
    id: "js-loops-control-flow-7",
    post: "js-loops-control-flow",
    question: "1천만 개 배열을 더하는 측정에서 for...in이 인덱스 for보다 백 배 가까이 느렸다. 가장 큰 이유는?",
    choices: [
      "for...in은 배열을 매번 복사한 뒤 돈다",
      "for...in은 모든 키를 문자열로 만들고 프로토타입 체인까지 확인하며 돈다",
      "for...in은 이터레이터 객체를 요소마다 새로 만든다",
      "for...in은 콜백 함수를 요소마다 호출한다",
    ],
    answer: 1,
    explanation:
      "for...in은 열거 가능한 속성 이름을 문자열로 꺼내고 물려받은 속성까지 찾느라 비싸다. forEach와 reduce는 콜백 호출 비용, for...of는 이터레이터 비용이 있지만 그 차이는 훨씬 작다. 평소에는 의도가 드러나는 방법을 쓰고 병목일 때만 인덱스 for로 바꾼다.",
    anchor: "배열-메서드냐-for-루프냐",
  },
];
