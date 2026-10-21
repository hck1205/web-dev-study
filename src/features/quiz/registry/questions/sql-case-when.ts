import type { QuizQuestion } from "../types";

export const SQL_CASE_WHEN: QuizQuestion[] = [
  {
    id: "sql-case-when-1",
    post: "sql-case-when",
    question:
      "CASE WHEN score >= 60 THEN 'C' WHEN score >= 80 THEN 'B' WHEN score >= 90 THEN 'A' END에 95점을 넣으면 무엇이 나오나?",
    choices: ["A", "B", "NULL", "C"],
    answer: 3,
    explanation:
      "CASE는 위에서부터 보고 처음 참인 WHEN에서 멈춘다. 95 >= 60이 첫 줄에서 참이라 C가 되고 아래 조건은 보지 않는다. 겹치는 범위는 좁은 조건을 위에 둔다.",
    anchor: "위에서-아래로-처음-맞는-곳에서-멈춘다",
  },
  {
    id: "sql-case-when-2",
    post: "sql-case-when",
    question: "score가 NULL인 행에서 CASE score WHEN NULL THEN '미채점' ELSE '채점됨' END의 결과는?",
    choices: ["'미채점'", "'채점됨'", "NULL", "에러가 난다"],
    answer: 1,
    explanation:
      "단순형 CASE는 score = NULL을 계산하는데, NULL과의 같음 비교는 언제나 알 수 없음이라 참이 되지 못하고 ELSE로 간다. NULL을 가리려면 검색형으로 WHEN score IS NULL을 쓴다.",
    anchor: "위에서-아래로-처음-맞는-곳에서-멈춘다",
  },
  {
    id: "sql-case-when-3",
    post: "sql-case-when",
    question:
      "PostgreSQL에서 CASE WHEN score IS NULL THEN '미채점' ELSE score END가 invalid input syntax for type integer 에러를 낸다. 왜인가?",
    choices: [
      "따옴표 리터럴은 타입이 정해지지 않아서, 결과 타입을 integer로 정하고 '미채점'을 정수로 바꾸려 했다",
      "CASE 안에서는 한글 문자열을 쓸 수 없다",
      "ELSE에는 컬럼을 쓸 수 없다",
      "score 컬럼에 NULL이 있으면 CASE를 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "CASE의 결과는 칸 하나라 타입도 하나여야 한다. 타입이 정해지지 않은 리터럴은 상대 타입인 integer로 맞춰지고 변환에 실패한다. score::text로 바꿔 맞춘다.",
    anchor: "then마다-타입이-같아야-한다",
  },
  {
    id: "sql-case-when-4",
    post: "sql-case-when",
    question:
      "SELECT CASE WHEN id > 0 THEN 1 ELSE 1/0 END FROM enrollments는 id가 모두 양수인데도 division by zero로 실패한다. 이유는?",
    choices: [
      "CASE는 모든 THEN과 ELSE를 행마다 미리 계산한다",
      "id에 NULL이 있어서 ELSE로 갔다",
      "1/0은 상수식이라 플래너가 실행 전에 미리 계산하다 에러가 났다",
      "LIMIT이 없으면 CASE가 단락 평가를 하지 않는다",
    ],
    answer: 2,
    explanation:
      "CASE는 고른 줄만 계산하지만, 컬럼이 없는 상수식은 플래너가 상수 접기로 먼저 계산한다. 그래서 행을 읽기 전에 실패한다. 컬럼이 들어간 식은 실행 때 고른 줄만 계산된다.",
    anchor: "실행되지-않을-else가-에러를-낸다",
  },
  {
    id: "sql-case-when-5",
    post: "sql-case-when",
    question:
      "월별 매출 피벗에서 sum(CASE ... END)를 coalesce(..., 0)으로 감쌌다. 무엇이 사라지나?",
    choices: [
      "환불이 반영된 금액",
      "결제가 없던 달(NULL)과 결제·환불이 상쇄된 달(0)의 구분",
      "결제가 없는 강의의 줄",
      "월별 합계의 정확도",
    ],
    answer: 1,
    explanation:
      "CASE에 ELSE가 없으면 맞는 행이 없는 칸은 NULL이다. React의 11월은 5만 원 결제와 환불이 상쇄된 진짜 0인데, coalesce를 쓰면 결제가 아예 없던 칸도 0이 되어 둘이 같아 보인다.",
    anchor: "행을-열로-돌리기",
  },
  {
    id: "sql-case-when-6",
    post: "sql-case-when",
    question:
      "UPDATE courses SET price = CASE category WHEN 'db' THEN price * 9 / 10 WHEN 'infra' THEN price - 5000 ELSE price END를 WHERE 없이 실행했다. 문제는?",
    choices: [
      "frontend 강의의 가격이 NULL이 된다",
      "db 강의만 바뀌고 infra는 무시된다",
      "값이 바뀌지 않는 행까지 모두 새 버전으로 다시 써서 UPDATE 5가 된다",
      "CASE는 UPDATE의 SET에 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "ELSE price 덕분에 값은 맞지만 PostgreSQL은 값이 같아도 행의 새 버전을 쓰고 트리거를 돌린다. 큰 테이블이면 디스크, VACUUM, 복제에 부담이 된다. WHERE category IN ('db', 'infra')로 바꿀 행을 고르면 UPDATE 4가 된다. ELSE를 빠뜨렸을 때 NULL이 되는 쪽이 첫 번째 보기다.",
    anchor: "order-by와-update-안의-case",
  },
  {
    id: "sql-case-when-7",
    post: "sql-case-when",
    question:
      "(status, score) 인덱스가 있는데 WHERE CASE WHEN status = 'completed' THEN score >= 95 ELSE false END가 Seq Scan을 한다. 어떻게 고치나?",
    choices: [
      "WHERE status = 'completed' AND score >= 95로 풀어 쓴다",
      "인덱스를 (score, status) 순서로 다시 만든다",
      "ANALYZE를 다시 돌린다",
      "CASE를 단순형 CASE status WHEN ...으로 바꾼다",
    ],
    answer: 0,
    explanation:
      "플래너는 CASE 식 전체를 덩어리로 보고 안의 조건을 인덱스 조건으로 꺼내지 못한다. ELSE false인 CASE는 AND와 같은 뜻이고, 풀어 쓰자 Index Only Scan으로 25ms가 1.6ms가 됐다.",
    anchor: "where-안의-case는-인덱스를-막는다",
  },
];
