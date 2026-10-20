import type { QuizQuestion } from "../types";

export const PATTERN_STATE: QuizQuestion[] = [
  {
    id: "pattern-state-1",
    post: "pattern-state",
    question: "pay, ship, cancel 메서드마다 같은 status switch가 반복되고, 상태를 하나 더할 때마다 여러 메서드를 고쳐야 한다. 상태 패턴은 이 구조를 어떻게 바꾸나?",
    choices: [
      "상태마다 동작을 객체로 묶고, Context는 지금 상태 객체에 요청을 넘긴다",
      "status 문자열을 enum으로 바꿔 switch를 한 메서드로 합친다",
      "메서드마다 전략 객체를 바깥에서 주입받는다",
      "상태가 바뀔 때마다 구독자에게 알려 각자 분기하게 한다",
    ],
    answer: 0,
    explanation:
      "상태 패턴은 메서드마다 상태를 나누던 축을 돌려 상태마다 메서드를 모은다. 그래서 한 상태의 규칙이 한 곳에 있고, 새 상태를 넣을 때 빠뜨린 메서드가 타입 검사에서 드러난다. enum으로 바꿔도 switch가 메서드마다 흩어진 문제는 그대로다.",
    anchor: "상태를-객체로-꺼내면",
  },
  {
    id: "pattern-state-2",
    post: "pattern-state",
    question: "상태 객체가 transitionTo로 다음 상태를 직접 정하게 했을 때 생기는 대가는?",
    choices: [
      "상태 객체를 주문마다 새로 만들어야 한다",
      "Context에 다시 큰 switch가 생긴다",
      "상태 객체들이 서로를 알게 되고, 전체 흐름을 보려면 여러 객체를 열어야 한다",
      "상태를 바꿀 때 타입 검사를 할 수 없다",
    ],
    answer: 2,
    explanation:
      "상태가 다음 상태를 정하면 새 상태를 넣기는 쉽지만 Paid가 Shipped와 Cancelled를 아는 식으로 상태끼리 엮이고 흐름이 흩어진다. Context에 모으면 반대로 한눈에 보이지만 큰 switch를 닮아 간다. 그래서 동작은 상태 객체에, 허용되는 전이는 표 하나에 두는 절충을 많이 쓴다.",
    anchor: "전이는-누가-결정하나",
  },
  {
    id: "pattern-state-3",
    post: "pattern-state",
    question: "구조가 같은 상태 패턴과 전략 패턴을 가르는 가장 좋은 질문은?",
    choices: [
      "인터페이스에 메서드가 몇 개인가",
      "그 필드가 바깥에서 고른 옵션인가, 객체가 살아가며 스스로 지나는 단계인가",
      "구현체가 클래스인가 함수인가",
      "Context가 하나인가 여럿인가",
    ],
    answer: 1,
    explanation:
      "전략은 Client나 설정이 골라 넣고 보통 그대로 두며 전략끼리 서로 모른다. 상태는 일하는 도중에 스스로 바뀌고 상태 객체가 다음 상태를 안다. 메서드 수나 클래스냐 함수냐는 두 패턴 모두에서 달라질 수 있다.",
    anchor: "전략과-같은-모양-다른-질문",
  },
  {
    id: "pattern-state-4",
    post: "pattern-state",
    question: "isLoading, isError, data를 따로 두던 화면 상태를 status 하나의 판별 유니온으로 바꾸면 얻는 것은?",
    choices: [
      "렌더링 횟수가 줄어든다",
      "에러가 나도 이전 데이터를 자동으로 보여 준다",
      "switch 없이도 모든 상태를 그릴 수 있다",
      "로딩이면서 에러 같은 말이 안 되는 조합이 타입에서 사라진다",
    ],
    answer: 3,
    explanation:
      "플래그 세 개는 조합이 여덟 개인데 말이 되는 것은 넷뿐이다. 판별 유니온으로 바꾸면 그 넷만 타입으로 존재하고, error 갈래에만 error 값이 있다. never 검사를 두면 갈래를 하나 더했을 때 빠뜨린 곳이 컴파일 에러로 드러난다.",
    anchor: "갈-수-있는-길만-그려-둔다",
  },
  {
    id: "pattern-state-5",
    post: "pattern-state",
    question: "서버 두 대가 같은 paid 주문을 동시에 읽어 하나는 배송, 하나는 취소를 처리했다. 둘 다 성공해 환불도 나가고 상품도 나갔다. 가장 알맞은 해결은?",
    choices: [
      "상태 객체를 싱글턴으로 만들어 서버끼리 공유한다",
      "상태 클래스에 전이 검사를 한 번 더 넣는다",
      "취소 요청을 배송 요청보다 늦게 처리하도록 큐 순서를 바꾼다",
      "WHERE status = 'paid' 같은 조건부 UPDATE로 DB에서 한쪽만 이기게 하고, 외부 호출은 그 뒤에 한다",
    ],
    answer: 3,
    explanation:
      "메모리의 상태 객체는 읽은 시점 기준으로 규칙에 맞는지만 판단하므로 두 요청 모두 정당한 전이로 본다. 읽은 뒤 바뀌었는지는 DB가 판단해야 해서, 기대하는 상태를 WHERE에 넣고 바뀐 행이 0이면 실패로 처리한다. 상태 객체를 공유해도 각 서버의 메모리 밖 경쟁은 막지 못한다.",
    anchor: "메모리-밖에서-상태가-바뀔-때",
  },
  {
    id: "pattern-state-6",
    post: "pattern-state",
    question: "XState v5에서 지금 상태의 on에 적지 않은 이벤트를 보내면 어떻게 되나?",
    choices: [
      "에러를 던진다",
      "초기 상태로 돌아간다",
      "에러 없이 무시되고 상태가 그대로다",
      "가장 가까운 끝 상태로 간다",
    ],
    answer: 2,
    explanation:
      "XState는 처리할 전이가 없는 이벤트를 조용히 무시하고 상태를 바꾸지 않는다. 직접 짠 전이표처럼 에러로 막고 싶다면 snapshot.can(event)로 먼저 물어보고 처리한다. 가드에 걸린 이벤트도 마찬가지로 상태가 그대로다.",
    anchor: "xstate로-옮기면",
  },
];
