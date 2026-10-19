import type { QuizQuestion } from "../types";

export const SQLD_NULL_FUNCTIONS: QuizQuestion[] = [
  {
    id: "sqld-null-functions-1",
    post: "sqld-null-functions",
    question:
      "EMP의 COMM은 14행 중 4행만 값이 있다(300, 500, 1400, 0). SELECT COUNT(*) FROM emp WHERE comm <> 0 의 결과는?",
    choices: ["14", "13", "3", "10"],
    answer: 2,
    explanation:
      "NULL과 비교하면 결과가 UNKNOWN이 되고 WHERE는 참인 행만 남긴다. 그래서 커미션이 NULL인 10명은 조건에서 빠지고, 값이 있는 4명 중 0인 TURNER를 뺀 3명만 남는다.",
    anchor: "null은-값이-아니라-빈칸이다",
  },
  {
    id: "sqld-null-functions-2",
    post: "sqld-null-functions",
    question:
      "BLAKE는 SAL이 2850, COMM이 NULL이다. Oracle에서 SELECT NVL2(comm, sal + comm, sal) FROM emp WHERE ename = 'BLAKE' 의 결과는?",
    choices: ["NULL", "2850", "0", "에러가 난다"],
    answer: 1,
    explanation:
      "NVL2(a, b, c)는 a가 NULL이 아니면 b, NULL이면 c를 돌려준다. comm이 NULL이니 세 번째 인자인 sal, 2850이 나온다. NULL이 아닐 때의 값이 먼저 온다는 순서가 함정이다.",
    anchor: "null을-다른-값으로-바꾸는-함수",
  },
  {
    id: "sqld-null-functions-3",
    post: "sqld-null-functions",
    question:
      "JAMES의 COMM은 NULL이다. Oracle에서 SELECT DECODE(comm, NULL, 'none', 'has'), CASE comm WHEN NULL THEN 'none' ELSE 'has' END FROM emp WHERE ename = 'JAMES' 의 결과는?",
    choices: ["none, none", "has, has", "has, none", "none, has"],
    answer: 3,
    explanation:
      "DECODE는 NULL과 NULL을 같다고 보아 'none'을 돌려준다. 단순 CASE의 WHEN NULL은 내부적으로 comm = NULL 비교라 절대 참이 되지 않아 ELSE의 'has'가 나온다. CASE에서 NULL을 잡으려면 WHEN comm IS NULL로 쓴다.",
    anchor: "조건에-따라-값을-고르는-case와-decode",
  },
  {
    id: "sqld-null-functions-4",
    post: "sqld-null-functions",
    question: "SELECT COUNT(*) FROM emp WHERE deptno NOT IN (10, NULL)의 결과가 0인 이유는?",
    choices: [
      "NOT IN에는 NULL을 쓸 수 없어 조건이 무시되기 때문에",
      "deptno <> NULL이 항상 UNKNOWN이라 AND 전체가 참이 될 수 없기 때문에",
      "10번 부서가 없기 때문에",
      "NULL이 모든 값과 같다고 보기 때문에",
    ],
    answer: 1,
    explanation:
      "NOT IN (10, NULL)은 deptno <> 10 AND deptno <> NULL로 풀린다. 뒤쪽은 늘 UNKNOWN이라 행마다 결과가 UNKNOWN이나 거짓이 되고, WHERE는 참인 행만 남기니 0행이다. IN (10, NULL)은 OR로 풀려 10번 부서 3행이 나온다.",
    anchor: "null은-값이-아니라-빈칸이다",
  },
  {
    id: "sqld-null-functions-5",
    post: "sqld-null-functions",
    question: "동기화 배치가 WHERE e.comm <> f.comm 조건으로 바뀐 행만 UPDATE한다. 이전 값이 NULL이고 새 값이 200인 행은 어떻게 되나?",
    choices: [
      "NULL과 200은 다르니 업데이트된다",
      "에러가 나서 배치가 멈춘다",
      "비교 결과가 UNKNOWN이라 조용히 건너뛴다",
      "200이 NULL로 바뀐다",
    ],
    answer: 2,
    explanation:
      "한쪽이 NULL인 비교는 UNKNOWN이고 WHERE는 참인 행만 고른다. 그래서 바뀐 행인데도 빠진다. NULL을 값처럼 비교하는 IS DISTINCT FROM으로 쓰면 예제에서 1건이 아니라 3건이 고쳐졌다.",
    anchor: "현장에서-null이-바뀐-행을-숨기는-순간",
  },
];
