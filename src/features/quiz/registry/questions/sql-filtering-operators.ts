import type { QuizQuestion } from "../types";

export const SQL_FILTERING_OPERATORS: QuizQuestion[] = [
  {
    id: "sql-filtering-operators-1",
    post: "sql-filtering-operators",
    question:
      "students의 city가 seoul, busan, NULL, seoul, daegu일 때 `WHERE city NOT IN ('seoul', NULL)`은 몇 행을 돌려주나?",
    choices: ["0행", "2행 (busan, daegu)", "3행 (busan, NULL, daegu)", "5행 전부"],
    answer: 0,
    explanation:
      "NOT IN은 city <> 'seoul' AND city <> NULL이고, 뒤쪽이 항상 모름이라 참 AND 모름도 모름이 된다. WHERE는 참인 행만 남기니 어떤 행도 통과하지 못한다.",
    anchor: "목록에-null-하나가-섞이면",
  },
  {
    id: "sql-filtering-operators-2",
    post: "sql-filtering-operators",
    question:
      "앱이 제외할 id 목록을 `WHERE id <> ALL($1)`로 넘기는데 목록이 빈 배열이면 결과는?",
    choices: [
      "문법 에러가 난다",
      "0행이 나온다",
      "모든 행이 나온다",
      "NULL 한 행이 나온다",
    ],
    answer: 2,
    explanation:
      "빈 배열의 <> ALL은 제외할 것이 없다는 뜻이라 모든 행에서 참이다. IN ()은 문법 에러지만 = ANY('{}')는 0행, <> ALL('{}')는 전체가 나오니 화면의 의도와 맞는지 확인한다.",
    anchor: "목록에-null-하나가-섞이면",
  },
  {
    id: "sql-filtering-operators-3",
    post: "sql-filtering-operators",
    question:
      "timestamptz 컬럼에 `BETWEEN '2026-10-01' AND '2026-10-31'`로 10월을 셌더니 31일 저녁 수강이 빠졌다. 가장 좋은 수정은?",
    choices: [
      "끝 값을 '2026-10-31 23:59:59'로 바꾼다",
      "enrolled_at::date BETWEEN '2026-10-01' AND '2026-10-31'로 바꾼다",
      "enrolled_at >= '2026-10-01' AND enrolled_at < '2026-11-01'로 바꾼다",
      "BETWEEN SYMMETRIC을 쓴다",
    ],
    answer: 2,
    explanation:
      "날짜만 쓴 끝 값은 31일 0시라서 그날이 빠진다. 23:59:59는 소수 초를 놓치고, ::date 변환은 인덱스를 못 쓰니 다음 달 시작 미만으로 끝내는 반열린 구간이 맞다.",
    anchor: "10월은-31일-0시에-끝난다",
  },
  {
    id: "sql-filtering-operators-4",
    post: "sql-filtering-operators",
    question:
      "KST 기준 10월을 고르는 `enrolled_at >= '2026-10-01' AND enrolled_at < '2026-11-01'`을 세션 TimeZone이 UTC인 배치에서 돌리면?",
    choices: [
      "결과가 KST 세션과 항상 같다",
      "범위가 9시간 늦게 시작하고 늦게 끝나서 경계 근처 행이 바뀐다",
      "timestamptz는 시간대 없는 문자열과 비교할 수 없어 에러가 난다",
      "UTC 세션에서는 인덱스를 쓰지 못한다",
    ],
    answer: 1,
    explanation:
      "시간대 없는 문자열은 세션 시간대의 0시로 읽혀서 UTC 0시, 즉 KST 오전 9시가 경계가 된다. 개수는 같아도 10월 1일 0시 행이 빠지고 11월 1일 0시 행이 들어올 수 있으니 경계에 +09나 AT TIME ZONE을 적는다.",
    anchor: "같은-쿼리-다른-시간대",
  },
  {
    id: "sql-filtering-operators-5",
    post: "sql-filtering-operators",
    question: "`CREATE INDEX ON enrollments_big ((enrolled_at::date))`가 실패하는 이유는?",
    choices: [
      "timestamptz를 date로 바꾼 결과가 세션 시간대에 따라 달라 IMMUTABLE이 아니어서",
      "식 인덱스는 PostgreSQL에서 지원하지 않아서",
      "date 타입에는 B-tree 인덱스를 만들 수 없어서",
      "이미 enrolled_at 인덱스가 있어서",
    ],
    answer: 0,
    explanation:
      "인덱스에 저장할 식은 같은 입력에 항상 같은 결과를 내야 하는데, timestamptz의 날짜는 세션 TimeZone에 따라 바뀐다. 하루 범위를 >=와 <로 쓰면 기존 enrolled_at 인덱스로 범위만 읽는다.",
    anchor: "날짜로-잘라-비교하면-인덱스를-못-쓴다",
  },
  {
    id: "sql-filtering-operators-6",
    post: "sql-filtering-operators",
    question: "`'1000명 SQL' LIKE '100\\%%'`의 결과와 이유로 맞는 것은?",
    choices: [
      "참. %가 두 개라 아무 글자나 맞는다",
      "참. 백슬래시는 무시된다",
      "에러. 패턴에 %를 연달아 쓸 수 없다",
      "거짓. \\%는 퍼센트 글자 자체라서 100 다음에 %가 있어야 한다",
    ],
    answer: 3,
    explanation:
      "PostgreSQL LIKE의 기본 이스케이프 문자는 백슬래시라서 \\%는 와일드카드가 아니라 진짜 퍼센트다. 그래서 '100%'로 시작하는 문자열만 맞고, 이스케이프 없는 '100%'였다면 1000명 SQL도 맞았다.",
    anchor: "like가-특별하게-읽는-두-글자",
  },
  {
    id: "sql-filtering-operators-7",
    post: "sql-filtering-operators",
    question:
      "pg_trgm GIN 인덱스를 만든 뒤에도 `title LIKE '%34%'`가 Seq Scan으로 나왔다. 가장 그럴듯한 이유는?",
    choices: [
      "검색어가 두 글자라 온전한 세 글자 조각이 없어 인덱스로 범위를 좁힐 수 없어서",
      "GIN 인덱스는 LIKE를 지원하지 않아서",
      "ILIKE가 아니라 LIKE를 써서",
      "text_pattern_ops 인덱스가 먼저 선택돼서",
    ],
    answer: 0,
    explanation:
      "trgm 인덱스는 검색어의 세 글자 조각으로 후보를 찾는데 두 글자 검색어에서는 쓸 만한 조각이 나오지 않는다. 같은 인덱스로 '%튜닝 1234%'는 Bitmap Index Scan이 됐고 ILIKE도 됐다.",
    anchor: "앞이-열린-검색과-인덱스",
  },
];
