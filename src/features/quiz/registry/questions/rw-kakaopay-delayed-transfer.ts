import type { QuizQuestion } from "../types";

export const RW_KAKAOPAY_DELAYED_TRANSFER: QuizQuestion[] = [
  {
    id: "rw-kakaopay-delayed-transfer-1",
    post: "rw-kakaopay-delayed-transfer",
    question: "카카오페이가 지연이체를 Kafka로 옮긴 뒤에도 5분마다 도는 스케줄러를 남겨 둔 이유는?",
    choices: [
      "Kafka 컨슈머가 5분마다만 메시지를 읽을 수 있어서",
      "Kafka에는 정해진 시각에 메시지를 꺼내 주는 지연 큐 기능이 기본으로 없어, 실행 시각은 DB와 스케줄러가 정해야 해서",
      "스케줄러가 송금 실행까지 직접 해야 해서",
      "은행 연동 서버가 Kafka를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "RabbitMQ 구조에서는 지연 큐가 시각을 들고 있었지만, Kafka로 옮기면서 실행 예정 시각과 상태는 DB에 두고 스케줄러가 때가 된 건만 읽어 produce하게 했다. 송금 실행은 스케줄러가 아니라 컨슈머가 맡는다.",
    anchor: "스케줄러-하나-스케줄러-여럿-그리고-kafka",
  },
  {
    id: "rw-kakaopay-delayed-transfer-2",
    post: "rw-kakaopay-delayed-transfer",
    question: "중복 송금을 막으려고 유저락을 걸었더니 생긴 새 문제와 그 해결로 맞는 것은?",
    choices: [
      "Redis 부하가 늘어 / 락을 DB 행 잠금으로 바꿨다",
      "락이 풀리지 않아 / 락 만료 시간을 줄였다",
      "같은 사용자의 여러 송금이 다른 컨슈머에서 동시에 처리되며 한 건만 성공 / 레코드 키에 userId를 넣어 같은 파티션으로 보냈다",
      "송금 순서가 뒤집혀 / 파티션을 1개로 줄였다",
    ],
    answer: 2,
    explanation:
      "한 사용자가 지연이체를 여러 건 걸 수 있어, 서로 다른 컨슈머가 동시에 처리하면 락을 못 잡은 건이 실패한다. 키가 같으면 같은 파티션, 즉 같은 컨슈머로 가므로 차례대로 실행돼 락을 다투지 않는다. 파티션 수는 한 번 늘리면 줄일 수 없다는 점도 자료에 나온다.",
    anchor: "같은-송금이-두-번-나가는-세-갈래-길",
  },
  {
    id: "rw-kakaopay-delayed-transfer-3",
    post: "rw-kakaopay-delayed-transfer",
    question: "스케줄러가 건을 읽을 때 상태를 PREPARATION으로 바꾸는 장치가 막는 것은?",
    choices: [
      "다음 회차 스케줄러가 같은 건을 다시 읽어 토픽에 두 번 넣는 것",
      "두 컨슈머가 같은 메시지를 동시에 실행하는 것",
      "같은 사용자의 송금 순서가 바뀌는 것",
      "은행 점검 시간에 송금이 실행되는 것",
    ],
    answer: 0,
    explanation:
      "읽은 건을 곧바로 다른 상태로 바꾸면 다음 회차의 DELAY 조회에 걸리지 않아 애초에 토픽에 중복이 쌓이지 않는다. 두 컨슈머의 동시 실행은 유저락이, 순서는 파티션 키가 맡는다.",
    anchor: "같은-송금이-두-번-나가는-세-갈래-길",
  },
  {
    id: "rw-kakaopay-delayed-transfer-4",
    post: "rw-kakaopay-delayed-transfer",
    question: "파티션이 3개인 토픽에서 컨슈머를 5대로 늘리면 어떻게 되나?",
    choices: [
      "처리량이 5/3배로 늘어난다",
      "파티션이 자동으로 5개로 늘어난다",
      "같은 메시지를 여러 컨슈머가 나눠 처리해 더 빨라진다",
      "한 그룹 안에서 한 파티션은 한 컨슈머만 읽으므로 2대는 놀게 된다",
    ],
    answer: 3,
    explanation:
      "컨슈머 그룹 안에서 파티션 하나는 컨슈머 하나에만 배정된다. 그래서 카카오페이는 컨슈머를 파티션 수인 3대로 맞추고, 대신 한 번에 20건씩 가져와 10개 스레드로 나눠 처리하는 쪽으로 속도를 올렸다.",
    anchor: "컨슈머를-늘려도-빨라지지-않는-이유",
  },
  {
    id: "rw-kakaopay-delayed-transfer-5",
    post: "rw-kakaopay-delayed-transfer",
    question: "새 지연이체 서버의 첫 릴리스에서 실행이 예상보다 훨씬 오래 걸렸을 때 먼저 한 일은?",
    choices: [
      "파티션을 늘려 그날 밤 처리를 마쳤다",
      "Zuul 프록시에서 요청을 기존 지연이체 서버로 돌렸다",
      "이미 실행된 송금을 취소했다",
      "스케줄러 주기를 1분으로 줄였다",
    ],
    answer: 1,
    explanation:
      "지연이체는 매일 밤 일어나므로 원인을 찾기 전에 롤백부터 했다. 기존 서버를 지우지 않고 프록시 뒤에 함께 두었기 때문에 길만 바꾸면 됐다. 실행된 송금은 되돌릴 수 없다.",
    anchor: "예상-20분-실제-70분",
  },
  {
    id: "rw-kakaopay-delayed-transfer-6",
    post: "rw-kakaopay-delayed-transfer",
    question: "카카오페이 결제 쪽이 AOP 어노테이션 분산락을 함수형 락으로 바꾼 이유가 아닌 것은?",
    choices: [
      "같은 클래스의 내부 함수 호출에는 프록시가 끼지 않아 락이 빠질 수 있어서",
      "메서드 전체를 잠가 락이 필요 없는 구간까지 락을 쥐어서",
      "Redisson이 AOP와 함께 쓸 수 없어서",
      "첫 번째 파라미터를 키로 읽는 규칙이라 파라미터 순서가 바뀌면 엉뚱한 값이 키가 되어서",
    ],
    answer: 2,
    explanation:
      "발표 자료의 AOP 방식도 Aspect 안에서 Redisson RLock을 썼다. 문제는 적용 여부 확인, 넓은 잠금 범위, 키 파라미터 규칙, 리팩터링 위험이었고, 함수형 락은 잠글 블록만 넘겨 이를 풀었다.",
    anchor: "결제-쪽에서는-락을-어디에-얼마나-좁게",
  },
  {
    id: "rw-kakaopay-delayed-transfer-7",
    post: "rw-kakaopay-delayed-transfer",
    question: "결제 요청이 타임아웃으로 끝났을 때 카카오페이 페이상품권 글이 권하는 처리는?",
    choices: [
      "실패로 저장하고 사용자에게 다시 결제하게 한다",
      "성공으로 저장하고 나중에 대사한다",
      "알 수 없음 상태로 두고, 같은 고유 키로 재시도하거나 확인 후 재시도·보상 트랜잭션 같은 후처리를 붙인다",
      "결제 서버를 재시작한다",
    ],
    answer: 2,
    explanation:
      "타임아웃은 요청이 안 갔는지, 가서 성공했는지, 실패했는지 모르는 상태라 실패로 간주하면 돈은 빠졌는데 주문은 실패가 될 수 있다. 재시도가 안전하려면 결제 API가 같은 고유 키의 요청에 같은 결과를 주는 멱등성을 가져야 한다.",
    anchor: "응답이-없을-때는-성공도-실패도-아니다",
  },
];
