import type { QuizQuestion } from "../types";

export const JS_MEMOIZATION: QuizQuestion[] = [
  {
    id: "js-memoization-1",
    post: "js-memoization",
    question:
      "`args.join(\",\")`로 키를 만드는 memoize로 `shippingFee(user)`를 감쌌더니 모든 사용자가 첫 사용자의 배송비를 받는다. 왜인가?",
    choices: [
      "join이 객체를 무시하고 빈 문자열을 만들어서",
      "객체를 문자열로 바꾸면 내용과 상관없이 [object Object]가 되어 키가 모두 같아서",
      "캐시가 첫 번째 결과만 저장하도록 되어 있어서",
      "user 객체가 얕은 복사되어 같은 객체가 돼서",
    ],
    answer: 1,
    explanation:
      "일반 객체의 문자열 변환은 항상 [object Object]다. 서로 다른 사용자도 같은 키가 되니 첫 계산 결과를 계속 돌려준다. 캐시는 빠르게 해 주지만 키가 입력을 구분하지 못하면 틀린 답을 빠르게 낸다.",
    anchor: "캐시-키가-결과를-결정한다",
  },
  {
    id: "js-memoization-2",
    post: "js-memoization",
    question: "재귀 fib를 `const wrapped = memoize(fib)`로 감싸고 `wrapped(35)`를 불렀다. 호출 수는?",
    choices: [
      "약 3천만 번 그대로다. 안쪽 재귀 호출은 원래 fib를 직접 부르니까",
      "36번으로 준다",
      "69번으로 준다",
      "1번이다. 바깥 호출만 계산한다",
    ],
    answer: 0,
    explanation:
      "fib 안의 재귀 호출은 wrapped가 아니라 fib라는 이름을 직접 부른다. 캐시를 거치는 건 바깥의 첫 호출뿐이라 하위 계산은 전부 다시 일어난다. 함수 안에서 캐시를 보게 만든 fibMemo는 69번이었다.",
    anchor: "같은-입력이면-같은-답이라는-약속",
  },
  {
    id: "js-memoization-3",
    post: "js-memoization",
    question: "lodash `_.memoize(power)`에 resolver 없이 `p(2, 3)` 다음 `p(2, 4)`를 부르면?",
    choices: [
      "8, 16",
      "에러가 난다. 인자가 둘이면 resolver가 필수다",
      "8, 8. 기본 키가 첫 인자뿐이라 두 번째 호출이 캐시에 걸린다",
      "16, 16",
    ],
    answer: 2,
    explanation:
      "_.memoize는 기본으로 첫 인자만 캐시 키로 쓴다. 2라는 키에 이미 8이 들어 있으니 p(2, 4)도 8을 돌려준다. 두 인자를 모두 쓰는 resolver를 넘겨야 16이 나온다.",
    anchor: "캐시-키가-결과를-결정한다",
  },
  {
    id: "js-memoization-4",
    post: "js-memoization",
    question: "캐시를 `{}` 객체로 만들고 `key in cache`로 확인하는 memoize에 \"constructor\"를 넣으면?",
    choices: [
      "정상적으로 계산해서 저장한다",
      "계산 없이 Object 함수가 돌아온다. in이 프로토타입의 속성까지 찾기 때문이다",
      "SyntaxError가 난다",
      "undefined가 돌아온다",
    ],
    answer: 1,
    explanation:
      "일반 객체는 Object.prototype을 물려받아 constructor, toString 같은 속성이 이미 있다. in은 프로토타입까지 찾으니 넣은 적 없는 키를 있다고 본다. 상속이 없는 Map을 캐시로 쓴다.",
    anchor: "캐시-키가-결과를-결정한다",
  },
  {
    id: "js-memoization-5",
    post: "js-memoization",
    question:
      "최대 2개를 기억하는 LRU 캐시에 A, B, A, C 순서로 넣었다. 지금 캐시에 남은 것은?",
    choices: ["A, B", "B, C", "A, B, C", "A, C"],
    answer: 3,
    explanation:
      "A를 다시 꺼내 쓸 때 맨 뒤(가장 최근)로 옮겨져 순서가 B, A가 된다. C가 들어와 넘치면 가장 오래 안 쓴 B가 빠진다. 넣은 순서대로만 버리는 FIFO였다면 A가 빠졌을 것이다.",
    anchor: "버리지-않는-캐시는-메모리-누수다",
  },
  {
    id: "js-memoization-6",
    post: "js-memoization",
    question:
      "환율 API를 Promise째 캐시하는 memoize를 썼다. API가 잠깐 503을 낸 뒤 복구됐는데도 계속 에러가 나고, 재배포하니 고쳐졌다. 원인은?",
    choices: [
      "거절된 Promise가 캐시에 남아 같은 키에 계속 그 Promise를 돌려줘서",
      "동시 요청이 합쳐지지 않아 API가 다시 막혀서",
      "Promise는 캐시에 넣을 수 없어서",
      "WeakMap이 키를 지워서",
    ],
    answer: 0,
    explanation:
      "Promise를 바로 캐시하면 동시 요청이 하나로 합쳐지지만, 실패한 Promise도 그대로 남는다. 프로세스가 재시작돼 캐시가 비워질 때까지 같은 거절을 돌려준다. p.catch에서 그 키를 지워야 다음 호출이 다시 요청한다.",
    anchor: "promise를-기억하면-요청이-하나로-합쳐진다",
  },
  {
    id: "js-memoization-7",
    post: "js-memoization",
    question: "`useMemo(() => filterList(list, q), [list, q])`에서 렌더링마다 계산이 다시 일어나는 경우는?",
    choices: [
      "q가 같은 문자열로 유지될 때",
      "list가 useState로 관리될 때",
      "list를 렌더링마다 [...items]처럼 새 배열로 만들어 넘길 때",
      "filterList가 순수 함수일 때",
    ],
    answer: 2,
    explanation:
      "useMemo는 의존성을 원소마다 Object.is로 비교하는 칸 하나짜리 캐시다. 렌더링마다 새로 만든 배열은 내용이 같아도 참조가 달라서 매번 캐시가 맞지 않는다. 의존성에는 상태나 props, 위에서 고정한 값처럼 참조가 유지되는 것을 넣는다.",
    anchor: "usememo는-칸이-하나뿐인-캐시다",
  },
];
