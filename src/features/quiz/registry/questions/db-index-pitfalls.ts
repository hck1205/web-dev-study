import type { QuizQuestion } from "../types";

export const DB_INDEX_PITFALLS: QuizQuestion[] = [
  {
    id: "db-index-pitfalls-1",
    post: "db-index-pitfalls",
    question: "bigint 컬럼 user_id에 인덱스가 있을 때, 인덱스를 쓰지 못하는 조건은?",
    choices: [
      "WHERE user_id = 42",
      "WHERE user_id = '42'",
      "WHERE user_id = 42.0",
      "WHERE user_id IN (42, 43)",
    ],
    answer: 2,
    explanation:
      "42.0은 numeric이라 비교하려고 컬럼 쪽을 numeric으로 바꾸고, 그 결과는 인덱스에 없어서 Seq Scan이 된다. 따옴표로 쓴 '42'는 타입이 정해지지 않은 리터럴이라 컬럼 타입인 bigint로 바뀌어 인덱스를 탄다.",
    anchor: "인덱스가-있는데-안-타는-경우",
  },
  {
    id: "db-index-pitfalls-2",
    post: "db-index-pitfalls",
    question: "status 컬럼이 인덱스에 들어 있을 때 UPDATE orders SET status = 'paid' 가 HOT 업데이트가 되지 않는 이유는?",
    choices: [
      "status가 text 타입이라서",
      "인덱스에 들어간 컬럼을 바꾸면 새 버전을 가리키는 인덱스 항목을 새로 넣어야 해서",
      "HOT 업데이트는 DELETE에만 적용되는 기능이라서",
      "fillfactor가 기본값보다 낮아서",
    ],
    answer: 1,
    explanation:
      "HOT은 인덱스에 걸린 컬럼이 바뀌지 않고 같은 페이지에 빈자리가 있을 때만 인덱스를 건드리지 않는다. 예제에서도 amount를 바꾼 행은 HOT이었고 status를 바꾼 행은 아니었다. fillfactor를 낮추면 오히려 빈자리가 생겨 HOT이 쉬워진다.",
    anchor: "인덱스는-쓰기를-느리게-한다",
  },
  {
    id: "db-index-pitfalls-3",
    post: "db-index-pitfalls",
    question: "배송 완료 주문 80만 건을 pending으로 바꾼 직후 WHERE status = 'pending' 쿼리가 예상 18772행, 실제 809301행으로 인덱스를 골랐다. 가장 먼저 할 일은?",
    choices: [
      "ANALYZE orders로 통계를 새로 모은다",
      "status 인덱스를 지우고 다시 만든다",
      "random_page_cost를 10으로 올린다",
      "VACUUM FULL로 테이블을 다시 쓴다",
    ],
    answer: 0,
    explanation:
      "플래너는 ANALYZE가 표본으로 모아 둔 통계로 행 수를 추측한다. 대량으로 바꾼 직후에는 통계가 옛것이라 예상이 크게 틀리고, ANALYZE 뒤에는 예상이 맞아져 Seq Scan으로 바뀌었다. 인덱스를 다시 만들거나 VACUUM FULL을 하는 건 원인과 상관없다.",
    anchor: "인덱스가-있는데-안-타는-경우",
  },
  {
    id: "db-index-pitfalls-4",
    post: "db-index-pitfalls",
    question: "같은 (status, created_at) 인덱스가 있는데 status = 'pending'은 인덱스를 타고 status = 'delivered'는 Seq Scan이 나온다. 왜 그럴까?",
    choices: [
      "delivered는 인덱스에 들어가지 않는 값이라서",
      "delivered 행은 VACUUM이 아직 안 돌아서",
      "인덱스는 문자열 첫 글자가 p인 값만 정렬해서",
      "delivered가 전체의 80%라 처음부터 순서대로 읽는 비용이 더 싸서",
    ],
    answer: 3,
    explanation:
      "결과가 테이블의 큰 부분이면 인덱스로 하나씩 찾아가는 것보다 페이지를 처음부터 순서대로 읽는 편이 싸다. 플래너는 random_page_cost 같은 설정이 들어간 비용으로 판단한다. 이런 컬럼은 단독 인덱스보다 복합 인덱스나 부분 인덱스로 쓰는 게 낫다.",
    anchor: "인덱스가-있는데-안-타는-경우",
  },
  {
    id: "db-index-pitfalls-5",
    post: "db-index-pitfalls",
    question: "CREATE INDEX CONCURRENTLY가 중간에 실패했다. 테이블에는 무엇이 남나?",
    choices: [
      "아무것도 남지 않고 자동으로 정리된다",
      "쓸 수 없는(INVALID) 인덱스가 남아 조회에는 안 쓰이면서 쓰기 비용은 계속 든다",
      "만들다 만 인덱스가 조회에 쓰여 결과가 틀린다",
      "테이블 전체가 잠긴 채로 남는다",
    ],
    answer: 1,
    explanation:
      "CONCURRENTLY는 쓰기를 막지 않는 대신 실패하면 인덱스가 INVALID 상태로 남는다. 플래너는 이 인덱스를 쓰지 않지만 행을 쓸 때마다 함께 고친다. pg_index.indisvalid로 찾아 DROP INDEX CONCURRENTLY로 지우고 다시 만든다.",
    anchor: "운영-중인-테이블에-인덱스-추가하기",
  },
];
