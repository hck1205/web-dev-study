import type { QuizQuestion } from "../types";

export const K8S_KUBE_PROXY_MODES: QuizQuestion[] = [
  {
    id: "k8s-kube-proxy-modes-1",
    post: "k8s-kube-proxy-modes",
    question: "kube-proxy Pod가 몇 분 동안 죽어 있었다. 그동안 클러스터에서 일어나는 일로 가장 맞는 것은?",
    choices: [
      "모든 Service 트래픽이 즉시 끊긴다",
      "기존 Service는 계속 동작하지만 Pod 변경이 규칙에 반영되지 않는다",
      "ClusterIP가 다른 주소로 다시 할당된다",
      "conntrack 표가 비워져 기존 연결이 모두 끊긴다",
    ],
    answer: 1,
    explanation:
      "kube-proxy는 패킷을 중계하지 않고 커널 규칙을 고칠 뿐이라, 이미 써 둔 규칙으로 패킷은 계속 DNAT된다. 대신 사라진 Pod가 규칙에 남고 새 Pod는 트래픽을 받지 못한다.",
    anchor: "kube-proxy는-패킷을-나르지-않고-규칙을-쓴다",
  },
  {
    id: "k8s-kube-proxy-modes-2",
    post: "k8s-kube-proxy-modes",
    question: "Service가 2만 개인 클러스터에서 iptables 모드의 새 연결이 느려지는 이유는?",
    choices: [
      "conntrack이 연결마다 Service 목록을 다시 읽어서",
      "iptables가 nf_tables 엔진이 아닌 옛 엔진을 써서",
      "KUBE-SERVICES 체인을 위에서부터 한 줄씩 비교해서",
      "kube-proxy가 연결마다 API 서버에 물어봐서",
    ],
    answer: 2,
    explanation:
      "Service 포트마다 KUBE-SERVICES에 한 줄이 있어 첫 패킷의 비교 횟수가 Service 수에 비례한다. 실습의 iptables는 nf_tables 백엔드였는데도 선형으로 느려졌으니 원인은 엔진이 아니라 규칙 구조다.",
    anchor: "규칙이-2만-개일-때-첫-패킷",
  },
  {
    id: "k8s-kube-proxy-modes-3",
    post: "k8s-kube-proxy-modes",
    question: "nftables 모드에서 Service가 하나 새로 생기면 kube-proxy가 커널에 보내는 변경은?",
    choices: [
      "service-ips 맵에 원소를 넣고 그 Service의 체인을 만든다",
      "services 체인 전체를 다시 쓴다",
      "nat 테이블을 비우고 처음부터 다시 쓴다",
      "kube-ipvs0 장치에 ClusterIP를 붙인다",
    ],
    answer: 0,
    explanation:
      "nftables 모드는 모든 Service를 verdict map 하나로 찾으니 바뀐 Service의 원소와 체인만 보내면 된다. 실습에서 원소 하나를 넣는 데 0.055초였고, iptables 모드는 KUBE-SERVICES 체인을 통째로 다시 보내느라 5초가 걸렸다.",
    anchor: "nftables-모드가-쓰는-맵-하나",
  },
  {
    id: "k8s-kube-proxy-modes-4",
    post: "k8s-kube-proxy-modes",
    question: "같은 노드에 있는 Pod가 뽑힌 연결만 시간 초과가 나고, 다른 노드로 가는 연결은 멀쩡하다. 먼저 볼 것은?",
    choices: [
      "kube-proxy의 minSyncPeriod",
      "net.bridge.bridge-nf-call-iptables 값",
      "Service의 externalTrafficPolicy",
      "CoreDNS의 캐시 설정",
    ],
    answer: 1,
    explanation:
      "이 값이 0이면 같은 브리지 안의 응답이 netfilter를 건너뛰어 출발지가 VIP로 되돌려지지 않고, 클라이언트는 모르는 주소의 SYN-ACK에 RST를 보낸다. 다른 노드로 가는 응답은 L3를 지나니 정상이라 일부만 실패한다.",
    anchor: "브리지를-지나는-응답도-netfilter를-거쳐야-한다",
  },
  {
    id: "k8s-kube-proxy-modes-5",
    post: "k8s-kube-proxy-modes",
    question: "IPVS 모드가 deprecated된 이유로 가장 거리가 먼 것은?",
    choices: [
      "모든 ClusterIP를 kube-ipvs0 장치에 붙여야 했다",
      "일부 Service 기능을 iptables와 ipset을 섞어 구현해야 했다",
      "일괄 갱신 API가 없어 대량 변경에 약했다",
      "IPVS는 해시 테이블이 없어 Service를 선형으로 찾았다",
    ],
    answer: 3,
    explanation:
      "IPVS는 오히려 해시 테이블로 Service를 찾아 iptables의 선형 탐색 문제를 풀었다. 밀려난 이유는 Service 모델과 맞지 않는 구조와 결국 iptables에 기댄 부분, 대량 변경에 약한 API였다.",
    anchor: "ipvs는-왜-밀려났나",
  },
  {
    id: "k8s-kube-proxy-modes-6",
    post: "k8s-kube-proxy-modes",
    question: "iptables에서 nftables 모드로 옮긴 뒤 노드의 보조 IP로 NodePort에 붙던 스크립트가 실패한다. 이유는?",
    choices: [
      "nftables 모드는 NodePort 범위를 40000번대로 옮긴다",
      "nftables 모드는 NodePort를 지원하지 않는다",
      "보조 IP는 conntrack이 추적하지 않는다",
      "nftables 모드의 기본 --nodeport-addresses가 primary라서 기본 IP에서만 받는다",
    ],
    answer: 3,
    explanation:
      "iptables 모드는 노드의 모든 로컬 주소에서 NodePort를 받았지만 nftables 모드는 일부러 기본 IP만 받게 바꿨다. 필요하면 --nodeport-addresses에 범위를 직접 지정한다.",
    anchor: "nftables-모드로-옮길-때-달라지는-것",
  },
  {
    id: "k8s-kube-proxy-modes-7",
    post: "k8s-kube-proxy-modes",
    question: "UDP Service의 Pod를 교체했는데 출발지 포트를 고정한 클라이언트가 계속 사라진 Pod로 보낸다. 왜 그런가?",
    choices: [
      "kube-proxy가 UDP Service의 규칙을 만들지 않아서",
      "UDP는 DNAT되지 않고 Pod IP로 직접 가서",
      "conntrack 항목이 패킷마다 수명이 늘어 규칙을 다시 읽지 않아서",
      "EndpointSlice가 UDP 엔드포인트를 지우지 않아서",
    ],
    answer: 2,
    explanation:
      "DNAT 결정은 첫 패킷에서 한 번만 하고, 같은 4튜플의 UDP 패킷이 계속 오면 conntrack 항목의 수명이 다시 찬다. kube-proxy가 동기화 때 이런 항목을 지우지만, 그 전이나 정리가 안 될 때는 conntrack -D로 지운다.",
    anchor: "conntrack이-기억하는-동안-규칙은-다시-읽히지-않는다",
  },
];
