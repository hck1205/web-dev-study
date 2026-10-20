import type { QuizQuestion } from "../types";

export const EVENT_DRIVEN_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "event-driven-architecture-1",
    post: "event-driven-architecture",
    question: "주문 서비스가 WelcomeEmailRequested를 발행하고 알림 서비스만 그것을 듣는다. 이 메시지를 어떻게 보는 게 맞나?",
    choices: [
      "과거형이 아니니 이름만 바꾸면 좋은 이벤트다",
      "구독자가 하나뿐이라 Event-Carried State Transfer로 바꿔야 한다",
      "이름만 이벤트이고 실제로는 알림 서비스에 할 일을 지시하는 명령이다",
      "이벤트 소싱으로 저장해야 하는 사건이다",
    ],
    answer: 2,
    explanation:
      "주문 서비스가 여전히 가입하면 메일을 보내야 한다는 알림 서비스의 규칙을 알고 있으니 의존 방향이 명령과 같다. 이벤트라면 UserSignedUp처럼 일어난 사실만 내고, 메일을 보낼지는 듣는 쪽이 정한다.",
    anchor: "명령은-부탁하고-이벤트는-알린다",
  },
  {
    id: "event-driven-architecture-2",
    post: "event-driven-architecture",
    question: "이벤트에 주문 ID만 담고 구독자가 주문 API를 다시 조회하게 했다. 결제 이벤트를 처리하는데 취소된 주문 데이터를 받는 일이 생겼다. 왜인가?",
    choices: [
      "브로커가 이벤트 순서를 바꿔 전달했기 때문이다",
      "다시 조회한 상태는 이벤트가 난 순간이 아니라 조회한 순간의 상태이기 때문이다",
      "주문 API가 캐시된 옛 데이터를 돌려줬기 때문이다",
      "이벤트 ID가 중복됐기 때문이다",
    ],
    answer: 1,
    explanation:
      "알림 방식에서 구독자가 받는 건 조회 시점의 최신 상태라서, 결제와 조회 사이에 취소가 끼면 결제됨을 처리하며 취소됨 데이터를 본다. 그 시점의 값이 중요하면 이벤트에 상태를 실어 보내는 쪽이 낫다.",
    anchor: "이벤트-하나에-무엇을-담을까",
  },
  {
    id: "event-driven-architecture-3",
    post: "event-driven-architecture",
    question: "이벤트 소싱 표에 PRIMARY KEY (stream_id, version)를 거는 가장 큰 이유는?",
    choices: [
      "같은 버전을 두 요청이 동시에 쓰는 것을 막아 낙관적 동시성 제어를 하려고",
      "사건을 버전 순으로 빨리 정렬하려고",
      "스냅숏을 자동으로 만들게 하려고",
      "오래된 사건을 자동으로 지우려고",
    ],
    answer: 0,
    explanation:
      "두 요청이 같은 버전을 읽고 다음 버전을 쓰려 하면 하나는 유일 제약 위반으로 실패한다. 진 쪽은 사건을 다시 읽고 조건을 확인한 뒤 다음 버전으로 다시 시도한다. 정렬에도 도움은 되지만 목적은 경쟁을 막는 것이다.",
    anchor: "상태-대신-사건을-저장하는-이벤트-소싱",
  },
  {
    id: "event-driven-architecture-4",
    post: "event-driven-architecture",
    question: "주문, 재고, 결제, 배송, 환불까지 단계가 늘고 실패하면 앞 단계를 되돌려야 한다. 사용자에게 진행 상황도 보여 줘야 한다. 무엇이 맞나?",
    choices: [
      "모든 서비스가 서로의 이벤트를 듣는 코레오그래피",
      "흐름을 한 곳에서 쥐는 오케스트레이션",
      "2단계 커밋으로 한 트랜잭션에 묶기",
      "이벤트 알림 방식으로 ID만 보내기",
    ],
    answer: 1,
    explanation:
      "순서와 보상이 있고 지금 어디까지 했는지 물어볼 곳이 필요하면 흐름과 타임아웃이 한 곳에 보이는 오케스트레이션이 낫다. 코레오그래피는 단계가 늘면 실패 경로가 구독 관계에 흩어져 전체를 아는 곳이 없어진다.",
    anchor: "흐름을-누가-쥐나",
  },
  {
    id: "event-driven-architecture-5",
    post: "event-driven-architecture",
    question: "릴레이가 아웃박스를 WHERE id > 마지막으로 보낸 id로 읽는다. 에러 없이 일부 이벤트가 영영 나가지 않는다. 원인은?",
    choices: [
      "bigserial이 가끔 같은 번호를 두 번 주기 때문이다",
      "릴레이가 SKIP LOCKED를 쓰지 않았기 때문이다",
      "번호는 INSERT할 때 정해지고 보이는 건 커밋할 때라서, 늦게 커밋된 작은 번호를 건너뛰기 때문이다",
      "롤백된 트랜잭션의 번호가 재사용되기 때문이다",
    ],
    answer: 2,
    explanation:
      "1번을 먼저 받은 트랜잭션이 늦게 커밋하면, 그 사이 릴레이는 2번까지 보내고 기준선을 2로 옮긴다. 이후 1번이 보여도 id > 2 조건에 걸리지 않는다. 시퀀스는 재사용되지 않고 빈 번호를 남길 뿐이다.",
    anchor: "아웃박스를-id-순서로-읽으면-이벤트가-빠진다",
  },
  {
    id: "event-driven-architecture-6",
    post: "event-driven-architecture",
    question: "CDC로 아웃박스를 내보내는데 디스크 사용량이 계속 오른다. pg_replication_slots에서 active가 f다. 무엇이 일어나고 있나?",
    choices: [
      "CDC가 멈춰서 슬롯이 확인받지 못한 WAL을 지우지 못하고 붙잡고 있다",
      "아웃박스 테이블에 VACUUM이 돌지 않았다",
      "pg_logical_emit_message가 테이블에 행을 쌓고 있다",
      "논리 디코딩이 롤백된 트랜잭션까지 저장하고 있다",
    ],
    answer: 0,
    explanation:
      "복제 슬롯은 읽는 쪽이 확인한 위치까지 WAL을 보존하므로 CDC가 멈추면 WAL이 계속 쌓인다. 쓰지 않는 슬롯은 지우고, PostgreSQL 13 이상이면 max_slot_wal_keep_size로 상한을 걸어 둔다.",
    anchor: "wal에서-바로-읽는-아웃박스",
  },
  {
    id: "event-driven-architecture-7",
    post: "event-driven-architecture",
    question: "같은 주문의 OrderShipped(v2)가 OrderPaid(v1)보다 먼저 도착할 수 있다. 받는 쪽에서 무엇으로 막나?",
    choices: [
      "이벤트의 time 필드로 늦게 온 것을 판단한다",
      "이벤트에 대상별 버전을 넣고, 이미 반영한 버전 이하의 이벤트는 버린다",
      "브로커의 전체 순서 보장 옵션을 켠다",
      "구독자를 하나만 둔다",
    ],
    answer: 1,
    explanation:
      "재시도나 DLQ 재처리 등으로 순서는 깨질 수 있으니 대상별 버전 번호로 옛 이벤트를 걸러 낸다. 발생 시각은 서버 시계가 어긋날 수 있어 순서 판단에 쓰기 어렵다.",
    anchor: "잠깐-어긋나는-데이터를-받아-내는-법",
  },
];
