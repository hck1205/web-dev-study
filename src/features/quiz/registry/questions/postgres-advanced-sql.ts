import type { QuizQuestion } from "../types";

export const POSTGRES_ADVANCED_SQL: QuizQuestion[] = [
  {
    id: "postgres-advanced-sql-1",
    post: "postgres-advanced-sql",
    question: "\"SELECT로 있는지 확인하고 없으면 INSERT\"하는 장바구니 코드가 동시 요청에서 가끔 중복 키 오류를 내는 이유는?",
    choices: [
      "격리 수준이 READ COMMITTED라서이고, SERIALIZABLE로 올리면 틈이 사라진다",
      "SELECT는 없는 행을 잠글 수 없어서 두 요청이 모두 \"없다\"를 보고 둘 다 넣으려 하기 때문이다",
      "기본 키 인덱스가 커밋 전 행을 보지 못해서다",
      "INSERT가 SELECT보다 먼저 실행되도록 플래너가 순서를 바꾸기 때문이다",
    ],
    answer: 1,
    explanation:
      "조회와 삽입 사이에 틈이 있고, 없는 행은 잠글 대상도 없어서 두 세션이 같은 결론을 낸다. 격리 수준을 올려도 이 경쟁은 오류 형태만 바뀔 뿐 사라지지 않는다. INSERT ... ON CONFLICT는 유니크 인덱스에서 판단하고 기다렸다가 UPDATE로 바꿔 준다.",
    anchor: "조회하고-넣으면-생기는-틈",
  },
  {
    id: "postgres-advanced-sql-2",
    post: "postgres-advanced-sql",
    question: "INSERT ... ON CONFLICT (book_id) DO UPDATE ...가 \"there is no unique or exclusion constraint matching\" 오류로 실행되지 않았다. 원인은?",
    choices: [
      "DO UPDATE 대신 DO NOTHING을 써야 해서",
      "EXCLUDED를 쓰지 않아서",
      "같은 문장에 같은 키가 두 번 들어 있어서",
      "book_id 하나에 맞는 유니크 인덱스나 제약이 없어서",
    ],
    answer: 3,
    explanation:
      "ON CONFLICT는 충돌 판단을 유니크 인덱스에 맡기므로 충돌 대상과 정확히 맞는 유니크 인덱스, 기본 키, 배제 제약이 있어야 한다. 같은 키가 두 번 들어간 경우는 \"cannot affect row a second time\"이라는 다른 오류가 난다.",
    anchor: "있으면-더하고-없으면-넣기",
  },
  {
    id: "postgres-advanced-sql-3",
    post: "postgres-advanced-sql",
    question: "요청마다 한 행씩 들어오는 동시성 높은 upsert에 MERGE보다 ON CONFLICT를 권하는 이유는?",
    choices: [
      "MERGE는 동시에 같은 키가 들어오면 기다렸다 UPDATE로 바꿔 주지 않아 중복 키 오류가 날 수 있어서",
      "MERGE는 PostgreSQL 16에서 INSERT를 지원하지 않아서",
      "MERGE는 유니크 인덱스가 있으면 실행되지 않아서",
      "ON CONFLICT는 트랜잭션 밖에서 실행돼 잠금을 잡지 않아서",
    ],
    answer: 0,
    explanation:
      "MERGE는 조인 조건으로 짝을 짓는 문장이라 유니크 인덱스가 없어도 되지만, 그 대신 동시에 삽입되는 같은 키를 UPDATE로 바꿔 주지 않는다. 그래서 MERGE는 배치로 테이블 두 개를 맞추는 일에, 요청 단위 upsert는 ON CONFLICT에 쓴다.",
    anchor: "원본-데이터와-맞춰-놓는-merge",
  },
  {
    id: "postgres-advanced-sql-4",
    post: "postgres-advanced-sql",
    question: "WITH upd AS (UPDATE books SET price = price + 1000 WHERE id = 1 RETURNING price)\nSELECT (SELECT price FROM books WHERE id = 1), (SELECT price FROM upd);\n원래 가격이 19000이면 결과는?",
    choices: [
      "20000, 20000",
      "19000, 19000",
      "19000, 20000",
      "오류가 난다",
    ],
    answer: 2,
    explanation:
      "쓰기 CTE를 포함한 한 문장의 모든 부분은 같은 스냅숏을 본다. 그래서 테이블을 다시 읽으면 바뀌기 전 값 19000이 보이고, 바뀐 값은 RETURNING을 거친 upd에서만 20000으로 보인다.",
    anchor: "한-문장으로-행을-옮기는-쓰기-cte",
  },
  {
    id: "postgres-advanced-sql-5",
    post: "postgres-advanced-sql",
    question: "회원 20명의 최근 주문 3건을 구할 때, (user_id, created_at DESC) 인덱스가 없으면 LATERAL 방식이 크게 느려지는 이유는?",
    choices: [
      "LATERAL은 병렬 실행을 쓸 수 없어서",
      "LIMIT이 LATERAL 안에서는 무시돼서",
      "윈도우 함수와 달리 정렬을 디스크에서 해서",
      "회원마다 서브쿼리가 한 번씩 돌아 테이블 전체 읽기가 20번 반복돼서",
    ],
    answer: 3,
    explanation:
      "LATERAL 서브쿼리는 바깥 행마다 실행된다. 실행 계획의 loops=20처럼 한 번이 Seq Scan이면 그 비용이 그대로 20배가 된다. 인덱스가 있으면 회원마다 최신 세 건만 읽고 Limit에서 멈춰서 윈도우 함수보다 빨라진다.",
    anchor: "사용자마다-최근-주문-세-건",
  },
  {
    id: "postgres-advanced-sql-6",
    post: "postgres-advanced-sql",
    question: "generate_series로 만든 날짜 목록에 주문을 LEFT JOIN해 일별 주문 수를 셀 때 count(o.id)를 쓰는 이유는?",
    choices: [
      "count(*)는 LEFT JOIN으로 생긴 빈 행도 1로 세서 주문 없는 날이 1이 되기 때문이다",
      "count(*)는 인덱스를 쓰지 못하기 때문이다",
      "count(o.id)가 NULL을 0으로 바꿔 주는 함수라서다",
      "generate_series와 count(*)는 함께 쓸 수 없어서다",
    ],
    answer: 0,
    explanation:
      "LEFT JOIN은 짝이 없는 날짜에도 주문 컬럼이 NULL인 행 하나를 만든다. count(*)는 행을 세니 1이 되고, count(o.id)는 NULL을 빼고 세니 0이 된다. sum은 빈 날 NULL이 되므로 coalesce로 0을 채운다.",
    anchor: "주문이-없는-날도-0으로-채우는-리포트",
  },
  {
    id: "postgres-advanced-sql-7",
    post: "postgres-advanced-sql",
    question: "REFRESH MATERIALIZED VIEW CONCURRENTLY를 쓰기 위해 꼭 필요한 것은?",
    choices: [
      "원본 테이블의 트리거",
      "pg_cron 확장",
      "머티리얼라이즈드 뷰에 WHERE 없는 유니크 인덱스",
      "SERIALIZABLE 격리 수준",
    ],
    answer: 2,
    explanation:
      "CONCURRENTLY는 새 결과와 기존 결과를 비교해 바뀐 행만 고치는 방식이라 행을 구별할 유니크 인덱스가 있어야 한다. 대신 갱신하는 동안 읽기를 막지 않는다. pg_cron은 주기 실행에 쓸 수 있을 뿐 필수는 아니다.",
    anchor: "이름-붙인-쿼리와-저장해-둔-결과",
  },
];
