import type { QuizQuestion } from "../types";

export const REDIS_PERSISTENCE_HA: QuizQuestion[] = [
  {
    id: "redis-persistence-ha-1",
    post: "redis-persistence-ha",
    question: "dump.rdb만 있는 서버에서 redis.conf의 appendonly를 yes로 바꾸고 재시작하면 어떻게 되나?",
    choices: [
      "dump.rdb를 읽은 뒤 AOF로 옮겨 적는다",
      "AOF만 읽으려 해서 빈 AOF를 만들고 빈 상태로 시작한다",
      "AOF가 없다는 에러를 내고 시작하지 않는다",
      "RDB와 AOF 중 최신 파일을 골라 읽는다",
    ],
    answer: 1,
    explanation:
      "appendonly yes면 Redis는 시작할 때 AOF만 읽는다. AOF가 없으니 새로 만들고 빈 상태로 뜨며, 그대로 두면 다음 저장이 dump.rdb까지 덮는다. 실행 중에 CONFIG SET appendonly yes로 켜고 CONFIG REWRITE로 남겨야 한다.",
    anchor: "aof는-쓰기-명령을-한-줄씩-적는다",
  },
  {
    id: "redis-persistence-ha-2",
    post: "redis-persistence-ha",
    question: "쓰기가 많은 서버에서 BGSAVE 중에 메모리 사용량이 크게 늘어나는 이유는?",
    choices: [
      "자식 프로세스가 fork 순간 메모리 전체를 복사해서",
      "부모가 저장이 끝날 때까지 쓰기를 별도 버퍼에 모아 두어서",
      "부모가 고친 페이지만 copy-on-write로 복사되는데, 쓰기가 많을수록 그 페이지가 늘어서",
      "RDB 압축을 위해 메모리에 임시 사본을 만들어서",
    ],
    answer: 2,
    explanation:
      "fork 직후 부모와 자식은 같은 페이지를 공유하고, 부모가 고치는 페이지만 복사된다. 쓰기가 쏟아지는 중에 130MB를 저장하니 76MB가 복사됐다. fork할 때 메모리 전체를 복사하는 건 아니다.",
    anchor: "fork와-copy-on-write",
  },
  {
    id: "redis-persistence-ha-3",
    post: "redis-persistence-ha",
    question: "appendfsync everysec로 둔 서버의 전원이 갑자기 꺼지면 잃을 수 있는 쓰기는 대략 얼마인가?",
    choices: [
      "마지막 RDB 스냅샷 이후 전부",
      "잃는 쓰기가 없다",
      "운영체제가 페이지 캐시를 내리는 주기만큼, 보통 수십 초",
      "1초 남짓, fsync가 밀리면 최대 2초 정도",
    ],
    answer: 3,
    explanation:
      "everysec는 1초마다 백그라운드에서 fsync하므로 그 사이의 쓰기를 잃을 수 있다. 이전 fsync가 끝나지 않으면 쓰기를 최대 2초까지 미루니 최악은 2초 정도다. 수십 초는 appendfsync no일 때 이야기다.",
    anchor: "aof는-쓰기-명령을-한-줄씩-적는다",
  },
  {
    id: "redis-persistence-ha-4",
    post: "redis-persistence-ha",
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
    id: "redis-persistence-ha-5",
    post: "redis-persistence-ha",
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
    id: "redis-persistence-ha-6",
    post: "redis-persistence-ha",
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
    id: "redis-persistence-ha-7",
    post: "redis-persistence-ha",
    question: "Redis Cluster에서 MSET cart:42 a session:42 b가 CROSSSLOT 에러를 냈다. 두 키를 한 명령으로 다루려면?",
    choices: [
      "SELECT로 같은 DB 번호를 고른다",
      "키를 {user:42}:cart, {user:42}:session처럼 해시 태그로 짓는다",
      "redis-cli에 -c 옵션을 준다",
      "모든 키를 {shop} 태그 하나로 묶는다",
    ],
    answer: 1,
    explanation:
      "Cluster는 CRC16(키) mod 16384로 슬롯을 정하고, 여러 키 명령은 같은 슬롯일 때만 된다. 해시 태그를 넣으면 중괄호 안만 해시해서 같은 슬롯에 모인다. 태그 하나로 전부 묶으면 한 노드에 쏠리고, Cluster에서는 DB 0만 쓸 수 있다.",
    anchor: "cluster는-키를-16384개-슬롯으로-나눈다",
  },
];
