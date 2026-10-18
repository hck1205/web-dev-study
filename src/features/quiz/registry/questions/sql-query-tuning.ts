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
    question: "pg_stat_statements에서 먼저 고칠 쿼리를 고를 때 total_exec_time(합친 시간)으로 정렬하는 이유는?",
    choices: [
      "mean_exec_time은 응용 서버와의 왕복 시간을 포함해서 부정확하기 때문이다",
      "total_exec_time만 디스크에서 읽은 페이지 수를 반영하기 때문이다",
      "한 번에 오래 걸리는 쿼리는 자동으로 취소되기 때문이다",
      "가끔 도는 2초짜리보다 초당 수백 번 도는 16ms짜리가 DB를 더 바쁘게 만들기 때문이다",
    ],
    answer: 3,
    explanation:
      "DB의 부담은 한 번의 시간 × 횟수로 쌓인다. 그래서 합친 시간이 큰 쿼리부터 고르고, calls로도 정렬해 N+1처럼 짧지만 너무 자주 도는 쿼리를 찾는다. pg_stat_statements의 시간은 DB 안에서 쓴 시간만이라 왕복 시간은 들어 있지 않다.",
    anchor: "어떤-쿼리가-시간을-먹는지부터-찾는다",
  },
  {
    id: "sql-query-tuning-5",
    post: "sql-query-tuning",
    question: "Hash Join 노드에 Batches: 8이 찍혀 있다. 무슨 뜻인가?",
    choices: [
      "해시 테이블을 병렬 워커 8개가 나눠 만들었다",
      "해시 테이블이 work_mem × hash_mem_multiplier 한도를 넘어 일부를 임시 파일에 나눠 썼다",
      "해시 충돌이 8번 일어났다",
      "바깥 입력을 8번 반복해서 읽었다",
    ],
    answer: 1,
    explanation:
      "Batches: 1이면 해시 테이블이 메모리 한도 안에서 한 번에 처리됐다는 뜻이고, 한도를 넘으면 2, 4, 8로 늘며 디스크에 썼다 다시 읽는다. 그 쿼리를 도는 세션에서만 work_mem을 올려 보고, 서버 전체 값을 크게 올리지는 않는다.",
    anchor: "조인을-처리하는-세-가지-방법",
  },
];
