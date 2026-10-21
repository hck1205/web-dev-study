import type { QuizQuestion } from "../types";

export const K8S_CNI_POD_NETWORK: QuizQuestion[] = [
  {
    id: "k8s-cni-pod-network-1",
    post: "k8s-cni-pod-network",
    question: "Pod에 네트워크가 붙는 순서에서 CNI 플러그인을 실제로 실행하는 쪽은?",
    choices: [
      "kube-proxy가 Service를 만들 때 실행한다",
      "kube-scheduler가 노드를 고른 직후 실행한다",
      "컨테이너 런타임(containerd 등)이 샌드박스의 네트워크 네임스페이스를 만든 뒤 /etc/cni/net.d 설정대로 실행한다",
      "API 서버가 Pod 객체를 저장할 때 실행한다",
    ],
    answer: 2,
    explanation:
      "kubelet이 CRI로 샌드박스를 요청하면 런타임이 빈 네임스페이스를 만들고 설정 파일의 type 이름으로 /opt/cni/bin의 실행 파일을 부른다. 대상과 할 일은 환경 변수로, 설정은 표준 입력 JSON으로 준다. kube-proxy는 Service 규칙만 다룬다.",
    anchor: "kubelet은-플러그인을-실행-파일로-부른다",
  },
  {
    id: "k8s-cni-pod-network-2",
    post: "k8s-cni-pod-network",
    question: "노드가 갑자기 꺼졌다 켜진 뒤 그 노드에서만 새 Pod가 'no IP addresses available in range set'으로 실패한다. 무엇을 의심하나?",
    choices: [
      "host-local이 IP별로 남긴 할당 파일이 DEL 없이 쌓여 대역이 사용 중으로 보인다",
      "CoreDNS가 Pod 이름을 풀지 못한다",
      "kube-proxy의 conntrack 테이블이 가득 찼다",
      "Service의 ClusterIP 범위가 바닥났다",
    ],
    answer: 0,
    explanation:
      "host-local은 IP 이름의 파일에 컨테이너 ID를 적는 방식으로 할당을 기억하고, DEL이 불려야 파일을 지운다. 런타임이 DEL을 못 부르고 끝나면 찌꺼기가 남는다. ClusterIP 범위는 Pod IP와 상관없다.",
    anchor: "ip는-파일-하나로-기억된다",
  },
  {
    id: "k8s-cni-pod-network-3",
    post: "k8s-cni-pod-network",
    question: "경로 방식으로 노드를 이었더니 다른 노드의 Pod가 본 출발지가 노드 IP였다. 원인과 고칠 방향은?",
    choices: [
      "경로 방식은 원래 출발지를 노드 IP로 바꾼다. VXLAN으로 바꾼다",
      "kube-proxy의 KUBE-MARK-MASQ가 붙었다. Service를 지운다",
      "브리지 hairpin 설정 때문이다. hairpin을 끈다",
      "노드 대역만 예외로 둔 MASQUERADE 규칙이 다른 노드의 Pod 대역까지 바꿨다. 예외를 클러스터 Pod 대역 전체로 잡는다",
    ],
    answer: 3,
    explanation:
      "참조 bridge 플러그인의 ipMasq는 자기 노드 대역만 빼고 모두 MASQUERADE해서 노드를 넘는 Pod 통신까지 NAT한다. 쿠버네티스 모델은 Pod 사이 NAT를 금지하므로 '-s 클러스터대역 ! -d 클러스터대역'처럼 바깥으로 나갈 때만 바꾼다. 경로 방식 자체는 주소를 바꾸지 않는다.",
    anchor: "노드를-넘는-첫-번째-방법-경로를-놓는다",
  },
  {
    id: "k8s-cni-pod-network-4",
    post: "k8s-cni-pod-network",
    question: "Flannel VXLAN 클러스터에 새 노드를 붙였는데 그 노드의 Pod만 다른 노드와 통신이 안 된다. 같은 노드 안은 된다. 먼저 확인할 것은?",
    choices: [
      "노드 사이 보안 그룹·방화벽에서 UDP 8472가 열려 있는지",
      "Pod의 readinessProbe 설정",
      "CoreDNS의 ndots 값",
      "kubelet의 maxPods 값",
    ],
    answer: 0,
    explanation:
      "VXLAN 방식은 노드를 넘는 Pod 패킷을 노드 주소끼리의 UDP(Flannel 기본 8472)로 감싸 보낸다. 이 포트가 막히면 터널을 타지 않는 같은 노드 안 통신만 살아남는다. 양쪽 노드 eth0에서 tcpdump로 포트를 잡아 어디서 사라지는지 보면 확실해진다.",
    anchor: "노드를-넘는-두-번째-방법-vxlan으로-감싼다",
  },
  {
    id: "k8s-cni-pod-network-5",
    post: "k8s-cni-pod-network",
    question: "VXLAN 오버레이에서 Pod MTU를 1500으로 두었을 때 생길 수 있는 증상은?",
    choices: [
      "모든 연결이 SYN 단계에서 실패한다",
      "DNS 질의만 실패한다",
      "작은 요청은 되는데 큰 응답이나 업로드가 멈춘다. ICMP Frag needed가 막히면 더 심하다",
      "Pod IP가 할당되지 않는다",
    ],
    answer: 2,
    explanation:
      "VXLAN 헤더 50바이트만큼 터널 MTU는 1450이다. 핸드셰이크와 작은 패킷은 통과하지만 1450을 넘는 패킷은 걸리고, 경로 MTU를 알려 주는 ICMP가 중간에서 막히면 Pod가 줄일 기회조차 없다. 그래서 CNI가 Pod MTU를 터널 MTU에 맞춘다.",
    anchor: "감싼-만큼-mtu가-줄어든다",
  },
  {
    id: "k8s-cni-pod-network-6",
    post: "k8s-cni-pod-network",
    question: "EKS(VPC CNI)의 t3.medium 노드에 CPU·메모리가 남는데 18번째 Pod부터 'Too many pods'로 Pending이 된다. 이유는?",
    choices: [
      "kubelet의 기본 maxPods 110에 걸렸다",
      "Pod가 VPC 주소를 직접 받아서 ENI 수와 ENI당 IP 수가 노드의 Pod 상한(3 × (6 − 1) + 2 = 17)을 정한다",
      "노드의 podCIDR이 /28이라서 그렇다",
      "CoreDNS가 노드당 17개까지만 이름을 등록한다",
    ],
    answer: 1,
    explanation:
      "VPC CNI는 Pod마다 ENI의 보조 IP를 주므로 붙일 수 있는 IP 수가 곧 Pod 수의 상한이다. ENI마다 첫 IP는 노드 몫이라 빼고, hostNetwork Pod 두 개를 더한다. 접두사 위임을 켜면 이 한도가 크게 늘어난다.",
    anchor: "어떤-cni를-고르나",
  },
];
