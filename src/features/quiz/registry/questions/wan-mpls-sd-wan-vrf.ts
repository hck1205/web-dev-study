import type { QuizQuestion } from "../types";

export const WAN_MPLS_SD_WAN_VRF: QuizQuestion[] = [
  {
    id: "wan-mpls-sd-wan-vrf-1",
    post: "wan-mpls-sd-wan-vrf",
    question: "MPLS 망 안쪽의 P 라우터가 패킷을 넘길 때 보는 것은?",
    choices: [
      "목적지 IP 주소를 최장 일치로 찾는다",
      "패킷 앞에 붙은 라벨만 보고 LFIB에 따라 다음 라벨로 바꿔 넘긴다",
      "출발지 MAC 주소를 보고 VLAN을 정한다",
      "고객 VRF의 경로표를 차례로 조회한다",
    ],
    answer: 1,
    explanation:
      "IP 경로표를 보는 건 라벨을 붙이는 입구 PE까지다. 망 안의 P 라우터는 IP 헤더를 보지 않고 라벨을 다음 라벨로 바꿔(swap) 넘긴다. P는 고객 VRF도 모르기 때문에 고객이 늘어도 P의 표는 커지지 않는다.",
    anchor: "통신사-망-안에서는-라벨만-본다",
  },
  {
    id: "wan-mpls-sd-wan-vrf-2",
    post: "wan-mpls-sd-wan-vrf",
    question: "MPLS L3VPN에서 새 지사 VRF를 만들었는데 본사와 통신이 안 된다. 가장 먼저 의심할 설정은?",
    choices: [
      "RD 값이 본사와 같지 않아서",
      "P 라우터에 고객 경로가 없어서",
      "본사 VRF가 새 지사 VRF의 export RT를 import하지 않아서",
      "VLAN 번호가 본사와 달라서",
    ],
    answer: 2,
    explanation:
      "어느 VRF가 어떤 경로를 받을지는 RT의 import/export가 정한다. RD는 겹치는 주소를 BGP 안에서 구분할 뿐이라 서로 달라도 된다. P 라우터는 원래 고객 경로를 갖지 않는다.",
    anchor: "같은-사설-대역을-쓰는-두-회사",
  },
  {
    id: "wan-mpls-sd-wan-vrf-3",
    post: "wan-mpls-sd-wan-vrf",
    question: "L3VPN 패킷에 라벨이 두 겹 붙는 이유는?",
    choices: [
      "바깥 라벨은 어느 PE로 갈지, 안쪽 라벨은 그 PE의 어느 VRF로 갈지 정하기 때문",
      "하나가 손상될 때를 대비한 복사본이라서",
      "바깥 라벨은 암호화, 안쪽 라벨은 무결성 검사용이라서",
      "IPv4와 IPv6를 함께 보내기 위해서",
    ],
    answer: 0,
    explanation:
      "망 안의 P 라우터는 바깥 전송 라벨만 보고 출구 PE까지 나른다. 출구 PE는 MP-BGP로 알려 둔 안쪽 VPN 라벨을 보고 어느 고객 VRF로 보낼지 안다. MPLS 라벨에는 암호화 기능이 없다.",
    anchor: "같은-사설-대역을-쓰는-두-회사",
  },
  {
    id: "wan-mpls-sd-wan-vrf-4",
    post: "wan-mpls-sd-wan-vrf",
    question: "라우터 한 대에서 VLAN 10과 VLAN 20을 VRF 없이 서브인터페이스로 받았다. 두 망 사이 통신은?",
    choices: [
      "VLAN이 다르니 절대 통신할 수 없다",
      "주소가 겹쳐도 각자 동작한다",
      "MPLS 라벨이 있어야 통신한다",
      "라우터의 경로표가 하나라서 두 VLAN 사이가 바로 라우팅된다",
    ],
    answer: 3,
    explanation:
      "VLAN은 2계층의 브로드캐스트 도메인만 나눈다. 같은 경로표를 쓰는 라우터에서는 두 VLAN 대역이 모두 직접 연결 경로라 바로 통한다. 3계층에서 나누고 겹치는 주소를 허용하려면 서브인터페이스를 서로 다른 VRF에 넣어야 한다.",
    anchor: "vrf는-vlan과-무엇이-다른가",
  },
  {
    id: "wan-mpls-sd-wan-vrf-5",
    post: "wan-mpls-sd-wan-vrf",
    question: "IPsec만으로 지사를 잇다가 GRE over IPsec으로 바꾸는 흔한 이유는?",
    choices: [
      "GRE가 IPsec보다 강한 암호를 써서",
      "GRE 터널 위에서 멀티캐스트를 쓰는 OSPF 같은 라우팅 프로토콜을 돌릴 수 있어서",
      "GRE를 쓰면 MTU를 신경 쓰지 않아도 되어서",
      "GRE가 NAT를 자동으로 통과해서",
    ],
    answer: 1,
    explanation:
      "정책 기반 IPsec은 정해진 대역 사이의 유니캐스트만 넣어서 OSPF 같은 프로토콜이 넘지 못한다. GRE는 무엇이든 담지만 암호화가 없으니, GRE로 감싼 뒤 IPsec으로 암호화한다. 오버헤드가 늘어 오히려 MTU를 더 낮춰야 한다.",
    anchor: "인터넷-위에-터널을-놓는다-gre-over-ipsec",
  },
  {
    id: "wan-mpls-sd-wan-vrf-6",
    post: "wan-mpls-sd-wan-vrf",
    question: "SD-WAN 지사에서 인터넷 회선 손실이 3%로 튀었다. 음성 정책(손실 1% 이하)이 걸린 엣지의 동작으로 알맞은 것은?",
    choices: [
      "인터넷 회선을 끊고 모든 트래픽을 MPLS로 옮긴다",
      "컨트롤러가 응답할 때까지 통화를 멈춘다",
      "음성 흐름만 기준을 지키는 다른 회선으로 옮기고, 기준을 넘지 않는 트래픽은 그대로 둔다",
      "아무것도 하지 않는다. SD-WAN은 개통 때 회선을 한 번 고른다",
    ],
    answer: 2,
    explanation:
      "엣지는 터널마다 지연·손실·지터를 계속 재고, 앱 단위로 정책과 비교해 흐름을 고른다. 그래서 회선 전체가 아니라 기준을 넘은 앱의 흐름만 옮긴다. 판단은 엣지가 그 자리에서 하고, 컨트롤러는 정책을 내려 주고 상태를 모은다.",
    anchor: "sd-wan은-회선을-앱-단위로-고른다",
  },
  {
    id: "wan-mpls-sd-wan-vrf-7",
    post: "wan-mpls-sd-wan-vrf",
    question: "지사에서 SaaS가 느리고 traceroute 중간에 본사 방화벽 주소가 보인다. 무엇을 뜻하나?",
    choices: [
      "SaaS 트래픽이 지사 인터넷으로 바로 나가지 않고 본사를 거쳐 나가는 백홀 상태다",
      "MTU가 너무 커서 패킷이 잘리고 있다",
      "VRF를 지정하지 않고 traceroute를 쳐서 생긴 착시다",
      "SaaS 업체의 서버가 본사 안에 있다",
    ],
    answer: 0,
    explanation:
      "본사 주소가 경로에 보이면 트래픽이 본사로 돌아가 본사 인터넷으로 나가고 있다는 뜻이다. SD-WAN이라면 그 앱에 local breakout 정책이 안 걸렸거나 SaaS 주소 목록·앱 판별이 낡았는지 본다. MTU 문제는 작은 패킷은 되고 큰 패킷만 실패하는 증상으로 나타난다.",
    anchor: "지사가-느리다는-전화를-받으면",
  },
];
