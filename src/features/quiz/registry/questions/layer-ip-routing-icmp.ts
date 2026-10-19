import type { QuizQuestion } from "../types";

export const LAYER_IP_ROUTING_ICMP: QuizQuestion[] = [
  {
    id: "layer-ip-routing-icmp-1",
    post: "layer-ip-routing-icmp",
    question: "라우팅 테이블에 10.0.0.0/8, 10.0.4.0/24, 10.0.4.128/25, default 경로가 있다. 10.0.4.200으로 가는 패킷은 어느 경로를 타나?",
    choices: ["default", "10.0.0.0/8", "10.0.4.0/24", "10.0.4.128/25"],
    answer: 3,
    explanation:
      "맞는 경로가 여럿이면 프리픽스가 가장 긴 경로가 이긴다. 200은 비트로 11001000이라 10.0.4.128/25에도 맞고, /25가 가장 길다. 경로를 넣은 순서나 표의 위치는 상관없다.",
    anchor: "가장-길게-맞는-경로가-이긴다",
  },
  {
    id: "layer-ip-routing-icmp-2",
    post: "layer-ip-routing-icmp",
    question: "mtr 결과에서 2번 홉은 손실 100%인데 3번 홉(목적지)은 손실 0%다. 어떻게 읽어야 하나?",
    choices: [
      "2번 홉 라우터가 패킷을 버리고 있으니 장애다",
      "목적지가 응답을 위조하고 있다",
      "2번 홉이 나에게 ICMP 답장만 보내지 않을 뿐, 패킷은 잘 넘기고 있다",
      "측정 도구가 고장 났다",
    ],
    answer: 2,
    explanation:
      "2번 홉을 지나지 못했다면 목적지에 닿을 수 없으니 그 100%는 가짜 손실이다. 라우터는 ICMP 오류를 속도 제한하거나 아예 보내지 않도록 설정되곤 한다. 손실이 어느 홉부터 목적지까지 이어질 때가 진짜 문제다.",
    anchor: "별표를-읽는-법",
  },
  {
    id: "layer-ip-routing-icmp-3",
    post: "layer-ip-routing-icmp",
    question: "리눅스 traceroute가 목적지에 닿았다고 판단하는 신호는?",
    choices: [
      "목적지가 보낸 ICMP Port Unreachable",
      "목적지가 보낸 ICMP Time Exceeded",
      "목적지가 보낸 TCP SYN-ACK",
      "30홉을 다 채웠을 때",
    ],
    answer: 0,
    explanation:
      "기본 traceroute는 33434번부터 올라가는 UDP 포트로 탐침을 보낸다. 중간 라우터는 TTL이 0이 되면 Time Exceeded를 보내고, 목적지는 그 포트에 받는 프로그램이 없어서 Port Unreachable로 답한다. 그게 끝 신호다.",
    anchor: "traceroute는-ttl을-하나씩-늘린다",
  },
  {
    id: "layer-ip-routing-icmp-4",
    post: "layer-ip-routing-icmp",
    question: "ping은 100% 손실인데 nc -zv로 80번 포트 연결과 curl은 성공한다. 가장 그럴듯한 상황은?",
    choices: [
      "서버의 L3 경로가 끊겼다",
      "서버나 중간 방화벽이 ICMP Echo만 막고 있다",
      "DNS가 잘못된 IP를 준다",
      "TCP 체크섬이 틀렸다",
    ],
    answer: 1,
    explanation:
      "TCP 연결과 HTTP 응답이 오간다면 L3 경로는 양방향으로 살아 있다. ping은 ICMP Echo로만 확인하므로 그것만 막혀도 실패한다. 서비스 상태는 ping이 아니라 실제 서비스 포트로 확인한다.",
    anchor: "ping이-말해-주는-것과-말해-주지-않는-것",
  },
  {
    id: "layer-ip-routing-icmp-5",
    post: "layer-ip-routing-icmp",
    question: "ping 결과에 \"From 10.0.3.2 icmp_seq=1 Time to live exceeded\"가 반복된다. 무엇을 의심하나?",
    choices: [
      "목적지 서버의 방화벽",
      "10.0.3.2 근처의 라우팅 고리(loop)",
      "내 컴퓨터의 ARP 캐시",
      "목적지 포트에 프로그램이 없음",
    ],
    answer: 1,
    explanation:
      "패킷이 라우터 사이를 오가며 TTL을 다 써 버렸다는 뜻이고, 메시지를 보낸 10.0.3.2가 마지막으로 TTL을 줄인 라우터다. traceroute를 찍으면 같은 두 주소가 번갈아 나오는 모양으로 고리가 보인다.",
    anchor: "ttl은-길을-잃은-패킷을-끝낸다",
  },
  {
    id: "layer-ip-routing-icmp-6",
    post: "layer-ip-routing-icmp",
    question: "리눅스 서버를 라우터로 쓰려고 경로를 다 넣었는데 다른 망으로 가는 패킷이 오류 메시지 없이 사라진다. 먼저 확인할 것은?",
    choices: [
      "net.ipv4.ip_forward 값",
      "DNS 서버 설정",
      "TLS 인증서",
      "/etc/hosts",
    ],
    answer: 0,
    explanation:
      "ip_forward가 0이면 리눅스는 자기 주소가 아닌 패킷을 넘기지 않고 조용히 버린다. Docker와 쿠버네티스 노드도 이 값이 켜져 있어야 컨테이너로 가는 트래픽이 지나간다.",
    anchor: "라우터를-켜는-스위치-ip_forward",
  },
];
