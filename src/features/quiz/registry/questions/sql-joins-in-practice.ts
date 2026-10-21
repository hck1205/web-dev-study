import type { QuizQuestion } from "../types";

export const SQL_JOINS_IN_PRACTICE: QuizQuestion[] = [
  {
    id: "sql-joins-in-practice-1",
    post: "sql-joins-in-practice",
    question:
      "강의 하나에 수강 3건과 후기 2건이 있다. courses에 enrollments와 reviews를 함께 LEFT JOIN하고 GROUP BY c.id로 count(e.id)를 세면 몇이 나오나?",
    choices: ["3", "5", "6", "2"],
    answer: 2,
    explanation:
      "후기는 수강이 아니라 강의에 붙어 있어서 수강 세 줄이 후기 두 줄과 모두 짝을 지어 3 × 2 = 6줄이 된다. 서로 관계없는 자식 테이블 둘을 한 부모에 함께 붙이면 결과는 두 자식 수의 곱이다.",
    anchor: "행이-곱해지는-자리를-숫자로-찾는다",
  },
  {
    id: "sql-joins-in-practice-2",
    post: "sql-joins-in-practice",
    question: "조인으로 행이 곱해져 부풀어 오른 매출 합계를 고치는 방법으로 가장 알맞은 것은?",
    choices: [
      "sum(p.amount)를 sum(DISTINCT p.amount)로 바꾼다",
      "LEFT JOIN을 모두 INNER JOIN으로 바꾼다",
      "결과를 강의 수로 나눈다",
      "자식 테이블마다 부모 키로 먼저 집계한 뒤 붙인다",
    ],
    answer: 3,
    explanation:
      "먼저 묶으면 붙는 쪽이 부모 하나당 한 줄이라 곱이 생기지 않는다. sum(DISTINCT)는 값이 같은 서로 다른 결제를 하나로 합쳐 더 크게 틀리고, INNER JOIN은 짝 없는 강의를 지울 뿐 곱을 없애지 못한다.",
    anchor: "묶고-나서-붙인다",
  },
  {
    id: "sql-joins-in-practice-3",
    post: "sql-joins-in-practice",
    question:
      "students LEFT JOIN enrollments ... WHERE e.status <> 'refunded'의 EXPLAIN 맨 위 노드가 그냥 Hash Join으로 나왔다. 무슨 뜻인가?",
    choices: [
      "WHERE 조건 때문에 짝 없는 줄이 어차피 걸러지니 플래너가 바깥 조인을 안쪽 조인으로 줄였다",
      "통계가 낡아서 플래너가 조인 종류를 잘못 골랐다",
      "Hash Join은 LEFT JOIN을 표시하는 다른 이름이다",
      "enrollments에 인덱스가 없어서 바깥 조인을 할 수 없었다",
    ],
    answer: 0,
    explanation:
      "짝 없는 줄의 e.status는 NULL이고 NULL <> 'refunded'는 참이 될 수 없으니, PostgreSQL은 왼쪽만 남는 줄이 없다고 보고 LEFT JOIN을 INNER JOIN으로 바꾼다. 짝 없는 행이 필요했다면 조건을 ON으로 옮긴다.",
    anchor: "where-한-줄이-left-join을-지운다",
  },
  {
    id: "sql-joins-in-practice-4",
    post: "sql-joins-in-practice",
    question:
      "수강 기록이 없는 학생을 찾으려고 LEFT JOIN enrollments e ... WHERE e.score IS NULL로 썼더니 학생 다섯 명이 모두 나왔다. 왜인가?",
    choices: [
      "LEFT JOIN은 IS NULL 조건과 함께 쓸 수 없다",
      "score는 짝이 있어도 원래 NULL일 수 있어서 짝 없음과 값 없음을 구분하지 못한다",
      "IS NULL이 아니라 = NULL로 써야 한다",
      "score에 인덱스가 없어서 조건이 무시됐다",
    ],
    answer: 1,
    explanation:
      "채점 전인 수강은 score가 NULL이라 짝이 있는 학생도 걸린다. IS NULL은 기본 키나 조인 컬럼처럼 오른쪽에서 NULL이 될 수 없는 컬럼에 건다. = NULL은 언제나 알 수 없음이라 아무것도 고르지 못한다.",
    anchor: "짝이-없는-행을-찾는-세-가지-모양",
  },
  {
    id: "sql-joins-in-practice-5",
    post: "sql-joins-in-practice",
    question:
      "PostgreSQL 16에서 LEFT JOIN 안티 조인을 쓸 때 실행 계획에 Anti Join 노드가 나오게 하려면 IS NULL을 어느 컬럼에 거는가?",
    choices: [
      "오른쪽 테이블의 아무 NOT NULL 컬럼",
      "왼쪽 테이블의 기본 키",
      "ON에 쓴 오른쪽 테이블의 조인 컬럼",
      "어느 컬럼이든 같은 계획이 나온다",
    ],
    answer: 2,
    explanation:
      "PostgreSQL 16 플래너는 IS NULL이 걸린 컬럼이 조인 조건에 쓰인 컬럼일 때만 안티 조인으로 알아본다. 기본 키(e.id)에 걸면 결과는 같아도 짝을 모두 맞춘 뒤 Filter로 버리는 계획이 나왔다. 뜻이 분명한 NOT EXISTS가 가장 안전하다.",
    anchor: "짝이-없는-행을-찾는-세-가지-모양",
  },
  {
    id: "sql-joins-in-practice-6",
    post: "sql-joins-in-practice",
    question:
      "PostgreSQL에서 FULL JOIN ... ON p.paid_at BETWEEN e.enrolled_at AND e.enrolled_at + interval '1 minute'이 에러를 낸다. 이유는?",
    choices: [
      "FULL JOIN은 timestamptz 컬럼을 비교할 수 없다",
      "BETWEEN은 ON 절에 쓸 수 없다",
      "FULL JOIN은 MySQL에만 있는 문법이다",
      "PostgreSQL은 FULL JOIN을 Hash Join이나 Merge Join으로만 실행해서 등호 조건이 필요하다",
    ],
    answer: 3,
    explanation:
      "범위 조건만 있으면 해시나 정렬 병합으로 짝을 맞출 수 없어 FULL JOIN is only supported with merge-joinable or hash-joinable join conditions 에러가 난다. 등호 조건을 함께 쓰거나 LEFT JOIN과 오른쪽에만 있는 행을 UNION ALL로 붙인다. FULL JOIN이 없는 쪽은 오히려 MySQL이다.",
    anchor: "결제와-수강-기록-맞춰-보기",
  },
  {
    id: "sql-joins-in-practice-7",
    post: "sql-joins-in-practice",
    question:
      "같은 강의를 들은 수강생 짝을 셀프 조인으로 뽑을 때 eb.student_id > ea.student_id 조건을 넣는 이유는?",
    choices: [
      "자기 자신과의 짝과 (a, b)·(b, a)처럼 뒤집힌 중복을 함께 빼서 짝 하나를 한 줄로 만들려고",
      "인덱스를 타게 하려고",
      "NULL인 student_id를 빼려고",
      "셀프 조인은 부등호 조건이 없으면 문법 에러가 나서",
    ],
    answer: 0,
    explanation:
      "course_id만 같게 하면 자기 자신과의 짝과 뒤집힌 짝이 섞여 23줄이 나왔다. <>는 자기 자신만 빼서 14줄이고, >를 써야 짝 하나가 한 줄인 7줄이 된다.",
    anchor: "같은-테이블을-두-번-읽는-조인",
  },
];
