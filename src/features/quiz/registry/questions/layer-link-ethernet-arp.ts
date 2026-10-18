import type { QuizQuestion } from "../types";

export const LAYER_LINK_ETHERNET_ARP: QuizQuestion[] = [
  {
    id: "layer-link-ethernet-arp-1",
    post: "layer-link-ethernet-arp",
    question: "가상 IP를 1번 서버에서 2번 서버로 옮겼는데 일부 클라이언트가 한동안 죽은 1번 서버로 계속 패킷을 보낸다. 가장 그럴듯한 원인은?",
    choices: [
      "DNS 캐시가 옛 IP를 들고 있다",
      "클라이언트의 ARP 캐시가 그 IP에 대해 1번 서버의 MAC을 기억하고 있다",
      "라우팅 테이블이 바뀌지 않았다",
      "TCP 연결이 TIME_WAIT에 묶여 있다",
    ],
    answer: 1,
    explanation:
      "IP는 그대로이고 그 IP를 가진 기기의 MAC만 바뀌었으니 L2 캐시 문제다. STALE 항목도 확인이 끝날 때까지는 옛 MAC으로 계속 보내기 때문에, IP를 넘겨받은 쪽이 Gratuitous ARP로 새 MAC을 알려야 바로 고쳐진다.",
    anchor: "주인이-바뀌었다고-알리는-gratuitous-arp",
  },
  {
    id: "layer-link-ethernet-arp-2",
    post: "layer-link-ethernet-arp",
    question: "10.0.1.10/24 호스트가 10.0.2.20으로 처음 ping을 보낼 때 나가는 ARP 요청은 무엇을 묻나?",
    choices: [
      "10.0.2.20의 MAC",
      "DNS 서버의 MAC",
      "기본 게이트웨이 10.0.1.1의 MAC",
      "ARP를 보내지 않고 브로드캐스트 MAC으로 바로 보낸다",
    ],
    answer: 2,
    explanation:
      "목적지가 내 서브넷 밖이면 프레임은 게이트웨이에게 건네야 하므로 게이트웨이의 MAC을 묻는다. 브로드캐스트인 ARP는 라우터를 넘지 못해서 다른 망 기기의 MAC은 물어볼 수도 없다.",
    anchor: "다른-망으로-갈-때는-게이트웨이의-mac을-묻는다",
  },
  {
    id: "layer-link-ethernet-arp-3",
    post: "layer-link-ethernet-arp",
    question: "스위치가 MAC 주소 테이블에 새 항목을 적을 때 쓰는 정보는?",
    choices: [
      "들어온 프레임의 보내는 쪽 MAC과 들어온 포트",
      "들어온 프레임의 받는 쪽 MAC과 나갈 포트",
      "IP 헤더의 출발지 주소",
      "관리자가 미리 넣어 둔 정적 목록만 쓴다",
    ],
    answer: 0,
    explanation:
      "스위치는 프레임이 들어올 때 보내는 쪽 MAC이 그 포트 너머에 있다고 배운다. 받는 쪽 MAC은 표에서 찾는 값이고, 표에 없으면 모든 포트로 퍼뜨린다. 스위치는 IP 헤더를 읽지 않는다.",
    anchor: "스위치는-보낸-주소로-길을-배운다",
  },
  {
    id: "layer-link-ethernet-arp-4",
    post: "layer-link-ethernet-arp",
    question: "같은 서브넷의 서버와 통신이 안 되는데 ip neigh에 그 서버 IP가 FAILED로 보인다. 먼저 의심할 곳은?",
    choices: [
      "서버 앱의 포트 설정",
      "TLS 인증서",
      "상대 기기의 전원, 케이블, VLAN 같은 L2 연결",
      "DNS 레코드",
    ],
    answer: 2,
    explanation:
      "FAILED는 ARP 요청에 끝내 답이 없어 MAC을 알아내지 못했다는 뜻이다. 프레임을 보낼 대상조차 정하지 못했으니 포트나 TLS까지 가지도 못한 상태다. 상대가 꺼졌거나 다른 VLAN에 있거나 선이 빠진 경우를 먼저 본다.",
    anchor: "arp-캐시와-이웃의-상태",
  },
  {
    id: "layer-link-ethernet-arp-5",
    post: "layer-link-ethernet-arp",
    question: "온프레미스에서 keepalived의 Gratuitous ARP로 가상 IP를 옮기던 구성을 AWS VPC로 옮기면 어떻게 되나?",
    choices: [
      "그대로 잘 동작한다",
      "VPC가 브로드캐스트를 지원하지 않고 ARP에 VPC 쪽이 답하므로 그대로는 동작하지 않아, API로 IP를 다시 붙여야 한다",
      "VLAN 태그만 추가하면 동작한다",
      "IPv6로 바꾸면 동작한다",
    ],
    answer: 1,
    explanation:
      "AWS VPC에서는 인스턴스가 보낸 ARP 알림으로 IP 주인을 바꿀 수 없다. 장애 조치 때 보조 사설 IP나 Elastic IP를 API로 다른 인스턴스에 다시 붙이는 방식으로 바꿔야 한다.",
    anchor: "현장에서-l2를-만나는-순간",
  },
  {
    id: "layer-link-ethernet-arp-6",
    post: "layer-link-ethernet-arp",
    question: "IPv6 서버에서 ip6tables로 ICMPv6를 전부 막았더니 같은 망 통신까지 안 된다. 이유는?",
    choices: [
      "IPv6는 TCP를 쓰지 않기 때문에",
      "IPv6의 이웃 찾기(NDP)가 ICMPv6 메시지로 동작하기 때문에",
      "IPv6에는 MAC 주소가 없기 때문에",
      "ICMPv6가 라우팅 테이블을 관리하기 때문에",
    ],
    answer: 1,
    explanation:
      "IPv6는 ARP 대신 ICMPv6의 Neighbor Solicitation과 Advertisement로 MAC을 찾는다. ICMPv6를 통째로 막으면 이웃 찾기부터 실패해서 같은 망 기기와도 프레임을 주고받을 수 없다.",
    anchor: "ipv6에는-arp가-없다",
  },
];
