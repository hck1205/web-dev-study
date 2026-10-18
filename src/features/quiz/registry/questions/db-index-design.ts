import type { QuizQuestion } from "../types";

export const DB_INDEX_DESIGN: QuizQuestion[] = [
  {
    id: "db-index-design-1",
    post: "db-index-design",
    question: "WHERE status = 'pending' AND created_at >= '2026-09-13' 조건에 가장 적은 페이지를 읽는 인덱스는?",
    choices: [
      "(created_at, status)",
      "(status)",
      "(created_at)",
      "(status, created_at)",
    ],
    answer: 3,
    explanation:
      "같다로 비교하는 status를 앞에 두면 pending이면서 날짜 조건에 맞는 항목이 인덱스 안에서 한 덩어리로 붙는다. (created_at, status)는 한 달 치 항목을 다 훑으며 status를 확인해야 해서 예제에서 418페이지를 읽었고, (status, created_at)은 8페이지를 읽었다.",
    anchor: "여러-컬럼-인덱스는-순서가-결과를-바꾼다",
  },
  {
    id: "db-index-design-2",
    post: "db-index-design",
    question: "(status, created_at) 인덱스로 날짜와 금액(amount)을 가져오는 쿼리가 545페이지를 읽었다. INCLUDE (amount)를 붙인 인덱스로 8페이지가 된 이유는?",
    choices: [
      "amount가 인덱스 잎에 함께 있어서 행마다 힙을 찾아갈 필요가 없어졌기 때문이다",
      "amount까지 정렬 키가 되어 범위가 더 좁아졌기 때문이다",
      "INCLUDE 인덱스는 테이블을 메모리에 미리 올려 두기 때문이다",
      "INCLUDE를 쓰면 가시성 맵을 보지 않아도 되기 때문이다",
    ],
    answer: 0,
    explanation:
      "amount가 인덱스에 없으면 찾은 869건마다 힙에 가서 금액을 가져와야 한다. INCLUDE 컬럼은 잎에만 저장되고 정렬 기준에는 들어가지 않으며, 쿼리에 필요한 컬럼이 모두 인덱스에 있으면 Index Only Scan이 된다. 이때도 가시성 맵은 여전히 확인한다.",
    anchor: "표까지-가지-않는-커버링-인덱스",
  },
  {
    id: "db-index-design-3",
    post: "db-index-design",
    question: "CREATE INDEX ... ON orders (created_at) WHERE status = 'pending'으로 만든 부분 인덱스를 쓸 수 없는 쿼리는?",
    choices: [
      "WHERE status = 'pending' AND created_at >= '2026-09-13'",
      "WHERE status = 'pending' ORDER BY created_at DESC LIMIT 20",
      "SELECT count(*) ... WHERE status = 'pending' AND created_at >= '2026-10-01'",
      "WHERE status = 'paid' AND created_at >= '2026-09-13'",
    ],
    answer: 3,
    explanation:
      "부분 인덱스는 pending인 행만 담고 있어서 조건이 인덱스의 WHERE와 맞을 때만 쓰인다. paid 주문은 인덱스 안에 아예 없으니 이 인덱스로 찾을 수 없다. 응용 코드가 status를 파라미터로 넘기면 일반 계획에서 못 쓸 수 있다는 점도 주의한다.",
    anchor: "일부-줄만-담는-부분-인덱스",
  },
  {
    id: "db-index-design-4",
    post: "db-index-design",
    question: "users (lower(email))로 유니크 식 인덱스를 만든 뒤, 인덱스를 타는 조건은?",
    choices: [
      "WHERE upper(email) = 'KIM@EXAMPLE.COM'",
      "WHERE lower(email) = 'kim@example.com'",
      "WHERE email = 'kim@example.com'",
      "WHERE lower(trim(email)) = 'kim@example.com'",
    ],
    answer: 1,
    explanation:
      "식 인덱스는 쿼리의 식이 인덱스의 식과 글자 그대로 같아야 쓰인다. upper나 trim을 더한 식은 인덱스에 없는 값이고, 원래 컬럼 email로 찾는 조건도 이 인덱스로는 찾지 못한다. 유니크라서 대소문자만 다른 이메일로 두 번 가입하는 것도 막는다.",
    anchor: "함수를-씌운-컬럼과-유니크-인덱스",
  },
  {
    id: "db-index-design-5",
    post: "db-index-design",
    question: "BRIN 인덱스가 created_at에서는 잘 맞고 user_id에서는 쓸모가 없는 이유는?",
    choices: [
      "BRIN은 숫자 타입을 색인하지 못하기 때문이다",
      "user_id는 값 종류가 너무 적기 때문이다",
      "created_at은 들어온 순서와 값의 순서가 같아 페이지 묶음마다 범위가 좁기 때문이다",
      "BRIN은 유니크한 컬럼에만 쓸 수 있기 때문이다",
    ],
    answer: 2,
    explanation:
      "BRIN은 128페이지 묶음마다 최솟값과 최댓값만 적어 둔다. 시간 순서로 쌓이는 created_at은 묶음마다 범위가 좁아 몇 묶음만 읽으면 되지만, 무작위로 흩어진 user_id는 모든 묶음의 범위가 넓어 결국 다 읽어야 한다. 이 정렬 정도는 pg_stats.correlation으로 확인한다.",
    anchor: "b-tree가-아닌-인덱스들",
  },
];
