import type { QuizQuestion } from "../types";

export const DB_MODELING_NORMALIZATION: QuizQuestion[] = [
  {
    id: "db-modeling-normalization-1",
    post: "db-modeling-normalization",
    question: "회원 정보가 주문 줄마다 복사된 테이블에서, 주문을 하나뿐인 회원의 주문을 지웠더니 회원 정보까지 사라졌다. 이 현상은?",
    choices: ["갱신 이상", "삽입 이상", "삭제 이상", "갱신 손실"],
    answer: 2,
    explanation:
      "지우고 싶은 사실(주문)과 함께 다른 사실(회원)까지 사라지는 게 삭제 이상이다. 성격이 다른 사실이 한 줄에 묶여 있어서 생기고, 회원 정보를 별도 테이블로 떼면 없어진다. 갱신 손실은 동시에 고친 값이 덮어써지는 트랜잭션 문제라 다르다.",
    anchor: "한-테이블에-다-넣었을-때-생기는-일",
  },
  {
    id: "db-modeling-normalization-2",
    post: "db-modeling-normalization",
    question: "키가 (order_id, product_id)인 테이블에 주문일(ordered_at)이 들어 있다. 이 테이블이 어긴 정규형과 그 이유는?",
    choices: [
      "1NF. 주문일이 여러 값을 담고 있어서",
      "2NF. 주문일이 키의 일부인 order_id만으로 정해져서",
      "3NF. 주문일이 키가 아닌 다른 열을 거쳐 정해져서",
      "BCNF. 주문일이 후보키가 아닌 결정자여서",
    ],
    answer: 1,
    explanation:
      "주문일은 상품과 상관없이 주문 번호만 알면 정해지니 복합키의 일부에만 기대는 부분 함수 종속이다. 이걸 없애는 게 2NF라서 주문일은 order_id를 키로 하는 orders로 뗀다. 키가 아닌 열을 거쳐 정해지는 건 이행 종속이고 3NF가 다룬다.",
    anchor: "제2정규형-키의-일부에만-기대는-열-떼어-내기",
  },
  {
    id: "db-modeling-normalization-3",
    post: "db-modeling-normalization",
    question: "orders에 user_email, user_name, phone이 함께 있을 때 3NF를 어기는 이유는?",
    choices: [
      "order_id → user_email → phone처럼 키가 아닌 열을 거쳐 정해지는 열이 있어서",
      "phone 칸에 값이 여러 개 들어갈 수 있어서",
      "user_email이 기본키가 아니어서",
      "orders의 기본키가 열 하나여서",
    ],
    answer: 0,
    explanation:
      "이름과 전화번호를 정하는 건 주문 번호가 아니라 이메일이다. 키가 아닌 열이 다른 키 아닌 열을 정하는 이행 함수 종속이라, 회원 정보를 users로 떼고 orders에는 회원 번호만 남긴다. 기본키가 열 하나인 건 오히려 2NF를 자동으로 만족시키는 조건이다.",
    anchor: "제3정규형-키가-아닌-열을-거쳐-정해지는-열",
  },
  {
    id: "db-modeling-normalization-4",
    post: "db-modeling-normalization",
    question: "(product_id, region) → warehouse이고 warehouse → region인 테이블은 3NF인데 BCNF가 아니다. 왜 3NF는 통과하나?",
    choices: [
      "warehouse가 기본키의 일부라서",
      "region이 키의 일부(주요 속성)라서 3NF의 이행 종속 규칙에 걸리지 않아서",
      "warehouse에 UNIQUE가 걸려 있어서",
      "region 값이 원자값이라서",
    ],
    answer: 1,
    explanation:
      "3NF는 키가 아닌 열이 키가 아닌 열을 정하는 걸 막는데, 여기서 정해지는 region은 키의 일부라 예외로 통과한다. BCNF는 모든 결정자가 후보키여야 한다는 더 엄격한 규칙이라, 후보키가 아닌 warehouse가 결정자인 순간 위반이다.",
    anchor: "bcnf-결정자가-모두-후보키여야-한다",
  },
  {
    id: "db-modeling-normalization-5",
    post: "db-modeling-normalization",
    question: "orders_flat에서 '이메일 → 전화번호' 종속이 데이터에서 깨졌는지 확인하는 방법으로 가장 알맞은 것은?",
    choices: [
      "이메일로 GROUP BY하고 전화번호의 서로 다른 값 수가 2 이상인 묶음을 찾는다",
      "전화번호로 ORDER BY해서 같은 번호가 연속인지 본다",
      "이메일 열에 UNIQUE 제약을 걸어 본다",
      "count(*)와 count(phone)을 비교한다",
    ],
    answer: 0,
    explanation:
      "결정자가 같은 줄끼리 묶었을 때 종속자 값이 두 종류 이상이면 종속이 깨진 것이다. orders_flat은 같은 이메일이 여러 주문에 나오니 UNIQUE는 처음부터 걸 수 없다. 데이터에서 안 깨졌다고 규칙이 있다는 뜻은 아니니 업무 규칙으로도 확인한다.",
    anchor: "무엇이-무엇을-정하나-함수-종속",
  },
];
