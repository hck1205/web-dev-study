import type { QuizQuestion } from "../types";

export const PATTERN_ITERATOR: QuizQuestion[] = [
  {
    id: "pattern-iterator-1",
    post: "pattern-iterator",
    question:
      "커서 기반 페이지네이션 API를 쓰는 세 곳이 모두 do...while로 nextCursor를 넘기는 코드를 복사해 두었다. 쓰는 쪽이 for await 하나로 주문을 돌게 하려면 어떤 패턴이 맞나?",
    choices: ["이터레이터", "프록시", "옵서버", "빌더"],
    answer: 0,
    explanation:
      "이터레이터는 컬렉션이 어떻게 생겼는지 숨기고 다음 원소만 꺼내 준다. 페이지를 넘기는 방법을 async 제너레이터 하나에 모으면 쓰는 쪽은 페이지를 모른 채 for await만 쓴다. 프록시는 같은 인터페이스로 접근을 제어할 뿐 원소를 차례로 꺼내 주지 않는다.",
    anchor: "돌-줄-아는-것과-도는-것을-나눈다",
  },
  {
    id: "pattern-iterator-2",
    post: "pattern-iterator",
    question: "제너레이터를 for...of로 돌다가 중간에 break하면 어떤 일이 일어나나?",
    choices: [
      "제너레이터는 멈추지 않고 백그라운드에서 끝까지 돈다",
      "반복문이 반복자의 return()을 불러 제너레이터의 finally 블록이 실행된다",
      "다음 for...of에서 멈춘 자리부터 이어서 돈다",
      "TypeError가 난다",
    ],
    answer: 1,
    explanation:
      "break나 예외로 반복문을 빠져나가면 반복문이 return()을 불러 정리할 기회를 준다. 제너레이터에서는 이때 try...finally의 finally가 실행되니, DB 커서나 파일 핸들처럼 꼭 닫아야 하는 자원은 finally에서 정리한다.",
    anchor: "for-await가-실제로-부르는-것",
  },
  {
    id: "pattern-iterator-3",
    post: "pattern-iterator",
    question: "allOrders() 결과를 받아 먼저 건수를 세고 이어서 내보내기를 했더니 에러 없이 0건이 내보내졌다. 원인은?",
    choices: [
      "for await가 Promise를 기다리지 않아서",
      "API가 두 번째 요청에 빈 페이지를 줘서",
      "제너레이터 객체는 자기 자신이 반복자라 한 번 다 돌면 다시 돌 수 없어서",
      "건수를 세는 동안 배열이 정렬되어서",
    ],
    answer: 2,
    explanation:
      "배열은 돌 때마다 새 반복자를 만들지만 제너레이터 객체의 [Symbol.iterator]()는 자기를 돌려준다. 그래서 두 번째 반복은 이미 끝난 반복자를 돌아 0건이 된다. 여러 번 돌아야 하면 제너레이터 함수를 넘기거나 돌 때마다 새로 만드는 객체로 감싼다.",
    anchor: "한-번-돌면-끝나는-반복자",
  },
  {
    id: "pattern-iterator-4",
    post: "pattern-iterator",
    question:
      "100만 개 배열에서 조건에 맞는 앞의 세 개만 필요하다. arr.map().filter().slice(0, 3) 대신 arr.values().map().filter().take(3).toArray()를 쓰면 무엇이 달라지나?",
    choices: [
      "결과 순서가 달라진다",
      "map 콜백이 필요한 만큼만 불리고 중간 배열을 만들지 않는다",
      "모든 원소를 미리 계산해 두어 다음 호출이 빨라진다",
      "차이가 없다",
    ],
    answer: 1,
    explanation:
      "이터레이터 헬퍼는 게으르게 동작해서 끝의 소비자가 값을 달라고 할 때 원소를 하나씩 흘려보낸다. 실험에서 배열 체인은 map 콜백을 100만 번 불렀고 반복자 체인은 일곱 번만 불렀다.",
    anchor: "필요한-만큼만-꺼내는-게으른-반복",
  },
  {
    id: "pattern-iterator-5",
    post: "pattern-iterator",
    question: "ids.forEach((id, i) => { if (id === 2) ids.splice(i, 1) })를 [1, 2, 2, 3]에 실행하면 결과는?",
    choices: ["[1, 3]", "[1, 2, 2, 3]", "[1, 3, 3]", "[1, 2, 3]"],
    answer: 3,
    explanation:
      "앞에서 원소를 지우면 뒤의 원소가 한 칸씩 당겨지는데 인덱스는 그대로 올라가서, 지운 바로 다음 원소를 건너뛴다. 그래서 두 번째 2가 살아남는다. filter로 새 배열을 만들거나 뒤에서부터 돌며 지운다.",
    anchor: "도는-중에-컬렉션이-바뀌면",
  },
  {
    id: "pattern-iterator-6",
    post: "pattern-iterator",
    question: "주문마다 await sendMail()을 순서대로 하려고 orders.forEach(async (o) => await sendMail(o))를 썼다. 무엇이 문제인가?",
    choices: [
      "forEach는 콜백의 Promise를 기다리지 않아 메일이 한꺼번에 나가고 함수는 먼저 돌아온다",
      "async 콜백은 forEach에서 문법 오류다",
      "메일이 두 번씩 나간다",
      "forEach가 마지막 원소를 건너뛴다",
    ],
    answer: 0,
    explanation:
      "forEach는 흐름을 컬렉션이 쥐는 내부 반복자라 콜백이 돌려준 Promise를 기다리지 않는다. 순서대로 기다려야 하면 쓰는 쪽이 next()로 당기는 외부 반복자, 곧 for...of 안에서 await한다.",
    anchor: "안에서-도는-반복자-밖에서-당기는-반복자",
  },
];
