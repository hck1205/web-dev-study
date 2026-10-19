import type { QuizQuestion } from "../types";

export const SQL_BATCH_TIMEOUT_POOL: QuizQuestion[] = [
  {
    id: "sql-batch-timeout-pool-1",
    post: "sql-batch-timeout-pool",
    question: "idle in transaction 상태로 오래 남은 연결이 있으면 생기는 일은?",
    choices: [
      "그 연결이 쓰던 shared buffers가 비워진다",
      "VACUUM이 옛 버전의 행을 치우지 못해 테이블과 인덱스가 부푼다",
      "새 쿼리의 실행 계획이 모두 Seq Scan으로 바뀐다",
      "pg_stat_statements 통계가 초기화된다",
    ],
    answer: 1,
    explanation:
      "열린 트랜잭션이 아직 볼 수 있는 옛 버전은 VACUUM이 지우지 못한다. 예제에서도 10000 are dead but not yet removable이 찍혔다. 잡고 있는 잠금 때문에 다른 쓰기가 기다리기도 해서 idle_in_transaction_session_timeout으로 한도를 건다.",
    anchor: "오래-열린-트랜잭션은-청소를-막는다",
  },
  {
    id: "sql-batch-timeout-pool-2",
    post: "sql-batch-timeout-pool",
    question: "1만 건을 한 줄씩 자동 커밋으로 넣던 것을 BEGIN ... COMMIT 하나로 감쌌더니 약 3초가 0.75초가 됐다. 가장 큰 이유는?",
    choices: [
      "커밋마다 하던 WAL fsync가 한 번으로 줄었기 때문이다",
      "문장이 1만 개에서 1개로 줄었기 때문이다",
      "트랜잭션 안에서는 인덱스를 고치지 않기 때문이다",
      "트랜잭션 안에서는 WAL을 쓰지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "커밋이 끝났다고 답하려면 WAL을 디스크에 확실히 내려야 해서, 1만 번 커밋은 1만 번 디스크를 기다린다. 트랜잭션으로 묶어도 문장 수는 그대로라, 문장을 하나로 합친 여러 행 INSERT나 COPY가 더 빠르다.",
    anchor: "한-줄씩-넣지-말고-묶어서-넣는다",
  },
  {
    id: "sql-batch-timeout-pool-3",
    post: "sql-batch-timeout-pool",
    question: "응용 계정에 statement_timeout을 걸 때 값을 응용의 요청 타임아웃보다 짧게 잡는 이유는?",
    choices: [
      "statement_timeout은 응용 타임아웃이 지나야 동작하기 때문이다",
      "짧게 잡아야 잠금 대기가 사라지기 때문이다",
      "응용이 이미 포기한 요청의 쿼리가 DB에서 계속 돌며 아무도 받지 않을 결과를 계산하지 않게 하려고",
      "PostgreSQL이 그보다 긴 값을 허용하지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "응용이 5초 만에 요청을 포기해도 DB의 쿼리는 계속 돌며 연결과 CPU를 잡는다. DB 쪽 한도를 더 짧게 두면 그런 쿼리가 먼저 끊긴다. 오래 걸리는 게 정상인 배치는 별도 계정이나 세션 설정으로 푼다.",
    anchor: "끝나지-않는-쿼리에-한도를-건다",
  },
  {
    id: "sql-batch-timeout-pool-4",
    post: "sql-batch-timeout-pool",
    question: "PgBouncer를 pool_mode = transaction으로 쓰는데, 트랜잭션 밖에서 SET search_path를 한 뒤 다음 쿼리에서 적용되지 않았다. 이유는?",
    choices: [
      "PgBouncer는 SET 명령을 지원하지 않는다",
      "SET은 COMMIT해야 적용된다",
      "search_path는 서버 재시작 후에만 바뀐다",
      "트랜잭션이 끝나면 DB 연결이 풀로 돌아가, 다음 트랜잭션이 다른 DB 연결로 갔기 때문이다",
    ],
    answer: 3,
    explanation:
      "transaction 모드는 트랜잭션 단위로 DB 연결을 빌려주고 돌려받아서, 세션에 남는 상태(SET, 세션 advisory lock, LISTEN, 임시 테이블)가 다음 트랜잭션까지 이어지지 않는다. 그런 설정은 트랜잭션 안에서 SET LOCAL로 쓰거나 역할 설정으로 건다.",
    anchor: "연결은-풀로-나눠-쓴다",
  },
  {
    id: "sql-batch-timeout-pool-5",
    post: "sql-batch-timeout-pool",
    question: "오래된 주문 1,000만 건을 PostgreSQL에서 지울 때 5,000건씩 나눠 지우는 이유가 아닌 것은?",
    choices: [
      "한 문장이 끝날 때까지 수많은 행의 잠금을 쥐고 있지 않으려고",
      "PostgreSQL의 DELETE는 한 번에 5,000행까지만 지울 수 있어서",
      "WAL이 한꺼번에 쏟아져 복제본이 뒤처지는 것을 막으려고",
      "실패했을 때 처음부터 되돌려야 하는 양을 줄이려고",
    ],
    answer: 1,
    explanation:
      "DELETE에 행 수 제한은 없다. 오히려 LIMIT이 없어서 WHERE id IN (SELECT ... LIMIT 5000)처럼 서브쿼리로 묶음을 고른다. 나누는 이유는 잠금, WAL 폭주, 실패 시 되돌릴 양이고, 묶음 사이에 쉬면 autovacuum과 복제가 따라올 시간이 생긴다.",
    anchor: "한-줄씩-넣지-말고-묶어서-넣는다",
  },
];
