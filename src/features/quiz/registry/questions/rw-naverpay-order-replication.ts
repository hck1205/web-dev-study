import type { QuizQuestion } from "../types";

export const RW_NAVERPAY_ORDER_REPLICATION: QuizQuestion[] = [
  {
    id: "rw-naverpay-order-replication-1",
    post: "rw-naverpay-order-replication",
    question: "네이버페이가 구매자 기준으로 샤딩한 주문 DB와 별도로 판매자 DB를 두는 이유는?",
    choices: [
      "구매자 샤드가 가득 차서 데이터를 옮기려고",
      "판매자 기준 조회를 구매자 샤드에서 하면 모든 샤드를 훑어야 해서, 판매자 번호로 다시 샤딩한 사본을 두고 변경을 복제한다",
      "판매자 DB가 원본이고 주문 DB가 사본이라서",
      "Oracle 라이선스를 줄이려고",
    ],
    answer: 1,
    explanation:
      "샤드 키가 아닌 키로 찾는 질문은 모든 샤드에 물어야 한다. 판매자 단위 조회가 자주 오고 빨라야 하니, 같은 데이터를 판매자 번호로 샤딩한 사본을 만들고 CDC로 계속 동기화한다. 원본은 여전히 구매자 기준 주문 DB다.",
    anchor: "구매자로-나눈-주문-판매자로-다시-나눈-사본",
  },
  {
    id: "rw-naverpay-order-replication-2",
    post: "rw-naverpay-order-replication",
    question: "ergate의 복제 job이 한 건 복제에 실패했을 때의 동작으로 맞는 것은?",
    choices: [
      "전체 복제를 멈추고 운영자 확인을 기다린다",
      "같은 건을 성공할 때까지 즉시 무한 재시도한다",
      "그 건은 넘어가고 다음 데이터를 계속 복제하며, 2분 늦게 도는 검증이 잡아 DLQ와 복구 흐름으로 고친다",
      "원본 DB의 해당 변경을 롤백한다",
    ],
    answer: 2,
    explanation:
      "옛 도구 mig-data는 양방향 복제의 무결성 때문에 한 건 실패가 전체 지연으로 번졌다. ergate는 복제 경로를 멈추지 않게 두고, 정확성은 지연 검증, DLQ, 5분 뒤 자동 복구, 배치와 수동 복구가 책임진다.",
    anchor: "복제하고-늦게-검증하고-고친다",
  },
  {
    id: "rw-naverpay-order-replication-3",
    post: "rw-naverpay-order-replication",
    question: "verifier가 레코드와 대상 행이 다를 때 바로 실패로 보지 않고 원본의 현재 행을 다시 읽어 비교하는 이유는?",
    choices: [
      "레코드가 암호화돼 있어서",
      "2분 지연 동안 그 행이 다시 바뀌었으면 레코드와 대상이 다른 게 당연해, 오검출을 줄이려고",
      "원본 DB가 더 빨라서",
      "대상 DB에는 PK가 없어서",
    ],
    answer: 1,
    explanation:
      "검증은 같은 토픽을 2분 늦게 읽어 그 시점의 대상 행과 비교한다. 그 사이 새 변경이 있었다면 레코드 값은 이미 옛 값이다. 원본의 현재 행과 다시 비교해야 진짜 불일치만 남는다.",
    anchor: "복제하고-늦게-검증하고-고친다",
  },
  {
    id: "rw-naverpay-order-replication-4",
    post: "rw-naverpay-order-replication",
    question: "Flink 키를 Kafka 레코드 키(구매자 번호) 대신 '구매자 번호 + 테이블 이름'으로 바꾼 효과는?",
    choices: [
      "Kafka 파티션의 쏠림이 Flink 슬롯까지 이어지던 데이터 스큐가 분산돼 처리 시간이 130ms에서 70ms로 줄었다",
      "같은 테이블의 변경 순서가 깨져 정확도가 떨어졌다",
      "직렬화가 필요 없어져 200ms가 130ms가 됐다",
      "배치 크기가 자동으로 조절됐다",
    ],
    answer: 0,
    explanation:
      "샤딩 키 하나를 처리 키로 그대로 쓰면 그 키의 쏠림이 파이프라인 끝까지 따라온다. 직렬화 개선은 object reuse로 200ms를 130ms로, 동적 배치 크기는 70ms를 40ms로 줄인 별개의 단계다.",
    anchor: "200ms에서-40ms로-숫자가-남은-튜닝",
  },
  {
    id: "rw-naverpay-order-replication-5",
    post: "rw-naverpay-order-replication",
    question: "복제 쿼리의 조건 `WHERE sync_seq IS NULL OR :commit_ts >= sync_seq`가 막는 문제와, `>` 대신 `>=`를 쓴 이유는?",
    choices: [
      "중복 INSERT / PK 충돌을 피하려고",
      "대상 DB 장애 / 커넥션 수를 줄이려고",
      "동기 복제가 먼저 쓴 최신 값을 비동기 복제가 뒤늦은 옛 값으로 덮어쓰는 과거 회귀 / 메시지 시각이 밀리초를 잘라 같은 초의 변경을 놓치지 않으려고",
      "스키마 변경 순서 문제 / 칼럼 추가를 허용하려고",
    ],
    answer: 2,
    explanation:
      "대상에 이미 있는 데이터보다 과거 커밋의 변경은 무시하게 해 회귀를 막는다. 기존 메시지가 밀리초를 잘라 발행하고 있어서 `>`로 하면 같은 초 안의 반영이 빠질 수 있었고, 메시지 형식을 바꾸면 옛 도구의 동작을 예측하기 어려워 `>=`로 두었다.",
    anchor: "두-도구가-서로-모르게-함께-복제했다",
  },
  {
    id: "rw-naverpay-order-replication-6",
    post: "rw-naverpay-order-replication",
    question: "nBase-T에서 Oracle로 복제한 뒤 Oracle UPDATE가 느려진 직접 원인은?",
    choices: [
      "바인딩 값의 길이·NULL·TIMESTAMP 자릿수가 달라 같은 쿼리의 child cursor를 재사용하지 못하고 22,000개 넘게 만들었다",
      "Oracle 인덱스가 깨졌다",
      "복제 도구가 트랜잭션을 커밋하지 않았다",
      "nBase-T의 binlog가 너무 커졌다",
    ],
    answer: 0,
    explanation:
      "Oracle은 바인딩 타입이 다르면 새 child cursor를 만들고, 그 과정의 뮤텍스 경쟁으로 응답이 0.003초에서 0.308초로 늘었다. NULL 타입 고정, 불필요한 UPDATE 칼럼 제거, TIMESTAMP를 밀리초로 잘라 바인딩해 child cursor를 99.8% 줄였다.",
    anchor: "복제-대상-oracle이-느려진-이유",
  },
  {
    id: "rw-naverpay-order-replication-7",
    post: "rw-naverpay-order-replication",
    question: "주문 메시지 발행을 새 모듈로 비율 전환할 때 전환 스위치의 키를 Kafka 파티션 키와 같게 맞춰야 하는 이유는?",
    choices: [
      "스위치가 파티션 수를 결정해서",
      "키가 다르면 같은 파티션의 메시지가 옛 모듈(MirrorMaker 복제 경유)과 새 모듈로 갈라져 순서가 뒤집힐 수 있어서",
      "MirrorMaker가 키가 다른 메시지를 버려서",
      "컨슈머 그룹 ID가 바뀌어서",
    ],
    answer: 1,
    explanation:
      "같은 파티션 키의 메시지는 순서가 보장돼야 한다. 전환 키가 파티션 키와 다르면 한 파티션의 메시지 일부는 복제 지연을 거치는 옛 경로로, 일부는 새 경로로 나와 순서가 섞인다. 네이버페이는 주문 고객 ID를 전환 키로 썼다.",
    anchor: "주문-메시지의-kafka를-통째로-옮긴-법",
  },
];
