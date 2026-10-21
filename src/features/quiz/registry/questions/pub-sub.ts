import type { QuizQuestion } from "../types";

export const PUB_SUB: QuizQuestion[] = [
  {
    id: "pub-sub-1",
    post: "pub-sub",
    question: "검색 색인 서비스와 캐시 무효화 서비스가 같은 큐를 읽게 했더니 가격 변경이 한쪽에만 반영된다. 왜 그런가?",
    choices: [
      "큐가 메시지를 순서대로 주지 않아서",
      "큐는 메시지 하나를 컨슈머 하나에게만 주므로 두 서비스가 메시지를 나눠 가져서",
      "가시성 타임아웃이 너무 짧아서",
      "두 서비스의 처리 속도가 달라서",
    ],
    answer: 1,
    explanation:
      "같은 큐를 읽는 순간 두 서비스는 경쟁하는 컨슈머가 된다. 둘 다 모든 메시지를 받아야 한다면 토픽으로 구독마다 사본을 만들고, 각 서비스 안의 인스턴스끼리만 나눠 받게 한다.",
    anchor: "한-명에게-주는-큐-모두에게-주는-토픽",
  },
  {
    id: "pub-sub-2",
    post: "pub-sub",
    question: "Redis PUBLISH가 1을 돌려줬는데 구독자는 둘이어야 한다. 무엇을 뜻하나?",
    choices: [
      "메시지가 큐에 하나 쌓였다",
      "한 구독자가 이미 메시지를 ack했다",
      "그 순간 구독 중이던 연결이 하나뿐이라 다른 구독자는 이 메시지를 영영 받지 못한다",
      "메시지가 Redis 디스크에 한 번 저장됐다",
    ],
    answer: 2,
    explanation:
      "PUBLISH의 반환값은 지금 메시지를 받은 구독자 수다. Redis PUB/SUB는 메시지를 저장하지 않으므로 끊겨 있던 구독자는 다시 붙어도 그 메시지를 받을 방법이 없다.",
    anchor: "redis-publish는-그-순간-듣던-사람에게만-간다",
  },
  {
    id: "pub-sub-3",
    post: "pub-sub",
    question: "Redis 로그에 'scheduled to be closed ASAP for overcoming of output buffer limits'가 flags=P인 연결에 찍혔다. 가장 알맞은 대응은?",
    choices: [
      "구독자가 받는 즉시 내부 큐로 넘겨 소켓을 계속 읽게 하거나, 놓치면 안 되는 이벤트는 Streams로 옮긴다",
      "maxmemory를 늘린다",
      "구독자 수를 늘려 부하를 나눈다",
      "PUBLISH를 MULTI로 묶는다",
    ],
    answer: 0,
    explanation:
      "구독자가 읽는 속도보다 발행이 빨라 출력 버퍼가 pubsub 한도(기본 32MB, 또는 8MB를 60초)를 넘어 끊긴 것이다. 끊긴 순간의 버퍼 내용은 사라진다. 한도를 키우는 건 Redis 메모리를 더 내줄 뿐이다.",
    anchor: "느린-구독자-하나는-끊긴다",
  },
  {
    id: "pub-sub-4",
    post: "pub-sub",
    question: "Redis Streams에서 XINFO GROUPS의 lag는 0인데 처리가 밀렸다는 신고가 온다. 함께 봐야 하는 값은?",
    choices: [
      "entries-read",
      "consumers",
      "last-delivered-id",
      "pending. 내줬지만 ack를 못 받은 항목이 쌓여 있을 수 있다",
    ],
    answer: 3,
    explanation:
      "lag는 아직 아무에게도 안 준 수일 뿐이다. 소비자가 받아 놓고 죽었거나 ack를 빼먹으면 pending이 늘고, 그 항목은 XCLAIM이나 XAUTOCLAIM으로 누군가 가져오기 전까지 처리되지 않는다.",
    anchor: "그룹이-얼마나-밀렸는지-보기",
  },
  {
    id: "pub-sub-5",
    post: "pub-sub",
    question: "스트림에 MAXLEN으로 길이 상한을 걸었다. 오래 멈췄던 그룹이 다시 읽기 시작하면 어떻게 되나?",
    choices: [
      "자르기가 그 그룹의 진도를 기다려 줘서 잃는 것이 없다",
      "그 그룹이 아직 안 읽은 항목도 지워졌으면 에러 없이 건너뛰고 남은 것부터 받는다",
      "XREADGROUP이 에러를 돌려준다",
      "그 그룹은 자동으로 삭제된다",
    ],
    answer: 1,
    explanation:
      "자르기는 그룹의 위치를 보지 않는다. 늦은 그룹은 지워진 항목을 조용히 잃고 lag에도 드러나지 않는다. 상한은 가장 느린 그룹이 멈출 수 있는 시간과 유입 속도로 정한다.",
    anchor: "스트림을-자르면-늦은-그룹은-모른-채-잃는다",
  },
  {
    id: "pub-sub-6",
    post: "pub-sub",
    question: "SNS 토픽에 SQS 큐를 구독시켰다. 컨슈머가 본문 JSON을 파싱하면 sku 필드가 없다며 실패한다. 먼저 확인할 것은?",
    choices: [
      "SQS 가시성 타임아웃",
      "큐 정책의 aws:SourceArn 조건",
      "원본 메시지 전달(RawMessageDelivery) 설정. 꺼져 있으면 본문이 SNS 봉투로 감싸져 Message 필드 안에 들어 있다",
      "필터 정책의 FilterPolicyScope",
    ],
    answer: 2,
    explanation:
      "원본 메시지 전달을 켜지 않으면 SQS 본문은 Type, MessageId, Message 등이 담긴 SNS 봉투다. 실제 이벤트는 Message 문자열을 한 번 더 파싱해야 나온다. 큐 정책 문제라면 메시지가 아예 들어오지 않는다.",
    anchor: "sns-토픽-뒤에-sqs-큐를-하나씩",
  },
];
