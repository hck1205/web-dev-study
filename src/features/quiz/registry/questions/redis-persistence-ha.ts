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
    question: "모든 쓰기 명령이 MISCONF ... unable to persist to disk 에러로 거절된다. 가장 먼저 볼 곳은?",
    choices: [
      "maxmemory 축출 정책",
      "Redis 로그의 BGSAVE 실패 원인(fork, 디스크, 권한)",
      "클라이언트의 연결 풀 크기",
      "appendfsync 값",
    ],
    answer: 1,
    explanation:
      "RDB 저장이 실패하는데 stop-writes-on-bgsave-error yes라서 일부러 쓰기를 막은 것이다. 로그의 Can't save in background 줄이 fork 실패인지, 디스크가 찼는지, 권한 문제인지 알려 준다. 원인을 고쳐야 풀린다.",
    anchor: "fork와-copy-on-write",
  },
  {
    id: "redis-persistence-ha-5",
    post: "redis-persistence-ha",
    question: "RDB 백업 파일이 제대로 쓸 수 있는지 확인하는 방법으로 가장 알맞은 것은?",
    choices: [
      "파일 크기가 0보다 큰지만 본다",
      "운영 서버에 바로 덮어써서 재시작해 본다",
      "redis-check-rdb로 체크섬과 키 개수를 보고, 다른 포트로 띄워 데이터를 읽어 본다",
      "LASTSAVE 시각이 최근인지 본다",
    ],
    answer: 2,
    explanation:
      "파일이 있다는 것과 그 파일로 데이터가 살아난다는 것은 다르다. redis-check-rdb로 Checksum OK와 키 개수를 보고, 복사본을 다른 포트로 띄워 DBSIZE와 중요한 키를 읽어 본다. 복원에 걸린 시간도 재 둔다.",
    anchor: "백업은-복원해-봐야-백업이다",
  },
];
