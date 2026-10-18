import type { QuizQuestion } from "../types";

export const REDIS_REPLICATION_SENTINEL: QuizQuestion[] = [
  {
    id: "redis-replication-sentinel-1",
    post: "redis-replication-sentinel",
    question: "레플리카가 잠깐 끊겼다 다시 붙었는데 부분 동기화 대신 전체 동기화가 일어났다. 가장 그럴듯한 원인은?",
    choices: [
      "놓친 위치가 이미 replication backlog에서 밀려났다",
      "레플리카가 읽기 전용으로 설정되어 있다",
      "프라이머리의 appendonly가 꺼져 있다",
      "repl-diskless-sync가 켜져 있다",
    ],
    answer: 0,
    explanation:
      "부분 동기화는 레플리카가 놓친 위치 이후가 backlog에 남아 있을 때만 된다. 기본 1MB backlog는 쓰기가 많으면 몇 초 만에 덮이니, 초당 복제량 × 견딜 끊김 시간으로 키운다. diskless 설정은 전체 동기화의 전송 방식일 뿐이다.",
    anchor: "복제는-비동기다",
  },
  {
    id: "redis-replication-sentinel-2",
    post: "redis-replication-sentinel",
    question: "프라이머리가 OK를 준 쓰기가 장애 조치 뒤 사라질 수 있는 이유는?",
    choices: [
      "Sentinel이 승격할 때 레플리카의 데이터를 비워서",
      "복제가 비동기라 레플리카로 가기 전에 프라이머리가 죽을 수 있어서",
      "레플리카가 만료된 키를 스스로 지워서",
      "WAIT 명령이 기본으로 꺼져 있어서",
    ],
    answer: 1,
    explanation:
      "프라이머리는 쓰기를 자기 메모리에 반영하자마자 OK를 주고 그 뒤에 레플리카로 보낸다. 그 사이에 죽으면 승격된 레플리카에는 그 쓰기가 없다. WAIT나 min-replicas-to-write로 확률을 줄일 수는 있지만 강한 일관성이 되지는 않는다.",
    anchor: "레플리카에서-읽으면-생기는-일",
  },
  {
    id: "redis-replication-sentinel-3",
    post: "redis-replication-sentinel",
    question: "Sentinel 3대에 quorum을 2로 두었다. 실제로 장애 조치를 시작하려면 무엇이 더 필요한가?",
    choices: [
      "레플리카 2대 이상이 프라이머리 다운에 동의해야 한다",
      "추가 조건은 없다. quorum만 채우면 바로 승격한다",
      "Sentinel 과반의 표를 받아 장애 조치를 맡을 리더가 되어야 한다",
      "앱이 SENTINEL failover 명령을 보내야 한다",
    ],
    answer: 2,
    explanation:
      "quorum은 프라이머리가 객관적으로 다운(ODOWN)인지 판단하는 데만 쓰인다. 장애 조치는 Sentinel 과반의 표를 받은 리더가 한다. 그래서 Sentinel은 서로 다른 장애 영역에 3대 이상 둔다.",
    anchor: "sentinel이-장애를-판단하고-넘기는-과정",
  },
  {
    id: "redis-replication-sentinel-4",
    post: "redis-replication-sentinel",
    question: "프라이머리의 INFO stats에서 sync_partial_err가 계속 늘고 레플리카가 주기적으로 전체 동기화를 한다. 가장 먼저 손볼 설정은?",
    choices: [
      "repl-backlog-size",
      "appendfsync",
      "maxmemory-policy",
      "replica-read-only",
    ],
    answer: 0,
    explanation:
      "부분 동기화가 실패한다는 건 레플리카가 끊긴 동안의 쓰기가 backlog에서 이미 밀려났다는 뜻이다. 프라이머리 로그에 for lack of backlog가 남는다. 초당 복제량 × 견딜 끊김 시간으로 repl-backlog-size를 키운다.",
    anchor: "현장에서-레플리카가-전체-동기화를-반복하는-순간",
  },
  {
    id: "redis-replication-sentinel-5",
    post: "redis-replication-sentinel",
    question: "min-replicas-to-write 1, min-replicas-max-lag 10을 설정한 프라이머리가 네트워크에서 고립됐다. 어떻게 되나?",
    choices: [
      "고립된 동안 받은 쓰기를 모두 디스크에 남긴다",
      "자동으로 레플리카로 강등된다",
      "10초 안에 응답한 레플리카가 없으면 쓰기를 NOREPLICAS 에러로 거절한다",
      "WAIT를 자동으로 붙여 쓰기를 처리한다",
    ],
    answer: 2,
    explanation:
      "응답이 늦지 않은 레플리카가 1대 미만이면 쓰기를 거절한다. 고립된 옛 프라이머리가 혼자 쓰기를 받다가 강등될 때 버려지는 시간을 10초 안팎으로 묶는 장치다. 유실을 없애지는 않는다.",
    anchor: "레플리카에서-읽으면-생기는-일",
  },
];
