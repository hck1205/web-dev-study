import type { QuizQuestion } from "../types";

export const KAFKA_BASICS: QuizQuestion[] = [
  {
    id: "kafka-basics-1",
    post: "kafka-basics",
    question: "파티션 3개인 토픽의 컨슈머를 3대에서 6대로 늘렸는데 랙이 줄지 않는다. 가장 먼저 의심할 것은?",
    choices: [
      "브로커의 디스크가 느리다",
      "같은 그룹에서 파티션 하나는 컨슈머 한 명만 맡아서 3대는 놀고 있다",
      "acks=all 때문에 쓰기가 느려졌다",
      "자동 커밋 간격이 너무 길다",
    ],
    answer: 1,
    explanation:
      "소비자 그룹 안에서 병렬성의 상한은 파티션 수다. 늘린 3대는 받을 파티션이 없어 아무 메시지도 받지 않는다. 파티션을 늘리거나 컨슈머 한 대의 처리량을 높여야 한다.",
    anchor: "토픽은-파티션-여러-개로-된-로그다",
  },
  {
    id: "kafka-basics-2",
    post: "kafka-basics",
    question: "주문 ID를 키로 쓰던 토픽의 파티션을 3개에서 4개로 늘렸다. 어떤 문제가 생길 수 있나?",
    choices: [
      "기존 메시지가 새 파티션으로 옮겨지며 오프셋이 바뀐다",
      "파티션을 늘리면 복제 계수가 1로 내려간다",
      "소비자 그룹의 커밋된 오프셋이 모두 0으로 초기화된다",
      "같은 주문의 새 이벤트가 다른 파티션으로 가서, 기존 파티션에 밀린 이벤트보다 먼저 처리될 수 있다",
    ],
    answer: 3,
    explanation:
      "기본 파티셔너는 해시를 파티션 수로 나눈 나머지를 쓰므로 파티션 수가 바뀌면 같은 키의 목적지가 바뀐다. 실제로 order-1042의 새 이벤트는 파티션 0이 아니라 2로 갔다. 기존 메시지는 옮겨지지 않는다.",
    anchor: "키가-파티션을-정하고-순서는-파티션-안에서만-지킨다",
  },
  {
    id: "kafka-basics-3",
    post: "kafka-basics",
    question: "컨슈머가 처리 후 커밋하는 방식인데 103번을 처리하고 커밋 전에 죽었다. 새 컨슈머는 어떻게 되나?",
    choices: [
      "104부터 받으므로 아무 일도 없다",
      "103을 건너뛰어 그 메시지를 잃는다",
      "103부터 다시 받아 103이 두 번 처리된다",
      "브로커가 103을 DLQ로 보낸다",
    ],
    answer: 2,
    explanation:
      "커밋된 위치가 103이니 새 컨슈머는 103부터 읽는다. 처리 후 커밋은 잃지 않는 대신 중복이 생기는 최소 한 번 방식이라 처리 쪽을 멱등하게 만든다. 커밋을 먼저 하면 반대로 잃을 수 있다.",
    anchor: "오프셋은-컨슈머가-남기는-책갈피다",
  },
  {
    id: "kafka-basics-4",
    post: "kafka-basics",
    question: "한 번에 500개를 받아 개당 1초 걸리는 외부 API를 부르는 컨슈머들이 번갈아 그룹에서 빠지고 리밸런싱이 반복된다. 원인과 대처로 맞는 것은?",
    choices: [
      "poll 간격이 max.poll.interval.ms(기본 5분)를 넘어 쫓겨난다. max.poll.records를 줄이거나 처리를 빠르게 한다",
      "session.timeout.ms가 너무 길다. 1초로 줄인다",
      "파티션이 너무 많다. 1개로 줄인다",
      "acks가 0이라서 그렇다. all로 바꾼다",
    ],
    answer: 0,
    explanation:
      "500개를 처리하는 데 500초가 걸려 다음 poll이 5분을 넘기면 컨슈머는 그룹에서 빠지고, 커밋하지 못한 메시지는 다른 컨슈머가 다시 처리하며 같은 일을 반복한다. 하트비트는 따로 돌기 때문에 세션 타임아웃과는 다른 원인이다.",
    anchor: "소비자-그룹과-리밸런싱",
  },
  {
    id: "kafka-basics-5",
    post: "kafka-basics",
    question: "복제본 3, min.insync.replicas=2인 토픽에서 브로커 하나가 죽었다. acks=all 프로듀서는 어떻게 되나?",
    choices: [
      "NOT_ENOUGH_REPLICAS로 모든 쓰기가 거절된다",
      "Isr가 둘이라 최소 2 조건을 만족해 쓰기가 계속 성공한다",
      "acks=1로 자동으로 바뀐다",
      "죽은 브로커가 돌아올 때까지 프로듀서가 멈춘다",
    ],
    answer: 1,
    explanation:
      "Isr가 1, 2로 줄어도 min.insync.replicas 2 이상이라 쓰기가 된다. 거절은 Isr가 min보다 작아질 때 일어나는데, 실험에서 min을 3으로 둔 payments 토픽이 NOT_ENOUGH_REPLICAS를 받았다.",
    anchor: "리더-하나에-팔로워-둘-그리고-acks",
  },
  {
    id: "kafka-basics-6",
    post: "kafka-basics",
    question: "compact 토픽에 u1 값을 세 번 넣고 u2는 마지막에 null 값을 넣었다. 컴팩션 뒤에 남는 것은?",
    choices: [
      "u1의 세 값과 u2의 두 값이 모두 남는다",
      "u1의 첫 값과 u2의 첫 값이 남는다",
      "u1의 마지막 값만 남고, u2는 툼스톤이 정리된 뒤 사라진다",
      "모든 메시지가 지워지고 오프셋이 0부터 다시 시작한다",
    ],
    answer: 2,
    explanation:
      "컴팩션은 키마다 마지막 값만 남기고, null 값은 그 키를 지우라는 툼스톤이다. 툼스톤도 delete.retention.ms가 지나면 정리된다. 남은 메시지의 오프셋 번호는 그대로이고 빈자리만 생긴다.",
    anchor: "얼마나-오래-둘까-보관-기간과-컴팩션",
  },
  {
    id: "kafka-basics-7",
    post: "kafka-basics",
    question: "랙 알람이 왔는데 파티션 하나의 랙만 오르고 나머지는 0이다. 가장 그럴듯한 원인은?",
    choices: [
      "전체 처리량이 부족하다",
      "보관 기간이 너무 짧다",
      "그 파티션을 맡은 컨슈머가 멈췄거나 특정 키가 그 파티션에 몰렸다",
      "브로커가 모두 내려갔다",
    ],
    answer: 2,
    explanation:
      "모든 파티션이 함께 오르면 처리량 부족이고, 하나만 오르면 그 파티션을 맡은 컨슈머나 키 쏠림 문제다. describe 출력에서 그 파티션의 CONSUMER-ID와 그 컨슈머의 로그를 먼저 본다.",
    anchor: "랙은-남은-일의-양이다",
  },
];
