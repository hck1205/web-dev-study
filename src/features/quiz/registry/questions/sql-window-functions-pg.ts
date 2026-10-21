import type { QuizQuestion } from "../types";

export const SQL_WINDOW_FUNCTIONS_PG: QuizQuestion[] = [
  {
    id: "sql-window-functions-pg-1",
    post: "sql-window-functions-pg",
    question:
      "결제가 없는 날은 행이 없는 일별 매출에 sum(revenue) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)를 썼다. 이 값은 무엇인가?",
    choices: [
      "달력 기준 최근 7일의 합계",
      "결제가 있었던 최근 7개 날짜(행)의 합계",
      "최근 6일의 합계",
      "빈 날을 0으로 채운 최근 7일의 합계",
    ],
    answer: 1,
    explanation:
      "ROWS는 행 개수로 센다. 빈 날에는 행이 없어서 앞 6행이 몇 주 전까지 거슬러 올라간다. 달력 기준 7일은 RANGE BETWEEN interval '6 days' PRECEDING으로 구한다.",
    anchor: "최근-7일-합계가-7일-치가-아니었다",
  },
  {
    id: "sql-window-functions-pg-2",
    post: "sql-window-functions-pg",
    question:
      "10월 20일 1건, 10월 31일 2건이 있을 때 10월 31일 첫 행에서 count(*) OVER (ORDER BY day GROUPS BETWEEN 1 PRECEDING AND CURRENT ROW)는?",
    choices: ["1", "2", "3", "4"],
    answer: 2,
    explanation:
      "GROUPS는 같은 값끼리 묶은 덩어리 단위로 센다. 바로 앞 날짜 묶음(10월 20일 1건)과 지금 묶음 전체(10월 31일 2건)가 들어가 3이다. ROWS였다면 앞 행 하나와 자기 자신으로 2다.",
    anchor: "행으로-셀지-값으로-셀지-동점-묶음으로-셀지",
  },
  {
    id: "sql-window-functions-pg-3",
    post: "sql-window-functions-pg",
    question: "같은 강의 다른 수강생의 평균 점수(나를 뺀 평균)를 윈도우 함수로 구하는 방법은?",
    choices: [
      "avg(score) OVER (PARTITION BY course_id) - score",
      "avg(score) OVER (PARTITION BY course_id EXCLUDE CURRENT ROW)",
      "avg(score) OVER (PARTITION BY course_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING EXCLUDE CURRENT ROW)",
      "avg(score) FILTER (WHERE id <> id) OVER (PARTITION BY course_id)",
    ],
    answer: 2,
    explanation:
      "EXCLUDE는 프레임 절의 일부라 프레임을 적어야 쓸 수 있다. 파티션 전체를 프레임으로 잡고 지금 행만 뺀다. 평균에서 내 점수를 빼는 식은 평균이 아니라 차이를 구한다.",
    anchor: "나를-뺀-평균과-이름-붙인-창",
  },
  {
    id: "sql-window-functions-pg-4",
    post: "sql-window-functions-pg",
    question:
      "한 SELECT에 PARTITION BY student_id ORDER BY enrolled_at 창 두 개와 PARTITION BY course_id ORDER BY score DESC 창 하나를 썼다. 계획에 Sort가 몇 번 나오나?",
    choices: ["1번", "3번", "0번", "2번"],
    answer: 3,
    explanation:
      "같은 정의의 창은 WindowAgg 하나에서 함께 계산된다. 정의가 다른 창은 정렬 순서가 달라 Sort와 WindowAgg가 한 쌍 더 붙는다. 그래서 정렬은 두 번이다.",
    anchor: "창마다-정렬이-하나씩-붙는다",
  },
  {
    id: "sql-window-functions-pg-5",
    post: "sql-window-functions-pg",
    question:
      "PostgreSQL 16에서 row_number()로 상위 3개를 거를 때 WHERE rn <= 3이 WHERE rn IN (1, 2, 3)보다 훨씬 빠를 수 있는 이유는?",
    choices: [
      "rn <= 3은 Run Condition이 되어, 값이 커지기만 하는 row_number가 4가 된 뒤의 행을 만들지 않아서",
      "IN은 인덱스를 쓰지 못해서",
      "IN은 bigint 배열로 바꾸는 비용이 커서",
      "rn <= 3은 정렬을 생략해서",
    ],
    answer: 0,
    explanation:
      "PostgreSQL 15부터 플래너는 단조 증가하는 윈도우 함수에 걸린 <= 조건을 Run Condition으로 바꾼다. 파티션이 없고 인덱스가 정렬을 대신하면 4번째 행에서 읽기를 멈춰 0.074ms, IN은 30만 행에 번호를 다 붙여 276ms였다.",
    anchor: "그룹별-상위-n개는-15부터-일찍-멈춘다",
  },
  {
    id: "sql-window-functions-pg-6",
    post: "sql-window-functions-pg",
    question:
      "row_number() OVER (PARTITION BY student_id ORDER BY score DESC) = 1로 수강생별 한 건을 뽑았더니 인덱스를 끄자 일부 수강생의 결과 행이 바뀌었다. 올바른 수정은?",
    choices: [
      "ORDER BY score DESC, id처럼 고유한 컬럼을 덧붙여 순서를 완전히 정한다",
      "row_number를 dense_rank로 바꾼다",
      "인덱스를 항상 쓰도록 enable_seqscan을 끈다",
      "ORDER BY를 지운다",
    ],
    answer: 0,
    explanation:
      "동점이 있으면 어느 행이 1번이 될지 정해져 있지 않아 실행 계획에 따라 바뀐다. 실제로 2만 명 중 713명이 다른 행을 받았다. 설정으로 계획을 고정하는 건 해결이 아니고, dense_rank는 동점을 모두 1로 만들어 한 건을 고르지 못한다.",
    anchor: "동점에서-row_number는-아무나-고른다",
  },
  {
    id: "sql-window-functions-pg-7",
    post: "sql-window-functions-pg",
    question:
      "윈도우 함수를 감싼 서브쿼리 바깥에 WHERE student_id = 7을 걸면 플래너는 이 조건을 어떻게 처리하나?",
    choices: [
      "윈도우 결과가 바뀔 수 있어 항상 바깥에서 거른다",
      "에러를 낸다",
      "Run Condition으로 바꾼다",
      "PARTITION BY 컬럼에 대한 조건이라 안쪽으로 밀어 넣어 인덱스 범위로 읽는다",
    ],
    answer: 3,
    explanation:
      "PARTITION BY 컬럼 조건은 파티션 하나를 통째로 남기거나 빼므로 윈도우 결과를 바꾸지 않아 안으로 밀어 넣을 수 있다. 계획에서 Index Cond: (student_id = 7)로 보인다. score 같은 다른 컬럼 조건은 순위를 바꿀 수 있어서 바깥 Filter로 남는다.",
    anchor: "리포트-쿼리가-느릴-때-계획에서-보는-곳",
  },
];
