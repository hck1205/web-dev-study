import type { QuizQuestion } from "../types";

export const DB_PERFORMANCE_MAP: QuizQuestion[] = [
  {
    id: "db-performance-map-1",
    post: "db-performance-map",
    question:
      "회원 한 명의 최근 주문 10건을 찾는 쿼리가 `Parallel Seq Scan`과 `Rows Removed by Filter: 666659`(loops=3)를 보인다. 가장 먼저 할 일은?",
    choices: [
      "읽기 복제본을 추가한다",
      "`(user_id, created_at)` 순서의 인덱스를 만든다",
      "결과를 Redis에 캐시한다",
      "주문 테이블을 user_id로 샤딩한다",
    ],
    answer: 1,
    explanation:
      "22건을 찾으려고 200만 건을 읽고 버리고 있으니 읽는 범위를 좁히는 인덱스가 먼저다. 실습에서 77ms, 16,741페이지가 0.1ms, 16페이지로 줄었다. 인덱스 없이 복제본을 붙이면 복제본마다 테이블 전체를 읽는다.",
    anchor: "1-인덱스-읽을-범위를-좁힌다",
  },
  {
    id: "db-performance-map-2",
    post: "db-performance-map",
    question: "B-tree 인덱스가 행이 100배 늘어도 찾는 비용이 거의 그대로인 이유는?",
    choices: [
      "모든 키를 메모리에 올려 두기 때문에",
      "키를 해시해서 위치를 바로 계산하기 때문에",
      "페이지 하나가 수백 개의 자식을 가리켜 트리가 아주 낮기 때문에",
      "자주 찾는 키만 인덱스에 남기기 때문에",
    ],
    answer: 2,
    explanation:
      "B-tree는 8KB 페이지에 키를 수백 개 담아 갈래가 수백 개라서 층이 아주 적다. 200만 건이 3층, 같은 계산으로 1억 건은 4층, 100억 건도 5층이다. 해시 방식은 해시 인덱스의 설명이고, B-tree는 정렬을 유지한다.",
    anchor: "2-b-tree-200만-건에서-세-페이지만-내려간다",
  },
  {
    id: "db-performance-map-3",
    post: "db-performance-map",
    question:
      "pgbench에서 연결을 유지하면 초당 47,726건인데 `-C`(트랜잭션마다 새 연결)를 주면 288건으로 떨어졌다. 무엇을 보여 주나?",
    choices: [
      "PostgreSQL은 연결마다 프로세스를 띄우고 인증하는 준비 비용이 쿼리보다 훨씬 크다",
      "`SELECT 1` 쿼리 자체가 느리다",
      "`max_connections`가 너무 작다",
      "유닉스 소켓이 TCP보다 느리다",
    ],
    answer: 0,
    explanation:
      "연결 한 번에 평균 6.9ms가 들었고 쿼리는 0.084ms였다. 매번 연결하면 시간의 대부분이 준비에 쓰이니 커넥션 풀로 연결을 돌려 쓴다. 연결 수 한도를 올리는 것은 이 비용을 줄이지 못한다.",
    anchor: "3-커넥션-풀-연결을-미리-열어-두고-돌려-쓴다",
  },
  {
    id: "db-performance-map-4",
    post: "db-performance-map",
    question: "결제 직후 \"내 주문\" 화면에 방금 주문이 안 보인다는 문의가 온다. 읽기를 복제본으로 보내는 구조라면 원인과 대처로 알맞은 것은?",
    choices: [
      "캐시 수명이 너무 길다. TTL을 줄인다",
      "인덱스가 깨졌다. REINDEX한다",
      "파티션 가지치기가 안 된다. 파티션 키를 바꾼다",
      "복제 지연이다. 쓴 사용자의 직후 읽기는 주 DB로 보낸다",
    ],
    answer: 3,
    explanation:
      "복제본은 주 DB의 WAL을 받아 다시 실행하니 조금 늦게 따라온다. 그 사이 읽으면 방금 쓴 행이 없다. 쓴 사람의 직후 읽기만 주 DB로 보내거나, 복제본이 그 위치까지 따라왔는지 확인하고 읽는다.",
    anchor: "5-복제-읽기를-여러-대로-나눈다",
  },
  {
    id: "db-performance-map-5",
    post: "db-performance-map",
    question: "주문 테이블을 `created_at`으로 달마다 파티셔닝한 뒤 `WHERE user_id = 4242`만으로 조회하면 어떻게 되나?",
    choices: [
      "3월 파티션 하나만 읽는다",
      "어느 달에 있는지 몰라 13개 파티션을 모두 연다",
      "파티션 키가 없어서 쿼리가 에러를 낸다",
      "자동으로 user_id 인덱스가 만들어진다",
    ],
    answer: 1,
    explanation:
      "파티션 가지치기는 조건에 파티션 키가 있을 때만 된다. 실행 계획의 `Append` 아래에 13개 파티션이 모두 나왔다. 그래서 파티션 키는 거의 모든 쿼리에 들어가는 컬럼으로 고른다.",
    anchor: "6-파티셔닝-한-db-안에서-테이블을-범위로-쪼갠다",
  },
  {
    id: "db-performance-map-6",
    post: "db-performance-map",
    question: "주문 번호를 블룸 필터에 물었더니 \"있을 수도 있다\"고 답했다. 어떻게 처리해야 하나?",
    choices: [
      "이미 처리한 주문으로 보고 무시한다",
      "필터를 다시 만든다",
      "DB에서 실제로 있는지 확인한다",
      "새 주문으로 처리한다",
    ],
    answer: 2,
    explanation:
      "블룸 필터는 없는 것을 있다고 할 수는 있지만 있는 것을 없다고 하지는 않는다. 실습에서 없는 번호 10만 개 중 1,005개가 \"있을 수도\"였다. 그래서 \"있을 수도\"일 때만 DB로 확인하고, \"확실히 없음\"이면 DB에 가지 않는다.",
    anchor: "7-블룸-필터-없는-것은-db에-묻지-않는다",
  },
  {
    id: "db-performance-map-7",
    post: "db-performance-map",
    question: "`user_id % 샤드 수`로 나눈 샤드를 4대에서 5대로 늘리면 회원 10만 명 중 몇 %가 옮겨 가나?",
    choices: ["20%", "25%", "50%", "80%"],
    answer: 3,
    explanation:
      "나머지 연산은 샤드 수가 바뀌면 대부분의 키의 결과가 달라져서, 실습에서 8만 명(80%)이 이동했다. 그래서 논리 조각을 미리 많이 만들어 조각 단위로 옮기거나 일관된 해싱을 쓴다. 20%는 새 샤드가 가져갈 몫일 뿐 실제 이동량이 아니다.",
    anchor: "8-샤딩-데이터를-여러-db-서버에-나눠-담는다",
  },
];
