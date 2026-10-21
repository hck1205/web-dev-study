import type { QuizQuestion } from "../types";

export const JS_CALLBACK_HELL: QuizQuestion[] = [
  {
    id: "js-callback-hell-1",
    post: "js-callback-hell",
    question:
      "fs.readFile 콜백에서 에러가 나면 500을 보내는데 그 아래 줄에서 다시 res.setHeader를 부른다. 파일이 없을 때 무슨 일이 일어나나?",
    choices: [
      "500 응답만 가고 아래 줄은 무시된다",
      "응답을 이미 보낸 뒤 헤더를 쓰려다 ERR_HTTP_HEADERS_SENT 예외가 나고, 잡는 곳이 없으면 프로세스가 죽는다",
      "Node.js가 두 번째 응답으로 첫 응답을 덮어쓴다",
      "콜백이 자동으로 다시 호출된다",
    ],
    answer: 1,
    explanation:
      "if (err) 블록에 return이 없으면 실행이 아래 줄까지 내려간다. 이미 끝난 응답에 헤더를 쓰려고 하면 예외가 나고, 비동기 콜백 안의 예외는 잡아 줄 try가 없어 프로세스가 죽는다.",
    anchor: "콜백을-넘기면-제어권도-넘어간다",
  },
  {
    id: "js-callback-hell-2",
    post: "js-callback-hell",
    question: "setTimeout 콜백 안에서 throw한 에러를 loadUser 호출을 감싼 try/catch가 잡지 못하는 이유는?",
    choices: [
      "setTimeout은 에러를 삼키도록 만들어져 있어서",
      "try/catch는 동기 코드에서만 쓸 수 있는 문법이라서",
      "예외가 날 때 try 블록을 품은 함수는 이미 끝나 콜 스택에 없어서",
      "콜백이 다른 스레드에서 실행돼서",
    ],
    answer: 2,
    explanation:
      "try/catch는 같은 콜 스택 안에서만 예외를 받는다. 타이머 콜백은 원래 코드가 끝나고 스택이 빈 뒤 이벤트 루프가 새로 부르므로 그 try는 남아 있지 않다. 콜백은 다른 스레드가 아니라 같은 메인 스레드에서 돈다.",
    anchor: "바깥-try가-지나쳐-버린-예외",
  },
  {
    id: "js-callback-hell-3",
    post: "js-callback-hell",
    question:
      "캐시에 있으면 콜백을 바로 부르고 없으면 setTimeout 뒤에 부르는 getPrice를 두 번 호출했다. 두 번째 호출에서 일어나는 일은?",
    choices: [
      "첫 번째와 똑같이 '끝'이 '가격'보다 먼저 찍힌다",
      "콜백이 호출되지 않는다",
      "콜백이 두 번 호출된다",
      "콜백이 다음 줄보다 먼저 실행돼 출력 순서가 첫 번째와 뒤집힌다",
    ],
    answer: 3,
    explanation:
      "캐시 적중일 때는 getPrice 안에서 콜백을 동기로 바로 부르니 호출한 쪽의 다음 줄보다 먼저 실행된다. 같은 호출인데 상황에 따라 순서가 바뀌므로, 비동기일 수 있는 API는 항상 비동기로 콜백을 불러야 한다.",
    anchor: "어떤-때는-바로-어떤-때는-나중에",
  },
  {
    id: "js-callback-hell-4",
    post: "js-callback-hell",
    question: "응답 시간이 300·100·200ms인 요청 세 개를 동시에 보내고 콜백에서 results.push(value)로 모았다. results의 순서는?",
    choices: [
      "끝난 순서인 100, 200, 300ms 요청 순",
      "요청을 보낸 순서",
      "매번 무작위",
      "push는 순서를 보장하므로 요청 순서와 같다",
    ],
    answer: 0,
    explanation:
      "push는 콜백이 불린 순서대로 쌓고, 콜백은 응답이 빨리 온 것부터 불린다. 요청 순서를 지키려면 results[i] = value처럼 인덱스로 넣어야 한다.",
    anchor: "동시에-시작하고-모두-끝나면",
  },
  {
    id: "js-callback-hell-5",
    post: "js-callback-hell",
    question: "중첩 콜백을 이름 붙인 함수로 꺼내 들여쓰기를 폈다. 그래도 남는 문제는?",
    choices: [
      "코드가 실행되지 않는다",
      "겹마다 에러를 넘기는 코드와 제어의 역전, try/catch가 끊기는 문제",
      "함수 호이스팅 때문에 순서가 뒤바뀐다",
      "메모리 사용량이 크게 늘어난다",
    ],
    answer: 1,
    explanation:
      "이름 붙인 함수는 모양만 바꾼다. if (err) return done(err) 배관과 콜백을 언제 몇 번 부를지 남이 정한다는 점은 그대로다. Promise로 감싸야 결과를 객체로 돌려받고 실패를 한 곳에서 다룰 수 있다.",
    anchor: "펴는-방법-두-가지",
  },
  {
    id: "js-callback-hell-6",
    post: "js-callback-hell",
    question: "useEffect에서 navigator.geolocation.getCurrentPosition을 부를 때 ignore 플래그를 두는 이유는?",
    choices: [
      "위치 권한 팝업을 한 번만 띄우려고",
      "콜백을 동기로 바꾸려고",
      "컴포넌트가 사라지거나 effect가 다시 돈 뒤 늦게 온 콜백이 상태를 덮어쓰지 않게 하려고",
      "브라우저가 콜백을 두 번 부르는 버그를 피하려고",
    ],
    answer: 2,
    explanation:
      "콜백을 언제 부를지는 브라우저 API가 정하고, 컴포넌트가 사라졌는지는 모른다. 그래서 cleanup에서 플래그를 세워 내 쪽에서 늦은 콜백을 무시한다. Strict Mode가 effect를 두 번 돌릴 때도 같은 이유로 필요하다.",
    anchor: "콜백이-여전히-맞는-자리",
  },
];
