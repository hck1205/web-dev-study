import type { QuizQuestion } from "../types";

export const KAFKA_VS_RABBITMQ_REPLAY: QuizQuestion[] = [
  {
    id: "kafka-vs-rabbitmq-replay-1",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "같은 주문 8건을 Kafka 토픽과 RabbitMQ 클래식 큐에 넣고, 양쪽 컨슈머가 8건을 모두 처리했다. 처리 직후 각 브로커에 남아 있는 주문은?",
    choices: [
      "Kafka 0건, RabbitMQ 8건",
      "Kafka 8건, RabbitMQ 0건",
      "둘 다 0건",
      "둘 다 8건",
    ],
    answer: 1,
    explanation:
      "Kafka는 읽어도 로그를 지우지 않고 그룹의 오프셋만 8로 옮긴다. RabbitMQ 클래식 큐는 ack를 받는 순간 메시지를 지우므로 basic.get이 false를 돌려준다.",
    anchor: "같은-주문-8건을-양쪽에-보냈다",
  },
  {
    id: "kafka-vs-rabbitmq-replay-2",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "points 그룹만 버그 배포 시각으로 되감고 싶다. 메일 그룹(email)은 어떻게 되나?",
    choices: [
      "토픽의 오프셋이 함께 되돌아가서 메일도 다시 나간다",
      "메일 그룹도 같은 시각으로 자동으로 맞춰진다",
      "오프셋은 그룹마다 따로라서 email 그룹은 그대로다",
      "되감는 동안 email 그룹은 리밸런싱으로 멈춘다",
    ],
    answer: 2,
    explanation:
      "책갈피(커밋 오프셋)는 그룹·토픽·파티션마다 하나씩 따로 저장된다. --group points로 옮기면 email 그룹의 CURRENT-OFFSET은 8 그대로이고, 메일이 두 번 나가지 않는다.",
    anchor: "버그-난-컨슈머를-배포-시각으로-되감기",
  },
  {
    id: "kafka-vs-rabbitmq-replay-3",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "오프셋 순서로 타임스탬프가 +0초, +30초, +10초, +40초인 레코드가 있다. +20초로 --to-datetime 되감기를 하면 다시 읽는 레코드는?",
    choices: [
      "+30초, +10초, +40초 세 개",
      "+30초, +40초 두 개",
      "+40초 하나",
      "네 개 모두",
    ],
    answer: 0,
    explanation:
      "시각 되감기는 타임스탬프가 그 시각 이상인 첫 오프셋을 찾고 거기서부터 끝까지 읽는다. 그래서 그 뒤에 놓인 +10초짜리도 함께 읽힌다. 정확한 기간만 원하면 컨슈머가 메시지 시각을 보고 걸러야 한다.",
    anchor: "시각으로-찾은-위치가-생각과-다를-때",
  },
  {
    id: "kafka-vs-rabbitmq-replay-4",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "새 analytics 그룹을 기본 설정으로 한 번 띄웠다가 내렸다. 과거 주문이 필요해 auto.offset.reset=earliest로 바꿔 다시 띄웠는데 여전히 과거를 읽지 않는다. 왜인가?",
    choices: [
      "earliest는 보관 기간이 끝난 메시지만 읽는다",
      "earliest는 컨슈머를 재시작해야만 적용된다",
      "auto.offset.reset은 브로커 설정이라 컨슈머에서 바꿀 수 없다",
      "첫 실행 때 끝 위치가 커밋돼서, 책갈피가 있는 그룹에는 auto.offset.reset이 쓰이지 않는다",
    ],
    answer: 3,
    explanation:
      "기본값 latest로 뜬 그룹은 아무것도 읽지 않고도 끝 오프셋을 커밋했다. auto.offset.reset은 책갈피가 없을 때만 쓰이므로, 컨슈머를 내리고 --reset-offsets --to-earliest로 옮겨야 한다.",
    anchor: "나중에-붙은-컨슈머에게-과거를-주는-법",
  },
  {
    id: "kafka-vs-rabbitmq-replay-5",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "2건만 처리하고 멈췄던 그룹을 다시 띄웠더니 에러 없이 LAG 0이 됐다. 그 사이 보관 기간이 지나 세그먼트가 모두 지워졌다면 무슨 일이 일어난 것인가?",
    choices: [
      "브로커가 지워진 메시지를 복제본에서 되살려 보냈다",
      "커밋 오프셋이 범위 밖이 되어 남은 시작 위치로 건너뛰었고, 나머지 메시지는 이 그룹에 오지 않았다",
      "컨슈머가 지워진 메시지를 처리한 것으로 간주하고 DLQ로 보냈다",
      "그룹이 삭제돼서 새 그룹으로 처음부터 다시 읽었다",
    ],
    answer: 1,
    explanation:
      "로그 시작 오프셋이 8로 올라가 커밋 2는 범위 밖이 됐고, 컨슈머는 auto.offset.reset에 따라 8로 위치를 다시 잡았다. 그래서 랙 알람 기준은 보관 기간보다 훨씬 짧게 잡는다.",
    anchor: "보관-기간이-끝나면-되감을-곳도-없다",
  },
  {
    id: "kafka-vs-rabbitmq-replay-6",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "RabbitMQ 클래식 큐를 쓰는데, 버그 난 컨슈머가 성공으로 ack한 메시지를 다시 처리해야 한다. 가장 맞는 방법은?",
    choices: [
      "브로커 밖에 남겨 둔 원본(아웃박스, 주문 DB)에서 그 기간을 골라 고칠 큐에만 다시 발행한다",
      "데드 레터 큐에서 꺼내 원래 큐로 되돌린다",
      "큐를 purge하면 ack된 메시지가 다시 ready로 돌아온다",
      "같은 익스체인지로 다시 발행해 모든 큐가 받게 한다",
    ],
    answer: 0,
    explanation:
      "ack된 메시지는 브로커에 없고, DLQ에는 nack나 TTL 만료처럼 실패로 끝난 메시지만 간다. 익스체인지로 다시 보내면 메일 큐에도 들어가 메일이 두 번 나가니 고칠 큐 하나로만 보낸다.",
    anchor: "rabbitmq로-다시-처리해야-한다면",
  },
  {
    id: "kafka-vs-rabbitmq-replay-7",
    post: "kafka-vs-rabbitmq-replay",
    question:
      "RabbitMQ 스트림 큐를 AMQP 0.9.1 클라이언트로 읽을 때 알아 둘 점으로 맞는 것은?",
    choices: [
      "ack하면 스트림에서도 메시지가 지워진다",
      "브로커가 그룹별 오프셋을 자동으로 저장해 준다",
      "prefetch를 정해야 하고, 다음에 읽을 위치는 애플리케이션이 직접 기억해 x-stream-offset으로 넘긴다",
      "시작 위치는 first와 last 두 가지만 고를 수 있다",
    ],
    answer: 2,
    explanation:
      "스트림은 읽어도 지우지 않고, x-stream-offset으로 first, last, next, 번호, 시각을 고른다. 브로커에 오프셋을 저장하는 기능은 전용 스트림 프로토콜 쪽에 있어서, AMQP 0.9.1로 읽을 때는 위치를 앱이 기억해야 한다.",
    anchor: "rabbitmq로-다시-처리해야-한다면",
  },
];
