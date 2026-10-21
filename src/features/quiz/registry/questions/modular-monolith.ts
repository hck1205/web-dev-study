import type { QuizQuestion } from "../types";

export const MODULAR_MONOLITH: QuizQuestion[] = [
  {
    id: "modular-monolith-1",
    post: "modular-monolith",
    question: "폴더만 orders, inventory, payments로 나눈 모놀리스와 모듈러 모놀리스를 가르는 가장 큰 차이는?",
    choices: [
      "모듈 사이 규칙을 빌드·CI 검사와 DB 권한으로 강제하는지",
      "모듈마다 따로 배포하는지",
      "모듈마다 다른 프로그래밍 언어를 쓰는지",
      "모듈 사이를 HTTP로 호출하는지",
    ],
    answer: 0,
    explanation:
      "모듈러 모놀리스도 배포는 하나이고 모듈 사이는 함수 호출이다. 차이는 공개 API만 부르고, 자기 데이터만 다루고, 순환이 없다는 규칙을 사람의 주의가 아니라 도구로 강제한다는 데 있다.",
    anchor: "배포는-하나-경계는-여러-개",
  },
  {
    id: "modular-monolith-2",
    post: "modular-monolith",
    question:
      "dependency-cruiser 규칙에서 from이 ^src/modules/([^/]+)/, to가 ^src/modules/([^/]+)/internal/, pathNot이 ^src/modules/$1/ 이다. 통과하는 import는?",
    choices: [
      "payments/internal/refund.ts → inventory/internal/stock-repo.ts",
      "orders/index.ts → payments/internal/refund.ts",
      "inventory/index.ts → inventory/internal/stock-repo.ts",
      "orders/internal/order-service.ts → inventory/internal/stock-repo.ts",
    ],
    answer: 2,
    explanation:
      "$1은 from에서 잡은 모듈 이름이라, 자기 모듈의 internal을 쓰는 import는 pathNot에 걸려 규칙에서 빠진다. 나머지는 모두 남의 internal로 들어가는 import라 에러가 된다.",
    anchor: "규칙은-ci가-지킨다",
  },
  {
    id: "modular-monolith-3",
    post: "modular-monolith",
    question:
      "모노레포에서 @shop/inventory 패키지의 package.json에 exports로 \".\"만 적었다. 이 장치로 막을 수 없는 것은?",
    choices: [
      "@shop/inventory/src/internal/stock-repo.js 를 import하는 것",
      "../../packages/inventory/src/internal/stock-repo.js 같은 상대 경로 import",
      "@shop/inventory/src/index.js 처럼 공개 진입점 파일을 경로로 직접 부르는 것",
      "moduleResolution이 nodenext인 TypeScript에서 패키지 이름으로 내부 경로를 import하는 것",
    ],
    answer: 1,
    explanation:
      "exports는 패키지 이름으로 접근하는 경로만 제한한다. 상대 경로로 파일을 직접 가리키면 우회되므로 검사 도구를 함께 쓴다. 패키지 이름으로 내부 파일을 부르면 ERR_PACKAGE_PATH_NOT_EXPORTED가 난다.",
    anchor: "패키지-경계로-막는-더-단단한-방법",
  },
  {
    id: "modular-monolith-4",
    post: "modular-monolith",
    question:
      "a1_orders_app 역할에게 inventory 스키마 USAGE와 inventory.available_stock 뷰 SELECT만 주었다. 이 역할로 SELECT cost_price FROM inventory.stock 을 실행하면?",
    choices: [
      "뷰를 통해 권한을 받았으므로 원가가 조회된다",
      "permission denied for schema inventory",
      "빈 결과가 나온다",
      "permission denied for table stock",
    ],
    answer: 3,
    explanation:
      "스키마 USAGE가 있으니 스키마 단계는 통과하지만 원본 테이블에는 SELECT 권한이 없다. 뷰에 준 권한은 뷰에만 해당한다. 뷰가 DB 쪽의 공개 API 역할을 하고, 원가 같은 내부 컬럼은 숨겨진다.",
    anchor: "데이터도-모듈이-가진다",
  },
  {
    id: "modular-monolith-5",
    post: "modular-monolith",
    question:
      "주문을 저장한 뒤 같은 프로세스 이벤트 버스로 OrderPlaced를 동기 발행했는데 재고 구독자가 예외를 던졌다. 무슨 일이 생기나?",
    choices: [
      "주문도 자동으로 롤백된다",
      "이벤트 버스가 자동으로 재시도한다",
      "주문은 저장됐는데 사용자는 500을 받아, 다시 누르면 주문이 중복될 수 있다",
      "재고 구독자의 예외는 로그로만 남고 201이 나간다",
    ],
    answer: 2,
    explanation:
      "동기 방식에서는 구독자의 예외가 발행자에게 그대로 올라와 주문 API의 응답을 실패로 바꾼다. 이미 저장된 주문은 되돌려지지 않는다. 로그만 남기고 201을 돌려주는 건 격리 방식의 결과이고, 그때는 재고가 줄지 않는 틈이 생긴다.",
    anchor: "모듈끼리-알리는-두-가지-방법",
  },
  {
    id: "modular-monolith-6",
    post: "modular-monolith",
    question: "주문 모듈의 공개 API가 ORM 엔티티를 그대로 돌려줄 때 생기기 쉬운 문제는?",
    choices: [
      "응답 직렬화가 느려진다",
      "받는 쪽이 지연 로딩 관계를 따라가 남의 테이블을 읽게 된다",
      "타입스크립트 타입 추론이 깨진다",
      "트랜잭션이 자동으로 길어진다",
    ],
    answer: 1,
    explanation:
      "엔티티는 다른 테이블과의 관계를 품고 있어서, 받는 모듈이 그 관계를 따라가면 경계 밖의 데이터를 직접 읽게 된다. 공개 API는 필요한 필드만 담은 평범한 객체를 돌려주고, 다른 모듈의 것은 id로만 들고 있는 편이 안전하다.",
    anchor: "경계가-새는-흔한-모습",
  },
];
