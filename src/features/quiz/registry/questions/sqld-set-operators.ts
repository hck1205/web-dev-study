import type { QuizQuestion } from "../types";

export const SQLD_SET_OPERATORS: QuizQuestion[] = [
  {
    id: "sqld-set-operators-1",
    post: "sqld-set-operators",
    question:
      "10번 부서의 JOB은 CLERK, MANAGER, PRESIDENT이고 20번 부서의 JOB은 ANALYST, ANALYST, CLERK, CLERK, MANAGER이다. 다음 SQL의 결과 행 수는?\nSELECT job FROM emp WHERE deptno = 10\nUNION\nSELECT job FROM emp WHERE deptno = 20;",
    choices: ["8", "5", "4", "2"],
    answer: 2,
    explanation:
      "UNION은 두 결과를 이어 붙인 뒤 중복을 지운다. 남는 값은 ANALYST, CLERK, MANAGER, PRESIDENT 네 개다. 8은 중복을 지우지 않는 UNION ALL의 결과이고, 2는 INTERSECT의 결과다.",
    anchor: "결과를-위아래로-붙이는-집합-연산자",
  },
  {
    id: "sqld-set-operators-2",
    post: "sqld-set-operators",
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
    id: "sqld-set-operators-3",
    post: "sqld-set-operators",
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
  {
    id: "sqld-set-operators-4",
    post: "sqld-set-operators",
    question: "결제 id를 뺀 (customer_id, amount)만 뽑아 두 해의 결제를 UNION으로 합쳤더니 60만 건이 3,500건이 됐다. 이유는?",
    choices: [
      "UNION은 첫 번째 쿼리의 행만 남기기 때문에",
      "UNION이 행 전체가 같은 결제를 중복으로 보고 지웠기 때문에",
      "집합 연산자가 NULL을 지우기 때문에",
      "정렬 중 디스크가 모자라 일부 행이 버려졌기 때문에",
    ],
    answer: 1,
    explanation:
      "UNION은 이어 붙인 뒤 행 전체가 같은 것을 하나로 줄인다. 행을 구분하는 id를 빼니 같은 고객의 같은 금액 결제가 모두 한 행이 됐다. 결제 건을 다 원하면 UNION ALL을 쓴다.",
    anchor: "현장에서-union이-행을-지우고-느려지는-순간",
  },
  {
    id: "sqld-set-operators-5",
    post: "sqld-set-operators",
    question: "PostgreSQL에서 10번 부서 직무 UNION 20번 부서 직무 INTERSECT 30번 부서 직무를 괄호 없이 실행했다. 결과에 PRESIDENT가 들어가는 이유는?",
    choices: [
      "PostgreSQL은 INTERSECT를 먼저 계산한 뒤 10번과 합치기 때문에",
      "PostgreSQL은 위에서부터 차례로 계산하기 때문에",
      "INTERSECT가 NULL을 PRESIDENT로 바꾸기 때문에",
      "UNION이 중복을 지우지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "PostgreSQL과 SQL Server는 표준대로 INTERSECT를 먼저 계산해서 20번과 30번의 교집합(CLERK, MANAGER)에 10번을 합친다. 그래서 PRESIDENT가 남아 3행이다. Oracle은 차례로 계산해 2행이 나오니 괄호로 순서를 적는다.",
    anchor: "집합-연산자의-규칙",
  },
];
