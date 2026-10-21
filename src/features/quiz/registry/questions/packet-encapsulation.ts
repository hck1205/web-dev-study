import type { QuizQuestion } from "../types";

export const PACKET_ENCAPSULATION: QuizQuestion[] = [
  {
    id: "packet-encapsulation-1",
    post: "packet-encapsulation",
    question: "82바이트짜리 HTTP 요청이 TLS 1.3(AES-GCM) 레코드가 되면 몇 바이트가 되나?",
    choices: ["82", "98", "104", "120"],
    answer: 2,
    explanation:
      "레코드 헤더 5바이트, 암호문 안에 숨긴 레코드 종류 1바이트, GCM 인증 태그 16바이트가 붙어 104바이트가 된다. 실습 캡처의 ApplicationData(5+99)가 바로 이 요청이었다.",
    anchor: "요청-프레임-한-장을-바이트로-뜯기",
  },
  {
    id: "packet-encapsulation-2",
    post: "packet-encapsulation",
    question: "12바이트 HTML을 HTTPS로 한 번 받는 데 프레임 3393바이트가 오갔다. 가장 많은 바이트를 쓴 것은?",
    choices: [
      "HTTP 응답 본문",
      "TLS 핸드셰이크(ClientHello, 인증서 등)와 연결을 맺고 끊는 프레임",
      "IP 헤더의 옵션",
      "TCP 재전송",
    ],
    answer: 1,
    explanation:
      "ClientHello 583바이트, 서버 핸드셰이크 844바이트 프레임처럼 연결을 맺는 비용이 대부분이고, 내용물은 280바이트뿐이었다. 그래서 작은 요청이 많을 때는 연결 재사용과 세션 재개가 효과가 크다.",
    anchor: "요청-하나가-만든-17개의-프레임",
  },
  {
    id: "packet-encapsulation-3",
    post: "packet-encapsulation",
    question: "tcpdump의 length 170과 실제로 선을 차지하는 바이트가 다른 이유는?",
    choices: [
      "tcpdump가 IP 헤더를 빼고 세기 때문에",
      "TLS 태그는 캡처되지 않기 때문에",
      "TCP 옵션은 캡처에서 생략되기 때문에",
      "FCS 4바이트, 프리앰블 8바이트, 프레임 간격 12바이트는 캡처에 나오지 않기 때문에",
    ],
    answer: 3,
    explanation:
      "length는 이더넷 헤더부터 내용 끝까지다. 랜 카드가 붙이고 떼는 FCS와 프리앰블, 프레임 사이 간격까지 프레임마다 24바이트가 더 들어 170바이트 프레임은 194바이트어치 선을 쓴다.",
    anchor: "캡처에-찍히지-않는-24바이트",
  },
  {
    id: "packet-encapsulation-4",
    post: "packet-encapsulation",
    question: "MTU 1500, TCP 타임스탬프 사용 시 1Gbps 링크에서 파일 전송이 약 940Mbps에서 멈춘다. 이 현상에 대한 판단으로 맞는 것은?",
    choices: [
      "세그먼트당 1448바이트를 싣는 데 1538바이트어치 선을 써서 약 94%가 상한이라 정상이다",
      "TLS 오버헤드가 6%라서 TLS를 끄면 1Gbps가 나온다",
      "MSS가 1460이 아니라 1448로 잘못 설정된 장애다",
      "TSO가 켜져 있어서 대역폭을 낭비하고 있다",
    ],
    answer: 0,
    explanation:
      "이더넷, IP, TCP 헤더와 옵션, 프레임 사이 비용을 합치면 내용물 비율이 약 94%로 묶인다. TLS 레코드 오버헤드는 큰 전송에서 0.13% 정도라 거의 영향이 없고, 1448은 MSS 1460에서 타임스탬프 12바이트를 뺀 정상 값이다.",
    anchor: "큰-파일은-얼마나-효율적인가",
  },
  {
    id: "packet-encapsulation-5",
    post: "packet-encapsulation",
    question: "보내는 서버에서 tcpdump를 걸었더니 MTU 1500인데 length 15928인 TCP 세그먼트가 찍히고 체크섬은 incorrect로 나온다. 가장 그럴듯한 설명은?",
    choices: [
      "점보 프레임이 켜져 큰 프레임이 선으로 나가고 있다",
      "IP 단편화가 일어나 조각을 합쳐서 보여 주는 것이다",
      "TSO·체크섬 오프로드로 랜 카드가 자르고 계산하기 전의 덩어리를 tcpdump가 본 것이다",
      "커널 버그로 패킷이 손상됐다",
    ],
    answer: 2,
    explanation:
      "TSO가 켜져 있으면 커널은 큰 덩어리를 랜 카드에 넘기고 랜 카드가 MSS로 잘라 헤더와 체크섬을 채운다. tcpdump는 그 전 단계를 보기 때문에 큰 length와 빈 체크섬이 찍힌다. TSO를 끄자 1448바이트 세그먼트로 보였다.",
    anchor: "tcpdump에-mtu보다-큰-패킷이-찍힐-때",
  },
  {
    id: "packet-encapsulation-6",
    post: "packet-encapsulation",
    question: "바깥 MTU가 1500인 링크 위에 WireGuard(IPv4) 터널을 만들었다. 터널 인터페이스 MTU로 알맞은 값과 이유는?",
    choices: [
      "1500, 터널은 바깥 MTU를 그대로 쓴다",
      "1420, 바깥 IP 20 + UDP 8 + WG 헤더 16 + 태그 16 = 60바이트를 빼야 해서",
      "1450, VXLAN과 같은 50바이트를 빼야 해서",
      "1492, PPPoE 8바이트를 빼야 해서",
    ],
    answer: 1,
    explanation:
      "터널은 원래 패킷 전체를 새 헤더로 다시 싸므로 그만큼 안쪽 자리가 준다. WireGuard는 IPv4에서 60바이트를 써서 기본 MTU가 1420이고, 50바이트는 VXLAN, 8바이트는 PPPoE의 몫이다.",
    anchor: "한-겹-더-씌우면-줄어드는-자리",
  },
];
