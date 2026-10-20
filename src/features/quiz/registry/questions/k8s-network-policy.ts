import type { QuizQuestion } from "../types";

export const K8S_NETWORK_POLICY: QuizQuestion[] = [
  {
    id: "k8s-network-policy-1",
    post: "k8s-network-policy",
    question: "shop 네임스페이스에 Ingress·Egress 기본 거부 정책을 걸자 모든 앱이 'getaddrinfo EAI_AGAIN'으로 실패했다. 가장 먼저 더할 정책은?",
    choices: [
      "kube-system의 kube-dns Pod로 가는 UDP·TCP 53 egress 허용",
      "모든 Pod의 ingress를 다시 허용하는 정책",
      "API 서버(443)로 가는 egress 허용",
      "노드 IP 대역을 ipBlock으로 허용",
    ],
    answer: 0,
    explanation:
      "Egress까지 격리하면 CoreDNS로 가는 질의부터 버려져 이름을 못 푼다. 그래서 앱은 접속을 시도하기도 전에 EAI_AGAIN으로 실패한다. TCP 53도 함께 열어야 큰 응답을 TCP로 다시 물을 때 실패하지 않는다.",
    anchor: "기본-거부를-걸자마자-이름이-안-풀린다",
  },
  {
    id: "k8s-network-policy-2",
    post: "k8s-network-policy",
    question: "web에서 api로 가는 egress만 허용하고 api 쪽에는 아무것도 추가하지 않았다. 기본 거부가 걸린 상태에서 web → api 연결은?",
    choices: [
      "egress가 허용됐으니 연결된다",
      "응답만 막혀서 반쯤 열린 연결이 된다",
      "api의 Ingress가 격리된 채라 받는 쪽에서 버려져 시간 초과가 난다",
      "API 서버가 정책을 거절한다",
    ],
    answer: 2,
    explanation:
      "새 연결은 보내는 Pod의 Egress와 받는 Pod의 Ingress가 둘 다 허용해야 성립한다. 응답은 conntrack이 통과시키므로 따로 열 필요가 없지만, 첫 SYN은 api의 들어오는 쪽에서 막힌다.",
    anchor: "기본-거부를-걸자마자-이름이-안-풀린다",
  },
  {
    id: "k8s-network-policy-3",
    post: "k8s-network-policy",
    question: "ingress.from에 '- namespaceSelector: monitoring'과 '- podSelector: app=prometheus'를 각각 대시로 적었다. 실제로 허용되는 것은?",
    choices: [
      "monitoring 네임스페이스 안의 app=prometheus Pod만",
      "monitoring 네임스페이스의 모든 Pod, 또는 정책과 같은 네임스페이스의 app=prometheus Pod",
      "모든 네임스페이스의 app=prometheus Pod만",
      "아무것도 허용되지 않는다",
    ],
    answer: 1,
    explanation:
      "from 배열의 원소끼리는 OR이고, podSelector만 있는 원소는 정책의 네임스페이스로 한정된다. 두 조건을 AND로 묶으려면 한 원소 안에 namespaceSelector와 podSelector를 함께 쓴다. kubectl describe에서 From이 두 번 나오면 OR이다.",
    anchor: "대시-하나가-허용-범위를-바꾼다",
  },
  {
    id: "k8s-network-policy-4",
    post: "k8s-network-policy",
    question: "db의 나가는 쪽만 제한하려고 policyTypes 없이 egress 규칙만 적었더니 아무도 db에 접속하지 못한다. 왜 그런가?",
    choices: [
      "egress 규칙이 있으면 conntrack이 꺼진다",
      "egress 규칙은 ingress 규칙보다 우선한다",
      "db의 Service가 지워졌다",
      "policyTypes를 생략하면 Ingress는 항상 들어가서, ingress 규칙이 빈 db가 들어오는 쪽까지 격리된다",
    ],
    answer: 3,
    explanation:
      "API 서버는 policyTypes가 없으면 Ingress를 넣고, egress 규칙이 있으면 Egress도 넣는다. 실습에서도 [\"Ingress\",\"Egress\"]로 채워졌다. 그래서 policyTypes는 늘 직접 적는다.",
    anchor: "대시-하나가-허용-범위를-바꾼다",
  },
  {
    id: "k8s-network-policy-5",
    post: "k8s-network-policy",
    question: "NetworkPolicy를 적용했는데 막혀야 할 트래픽이 그대로 통과하고 아무 에러도 없다. 가장 먼저 의심할 것은?",
    choices: [
      "클러스터의 CNI가 정책을 집행하지 않는다(예: Flannel 단독)",
      "정책의 이름이 너무 길다",
      "kube-proxy가 IPVS 모드다",
      "CoreDNS 캐시가 남아 있다",
    ],
    answer: 0,
    explanation:
      "API 서버는 정책을 저장만 하고, 실제로 막는 건 노드의 CNI 에이전트가 쓴 규칙이다. 정책을 지원하지 않는 CNI에서는 경고 없이 아무것도 막지 않는다. 그래서 적용 후 막혀야 할 길을 실제로 두드려 본다.",
    anchor: "표준-정책이-못-하는-것",
  },
  {
    id: "k8s-network-policy-6",
    post: "k8s-network-policy",
    question: "NodePort Service 뒤의 Pod에 사무실 대역만 ipBlock으로 허용했더니 사무실에서도 접속이 안 된다. 가능성이 큰 원인은?",
    choices: [
      "ipBlock은 IPv4를 지원하지 않는다",
      "ipBlock은 egress에만 쓸 수 있다",
      "기본 externalTrafficPolicy(Cluster)에서 출발지가 노드 주소로 SNAT되어 Pod에 도착한다",
      "사무실 대역이 /24보다 커서 무시된다",
    ],
    answer: 2,
    explanation:
      "Cluster 정책은 다른 노드의 Pod로 넘길 수 있게 출발지를 노드 주소로 바꾼다. 정책은 바뀐 뒤의 출발지를 보니 사무실 대역에 맞지 않는다. Local 정책으로 출발지를 지키거나 앞단에서 거른다.",
    anchor: "대시-하나가-허용-범위를-바꾼다",
  },
];
