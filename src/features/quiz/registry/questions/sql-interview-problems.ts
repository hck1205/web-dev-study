import type { QuizQuestion } from "../types";

export const SQL_INTERVIEW_PROBLEMS: QuizQuestion[] = [
  {
    id: "sql-interview-problems-1",
    post: "sql-interview-problems",
    question:
      "가격이 120000, 120000, 70000, 50000일 때 SELECT price FROM courses ORDER BY price DESC LIMIT 1 OFFSET 1의 결과는?",
    choices: ["70000", "120000", "NULL", "0행"],
    answer: 1,
    explanation:
      "OFFSET 1은 두 번째 행을 고른다. 가장 큰 값이 두 줄이라 두 번째 행도 120000이다. 두 번째로 큰 값을 원하면 DISTINCT로 줄이거나 dense_rank() = 2를 쓴다.",
    anchor: "두-번째로-비싼-가격",
  },
  {
    id: "sql-interview-problems-2",
    post: "sql-interview-problems",
    question:
      "강의가 하나뿐인 분류에서 두 번째로 비싼 가격을 구할 때, NULL 한 행을 돌려주는 쿼리는?",
    choices: [
      "SELECT DISTINCT price ... ORDER BY price DESC LIMIT 1 OFFSET 1",
      "SELECT DISTINCT price FROM (... dense_rank() ...) t WHERE r = 2",
      "SELECT max(price) ... WHERE price < (SELECT max(price) ...)",
      "SELECT price ... ORDER BY price DESC LIMIT 1",
    ],
    answer: 2,
    explanation:
      "집계 함수는 거를 행이 하나도 없어도 NULL 한 행을 돌려준다. LIMIT과 dense_rank 방식은 0행을 낸다. 0행 쿼리도 스칼라 서브쿼리로 감싸면 NULL 한 행이 된다.",
    anchor: "두-번째로-비싼-가격",
  },
  {
    id: "sql-interview-problems-3",
    post: "sql-interview-problems",
    question:
      "중복 결제를 찾으려고 GROUP BY enrollment_id, amount HAVING count(*) > 1을 돌렸더니 2번과 3번 결제가 나왔다. 둘 중 하나를 바로 지우면 안 되는 이유는?",
    choices: [
      "외래 키 때문에 지울 수 없어서",
      "결제 시각이 다른 정상 할부라서, 중복 기준에 시각까지 넣어야 해서",
      "count(*)가 NULL을 세지 않아서",
      "HAVING은 지우기 전에 VACUUM이 필요해서",
    ],
    answer: 1,
    explanation:
      "같은 수강에 같은 금액이어도 10월과 11월에 나눠 낸 할부다. 무엇이 같으면 중복인지는 업무가 정한다. 이 글에서는 결제 시각까지 같아야 같은 결제로 봤다.",
    anchor: "같은-결제가-두-번-들어갔다",
  },
  {
    id: "sql-interview-problems-4",
    post: "sql-interview-problems",
    question:
      "DELETE FROM payments a USING payments b WHERE a.enrollment_id = b.enrollment_id AND ... AND a.id > b.id가 enrollment_id가 NULL인 중복을 지우지 못했다. 왜인가?",
    choices: [
      "USING은 NULL 행을 읽지 않아서",
      "a.id > b.id 조건이 NULL을 걸러서",
      "NULL = NULL은 참이 아니라 짝이 맺어지지 않아서",
      "NULL 행은 RETURNING에 나오지 않아서",
    ],
    answer: 2,
    explanation:
      "NULL끼리의 = 비교는 알 수 없음이 되어 조인 조건을 통과하지 못한다. IS NOT DISTINCT FROM으로 비교해야 지워진다. row_number의 PARTITION BY는 NULL끼리 한 묶음으로 보니 이 문제가 없다.",
    anchor: "같은-결제가-두-번-들어갔다",
  },
  {
    id: "sql-interview-problems-5",
    post: "sql-interview-problems",
    question:
      "sum(amount) OVER (PARTITION BY student_id ORDER BY paid_at)로 누적을 냈더니 같은 시각 결제 두 건이 같은 누적값을 받았다. 고치는 방법은?",
    choices: [
      "ORDER BY paid_at, id ROWS UNBOUNDED PRECEDING으로 프레임과 순서를 정한다",
      "PARTITION BY를 지운다",
      "sum을 count로 바꾼다",
      "GROUP BY paid_at을 추가한다",
    ],
    answer: 0,
    explanation:
      "프레임을 생략하면 RANGE라서 정렬 값이 같은 행을 한꺼번에 더한다. ROWS로 한 줄씩 쌓고, 동점의 순서를 id로 고정한다. PARTITION BY를 지우면 수강생 구분이 사라진다.",
    anchor: "수강생별-누적-결제액",
  },
  {
    id: "sql-interview-problems-6",
    post: "sql-interview-problems",
    question:
      "출석 날짜에서 row_number를 빼서 연속 구간을 묶었더니 10월 4~6일 연속 출석한 choi가 1일과 2일 두 구간으로 갈라졌다. 원인은?",
    choices: [
      "date에서 bigint를 빼서 반올림 오차가 생겨서",
      "PARTITION BY student_id가 빠져서",
      "날짜가 timestamptz라서",
      "10월 4일 출석이 두 번 기록돼 순번만 하나 더 늘어서",
    ],
    answer: 3,
    explanation:
      "같은 날짜가 두 줄이면 날짜는 그대로인데 순번이 늘어 열쇠가 바뀐다. 날짜를 DISTINCT로 먼저 줄이거나, 같은 날짜에 같은 순번을 주는 dense_rank를 쓰면 4일부터 6일까지 한 구간이 된다.",
    anchor: "연속-출석-구간-찾기",
  },
  {
    id: "sql-interview-problems-7",
    post: "sql-interview-problems",
    question:
      "\"3일 이상 연속 출석한 사람\"을 lag(day, 2) = day - 2로 푼 답과 섬 열쇠(day - row_number)로 푼 답을 비교하면?",
    choices: [
      "lag 풀이는 틀린 답을 낸다",
      "둘 다 되지만, 가장 긴 연속 일수나 다른 N으로 바뀌면 섬 열쇠 방식은 HAVING 숫자만 바꾸면 된다",
      "섬 열쇠 방식은 중복 출석이 있어도 DISTINCT가 필요 없다",
      "lag 풀이는 PostgreSQL에서만 된다",
    ],
    answer: 1,
    explanation:
      "정확히 3일 연속만 물으면 lag로 이틀 전을 보는 풀이도 짧고 맞다. 하지만 가장 긴 연속을 묻거나 N이 바뀌면 다시 짜야 한다. 섬 열쇠 방식도 중복 날짜는 먼저 줄여야 한다.",
    anchor: "3일-이상-연속으로-나온-사람",
  },
];
