import type { QuizQuestion } from "../types";

export const SQL_QUERY_REWRITE: QuizQuestion[] = [
  {
    id: "sql-query-rewrite-1",
    post: "sql-query-rewrite",
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
    id: "sql-query-rewrite-2",
    post: "sql-query-rewrite",
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
    id: "sql-query-rewrite-3",
    post: "sql-query-rewrite",
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
    id: "sql-query-rewrite-4",
    post: "sql-query-rewrite",
    question: "주문 20건 목록을 띄우는 화면에서 ORM이 주문마다 order.getUser(), order.getProduct()를 부른다. DB로 나가는 쿼리는 몇 개인가?",
    choices: [
      "1개",
      "41개",
      "21개",
      "3개",
    ],
    answer: 1,
    explanation:
      "목록 쿼리 1번에, 주문 20건마다 회원과 상품을 한 번씩 더 찾아 1 + 20 × 2 = 41번이다. 쿼리 하나하나는 빨라 슬로 로그에 안 남지만 왕복이 41번 쌓인다. 조인 한 번이나 id를 모은 = ANY 조회로 줄인다.",
    anchor: "목록-하나에-쿼리-41개",
  },
  {
    id: "sql-query-rewrite-5",
    post: "sql-query-rewrite",
    question: "목록 화면에 '다음 페이지' 버튼만 있으면 될 때, 전체 count(*) 대신 쓸 수 있는 방법으로 가장 알맞은 것은?",
    choices: [
      "SELECT count(*)를 캐시 없이 매번 돌린다",
      "OFFSET을 크게 주어 마지막 페이지를 찾는다",
      "VACUUM을 돌려 행 수를 정확히 만든다",
      "LIMIT 21로 21건을 가져와 21번째가 있는지로 판단한다",
    ],
    answer: 3,
    explanation:
      "PostgreSQL은 MVCC 때문에 행 수를 저장해 두지 못해서 count(*)가 매번 전체를 센다. 다음 페이지가 있는지만 알면 되면 한 건 더 가져와 확인하면 충분하다. 대략적인 전체 수는 pg_class.reltuples나 EXPLAIN의 예상 행 수로 보여 준다.",
    anchor: "전체-개수-세기는-비싸다",
  },
];
