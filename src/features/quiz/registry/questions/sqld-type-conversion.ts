import type { QuizQuestion } from "../types";

export const SQLD_TYPE_CONVERSION: QuizQuestion[] = [
  {
    id: "sqld-type-conversion-1",
    post: "sqld-type-conversion",
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
    id: "sqld-type-conversion-2",
    post: "sqld-type-conversion",
    question: "SELECT TO_CHAR(TIMESTAMP '2026-10-17 14:05:09', 'HH:MM:SS') FROM DUAL 의 결과는?",
    choices: ["14:05:09", "02:05:09", "02:10:09", "형식 오류로 에러가 난다"],
    answer: 2,
    explanation:
      "MM은 분이 아니라 월이고, 분은 MI다. HH는 12시간제라 14시가 02로 나온다. 그래서 분 자리에 10월의 10이 들어간 02:10:09가 에러 없이 나온다.",
    anchor: "to_char-형식-문자열-읽기",
  },
  {
    id: "sqld-type-conversion-3",
    post: "sqld-type-conversion",
    question: "PostgreSQL에서 TO_CHAR(1250, '9,999')와 TO_CHAR(1250, 'FM9,999')의 차이는?",
    choices: [
      "앞의 것은 앞에 공백 한 칸이 붙고, FM을 붙이면 공백이 빠진다",
      "앞의 것은 에러가 나고 FM을 붙여야 된다",
      "앞의 것은 1250, 뒤의 것은 1,250이다",
      "차이가 없다",
    ],
    answer: 0,
    explanation:
      "숫자 형식만 주면 부호가 들어갈 자리로 앞에 공백이 하나 붙는다. FM을 앞에 붙이면 그 공백을 뗀다. 화면이나 파일에 찍을 때 공백 때문에 비교가 틀어지는 일을 막는다.",
    anchor: "to_char-형식-문자열-읽기",
  },
  {
    id: "sqld-type-conversion-4",
    post: "sqld-type-conversion",
    question: "Oracle에서 숫자 컬럼 empno에 인덱스가 있을 때 WHERE empno = '7369'는 어떻게 처리되나?",
    choices: [
      "empno에 TO_CHAR가 씌워져 전체 스캔한다",
      "상수 '7369'가 숫자로 바뀌어 인덱스를 쓴다",
      "타입이 달라 에러가 난다",
      "결과가 항상 0행이다",
    ],
    answer: 1,
    explanation:
      "Oracle은 문자와 숫자를 비교하면 문자 쪽을 숫자로 바꾼다. 여기서 문자는 상수라 상수가 바뀌고 컬럼은 그대로여서 인덱스를 쓴다. 반대로 문자 컬럼을 숫자와 비교하면 컬럼이 바뀌어 인덱스를 못 쓴다.",
    anchor: "형-변환은-직접-적는다",
  },
  {
    id: "sqld-type-conversion-5",
    post: "sqld-type-conversion",
    question: "PostgreSQL에서 integer 컬럼 empno에 인덱스가 있는데 애플리케이션이 파라미터를 numeric으로 넘겼다. 실행 계획에 나타나는 것은?",
    choices: [
      "Index Cond: (empno = '7369'::numeric)",
      "Filter: ((empno)::numeric = '7369'::numeric)와 Seq Scan",
      "Index Only Scan과 Heap Fetches: 0",
      "operator does not exist 에러",
    ],
    answer: 1,
    explanation:
      "integer와 numeric을 바로 비교하는 연산자가 없어 PostgreSQL은 더 넓은 numeric으로 맞추느라 컬럼을 바꾼다. 그래서 Filter에 컬럼 캐스팅이 붙고 전체를 읽는다. bigint로 넘기면 바로 비교하는 연산자가 있어 Index Scan이 된다.",
    anchor: "현장에서-파라미터-타입이-인덱스를-막는-순간",
  },
];
