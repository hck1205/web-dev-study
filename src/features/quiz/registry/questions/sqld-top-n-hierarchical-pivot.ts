import type { QuizQuestion } from "../types";

export const SQLD_TOP_N_HIERARCHICAL_PIVOT: QuizQuestion[] = [
  {
    id: "sqld-top-n-hierarchical-pivot-1",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "EMP가 사번 순(SMITH 800, ALLEN 1600, WARD 1250, …)으로 읽힌다고 하자. Oracle에서 다음 SQL의 결과로 옳은 것은?\nSELECT ename, sal FROM emp WHERE ROWNUM <= 3 ORDER BY sal DESC;",
    choices: [
      "급여 상위 3명인 KING, SCOTT, FORD가 나온다",
      "먼저 읽힌 SMITH, ALLEN, WARD를 급여 순으로 정렬해 보여 준다",
      "ROWNUM과 ORDER BY를 함께 쓰면 오류가 난다",
      "0행이 나온다",
    ],
    answer: 1,
    explanation:
      "ROWNUM은 행이 WHERE를 통과할 때 붙고 ORDER BY는 그 뒤에 실행된다. 그래서 먼저 읽힌 세 행을 골라 놓고 정렬한다. 상위 3명을 원하면 정렬한 인라인 뷰 바깥에서 ROWNUM으로 자른다.",
    anchor: "rownum은-정렬보다-먼저-붙는다",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-2",
    post: "sqld-top-n-hierarchical-pivot",
    question: "Oracle에서 다음 SQL의 결과로 옳은 것은?\nSELECT ename FROM emp WHERE ROWNUM = 2;",
    choices: ["두 번째로 읽힌 행 1개", "ROWNUM이 1, 2인 두 행", "오류가 난다", "0행"],
    answer: 3,
    explanation:
      "첫 행은 ROWNUM 1을 받는데 = 2를 만족하지 못해 버려지고, 다음 행도 다시 1을 받아 버려진다. 끝까지 2가 되는 행이 없어 0행이다. ROWNUM은 = 1이나 <= n 형태로만 의미가 있다.",
    anchor: "rownum은-정렬보다-먼저-붙는다",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-3",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "급여 상위 네 명이 5000, 3000, 3000, 2975다. 다음 SQL의 결과 행 수는?\nSELECT ename, sal FROM emp ORDER BY sal DESC FETCH FIRST 2 ROWS WITH TIES;",
    choices: ["2", "3", "4", "1"],
    answer: 1,
    explanation:
      "WITH TIES는 마지막으로 포함된 행과 정렬 값이 같은 행을 모두 더 가져온다. 두 번째 행이 3000이라 같은 3000인 행이 하나 더 붙어 3행이 된다. SQL Server의 TOP (2) WITH TIES도 같은 결과다.",
    anchor: "동점자까지-보여-주는-with-ties",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-4",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "다음 계층형 쿼리가 SMITH에서 시작해 FORD, JONES, KING 순으로 상사 방향으로 올라가려면 빈칸에 들어갈 조건은?\nSELECT LEVEL, ename FROM emp START WITH ename = 'SMITH' CONNECT BY (     );",
    choices: ["PRIOR mgr = empno", "PRIOR empno = mgr", "empno = mgr", "mgr IS NOT NULL"],
    answer: 0,
    explanation:
      "PRIOR가 붙은 컬럼은 이미 찾은 행의 값이다. PRIOR mgr = empno는 지금 행의 상사 사번과 같은 empno를 가진 행을 다음으로 찾으니 위로 올라간다. PRIOR empno = mgr은 부하를 찾는 순방향이다.",
    anchor: "상사를-따라-내려가는-계층형-쿼리",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-5",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "KING부터 14명을 펼치는 조직도에서 JONES 아래에는 FORD, SMITH, SCOTT, ADAMS가 있다. 다음 SQL의 결과 행 수는?\nSELECT LEVEL, ename FROM emp START WITH mgr IS NULL\nCONNECT BY PRIOR empno = mgr AND ename <> 'JONES';",
    choices: ["14", "13", "9", "5"],
    answer: 2,
    explanation:
      "CONNECT BY에 쓴 조건은 자식을 잇는 단계에서 적용되어, JONES로 내려가지 않으니 그 아래 네 명도 함께 빠진다. 14 - 5 = 9행이다. 같은 조건을 WHERE에 쓰면 JONES 한 행만 빠져 13행이 된다.",
    anchor: "where에-거는-조건과-connect-by에-거는-조건",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-6",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "다음 SQL에서 SMITH 행의 path 값은? (JONES의 부하가 FORD, FORD의 부하가 SMITH다)\nSELECT ename, SYS_CONNECT_BY_PATH(ename, '/') AS path FROM emp\nSTART WITH ename = 'JONES' CONNECT BY PRIOR empno = mgr;",
    choices: ["JONES/FORD/SMITH", "/KING/JONES/FORD/SMITH", "SMITH/FORD/JONES", "/JONES/FORD/SMITH"],
    answer: 3,
    explanation:
      "SYS_CONNECT_BY_PATH는 뿌리(START WITH로 고른 JONES)부터 지금 행까지의 값을 구분자로 잇고, 결과가 구분자로 시작한다. KING은 이 쿼리의 뿌리가 아니라서 경로에 없다.",
    anchor: "계층형-쿼리가-주는-가상-컬럼",
  },
  {
    id: "sqld-top-n-hierarchical-pivot-7",
    post: "sqld-top-n-hierarchical-pivot",
    question:
      "EMP는 14명이고 사번(empno)은 모두 다르다. Oracle에서 인라인 뷰 없이 다음처럼 쓰면 결과는 몇 행인가?\nSELECT * FROM emp PIVOT (SUM(sal) FOR deptno IN (10, 20, 30));",
    choices: ["5", "3", "14", "9"],
    answer: 2,
    explanation:
      "PIVOT은 FOR 컬럼(deptno)과 집계 컬럼(sal)을 뺀 나머지 컬럼을 모두 GROUP BY 기준으로 쓴다. empno가 사람마다 다르니 행이 접히지 않고 14행이 나온다. 직무별 5행을 원하면 인라인 뷰로 job, deptno, sal만 골라서 넣는다.",
    anchor: "행을-열로-돌리는-pivot",
  },
];
