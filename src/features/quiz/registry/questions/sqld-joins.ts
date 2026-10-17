import type { QuizQuestion } from "../types";

export const SQLD_JOINS: QuizQuestion[] = [
  {
    id: "sqld-joins-1",
    post: "sqld-joins",
    question: "EMP는 14행, DEPT는 4행이다. SELECT COUNT(*) FROM emp, dept 의 결과는?",
    choices: ["14", "4", "18", "56"],
    answer: 3,
    explanation:
      "조인 조건 없이 테이블을 나열하면 모든 행의 조합인 카티션 곱이 만들어져 14 × 4 = 56행이 된다. N개 테이블을 제대로 조인하려면 조인 조건이 최소 N-1개 필요하다.",
    anchor: "모든-조합을-만드는-cross-join",
  },
  {
    id: "sqld-joins-2",
    post: "sqld-joins",
    question: "Oracle에서 SELECT e.deptno, e.ename FROM emp e JOIN dept d USING (deptno) 를 실행하면?",
    choices: ["14행이 나온다", "15행이 나온다", "USING에 쓴 컬럼에 별칭을 붙여 에러가 난다", "56행이 나온다"],
    answer: 2,
    explanation:
      "USING과 NATURAL JOIN의 공통 컬럼은 하나로 합쳐진 컬럼이라 Oracle에서는 앞에 테이블 별칭을 붙일 수 없다(ORA-25154). SELECT deptno처럼 별칭 없이 써야 한다. PostgreSQL은 이걸 허용해서 연습할 때 놓치기 쉽다.",
    anchor: "ansi-문법으로-쓰는-inner-join",
  },
  {
    id: "sqld-joins-3",
    post: "sqld-joins",
    question: "Oracle의 FROM dept d, emp e WHERE d.deptno = e.deptno(+) 와 같은 결과를 내는 것은?",
    choices: [
      "FROM dept d LEFT OUTER JOIN emp e ON d.deptno = e.deptno",
      "FROM dept d RIGHT OUTER JOIN emp e ON d.deptno = e.deptno",
      "FROM dept d INNER JOIN emp e ON d.deptno = e.deptno",
      "FROM dept d FULL OUTER JOIN emp e ON d.deptno = e.deptno",
    ],
    answer: 0,
    explanation:
      "(+)는 데이터가 모자라 NULL로 채워질 쪽에 붙인다. EMP 쪽에 붙었으니 DEPT의 모든 행이 남고, 이는 DEPT를 왼쪽에 둔 LEFT OUTER JOIN과 같다. (+)는 양쪽에 붙일 수 없어서 FULL OUTER JOIN은 표현하지 못한다.",
    anchor: "oracle-전통-문법의-outer-join-표기",
  },
  {
    id: "sqld-joins-4",
    post: "sqld-joins",
    question:
      "사무직(CLERK)은 10번 1명, 20번 2명, 30번 1명이고 40번 부서에는 사원이 없다. SELECT d.deptno, e.ename FROM dept d LEFT JOIN emp e ON e.deptno = d.deptno WHERE e.job = 'CLERK' 의 결과 행 수는?",
    choices: ["5", "4", "15", "14"],
    answer: 1,
    explanation:
      "LEFT JOIN으로 만든 40번의 NULL 행은 WHERE e.job = 'CLERK'에서 비교 결과가 UNKNOWN이 되어 지워진다. 그래서 사무직 4행만 남아 INNER JOIN과 같아진다. 조건을 ON에 두면 40번 행이 살아 5행이 된다.",
    anchor: "짝이-없는-행을-살리는-outer-join",
  },
  {
    id: "sqld-joins-5",
    post: "sqld-joins",
    question:
      "SELECT d.dname, COUNT(*) FROM dept d LEFT JOIN emp e ON e.deptno = d.deptno GROUP BY d.dname 에서 사원이 없는 OPERATIONS의 COUNT(*) 값은?",
    choices: ["0", "NULL", "1", "OPERATIONS 행은 나오지 않는다"],
    answer: 2,
    explanation:
      "LEFT JOIN은 OPERATIONS에 EMP 컬럼이 모두 NULL인 행 하나를 만든다. COUNT(*)는 NULL 여부와 상관없이 행을 세니 1이 된다. 사원 수 0을 얻으려면 COUNT(e.empno)처럼 오른쪽 컬럼을 센다.",
    anchor: "짝이-없는-행을-살리는-outer-join",
  },
  {
    id: "sqld-joins-6",
    post: "sqld-joins",
    question: "MGR은 KING만 NULL이다. SELECT COUNT(*) FROM emp e JOIN emp m ON e.mgr = m.empno 의 결과는?",
    choices: ["13", "14", "12", "196"],
    answer: 0,
    explanation:
      "SELF JOIN도 INNER JOIN이면 짝이 없는 행이 빠진다. 상사가 없는 KING은 mgr이 NULL이라 어떤 empno와도 같지 않아서 14명 중 13명만 남는다. 사장까지 보이려면 LEFT JOIN을 쓴다.",
    anchor: "자기-자신과-붙이는-self-join",
  },
  {
    id: "sqld-joins-7",
    post: "sqld-joins",
    question: "Hash Join에 대한 설명으로 옳은 것은?",
    choices: [
      "BETWEEN 같은 범위 조건 조인에도 쓸 수 있다",
      "선행 테이블의 행마다 안쪽 테이블의 인덱스를 탐색한다",
      "양쪽을 조인 키로 정렬한 뒤 나란히 병합한다",
      "작은 쪽으로 해시 테이블을 만들고, 등가(=) 조건 조인에만 쓰인다",
    ],
    answer: 3,
    explanation:
      "Hash Join은 작은 입력으로 해시 테이블을 만들고 큰 입력으로 짝을 찾는다. 해시는 값의 순서를 보존하지 않아 같은 값만 찾을 수 있으니 등가 조건에만 쓰인다. 행마다 인덱스를 탐색하는 건 Nested Loop, 정렬 후 병합은 Sort Merge다.",
    anchor: "db가-짝을-찾는-세-가지-방법",
  },
];
