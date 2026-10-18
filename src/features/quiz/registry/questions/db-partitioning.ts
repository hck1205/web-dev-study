import type { QuizQuestion } from "../types";

export const DB_PARTITIONING: QuizQuestion[] = [
  {
    id: "db-partitioning-1",
    post: "db-partitioning",
    question: "created_at으로 RANGE 파티션을 나눈 orders에서 WHERE id = 2500000만 주면 실행 계획은 어떻게 되나?",
    choices: [
      "기본 키 인덱스 하나로 바로 찾는다",
      "가장 최근 파티션 하나만 읽는다",
      "파티션 키가 없다는 에러가 난다",
      "모든 파티션의 인덱스를 하나씩 열어 보는 Append가 된다",
    ],
    answer: 3,
    explanation:
      "id만으로는 어느 달 파티션에 있는지 알 수 없어서 가지치기가 일어나지 않는다. 파티션마다 기본 키 인덱스를 한 번씩 타니 파티션이 늘수록 느려진다. 조건에 created_at 범위를 같이 주면 파티션 하나의 인덱스만 탄다.",
    anchor: "조건에-맞는-파티션만-읽는다",
  },
  {
    id: "db-partitioning-2",
    post: "db-partitioning",
    question: "1년 지난 주문을 지울 때 DELETE 대신 파티션을 DETACH하고 DROP하는 가장 큰 이유는?",
    choices: [
      "DETACH는 잠금을 전혀 잡지 않아서",
      "행을 하나씩 지우지 않으니 WAL과 죽은 행이 거의 생기지 않아서",
      "DROP한 파티션은 나중에 자동으로 복구할 수 있어서",
      "DELETE는 파티션 테이블에서 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "실험에서 31만 건 DELETE는 WAL 38MB와 죽은 행 31만 개를 남겼지만 DETACH와 DROP은 WAL 72kB로 끝났다. 파일을 지우는 일이라 행 수와 상관이 없고 복제본도 뒤처지지 않는다. 일반 DETACH도 잠깐 강한 잠금을 잡으니 lock_timeout을 건다.",
    anchor: "오래된-달은-통째로-떼어-낸다",
  },
  {
    id: "db-partitioning-3",
    post: "db-partitioning",
    question: "created_at으로 RANGE 파티션을 나눈 orders에 PRIMARY KEY (id)만 걸려고 하면 에러가 난다. 왜 그럴까?",
    choices: [
      "고유 인덱스가 파티션마다 따로 있어서, 파티션 키 없이는 다른 파티션의 같은 id를 확인할 수 없기 때문이다",
      "파티션 테이블에는 기본 키를 걸 수 없기 때문이다",
      "id가 bigint라서 파티션 키와 타입이 다르기 때문이다",
      "기본 키는 부모가 아니라 파티션마다 따로 만들어야 하기 때문이다",
    ],
    answer: 0,
    explanation:
      "9월 파티션의 인덱스는 10월 파티션에 같은 id가 있는지 모른다. 기본 키와 UNIQUE에 파티션 키가 들어가야 같은 파티션 안의 확인만으로 전체 고유성이 보장되니 (id, created_at)으로 만든다. 전역으로 고유해야 하는 값은 따로 작은 테이블에 UNIQUE를 건다.",
    anchor: "주문-테이블을-달마다-나눈다",
  },
  {
    id: "db-partitioning-4",
    post: "db-partitioning",
    question: "default 파티션이 있는 상태에서 11월 주문이 먼저 들어온 뒤 11월 파티션을 PARTITION OF로 만들면 어떻게 되나?",
    choices: [
      "default에 있던 11월 행이 새 파티션으로 자동으로 옮겨진다",
      "11월 행이 사라진다",
      "default에 이미 11월 행이 있어서 파티션 생성이 거절된다",
      "새 파티션이 만들어지고 11월 행은 default에 그대로 남는다",
    ],
    answer: 2,
    explanation:
      "새 파티션을 만들면 default의 범위가 줄어드는데, 그 범위의 행이 이미 default에 있으면 제약 위반으로 거절된다. 트랜잭션 안에서 같은 모양의 테이블을 만들어 행을 옮긴 뒤 ATTACH로 붙인다. 그래서 파티션은 몇 달 앞서 미리 만들어 둔다.",
    anchor: "오래된-달은-통째로-떼어-낸다",
  },
  {
    id: "db-partitioning-5",
    post: "db-partitioning",
    question: "user_id로 HASH 파티션을 나눈 carts 테이블에서 가지치기가 되는 조건은?",
    choices: [
      "WHERE user_id BETWEEN 1 AND 100",
      "WHERE user_id > 42",
      "WHERE product_id = 1001",
      "WHERE user_id = 42",
    ],
    answer: 3,
    explanation:
      "해시 파티션은 값의 해시로 파티션을 고르기 때문에 같음 조건에서만 어느 파티션인지 계산할 수 있다. 범위 조건은 해시가 흩어져 모든 파티션을 봐야 하고, 파티션 키가 아닌 product_id 조건도 마찬가지다. 그래서 오래된 것을 떼어 내는 용도로는 못 쓴다.",
    anchor: "목록과-해시로도-나눈다",
  },
];
