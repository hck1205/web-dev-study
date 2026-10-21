import type { QuizQuestion } from "../types";

export const DOCKER_NETWORK_DRIVERS: QuizQuestion[] = [
  {
    id: "docker-network-drivers-1",
    post: "docker-network-drivers",
    question: "서로 다른 사용자 정의 브리지에 있는 컨테이너끼리 curl을 보내면 거절이 아니라 시간 초과가 난다. 왜 그런가?",
    choices: [
      "두 브리지 사이에 경로가 없어서 패킷이 호스트를 떠나지 못한다",
      "호스트가 라우팅하는 FORWARD 단계에서 Docker의 격리 규칙이 패킷을 DROP한다",
      "내장 DNS가 다른 네트워크의 이름을 풀어 주지 않는다",
      "MASQUERADE가 출발지를 바꿔 응답이 엉뚱한 곳으로 간다",
    ],
    answer: 1,
    explanation:
      "다른 브리지로 가는 패킷은 호스트가 라우팅해야 하므로 FORWARD를 지나고, ISOLATION-STAGE-2가 목적지가 다른 Docker 브리지면 DROP한다. 버린 패킷에는 응답이 없으니 거절(RST)이 아니라 시간 초과로 보인다. 경로 자체는 호스트에 다 있다.",
    anchor: "bridge를-손으로-다시-만든다",
  },
  {
    id: "docker-network-drivers-2",
    post: "docker-network-drivers",
    question: "icc=false로 같은 브리지 안의 통신을 막는 규칙이 있는데도 컨테이너끼리 통신이 된다. 가장 먼저 확인할 값은?",
    choices: [
      "net.ipv4.ip_forward",
      "net.ipv4.conf.all.route_localnet",
      "net.bridge.bridge-nf-call-iptables",
      "net.netfilter.nf_conntrack_max",
    ],
    answer: 2,
    explanation:
      "같은 브리지 안의 통신은 L2 스위칭이라 원래 iptables를 지나지 않는다. br_netfilter가 켜져 있고 bridge-nf-call-iptables가 1일 때만 브리지 트래픽이 FORWARD 규칙을 탄다. ip_forward는 브리지 사이 라우팅에 필요한 값이다.",
    anchor: "같은-브리지-안을-막는-iccfalse와-br_netfilter",
  },
  {
    id: "docker-network-drivers-3",
    post: "docker-network-drivers",
    question: "macvlan 컨테이너에 LAN의 다른 PC에서는 ping이 되는데 그 컨테이너를 띄운 호스트에서만 안 된다. 알맞은 해결은?",
    choices: [
      "호스트에 같은 parent의 macvlan 자식(shim)을 만들고 컨테이너 주소로 가는 경로를 그쪽으로 돌린다",
      "호스트 FORWARD 정책을 ACCEPT로 바꾼다",
      "컨테이너에 -p로 포트를 게시한다",
      "parent 인터페이스를 promiscuous 모드에서 끈다",
    ],
    answer: 0,
    explanation:
      "리눅스 macvlan은 parent와 자식 사이를 잇지 않아서 호스트가 parent로 보낸 프레임은 바깥 스위치로만 나간다. 같은 parent의 자식끼리는 bridge 모드가 이어 주므로 호스트용 자식을 하나 더 두면 닿는다. macvlan 트래픽은 호스트 iptables를 거치지 않으니 FORWARD 정책과는 상관없다.",
    anchor: "macvlan-컨테이너가-lan에-직접-선다",
  },
  {
    id: "docker-network-drivers-4",
    post: "docker-network-drivers",
    question: "스위치가 포트당 MAC 주소 수를 제한해서 macvlan 컨테이너가 LAN에 나타나지 않는다. 대안으로 알맞은 것은?",
    choices: [
      "overlay 드라이버",
      "none 드라이버",
      "parent의 MAC을 함께 쓰는 ipvlan",
      "container 모드",
    ],
    answer: 2,
    explanation:
      "ipvlan은 자식들이 parent와 같은 MAC을 쓰고 IP만 달라서 스위치가 새 MAC을 배울 일이 없다. overlay는 여러 호스트를 VXLAN으로 묶는 용도라 LAN에 직접 서는 문제를 풀지 않는다.",
    anchor: "mac을-늘릴-수-없을-때-ipvlan",
  },
  {
    id: "docker-network-drivers-5",
    post: "docker-network-drivers",
    question: "Swarm overlay 네트워크에서 서비스는 정상으로 보이는데 다른 노드의 컨테이너로 가는 요청만 시간 초과가 난다. 노드 사이 방화벽에서 먼저 확인할 것은?",
    choices: [
      "TCP 80과 443",
      "UDP 4789와 TCP·UDP 7946",
      "TCP 2375",
      "UDP 53",
    ],
    answer: 1,
    explanation:
      "4789는 VXLAN 데이터가 다니는 포트이고 7946은 노드끼리 컨테이너 위치를 나누는 gossip 포트다. 둘 중 하나라도 막히면 같은 노드 안에서는 되고 노드를 넘을 때만 실패한다. 2377은 매니저의 클러스터 관리 포트다.",
    anchor: "overlay-호스트를-넘는-브리지",
  },
  {
    id: "docker-network-drivers-6",
    post: "docker-network-drivers",
    question: "Docker를 켜고 compose 프로젝트 몇 개를 띄운 뒤로 사내 서버 172.18.5.20에만 접속이 안 된다. 원인과 해법으로 알맞은 것은?",
    choices: [
      "ufw가 Docker 규칙에 밀렸다. ufw를 다시 켠다",
      "Docker 내장 DNS가 사내 이름을 가로챈다. dns 옵션을 바꾼다",
      "conntrack 테이블이 가득 찼다. nf_conntrack_max를 올린다",
      "브리지가 172.18.0.0/16 직결 경로를 만들어 VPN 경로보다 우선한다. default-address-pools를 사내망이 안 쓰는 대역으로 바꾼다",
    ],
    answer: 3,
    explanation:
      "새 브리지의 /16 직결 경로가 더 넓은 VPN 경로보다 구체적이라 사내 서버로 가는 패킷이 브리지로 빠진다. ip route get으로 나가는 장치를 확인하고, daemon.json의 bip와 default-address-pools를 바꾼 뒤 네트워크를 다시 만든다.",
    anchor: "기본-대역이-사내망과-겹칠-때",
  },
];
