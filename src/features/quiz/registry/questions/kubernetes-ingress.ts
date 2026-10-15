import type { QuizQuestion } from "../types";

export const KUBERNETES_INGRESS: QuizQuestion[] = [
  {
    id: "kubernetes-ingress-1",
    post: "kubernetes-ingress",
    question: "서비스마다 type: LoadBalancer를 붙이는 대신 Ingress를 쓰는 가장 큰 이유는?",
    choices: [
      "Pod의 IP가 바뀌지 않게 하려고",
      "클러스터 안에서만 접근 가능한 가상 IP를 얻으려고",
      "로드 밸런서 하나 뒤에서 host와 path로 여러 Service에 나눠 보내려고",
      "NodePort 범위(30000~32767)를 넓히려고",
    ],
    answer: 2,
    explanation:
      "LoadBalancer는 Service 하나에 클라우드 로드 밸런서 하나를 만들어 서비스 수만큼 비용과 외부 IP가 늘고, 대개 L4라 경로 라우팅도 못 한다. Ingress는 로드 밸런서 하나 뒤에서 HTTP 요청의 host와 path를 보고 여러 Service로 나눈다.",
    anchor: "서비스마다-로드-밸런서를-달면",
  },
  {
    id: "kubernetes-ingress-2",
    post: "kubernetes-ingress",
    question: "Ingress 리소스를 만들었는데 아무 반응이 없고 Address도 비어 있다. 가장 먼저 의심할 것은?",
    choices: [
      "Ingress를 처리할 컨트롤러가 없거나 ingressClassName이 맞지 않는다",
      "Pod의 readiness probe가 실패하고 있다",
      "TLS Secret의 인증서가 만료됐다",
      "Service의 type이 ClusterIP다",
    ],
    answer: 0,
    explanation:
      "Ingress는 규칙을 적은 문서일 뿐이고 실제로 트래픽을 처리하는 건 따로 설치한 Ingress Controller다. 컨트롤러가 없거나 ingressClassName이 어느 IngressClass와도 맞지 않고 기본 클래스도 없으면, 아무도 이 Ingress를 맡지 않는다.",
    anchor: "규칙과-규칙을-실행하는-쪽",
  },
  {
    id: "kubernetes-ingress-3",
    post: "kubernetes-ingress",
    question: "path: /api, pathType: Prefix 규칙에 맞지 않는 요청 경로는?",
    choices: ["/api", "/api/", "/api/orders", "/apis"],
    answer: 3,
    explanation:
      "Prefix는 문자열 앞부분이 아니라 / 로 나눈 마디 단위로 비교한다. 그래서 /api, /api/, /api/orders는 맞지만 첫 마디가 apis인 /apis는 맞지 않는다.",
    anchor: "경로가-겹치면-누가-이기나",
  },
  {
    id: "kubernetes-ingress-4",
    post: "kubernetes-ingress",
    question: "ingress-nginx가 요청을 앱으로 보낼 때 기본 동작으로 맞는 것은?",
    choices: [
      "Service의 ClusterIP로 보내고 kube-proxy가 Pod를 고른다",
      "EndpointSlice에서 Ready인 Pod IP를 골라 바로 보낸다",
      "NodePort로 보내서 노드가 Pod를 고른다",
      "DNS로 Service 이름을 조회해 매번 새로 연결한다",
    ],
    answer: 1,
    explanation:
      "ingress-nginx나 Traefik은 Service에 딸린 EndpointSlice를 지켜보다가 Pod IP 목록을 자기 업스트림으로 쓴다. Service는 어떤 Pod 묶음인지 알려 주는 이름표 역할만 하고, kube-proxy를 한 번 덜 거친다.",
    anchor: "요청-하나가-pod에-닿기까지",
  },
  {
    id: "kubernetes-ingress-5",
    post: "kubernetes-ingress",
    question: "cert-manager의 HTTP-01 방식으로 받을 수 없는 인증서는?",
    choices: [
      "shop.example.com 인증서",
      "도메인 두 개가 들어간 인증서",
      "*.example.com 와일드카드 인증서",
      "Let's Encrypt가 발급하는 90일짜리 인증서",
    ],
    answer: 2,
    explanation:
      "HTTP-01은 ACME 서버가 그 도메인의 정해진 경로에 직접 접속해 확인하는 방식이라 와일드카드 도메인은 증명할 수 없다. 와일드카드가 필요하면 DNS에 TXT 레코드를 만들어 증명하는 DNS-01을 쓴다.",
    anchor: "https는-컨트롤러에서-끝난다",
  },
  {
    id: "kubernetes-ingress-6",
    post: "kubernetes-ingress",
    question: "Ingress 뒤에서 응답이 503일 때 가장 가능성 높은 원인은?",
    choices: [
      "host 이름에 오타가 있다",
      "규칙은 맞았지만 EndpointSlice에 보낼 Pod가 없다",
      "요청 본문이 proxy-body-size보다 크다",
      "TLS 인증서의 도메인이 다르다",
    ],
    answer: 1,
    explanation:
      "503은 규칙에는 맞았는데 보낼 Pod가 없다는 신호다. Service selector와 Pod 라벨이 다르거나, 포트가 틀렸거나, readiness probe 실패로 Pod가 EndpointSlice에서 빠진 경우다. host 오타는 404, 본문 크기 초과는 413으로 나타난다.",
    anchor: "502-503-413을-만났을-때",
  },
  {
    id: "kubernetes-ingress-7",
    post: "kubernetes-ingress",
    question: "Ingress에서 컨트롤러별 어노테이션이 계속 늘어나는 근본 원인은?",
    choices: [
      "Ingress 스펙이 host, path, backend, tls 정도로 작아서 나머지 기능은 표준 필드가 없다",
      "어노테이션이 표준 필드보다 성능이 좋다",
      "API 서버가 어노테이션을 검증해 주기 때문에 안전하다",
      "IngressClass가 어노테이션으로만 지정되기 때문이다",
    ],
    answer: 0,
    explanation:
      "Ingress 스펙이 작아서 타임아웃, 경로 재작성, 카나리 같은 기능은 컨트롤러마다 자기 어노테이션으로 채웠다. 그래서 컨트롤러를 바꾸면 다시 써야 하고, 쿠버네티스는 Ingress를 동결한 채 새 기능을 Gateway API에 넣고 있다.",
    anchor: "어노테이션이-자꾸-늘어난다",
  },
];
