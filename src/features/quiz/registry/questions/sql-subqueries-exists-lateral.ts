import type { QuizQuestion } from "../types";

export const SQL_SUBQUERIES_EXISTS_LATERAL: QuizQuestion[] = [
  {
    id: "sql-subqueries-exists-lateral-1",
    post: "sql-subqueries-exists-lateral",
    question:
      "SELECT s.name, (SELECT e.course_id FROM enrollments e WHERE e.student_id = s.id) FROM students s가 개발 DB에서는 돌았는데 운영에서 에러가 났다. 가장 그럴듯한 이유는?",
    choices: [
      "운영 DB에는 enrollments 테이블에 인덱스가 없다",
      "운영 데이터에 수강 기록이 여러 개인 학생이 있어 서브쿼리가 두 줄 이상을 돌려줬다",
      "운영 데이터에 수강 기록이 없는 학생이 있어 서브쿼리가 0줄을 돌려줬다",
      "스칼라 서브쿼리는 SELECT 목록에 쓸 수 없다",
    ],
    answer: 1,
    explanation:
      "스칼라 서브쿼리는 두 줄 이상이면 more than one row returned 에러를 내는데, 실행 중 그 행을 만날 때 검사해서 데이터가 바뀌어야 터진다. 0줄은 에러가 아니라 NULL이 된다.",
    anchor: "값-하나-자리에는-값-하나만",
  },
  {
    id: "sql-subqueries-exists-lateral-2",
    post: "sql-subqueries-exists-lateral",
    question:
      "실행 계획에서 SubPlan 아래 Aggregate가 loops=1000, actual time=16.9ms로 나왔다. 이 부분이 쓴 시간은 대략 얼마인가?",
    choices: ["16.9ms", "1초", "17초", "알 수 없다, loops는 시간과 무관하다"],
    answer: 2,
    explanation:
      "actual time은 한 번 실행한 평균이라 실제 비용은 loops를 곱한 값이다. 16.9ms × 1000번이면 약 17초로, 강의별 평균 예제의 실행 시간 17177ms와 맞는다.",
    anchor: "한-번만-도는-서브쿼리-행마다-도는-서브쿼리",
  },
  {
    id: "sql-subqueries-exists-lateral-3",
    post: "sql-subqueries-exists-lateral",
    question:
      "\"그 강의의 평균보다 높은 수강\"을 상관 서브쿼리로 쓴 쿼리가 30만 건에서 17초 걸린다. 강의는 5개뿐이다. 가장 효과적인 고침은?",
    choices: [
      "강의별 평균을 GROUP BY로 미리 만든 결과에 조인한다",
      "서브쿼리에 LIMIT 1을 붙인다",
      "avg 대신 sum / count로 계산한다",
      "서브쿼리를 SELECT 목록으로 옮긴다",
    ],
    answer: 0,
    explanation:
      "평균은 다섯 개면 충분한데 상관 서브쿼리는 바깥 행마다 같은 평균을 다시 계산했다. 한 번 묶어 HashAggregate로 다섯 줄을 만들고 해시 조인하니 94ms가 됐다.",
    anchor: "한-번만-도는-서브쿼리-행마다-도는-서브쿼리",
  },
  {
    id: "sql-subqueries-exists-lateral-4",
    post: "sql-subqueries-exists-lateral",
    question:
      "WHERE EXISTS (...) OR s.city = 'daegu'의 실행 계획에 Semi Join 대신 hashed SubPlan이 나왔다. 왜인가?",
    choices: [
      "EXISTS는 원래 항상 SubPlan으로 실행된다",
      "city 컬럼에 인덱스가 없어서",
      "OR의 한쪽에 있는 서브쿼리는 조인으로 끌어올릴 수 없어서",
      "students 테이블이 너무 작아서",
    ],
    answer: 2,
    explanation:
      "AND로 이어진 EXISTS는 세미 조인으로 바뀌지만, OR의 한쪽이면 조인으로 표현할 수 없어 SubPlan이 된다. 해시 표가 work_mem에 들어가면 hashed SubPlan이라 괜찮고, 넘치면 행마다 도니 UNION으로 나누는 것을 검토한다.",
    anchor: "in과-exists는-조인이-된다",
  },
  {
    id: "sql-subqueries-exists-lateral-5",
    post: "sql-subqueries-exists-lateral",
    question: "NULL NOT IN (빈 목록)과 3 NOT IN (1, 2, NULL)의 결과로 맞는 것은?",
    choices: [
      "NULL, 참",
      "참, 알 수 없음(NULL)",
      "알 수 없음(NULL), 알 수 없음(NULL)",
      "거짓, 거짓",
    ],
    answer: 1,
    explanation:
      "비교할 값이 없으면 NOT IN은 바깥 값이 NULL이어도 참이다. 3 NOT IN (1, 2, NULL)은 3 <> NULL이 알 수 없음이라 AND 전체가 알 수 없음이 되고 WHERE에서 빠진다.",
    anchor: "not-in은-메모리-설정에-따라-계획이-바뀐다",
  },
  {
    id: "sql-subqueries-exists-lateral-6",
    post: "sql-subqueries-exists-lateral",
    question:
      "어제까지 150ms이던 NOT IN 쿼리가 데이터가 늘자 끝나지 않는다. 계획에서 확인할 것과 고칠 방법으로 알맞은 것은?",
    choices: [
      "Seq Scan이 Index Scan으로 바뀌었는지 보고 인덱스를 지운다",
      "Semi Join이 Hash Join으로 바뀌었는지 보고 통계를 갱신한다",
      "InitPlan이 생겼는지 보고 서브쿼리를 SELECT로 옮긴다",
      "hashed SubPlan이 그냥 SubPlan으로 바뀌었는지 보고 NOT EXISTS로 다시 쓴다",
    ],
    answer: 3,
    explanation:
      "NOT IN은 NULL 규칙 때문에 안티 조인이 되지 못하고, 서브쿼리 결과가 work_mem 안에 들면 해시 표로, 넘치면 바깥 행마다 목록을 훑는다. NOT EXISTS는 안티 조인이 되어 이 문제가 없다. work_mem을 올리는 건 모든 연결의 한도를 바꾸는 일이라 마지막 수단이다.",
    anchor: "not-in은-메모리-설정에-따라-계획이-바뀐다",
  },
  {
    id: "sql-subqueries-exists-lateral-7",
    post: "sql-subqueries-exists-lateral",
    question:
      "학생마다 최근 수강 1건의 제목과 시각을 붙이되, 수강 기록이 없는 학생도 결과에 남기려면 어떻게 쓰는가?",
    choices: [
      "FROM students s, (SELECT ... WHERE e.student_id = s.id LIMIT 1) last",
      "FROM students s LEFT JOIN LATERAL (SELECT ... WHERE e.student_id = s.id ORDER BY e.enrolled_at DESC LIMIT 1) last ON true",
      "FROM students s CROSS JOIN LATERAL (SELECT ... WHERE e.student_id = s.id ORDER BY e.enrolled_at DESC LIMIT 1) last",
      "SELECT 목록에 칸마다 스칼라 서브쿼리를 LIMIT 1로 넣는다",
    ],
    answer: 1,
    explanation:
      "LATERAL이 없으면 FROM의 서브쿼리가 s를 참조할 수 없어 에러가 난다. CROSS JOIN LATERAL은 서브쿼리가 0줄인 학생을 지우고, 칸마다 스칼라 서브쿼리를 쓰면 같은 조건을 두 번 실행한다. LEFT JOIN LATERAL ... ON true가 바깥 행을 남긴다.",
    anchor: "from-안에서-바깥을-보는-lateral",
  },
];
