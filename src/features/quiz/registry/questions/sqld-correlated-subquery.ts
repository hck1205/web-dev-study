import type { QuizQuestion } from "../types";

export const SQLD_CORRELATED_SUBQUERY: QuizQuestion[] = [
  {
    id: "sqld-correlated-subquery-1",
    post: "sqld-correlated-subquery",
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
    id: "sqld-correlated-subquery-2",
    post: "sqld-correlated-subquery",
    question: "상관 서브쿼리 WHERE e.sal > (SELECT AVG(i.sal) FROM emp i WHERE i.deptno = e.deptno)가 개념상 실행되는 방식은?",
    choices: [
      "서브쿼리가 먼저 한 번 돌아 평균 하나를 만든다",
      "바깥 행마다 그 행의 deptno를 받아 서브쿼리가 다시 실행된다",
      "부서마다 한 번씩만 실행된다는 것이 보장된다",
      "바깥 쿼리보다 나중에 한 번 실행된다",
    ],
    answer: 1,
    explanation:
      "안쪽이 바깥 별칭 e의 deptno를 참조하니 바깥 행이 바뀔 때마다 값이 달라지고, 개념상 행마다 다시 실행된다. 비상관 서브쿼리는 한 번 계산한 값을 계속 쓴다. 옵티마이저가 조인으로 풀기도 하지만 보장되지는 않는다.",
    anchor: "바깥-행마다-다시-도는-상관-서브쿼리",
  },
  {
    id: "sqld-correlated-subquery-3",
    post: "sqld-correlated-subquery",
    question: "사원이 없는 40번 부서에 대해 (SELECT COUNT(*) FROM emp e WHERE e.deptno = d.deptno)와 (SELECT MAX(e.sal) ...)는 각각 무엇을 돌려주나?",
    choices: [
      "0과 0",
      "NULL과 NULL",
      "NULL과 0",
      "0과 NULL",
    ],
    answer: 3,
    explanation:
      "스칼라 서브쿼리는 대상이 없으면 보통 NULL이지만 COUNT는 대상이 없어도 0을 돌려준다. MAX는 집계할 값이 없으니 NULL이다. 시험에서 0과 NULL을 구분하는 보기가 자주 나온다.",
    anchor: "select-절에는-값-하나만-들어간다",
  },
  {
    id: "sqld-correlated-subquery-4",
    post: "sqld-correlated-subquery",
    question: "WITH CHECK OPTION을 붙인 v_emp20(WHERE deptno = 20) 뷰로 UPDATE v_emp20 SET deptno = 10 WHERE ename = 'SMITH'를 실행하면?",
    choices: [
      "SMITH의 부서가 10으로 바뀐다",
      "뷰 조건을 벗어나는 변경이라 거절된다",
      "뷰에는 UPDATE를 쓸 수 없어서 문법 오류가 난다",
      "뷰에서만 바뀌고 emp 테이블은 그대로다",
    ],
    answer: 1,
    explanation:
      "WITH CHECK OPTION은 고친 뒤의 행이 뷰의 WHERE 조건을 만족하지 않으면 막는다. SMITH가 10번 부서가 되면 v_emp20에서 사라지니 거절된다. 조건 안에 머무는 sal 변경은 통과하고, 뷰는 데이터를 따로 갖지 않아 고치면 emp가 바뀐다.",
    anchor: "자주-쓰는-서브쿼리는-뷰로-이름을-붙인다",
  },
  {
    id: "sqld-correlated-subquery-5",
    post: "sqld-correlated-subquery",
    question: "2만 행 테이블에서 부서 평균과 비교하는 상관 서브쿼리가 4.6초 걸렸다. 실행 계획의 SubPlan 아래 loops=20000을 봤을 때 가장 알맞은 개선은?",
    choices: [
      "deptno에 인덱스를 하나 더 만든다",
      "서브쿼리에 ORDER BY를 넣는다",
      "부서 평균을 인라인 뷰로 한 번만 집계해 조인한다",
      "AVG를 SUM / COUNT로 바꾼다",
    ],
    answer: 2,
    explanation:
      "loops=20000은 바깥 행마다 서브쿼리가 다시 돌았다는 뜻이다. 부서는 20개뿐이니 인라인 뷰로 평균 20개를 한 번에 만들어 조인하면 된다. 예제에서 이미 인덱스가 있었는데도 4.6초였고, 인라인 뷰로 11ms가 됐다.",
    anchor: "현장에서-상관-서브쿼리가-느려지는-순간",
  },
];
