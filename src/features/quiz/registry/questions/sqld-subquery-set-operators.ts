import type { QuizQuestion } from "../types";

export const SQLD_SUBQUERY_SET_OPERATORS: QuizQuestion[] = [
  {
    id: "sqld-subquery-set-operators-1",
    post: "sqld-subquery-set-operators",
    question:
      "EMP 14명 중 KING의 MGR만 NULL이다. 다음 SQL의 결과로 옳은 것은?\nSELECT COUNT(*) FROM emp WHERE empno NOT IN (SELECT mgr FROM emp);",
    choices: ["0", "8", "6", "오류가 난다"],
    answer: 0,
    explanation:
      "NOT IN은 목록의 모든 값과 <>로 비교해 AND로 잇는데, NULL과의 비교는 UNKNOWN이라 어떤 행도 참이 되지 못한다. 그래서 부하가 없는 8명이 아니라 0이 나온다. 서브쿼리에 WHERE mgr IS NOT NULL을 붙이거나 NOT EXISTS로 바꾸면 8이 된다.",
    anchor: "not-in에-null이-하나-섞이면",
  },
  {
    id: "sqld-subquery-set-operators-2",
    post: "sqld-subquery-set-operators",
    question:
      "30번 부서의 급여는 950, 1250, 1250, 1500, 1600, 2850이다. 다음 조건과 같은 뜻인 것은?\nWHERE sal > ALL (SELECT sal FROM emp WHERE deptno = 30)",
    choices: ["sal > 950", "sal > 2850", "sal > 1566.67 (평균)", "sal IN (950, 1250, 1500, 1600, 2850)"],
    answer: 1,
    explanation:
      "> ALL은 목록의 모든 값보다 커야 하니 최댓값 2850보다 크다는 뜻이다. sal > 950은 최솟값보다 크다는 > ANY의 뜻이다. 실제로 이 조건을 만족하는 사람은 JONES, SCOTT, FORD, KING 네 명이다.",
    anchor: "any와-all은-최솟값과-최댓값으로-바꿔-읽는다",
  },
  {
    id: "sqld-subquery-set-operators-3",
    post: "sqld-subquery-set-operators",
    question:
      "DEPT에는 10, 20, 30, 40번 부서가 있고, EMP에는 10, 20, 30번 부서 사원만 있다. 다음 SQL의 결과는?\nSELECT COUNT(*) FROM dept d\nWHERE NOT EXISTS (SELECT 1 FROM emp e WHERE e.deptno = d.deptno);",
    choices: ["0", "3", "4", "1"],
    answer: 3,
    explanation:
      "NOT EXISTS는 바깥 행마다 상관 서브쿼리를 확인해 맞는 행이 하나도 없을 때 참이다. 사원이 없는 40번 OPERATIONS 한 부서만 남는다. 서브쿼리의 SELECT 1은 무엇을 돌려주든 결과에 영향이 없다.",
    anchor: "exists는-있는지만-본다",
  },
  {
    id: "sqld-subquery-set-operators-4",
    post: "sqld-subquery-set-operators",
    question: "WHERE deptno = (SELECT deptno FROM dept WHERE loc IN ('DALLAS', 'CHICAGO'))를 실행하면?",
    choices: [
      "두 부서의 사원이 모두 나온다",
      "첫 번째 부서의 사원만 나온다",
      "서브쿼리가 두 행을 돌려줘서 오류가 난다",
      "0행이 나온다",
    ],
    answer: 2,
    explanation:
      "=는 값 하나와 비교하는 단일행 연산자라 서브쿼리가 두 행(20, 30)을 돌려주면 실행 중에 오류가 난다. 여러 행일 수 있으면 IN이나 = ANY 같은 다중행 연산자를 쓴다.",
    anchor: "몇-줄이-돌아오느냐로-연산자가-바뀐다",
  },
  {
    id: "sqld-subquery-set-operators-5",
    post: "sqld-subquery-set-operators",
    question: "PostgreSQL에서 NOT IN (SELECT ...) 쿼리의 실행 계획에 Filter: (NOT (SubPlan 1))과 loops=20000이 보이고 1분 가까이 걸린다. 가장 알맞은 처리는?",
    choices: [
      "서브쿼리에 ORDER BY를 붙인다",
      "NOT EXISTS로 바꿔 Hash Anti Join이 되게 한다",
      "IN으로 바꾸고 결과에서 빼 준다",
      "바깥 테이블에 DISTINCT를 붙인다",
    ],
    answer: 1,
    explanation:
      "PostgreSQL은 NULL 규칙 때문에 NOT IN을 안티 조인으로 바꾸지 못하고, 해시가 메모리에 안 들어가면 바깥 행마다 서브쿼리 결과를 다시 훑는다. NOT EXISTS는 Hash Anti Join으로 한 번에 처리되고 NULL 함정도 없다. 예제에서 약 60초가 12ms가 됐다.",
    anchor: "현장에서-not-in이-느려지는-순간",
  },
];
