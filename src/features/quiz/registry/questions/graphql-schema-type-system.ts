import type { QuizQuestion } from "../types";

export const GRAPHQL_SCHEMA_TYPE_SYSTEM: QuizQuestion[] = [
  {
    id: "graphql-schema-type-system-1",
    post: "graphql-schema-type-system",
    question:
      "`wrap: Wrap`(nullable) 아래에 `items: [String!]!` 필드가 있고, 리졸버가 `[\"x\", null, \"z\"]`를 돌려줬다. 응답은 어떻게 되나?",
    choices: [
      "`items`가 `[\"x\", null, \"z\"]` 그대로 나가고 errors만 붙는다",
      "`items`가 null이 되고 `wrap`은 살아남는다",
      "`wrap`이 null이 된다",
      "null 원소만 빠진 `[\"x\", \"z\"]`가 나간다",
    ],
    answer: 2,
    explanation:
      "안쪽 느낌표 때문에 원소를 null로 둘 수 없어 목록이 null이 되려 하고, 바깥 느낌표 때문에 목록도 null이 될 수 없어 한 단계 더 올라간다. 결국 nullable인 가장 가까운 조상 `wrap`이 null이 된다. 원소를 빼고 돌려주는 동작은 없다.",
    anchor: "느낌표가-붙는-네-자리",
  },
  {
    id: "graphql-schema-type-system-2",
    post: "graphql-schema-type-system",
    question:
      "`union SearchResult = Product | User`이고 두 타입 모두 `id: ID!`를 가진다. `{ search { id } }`를 보내면 어떻게 되나?",
    choices: [
      "두 타입 모두 id가 있으니 정상 실행된다",
      "유니언은 공통 필드를 약속하지 않으므로 검증 단계에서 거절된다",
      "실행은 되지만 id가 모두 null로 온다",
      "첫 번째 멤버인 Product의 id만 온다",
    ],
    answer: 1,
    explanation:
      "유니언은 멤버 목록만 정할 뿐 공통 필드를 약속하지 않는다. 그래서 실제 멤버들이 같은 필드를 갖고 있어도 `... on Product` 같은 프래그먼트 없이는 필드를 물을 수 없다. 공통 필드를 바로 묻고 싶으면 인터페이스를 쓴다.",
    anchor: "같은-자리에-다른-타입이-올-때",
  },
  {
    id: "graphql-schema-type-system-3",
    post: "graphql-schema-type-system",
    question: "명세가 `ID` 스칼라를 항상 문자열로 직렬화하도록 정한 이유로 가장 알맞은 것은?",
    choices: [
      "문자열이 숫자보다 JSON 크기가 작아서",
      "DB 기본 키가 대부분 문자열이라서",
      "id를 불투명하게 다뤄 서버가 형식을 바꿀 수 있게 하고, 큰 정수가 JSON 숫자에서 깨지지 않게 하려고",
      "문자열이어야 GraphQL 검증 규칙이 id 중복을 찾을 수 있어서",
    ],
    answer: 2,
    explanation:
      "ID는 클라이언트가 계산하거나 비교하지 않는 불투명한 식별자라서, 서버가 숫자 id를 UUID나 전역 id로 바꿔도 클라이언트가 깨지지 않는다. 또 자바스크립트 Number는 2의 53제곱을 넘는 정수를 정확히 표현하지 못해 64비트 id가 숫자로 나가면 끝자리가 바뀔 수 있다.",
    anchor: "id가-문자열로-나가는-이유",
  },
  {
    id: "graphql-schema-type-system-4",
    post: "graphql-schema-type-system",
    question:
      "필드 타입이 `Int`인데 리졸버가 3000000000(30억)을 돌려줬다. graphql-js에서 무슨 일이 생기나?",
    choices: [
      "그 필드가 null이 되고 errors에 32비트 범위를 넘는다는 에러가 담긴다",
      "자동으로 Float로 바뀌어 나간다",
      "문자열 \"3000000000\"으로 바뀌어 나간다",
      "검증 단계에서 쿼리 전체가 거절된다",
    ],
    answer: 0,
    explanation:
      "Int는 32비트 부호 있는 정수라 약 21억을 넘으면 직렬화에서 에러가 나고 그 필드가 null이 된다. 실행 중 리졸버 값의 문제라 검증 단계와는 상관없다. 금액이나 큰 정수 id를 Int로 선언하면 숫자가 커지는 날 이렇게 터진다.",
    anchor: "스칼라는-경계에서-값을-바꾼다",
  },
  {
    id: "graphql-schema-type-system-5",
    post: "graphql-schema-type-system",
    question: "`Review.author`에 non-null(`User!`)을 붙이지 않는 편이 나은 이유는?",
    choices: [
      "non-null 필드는 DataLoader로 배치할 수 없어서",
      "관계 필드에는 문법상 느낌표를 붙일 수 없어서",
      "non-null이면 introspection에 노출되어서",
      "탈퇴, 다른 서비스 장애, 권한 때문에 null이 될 수 있고, 그 null이 부모로 번져 화면을 크게 지우기 때문에",
    ],
    answer: 3,
    explanation:
      "다른 테이블이나 서비스, 권한 검사를 거치는 관계는 실패할 수 있다. non-null 필드가 null을 받으면 nullable인 조상까지 올라가므로, 리뷰 하나의 작성자 문제로 상품 화면 전체가 사라질 수 있다. 객체 자신의 속성(id, 이름)처럼 함께 나오는 값에 느낌표를 붙인다.",
    anchor: "null을-어디에-허용할까",
  },
  {
    id: "graphql-schema-type-system-6",
    post: "graphql-schema-type-system",
    question: "운영 중인 스키마에서 기존 클라이언트를 깨뜨리지 않는 변경은?",
    choices: [
      "응답 필드 `price: Int!`를 `price: Int`로 바꾼다",
      "응답 필드 `nickname: String`을 `nickname: String!`로 바꾼다",
      "입력 필드 `memo: String`을 `memo: String!`로 바꾼다",
      "입력 객체 필드 이름을 `price`에서 `amount`로 바꾼다",
    ],
    answer: 1,
    explanation:
      "응답 필드에 느낌표를 붙이는 건 서버가 약속을 더 강하게 하는 것이라 기존 클라이언트에게 안전하다. 응답 필드의 느낌표를 떼면 null을 처리하지 않던 코드가 깨지고, 입력에 느낌표를 붙이면 그 값을 안 보내던 요청이 거절된다. 입력과 출력은 깨지는 방향이 반대다.",
    anchor: "입력은-따로-선언한다",
  },
  {
    id: "graphql-schema-type-system-7",
    post: "graphql-schema-type-system",
    question:
      "주문 뮤테이션 결과를 `union PlaceOrderResult = Order | ValidationError | OutOfStock`으로 두는 이유로 가장 알맞은 것은?",
    choices: [
      "errors 배열을 쓰면 HTTP 상태가 500이 되어서",
      "유니언을 쓰면 뮤테이션이 트랜잭션으로 묶여서",
      "화면이 분기해야 하는 예상된 실패를 타입으로 드러내 남은 수량 같은 데이터까지 받을 수 있어서",
      "유니언 멤버는 __typename 없이도 구분되어서",
    ],
    answer: 2,
    explanation:
      "errors 배열은 문자열 메시지 중심이라 재고 부족처럼 화면이 분기해야 하는 결과를 담기에 빈약하다. 결과를 유니언으로 두면 어떤 경우가 있는지 스키마에 드러나고, `... on OutOfStock { remaining }`처럼 필요한 데이터를 받는다. 클라이언트는 여전히 __typename으로 멤버를 구분한다.",
    anchor: "같은-자리에-다른-타입이-올-때",
  },
];
