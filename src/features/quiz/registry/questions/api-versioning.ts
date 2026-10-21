import type { QuizQuestion } from "../types";

export const API_VERSIONING: QuizQuestion[] = [
  {
    id: "api-versioning-1",
    post: "api-versioning",
    question: "주문 상태 enum에 REFUNDED를 추가한 뒤 옛 앱 버전에서만 화면이 깨졌다. 왜 '추가'가 깨는 변경이 됐나?",
    choices: [
      "서버가 enum을 추가하면 JSON 직렬화 형식이 바뀌기 때문이다",
      "옛 앱이 모르는 값에 예외를 던지는 switch로 모든 상태를 처리하고 있었기 때문이다",
      "enum 추가는 항상 API 버전을 올려야 하는 변경이기 때문이다",
      "새 값이 기존 값의 순서를 바꿨기 때문이다",
    ],
    answer: 1,
    explanation:
      "서버 입장에서는 추가지만, 모든 경우를 나열하고 나머지에서 예외를 던지는 클라이언트에는 처리할 수 없는 값이다. 그래서 enum 값 추가는 깨는 변경과 안전한 변경 사이의 '위험한 변경'으로 분류한다. 클라이언트는 모르는 값을 기본 처리로 넘기도록 계약으로 정한다.",
    anchor: "추가했을-뿐인데-깨지는-이유",
  },
  {
    id: "api-versioning-2",
    post: "api-versioning",
    question: "Api-Version 헤더로 버전을 고르는 API 앞에 캐시를 두었더니 새 버전 클라이언트가 옛 모양 응답을 받는다. 무엇을 고쳐야 하나?",
    choices: [
      "응답에 Vary: Api-Version을 붙이거나 캐시 키에 그 헤더를 넣는다",
      "캐시 유효 시간을 늘린다",
      "버전 헤더 이름을 X-로 시작하게 바꾼다",
      "옛 버전 응답에 Sunset 헤더를 붙인다",
    ],
    answer: 0,
    explanation:
      "캐시는 기본적으로 URL로 응답을 구분해서 헤더만 다른 요청에 같은 응답을 준다. Vary는 그 헤더 값이 다르면 다른 응답이라고 캐시에 알린다. 실습에서도 Vary를 붙인 뒤 버전별로 따로 저장되고 맞는 응답이 나갔다.",
    anchor: "헤더로-버전을-고르면-캐시가-섞인다",
  },
  {
    id: "api-versioning-3",
    post: "api-versioning",
    question: "Stripe식 날짜 버전에서 2025-11-01에 고정된 클라이언트의 요청은 어떻게 처리되나?",
    choices: [
      "2025-11-01 시점의 서버 코드가 따로 떠 있어 그쪽으로 라우팅된다",
      "항상 최신 응답을 받고 클라이언트가 알아서 변환한다",
      "응답을 최신 모양으로 만든 뒤, 2025-11-01보다 새로운 버전 변경들을 최신부터 거꾸로 되돌린다",
      "옛 버전은 읽기 요청만 허용된다",
    ],
    answer: 2,
    explanation:
      "비즈니스 로직은 최신 버전 하나만 두고, 버전 변경마다 되돌리는 변환 함수를 둔다. 클라이언트 버전보다 새로운 변경의 변환만 차례로 적용하니 버전이 많아도 로직을 한 곳에서 고칠 수 있다.",
    anchor: "한-서버가-여러-버전을-내는-방법",
  },
  {
    id: "api-versioning-4",
    post: "api-versioning",
    question: "소비자 주도 계약 테스트가 스키마 비교 도구보다 나은 경우는?",
    choices: [
      "불특정 다수가 쓰는 공개 API에서 깨는 변경을 막을 때",
      "아무 소비자도 쓰지 않는 필드를 지워도 되는지 알고 싶을 때",
      "필드 타입이 바뀌었는지 확인할 때",
      "OpenAPI 문서를 자동으로 만들 때",
    ],
    answer: 1,
    explanation:
      "스키마 비교는 필드 삭제를 모두 깨는 변경으로 막지만, 계약 테스트는 실제로 쓰는 필드만 지킨다. 실습에서 아무도 안 쓰는 total 삭제는 통과했고 amount.value를 바꾼 PR은 깨지는 소비자 이름과 함께 실패했다. 소비자가 협조할 수 없는 공개 API에는 맞지 않는다.",
    anchor: "소비자가-쓰는-것만-지킨다",
  },
  {
    id: "api-versioning-5",
    post: "api-versioning",
    question: "protobuf에서 amount(3번)를 지우고 3번을 int32 points에 다시 썼다. 옛 소비자는 points=420인 메시지를 어떻게 읽나?",
    choices: [
      "디코딩 에러가 나서 메시지를 버린다",
      "3번을 모르는 필드로 보관하고 amount는 0이 된다",
      "amount를 420으로 읽는다",
      "필드 이름이 달라 무시한다",
    ],
    answer: 2,
    explanation:
      "바이트에는 번호와 타입만 들어가므로 같은 번호, 같은 와이어 타입이면 옛 소비자는 그 값을 자기 필드로 읽는다. 에러 없이 포인트가 결제 금액으로 둔갑한다. 지운 번호는 reserved로 막아 컴파일러가 재사용을 거절하게 한다.",
    anchor: "이벤트와-메시지에도-버전이-있다",
  },
  {
    id: "api-versioning-6",
    post: "api-versioning",
    question: "Sunset 날짜 전에 옛 버전을 계획된 짧은 시간 동안 일부러 실패시키는(brownout) 이유는?",
    choices: [
      "연락이 닿지 않은 소비자가 Sunset 전에 장애로 알아채고 옮길 기회를 주려고",
      "서버 부하를 줄이려고",
      "새 버전의 성능을 측정하려고",
      "Deprecation 헤더를 클라이언트가 읽게 하려고",
    ],
    answer: 0,
    explanation:
      "헤더와 공지만으로는 옮기지 않는 소비자가 남는다. 짧게 410을 돌려주면 그들이 미리 문제를 발견하고, Sunset 날 처음 장애를 겪는 일을 줄인다. 410 Gone은 의도적으로 없앴다는 뜻이라 404와 구분되고 의미 없는 재시도를 줄인다.",
    anchor: "옛-버전을-끝내는-순서",
  },
];
