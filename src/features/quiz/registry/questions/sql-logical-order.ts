import type { QuizQuestion } from "../types";

export const SQL_LOGICAL_ORDER: QuizQuestion[] = [
  {
    id: "sql-logical-order-1",
    post: "sql-logical-order",
    question:
      "PostgreSQL에서 `SELECT student_id, count(*) AS done FROM enrollments GROUP BY student_id HAVING done >= 2`를 실행하면?",
    choices: [
      "2건 이상인 수강생이 나온다",
      "HAVING이 무시되고 모든 수강생이 나온다",
      "aggregate functions are not allowed in HAVING 에러가 난다",
      "column \"done\" does not exist 에러가 난다",
    ],
    answer: 3,
    explanation:
      "별칭 done은 SELECT 단계에서 생기는데 HAVING은 그보다 앞이라 아직 이름이 없다. MySQL 8은 HAVING에서 별칭을 받아 주지만 PostgreSQL은 막아서, 이식할 쿼리라면 HAVING count(*) >= 2처럼 식을 그대로 쓴다.",
    anchor: "별칭은-select를-지나야-생긴다",
  },
  {
    id: "sql-logical-order-2",
    post: "sql-logical-order",
    question:
      "`SELECT date_trunc('month', enrolled_at) AS enrolled_at, count(*) FROM enrollments GROUP BY enrolled_at`이 월별 세 줄이 아니라 원본 행 수만큼 나온 이유는?",
    choices: [
      "date_trunc가 timestamptz에서 시간대를 무시해서",
      "GROUP BY는 이름이 겹치면 출력 컬럼이 아니라 입력 컬럼(원래 시각)으로 읽어서",
      "count(*)가 GROUP BY보다 먼저 계산돼서",
      "ORDER BY가 없어서 묶음이 합쳐지지 않아서",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 이름이 겹치면 GROUP BY는 입력 컬럼으로, ORDER BY는 출력 컬럼으로 읽는다. 그래서 잘리기 전의 시각으로 묶여 묶음마다 1이 나오고, 별칭을 month처럼 다르게 지으면 고쳐진다.",
    anchor: "같은-이름이면-group-by는-원래-컬럼을-고른다",
  },
  {
    id: "sql-logical-order-3",
    post: "sql-logical-order",
    question: "수강생마다 최근 수강 한 건을 row_number()로 고르려 한다. 올바른 방법은?",
    choices: [
      "WHERE row_number() OVER (...) = 1",
      "HAVING row_number() OVER (...) = 1",
      "서브쿼리 안에서 row_number()를 계산하고 바깥 쿼리의 WHERE에서 rn = 1로 거른다",
      "SELECT에서 AS rn으로 이름을 붙이고 같은 쿼리의 WHERE rn = 1로 거른다",
    ],
    answer: 2,
    explanation:
      "윈도 함수는 WHERE, GROUP BY, HAVING이 끝난 뒤 SELECT 단계에서 계산되므로 같은 쿼리의 WHERE나 HAVING에서는 값이 존재하지 않는다. 한 단계 감싸면 안쪽에서 계산이 끝난 결과를 바깥 WHERE가 거를 수 있다.",
    anchor: "윈도-함수는-having보다-늦다",
  },
  {
    id: "sql-logical-order-4",
    post: "sql-logical-order",
    question:
      "`SELECT DISTINCT student_id FROM enrollments ORDER BY enrolled_at DESC`가 에러가 나는 이유는?",
    choices: [
      "DISTINCT가 ORDER BY보다 먼저 겹친 행을 합쳐서, 합쳐진 행의 enrolled_at을 하나로 정할 수 없어서",
      "DISTINCT와 ORDER BY는 한 쿼리에 함께 쓸 수 없어서",
      "enrolled_at에 인덱스가 없어서",
      "timestamptz 컬럼은 DESC로 정렬할 수 없어서",
    ],
    answer: 0,
    explanation:
      "DISTINCT가 끝나면 student_id만 남고, 한 수강생의 여러 수강 시각 중 어느 값으로 정렬할지 정할 수 없다. GROUP BY student_id와 max(enrolled_at)으로 기준을 정해 주면 된다.",
    anchor: "distinct는-정렬보다-먼저-겹친-걸-뺀다",
  },
  {
    id: "sql-logical-order-5",
    post: "sql-logical-order",
    question:
      "수강 건수가 1번 3건, 2·3·4번이 각 2건일 때 `ORDER BY cnt DESC LIMIT 2`의 두 번째 줄에 대해 맞는 것은?",
    choices: [
      "항상 student_id가 가장 작은 2번이다",
      "항상 INSERT 순서가 가장 빠른 수강생이다",
      "2, 3, 4번 중 어느 것이 나올지 보장되지 않는다",
      "동점이 있으면 PostgreSQL은 에러를 낸다",
    ],
    answer: 2,
    explanation:
      "정렬 값이 같은 행끼리의 순서는 SQL이 정해 주지 않아서 실행 계획이나 데이터에 따라 바뀐다. ORDER BY cnt DESC, student_id처럼 유일한 컬럼을 붙이거나, 동점을 모두 받으려면 FETCH FIRST 2 ROWS WITH TIES를 쓴다.",
    anchor: "limit은-맨-끝이고-동점은-정해-주지-않으면-운이다",
  },
  {
    id: "sql-logical-order-6",
    post: "sql-logical-order",
    question:
      "`SELECT CASE WHEN count(*) > 100 THEN sum(100 / score) END FROM enrollments`가 9건뿐인데도 score가 0인 행 때문에 division by zero를 낸 이유는?",
    choices: [
      "CASE는 THEN 쪽을 항상 먼저 계산해서",
      "count(*)가 NULL을 세지 않아서",
      "PostgreSQL은 정수 나눗셈을 지원하지 않아서",
      "집계 sum(100 / score)는 CASE가 평가되는 SELECT 단계보다 앞인 묶기 단계에서 이미 계산돼서",
    ],
    answer: 3,
    explanation:
      "CASE가 조건을 볼 때는 집계가 이미 끝나 있어서 집계 안의 식을 막지 못한다. nullif(score, 0)이나 FILTER처럼 집계 안에서 막아야 한다.",
    anchor: "집계는-case보다-먼저-끝난다",
  },
  {
    id: "sql-logical-order-7",
    post: "sql-logical-order",
    question:
      "20만 행 테이블에서 `ORDER BY enrolled_at DESC LIMIT 5`의 계획이 Limit 아래 Index Scan Backward(actual rows=5)로 나왔다. 무슨 뜻인가?",
    choices: [
      "정렬된 인덱스를 뒤에서부터 다섯 줄만 읽고 멈췄다",
      "20만 행을 모두 정렬한 뒤 다섯 줄을 남겼다",
      "LIMIT이 ORDER BY보다 먼저 적용돼 결과가 틀릴 수 있다",
      "인덱스가 깨져서 거꾸로 읽었다",
    ],
    answer: 0,
    explanation:
      "논리 순서는 결과의 의미를 정할 뿐이고 플래너는 같은 결과를 더 싸게 내는 방법을 고른다. 같은 순서의 인덱스가 있으면 정렬을 건너뛰고 LIMIT만큼만 읽으며, 결과는 논리 순서대로 계산한 것과 같다.",
    anchor: "논리-순서와-실제-실행은-다르다",
  },
];
