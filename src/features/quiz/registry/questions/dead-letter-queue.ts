import type { QuizQuestion } from "../types";

export const DEAD_LETTER_QUEUE: QuizQuestion[] = [
  {
    id: "dead-letter-queue-1",
    post: "dead-letter-queue",
    question: "큐 깊이가 0으로 내려가지 않고, 워커 로그에 같은 작업 ID의 같은 에러가 1초마다 찍힌다. 무엇이 일어나고 있나?",
    choices: [
      "워커가 너무 적어서 처리가 밀리고 있다",
      "가시성 타임아웃이 너무 길다",
      "처리될 수 없는 독이 든 메시지가 재시도 상한 없이 계속 돌고 있다",
      "프로듀서가 같은 메시지를 1초마다 다시 넣고 있다",
    ],
    answer: 2,
    explanation:
      "같은 ID가 같은 에러로 반복되면 몇 번을 다시 줘도 처리할 수 없는 메시지다. 상한이 없으면 영원히 돌며 워커 시간을 쓰고, 순서를 지키는 큐에서는 뒤의 메시지를 막는다. 횟수 상한을 두고 DLQ로 뺀다.",
    anchor: "같은-실패가-끝없이-돌아온다",
  },
  {
    id: "dead-letter-queue-2",
    post: "dead-letter-queue",
    question: "SQS의 maxReceiveCount를 1로 두었더니 DLQ의 메시지를 그대로 되돌리면 대부분 성공한다. 왜 이런 일이 생기나?",
    choices: [
      "받은 횟수는 실패가 아니라 받아 간 횟수라서, 처리가 가시성 타임아웃을 한 번 넘기거나 워커가 배포로 죽기만 해도 DLQ로 가서",
      "DLQ로 옮길 때 메시지 내용이 고쳐져서",
      "maxReceiveCount가 1이면 DLQ가 FIFO처럼 동작해서",
      "DLQ의 보관 기간이 더 길어서",
    ],
    answer: 0,
    explanation:
      "ApproximateReceiveCount는 받을 때마다 오른다. 실패하지 않았어도 처리가 오래 걸려 다시 보이거나 컨슈머가 죽으면 센다. 상한 1은 일시적인 사정 한 번에 멀쩡한 메시지를 격리하므로 3~5에서 시작한다.",
    anchor: "몇-번-시도하고-포기할지",
  },
  {
    id: "dead-letter-queue-3",
    post: "dead-letter-queue",
    question: "메일 서버가 '550 mailbox unavailable'을 돌려줬다. 워커는 어떻게 하는 게 맞나?",
    choices: [
      "지수 백오프로 상한까지 재시도한다",
      "가시성 타임아웃을 0으로 바꿔 바로 다시 받는다",
      "ack하고 아무 기록 없이 버린다",
      "영구적인 실패로 보고 횟수와 상관없이 바로 DLQ로 보낸다",
    ],
    answer: 3,
    explanation:
      "550은 그런 사서함이 없다는 영구 거절이라 다시 해도 결과가 같다. 상한까지 재시도하면 시간만 쓰고 다른 메시지를 기다리게 한다. 아무 기록 없이 버리면 원인을 추적할 수 없으니 DLQ에 남긴다.",
    anchor: "바로-포기할-실패-기다려-볼-실패",
  },
  {
    id: "dead-letter-queue-4",
    post: "dead-letter-queue",
    question: "SQS DLQ 알람을 NumberOfMessagesSent > 0으로 걸었는데 메시지가 DLQ에 쌓여도 울리지 않는다. 이유는?",
    choices: [
      "DLQ에는 CloudWatch 지표가 없어서",
      "재시도 상한을 넘어 옮겨진 메시지는 NumberOfMessagesSent에 잡히지 않아서",
      "알람 기간이 5분이라서",
      "DLQ가 FIFO가 아니라서",
    ],
    answer: 1,
    explanation:
      "NumberOfMessagesSent는 직접 보낸 메시지만 센다. 재시도 끝에 DLQ로 옮겨진 메시지는 여기에 안 잡히므로 DLQ 알람은 ApproximateNumberOfMessagesVisible이 0보다 클 때로 건다.",
    anchor: "알람은-dlq에-하나라도-있으면",
  },
  {
    id: "dead-letter-queue-5",
    post: "dead-letter-queue",
    question: "SQS 표준 큐와 DLQ의 보관 기간을 둘 다 4일로 두었다. 무엇이 문제인가?",
    choices: [
      "DLQ로 옮겨도 만료 시계가 원래 큐에 들어온 시각 기준이라, 재시도에 쓴 시간만큼 DLQ에서 일찍 사라진다",
      "DLQ의 보관 기간은 원래 큐보다 짧아야 해서",
      "보관 기간이 같으면 RedrivePolicy를 걸 수 없어서",
      "문제없다. DLQ로 옮기면 시계가 다시 시작된다",
    ],
    answer: 0,
    explanation:
      "표준 큐에서는 메시지의 만료가 처음 들어온 시각으로 계산되고 DLQ로 옮겨도 바뀌지 않는다. 3일 재시도하다 옮겨진 메시지는 DLQ에서 하루 뒤에 사라진다. DLQ 보관 기간은 원래 큐보다 길게, 보통 14일로 둔다.",
    anchor: "알람은-dlq에-하나라도-있으면",
  },
  {
    id: "dead-letter-queue-6",
    post: "dead-letter-queue",
    question: "포인트 적립 컨슈머의 버그를 고치고 DLQ를 원래 큐로 되돌리려 한다. 일부 메시지는 적립을 커밋한 뒤 로그에서 예외가 나 DLQ로 갔다. 두 번 적립되지 않게 하려면?",
    choices: [
      "되돌릴 때 메시지 순서를 뒤집는다",
      "가시성 타임아웃을 길게 잡는다",
      "처리한 메시지 ID를 적립과 같은 트랜잭션에 기록하고, 이미 있는 ID는 건너뛴다",
      "DLQ를 비우고 다시 발행하지 않는다",
    ],
    answer: 2,
    explanation:
      "처리 후 ack 전에 실패한 메시지는 효과를 이미 남겼을 수 있다. 메시지 ID를 업무 데이터와 같은 트랜잭션에 기록하면 되돌린 메시지 중 이미 처리된 것은 INSERT가 0줄이 되어 건너뛴다. 되돌릴 때는 속도를 제한해 소량부터 보낸다.",
    anchor: "고친-뒤-되돌려-보내기",
  },
  {
    id: "dead-letter-queue-7",
    post: "dead-letter-queue",
    question: "Redis Streams에서 XPENDING의 delivery count로 DLQ를 만들었더니 정상 항목까지 DLQ로 간다. 먼저 의심할 것은?",
    choices: [
      "XADD의 MAXLEN이 너무 작다",
      "XAUTOCLAIM의 min-idle-time이 처리 시간보다 짧아서, 처리 중인 항목을 다른 소비자가 가져가며 횟수가 올랐다",
      "소비자 그룹을 $로 만들었다",
      "XACK를 MULTI로 묶었다",
    ],
    answer: 1,
    explanation:
      "delivery count는 실패 횟수가 아니라 내준 횟수다. 처리 중인 항목도 min-idle-time이 지나면 XAUTOCLAIM으로 다른 소비자에게 넘어가며 횟수가 오른다. min-idle-time을 처리 시간보다 넉넉히 잡는다.",
    anchor: "redis-streams로-만드는-dlq",
  },
];
