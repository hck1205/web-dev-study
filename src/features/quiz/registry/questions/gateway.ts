import type { QuizQuestion } from "../types";

export const GATEWAY: QuizQuestion[] = [
  {
    id: "gateway-1",
    post: "gateway",
    question: "API 게이트웨이에 두기에 가장 알맞지 않은 것은?",
    choices: [
      "JWT 서명과 만료 검증",
      "사용자별 요청 수 제한",
      "\"주문이 3건 이상이면 쿠폰을 붙인다\" 같은 도메인 규칙",
      "모든 요청의 접근 로그와 추적 ID 부여",
    ],
    answer: 2,
    explanation:
      "게이트웨이에는 모든 API에 똑같이 적용되는 횡단 관심사만 둔다. 도메인 규칙이 들어가기 시작하면 게이트웨이를 고치지 않고는 기능을 낼 수 없게 되므로, 그런 로직은 서비스나 BFF로 보낸다.",
    anchor: "게이트웨이가-너무-똑똑해지면",
  },
  {
    id: "gateway-2",
    post: "gateway",
    question: "리버스 프록시와 비교한 API 게이트웨이의 설명으로 가장 알맞은 것은?",
    choices: [
      "IP와 포트만 보고 TCP 연결을 나누는 장치다",
      "API에 특화된 리버스 프록시로, 사용자·API 키 단위 인증과 요청 수 제한 같은 기능을 더한다",
      "클라이언트 쪽에서 요청을 대신 보내 주는 포워드 프록시다",
      "TLS를 종료할 수 없다는 점이 리버스 프록시와 다르다",
    ],
    answer: 1,
    explanation:
      "리버스 프록시는 서버 앞에서 요청을 대신 받아 TLS 종료, 캐시, 분배를 한다. API 게이트웨이는 그 위에 누가 어떤 API를 얼마나 부르는지를 다루는 기능을 얹은 것이다. IP와 포트만 보는 건 L4 로드 밸런서다.",
    anchor: "로드-밸런서-리버스-프록시와-무엇이-다른가",
  },
  {
    id: "gateway-3",
    post: "gateway",
    question: "게이트웨이 인스턴스 3대가 각자 메모리에서 \"초당 100회\" 제한을 세면 실제로 어떻게 되나?",
    choices: [
      "최대 초당 약 300회까지 통과할 수 있다",
      "정확히 초당 100회로 제한된다",
      "초당 약 33회로 줄어든다",
      "제한이 아예 동작하지 않는다",
    ],
    answer: 0,
    explanation:
      "각 인스턴스가 따로 세므로 요청이 고르게 퍼지면 허용량이 인스턴스 수만큼 곱해진다. 정확히 막으려면 Redis 같은 공유 저장소나 전역 제한 서비스에 카운터를 둔다.",
    anchor: "게이트웨이가-너무-똑똑해지면",
  },
  {
    id: "gateway-4",
    post: "gateway",
    question: "Gateway API에서 앱 개발자가 주로 작성하는 리소스는?",
    choices: ["GatewayClass", "Gateway", "IngressClass", "HTTPRoute"],
    answer: 3,
    explanation:
      "GatewayClass는 인프라 제공자, Gateway는 클러스터 운영자, HTTPRoute는 앱 개발자의 몫이다. 앱 개발자는 자기 네임스페이스의 HTTPRoute로 Gateway에 매달려 경로와 백엔드만 관리한다.",
    anchor: "리소스를-역할별로-나눈-gateway-api",
  },
  {
    id: "gateway-5",
    post: "gateway",
    question: "backendRefs에 api-v1(weight 90)과 api-v2(weight 10)를 적었을 때 맞는 설명은?",
    choices: [
      "요청의 약 10%가 api-v2로 간다",
      "api-v1이 90번 응답한 뒤 api-v2가 10번 응답한다",
      "weight 합이 100이 아니면 오류가 난다",
      "같은 사용자는 항상 같은 버전으로 고정된다",
    ],
    answer: 0,
    explanation:
      "가중치는 합에 대한 비율이라 90과 10이면 90%, 10%로 나뉜다. 합이 100일 필요는 없어서 9와 1로 적어도 같다. 분배는 대개 요청 단위라 같은 사용자도 두 버전을 오갈 수 있다.",
    anchor: "헤더로-고르고-비율로-나누기",
  },
  {
    id: "gateway-6",
    post: "gateway",
    question: "shop 네임스페이스의 HTTPRoute가 payments 네임스페이스의 Service를 가리키려면?",
    choices: [
      "shop 네임스페이스에 ReferenceGrant를 만든다",
      "payments 네임스페이스에 ReferenceGrant를 만든다",
      "Gateway의 allowedRoutes에 payments를 추가한다",
      "아무 설정 없이 바로 가리킬 수 있다",
    ],
    answer: 1,
    explanation:
      "ReferenceGrant는 참조당하는 쪽 네임스페이스에 만든다. 자원을 가진 payments 팀이 shop의 HTTPRoute가 자기 Service를 가리켜도 된다고 허락하는 구조다. 허락이 없으면 HTTPRoute status의 ResolvedRefs가 RefNotPermitted로 False가 된다.",
    anchor: "네임스페이스를-넘어-참조하기",
  },
  {
    id: "gateway-7",
    post: "gateway",
    question: "Ingress와 비교한 Gateway API의 특징으로 틀린 것은?",
    choices: [
      "헤더와 쿼리 조건으로 라우팅하는 표준 필드가 있다",
      "가중치 분배를 backendRefs의 weight로 표현한다",
      "JWT 검증과 요청 수 제한이 표준 HTTPRoute 필드로 들어 있다",
      "인프라 설정과 라우팅 규칙이 서로 다른 리소스로 나뉜다",
    ],
    answer: 2,
    explanation:
      "Gateway API는 헤더 매칭, 가중치, 리다이렉트, 경로 재작성은 표준으로 갖지만 JWT 검증이나 요청 수 제한은 표준 HTTPRoute에 없다. 이런 기능은 구현체마다 정책 CRD로 제공하므로 구현체를 바꾸면 다시 써야 한다.",
    anchor: "헤더로-고르고-비율로-나누기",
  },
];
