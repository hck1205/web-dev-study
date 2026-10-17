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
    question: "order_items에 주문 당시 가격(unit_price)을 저장하는 것에 대한 설명으로 맞는 것은?",
    choices: [
      "products.price와 중복이니 지우고 조인으로 가져와야 한다",
      "조회 성능을 위한 대표적인 반정규화 기법이다",
      "주문과 상품 둘 다에 종속인 별개의 사실이라 올바른 모델링이다",
      "트리거로 products.price와 항상 같게 맞춰야 한다",
    ],
    answer: 2,
    explanation:
      "주문 당시 가격은 '이 주문에서 얼마에 팔았나'라는 사실이라 지금 판매가와 다르다. 가격을 올렸을 때 과거 주문 금액이 바뀌면 안 되니 스냅숏으로 저장하는 게 맞다. 원본을 따라 바뀌어야 하는 값을 복사했을 때만 중복이다.",
    anchor: "주문-당시-가격은-중복이-아니다",
  },
  {
    id: "db-modeling-normalization-6",
    post: "db-modeling-normalization",
    question: "무작위 UUID(v4)를 기본키로 쓸 때 bigint identity보다 인덱스가 커지는 주된 이유는?",
    choices: [
      "UUID는 NULL을 허용해서",
      "UUID는 B-tree 인덱스를 쓸 수 없어서",
      "UUID 열에는 UNIQUE를 따로 걸어야 해서",
      "키가 16바이트로 두 배인 데다, 무작위 위치에 끼어들어 페이지 분할로 페이지가 덜 차서",
    ],
    answer: 3,
    explanation:
      "1씩 늘어나는 키는 늘 오른쪽 끝 페이지에 붙지만 v4는 인덱스 아무 곳에나 들어가 꽉 찬 페이지를 쪼갠다. 100만 줄 실험에서 리프 채움률이 90%에서 70%로 떨어지고 인덱스가 21MB에서 39MB가 됐다. 시간 순으로 정렬되는 UUIDv7을 쓰면 이 문제가 크게 줄어든다.",
    anchor: "자연-키와-대리-키-그리고-uuid",
  },
  {
    id: "db-modeling-normalization-7",
    post: "db-modeling-normalization",
    question: "deleted_at으로 소프트 삭제하는 users에서 탈퇴한 회원의 이메일로 재가입이 막힌다. PostgreSQL에서 알맞은 해결은?",
    choices: [
      "email의 UNIQUE를 지우고 앱에서 중복을 검사한다",
      "탈퇴할 때 이메일 뒤에 임의 문자열을 붙인다",
      "WHERE deleted_at IS NULL 조건을 단 부분 유니크 인덱스를 만든다",
      "email을 기본키로 바꾼다",
    ],
    answer: 2,
    explanation:
      "부분 유니크 인덱스는 살아 있는 회원끼리만 이메일이 유일하도록 DB가 지켜 준다. 앱 검사만 두면 동시에 들어온 두 가입 요청이나 다른 경로의 INSERT를 막지 못한다. 부분 인덱스가 없는 MySQL은 생성 열에 UNIQUE를 거는 방식으로 대신한다.",
    anchor: "자주-보는-설계-실수",
  },
];
