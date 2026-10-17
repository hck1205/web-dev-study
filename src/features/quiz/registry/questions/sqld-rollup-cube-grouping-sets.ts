import type { QuizQuestion } from "../types";

export const SQLD_ROLLUP_CUBE_GROUPING_SETS: QuizQuestion[] = [
  {
    id: "sqld-rollup-cube-grouping-sets-1",
    post: "sqld-rollup-cube-grouping-sets",
    question:
      "EMP에는 부서가 3종류, 직무가 5종류, 실제로 있는 (부서, 직무) 조합이 9종류다. 다음 SQL의 결과 행 수는?\nSELECT deptno, job, SUM(sal) FROM emp GROUP BY ROLLUP (deptno, job);",
    choices: ["9", "12", "13", "18"],
    answer: 2,
    explanation:
      "ROLLUP(deptno, job)은 (deptno, job), (deptno), () 세 단계를 집계한다. 9 + 3 + 1 = 13행이다. 18은 직무 소계 5행까지 더한 CUBE의 결과다.",
    anchor: "rollup은-오른쪽부터-하나씩-지운다",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-2",
    post: "sqld-rollup-cube-grouping-sets",
    question:
      "1번 문제와 같은 EMP에서 컬럼 순서만 바꾼 다음 SQL의 결과 행 수는?\nSELECT job, deptno, SUM(sal) FROM emp GROUP BY ROLLUP (job, deptno);",
    choices: ["13", "15", "18", "14"],
    answer: 1,
    explanation:
      "ROLLUP은 인자 순서대로 계층을 만들어 (job, deptno), (job), ()를 집계한다. 직무가 5종류라 9 + 5 + 1 = 15행이다. ROLLUP은 순서가 바뀌면 결과가 달라진다.",
    anchor: "rollup은-오른쪽부터-하나씩-지운다",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-3",
    post: "sqld-rollup-cube-grouping-sets",
    question:
      "같은 EMP에서 다음 SQL의 결과 행 수는?\nSELECT deptno, job, SUM(sal) FROM emp GROUP BY CUBE (deptno, job);",
    choices: ["18", "13", "15", "8"],
    answer: 0,
    explanation:
      "CUBE는 (deptno, job), (deptno), (job), () 네 묶음을 모두 만든다. 9 + 3 + 5 + 1 = 18행이다. 인자 순서를 바꿔도 같은 행들이 나온다.",
    anchor: "cube는-가능한-조합을-전부-만든다",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-4",
    post: "sqld-rollup-cube-grouping-sets",
    question: "GROUP BY GROUPING SETS (deptno, job)의 결과에 대한 설명으로 옳은 것은?",
    choices: [
      "전체 합계 1행을 포함한다",
      "(deptno, job) 조합별 집계도 함께 나온다",
      "ROLLUP(deptno, job)과 같은 결과다",
      "부서별 집계와 직무별 집계만 나오며, GROUP BY deptno와 GROUP BY job을 UNION ALL한 것과 같다",
    ],
    answer: 3,
    explanation:
      "GROUPING SETS는 적은 묶음만 집계한다. (deptno)와 (job) 두 묶음이라 EMP에서는 3 + 5 = 8행이고, 조합별 집계와 전체 합계는 없다. ROLLUP(deptno, job)은 GROUPING SETS((deptno, job), (deptno), ())와 같다.",
    anchor: "grouping-sets는-원하는-묶음만-적는다",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-5",
    post: "sqld-rollup-cube-grouping-sets",
    question:
      "KING의 MGR은 NULL이다. 다음 SQL 결과에는 mgr이 빈 줄이 두 개 있다. 그중 전체 합계 줄만 고르는 조건은?\nSELECT mgr, COUNT(*) FROM emp GROUP BY ROLLUP (mgr);",
    choices: ["mgr IS NULL", "GROUPING(mgr) = 1", "GROUPING(mgr) = 0", "COUNT(*) = 1"],
    answer: 1,
    explanation:
      "GROUPING(컬럼)은 그 컬럼이 집계 단계에서 빠져서 NULL이 된 줄에서만 1이다. KING처럼 데이터가 원래 NULL인 줄은 0이라 둘을 구분할 수 있다. mgr IS NULL은 두 줄을 모두 고른다.",
    anchor: "소계-줄에-이름표를-붙이는-grouping",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-6",
    post: "sqld-rollup-cube-grouping-sets",
    question:
      "부서 3종류, (부서, 직무) 조합 9종류인 EMP에서 다음 SQL의 결과 행 수는?\nSELECT deptno, job, SUM(sal) FROM emp GROUP BY deptno, ROLLUP (job);",
    choices: ["13", "9", "12", "10"],
    answer: 2,
    explanation:
      "deptno는 항상 묶음에 남고 job만 굴리니 (deptno, job)과 (deptno) 두 단계다. 9 + 3 = 12행이고 전체 합계 줄은 없다. ROLLUP(deptno, job)의 13행에서 총계 1행이 빠진 셈이다.",
    anchor: "일부만-굴리는-부분-rollup",
  },
  {
    id: "sqld-rollup-cube-grouping-sets-7",
    post: "sqld-rollup-cube-grouping-sets",
    question: "GROUP BY CUBE (deptno, job) 결과에서 Oracle의 GROUPING_ID(deptno, job) 값이 2인 줄은?",
    choices: ["전체 합계 줄", "부서 소계 줄", "부서별 직무 줄", "직무 소계 줄"],
    answer: 3,
    explanation:
      "GROUPING_ID는 GROUPING(deptno)와 GROUPING(job)을 이어 붙여 2진수로 읽는다. deptno만 집계로 빠진 직무 소계 줄은 10, 즉 2다. 부서 소계는 01(1), 전체 합계는 11(3)이다.",
    anchor: "소계-줄에-이름표를-붙이는-grouping",
  },
];
