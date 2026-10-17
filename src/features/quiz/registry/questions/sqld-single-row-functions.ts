import type { QuizQuestion } from "../types";

export const SQLD_SINGLE_ROW_FUNCTIONS: QuizQuestion[] = [
  {
    id: "sqld-single-row-functions-1",
    post: "sqld-single-row-functions",
    question:
      "EMP의 COMM은 14행 중 4행만 값이 있다(300, 500, 1400, 0). SELECT COUNT(*) FROM emp WHERE comm <> 0 의 결과는?",
    choices: ["14", "13", "3", "10"],
    answer: 2,
    explanation:
      "NULL과 비교하면 결과가 UNKNOWN이 되고 WHERE는 참인 행만 남긴다. 그래서 커미션이 NULL인 10명은 조건에서 빠지고, 값이 있는 4명 중 0인 TURNER를 뺀 3명만 남는다.",
    anchor: "null은-값이-아니라-빈칸이다",
  },
  {
    id: "sqld-single-row-functions-2",
    post: "sqld-single-row-functions",
    question:
      "BLAKE는 SAL이 2850, COMM이 NULL이다. Oracle에서 SELECT NVL2(comm, sal + comm, sal) FROM emp WHERE ename = 'BLAKE' 의 결과는?",
    choices: ["NULL", "2850", "0", "에러가 난다"],
    answer: 1,
    explanation:
      "NVL2(a, b, c)는 a가 NULL이 아니면 b, NULL이면 c를 돌려준다. comm이 NULL이니 세 번째 인자인 sal, 2850이 나온다. NULL이 아닐 때의 값이 먼저 온다는 순서가 함정이다.",
    anchor: "null을-다른-값으로-바꾸는-함수",
  },
  {
    id: "sqld-single-row-functions-3",
    post: "sqld-single-row-functions",
    question: "Oracle에서 SELECT ROUND(1250, -2), TRUNC(1234.5678, -2), FLOOR(-3.1) FROM DUAL 의 결과는?",
    choices: ["1200, 1200, -3", "1300, 1234.56, -4", "1200, 1300, -3", "1300, 1200, -4"],
    answer: 3,
    explanation:
      "자릿수 -2는 소수점 왼쪽으로 가서 십의 자리를 보고 백의 자리까지 남긴다. 1250은 십의 자리가 5라 1300으로 올라가고, TRUNC는 버려서 1200이다. FLOOR는 작거나 같은 가장 큰 정수라 -3.1에서 -4가 된다.",
    anchor: "숫자를-자르고-올리는-함수",
  },
  {
    id: "sqld-single-row-functions-4",
    post: "sqld-single-row-functions",
    question:
      "JAMES의 COMM은 NULL이다. Oracle에서 SELECT DECODE(comm, NULL, 'none', 'has'), CASE comm WHEN NULL THEN 'none' ELSE 'has' END FROM emp WHERE ename = 'JAMES' 의 결과는?",
    choices: ["none, none", "has, has", "has, none", "none, has"],
    answer: 3,
    explanation:
      "DECODE는 NULL과 NULL을 같다고 보아 'none'을 돌려준다. 단순 CASE의 WHEN NULL은 내부적으로 comm = NULL 비교라 절대 참이 되지 않아 ELSE의 'has'가 나온다. CASE에서 NULL을 잡으려면 WHEN comm IS NULL로 쓴다.",
    anchor: "조건에-따라-값을-고르는-case와-decode",
  },
  {
    id: "sqld-single-row-functions-5",
    post: "sqld-single-row-functions",
    question:
      "VARCHAR2 컬럼 emp_code('007369' 같은 값)에 인덱스가 있다. Oracle에서 WHERE emp_code = 7369 로 조회하면 어떻게 되나?",
    choices: [
      "컬럼이 TO_NUMBER(emp_code)로 변환되어 인덱스를 쓰지 못한다",
      "상수 7369가 '7369'로 변환되어 인덱스로 바로 찾는다",
      "타입이 달라 항상 에러가 난다",
      "'007369'와 7369는 다른 값이라 0행이 나온다",
    ],
    answer: 0,
    explanation:
      "Oracle은 문자와 숫자를 비교하면 문자 쪽을 숫자로 바꾼다. 문자가 컬럼이면 컬럼 전체에 TO_NUMBER가 씌워져 인덱스 탐색을 못 하고 전체 스캔이 된다. 숫자로 바꿀 수 없는 값이 섞여 있으면 그때 ORA-01722 에러가 난다.",
    anchor: "형-변환은-직접-적는다",
  },
  {
    id: "sqld-single-row-functions-6",
    post: "sqld-single-row-functions",
    question: "SELECT TO_CHAR(TIMESTAMP '2026-10-17 14:05:09', 'HH:MM:SS') FROM DUAL 의 결과는?",
    choices: ["14:05:09", "02:05:09", "02:10:09", "형식 오류로 에러가 난다"],
    answer: 2,
    explanation:
      "MM은 분이 아니라 월이고, 분은 MI다. HH는 12시간제라 14시가 02로 나온다. 그래서 분 자리에 10월의 10이 들어간 02:10:09가 에러 없이 나온다.",
    anchor: "to_char-형식-문자열-읽기",
  },
  {
    id: "sqld-single-row-functions-7",
    post: "sqld-single-row-functions",
    question: "Oracle에서 SELECT SUBSTR('CORPORATE FLOOR', -5, 3), INSTR('CORPORATE FLOOR', 'OR', 3, 2) FROM DUAL 의 결과는?",
    choices: ["OOR, 5", "FLO, 14", "FLO, 5", "COR, 14"],
    answer: 1,
    explanation:
      "SUBSTR의 시작 위치가 음수면 뒤에서 센다. 15글자 중 뒤에서 다섯 번째인 11번 F부터 세 글자라 FLO다. INSTR은 3번 위치부터 찾아 두 번째 OR을 고르니, 5번 다음인 14번이다.",
    anchor: "문자를-다듬는-함수",
  },
];
