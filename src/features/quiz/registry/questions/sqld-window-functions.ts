import type { QuizQuestion } from "../types";

export const SQLD_WINDOW_FUNCTIONS: QuizQuestion[] = [
  {
    id: "sqld-window-functions-1",
    post: "sqld-window-functions",
    question:
      "급여가 5000, 3000, 3000, 2975인 네 명이 있다. 다음 함수로 매긴 2975의 순위는?\nDENSE_RANK() OVER (ORDER BY sal DESC)",
    choices: ["3", "2", "4", "5"],
    answer: 0,
    explanation:
      "DENSE_RANK는 동점에 같은 순위를 주고 다음 순위를 건너뛰지 않아 1, 2, 2, 3이 된다. RANK였다면 2위가 두 명이라 3위를 건너뛰고 4가 나온다. ROW_NUMBER도 4다.",
    anchor: "동점자가-있을-때-세-순위-함수",
  },
  {
    id: "sqld-window-functions-2",
    post: "sqld-window-functions",
    question:
      "20번 부서의 급여는 3000(SCOTT), 3000(FORD), 2975, 1100, 800이다. 다음 SQL에서 SCOTT 행의 cum 값은?\nSELECT ename, SUM(sal) OVER (ORDER BY sal DESC) AS cum FROM emp WHERE deptno = 20;",
    choices: ["3000", "6000", "10875", "NULL"],
    answer: 1,
    explanation:
      "ORDER BY만 쓰고 프레임을 생략하면 기본값이 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW다. RANGE는 정렬 값이 같은 FORD까지 프레임에 넣어서 SCOTT과 FORD가 모두 6000이 된다. 행 단위로 쌓으려면 ROWS를 적는다.",
    anchor: "기본-프레임은-동점을-한꺼번에-더한다",
  },
  {
    id: "sqld-window-functions-3",
    post: "sqld-window-functions",
    question:
      "30번 부서 급여를 오름차순으로 놓으면 950, 1250, 1250, 1500, 1600, 2850이다. 다음 함수로 계산한 마지막 행(2850)의 값은?\nSUM(sal) OVER (ORDER BY sal, empno ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING)",
    choices: ["2850", "5950", "9400", "4450"],
    answer: 3,
    explanation:
      "앞 한 행, 지금 행, 뒤 한 행을 더하는 프레임이다. 마지막 행은 뒤 행이 없어서 1600 + 2850 = 4450이다. 없는 행을 0이나 다른 값으로 채우지 않는다.",
    anchor: "기본-프레임은-동점을-한꺼번에-더한다",
  },
  {
    id: "sqld-window-functions-4",
    post: "sqld-window-functions",
    question:
      "다음 함수를 프레임 없이 썼을 때 각 행에 나오는 값으로 옳은 것은? (같은 부서 안에 급여 동점자는 없다고 한다)\nLAST_VALUE(ename) OVER (PARTITION BY deptno ORDER BY sal DESC)",
    choices: [
      "부서에서 급여가 가장 낮은 사람의 이름",
      "그 행 자신의 이름",
      "부서에서 급여가 가장 높은 사람의 이름",
      "모두 NULL",
    ],
    answer: 1,
    explanation:
      "기본 프레임이 묶음의 처음부터 지금 행까지라서 프레임의 마지막 행은 항상 지금 행이다. 부서 전체의 마지막 값을 원하면 ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING으로 프레임을 늘린다. 가장 높은 사람은 FIRST_VALUE가 준다.",
    anchor: "first_value는-되는데-last_value는-이상하다",
  },
  {
    id: "sqld-window-functions-5",
    post: "sqld-window-functions",
    question: "다음 SQL을 실행한 결과로 옳은 것은?\nSELECT ename, sal FROM emp\nWHERE RANK() OVER (ORDER BY sal DESC) <= 3;",
    choices: [
      "급여 상위 3명이 나온다",
      "동점자를 포함해 상위 3위까지 나온다",
      "윈도우 함수는 WHERE 절에 쓸 수 없어서 오류가 난다",
      "모든 행이 나오고 순위만 붙는다",
    ],
    answer: 2,
    explanation:
      "윈도우 함수는 WHERE, GROUP BY, HAVING이 끝난 뒤에 계산되므로 WHERE에서는 아직 값이 없다. 인라인 뷰 안에서 순위를 계산하고 바깥 쿼리의 WHERE에서 걸러야 한다.",
    anchor: "윈도우-함수는-where에-못-쓴다",
  },
  {
    id: "sqld-window-functions-6",
    post: "sqld-window-functions",
    question:
      "30번 부서를 입사일 순으로 정렬하면 ALLEN(1600), WARD(1250), BLAKE(2850), TURNER(1500) 순이다. BLAKE 행에서 다음 함수의 값은?\nLAG(sal, 2, 0) OVER (ORDER BY hiredate)",
    choices: ["0", "1250", "1600", "1500"],
    answer: 2,
    explanation:
      "LAG(sal, 2, 0)은 두 행 앞의 sal을 가져오고, 그런 행이 없을 때만 0을 쓴다. BLAKE의 두 행 앞은 ALLEN이라 1600이다. ALLEN과 WARD 행에서는 두 행 앞이 없어서 0이 나온다.",
    anchor: "앞-행과-뒤-행을-가져오는-lag와-lead",
  },
  {
    id: "sqld-window-functions-7",
    post: "sqld-window-functions",
    question: "6개 행에 NTILE(4) OVER (ORDER BY sal DESC)를 적용했을 때 1~4번 묶음의 행 수로 옳은 것은?",
    choices: ["1, 1, 2, 2", "2, 1, 2, 1", "1, 2, 1, 2", "2, 2, 1, 1"],
    answer: 3,
    explanation:
      "6을 4로 나누면 몫 1, 나머지 2다. 나머지는 앞 묶음부터 한 행씩 더 가져가서 2, 2, 1, 1이 된다. 14행을 4로 나누면 같은 방식으로 4, 4, 3, 3이다.",
    anchor: "비율과-분위를-내는-함수",
  },
];
