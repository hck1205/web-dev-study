import type { QuizQuestion } from "../types";

export const MESSAGE_QUEUE_BASICS: QuizQuestion[] = [
  {
    id: "message-queue-basics-1",
    post: "message-queue-basics",
    question: "Redis 리스트에서 BRPOP으로 꺼내 처리하는 워커를 배포할 때마다 메시지 몇 개가 사라진다. 가장 그럴듯한 원인은?",
    choices: [
      "Redis가 리스트를 디스크에 저장하지 않아서",
      "꺼내는 순간 메시지가 지워져서, 처리 중이던 워커가 죽으면 어디에도 남지 않아서",
      "LPUSH와 BRPOP의 방향이 반대라서 순서가 섞여서",
      "BRPOP의 대기 시간이 너무 짧아서",
    ],
    answer: 1,
    explanation:
      "BRPOP은 꺼내면서 바로 지운다. 처리 중인 메시지는 워커 메모리에만 있으니 배포로 워커가 죽으면 같이 사라진다. BLMOVE로 처리 중 목록에 옮겨 두고 끝난 뒤 지우거나, 확인 응답이 있는 도구를 쓴다.",
    anchor: "꺼낸-순간-사라지는-큐",
  },
  {
    id: "message-queue-basics-2",
    post: "message-queue-basics",
    question: "가시성 타임아웃이 3초인데 처리에 4.5초가 걸리는 작업이 있다. 어떤 일이 생기나?",
    choices: [
      "3초가 지나면 큐가 처리 중인 컨슈머를 강제로 멈춘다",
      "메시지가 데드 레터 큐로 바로 간다",
      "처리 중인 메시지가 다시 보여서 다른 컨슈머도 받아 같은 일을 두 번 한다",
      "처리가 끝난 뒤의 ack가 거절되고 메시지는 영원히 남는다",
    ],
    answer: 2,
    explanation:
      "큐는 컨슈머가 죽었는지 일하는 중인지 모르고 시간만 본다. 타임아웃이 지나면 다시 보이게 하니 다른 컨슈머가 받아 중복 처리가 생긴다. 처리하는 동안 타임아웃을 연장하는 하트비트와 멱등한 컨슈머로 막는다.",
    anchor: "같은-메시지를-두-번-받는-건-정상이다",
  },
  {
    id: "message-queue-basics-3",
    post: "message-queue-basics",
    question: "메일 서버가 죽어서 처리가 실패했다. 컨슈머가 곧바로 nack(가시성 타임아웃 0)로 되돌리면 어떻게 되기 쉬운가?",
    choices: [
      "메시지가 바로 다시 나와 계속 실패하며 컨슈머 CPU만 태운다",
      "큐가 알아서 지수 백오프를 적용한다",
      "메시지가 큐 맨 뒤로 가서 순서만 바뀐다",
      "다른 메시지가 모두 멈춘다",
    ],
    answer: 0,
    explanation:
      "원인이 그대로인 상태에서 바로 되돌리면 같은 메시지가 즉시 다시 나와 또 실패한다. 일시적인 실패는 시도 횟수에 따라 지연을 늘려 다시 보이게 하고, 끝까지 실패하면 데드 레터 큐로 뺀다.",
    anchor: "실패를-알리는-nack",
  },
  {
    id: "message-queue-basics-4",
    post: "message-queue-basics",
    question: "주문 이벤트(생성, 결제, 배송)를 워커 여러 대가 같은 큐에서 처리한다. 한 주문 안의 순서를 지키면서 처리량도 유지하는 방법으로 가장 알맞은 것은?",
    choices: [
      "워커를 한 대로 줄인다",
      "가시성 타임아웃을 길게 잡는다",
      "프로듀서가 이벤트 사이에 1초씩 쉰다",
      "주문 ID를 그룹 키(SQS FIFO의 MessageGroupId, Kafka의 파티션 키)로 써서 같은 주문만 차례로 처리한다",
    ],
    answer: 3,
    explanation:
      "큐가 내주는 순서와 처리가 끝나는 순서는 다르다. 같은 키끼리만 한 번에 하나씩 처리하게 하면 주문 사이는 병렬로, 한 주문 안에서는 차례로 처리된다. 워커를 한 대로 줄이면 순서는 지켜지지만 처리량을 잃는다.",
    anchor: "워커를-늘리면-순서가-깨진다",
  },
  {
    id: "message-queue-basics-5",
    post: "message-queue-basics",
    question: "SQS 큐에서 ApproximateNumberOfMessagesNotVisible이 계속 크지만 워커들은 대부분 놀고 있다. 무엇을 의심하나?",
    choices: [
      "프로듀서가 메시지를 너무 많이 넣는다",
      "받아 간 뒤 ack도 nack도 하지 않고 버리는 코드가 있어 타임아웃까지 묶여 있다",
      "롱 폴링을 켜서 응답이 늦다",
      "FIFO 큐라서 원래 그렇다",
    ],
    answer: 1,
    explanation:
      "NotVisible은 컨슈머가 받아 가서 처리 중인 메시지 수다. 워커가 놀고 있는데 이 값이 크면 받아 놓고 처리도 ack도 안 한 메시지가 가시성 타임아웃이 끝날 때까지 묶여 있다는 뜻이다.",
    anchor: "큐-깊이-그래프를-읽는-법",
  },
  {
    id: "message-queue-basics-6",
    post: "message-queue-basics",
    question: "PostgreSQL 테이블 큐에서 처리 중 상태를 FOR UPDATE 잠금으로 처리 내내 들고 있지 않고 visible_at 열로 표시하는 이유는?",
    choices: [
      "SKIP LOCKED는 트랜잭션 안에서 쓸 수 없어서",
      "잠금은 커밋하면 자동으로 다른 워커에게 넘어가서",
      "메일을 보내는 동안 트랜잭션을 열어 두지 않으려고. 긴 트랜잭션은 커넥션을 묶고 VACUUM을 막는다",
      "visible_at이 있어야 기본 키 인덱스를 쓸 수 있어서",
    ],
    answer: 2,
    explanation:
      "잠금은 꺼내는 순간에만 쓰고 바로 커밋한다. 처리 중이라는 표시와 되찾을 시각은 visible_at이 맡으니 외부 호출 동안 트랜잭션을 열어 둘 필요가 없다. 워커가 죽으면 그 시각이 지난 뒤 다른 워커가 다시 가져간다.",
    anchor: "가시성-타임아웃-죽은-워커의-몫을-되찾는-시계",
  },
];
