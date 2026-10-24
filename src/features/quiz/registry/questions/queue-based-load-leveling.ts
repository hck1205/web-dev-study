import type { QuizQuestion } from "../types";

export const QUEUE_BASED_LOAD_LEVELING: QuizQuestion[] = [
  {
    id: "queue-based-load-leveling-1",
    post: "queue-based-load-leveling",
    question: "하루 종일 초당 600건이 들어오는데 처리량이 초당 500건이다. 큐를 두면 어떻게 되나?",
    choices: [
      "큐가 급증을 흡수해서 문제가 사라진다",
      "큐가 처리량을 600건으로 올려 준다",
      "큐가 끝없이 길어진다. 큐는 시간을 벌 뿐 처리 능력을 늘리지 않는다",
      "워커가 자동으로 더 빨라진다",
    ],
    answer: 2,
    explanation:
      "부하 평준화는 순간적인 급증을 나중으로 미루는 것이라, 긴 시간 평균 도착량이 처리량보다 작아야 한다. 평균이 넘치면 큐는 계속 쌓이고 결국 처리 자체를 늘려야 한다.",
    anchor: "큐가-급증을-받아-낸다",
  },
  {
    id: "queue-based-load-leveling-2",
    post: "queue-based-load-leveling",
    question: "202 Accepted를 큐에 메시지를 넣기 전에 돌려주면 생기는 위험은?",
    choices: [
      "받았다고 답했는데 메시지를 잃어버려 작업이 영원히 queued로 남을 수 있다",
      "클라이언트가 202를 에러로 처리한다",
      "Location 헤더를 붙일 수 없다",
      "상태 URL이 303을 돌려줄 수 없다",
    ],
    answer: 0,
    explanation:
      "202는 요청을 확실히 받았다는 약속이라 큐가 메시지를 받은 뒤에 돌려줘야 한다. 작업 기록과 메시지를 한 트랜잭션의 아웃박스로 묶으면 둘 중 하나만 남는 틈도 막을 수 있다.",
    anchor: "바로-답하지-않고-접수증을-준다",
  },
  {
    id: "queue-based-load-leveling-3",
    post: "queue-based-load-leveling",
    question: "KEDA로 큐 길이에 맞춰 워커를 늘릴 때 가장 신경 써야 할 설정은?",
    choices: [
      "pollingInterval을 1초로 줄이기",
      "minReplicaCount를 항상 0으로 두기",
      "listLength를 최대한 작게 두기",
      "maxReplicaCount를 DB가 버티는 동시 처리 수 안으로 묶기",
    ],
    answer: 3,
    explanation:
      "처리량은 워커 수가 아니라 가장 느린 의존성이 정한다. 큐가 쌓였다고 워커를 무한히 늘리면 워커들이 DB를 한계 너머로 밀어 처음의 장애를 재현한다.",
    anchor: "여러-워커가-같은-큐를-나눠-처리한다",
  },
  {
    id: "queue-based-load-leveling-4",
    post: "queue-based-load-leveling",
    question: "큐 경보를 큐 길이보다 가장 오래된 메시지의 나이로 거는 이유는?",
    choices: [
      "큐 길이는 Redis에서 잴 수 없기 때문이다",
      "같은 길이라도 처리량에 따라 기다리는 시간이 1초일 수도 17분일 수도 있기 때문이다",
      "나이가 길이보다 늘 작은 숫자라서 보기 쉽기 때문이다",
      "메시지 나이는 소비자 수와 상관없기 때문이다",
    ],
    answer: 1,
    explanation:
      "사용자가 느끼는 건 기다린 시간이다. 1만 건은 초당 1만 건을 처리하는 시스템엔 1초, 초당 10건이면 17분이다. SQS의 ApproximateAgeOfOldestMessage, Kafka의 랙이 같은 역할을 한다.",
    anchor: "큐가-끝없이-쌓일-때-정하는-기준",
  },
  {
    id: "queue-based-load-leveling-5",
    post: "queue-based-load-leveling",
    question: "BLPOP jobs:paid jobs:free 0 으로 엄격한 우선순위를 만들었을 때 생길 수 있는 문제와 해결책으로 맞는 것은?",
    choices: [
      "paid 작업이 늦게 나온다. 키 순서를 바꾼다",
      "작업이 두 번 나온다. BLMOVE로 바꾼다",
      "paid가 끊이지 않으면 free가 굶는다. 가중치로 꺼내거나 우선순위별 워커 풀을 둔다",
      "free 작업 순서가 뒤집힌다. 리스트를 하나로 합친다",
    ],
    answer: 2,
    explanation:
      "BLPOP은 왼쪽에 적은 리스트부터 비어 있지 않은 곳에서 꺼내므로 paid가 계속 차 있으면 free는 영원히 기다린다. 4대 1 같은 가중치나 우선순위별 워커 풀로 낮은 쪽도 꾸준히 처리되게 한다.",
    anchor: "급한-일을-먼저-꺼내기",
  },
  {
    id: "queue-based-load-leveling-6",
    post: "queue-based-load-leveling",
    question: "같은 주문의 생성·취소 메시지 순서를 지키면서 워커를 여러 개 쓰려면?",
    choices: [
      "워커를 하나만 둔다",
      "주문 id를 키로 같은 파티션이나 메시지 그룹에 넣어 키별로 한 소비자만 처리하게 한다",
      "가시성 타임아웃을 길게 늘린다",
      "우선순위 큐에 취소를 낮은 순위로 넣는다",
    ],
    answer: 1,
    explanation:
      "전체 순서 대신 키별 순서를 지키면 다른 주문끼리는 병렬로 처리할 수 있다. Kafka는 메시지 키로 파티션을, SQS FIFO는 MessageGroupId로 묶는다. 워커 하나는 순서는 지키지만 처리량을 포기한다.",
    anchor: "순서가-필요한-작업",
  },
  {
    id: "queue-based-load-leveling-7",
    post: "queue-based-load-leveling",
    question: "워커가 처리 기록 표에 INSERT ... ON CONFLICT DO NOTHING RETURNING으로 멱등성 키를 넣었더니 0줄이 돌아왔다. 어떻게 해야 하나?",
    choices: [
      "이미 처리된 메시지로 보고 처리 없이 ack한다",
      "에러로 보고 nack해서 다시 받는다",
      "키를 지우고 다시 넣는다",
      "데드 레터 큐로 보낸다",
    ],
    answer: 0,
    explanation:
      "0줄은 같은 키가 이미 있다는 뜻, 즉 앞선 전달에서 처리가 끝났다는 뜻이다. 다시 처리하지 않고 ack만 하면 최소 한 번 전달의 중복이 결과에 남지 않는다.",
    anchor: "두-번-처리되어도-괜찮게",
  },
];
