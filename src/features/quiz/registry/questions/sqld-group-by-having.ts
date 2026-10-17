import type { QuizQuestion } from "../types";

export const SQLD_GROUP_BY_HAVING: QuizQuestion[] = [
  {
    id: "sqld-group-by-having-1",
    post: "sqld-group-by-having",
    question:
      "EMP 14명 중 COMM은 4명만 값이 있고, MGR은 KING만 NULL이며 상사는 6명이다. SELECT COUNT(*), COUNT(comm), COUNT(DISTINCT mgr) FROM emp 의 결과는?",
    choices: ["14, 4, 7", "14, 14, 6", "14, 4, 6", "13, 4, 6"],
    answer: 2,
    explanation:
      "COUNT(*)는 NULL과 상관없이 행 수 14를 센다. COUNT(comm)은 NULL을 빼서 4, COUNT(DISTINCT mgr)도 NULL을 빼고 서로 다른 상사 번호 6개를 센다. GROUP BY mgr로 묶으면 NULL 묶음까지 7행이 나오는 것과 헷갈리기 쉽다.",
    anchor: "여러-행을-하나로-줄이는-집계-함수",
  },
  {
    id: "sqld-group-by-having-2",
    post: "sqld-group-by-having",
    question:
      "COMM 합계는 2200이고 값이 있는 행은 4개, 전체는 14행이다. SELECT ROUND(AVG(comm)), ROUND(AVG(NVL(comm, 0))) FROM emp 의 결과는?",
    choices: ["157, 157", "550, 157", "550, 550", "NULL, 157"],
    answer: 1,
    explanation:
      "AVG는 NULL인 행을 분자와 분모에서 모두 빼서 2200 / 4 = 550이다. NVL로 NULL을 0으로 바꾸면 14행이 모두 분모에 들어가 2200 / 14 = 157.14가 된다.",
    anchor: "여러-행을-하나로-줄이는-집계-함수",
  },
  {
    id: "sqld-group-by-having-3",
    post: "sqld-group-by-having",
    question: "다음 중 에러가 나는 SQL은?",
    choices: [
      "SELECT deptno, SUM(sal) FROM emp GROUP BY deptno HAVING SUM(sal) > 9000",
      "SELECT SUM(sal) FROM emp GROUP BY deptno",
      "SELECT ename FROM emp ORDER BY sal",
      "SELECT deptno, SUM(sal) FROM emp WHERE SUM(sal) > 9000 GROUP BY deptno",
    ],
    answer: 3,
    explanation:
      "WHERE는 GROUP BY보다 먼저 실행되어 아직 묶음이 없으니 집계 함수를 쓸 수 없다. 집계 결과로 거르는 조건은 HAVING에 둔다. GROUP BY 컬럼을 SELECT에서 빼는 것과, SELECT에 없는 컬럼으로 정렬하는 것은 문제가 없다.",
    anchor: "묶은-다음에-거르는-having",
  },
  {
    id: "sqld-group-by-having-4",
    post: "sqld-group-by-having",
    question:
      "10번 부서는 CLARK 2450, KING(PRESIDENT) 5000, MILLER 1300이다. SELECT deptno FROM emp WHERE job <> 'PRESIDENT' GROUP BY deptno HAVING AVG(sal) >= 2000 의 결과로 나오는 부서는? (20번 평균 2175, 30번 평균 1566.67)",
    choices: ["10, 20", "결과 없음", "10, 20, 30", "20"],
    answer: 3,
    explanation:
      "WHERE가 먼저 KING을 빼서 10번 부서 평균은 (2450 + 1300) / 2 = 1875가 된다. HAVING은 묶은 뒤 평균으로 거르므로 2175인 20번만 남는다. WHERE가 없다면 10번도 평균 2916.67로 통과한다.",
    anchor: "묶은-다음에-거르는-having",
  },
  {
    id: "sqld-group-by-having-5",
    post: "sqld-group-by-having",
    question: "사원이 없는 40번 부서에 대해 SELECT COUNT(*), SUM(sal) FROM emp WHERE deptno = 40 을 실행하면?",
    choices: ["0행이 나온다", "1행: 0, 0", "1행: NULL, NULL", "1행: 0, NULL"],
    answer: 3,
    explanation:
      "GROUP BY가 없으면 테이블 전체가 한 묶음이라 행이 없어도 결과는 한 행이다. COUNT는 0을, SUM은 더할 값이 없어서 NULL을 돌려준다. 같은 쿼리에 GROUP BY deptno를 붙이면 묶음이 만들어지지 않아 0행이 된다.",
    anchor: "행이-없어도-한-줄은-나온다",
  },
  {
    id: "sqld-group-by-having-6",
    post: "sqld-group-by-having",
    question:
      "30번 부서의 COMM은 300, 500, 1400, 0, NULL, NULL이다. Oracle에서 SELECT ename FROM emp WHERE deptno = 30 ORDER BY comm DESC 의 첫 행은?",
    choices: ["COMM이 NULL인 사원", "COMM이 1400인 MARTIN", "COMM이 0인 TURNER", "SQL Server와 같은 순서라 MARTIN"],
    answer: 0,
    explanation:
      "Oracle은 NULL을 가장 큰 값처럼 다뤄서 오름차순이면 맨 뒤, 내림차순이면 맨 앞에 둔다. 그래서 DESC 정렬의 첫 행은 COMM이 NULL인 사원이다. SQL Server는 NULL을 가장 작은 값으로 보아 반대로 동작한다.",
    anchor: "order-by에서-헷갈리는-것들",
  },
  {
    id: "sqld-group-by-having-7",
    post: "sqld-group-by-having",
    question: "Oracle에서 SELECT ename, sal * 12 AS annual FROM emp ... 의 별칭 annual을 쓸 수 있는 절은?",
    choices: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: 3,
    explanation:
      "논리적 실행 순서는 FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY다. 별칭은 SELECT에서 생기므로 그 뒤인 ORDER BY에서만 쓸 수 있다. PostgreSQL은 GROUP BY에서 별칭을 봐주지만 시험은 Oracle 기준이다.",
    anchor: "sql은-적은-순서대로-실행되지-않는다",
  },
];
