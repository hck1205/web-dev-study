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
    question: "PostgreSQL 16에서 WITH paid AS (SELECT * FROM orders WHERE status = 'paid') SELECT ... FROM paid WHERE user_id = 42 가 인덱스를 타는 이유는?",
    choices: [
      "CTE는 항상 먼저 계산해 임시 테이블에 인덱스를 만들기 때문이다",
      "WITH 안의 쿼리는 병렬로 실행되기 때문이다",
      "12부터 한 번만 참조되고 부작용 없는 CTE는 바깥 쿼리에 녹여 넣어 user_id 조건이 안으로 들어가기 때문이다",
      "status 컬럼에 인덱스가 자동으로 생기기 때문이다",
    ],
    answer: 2,
    explanation:
      "12부터 재귀가 아니고 부작용이 없고 한 번만 참조되는 CTE는 인라인된다. 그래서 바깥의 user_id = 42가 안으로 들어가 인덱스를 쓴다. MATERIALIZED를 붙이면 11 이전처럼 결제 주문 전체를 먼저 만들어서 훨씬 느려진다.",
    anchor: "cte가-최적화를-막던-시절",
  },
  {
    id: "postgres-advanced-sql-6",
    post: "postgres-advanced-sql",
    question: "중복 행이 있는 테이블에 CREATE UNIQUE INDEX CONCURRENTLY가 is duplicated 오류로 실패했다. 그 뒤 상태로 맞는 것은?",
    choices: [
      "INVALID 상태의 인덱스가 남아 있어서, 중복을 정리한 뒤 지우고 다시 만들어야 한다",
      "인덱스가 아예 만들어지지 않아 따로 할 일이 없다",
      "중복 행이 자동으로 지워지고 인덱스가 만들어진다",
      "테이블 전체가 잠겨 쓰기가 막힌다",
    ],
    answer: 0,
    explanation:
      "CONCURRENTLY가 중간에 실패하면 INVALID 인덱스를 남긴다. 쿼리에는 쓰이지 않지만 쓰기마다 갱신 비용은 낸다. 중복을 합친 뒤 DROP INDEX CONCURRENTLY로 지우고 다시 만든다.",
    anchor: "유니크-인덱스-없이-쌓인-중복을-정리할-때",
  },
];
