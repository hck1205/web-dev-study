import type { QuizQuestion } from "../types";

export const UDP_AND_QUIC: QuizQuestion[] = [
  {
    id: "udp-and-quic-1",
    post: "udp-and-quic",
    question: "UDP 지표 수집기가 바쁜 시간에만 숫자가 덜 찍히고 에러 로그는 없다. 가장 먼저 확인할 것은?",
    choices: [
      "수집기 서버의 TIME_WAIT 개수",
      "보내는 앱의 sendto() 반환값",
      "nstat의 UdpRcvbufErrors와 ss -uanm의 d 값",
      "TCP 재전송률",
    ],
    answer: 2,
    explanation:
      "UDP에는 흐름 제어가 없어서 받는 소켓 버퍼가 차면 커널이 조용히 버리고 RcvbufErrors만 올린다. 보내는 쪽 sendto()는 패킷을 내보내기만 하면 성공하니 단서가 되지 않는다.",
    anchor: "버퍼가-넘치면-조용히-버린다",
  },
  {
    id: "udp-and-quic-2",
    post: "udp-and-quic",
    question: "보내는 서버에서 뜬 tcpdump에 bad udp cksum이 찍혔다. 어떻게 해석하나?",
    choices: [
      "체크섬 계산을 NIC에 맡기는 오프로드 때문이라 대개 무시해도 된다",
      "케이블이 손상돼 비트가 바뀌고 있다",
      "상대가 UDP 체크섬을 지원하지 않는다",
      "IPv6에서만 생기는 문제라 IPv4로 바꿔야 한다",
    ],
    answer: 0,
    explanation:
      "요즘 커널은 체크섬을 네트워크 카드가 채우게 하고, tcpdump는 그 전의 패킷을 본다. 그래서 보내는 호스트의 캡처에서는 틀린 값으로 보인다. 받는 쪽이나 중간 캡처에서 나와야 실제 문제를 의심한다.",
    anchor: "주소만-적어-던지는-8바이트",
  },
  {
    id: "udp-and-quic-3",
    post: "udp-and-quic",
    question: "UDP 반사·증폭 공격이 가능한 근본 이유는?",
    choices: [
      "UDP 헤더에 암호화가 없어서",
      "UDP는 핸드셰이크가 없어 출발지 주소를 확인하지 않고, 일부 프로토콜은 답이 질문보다 훨씬 커서",
      "UDP 포트가 TCP 포트보다 많아서",
      "UDP는 혼잡 제어를 하지 않아 항상 최대 속도로 보내서",
    ],
    answer: 1,
    explanation:
      "출발지를 피해자 주소로 위조한 작은 질문을 보내면 서버의 큰 답이 피해자에게 간다. DNS 리졸버, NTP monlist, memcached UDP처럼 증폭률이 큰 서비스를 인터넷에 열어 두지 않는 게 기본 대책이다.",
    anchor: "질문보다-답이-큰-프로토콜은-무기가-된다",
  },
  {
    id: "udp-and-quic-4",
    post: "udp-and-quic",
    question: "QUIC 서버가 클라이언트 주소를 확인하기 전에 따르는 규칙은?",
    choices: [
      "인증서를 보내지 않고 기다린다",
      "TCP로 먼저 연결을 맺게 한다",
      "클라이언트에게 받은 바이트의 세 배까지만 보낸다",
      "모든 응답을 1200바이트 이하로 자른다",
    ],
    answer: 2,
    explanation:
      "RFC 9000은 주소 확인 전 서버가 보내는 양을 받은 양의 세 배로 제한하고, 클라이언트의 첫 데이터그램은 1200바이트 이상으로 채우게 했다. 그래서 위조된 주소로 큰 응답을 끌어내기 어렵고, 인증서가 크면 왕복이 하나 더 들 수 있다.",
    anchor: "처음-보는-상대에게는-세-배까지만-보낸다",
  },
  {
    id: "udp-and-quic-5",
    post: "udp-and-quic",
    question: "NAT 뒤의 UDP 통신이 몇 분 동안 조용하다가 서버 쪽 메시지가 더는 도착하지 않는다. 이유와 대책은?",
    choices: [
      "UDP 체크섬이 만료돼서, 체크섬을 끈다",
      "TCP keepalive가 꺼져 있어서, 커널 keepalive를 켠다",
      "포트 번호가 바뀌어서, 고정 포트를 쓴다",
      "NAT·방화벽이 유휴 UDP 흐름을 짧게(수십 초~2분) 잊어서, 앱이 주기적으로 빈 패킷을 보낸다",
    ],
    answer: 3,
    explanation:
      "UDP에는 시작과 끝 신호가 없어 NAT와 conntrack은 마지막 패킷 이후 시간으로만 판단한다. 리눅스는 30초나 120초다. WireGuard의 PersistentKeepalive나 QUIC의 PING처럼 앱이 직접 흐름을 살려 둔다. TCP keepalive는 UDP 소켓과 상관없다.",
    anchor: "nat와-방화벽은-udp를-오래-기억하지-않는다",
  },
  {
    id: "udp-and-quic-6",
    post: "udp-and-quic",
    question: "QUIC을 TCP 개선이 아니라 UDP 위에 새로 만든 가장 큰 이유는?",
    choices: [
      "UDP가 TCP보다 항상 빠르기 때문에",
      "커널과 중간 장비 때문에 TCP를 바꾸기 어렵고, UDP는 어디서나 통과하는 얇은 바닥이라서",
      "UDP는 암호화를 기본으로 제공해서",
      "TCP는 IPv6를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "TCP는 OS 커널에 있고 방화벽과 NAT가 헤더를 들여다보며 모르는 동작을 막아 사실상 굳어 있다. UDP 위에서 사용자 공간에 전송 계층을 만들면 빨리 바꿀 수 있고, 헤더를 암호화해 다시 굳는 것도 막는다.",
    anchor: "udp-위에-다시-지은-tcp-quic",
  },
];
