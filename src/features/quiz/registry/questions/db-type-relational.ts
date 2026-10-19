import type { QuizQuestion } from "../types";

export const DB_TYPE_RELATIONAL: QuizQuestion[] = [
  {
    id: "db-type-relational-1",
    post: "db-type-relational",
    question: "관계형 DB가 대부분 서비스의 기본값이 되는 가장 큰 이유는?",
    choices: [
      "어떤 규모에서도 쓰기를 여러 서버로 나눌 수 있어서",
      "스키마 없이 아무 모양이나 저장할 수 있어서",
      "항상 다른 DB보다 빠르기 때문에",
      "질문을 미리 몰라도 사실 단위로 나눈 표를 조인해 답할 수 있어서",
    ],
    answer: 3,
    explanation:
      "테이블은 각자 자기 사실만 담고, 어떤 조합으로 묶을지는 읽을 때 SQL로 정한다. 서비스가 자라며 처음엔 몰랐던 질문이 계속 생기는데, 저장 구조를 바꾸지 않고 답할 수 있다. 쓰기를 여러 서버로 나누는 건 오히려 관계형의 약점이다.",
    anchor: "미리-몰랐던-질문에-답하기",
  },
  {
    id: "db-type-relational-2",
    post: "db-type-relational",
    question: "회원 한 명의 주문 조회는 Nested Loop, 한 달 매출 집계는 Hash Join으로 실행됐다. 같은 테이블을 조인하는데 방법이 다른 이유는?",
    choices: [
      "옵티마이저가 통계를 보고 찾을 행 수에 따라 더 싼 방법을 골랐기 때문에",
      "SQL에 조인 방법을 다르게 적었기 때문에",
      "Hash Join은 인덱스가 없을 때만 쓰이기 때문에",
      "두 번째 쿼리에 GROUP BY가 있어서 Nested Loop가 금지되기 때문에",
    ],
    answer: 0,
    explanation:
      "SQL은 결과만 말하고 방법은 옵티마이저가 고른다. 몇 행이면 인덱스로 하나씩 따라가는 게 싸고, 5만 행이면 한쪽으로 해시 테이블을 만들고 다른 쪽을 순차로 읽는 게 싸다. 그래서 데이터가 바뀌면 같은 SQL의 계획도 바뀐다.",
    anchor: "무엇을-원하는지만-쓰면-방법은-db가-고른다",
  },
  {
    id: "db-type-relational-3",
    post: "db-type-relational",
    question: "PostgreSQL이 COMMIT 성공을 돌려주는 시점(synchronous_commit = on)은?",
    choices: [
      "바뀐 데이터 페이지가 데이터 파일에 써졌을 때",
      "복제본이 변경을 적용했을 때",
      "커밋 레코드까지 WAL이 디스크에 fsync됐을 때",
      "UPDATE 문이 메모리에서 끝났을 때",
    ],
    answer: 2,
    explanation:
      "바뀐 페이지는 메모리에 두고 체크포인트가 나중에 쓴다. 커밋은 변경 기록을 WAL 끝에 덧붙이고 디스크에 닿은 뒤 끝나서, 직후 전원이 나가도 재시작 때 WAL을 다시 실행해 살려 낸다. 복제본까지 기다리는 건 동기 복제를 따로 설정했을 때다.",
    anchor: "커밋이-끝났다는-건-로그가-디스크에-닿았다는-뜻",
  },
  {
    id: "db-type-relational-4",
    post: "db-type-relational",
    question: "마지막 한 권을 두 사람이 동시에 살 때 재고가 음수가 되지 않게 하는 방법으로 가장 알맞은 것은?",
    choices: [
      "SELECT로 재고를 읽고 앱에서 1을 빼서 UPDATE한다",
      "UPDATE ... SET stock = stock - 1 WHERE id = ? AND stock >= 1 처럼 조건부로 한 문장에 처리한다",
      "재고 열을 text 타입으로 바꾼다",
      "트랜잭션 없이 빠르게 두 번 실행한다",
    ],
    answer: 1,
    explanation:
      "조건을 UPDATE에 같이 걸면 뒤에 온 트랜잭션은 앞 트랜잭션이 끝날 때까지 기다렸다가 조건을 다시 보고 UPDATE 0을 받는다. 읽고 나서 계산해 쓰면 그 사이에 다른 요청이 끼어드는 틈이 생긴다. CHECK (stock >= 0)는 마지막 방어선이다.",
    anchor: "표-여러-개를-한-번에-바꾸는-트랜잭션",
  },
  {
    id: "db-type-relational-5",
    post: "db-type-relational",
    question: "관계형 DB의 확장 한계가 생기는 근본 원인은?",
    choices: [
      "SQL 문법이 복잡해서",
      "인덱스를 B-tree로만 만들 수 있어서",
      "읽기 복제본을 만들 수 없어서",
      "조인과 트랜잭션이 데이터가 한 곳에 있다는 전제로 싸기 때문에 쓰기를 한 프라이머리에 모으기 때문",
    ],
    answer: 3,
    explanation:
      "읽기는 복제본으로 나누지만 쓰기를 받는 프라이머리는 보통 한 대다. 샤딩하면 샤드를 넘는 조인과 트랜잭션이 비싸지거나 불가능해져 관계형의 장점을 깎는다. 그래서 그 단계를 DB가 대신해 주는 분산 SQL이 나왔다.",
    anchor: "한-대를-넘어서면-어려워지는-것",
  },
  {
    id: "db-type-relational-6",
    post: "db-type-relational",
    question: "order_items에 주문 당시 price를 따로 저장하는 이유는?",
    choices: [
      "books.price와는 다른 사실(주문 당시 가격)이라 책 가격이 바뀌어도 지난 주문 금액이 그대로여야 해서",
      "조인을 피하려고 일부러 반정규화했기 때문에",
      "외래 키 제약을 걸기 위해서",
      "books 테이블이 너무 커서",
    ],
    answer: 0,
    explanation:
      "books.price는 지금 가격이고 order_items.price는 주문한 순간의 가격이다. 같은 값을 두 번 적은 중복이 아니라 서로 다른 사실이라 정규화와 충돌하지 않는다.",
    anchor: "표와-키로-나눠-담는-이유",
  },
];
