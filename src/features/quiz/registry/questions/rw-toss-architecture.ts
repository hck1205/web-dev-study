import type { QuizQuestion } from "../types";

export const RW_TOSS_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "rw-toss-architecture-1",
    post: "rw-toss-architecture",
    question: "토스증권이 Kafka 이중화에서 Stretched Cluster를 버린 이유로 맞는 것은?",
    choices: [
      "토픽과 권한 관리를 두 배로 해야 해서",
      "매 요청이 데이터센터 간 네트워크를 지나 지연이 커지고, 데이터센터 간 단절 때 ZooKeeper 스플릿 브레인으로 클러스터가 먹통이 될 수 있어서",
      "Kafka가 두 데이터센터에 걸친 클러스터를 지원하지 않아서",
      "미러링 도구를 직접 만들어야 해서",
    ],
    answer: 1,
    explanation:
      "Kafka는 복제본까지 복제를 마친 뒤 응답하므로 클러스터가 데이터센터에 걸치면 평시 지연이 커진다. 네트워크 단절 때의 스플릿 브레인은 가용성 목표와 정면으로 부딪힌다. 운영 부담이 두 배가 되는 것은 오히려 Active-Active의 단점이다.",
    anchor: "클러스터-하나를-늘릴까-둘을-묶을까",
  },
  {
    id: "rw-toss-architecture-2",
    post: "rw-toss-architecture",
    question: "토스증권 구성에서 프로듀서와 컨슈머의 이중화 방식이 다른 이유는?",
    choices: [
      "양쪽 클러스터에 같은 메시지가 모두 있으니 컨슈머까지 양쪽에서 읽으면 두 번 처리하게 되어, 컨슈머는 한쪽만 읽는다",
      "컨슈머가 프로듀서보다 느려서 한쪽에 모았다",
      "GSLB가 프로듀서를 지원하지 않아서",
      "컨슈머는 상태가 없어서 이중화가 필요 없다",
    ],
    answer: 0,
    explanation:
      "프로듀서는 Split DNS로 가까운 클러스터에 쓰는 Active-Active이고, 미러링으로 양쪽이 100%를 갖는다. 그래서 컨슈머는 GSLB가 가리키는 한쪽만 읽는 Active-Standby다. 컨슈머는 오프셋이라는 상태를 가지므로 넘어갈 때 Offset Sync가 필요하다.",
    anchor: "프로듀서와-컨슈머에-dns를-따로-준-이유",
  },
  {
    id: "rw-toss-architecture-3",
    post: "rw-toss-architecture",
    question: "같은 토픽 이름으로 양방향 미러링할 때 생기는 무한 루프를 토스증권은 어떻게 막았나?",
    choices: [
      "복제한 토픽 이름 앞에 원본 클러스터 접두사를 붙였다",
      "메시지 키에 데이터센터 번호를 넣었다",
      "복사본의 헤더에 출발 데이터센터를 적고, 헤더가 있는 메시지는 다시 보내지 않았다",
      "한 방향으로만 미러링했다",
    ],
    answer: 2,
    explanation:
      "헤더에 출발 데이터센터 정보가 있으면 미러링으로 온 메시지로 보고 되돌려 보내지 않는다. 접두사를 붙이는 것은 MM2의 방식인데, 토스증권은 개발자가 이중화를 의식하지 않게 같은 토픽 이름을 쓰려고 이 방식을 피했다.",
    anchor: "복사한-메시지가-다시-돌아오지-않게",
  },
  {
    id: "rw-toss-architecture-4",
    post: "rw-toss-architecture",
    question: "MM2 방식에서 오프셋 짝 (upstream 100, downstream 200)만 있을 때 원본 오프셋 199는 대상에서 몇으로 옮겨지나?",
    choices: ["299", "199", "200", "201"],
    answer: 3,
    explanation:
      "MM2는 짝과 정확히 같지 않으면 downstream에 1만 더한다. 그 사이에 레코드가 몇 개나 복제됐는지 모르니 넘겨짚으면 올바른 위치를 지나쳐 유실이 날 수 있어서다. 대신 그만큼 다시 읽는 중복을 감수한다.",
    anchor: "mm2는-보수적으로-1만-더한다",
  },
  {
    id: "rw-toss-architecture-5",
    post: "rw-toss-architecture",
    question: "양쪽에서 50%씩 들어오는 토픽에 타임스탬프 검색 방식을 쓰면 무엇이 생길 수 있나?",
    choices: [
      "중복만 생기고 유실은 생기지 않는다",
      "두 클러스터의 메시지 순서가 달라, 아직 읽지 않은 상대 쪽 메시지를 건너뛰는 유실이 생길 수 있다",
      "타임스탬프가 없어 동기화 자체가 불가능하다",
      "아무 문제도 생기지 않는다",
    ],
    answer: 1,
    explanation:
      "각 클러스터에는 직접 들어온 메시지가 먼저 쌓여 순서가 서로 다르다. 원본에서 3까지 읽었다고 대상에서 3의 위치를 커밋하면, 대상에서 그보다 앞에 있던 상대 쪽 메시지를 읽은 것으로 처리해 유실이 난다. 그래서 50:50 구조에는 헤더 참조 방식을 쓴다.",
    anchor: "토픽-모양에-따라-방법을-나눴다",
  },
  {
    id: "rw-toss-architecture-6",
    post: "rw-toss-architecture",
    question: "계획된 데이터센터 작업에서 Offset Sync의 중복까지 없애려고 토스증권이 쓴 방법은?",
    choices: [
      "Split DNS 비율을 50:50에서 0:100으로 바꿔 모든 데이터를 대상 클러스터로 보내 순서 꼬임을 없앤 뒤 동기화하고 옮긴다",
      "컨슈머를 모두 멈추고 오프셋을 처음부터 다시 읽게 한다",
      "MM2로 잠시 바꾼다",
      "작업 동안 프로듀서를 멈춘다",
    ],
    answer: 0,
    explanation:
      "중복은 두 클러스터에서 메시지가 X자로 꼬여 들어와서 생긴다. 모든 데이터를 한쪽으로 몰면 잠시 뒤 원본의 새 데이터는 모두 미러된 것이 되어 꼬임이 풀린다. 그 뒤 InSync 신호를 확인하고 컨슈머를 옮긴다.",
    anchor: "토픽-모양에-따라-방법을-나눴다",
  },
  {
    id: "rw-toss-architecture-7",
    post: "rw-toss-architecture",
    question: "토스증권이 재난 상황에서 Offset Sync의 중복은 허용하되 유실은 허용하지 않은 이유는?",
    choices: [
      "중복은 Kafka가 자동으로 지워 주기 때문에",
      "유실은 미러링 도구가 DLQ로 복구해 주기 때문에",
      "중복은 서비스가 멱등성으로 막을 수 있지만 유실은 서비스가 대처할 방법이 없어서",
      "금융 규정이 중복을 허용해서",
    ],
    answer: 2,
    explanation:
      "이미 읽은 메시지를 다시 읽는 것은 컨슈머가 멱등하면 결과가 같다. 읽지 않은 메시지를 건너뛰면 서비스는 그 사실조차 알기 어렵다. 그래서 Kafka 수준에서는 모르면 앞쪽으로 커밋한다는 원칙을 지킨다.",
    anchor: "두-클러스터의-오프셋은-서로-다르다",
  },
];
