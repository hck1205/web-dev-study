import type { QuizQuestion } from "../types";

export const SQL_QUERY_TUNING: QuizQuestion[] = [
  {
    id: "sql-query-tuning-1",
    post: "sql-query-tuning",
    question: "pg_stat_statements에서 0.01ms짜리 쿼리가 calls 1,000으로 찍혀 있다. 이 숫자가 의심스러운 이유는?",
    choices: [
      "평균 시간이 너무 짧으면 통계가 잘못 모인 것이기 때문에",
      "DB 안의 시간은 작아도 쿼리마다 왕복이 붙어서, 호출이 많으면 N+1일 가능성이 높기 때문에",
      "calls가 1,000을 넘으면 pg_stat_statements가 기록을 멈추기 때문에",
      "id로 찾는 쿼리는 항상 Seq Scan이 되기 때문에",
    ],
    answer: 1,
    explanation:
      "total_exec_time은 DB 안에서 쓴 시간만 세고, 응용 서버와 오가는 왕복 시간은 들어 있지 않다. 그래서 짧은 쿼리가 비정상적으로 많이 불렸다면 행마다 따로 조회하는 N+1을 먼저 의심한다.",
    anchor: "어떤-쿼리가-시간을-먹는지부터-찾는다",
  },
  {
    id: "sql-query-tuning-2",
    post: "sql-query-tuning",
    question: "id > 990000 AND created_at >= '2026-10-09 18:00' 조건에서 예상 rows=109, 실제 rows=10000이 나온 이유는?",
    choices: [
      "두 조건이 사실 같은 행을 고르는데, 플래너는 조건끼리 독립이라 보고 확률을 곱했기 때문에",
      "created_at에 인덱스가 없기 때문에",
      "EXPLAIN에 ANALYZE를 붙이지 않았기 때문에",
      "Nested Loop는 항상 예상 행 수를 줄여서 보여 주기 때문에",
    ],
    answer: 0,
    explanation:
      "주문이 시간 순으로 쌓여 id와 created_at이 함께 움직이는데, 플래너는 1% × 1%로 계산해 100건 남짓으로 예상했다. 틀린 예상 때문에 Nested Loop를 골라 회원 인덱스를 1만 번 내려갔다.",
    anchor: "실행-계획은-안쪽부터-읽는다",
  },
  {
    id: "sql-query-tuning-3",
    post: "sql-query-tuning",
    question: "Hash Join 노드의 Hash 아래에 Batches: 4가 찍혔다. 무슨 뜻인가?",
    choices: [
      "해시 테이블을 네 개의 워커가 나눠 만들었다",
      "조인 조건이 네 개다",
      "해시 테이블이 메모리 한도(work_mem × hash_mem_multiplier)를 넘어 일부를 임시 파일로 나눠 처리했다",
      "안쪽 입력을 네 번 반복해서 읽었다",
    ],
    answer: 2,
    explanation:
      "Batches가 1이면 해시 테이블이 메모리에 다 들어간 것이다. 한도를 넘으면 배치 수를 늘려 디스크에 썼다 다시 읽는다. 그 쿼리를 돌리는 세션에서만 work_mem을 올려 보는 식으로 대응한다.",
    anchor: "조인을-처리하는-세-가지-방법",
  },
  {
    id: "sql-query-tuning-4",
    post: "sql-query-tuning",
    question: "WHERE status = 'paid' AND created_at::date = '2026-10-01'이 느린 이유와 고친 형태로 알맞은 것은?",
    choices: [
      "date 타입이 느리다. created_at::text LIKE '2026-10-01%'로 바꾼다",
      "status가 앞에 있어서다. 조건 순서를 바꿔 created_at을 먼저 쓴다",
      "인덱스가 오래돼서다. REINDEX를 한다",
      "컬럼을 변환해서 날짜 조건이 인덱스를 못 쓴다. created_at >= '2026-10-01' AND created_at < '2026-10-02'로 쓴다",
    ],
    answer: 3,
    explanation:
      "인덱스에는 created_at 원래 값이 정렬돼 있어서 created_at::date 결과로는 범위를 좁힐 수 없다. 컬럼은 그대로 두고 반대쪽 값을 범위로 바꾸면 두 조건이 모두 Index Cond에 들어가 9,887페이지가 33페이지로 줄었다. WHERE 안의 조건 순서는 플래너가 알아서 정한다.",
    anchor: "컬럼은-그대로-두고-값을-바꾼다",
  },
  {
    id: "sql-query-tuning-5",
    post: "sql-query-tuning",
    question: "LIMIT 20 OFFSET 900000이 느린 이유는?",
    choices: [
      "DB가 90만 행이 어디서 끝나는지 몰라 앞에서부터 90만 20행을 읽고 버리기 때문에",
      "OFFSET이 붙으면 인덱스를 전혀 쓰지 않기 때문에",
      "OFFSET 값이 클수록 정렬을 여러 번 하기 때문에",
      "LIMIT과 OFFSET을 함께 쓰면 결과를 두 번 계산하기 때문에",
    ],
    answer: 0,
    explanation:
      "예제에서도 인덱스는 썼지만 Index Scan Backward가 900,020행을 내놓아 13,333페이지를 읽었다. 앞 페이지 마지막 id를 기억해 WHERE id < 마지막 id로 묻는 키셋 방식은 같은 20건을 7페이지로 가져왔다.",
    anchor: "뒤-페이지로-갈수록-느려지는-offset",
  },
  {
    id: "sql-query-tuning-6",
    post: "sql-query-tuning",
    question: "서브쿼리 결과에 NULL이 섞일 수 있을 때 NOT IN 대신 NOT EXISTS를 쓰는 이유는?",
    choices: [
      "NOT EXISTS는 인덱스를 쓰지 않아 더 단순하기 때문에",
      "NOT IN은 MySQL에서만 동작하기 때문에",
      "NULL이 하나라도 있으면 NOT IN은 참이 될 수 없어 결과가 사라지고, 안티 조인으로 바뀌지도 못하기 때문에",
      "NOT EXISTS는 결과를 정렬해서 돌려주기 때문에",
    ],
    answer: 2,
    explanation:
      "3 <> NULL은 알 수 없음이라 3 NOT IN (1, 2, NULL)은 행을 하나도 돌려주지 않는다. 이 의미를 지키느라 PostgreSQL은 NOT IN을 안티 조인으로 바꾸지 못해 예상 비용이 6억이 넘었고, NOT EXISTS는 안티 조인으로 2만 남짓이었다.",
    anchor: "exists-in-join-중-무엇을-쓰나",
  },
  {
    id: "sql-query-tuning-7",
    post: "sql-query-tuning",
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
];
