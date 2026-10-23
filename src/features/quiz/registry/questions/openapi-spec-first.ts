import type { QuizQuestion } from "../types";

export const OPENAPI_SPEC_FIRST: QuizQuestion[] = [
  {
    id: "openapi-spec-first-1",
    post: "openapi-spec-first",
    question: "OpenAPI 3.0용으로만 만들어진 도구에 3.1 문서를 넣었더니 memo 필드 부분에서 문제가 났다. 가장 그럴듯한 원인은?",
    choices: [
      "3.1에서는 $ref를 쓸 수 없기 때문이다",
      "3.1은 null 허용을 JSON Schema 방식인 type: [string, \"null\"]로 쓰는데, 3.0 도구는 nullable: true만 알기 때문이다",
      "3.1은 YAML을 지원하지 않기 때문이다",
      "info.version 값이 3.1.0이 아니기 때문이다",
    ],
    answer: 1,
    explanation:
      "3.0은 JSON Schema 일부만 따르며 nullable이라는 자체 키워드를 썼고, 3.1은 JSON Schema 2020-12를 그대로 따라 타입 배열로 null을 표현한다. 그래서 도구가 3.1을 읽는지 먼저 확인해야 한다. info.version은 우리 API 문서의 버전이라 명세 형식과 관계없다.",
    anchor: "계약을-파일-하나에-적는다",
  },
  {
    id: "openapi-spec-first-2",
    post: "openapi-spec-first",
    question: "FastAPI가 자동으로 만든 문서의 응답 목록에 200과 422만 있고, 코드가 실제로 던지는 404는 없었다. 왜 그런가?",
    choices: [
      "FastAPI는 404를 내지 못하기 때문이다",
      "OpenAPI 3.1은 404 응답을 기술할 수 없기 때문이다",
      "코드 우선 생성기는 타입에서 응답 모양은 알지만, 어떤 상황에 어떤 상태 코드를 던지는지는 사람이 적어 주지 않으면 모르기 때문이다",
      "422가 404를 포함하는 상태 코드이기 때문이다",
    ],
    answer: 2,
    explanation:
      "코드 우선은 response_model 같은 타입 정보로 성공 응답과 검증 실패 422를 자동으로 적는다. 하지만 함수 안에서 HTTPException(404)를 던지는 동작은 생성기가 읽지 못한다. 그래서 코드 우선은 동작에 관한 문서가 빠지기 쉽다.",
    anchor: "스펙을-먼저-쓸까-코드에서-뽑을까",
  },
  {
    id: "openapi-spec-first-3",
    post: "openapi-spec-first",
    question: "Spectral 린트를 CI에 넣었다. 경고 세 개와 에러 두 개가 나왔을 때 CI는 어떻게 되고, 경고만 있을 때도 막고 싶으면 어떻게 하나?",
    choices: [
      "에러가 있으면 종료 코드 1로 막히고, 경고까지 막으려면 --fail-severity=warn을 준다",
      "경고와 에러 모두 종료 코드 0이라 CI는 통과하고, 막으려면 결과를 직접 파싱해야 한다",
      "경고가 하나라도 있으면 기본으로 막힌다",
      "Spectral은 CI에서 쓸 수 없고 편집기 플러그인으로만 동작한다",
    ],
    answer: 0,
    explanation:
      "Spectral은 기본으로 에러 수준 문제가 있을 때 종료 코드 1을 낸다. 경고만 있던 원래 스펙은 0이었다. 실패 기준을 낮추려면 --fail-severity 옵션을 쓴다.",
    anchor: "린트로-규칙을-기계에-맡긴다",
  },
  {
    id: "openapi-spec-first-4",
    post: "openapi-spec-first",
    question: "Prism 목 서버로 POST /orders를 보낸 뒤 GET으로 조회했는데 방금 만든 주문이 나오지 않는다. 왜인가?",
    choices: [
      "POST 응답의 example이 잘못 적혀 있기 때문이다",
      "Prefer: dynamic=true 헤더를 빠뜨렸기 때문이다",
      "Prism은 GET 요청만 처리하기 때문이다",
      "목 서버는 상태를 저장하지 않고 스펙의 예시나 스키마로만 답하기 때문이다",
    ],
    answer: 3,
    explanation:
      "Prism은 요청마다 스펙을 보고 응답을 만들 뿐 데이터를 저장하지 않는다. 그래서 만든 것을 다시 조회하거나 권한·페이지에 따라 달라지는 동작은 흉내 내지 못한다. dynamic은 스키마로 값을 지어내게 할 뿐 상태를 만들지 않는다.",
    anchor: "서버-없이-응답을-받아-보는-목-서버",
  },
  {
    id: "openapi-spec-first-5",
    post: "openapi-spec-first",
    question: "문서에는 totalPrice인데 서버가 total_price를 돌려주는 어긋남을 스테이징에서 자동으로 찾으려면 어떤 방법이 맞나?",
    choices: [
      "Spectral 린트 규칙을 더 엄격하게 만든다",
      "실제 서버 앞에 Prism 검증 프록시를 세우거나, 테스트에서 실제 응답을 스펙 스키마로 검증한다",
      "Swagger UI에서 Try it out을 눌러 본다",
      "목 서버의 응답을 스냅숏 테스트로 저장한다",
    ],
    answer: 1,
    explanation:
      "린트는 스펙 파일만 보고, 목 서버는 스펙이 응답하므로 둘 다 실제 서버가 무엇을 내는지 모른다. 검증 프록시는 실제 응답을 스펙과 비교해 required 누락과 enum 위반을 sl-violations로 짚어 준다. 사람이 손으로 눌러 보는 방법은 자동이 아니다.",
    anchor: "실제-응답이-계약과-같은지-검증하기",
  },
  {
    id: "openapi-spec-first-6",
    post: "openapi-spec-first",
    question: "스펙의 status enum에 REFUNDED를 더하고 타입을 다시 생성했더니, PAID와 CANCELED만 처리하는 switch 함수에서 컴파일 에러가 났다. 이 에러가 주는 이점은?",
    choices: [
      "옛 앱도 자동으로 다시 컴파일되어 깨지지 않는다",
      "서버가 REFUNDED를 보내지 못하게 막는다",
      "새 enum 값을 처리하지 않는 곳을 배포 전에 컴파일러가 알려 준다",
      "enum 추가가 깨는 변경이 아니라는 것을 증명한다",
    ],
    answer: 2,
    explanation:
      "생성 타입의 유니온에 새 값이 들어가면 그 값을 처리하지 않는 switch는 끝까지 내려갈 수 있어 반환 타입 에러가 난다. 그래서 새 값에 대응하지 않은 화면을 빌드 단계에서 찾는다. 다만 이미 배포된 옛 앱은 다시 컴파일되지 않으므로 서버 쪽 변경 관리는 여전히 필요하다.",
    anchor: "스펙에서-클라이언트-타입-만들기",
  },
  {
    id: "openapi-spec-first-7",
    post: "openapi-spec-first",
    question: "응답 검증을 붙였는데도 서버가 계약에 없는 내부 필드(internalMemo)를 더 내보내는 것을 잡지 못했다. 무엇을 확인해야 하나?",
    choices: [
      "응답 스키마에 additionalProperties: false가 없어 정의하지 않은 필드도 허용되고 있는지",
      "operationId가 비어 있는지",
      "info.version을 올렸는지",
      "servers 주소가 맞는지",
    ],
    answer: 0,
    explanation:
      "JSON Schema는 기본으로 정의하지 않은 필드를 허용하므로, 필수 필드만 있으면 추가 필드가 있어도 검증을 통과한다. 응답 스키마에 additionalProperties: false를 주거나 서버에서 응답 DTO를 명시적으로 만든다. 요청 쪽까지 엄격하게 하면 하위 호환이 깨질 수 있어 보통 응답만 엄격하게 본다.",
    anchor: "스펙이-있어도-어긋나는-곳",
  },
];
