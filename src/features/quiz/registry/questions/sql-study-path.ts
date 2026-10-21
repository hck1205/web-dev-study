import type { QuizQuestion } from "../types";

export const SQL_STUDY_PATH: QuizQuestion[] = [
  {
    id: "sql-study-path-1",
    post: "sql-study-path",
    question: "members에 park의 city가 NULL일 때 `WHERE city <> 'seoul'`의 결과에 park이 없는 이유는?",
    choices: [
      "NULL은 빈 문자열로 바뀌어 비교되기 때문에",
      "<> 연산자는 NULL이 있는 테이블에서 쓸 수 없기 때문에",
      "NULL과 비교한 결과는 참이 아니라 '모름'이고, WHERE는 참인 행만 남기기 때문에",
      "park이 PRIMARY KEY 순서상 뒤에 있기 때문에",
    ],
    answer: 2,
    explanation:
      "모르는 값과 'seoul'을 비교하면 참도 거짓도 아닌 '모름'이 나오고, WHERE는 참인 행만 통과시킨다. park까지 넣으려면 IS DISTINCT FROM처럼 NULL을 값처럼 비교하는 연산자를 쓴다.",
    anchor: "결제된-10월-주문만-남기기",
  },
  {
    id: "sql-study-path-2",
    post: "sql-study-path",
    question: "회원 기준으로 LEFT JOIN한 뒤 `WHERE o.status = 'paid'`를 붙였더니 주문이 없는 choi가 결과에서 사라졌다. 어떻게 고치나?",
    choices: [
      "주문 쪽 조건을 ON 절로 옮긴다",
      "LEFT JOIN을 RIGHT JOIN으로 바꾼다",
      "GROUP BY에 status를 추가한다",
      "count(o.id)를 count(*)로 바꾼다",
    ],
    answer: 0,
    explanation:
      "LEFT JOIN은 짝이 없는 choi에게 주문 컬럼이 모두 NULL인 줄을 만들어 주는데, 조인 뒤의 WHERE가 그 NULL을 비교하면서 줄을 지운다. 조건을 ON에 두면 짝을 고를 때만 쓰이고 회원 줄은 남는다. count(*)로 바꾸면 오히려 choi가 1로 세어진다.",
    anchor: "이름을-붙이면-choi가-돌아온다",
  },
  {
    id: "sql-study-path-3",
    post: "sql-study-path",
    question: "LEFT JOIN 뒤 회원별로 `count(*)`와 `count(o.id)`를 함께 셌다. 10월 주문이 없는 choi의 두 값은?",
    choices: ["0과 0", "1과 1", "0과 1", "1과 0"],
    answer: 3,
    explanation:
      "choi에게도 주문 컬럼이 NULL인 줄이 하나 생기므로 줄 수를 세는 count(*)는 1이다. count(o.id)는 NULL을 건너뛰어 0이다. 그래서 주문 수는 오른쪽 테이블의 NOT NULL 컬럼으로 센다.",
    anchor: "이름을-붙이면-choi가-돌아온다",
  },
  {
    id: "sql-study-path-4",
    post: "sql-study-path",
    question: "회원별 10월 합계가 kim 42000, lee 50000, park 35000, choi 0일 때, '10월에 산 사람만의 평균'보다 많이 산 회원은?",
    choices: ["kim, lee, park", "lee만", "kim, lee", "아무도 없다"],
    answer: 1,
    explanation:
      "산 사람 셋의 평균은 42333원이라 lee만 넘는다. choi의 0원까지 넣은 회원 전체 평균은 31750원이라 세 명이 남는다. 쿼리 문법보다 평균의 분모가 누구인지를 먼저 정해야 한다.",
    anchor: "평균보다-많이-산-회원만",
  },
  {
    id: "sql-study-path-5",
    post: "sql-study-path",
    question: "`SELECT ..., rank() OVER (ORDER BY amount DESC) AS rnk FROM orders WHERE rnk = 1`이 에러가 나는 이유는?",
    choices: [
      "rank()는 PARTITION BY 없이 쓸 수 없어서",
      "윈도 함수는 WHERE보다 늦게 계산되어 그 단계에는 rnk가 아직 없어서",
      "rank()는 HAVING에서만 거를 수 있어서",
      "ORDER BY가 SELECT 앞에 실행되어서",
    ],
    answer: 1,
    explanation:
      "윈도 함수와 별칭은 SELECT 단계에서 생기는데 WHERE는 그보다 앞에서 처리된다. 그래서 column \"rnk\" does not exist가 난다. 한 겹 감싼 바깥 쿼리에서 WHERE rnk = 1로 거른다.",
    anchor: "줄은-그대로-두고-순위를-붙인다",
  },
];
