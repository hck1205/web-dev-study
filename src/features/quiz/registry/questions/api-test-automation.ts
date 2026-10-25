import type { QuizQuestion } from "../types";

export const API_TEST_AUTOMATION: QuizQuestion[] = [
  {
    id: "api-test-automation-1",
    post: "api-test-automation",
    question:
      "백엔드가 deliveryEta를 estimatedDelivery로 바꾸며 자기 단위 테스트도 함께 고쳤고, 앱은 저장해 둔 응답 JSON으로 테스트해 둘 다 통과했다. 이 사고를 배포 전에 잡으려면 무엇이 필요했나?",
    choices: [
      "백엔드 단위 테스트의 커버리지를 100%로 올리기",
      "앱의 고정 응답 JSON을 더 많이 만들기",
      "소비자가 실제로 쓰는 필드를 계약으로 남기고 제공자가 배포 전에 그 계약을 확인하기",
      "응답 시간 단언을 더 빡빡하게 걸기",
    ],
    answer: 2,
    explanation:
      "양쪽 테스트가 각자 자기 기준으로만 확인해서 둘이 만나는 자리가 비었다. 제공자의 테스트는 소비자가 무엇을 쓰는지 모르므로, 소비자가 쓰는 필드를 계약으로 남기고 제공자가 배포 전에 검증해야 한다. 앱의 고정 JSON은 오히려 예전 모양을 굳힌다.",
    anchor: "배포-전에-호환성을-확인하는-계약-테스트",
  },
  {
    id: "api-test-automation-2",
    post: "api-test-automation",
    question:
      "필드 이름이 바뀐 서버에 Newman을 돌렸더니 \"200 OK\" 테스트는 통과하고 \"스키마를 지킨다\"만 실패했다. 이 결과가 보여 주는 것은?",
    choices: [
      "상태 코드만 확인하는 테스트는 모양이 깨진 응답도 통과시키므로 스키마 같은 본문 검사가 필요하다",
      "Newman은 상태 코드를 잘못 해석한다",
      "스키마 검사는 200 응답에서만 동작한다",
      "필드 이름 변경은 안전한 변경이다",
    ],
    answer: 0,
    explanation:
      "필드 이름이 바뀌어도 서버는 200을 돌려준다. required에 deliveryEta를 둔 스키마 검사가 있어야 빠진 필드를 짚는다. 필드 삭제나 이름 변경은 소비자를 깨는 변경이다.",
    anchor: "postman-컬렉션을-ci에서-돌린다",
  },
  {
    id: "api-test-automation-3",
    post: "api-test-automation",
    question: "앱(소비자) 쪽에서 쓰는 응답 스키마 검사에 additionalProperties: false를 걸지 않는 이유는?",
    choices: [
      "Ajv가 additionalProperties를 지원하지 않아서",
      "응답 크기가 커져서 검사가 느려지기 때문에",
      "OpenAPI 3.0에서는 그 키워드를 쓸 수 없어서",
      "필드 추가는 안전한 변경인데 모르는 필드를 금지하면 새 필드 하나에도 테스트가 깨지기 때문에",
    ],
    answer: 3,
    explanation:
      "소비자는 자기가 쓰는 필드만 보고 나머지를 무시하는 관대한 독자로 짜야 오래 버틴다. 모르는 필드를 금지하면 제공자가 필드를 추가할 때마다 테스트가 깨져 다들 고치기만 하게 된다. 엄격한 검사는 제공자가 문서에 없는 필드를 실수로 내보내지 않는지 볼 때 쓴다.",
    anchor: "스키마로-응답의-모양을-고정한다",
  },
  {
    id: "api-test-automation-4",
    post: "api-test-automation",
    question:
      "Postman 컬렉션에서 \"주문 생성\"이 만든 id를 컬렉션 변수로 넘겨 \"주문 조회\" 테스트가 쓰게 했다. 이 구조의 가장 큰 문제는?",
    choices: [
      "컬렉션 변수는 Newman에서 읽히지 않는다",
      "생성이 실패하면 조회 테스트들도 엉뚱한 이유로 실패하고, 조회만 따로 돌리거나 병렬로 돌릴 수 없다",
      "주문 id가 응답 시간에 영향을 준다",
      "조회 테스트에서 스키마 검사를 할 수 없게 된다",
    ],
    answer: 1,
    explanation:
      "테스트가 앞 테스트의 데이터에 기대면 실패가 연쇄되어 진짜 원인을 찾기 어렵고, 순서 변경과 병렬 실행이 막힌다. 기준은 그 테스트 하나만 돌려도 통과하느냐이고, 각 테스트가 자기 데이터를 만든다.",
    anchor: "테스트끼리-데이터를-넘기지-않는다",
  },
  {
    id: "api-test-automation-5",
    post: "api-test-automation",
    question: "긴 API 테스트 묶음의 뒷부분에서만 401이 나기 시작했다. 가장 먼저 의심할 곳은?",
    choices: [
      "서버의 JSON 직렬화",
      "스키마의 required 목록",
      "사전 스크립트가 만료 시간을 보지 않고 처음 받은 토큰을 계속 쓰는 것",
      "CI 러너의 CPU 흔들림",
    ],
    answer: 2,
    explanation:
      "토큰을 한 번 받아 재사용하는 건 좋지만, expires_in이 짧으면 묶음 중간에 만료된다. 남은 시간을 보고 다시 받아야 한다. 응답 시간의 흔들림은 401이 아니라 시간 단언 실패로 나타난다.",
    anchor: "토큰이-필요한-api",
  },
  {
    id: "api-test-automation-6",
    post: "api-test-automation",
    question: "결제사 API를 CI에서 스텁으로 바꿔 두었다. 스텁만 믿을 때 생기는 위험과 그 보완책으로 알맞은 것은?",
    choices: [
      "스텁은 우리가 마지막으로 본 상대의 모습이라 상대가 바뀌어도 모르므로, 샌드박스에 대고 스텁과 같은 모양인지 따로 확인한다",
      "스텁은 타임아웃을 재현할 수 없으므로 진짜 결제사를 매번 부른다",
      "스텁을 쓰면 인증을 테스트할 수 없으므로 계약 테스트를 지운다",
      "스텁은 항상 최신이므로 위험이 없다",
    ],
    answer: 0,
    explanation:
      "스텁은 오히려 타임아웃이나 500 같은 상대의 실패를 재현하게 해 준다. 약점은 상대의 변화를 모른다는 것이라, 덜 자주 도는 샌드박스 대조 검사를 따로 두고 실패하면 알림을 보낸다.",
    anchor: "바깥-api는-어떻게-다루나",
  },
  {
    id: "api-test-automation-7",
    post: "api-test-automation",
    question: "Pact 소비자 테스트의 willRespondWith 본문에 앱이 실제로 쓰는 id와 deliveryEta만 넣는 이유는?",
    choices: [
      "Pact가 필드 두 개까지만 지원해서",
      "계약에 넣지 않은 필드는 응답에서 자동으로 지워져서",
      "목 서버가 나머지 필드를 무작위로 채워서",
      "쓰지 않는 필드까지 계약에 넣으면 제공자가 아무도 안 쓰는 필드조차 자유롭게 바꾸거나 지울 수 없게 되기 때문에",
    ],
    answer: 3,
    explanation:
      "계약은 소비자가 실제로 기대하는 것만 담아야 제공자의 변경 여지가 남는다. 쓰지 않는 필드를 넣으면 그 필드를 건드리는 모든 PR이 계약 실패로 막힌다. like 매처로 값이 아니라 타입만 맞으면 되게 하는 것도 같은 이유다.",
    anchor: "배포-전에-호환성을-확인하는-계약-테스트",
  },
];
