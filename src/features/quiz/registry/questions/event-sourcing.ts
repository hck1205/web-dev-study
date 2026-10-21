import type { QuizQuestion } from "../types";

export const EVENT_SOURCING: QuizQuestion[] = [
  {
    id: "event-sourcing-1",
    post: "event-sourcing",
    question: "evolve(state, event) 안에서 \"출금 한도 100만 원\" 같은 업무 규칙을 검사하지 않는 이유는?",
    choices: [
      "evolve는 성능이 중요해서 검사를 생략한다",
      "사건은 이미 일어난 일이라, 오늘 규칙으로 과거 사건을 거절하면 상태를 복원할 수 없어서",
      "규칙 검사는 DB의 CHECK 제약이 대신하기 때문에",
      "evolve는 스냅숏을 만들 때만 쓰이기 때문에",
    ],
    answer: 1,
    explanation:
      "evolve는 과거 사건을 다시 접을 때도 쓰인다. 규칙이 바뀐 뒤 옛 사건을 거절하면 재생이 깨지니, 규칙은 새 사건을 만드는 decide에서만 건다.",
    anchor: "결정하는-함수와-접는-함수",
  },
  {
    id: "event-sourcing-2",
    post: "event-sourcing",
    question: "두 출금 요청이 모두 버전 4를 읽고 5번 자리에 쓰려 했다. 진 쪽 B는 어떻게 해야 하나?",
    choices: [
      "같은 사건을 버전 6으로 그대로 다시 저장한다",
      "A의 사건을 지우고 자기 사건을 쓴다",
      "스트림을 다시 읽어 상태를 접고, decide부터 다시 해서 바뀐 잔액으로 판단한다",
      "행 잠금을 걸고 버전 5를 덮어쓴다",
    ],
    answer: 2,
    explanation:
      "A의 출금으로 잔액이 바뀌었으니 B의 판단은 더 이상 맞지 않는다. 예제에서도 B가 다시 읽자 잔액이 11000이라 decide가 30000원 출금을 거절했다.",
    anchor: "같은-버전을-두-요청이-노릴-때",
  },
  {
    id: "event-sourcing-3",
    post: "event-sourcing",
    question: "다음 중 이벤트 소싱의 사건 이름으로 가장 나쁜 것은?",
    choices: [
      "AccountUpdated { balance: 41000 }",
      "MoneyWithdrawn { amount: 12000 }",
      "FeeCharged { amount: 500 }",
      "ChargebackApplied { amount: 30000 }",
    ],
    answer: 0,
    explanation:
      "AccountUpdated는 결과만 있고 무엇이 왜 바뀌었는지가 없어서 상태를 JSON으로 복사해 둔 것과 같다. 같은 잔액 감소라도 출금, 수수료, 차지백을 다른 사건으로 남겨야 나중에 새 질문에 답할 수 있다.",
    anchor: "사건에는-업무의-말로-이름을-붙인다",
  },
  {
    id: "event-sourcing-4",
    post: "event-sourcing",
    question: "스냅숏에 대한 설명으로 맞는 것은?",
    choices: [
      "스냅숏을 만들면 그 앞의 사건은 지워도 된다",
      "스냅숏이 원본이고 사건은 백업이다",
      "스냅숏은 한 번 만들면 상태 모양이 바뀌어도 그대로 쓴다",
      "스냅숏은 캐시라서 언제든 지우고 사건에서 다시 만들 수 있어야 하고, 상태 모양이 바뀌면 버린다",
    ],
    answer: 3,
    explanation:
      "스냅숏은 긴 스트림을 빨리 읽으려고 접은 상태를 저장해 둔 캐시다. 원본은 사건이니, evolve가 바뀌어 상태 모양이 달라지면 옛 스냅숏을 버리고 다시 만든다.",
    anchor: "10만-건을-매번-접을-수는-없다",
  },
  {
    id: "event-sourcing-5",
    post: "event-sourcing",
    question: "입금 사건 v1 { amount }을 v3 { money: { value, currency }, channel }로 올리는 업캐스터에서 channel은 무엇으로 채우나?",
    choices: [
      "\"unknown\". 당시 기록이 없는 정보는 지어내지 않는다",
      "가장 흔한 경로인 \"app\"",
      "현재 사용자의 마지막 접속 경로",
      "값을 채울 수 없으니 그 사건을 건너뛴다",
    ],
    answer: 0,
    explanation:
      "업캐스팅은 저장된 사실을 새 형식으로 옮기는 일이지 새 사실을 만드는 일이 아니다. 통화처럼 그 시절의 사실로 확정되는 값(KRW)은 채우고, 알 수 없는 값은 모른다고 남긴다.",
    anchor: "3년-전-형식의-사건을-오늘-코드로-읽기",
  },
  {
    id: "event-sourcing-6",
    post: "event-sourcing",
    question: "크립토 셰딩으로 사용자 키를 지운 뒤에도 따로 처리해야 하는 것은?",
    choices: [
      "사건 테이블의 암호문",
      "이미 평문으로 들어간 읽기 모델, 검색 색인, 로그, 백업의 사본",
      "금액처럼 개인정보가 아닌 필드",
      "스트림의 버전 번호",
    ],
    answer: 1,
    explanation:
      "키를 지우면 사건 안의 암호문은 아무도 풀 수 없지만, 이미 복호화되어 다른 곳에 저장된 사본은 그대로다. 그래서 그 사본들을 따로 지우거나, 개인정보를 처음부터 사건 밖에 두고 ID만 넣는 방법을 함께 쓴다.",
    anchor: "지울-수-없는-기록에서-개인정보를-지우는-법",
  },
  {
    id: "event-sourcing-7",
    post: "event-sourcing",
    question: "버그로 수수료가 두 번 빠졌다. 이벤트 소싱에서 알맞은 대응은?",
    choices: [
      "두 번째 FeeCharged 사건을 DELETE한다",
      "FeeCharged의 amount를 0으로 UPDATE한다",
      "스냅숏의 잔액만 고친다",
      "FeeRefunded 같은 바로잡는 사건을 새로 쓴다",
    ],
    answer: 3,
    explanation:
      "이미 그 사건을 읽은 읽기 모델, 다른 서비스, 스냅숏은 사건을 고쳐도 모른다. 반대 사건을 추가하면 이력이 남고 모든 구독자가 같은 방식으로 따라온다.",
    anchor: "잘못-쌓인-사건은-고치지-않고-바로잡는-사건을-쓴다",
  },
];
