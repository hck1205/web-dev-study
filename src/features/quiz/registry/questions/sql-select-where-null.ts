import type { QuizQuestion } from "../types";

export const SQL_SELECT_WHERE_NULL: QuizQuestion[] = [
  {
    id: "sql-select-where-null-1",
    post: "sql-select-where-null",
    question: "phone이 NULL인 행이 있는 테이블에서 WHERE phone <> '010-1111-2222'를 실행하면 NULL인 행은 어떻게 되나?",
    choices: [
      "'다르다'로 판단되어 결과에 포함된다",
      "비교 결과가 UNKNOWN이라 결과에서 빠진다",
      "에러가 나서 쿼리가 실패한다",
      "빈 문자열로 바뀌어 비교된다",
    ],
    answer: 1,
    explanation:
      "NULL과의 비교는 참도 거짓도 아닌 UNKNOWN이고, WHERE는 참인 행만 남긴다. 그래서 번호가 없는 회원이 조용히 빠지고, 포함하려면 OR phone IS NULL을 붙여야 한다.",
    anchor: "null은-값이-아니라-모른다는-표시",
  },
  {
    id: "sql-select-where-null-2",
    post: "sql-select-where-null",
    question: "WHERE id NOT IN (1, 2, NULL)의 결과는?",
    choices: [
      "id가 1, 2가 아닌 모든 행",
      "id가 NULL인 행만",
      "에러",
      "0행",
    ],
    answer: 3,
    explanation:
      "NOT IN은 id <> 1 AND id <> 2 AND id <> NULL로 풀리고, 마지막 비교가 늘 UNKNOWN이라 어떤 행도 참이 되지 못한다. NULL이 섞일 수 있는 서브쿼리에는 NOT EXISTS를 쓴다.",
    anchor: "null은-값이-아니라-모른다는-표시",
  },
  {
    id: "sql-select-where-null-3",
    post: "sql-select-where-null",
    question: "SELECT name, price * 1.1 AS with_tax FROM products WHERE with_tax > 10000이 에러가 나는 이유는?",
    choices: [
      "계산식에는 별칭을 붙일 수 없어서",
      "WHERE가 SELECT보다 먼저 처리되어 별칭이 아직 없어서",
      "numeric 컬럼에 소수를 곱할 수 없어서",
      "AS를 생략해야 해서",
    ],
    answer: 1,
    explanation:
      "처리 순서는 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY 순이라 WHERE 시점에는 SELECT의 별칭이 없다. 반대로 ORDER BY는 SELECT 뒤라 별칭을 쓸 수 있다.",
    anchor: "select-한-문장을-조각으로-읽기",
  },
  {
    id: "sql-select-where-null-4",
    post: "sql-select-where-null",
    question: "WHERE stock = 0 OR price > 30000 AND stock > 0에서 재고가 0인 상품이 결과에 섞여 나오는 이유는?",
    choices: [
      "AND가 OR보다 먼저 묶여 stock = 0 OR (price > 30000 AND stock > 0)이 되기 때문이다",
      "OR가 AND보다 먼저 묶여 (stock = 0 OR price > 30000) AND stock > 0이 되기 때문이다",
      "조건을 왼쪽부터 차례로 계산해서 앞의 조건이 우선하기 때문이다",
      "stock이 integer라서 0이 NULL로 바뀌기 때문이다",
    ],
    answer: 0,
    explanation:
      "우선순위는 NOT, AND, OR 순이라 괄호가 없으면 AND가 먼저 묶인다. 그래서 stock = 0인 행은 뒤의 조건과 상관없이 참이 된다. 의도대로 하려면 (stock = 0 OR price > 30000) AND stock > 0처럼 괄호를 친다.",
    anchor: "원하는-행만-고르는-where",
  },
  {
    id: "sql-select-where-null-5",
    post: "sql-select-where-null",
    question: "PostgreSQL에서 ORDER BY phone(오름차순)을 하면 phone이 NULL인 행은 어디에 오나?",
    choices: [
      "맨 앞에 온다",
      "넣은 순서대로 섞여서 온다",
      "맨 뒤에 온다",
      "결과에서 빠진다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL과 Oracle은 NULL을 가장 큰 값처럼 다뤄서 오름차순이면 맨 뒤, 내림차순이면 맨 앞에 둔다. SQL Server와 MySQL은 반대로 가장 작은 값처럼 다룬다. NULLS FIRST, NULLS LAST로 직접 정할 수도 있다.",
    anchor: "정렬하고-겹친-것-빼고-잘라서-보기",
  },
  {
    id: "sql-select-where-null-6",
    post: "sql-select-where-null",
    question: "회원 4명 중 2명이 전화번호가 NULL일 때 SELECT count(*), count(phone) FROM users의 결과는?",
    choices: [
      "4, 4",
      "2, 4",
      "4, 0",
      "4, 2",
    ],
    answer: 3,
    explanation:
      "count(*)는 행 수를 세고, count(컬럼)은 그 컬럼이 NULL이 아닌 행만 센다. 둘의 차이가 NULL인 행 수라서, 리포트 숫자가 안 맞을 때 가장 먼저 나란히 세어 본다.",
    anchor: "리포트-숫자가-안-맞을-때-먼저-보는-것",
  },
];
