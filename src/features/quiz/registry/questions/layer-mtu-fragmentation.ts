import type { QuizQuestion } from "../types";

export const LAYER_MTU_FRAGMENTATION: QuizQuestion[] = [
  {
    id: "layer-mtu-fragmentation-1",
    post: "layer-mtu-fragmentation",
    question: "curl로 큰 파일을 받으면 200 상태 코드까지 오고 본문에서 멈추는데, 같은 서버의 작은 페이지는 잘 온다. 가장 먼저 의심할 것은?",
    choices: [
      "DNS가 잘못된 IP를 준다",
      "서버 앱이 큰 파일을 읽지 못한다",
      "경로 중간의 작은 MTU 구간과 막힌 ICMP Fragmentation Needed(PMTU 블랙홀)",
      "TLS 인증서가 만료됐다",
    ],
    answer: 2,
    explanation:
      "연결 맺기와 짧은 응답은 작은 패킷이라 지나가고, MTU를 넘는 큰 패킷만 사라지는 모양이다. 라우터가 보내는 Fragmentation Needed가 막혀 있으면 보내는 쪽은 크기를 줄이지 못하고 같은 크기로 재전송만 반복한다.",
    anchor: "icmp가-막히면-블랙홀이-된다",
  },
  {
    id: "layer-mtu-fragmentation-2",
    post: "layer-mtu-fragmentation",
    question: "MTU 1500인 이더넷에서 TCP 타임스탬프 옵션을 쓸 때 세그먼트 하나에 실제로 실리는 내용물 크기는?",
    choices: ["1500바이트", "1460바이트", "1448바이트", "1472바이트"],
    answer: 2,
    explanation:
      "MSS는 1500에서 IP 헤더 20과 TCP 헤더 20을 뺀 1460이다. 리눅스는 기본으로 12바이트 타임스탬프 옵션을 붙이므로 실제 내용물은 1448이고, ss -ti의 mss:1448이 그 값이다. 1472는 ping -s로 1500바이트 패킷을 만들 때 쓰는 ICMP 데이터 크기다.",
    anchor: "mss는-mtu에서-헤더를-뺀-값",
  },
  {
    id: "layer-mtu-fragmentation-3",
    post: "layer-mtu-fragmentation",
    question: "ping -M do -s 1472로 보냈더니 \"Frag needed and DF set (mtu = 1400)\"이 왔다. 이 메시지가 뜻하는 것은?",
    choices: [
      "목적지 서버가 ping을 막았다",
      "경로 중간 라우터가 다음 구간 MTU가 1400이라 DF가 켜진 패킷을 버리고 알려 왔다",
      "내 인터페이스 MTU가 1400이다",
      "목적지가 패킷을 재조립하지 못했다",
    ],
    answer: 1,
    explanation:
      "DF가 켜진 패킷은 쪼갤 수 없어서 작은 MTU 구간을 만난 라우터가 버리고 ICMP 타입 3 코드 4에 다음 구간 MTU를 담아 보낸다. From 뒤의 주소가 그 라우터다. 이게 PMTUD가 쓰는 신호다.",
    anchor: "df-비트와-path-mtu-discovery",
  },
  {
    id: "layer-mtu-fragmentation-4",
    post: "layer-mtu-fragmentation",
    question: "MSS 클램핑이 ICMP가 막힌 경로에서도 큰 다운로드를 살려 내는 이유는?",
    choices: [
      "막힌 ICMP 메시지를 대신 만들어 보내서",
      "IP 단편화를 강제로 켜서",
      "SYN의 MSS 옵션을 작게 고쳐 써서 양쪽이 처음부터 경로에 맞는 크기로 보내게 해서",
      "UDP로 바꿔 보내서",
    ],
    answer: 2,
    explanation:
      "클램핑은 지나가는 SYN의 MSS를 나가는 경로 MTU에 맞게 줄인다. 상대가 알린 MSS를 넘지 않게 보내니 큰 패킷이 애초에 생기지 않고 PMTUD가 필요 없다. MSS 협상이 없는 UDP와 QUIC에는 효과가 없다.",
    anchor: "mss-클램핑으로-돌아가기",
  },
  {
    id: "layer-mtu-fragmentation-5",
    post: "layer-mtu-fragmentation",
    question: "IPv4 조각(fragment) 하나가 경로에서 사라지면 어떻게 되나?",
    choices: [
      "그 조각만 다시 보내 달라고 요청한다",
      "나머지 조각으로 내용을 일부 복원한다",
      "목적지가 재조립 시간을 기다리다 버려서 패킷 전체를 잃은 것과 같아진다",
      "라우터가 그 조각을 자동으로 재전송한다",
    ],
    answer: 2,
    explanation:
      "IP에는 조각 재전송 기능이 없다. 목적지는 재조립 버퍼에 조각을 모으다 하나가 끝내 오지 않으면(리눅스 기본 30초) 전부 버린다. 그래서 조각 수만큼 손실률이 불어나고, TCP는 쪼개지지 않을 크기로 보내려 한다.",
    anchor: "큰-패킷을-쪼개는-단편화",
  },
  {
    id: "layer-mtu-fragmentation-6",
    post: "layer-mtu-fragmentation",
    question: "호스트 eth0 MTU가 1400인 환경에서 컨테이너 안의 apt-get만 멈추고 호스트에서는 잘 된다. 그럴듯한 원인은?",
    choices: [
      "Docker 기본 브리지가 호스트와 상관없이 MTU 1500을 써서 컨테이너가 큰 패킷을 만든다",
      "컨테이너에 DNS가 없다",
      "컨테이너가 IPv6만 쓴다",
      "호스트의 ip_forward가 켜져 있다",
    ],
    answer: 0,
    explanation:
      "호스트는 1400으로 시작하니 문제없지만 컨테이너는 1500 기준으로 보내서 호스트 밖에서 PMTUD에 기대게 된다. 경로가 ICMP를 막으면 컨테이너 쪽 큰 응답만 멈춘다. daemon.json의 mtu로 맞춘다.",
    anchor: "터널과-컨테이너가-mtu를-깎는다",
  },
];
