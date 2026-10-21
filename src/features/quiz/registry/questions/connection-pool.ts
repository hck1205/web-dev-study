import type { QuizQuestion } from "../types";

export const CONNECTION_POOL: QuizQuestion[] = [
  {
    id: "connection-pool-1",
    post: "connection-pool",
    question:
      "API 응답이 가끔 1초 넘게 걸리는데 DB의 느린 쿼리 로그에는 아무것도 없고 DB CPU도 낮다. 먼저 볼 곳은?",
    choices: [
      "DB의 shared_buffers 적중률",
      "인덱스가 빠진 쿼리",
      "앱 커넥션 풀의 대기 수와 연결을 받기까지 걸린 시간",
      "DB 서버의 디스크 사용량",
    ],
    answer: 2,
    explanation:
      "응답 시간은 쿼리 시간과 풀에서 줄 선 시간의 합이다. 풀이 바닥나면 DB에는 짧은 쿼리만 기록되고 기다린 시간은 앱 쪽에만 남는다. 실험에서도 0.4초 쿼리가 줄을 서느라 1.2초 응답이 됐다.",
    anchor: "풀은-빌려주고-돌려받는-줄이다",
  },
  {
    id: "connection-pool-2",
    post: "connection-pool",
    question:
      "4코어 DB에 pgbench 클라이언트를 8개에서 64개로 늘렸더니 처리량은 비슷하거나 줄고 평균 지연은 10배 넘게 늘었다. 가장 알맞은 해석은?",
    choices: [
      "DB가 동시에 처리할 수 있는 양을 넘은 연결은 CPU와 잠금을 두고 DB 안에서 기다릴 뿐이다",
      "pgbench가 연결을 새로 맺느라 느려졌다",
      "max_connections가 작아 연결이 거절됐다",
      "shared_buffers가 부족해 디스크를 읽기 시작했다",
    ],
    answer: 0,
    explanation:
      "리틀의 법칙대로 처리량이 일정하면 동시 연결을 늘린 만큼 지연이 는다. pg_stat_activity에서도 많은 연결이 Lock 대기였다. 연결을 늘리는 건 DB 안에 줄을 하나 더 세우는 것과 같다.",
    anchor: "풀-크기는-얼마로",
  },
  {
    id: "connection-pool-3",
    post: "connection-pool",
    question:
      "배포 후 몇 시간은 멀쩡하다가 어느 순간부터 모든 요청이 연결 대기 타임아웃으로 실패한다. 재시작하면 낫는다. pg_stat_activity에서 가장 먼저 확인할 것은?",
    choices: [
      "active 상태에서 CPU를 쓰는 연결",
      "idle in transaction 상태로 오래 남은 연결",
      "autovacuum 작업자 수",
      "WAL sender 수",
    ],
    answer: 1,
    explanation:
      "에러 경로에서 연결을 돌려주지 않는 누수는 실패가 쌓일수록 풀을 갉아먹다 어느 순간 전부 막는다. 트랜잭션을 연 채 새면 DB에 idle in transaction이 오래 남는다. try/finally로 반환을 보장하고 idle_in_transaction_session_timeout을 안전망으로 건다.",
    anchor: "돌려주지-않은-연결",
  },
  {
    id: "connection-pool-4",
    post: "connection-pool",
    question:
      "PgBouncer transaction 모드 뒤에서 어떤 요청의 쿼리가 이유 없이 1초에 'canceling statement due to statement timeout'으로 취소된다. 그 코드는 타임아웃을 건 적이 없다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "PgBouncer의 query_timeout 기본값이 1초다",
      "PostgreSQL의 statement_timeout 기본값이 1초다",
      "pg_hba.conf의 인증 시간 제한에 걸렸다",
      "다른 클라이언트가 트랜잭션 밖에서 건 SET statement_timeout이 같은 backend에 남아 있다",
    ],
    answer: 3,
    explanation:
      "transaction 모드는 클라이언트가 바뀌어도 DISCARD ALL을 돌리지 않아 세션 SET이 다음 클라이언트에게 넘어간다. 실험에서 A의 설정이 같은 backend를 받은 B의 쿼리를 취소했다. 트랜잭션 안의 SET LOCAL이나 역할 기본값으로 바꾼다.",
    anchor: "transaction-모드가-깨뜨리는-것",
  },
  {
    id: "connection-pool-5",
    post: "connection-pool",
    question:
      "Ubuntu 24.04의 PgBouncer 1.22를 transaction 모드로 두고 JDBC 앱을 붙였더니 'prepared statement \"S_1\" does not exist' 에러가 간헐적으로 난다. 먼저 할 일은?",
    choices: [
      "pool_mode를 statement로 바꾼다",
      "max_prepared_statements를 0보다 큰 값으로 켠다",
      "default_pool_size를 1로 줄인다",
      "PostgreSQL의 max_prepared_transactions를 올린다",
    ],
    answer: 1,
    explanation:
      "프로토콜 수준 prepared statement 지원은 1.21부터 있지만 기본값이 1.24 전에는 0이라 꺼져 있다. 켜지 않으면 만든 backend와 실행한 backend가 달라 does not exist가 난다. max_prepared_transactions는 2단계 커밋 설정이라 관계가 없다.",
    anchor: "transaction-모드가-깨뜨리는-것",
  },
  {
    id: "connection-pool-6",
    post: "connection-pool",
    question:
      "max_connections 200에서 예약과 관리용으로 20개를 뺐다. API 파드는 최대 20개이고 롤링 배포 때 5개가 더 뜬다. 파드당 풀 최대치로 알맞은 것은?",
    choices: ["10 (라이브러리 기본값)", "9", "7", "20"],
    answer: 2,
    explanation:
      "배포 중에는 옛 파드와 새 파드가 함께 연결을 쥐니 25개로 나눠야 한다. 180 ÷ 25를 내림하면 7이다. 기본값 10을 두면 250개가 되어 배포 때마다 연결이 거절된다.",
    anchor: "max_connections-계산서",
  },
  {
    id: "connection-pool-7",
    post: "connection-pool",
    question: "같은 머신에서 PgBouncer를 거쳤더니 직접 붙을 때보다 처리량이 20% 남짓 낮았다. 그래도 PgBouncer를 두는 이유는?",
    choices: [
      "PgBouncer가 쿼리 결과를 캐시해 반복 조회가 빨라진다",
      "SCRAM 인증 비용이 사라진다",
      "클라이언트가 아무리 많아도 DB backend 수를 정점 근처로 묶어 두는 상한이 생긴다",
      "PostgreSQL의 max_connections 제한을 우회한다",
    ],
    answer: 2,
    explanation:
      "PgBouncer는 처리량을 늘리는 장치가 아니라 DB 연결 수의 상한이다. 클라이언트가 64개여도 DB에는 backend 8개만 떴고 나머지는 PgBouncer의 줄에서 기다렸다. 클라이언트와 PgBouncer 사이에도 SCRAM을 하니 인증 비용은 그대로였다.",
    anchor: "앱-밖에-두는-풀-pgbouncer",
  },
];
