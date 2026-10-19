import type { QuizQuestion } from "../types";

export const SQLD_SINGLE_ROW_FUNCTIONS: QuizQuestion[] = [
  {
    id: "sqld-single-row-functions-1",
    post: "sqld-single-row-functions",
    question: "10번 부서 사원 3명에 대해 SELECT ename, UPPER(ename) FROM emp WHERE deptno = 10과 SELECT SUM(sal) FROM emp WHERE deptno = 10은 각각 몇 행을 돌려주나?",
    choices: [
      "3행, 3행",
      "1행, 1행",
      "3행, 1행",
      "1행, 3행",
    ],
    answer: 2,
    explanation:
      "UPPER는 행마다 한 번씩 실행되어 행마다 값 하나를 돌려주는 단일행 함수라 3행이 그대로 나온다. SUM은 여러 행을 하나로 줄이는 다중행(집계) 함수라 1행이다.",
    anchor: "한-행에-하나씩-돌려주는-함수",
  },
  {
    id: "sqld-single-row-functions-2",
    post: "sqld-single-row-functions",
    question: "Oracle에서 SELECT ROUND(1250, -2), TRUNC(1234.5678, -2), FLOOR(-3.1) FROM DUAL 의 결과는?",
    choices: ["1200, 1200, -3", "1300, 1234.56, -4", "1200, 1300, -3", "1300, 1200, -4"],
    answer: 3,
    explanation:
      "자릿수 -2는 소수점 왼쪽으로 가서 십의 자리를 보고 백의 자리까지 남긴다. 1250은 십의 자리가 5라 1300으로 올라가고, TRUNC는 버려서 1200이다. FLOOR는 작거나 같은 가장 큰 정수라 -3.1에서 -4가 된다.",
    anchor: "숫자를-자르고-올리는-함수",
  },
  {
    id: "sqld-single-row-functions-3",
    post: "sqld-single-row-functions",
    question: "Oracle에서 SELECT SUBSTR('CORPORATE FLOOR', -5, 3), INSTR('CORPORATE FLOOR', 'OR', 3, 2) FROM DUAL 의 결과는?",
    choices: ["OOR, 5", "FLO, 14", "FLO, 5", "COR, 14"],
    answer: 1,
    explanation:
      "SUBSTR의 시작 위치가 음수면 뒤에서 센다. 15글자 중 뒤에서 다섯 번째인 11번 F부터 세 글자라 FLO다. INSTR은 3번 위치부터 찾아 두 번째 OR을 고르니, 5번 다음인 14번이다.",
    anchor: "문자를-다듬는-함수",
  },
  {
    id: "sqld-single-row-functions-4",
    post: "sqld-single-row-functions",
    question: "Oracle에서 SELECT LPAD('MILLER', 3) FROM DUAL의 결과는?",
    choices: [
      "'MIL'",
      "'   MILLER'",
      "'MILLER'",
      "'LER'",
    ],
    answer: 0,
    explanation:
      "LPAD는 왼쪽을 채워 전체 길이를 맞추는데, 전체 길이가 원래 문자열보다 짧으면 앞에서부터 그 길이만큼 잘라 낸다. 그래서 MILLER가 앞 세 글자 MIL이 된다.",
    anchor: "문자를-다듬는-함수",
  },
  {
    id: "sqld-single-row-functions-5",
    post: "sqld-single-row-functions",
    question: "Oracle의 ADD_MONTHS(DATE '2024-02-29', 1)과 PostgreSQL의 date '2024-02-29' + interval '1 month'의 결과로 맞는 것은?",
    choices: [
      "둘 다 2024-03-29",
      "둘 다 2024-03-31",
      "Oracle은 2024-03-29, PostgreSQL은 2024-03-31",
      "Oracle은 2024-03-31, PostgreSQL은 2024-03-29",
    ],
    answer: 3,
    explanation:
      "Oracle의 ADD_MONTHS는 입력이 그달의 말일이면 결과도 말일로 맞춘다. 2월 29일은 2024년 2월의 말일이라 3월 31일이 된다. PostgreSQL의 interval에는 이 규칙이 없어서 3월 29일이다.",
    anchor: "날짜는-숫자처럼-더하고-뺀다",
  },
  {
    id: "sqld-single-row-functions-6",
    post: "sqld-single-row-functions",
    question: "PostgreSQL 16에서 round(2.5::numeric)과 round(2.5::float8)의 결과는?",
    choices: [
      "3과 2",
      "3과 3",
      "2와 2",
      "2와 3",
    ],
    answer: 0,
    explanation:
      "numeric의 round는 0에서 먼 쪽으로 반올림해 3이지만, double precision의 round는 가장 가까운 짝수로 반올림해 2다. 금액을 float에 담으면 정산이 1원씩 어긋나는 이유 중 하나라 돈은 numeric에 담는다.",
    anchor: "현장에서-함수-결과가-조용히-달라지는-순간",
  },
];
