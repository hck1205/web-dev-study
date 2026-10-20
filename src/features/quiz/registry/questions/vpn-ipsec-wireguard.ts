import type { QuizQuestion } from "../types";

export const VPN_IPSEC_WIREGUARD: QuizQuestion[] = [
  {
    id: "vpn-ipsec-wireguard-1",
    post: "vpn-ipsec-wireguard",
    question: "IPsec 연결 로그에 received NO_PROPOSAL_CHOSEN notify error가 반복된다. 무엇을 먼저 맞춰야 하나?",
    choices: [
      "양쪽의 사전 공유 키",
      "양쪽의 트래픽 셀렉터(local_ts, remote_ts)",
      "양쪽이 제안하는 IKE 암호 조합",
      "방화벽의 UDP 4500 허용 규칙",
    ],
    answer: 2,
    explanation:
      "NO_PROPOSAL_CHOSEN은 첫 메시지(IKE_SA_INIT)에서 서로 겹치는 암호 조합이 없다는 뜻이다. 키가 틀리면 다음 단계에서 AUTHENTICATION_FAILED, 셀렉터가 틀리면 TS_UNACCEPTABLE이 나온다.",
    anchor: "ipsec이-안-붙을-때-나오는-세-가지-메시지",
  },
  {
    id: "vpn-ipsec-wireguard-2",
    post: "vpn-ipsec-wireguard",
    question: "IPsec 상태가 ESTABLISHED로 보이는데 사내망 트래픽이 흐르지 않는다. 로그에 TS_UNACCEPTABLE이 있다. 어떤 상태인가?",
    choices: [
      "IKE SA는 맺어졌지만 트래픽 셀렉터가 어긋나 CHILD SA가 만들어지지 않았다",
      "ESP 패킷이 NAT에서 버려지고 있다",
      "IKE SA의 수명이 끝나 다시 협상 중이다",
      "암호 조합이 맞지 않아 IKE SA가 실패했다",
    ],
    answer: 0,
    explanation:
      "IKE SA와 데이터용 CHILD SA는 따로 만들어진다. 셀렉터가 서로 거울처럼 맞지 않으면 IKE SA만 남고 데이터가 지날 CHILD SA는 없다. 그래서 상태 화면만 보면 터널이 살아 있는 것처럼 보인다.",
    anchor: "ipsec이-안-붙을-때-나오는-세-가지-메시지",
  },
  {
    id: "vpn-ipsec-wireguard-3",
    post: "vpn-ipsec-wireguard",
    question: "NAT 뒤에 있는 IPsec 게이트웨이가 ESP를 UDP 4500 안에 넣어 보내는 이유는?",
    choices: [
      "UDP가 ESP보다 암호화가 강해서",
      "ESP에는 포트 번호가 없어 NAT가 어느 내부 기기의 패킷인지 구분할 수 없어서",
      "IKE와 ESP를 같은 소켓에서 처리해야 성능이 나와서",
      "UDP 4500은 방화벽이 항상 열어 두는 포트라서",
    ],
    answer: 1,
    explanation:
      "NAT는 포트로 연결을 구분하는데 ESP(IP 프로토콜 50)에는 포트가 없다. 그래서 IKE가 NAT를 감지하면 ESP를 UDP로 감싸는 NAT-T를 쓰고, NAT 기록이 사라지지 않게 keepalive도 보낸다.",
    anchor: "nat를-지나는-법",
  },
  {
    id: "vpn-ipsec-wireguard-4",
    post: "vpn-ipsec-wireguard",
    question: "WireGuard 피어 설정의 AllowedIPs가 하는 일을 가장 정확히 말한 것은?",
    choices: [
      "이 피어가 접속해도 되는 출발지 공인 IP 목록이다",
      "터널 인터페이스에 붙일 주소 목록이다",
      "핸드셰이크를 허용할 시간대 목록이다",
      "나갈 때는 어느 피어로 보낼지 고르는 경로표, 들어올 때는 복호화한 패킷의 출발지 허용 목록이다",
    ],
    answer: 3,
    explanation:
      "AllowedIPs는 암호 키 라우팅의 핵심이다. 목적지를 최장 일치로 비교해 피어를 고르고, 받은 패킷의 안쪽 출발지가 그 피어의 목록에 없으면 버린다. 피어의 바깥 공인 IP는 Endpoint가 다루고, 터널 주소는 Address가 정한다.",
    anchor: "allowedips가-라우팅과-방화벽을-겸한다",
  },
  {
    id: "vpn-ipsec-wireguard-5",
    post: "vpn-ipsec-wireguard",
    question: "VPN을 켜면 사내 위키(192.168.60.10)는 열리는데 DB(192.168.60.20)는 안 된다. 동료는 둘 다 된다. 먼저 비교할 것은?",
    choices: [
      "내 피어 항목과 동료 피어 항목의 AllowedIPs(양쪽 설정 모두)",
      "내 노트북과 동료 노트북의 WireGuard 버전",
      "DB의 TLS 인증서",
      "게이트웨이의 암호 조합 설정",
    ],
    answer: 0,
    explanation:
      "나만 일부 대역에 못 가면 내 설정의 AllowedIPs가 그 주소를 포함하는지, 게이트웨이의 내 피어 항목이 응답을 허용하는지가 가장 유력하다. WireGuard는 암호 조합을 협상하지 않으니 조합 설정은 원인이 될 수 없다.",
    anchor: "allowedips가-라우팅과-방화벽을-겸한다",
  },
  {
    id: "vpn-ipsec-wireguard-6",
    post: "vpn-ipsec-wireguard",
    question: "트래픽을 계속 보내고 있는데 wg show의 latest handshake가 5분 전에 멈춰 있다. 어떻게 해석하나?",
    choices: [
      "정상이다. WireGuard는 처음 한 번만 핸드셰이크한다",
      "키 갱신용 새 핸드셰이크가 실패하고 있다. 엔드포인트와 UDP 경로를 확인한다",
      "AllowedIPs가 너무 넓어서 핸드셰이크가 생략됐다",
      "PersistentKeepalive가 켜져 있어서 핸드셰이크가 필요 없다",
    ],
    answer: 1,
    explanation:
      "WireGuard는 트래픽이 있으면 2분마다 새 핸드셰이크로 세션 키를 바꾼다. 트래픽이 있는데 값이 2분을 넘었다면 새 핸드셰이크가 실패하는 중이다. 조용한 터널이라면 오래된 값도 정상이다.",
    anchor: "wireguard는-설정할-게-거의-없다",
  },
  {
    id: "vpn-ipsec-wireguard-7",
    post: "vpn-ipsec-wireguard",
    question: "AWS Site-to-Site VPN 연결에서 터널 하나만 올려 두고 운영했다. 어떤 문제가 생기기 쉬운가?",
    choices: [
      "ESP 암호화가 꺼진다",
      "BGP를 쓸 수 없다",
      "AWS가 한쪽 터널을 점검할 때 연결이 끊긴다",
      "트래픽 셀렉터가 0.0.0.0/0으로 고정된다",
    ],
    answer: 2,
    explanation:
      "AWS는 연결 하나에 터널 두 개를 주고 한쪽을 점검하는 동안 다른 쪽으로 넘어가게 설계했다. 두 터널을 모두 올리고 BGP나 정적 경로로 장애 조치가 되게 해야 점검 때 끊기지 않는다.",
    anchor: "무엇을-고를까",
  },
];
