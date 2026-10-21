import type { QuizQuestion } from "../types";

export const DDD_BOUNDED_CONTEXT: QuizQuestion[] = [
  {
    id: "ddd-bounded-context-1",
    post: "ddd-bounded-context",
    question:
      "판매와 정산이 같은 orders.status = 'CANCELLED'를 보고 서로 다른 것을 세서 매출이 어긋났다. DDD 관점에서 뿌리 원인은?",
    choices: [
      "인덱스가 없어서 집계가 틀렸다",
      "한 단어가 두 컨텍스트에서 다른 뜻으로 쓰이는데 경계와 번역 없이 한 컬럼을 공유했다",
      "트랜잭션 격리 수준이 낮았다",
      "이벤트에 버전 필드가 없었다",
    ],
    answer: 1,
    explanation:
      "판매의 '취소'는 결제 전 주문을 버리는 것이고, 정산의 '취소'는 환불까지 끝난 거래다. 각 컨텍스트가 자기 말로 이름을 붙이고 경계에서 번역해야 같은 행을 다르게 세는 일이 없어진다.",
    anchor: "한-단어가-한-뜻으로-쓰이는-울타리",
  },
  {
    id: "ddd-bounded-context-2",
    post: "ddd-bounded-context",
    question: "배송 컨텍스트가 OrderPlaced 이벤트를 처리하다 'Cannot read properties of undefined (reading weightG)'로 죽었다. 가장 알맞은 대응은?",
    choices: [
      "판매 이벤트에 상품 무게를 함께 싣는다",
      "배송이 카탈로그 DB의 products 테이블을 직접 조회한다",
      "모르는 상품이면 '무게 확인 필요' 상태로 두고, 상품 정보가 오면 다시 계산하거나 따로 모아 재처리한다",
      "이벤트를 버리고 다음 이벤트로 넘어간다",
    ],
    answer: 2,
    explanation:
      "컨텍스트 사이 데이터는 결국에는 맞춰지는 관계라서 늦게 도착하는 정보를 전제로 짜야 한다. 무게는 판매의 개념이 아니라 이벤트에 싣지 않고, 남의 DB를 직접 읽으면 경계가 무너진다.",
    anchor: "상품-하나-모델-셋",
  },
  {
    id: "ddd-bounded-context-3",
    post: "ddd-bounded-context",
    question: "두 요청이 같은 주문(80,000원)을 동시에 읽고 각자 15,000원, 18,000원짜리 줄을 더했다. 버전 없이 저장하면 어떻게 되나?",
    choices: [
      "두 번째 요청이 자동으로 실패한다",
      "PostgreSQL이 한도 초과를 감지해 막는다",
      "합계가 113,000원으로 정확히 저장된다",
      "실제 합계는 한도를 넘고, 저장된 합계도 한쪽 변경을 덮어써서 틀린다",
    ],
    answer: 3,
    explanation:
      "각 요청은 같은 옛 상태를 보고 옳게 판단했지만, 둘을 합친 결과는 불변식을 깨고 total 컬럼도 덮어쓴다. 실제로 stored_total 95000, real_total 113000이 나왔다.",
    anchor: "두-요청이-같은-주문을-동시에-고칠-때",
  },
  {
    id: "ddd-bounded-context-4",
    post: "ddd-bounded-context",
    question:
      "B가 version = 1 조건으로 행을 바꾸고 아직 커밋하지 않았을 때 A가 같은 조건의 UPDATE를 보냈다. PostgreSQL 기본 격리 수준에서 A는?",
    choices: [
      "B가 커밋할 때까지 기다린 뒤, 새 행에 조건을 다시 대 보고 UPDATE 0이 된다",
      "기다리지 않고 바로 UPDATE 1이 된다",
      "곧바로 직렬화 실패 에러를 받는다",
      "B의 변경을 덮어쓰고 UPDATE 1이 된다",
    ],
    answer: 0,
    explanation:
      "Read Committed에서 UPDATE는 다른 트랜잭션이 잡은 행 잠금을 기다리고, 그 트랜잭션이 커밋하면 새 행 버전으로 WHERE를 다시 확인한다. 이미 version이 2라서 0건을 바꾼다.",
    anchor: "두-요청이-같은-주문을-동시에-고칠-때",
  },
  {
    id: "ddd-bounded-context-5",
    post: "ddd-bounded-context",
    question: "'고객 등급 계산이 쉬우니 고객 애그리거트 아래에 주문 전체를 두자'는 제안의 문제는?",
    choices: [
      "고객 ID를 쓸 수 없게 된다",
      "주문 하나를 고칠 때마다 고객 전체를 불러오고, 같은 고객의 무관한 주문끼리 충돌한다",
      "이벤트를 발행할 수 없다",
      "주문 줄을 저장할 테이블이 사라진다",
    ],
    answer: 1,
    explanation:
      "애그리거트는 불변식이 묶는 만큼만 작게 잡는다. 크게 묶으면 저장 단위와 잠금 범위가 커져 동시 요청이 버전 충돌로 실패한다. 고객 등급은 주문 이벤트를 받아 나중에 계산해도 된다.",
    anchor: "애그리거트-한-번에-지켜야-하는-규칙의-크기",
  },
  {
    id: "ddd-bounded-context-6",
    post: "ddd-bounded-context",
    question: "택배사 API의 필드 이름과 상태 코드를 배송 컨텍스트가 그대로 받아 쓰기로 했다. 이 관계의 이름은?",
    choices: ["공유 커널", "고객과 공급자", "순응자", "공개 호스트 서비스"],
    answer: 2,
    explanation:
      "위쪽이 우리 요구를 들어줄 리 없을 때 그 모델을 그대로 따르는 관계가 순응자다. 고객과 공급자는 위쪽이 아래쪽 요구를 계획에 반영해 주는 관계라 다르다.",
    anchor: "경계-사이에-놓는-관계",
  },
  {
    id: "ddd-bounded-context-7",
    post: "ddd-bounded-context",
    question: "바운디드 컨텍스트와 마이크로서비스의 관계로 맞는 것은?",
    choices: [
      "컨텍스트 하나는 반드시 서비스 하나다",
      "여러 컨텍스트를 한 서비스 안의 모듈로 둬도 된다. 컨텍스트는 모델의 경계, 서비스는 배포 단위다",
      "서비스가 작을수록 컨텍스트도 작게 나눠야 한다",
      "한 컨텍스트를 여러 서비스로 쪼개는 게 권장된다",
    ],
    answer: 1,
    explanation:
      "컨텍스트는 단어와 모델이 하나로 통하는 범위일 뿐 배포 단위를 정하지 않는다. 한 컨텍스트를 여러 서비스로 쪼개면 같은 모델을 나눠 가진 서비스들이 늘 함께 배포된다.",
    anchor: "경계를-잘못-그었을-때-보이는-것",
  },
];
