import type { QuizQuestion } from "../types";

export const SQL_AGGREGATION_PITFALLS: QuizQuestion[] = [
  {
    id: "sql-aggregation-pitfalls-1",
    post: "sql-aggregation-pitfalls",
    question:
      "score가 90, 70, NULL, 85, NULL, 95, NULL, 60, NULL인 9행에서 `avg(score)`의 결과는?",
    choices: ["44.44", "80", "44", "NULL"],
    answer: 1,
    explanation:
      "avg는 NULL을 건너뛰어 400을 NULL이 아닌 값 5개로 나눈다. 44.44는 0으로 채운 avg(coalesce(score, 0))이고, 44는 sum(score) / count(*)의 정수 나눗셈 결과다.",
    anchor: "같은-아홉-줄을-세는-방법이-셋이다",
  },
  {
    id: "sql-aggregation-pitfalls-2",
    post: "sql-aggregation-pitfalls",
    question: "PostgreSQL에서 integer 컬럼의 `sum(score) / count(*)`가 44.44가 아니라 44인 이유는?",
    choices: [
      "sum과 count가 bigint라 정수 나눗셈으로 소수점 아래가 버려져서",
      "sum이 NULL을 0으로 바꿔서",
      "count(*)가 NULL 행을 빼고 세서",
      "결과 표시 형식이 기본으로 소수를 숨겨서",
    ],
    answer: 0,
    explanation:
      "sum(integer)과 count는 bigint를 돌려주고, PostgreSQL에서 정수끼리 나누면 정수가 된다. 한쪽을 ::numeric으로 바꾸거나 numeric을 돌려주는 avg를 쓴다.",
    anchor: "평균이-둘로-갈라진-이유",
  },
  {
    id: "sql-aggregation-pitfalls-3",
    post: "sql-aggregation-pitfalls",
    question:
      "수강 기록이 없는 jung에 대해 `students LEFT JOIN enrollments ... GROUP BY s.id`에서 `count(*)`와 `count(e.id)`는?",
    choices: ["0과 0", "1과 1", "1과 0", "0과 1"],
    answer: 2,
    explanation:
      "LEFT JOIN은 짝 없는 왼쪽 행을 오른쪽 컬럼이 NULL인 한 줄로 남기고, count(*)는 그 줄도 센다. count(e.id)는 NULL을 건너뛰어 0이 된다.",
    anchor: "left-join-뒤의-count는-0을-세지-못한다",
  },
  {
    id: "sql-aggregation-pitfalls-4",
    post: "sql-aggregation-pitfalls",
    question:
      "강의별 환불 건수를 `WHERE status = 'refunded' GROUP BY course_id`로 셌더니 환불이 없는 강의가 결과에서 사라졌다. 0건으로 남기려면?",
    choices: [
      "HAVING count(*) >= 0을 붙인다",
      "count(*)를 count(status)로 바꾼다",
      "ORDER BY course_id를 붙인다",
      "count(*) FILTER (WHERE status = 'refunded')로 바꾸고 WHERE를 뺀다",
    ],
    answer: 3,
    explanation:
      "WHERE는 묶기 전에 행을 지워서 환불 행이 없는 강의는 묶음이 생기지 않는다. FILTER는 그 집계에 들어갈 행만 골라서 그룹은 남기고 0을 센다.",
    anchor: "조건별로-세면-where와-filter가-다른-행을-지운다",
  },
  {
    id: "sql-aggregation-pitfalls-5",
    post: "sql-aggregation-pitfalls",
    question:
      "`count(CASE WHEN status = 'completed' THEN 1 ELSE 0 END)`가 완료 건수가 아니라 전체 행 수를 낸 이유는?",
    choices: [
      "count는 값이 NULL이 아니면 세는데 0도 NULL이 아니어서",
      "CASE가 집계보다 나중에 계산돼서",
      "status 컬럼에 인덱스가 없어서",
      "ELSE가 있으면 CASE가 항상 1을 돌려줘서",
    ],
    answer: 0,
    explanation:
      "count(식)은 값을 보지 않고 NULL이 아닌지만 본다. ELSE 0을 지우거나 count를 sum으로 바꾸거나 FILTER를 쓰면 완료 건수가 나온다.",
    anchor: "else-0을-붙인-count는-전부를-센다",
  },
  {
    id: "sql-aggregation-pitfalls-6",
    post: "sql-aggregation-pitfalls",
    question:
      "kim의 점수가 90, 70일 때 `WHERE score >= 80 ... avg(score)`와 `HAVING avg(score) >= 80`의 kim 결과는?",
    choices: [
      "둘 다 80.0",
      "둘 다 90.0",
      "WHERE 쪽은 90.0, HAVING 쪽은 80.0",
      "WHERE 쪽에서는 kim이 빠진다",
    ],
    answer: 2,
    explanation:
      "WHERE는 집계 대상을 바꿔서 70점을 미리 지우고 90점 하나로 평균을 낸다. HAVING은 90과 70의 평균 80으로 그룹을 고른 뒤 그 값을 보여 준다.",
    anchor: "where에-쓸지-having에-쓸지는-숫자로-정한다",
  },
  {
    id: "sql-aggregation-pitfalls-7",
    post: "sql-aggregation-pitfalls",
    question:
      "PostgreSQL에서 `SELECT e.student_id, s.name, count(*) FROM enrollments e JOIN students s ON s.id = e.student_id GROUP BY e.student_id`의 결과는?",
    choices: [
      "조인 조건으로 같다는 게 보장되니 정상 실행된다",
      "s.name 자리에 아무 이름이나 하나가 나온다",
      "s.name이 NULL로 나온다",
      "s.name must appear in the GROUP BY clause 에러가 난다",
    ],
    answer: 3,
    explanation:
      "PostgreSQL은 묶은 컬럼이 그 테이블의 기본 키일 때만 같은 테이블의 다른 컬럼을 허용한다. e.student_id는 students의 기본 키가 아니라서 GROUP BY s.id로 묶어야 한다.",
    anchor: "group-by에는-무엇을-적어야-하나",
  },
];
