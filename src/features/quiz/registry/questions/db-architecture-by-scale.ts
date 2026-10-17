import type { QuizQuestion } from "../types";

export const DB_ARCHITECTURE_BY_SCALE: QuizQuestion[] = [
  {
    id: "db-architecture-by-scale-1",
    post: "db-architecture-by-scale",
    question: "앱 인스턴스가 늘어 PostgreSQL 연결이 max_connections에 닿기 시작했다. 먼저 할 일로 가장 알맞은 것은?",
    choices: [
      "max_connections를 1000으로 올린다",
      "앱과 DB 사이에 PgBouncer 같은 풀러를 두어 DB 쪽 연결 수를 줄인다",
      "읽기 복제본을 추가한다",
      "DB를 샤딩한다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 연결마다 프로세스를 띄우고, 실제로 동시에 일할 수 있는 건 코어 수 근처라 연결을 크게 늘리면 서로 다투며 느려진다. 풀러를 두면 앱의 수백 연결을 DB의 수십 연결로 돌려 쓴다. 복제본이나 샤딩은 연결 수 문제를 직접 풀지 않는다.",
    anchor: "연결은-풀로-묶어서-쓴다",
  },
  {
    id: "db-architecture-by-scale-2",
    post: "db-architecture-by-scale",
    question: "14시 03분에 실수로 실행한 DELETE 직전으로 데이터를 되돌리려면 어떤 백업이 필요한가?",
    choices: [
      "매일 새벽 3시에 뜬 pg_dump 파일",
      "읽기 복제본",
      "베이스 백업과 그 뒤의 WAL 보관을 이용한 시점 복구(PITR)",
      "VACUUM FULL",
    ],
    answer: 2,
    explanation:
      "pg_dump는 뜬 시점의 사진이라 그 뒤의 변경을 잃는다. PITR은 베이스 백업을 풀고 보관한 WAL을 recovery_target_time까지 재생해 원하는 시각으로 돌아간다. 복제본은 실수로 지운 것도 그대로 따라 지운다.",
    anchor: "백업은-복원해-봐야-안다",
  },
  {
    id: "db-architecture-by-scale-3",
    post: "db-architecture-by-scale",
    question: "DB에 주문을 커밋한 뒤 브로커에 이벤트를 보내는 방식의 문제를 아웃박스가 푸는 방법은?",
    choices: [
      "브로커와 DB를 2단계 커밋으로 묶는다",
      "이벤트를 먼저 보내고 성공하면 DB에 커밋한다",
      "이벤트를 보낼 때까지 주문 테이블을 잠근다",
      "이벤트를 같은 DB의 outbox 테이블에 주문과 같은 트랜잭션으로 넣고, 릴레이가 따로 보낸다",
    ],
    answer: 3,
    explanation:
      "DB와 브로커는 한 트랜잭션으로 묶이지 않아서 둘 중 하나만 성공하는 순간이 생긴다. outbox에 같은 트랜잭션으로 넣으면 주문과 이벤트가 같이 커밋되거나 같이 사라지고, 브로커로 보내는 일은 릴레이가 나중에 재시도하며 한다.",
    anchor: "db에-쓰고-이벤트를-보내는-사이",
  },
  {
    id: "db-architecture-by-scale-4",
    post: "db-architecture-by-scale",
    question: "아웃박스 릴레이가 브로커로 보낸 직후, published_at을 채우기 전에 죽었다. 어떻게 되나?",
    choices: [
      "다시 뜬 릴레이가 같은 이벤트를 한 번 더 보내므로 받는 쪽이 중복을 걸러야 한다",
      "이벤트가 영영 전달되지 않는다",
      "브로커가 중복을 알아서 막아 주므로 아무 문제가 없다",
      "주문 트랜잭션까지 롤백된다",
    ],
    answer: 0,
    explanation:
      "DB에는 아직 안 보낸 것으로 남아 있어서 릴레이가 다시 보낸다. 아웃박스는 적어도 한 번 전달을 보장할 뿐 정확히 한 번은 아니다. 받는 쪽이 이벤트 id를 처리 기록과 같은 트랜잭션에 저장해 이미 본 id는 건너뛴다.",
    anchor: "db에-쓰고-이벤트를-보내는-사이",
  },
  {
    id: "db-architecture-by-scale-5",
    post: "db-architecture-by-scale",
    question: "릴레이 두 개가 outbox에서 같은 행을 집지 않으면서 서로 기다리지도 않게 하는 쿼리 끝부분은?",
    choices: [
      "FOR SHARE",
      "FOR UPDATE",
      "FOR UPDATE SKIP LOCKED",
      "FOR UPDATE NOWAIT",
    ],
    answer: 2,
    explanation:
      "FOR UPDATE만 쓰면 다른 릴레이가 잠근 행을 끝날 때까지 기다리고, NOWAIT는 기다리지 않고 에러를 낸다. SKIP LOCKED는 잠긴 행을 건너뛰고 다음 행을 가져가서 작업을 나눠 갖는다. 실험에서 A가 1, 2번을 잡은 동안 B는 3, 4번을 가져갔다.",
    anchor: "db에-쓰고-이벤트를-보내는-사이",
  },
  {
    id: "db-architecture-by-scale-6",
    post: "db-architecture-by-scale",
    question: "긴 트랜잭션이 users를 읽는 중에 ALTER TABLE users ADD COLUMN을 실행했다. 그 뒤에 온 평범한 SELECT는?",
    choices: [
      "ALTER와 상관없이 바로 실행된다",
      "대기 중인 ALTER의 강한 잠금 뒤에 줄을 서서 함께 막힌다",
      "ALTER가 SELECT를 강제로 취소한다",
      "긴 트랜잭션이 자동으로 롤백된다",
    ],
    answer: 1,
    explanation:
      "ADD COLUMN은 순간적인 작업이지만 ACCESS EXCLUSIVE 잠금이 필요해 긴 트랜잭션을 기다린다. 잠금은 줄을 서기 때문에 그 뒤의 SELECT도 ALTER에 막혀 테이블 전체가 멈춘다. 그래서 DDL에는 lock_timeout을 짧게 건다.",
    anchor: "열-이름-하나를-다섯-단계로-바꾼다",
  },
  {
    id: "db-architecture-by-scale-7",
    post: "db-architecture-by-scale",
    question: "여러 서비스가 하나의 DB와 테이블을 같이 쓰는 공유 DB의 가장 큰 문제는?",
    choices: [
      "DB 서버 비용이 더 많이 든다",
      "트랜잭션을 쓸 수 없다",
      "SQL 조인이 느려진다",
      "한 팀의 스키마 변경이 다른 서비스를 깨뜨려 결국 같이 배포해야 한다",
    ],
    answer: 3,
    explanation:
      "어느 서비스가 어떤 열을 쓰는지 모르니 열 하나를 바꾸려 해도 모든 팀과 배포를 맞춰야 하고, 서비스를 나눈 독립 배포의 이점이 사라진다. 한 서비스의 무거운 쿼리가 다른 서비스까지 느리게 만드는 것도 문제다. 같은 클러스터라도 서비스마다 DB와 계정을 나누면 경계가 생긴다.",
    anchor: "서비스마다-db를-따로-둔다",
  },
];
