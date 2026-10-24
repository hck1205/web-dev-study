import type { QuizQuestion } from "../types";

export const COUPLING_COHESION_PRINCIPLES: QuizQuestion[] = [
  {
    id: "coupling-cohesion-principles-1",
    post: "coupling-cohesion-principles",
    question: "정산 화면이 formatPrice의 반환 문자열에서 콤마와 \"원\"을 지워 숫자로 되돌리고 있었다. 표기를 \"₩12,000\"으로 바꾸자 NaN이 찍혔다. 이 결합이 특히 위험한 이유는?",
    choices: [
      "정산 화면이 formatPrice를 import하지 않아서 의존이 아예 없기 때문이다",
      "함수 이름과 인자가 아니라 출력 문자열의 모양에 기대는 외부 결합이라 타입 검사와 검색에 드러나지 않기 때문이다",
      "제어 플래그를 넘겨 formatPrice의 흐름을 고르는 제어 결합이기 때문이다",
      "주문 객체 전체를 넘기는 스탬프 결합이라 테스트가 무거워지기 때문이다",
    ],
    answer: 1,
    explanation:
      "정산 코드가 실제로 기대던 것은 formatPrice의 출력 형식이었다. 이런 외부 결합은 타입은 그대로 string이라 컴파일러도 모르고, 검색에도 잘 걸리지 않아 형식을 바꾸는 순간 운영에서 터진다. import는 있었으니 의존이 없다는 보기는 틀렸다.",
    anchor: "서로-아는-것이-많을수록-같이-깨진다",
  },
  {
    id: "coupling-cohesion-principles-2",
    post: "coupling-cohesion-principles",
    question: "format-price 모듈을 화면 세 개가 import하고, format-price는 currency-table 하나를 import한다. 불안정성 I = Ce / (Ca + Ce)와 그 의미로 맞는 것은?",
    choices: [
      "I = 0.75, 자주 바꿔도 아무도 깨지지 않는 모듈이다",
      "I = 0.25, 많이 기대지는 안정적인 모듈이라 자주 바뀌는 지식을 넣으면 안 된다",
      "I = 0.33, 들어오는 선과 나가는 선이 비슷한 중간 모듈이다",
      "I = 1, 화면과 같은 자리의 모듈이다",
    ],
    answer: 1,
    explanation:
      "들어오는 결합 Ca가 3, 나가는 결합 Ce가 1이라 I = 1 / 4 = 0.25다. 0에 가까울수록 남들이 많이 기대 바꾸기 어려운 모듈이므로, 통화 표기처럼 자주 바뀌는 지식을 여기에 섞으면 작은 변경이 넓게 번진다. 0.75는 Ca와 Ce를 거꾸로 넣은 값이다.",
    anchor: "결합도를-숫자로-본다",
  },
  {
    id: "coupling-cohesion-principles-3",
    post: "coupling-cohesion-principles",
    question: "배송비 무료 기준과 포인트 2배 기준이 둘 다 `subtotal >= 50000`이다. 이 둘을 isOver50k 하나로 합치지 않는 편이 나은 이유는?",
    choices: [
      "함수 호출 비용이 생겨 성능이 떨어지기 때문이다",
      "DRY는 같은 코드가 세 번 이상 나올 때만 적용되기 때문이다",
      "모양은 같지만 바뀌는 이유와 결정하는 사람이 달라, 하나를 바꾸면 다른 규칙이 함께 바뀌기 때문이다",
      "숫자 리터럴은 상수로 빼면 안 되기 때문이다",
    ],
    answer: 2,
    explanation:
      "DRY가 막으려는 것은 같은 지식의 중복이지 우연히 같은 모양의 코드가 아니다. 배송 기준은 물류비에, 적립 기준은 마케팅 행사에 따라 바뀌므로 합치면 한쪽 변경이 다른 쪽을 깨뜨린다. 셋의 규칙은 경험칙일 뿐 DRY의 적용 조건이 아니다.",
    anchor: "같은-지식이-두-군데-있으면",
  },
  {
    id: "coupling-cohesion-principles-4",
    post: "coupling-cohesion-principles",
    question: "다음 중 디미터 법칙 위반으로 보기 가장 적절한 것은?",
    choices: [
      "new RequestBuilder().url(\"/orders\").method(\"POST\").build()",
      "orders.filter((o) => o.paid).map((o) => o.customerName)",
      "response.data.shipping.address.city (API 응답 DTO 읽기)",
      "order.customer.wallet.balance -= amount",
    ],
    answer: 3,
    explanation:
      "디미터 법칙의 기준은 점 개수가 아니라 서로 다른 객체의 내부 구조를 몇 개나 따라가느냐다. 주문, 고객, 지갑의 구조를 차례로 알고 남의 필드를 직접 깎는 코드가 위반이다. 빌더와 배열 체인은 같은 객체나 같은 종류의 값을 이어 갈 뿐이고, 행동이 없는 DTO는 대상이 아니다.",
    anchor: "친구의-친구에게-말-걸지-않는다",
  },
  {
    id: "coupling-cohesion-principles-5",
    post: "coupling-cohesion-principles",
    question: "Tell, Don't Ask 방식으로 잔액 차감을 Wallet.withdraw 안으로 옮겼을 때 얻는 가장 큰 이점은?",
    choices: [
      "잔액이 충분한지 판단하는 규칙이 한 곳에만 남아, 지갑 구조가 바뀌어도 Wallet만 고치면 된다",
      "메서드 호출 수가 줄어 실행이 빨라진다",
      "Order가 Wallet의 필드를 직접 읽을 수 있게 된다",
      "잔액 부족 예외를 던지지 않아도 된다",
    ],
    answer: 0,
    explanation:
      "상태를 꺼내 와 부르는 쪽이 판단하면 같은 잔액 규칙이 결제, 환불, 정기 결제 코드에 복사된다. 판단까지 Wallet에게 시키면 규칙이 한 곳에 모이고 핸들러는 Order 하나만 안다. 호출 수는 오히려 늘 수 있다.",
    anchor: "친구의-친구에게-말-걸지-않는다",
  },
  {
    id: "coupling-cohesion-principles-6",
    post: "coupling-cohesion-principles",
    question: "결제사가 지금 하나뿐인데 \"나중을 위해\" 메서드 14개짜리 PaymentGateway 인터페이스와 팩토리를 먼저 만들었다. YAGNI 관점에서 가장 맞는 평가는?",
    choices: [
      "추상에 기대라는 원칙을 지켰으니 항상 옳다",
      "두 번째 결제사의 요구를 모르는 채 첫 번째의 모양을 베낀 추상이 되기 쉬워, 경계만 정리하고 두 번째가 올 때 뽑는 편이 낫다",
      "인터페이스는 런타임 비용이 크므로 만들면 안 된다",
      "YAGNI는 DB 스키마처럼 되돌리기 어려운 결정에만 적용된다",
    ],
    answer: 1,
    explanation:
      "미리 만든 추상은 만드는 비용, 끌고 다니는 비용, 그리고 막상 필요할 때 모양이 안 맞아 고치는 비용이 든다. 업무 코드가 SDK를 직접 부르지 않게만 해 두면 나중에 공통점을 보고 뽑기 쉽다. 오히려 DB 스키마나 공개 API처럼 되돌리기 비싼 결정은 YAGNI의 대상이 아니다.",
    anchor: "단순하게-그리고-지금-필요한-만큼",
  },
];
