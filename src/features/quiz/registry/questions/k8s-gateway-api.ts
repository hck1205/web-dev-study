import type { QuizQuestion } from "../types";

export const K8S_GATEWAY_API: QuizQuestion[] = [
  {
    id: "k8s-gateway-api-1",
    post: "k8s-gateway-api",
    question: "Ingress API가 frozen 상태라는 말의 뜻으로 맞는 것은?",
    choices: [
      "다음 마이너 버전에서 Ingress가 제거된다",
      "GA로 계속 지원되지만 더는 기능이 추가되거나 바뀌지 않는다",
      "새 Ingress 객체를 만들 수 없고 기존 것만 동작한다",
      "Ingress가 Gateway API의 별칭으로 바뀐다",
    ],
    answer: 1,
    explanation:
      "Ingress는 GA API의 안정성 보장을 받고 제거 계획도 없지만, 개발이 멈춰 어떤 변경도 하지 않는다. 헤더 매칭이나 TCP 같은 새 기능은 Gateway API에만 들어간다.",
    anchor: "ingress는-멈췄고-gateway-api는-따로-나온다",
  },
  {
    id: "k8s-gateway-api-2",
    post: "k8s-gateway-api",
    question: "standard 채널 v1.6.3 CRD가 깔린 클러스터에 experimental HTTPRoute CRD를 apply했더니 거절됐다. 무엇이 막았나?",
    choices: [
      "kube-apiserver의 CRD 버전 비교 기능",
      "구현체 컨트롤러의 웹훅",
      "번들에 함께 들어 있는 safe-upgrades ValidatingAdmissionPolicy",
      "kubectl의 클라이언트 쪽 검증",
    ],
    answer: 2,
    explanation:
      "Gateway API 번들에는 standard 위에 experimental을 덮거나 v1.5 이전 CRD로 되돌리는 것을 거절하는 ValidatingAdmissionPolicy가 들어 있다. 채널을 오가면 저장된 객체의 버전이나 필드가 사라질 수 있어서 기본으로 막는다.",
    anchor: "crd를-누가-설치하나",
  },
  {
    id: "k8s-gateway-api-3",
    post: "k8s-gateway-api",
    question: "Gateway를 만들었는데 PROGRAMMED가 Unknown이고 message가 Waiting for controller다. 먼저 의심할 것은?",
    choices: [
      "GatewayClass의 controllerName과 설치한 구현체 이름이 다르거나 구현체가 떠 있지 않다",
      "HTTPRoute의 가중치 합이 100이 아니다",
      "ReferenceGrant가 없다",
      "리스너 인증서가 만료됐다",
    ],
    answer: 0,
    explanation:
      "Waiting for controller는 CRD에 박힌 기본 status라 어떤 컨트롤러도 이 객체를 맡지 않았다는 뜻이다. 인증서나 ReferenceGrant 문제라면 컨트롤러가 받은 뒤 False와 reason으로 남는다.",
    anchor: "붙었는지는-status가-말한다",
  },
  {
    id: "k8s-gateway-api-4",
    post: "k8s-gateway-api",
    question: "sandbox 네임스페이스의 HTTPRoute가 from: Selector(gateway-access: true)인 리스너에 붙지 못했다. status에 남는 것으로 맞는 것은?",
    choices: [
      "ResolvedRefs False, RefNotPermitted",
      "Accepted False, NoMatchingListenerHostname",
      "ResolvedRefs False, BackendNotFound",
      "Accepted False, NotAllowedByListeners",
    ],
    answer: 3,
    explanation:
      "리스너의 allowedRoutes가 네임스페이스나 종류로 라우트를 막으면 Accepted가 NotAllowedByListeners로 False가 된다. RefNotPermitted는 붙은 뒤 백엔드 참조가 허락되지 않을 때의 ResolvedRefs reason이다.",
    anchor: "붙었는지는-status가-말한다",
  },
  {
    id: "k8s-gateway-api-5",
    post: "k8s-gateway-api",
    question: "95:5 카나리 HTTPRoute에서 새 버전 Service 이름에 오타가 났다. 사용자에게 보이는 결과는?",
    choices: [
      "라우트 전체가 거절되어 모든 요청이 404",
      "요청의 약 5%가 500을 받는다",
      "오타 난 몫은 자동으로 기존 버전으로 간다",
      "API 서버가 HTTPRoute 생성을 거절한다",
    ],
    answer: 1,
    explanation:
      "스펙은 잘못된 backendRef로 갈 요청 비율만큼 500을 주라고 정한다. API 서버는 Service가 있는지 모르니 객체는 만들어지고, 컨트롤러가 ResolvedRefs를 BackendNotFound로 남긴다.",
    anchor: "가중치로-나눌-때-비는-몫",
  },
  {
    id: "k8s-gateway-api-6",
    post: "k8s-gateway-api",
    question: "다른 네임스페이스의 Service를 가리키려면 ReferenceGrant를 참조당하는 쪽에 둬야 하는 이유는?",
    choices: [
      "라우트를 만들 권한만으로 남의 백엔드나 인증서를 쓰는 confused deputy 문제를 막으려고",
      "컨트롤러가 다른 네임스페이스를 watch하지 못해서",
      "Service가 네임스페이스 범위 리소스라 DNS 이름이 달라서",
      "ReferenceGrant가 클러스터 범위 리소스라서",
    ],
    answer: 0,
    explanation:
      "자원을 가진 쪽이 누구에게 허락할지 정해야 컨트롤러가 권한 없는 사람 대신 남의 Service나 Secret을 쓰지 않는다. ReferenceGrant는 네임스페이스 리소스이고, 참조당하는 네임스페이스에 만든다.",
    anchor: "referencegrant가-막는-것",
  },
  {
    id: "k8s-gateway-api-7",
    post: "k8s-gateway-api",
    question: "ingress-nginx의 use-regex 경로 /[A-Z]{3}를 Envoy 계열 구현체의 RegularExpression으로 그대로 옮기면 /uuid 요청은 어떻게 되나?",
    choices: [
      "둘 다 백엔드로 간다",
      "둘 다 404다",
      "ingress-nginx에서는 백엔드로 갔지만 새 구현체에서는 맞지 않아 404가 된다",
      "새 구현체가 301로 /UUID에 리다이렉트한다",
    ],
    answer: 2,
    explanation:
      "ingress-nginx의 정규식 location은 대소문자를 무시하고 앞부분만 맞으면 통과해서 /uuid도 백엔드로 갔다. Envoy 계열 구현체는 대소문자를 구분하는 전체 일치라 맞지 않고, 변환 도구도 이 차이를 경고하지 않는다.",
    anchor: "ingress-nginx에서-옮기기",
  },
];
