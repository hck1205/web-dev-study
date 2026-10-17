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
      "다음 SQL을 실행한 결과로 옳은 것은? (10번 부서에는 3명, 40번 부서에는 0명이 있다)\nSELECT d.dname, (SELECT e.ename FROM emp e WHERE e.deptno = d.deptno) AS ename FROM dept d;",
    choices: [
      "부서마다 첫 번째 사원 이름이 나온다",
      "부서당 사원 수만큼 행이 늘어난다",
      "스칼라 서브쿼리가 여러 행을 돌려줘서 오류가 난다",
      "OPERATIONS 부서만 NULL로 나오고 나머지는 정상이다",
    ],
    answer: 2,
    explanation:
      "SELECT 절의 스칼라 서브쿼리는 한 행 한 컬럼만 돌려줘야 한다. 10번 부서처럼 사원이 여러 명이면 Oracle은 ORA-01427 오류를 낸다. 0행인 경우에만 NULL로 처리된다.",
    anchor: "select-절에는-값-하나만-들어간다",
  },
  {
    id: "sqld-subquery-set-operators-4",
    post: "sqld-subquery-set-operators",
    question:
      "10번 부서의 JOB은 CLERK, MANAGER, PRESIDENT이고 20번 부서의 JOB은 ANALYST, ANALYST, CLERK, CLERK, MANAGER이다. 다음 SQL의 결과 행 수는?\nSELECT job FROM emp WHERE deptno = 10\nUNION\nSELECT job FROM emp WHERE deptno = 20;",
    choices: ["8", "5", "4", "2"],
    answer: 2,
    explanation:
      "UNION은 두 결과를 이어 붙인 뒤 중복을 지운다. 남는 값은 ANALYST, CLERK, MANAGER, PRESIDENT 네 개다. 8은 중복을 지우지 않는 UNION ALL의 결과이고, 2는 INTERSECT의 결과다.",
    anchor: "결과를-위아래로-붙이는-집합-연산자",
  },
  {
    id: "sqld-subquery-set-operators-5",
    post: "sqld-subquery-set-operators",
    question: "Oracle에서 다음 SQL을 실행할 때 집합 연산의 계산 순서로 옳은 것은?\nA UNION B INTERSECT C",
    choices: [
      "B INTERSECT C를 먼저 계산한 뒤 A와 합친다",
      "A UNION B를 먼저 계산한 뒤 C와 교집합을 낸다",
      "집합 연산자를 세 개 이상 섞으면 오류가 난다",
      "옵티마이저가 비용에 따라 순서를 정한다",
    ],
    answer: 1,
    explanation:
      "Oracle은 모든 집합 연산자의 우선순위가 같아서 왼쪽부터 차례로 계산한다. PostgreSQL과 SQL Server는 표준대로 INTERSECT를 먼저 계산하므로 결과가 다를 수 있다. 예제 데이터에서는 PRESIDENT가 포함되느냐로 갈렸다.",
    anchor: "집합-연산자의-규칙",
  },
  {
    id: "sqld-subquery-set-operators-6",
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
    id: "sqld-subquery-set-operators-7",
    post: "sqld-subquery-set-operators",
    question: "집합 연산자에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "각 SELECT의 컬럼 수가 같아야 한다",
      "결과의 컬럼 이름은 첫 번째 SELECT를 따른다",
      "ORDER BY는 각 SELECT마다 따로 쓸 수 있다",
      "UNION ALL은 중복을 제거하지 않아 UNION보다 비용이 적다",
    ],
    answer: 2,
    explanation:
      "ORDER BY는 전체 결과를 정렬하는 것이라 맨 마지막에 한 번만 쓴다. 중간 SELECT에 쓰면 문법 오류가 난다. 마지막 ORDER BY에는 첫 번째 SELECT의 컬럼 이름이나 별칭, 위치 번호를 쓴다.",
    anchor: "집합-연산자의-규칙",
  },
];
