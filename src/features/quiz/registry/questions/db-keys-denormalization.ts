import type { QuizQuestion } from "../types";

export const DB_KEYS_DENORMALIZATION: QuizQuestion[] = [
  {
    id: "db-keys-denormalization-1",
    post: "db-keys-denormalization",
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
    id: "db-keys-denormalization-2",
    post: "db-keys-denormalization",
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
    id: "db-keys-denormalization-3",
    post: "db-keys-denormalization",
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
  {
    id: "db-keys-denormalization-4",
    post: "db-keys-denormalization",
    question: "orders.total_amount를 order_items의 AFTER INSERT OR UPDATE OR DELETE 행 트리거로 맞추는 방식의 단점이 아닌 것은?",
    choices: [
      "앱 코드만 읽는 사람은 INSERT 하나가 다른 테이블을 고친다는 걸 알기 어렵다",
      "대량으로 넣으면 줄마다 트리거가 불려 느려진다",
      "관리자가 SQL로 직접 넣은 줄은 합계에 반영되지 않는다",
      "같은 주문에 동시에 줄을 넣는 요청이 orders 행의 잠금을 차례로 기다린다",
    ],
    answer: 2,
    explanation:
      "트리거는 어느 경로로 데이터를 바꿔도 DB가 실행하니 관리자 SQL이나 배치에서도 합계가 맞춰진다. 이게 트리거의 장점이다. 대신 보이지 않고, 대량 작업에서 느리고, 합계 행에 잠금 경합이 생긴다.",
    anchor: "일부러-다시-합칠-때-반정규화",
  },
  {
    id: "db-keys-denormalization-5",
    post: "db-keys-denormalization",
    question: "다음 중 jsonb 열에 두기에 가장 알맞은 값은?",
    choices: [
      "주문이 가리키는 회원 번호",
      "카테고리마다 다른 상품 속성(블루투스 버전, 무선 충전 여부, 사이즈 목록)",
      "모든 주문에 있고 매일 집계하는 결제 금액",
      "목록 화면에서 정렬 기준으로 쓰는 주문 시각",
    ],
    answer: 1,
    explanation:
      "행마다 모양이 다르고 통째로 읽고 쓰며 가끔 포함 검색만 하는 값이 jsonb에 맞는다. 다른 테이블을 가리키는 값은 외래키를 걸 수 없고, 자주 거르고 정렬하고 집계하는 값은 통계와 타입 검사를 위해 열로 뺀다.",
    anchor: "jsonb-열은-어디까지-괜찮나",
  },
];
