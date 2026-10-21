import type { QuizQuestion } from "../types";

export const SDN_VXLAN_OVERLAY: QuizQuestion[] = [
  {
    id: "sdn-vxlan-overlay-1",
    post: "sdn-vxlan-overlay",
    question: "쿠버네티스 노드의 eth0에서 tcpdump host 10.244.1.5로 Pod 트래픽을 찾았는데 아무것도 안 잡힌다. Pod 통신은 잘 된다. 이유는?",
    choices: [
      "Pod 트래픽은 커널을 거치지 않아 tcpdump로 볼 수 없다",
      "오버레이가 Pod 패킷을 노드 IP끼리의 UDP 안에 감싸서, host 필터가 보는 바깥 헤더에는 Pod IP가 없다",
      "tcpdump는 사설 대역을 기본으로 걸러 낸다",
      "Pod IP는 NAT로 노드 IP로 바뀐 뒤에만 eth0을 지난다",
    ],
    answer: 1,
    explanation:
      "VXLAN 같은 오버레이에서 노드 랜카드에는 노드 IP끼리의 UDP(4789 또는 8472)만 보이고, Pod 주소는 안쪽 헤더에 있다. udp port로 잡아 안쪽을 풀어 보거나 Pod 쪽 veth에서 캡처해야 한다. NAT로 바뀐 것이 아니라 감싸진 것이다.",
    anchor: "직접-오버레이를-만든다",
  },
  {
    id: "sdn-vxlan-overlay-2",
    post: "sdn-vxlan-overlay",
    question: "언더레이 MTU가 1500일 때 VXLAN 안쪽 IP 패킷이 1450바이트까지인 이유는?",
    choices: [
      "바깥 IP 20 + UDP 8 + VXLAN 8 + 안쪽 이더넷 헤더 14바이트가 바깥 IP 패킷 안에 들어가서",
      "VXLAN 헤더가 50바이트라서",
      "VNI가 24비트라 그만큼 줄어서",
      "UDP 체크섬이 50바이트를 차지해서",
    ],
    answer: 0,
    explanation:
      "MTU는 IP 패킷 크기라 바깥 이더넷 헤더는 계산에서 빠진다. 대신 감싼 안쪽 프레임의 이더넷 헤더 14바이트가 바깥 IP 패킷 안에 들어간다. 그래서 1500 - 20 - 8 - 8 - 14 = 1450이다. VXLAN 헤더 자체는 8바이트다.",
    anchor: "50바이트를-덧씌운다",
  },
  {
    id: "sdn-vxlan-overlay-3",
    post: "sdn-vxlan-overlay",
    question: "컨테이너 MTU는 1500, VXLAN 장치는 1450이다. DF를 켠 1500바이트 ping을 보내면 어떻게 되나?",
    choices: [
      "커널이 ping: local error: message too long을 출력한다",
      "브리지가 ICMP Fragmentation Needed를 돌려보내 경로 MTU가 줄어든다",
      "VXLAN 장치가 패킷을 둘로 쪼개 보낸다",
      "오류 메시지 없이 브리지에서 조용히 버려진다",
    ],
    answer: 3,
    explanation:
      "컨테이너는 자기 MTU 1500에 맞으니 그냥 보내고, L2 장치인 브리지는 더 작은 포트로 못 보내는 프레임을 ICMP 없이 버린다. 그래서 큰 응답만 멈추는 증상이 된다. local error는 컨테이너 MTU를 1450으로 낮췄을 때 커널이 미리 막으며 내는 메시지다.",
    anchor: "오버레이가-조용히-패킷을-버릴-때",
  },
  {
    id: "sdn-vxlan-overlay-4",
    post: "sdn-vxlan-overlay",
    question: "VXLAN 패킷의 바깥 UDP 출발지 포트가 흐름마다 다른 이유는?",
    choices: [
      "NAT를 지날 때 포트가 겹치지 않게 하려고",
      "VNI를 포트 번호에 실어 보내려고",
      "언더레이의 ECMP가 흐름을 여러 경로로 나누게 하면서 한 흐름은 한 경로에 묶어 두려고",
      "재전송 공격을 막으려고",
    ],
    answer: 2,
    explanation:
      "리눅스 VXLAN은 안쪽 흐름을 해시해 출발지 포트를 정한다. 언더레이 스위치는 바깥 다섯 값으로 경로를 고르니 흐름마다 다른 경로로 퍼지고, 같은 흐름은 늘 같은 경로라 순서가 지켜진다. VNI는 VXLAN 헤더에 따로 있다.",
    anchor: "언더레이는-출발지-포트를-보고-길을-나눈다",
  },
  {
    id: "sdn-vxlan-overlay-5",
    post: "sdn-vxlan-overlay",
    question: "같은 노드의 Pod끼리는 통신되는데 다른 노드의 Pod로만 안 된다. 노드끼리 ping은 된다. 먼저 의심할 것은?",
    choices: [
      "Pod의 DNS 설정",
      "노드 방화벽이나 보안 그룹이 오버레이 UDP 포트(4789 또는 8472)를 막는지",
      "Pod 인터페이스의 MAC 주소 중복",
      "컨트롤러가 SDN 규칙을 지웠는지",
    ],
    answer: 1,
    explanation:
      "같은 노드 안은 오버레이를 거치지 않고, 노드 사이 IP 연결도 살아 있으니 남는 건 감싼 패킷이 지나는 UDP 포트다. tcpdump로 오버레이 패킷이 나가기만 하고 돌아오지 않는지 보면 확인된다.",
    anchor: "오버레이에서-장애를-좁히는-법",
  },
  {
    id: "sdn-vxlan-overlay-6",
    post: "sdn-vxlan-overlay",
    question: "flood-and-learn 대신 BGP EVPN 같은 제어 평면을 두는 가장 큰 이유는?",
    choices: [
      "모르는 MAC과 브로드캐스트를 모든 VTEP에 복사하는 부하와, 이동한 VM의 옛 항목 문제를 없애려고",
      "VXLAN 패킷을 암호화하려고",
      "VNI를 24비트보다 늘리려고",
      "MTU 손실을 줄이려고",
    ],
    answer: 0,
    explanation:
      "뿌리고 배우는 방식은 호스트가 많아지면 브로드캐스트 하나가 수백 개로 복사되고, VM이 옮겨 가면 항목이 만료될 때까지 엉뚱한 곳으로 간다. EVPN은 MAC·IP 위치를 미리 광고해 이 둘을 없앤다. 암호화나 MTU와는 관계가 없다.",
    anchor: "mac이-어느-호스트-뒤에-있는지-누가-아나",
  },
  {
    id: "sdn-vxlan-overlay-7",
    post: "sdn-vxlan-overlay",
    question: "SDN에서 컨트롤러가 잠시 죽었을 때 기존 트래픽이 계속 흐르게 하는 설계 원칙은?",
    choices: [
      "모든 패킷을 컨트롤러가 직접 전달한다",
      "컨트롤러가 죽으면 장비가 STP로 경로를 다시 계산한다",
      "데이터 평면이 이미 내려받은 규칙으로 컨트롤러 없이도 전달을 계속한다",
      "컨트롤러가 죽으면 모든 VNI를 하나로 합친다",
    ],
    answer: 2,
    explanation:
      "SDN은 제어 평면과 데이터 평면을 나눴기 때문에, 규칙 계산이 멈춰도 이미 설치된 규칙으로 전달은 계속된다. 쿠버네티스 API 서버가 잠깐 죽어도 기존 Pod 통신이 끊기지 않는 것과 같다. 대신 그동안 새 변경은 반영되지 않는다.",
    anchor: "컨트롤러가-망을-그린다",
  },
];
