import type { QuizQuestion } from "../types";

export const FIRST_PAGE_FROM_POWER_ON: QuizQuestion[] = [
  {
    id: "first-page-from-power-on-1",
    post: "first-page-from-power-on",
    question: "주소를 막 받은 노트북이 다른 망의 서버(203.0.113.10)에 접속하려 할 때, ARP로 MAC을 묻는 대상은?",
    choices: [
      "서버 203.0.113.10",
      "DNS로 알아낸 서버 IP의 소유자",
      "기본 경로의 게이트웨이 192.168.50.1",
      "브로드캐스트 주소 255.255.255.255",
    ],
    answer: 2,
    explanation:
      "목적지가 내 서브넷에 없으니 라우팅 테이블의 default via 192.168.50.1로 보낸다. 이더넷 프레임은 한 구간만 가므로 첫 구간의 받는 사람인 게이트웨이의 MAC을 묻는다. 서버의 MAC은 노트북이 알 필요도, 알 방법도 없다.",
    anchor: "게이트웨이의-mac을-먼저-묻는-이유",
  },
  {
    id: "first-page-from-power-on-2",
    post: "first-page-from-power-on",
    question: "같은 SYN을 공유기 LAN 쪽과 WAN 쪽에서 찍어 비교했다. 이 실습에서 바뀌지 않은 것은?",
    choices: [
      "출발지 MAC 주소",
      "TTL",
      "출발지 IP 주소",
      "TCP 시퀀스 번호(seq)",
    ],
    answer: 3,
    explanation:
      "MAC은 구간마다 새로 쓰이고, TTL은 라우터를 지나며 64에서 63으로 줄고, 출발지 IP는 NAT가 공인 주소로 바꿨다. seq와 IP id는 그대로라서 두 줄이 같은 패킷임을 확인하는 단서가 된다.",
    anchor: "공유기를-지나며-바뀌는-세-가지",
  },
  {
    id: "first-page-from-power-on-3",
    post: "first-page-from-power-on",
    question: "HTTPS로 접속했는데도 공유기나 회사 방화벽이 접속한 도메인을 알 수 있는 이유로 가장 정확한 것은?",
    choices: [
      "TLS 1.3도 인증서를 평문으로 보내기 때문에",
      "ClientHello의 SNI에 서버 이름이 평문으로 실리기 때문에",
      "HTTP Host 헤더는 암호화되지 않기 때문에",
      "세션 티켓에 도메인이 적혀 있기 때문에",
    ],
    answer: 1,
    explanation:
      "서버가 어느 인증서를 꺼낼지 고르도록 ClientHello의 SNI 확장에 이름이 평문으로 들어간다. TLS 1.3에서는 인증서가 암호 레코드 안에 있고, Host 헤더는 암호화된 HTTP 요청 안에 있다. SNI까지 가리려면 ECH가 필요하다.",
    anchor: "tls-이름만-보이고-나머지는-잠긴다",
  },
  {
    id: "first-page-from-power-on-4",
    post: "first-page-from-power-on",
    question: "TLS 1.3에서 세션 티켓으로 연결을 재개하면 무엇이 줄어드나?",
    choices: [
      "서버가 보내는 인증서와 서명, 그리고 그 검증 비용",
      "TCP 3-way handshake 왕복",
      "TLS 핸드셰이크 왕복이 1회에서 0회로",
      "DNS 질의 횟수",
    ],
    answer: 0,
    explanation:
      "재개해도 TLS 1.3 핸드셰이크는 그대로 1-RTT다. 실습에서 서버의 첫 응답이 1352바이트에서 245바이트로 줄었는데, 인증서와 서명을 다시 보내지 않았기 때문이다. 왕복까지 없애려면 0-RTT가 필요하고, 재전송 위험 때문에 안전한 요청에만 쓴다.",
    anchor: "두-번째-접속에서-사라지는-것들",
  },
  {
    id: "first-page-from-power-on-5",
    post: "first-page-from-power-on",
    question: "curl이 `(6) Could not resolve host`를 냈고 `ip -br addr`에 IPv4 주소가 없다. 가장 먼저 의심할 칸은?",
    choices: [
      "DNS 서버의 레코드",
      "서버의 방화벽",
      "TLS 인증서",
      "DHCP로 주소를 받는 단계",
    ],
    answer: 3,
    explanation:
      "주소와 경로가 없으면 DNS 서버에 질의를 보낼 수도 없어서 curl은 DNS 실패처럼 말한다. 실습에서 DHCP 서버를 끄자 DISCOVER만 반복되고 curl은 (6)을, ping은 Network is unreachable을 냈다. 진짜 DNS 문제라면 질의가 나가고 NXDomain 같은 답이 온다.",
    anchor: "어느-칸에서-멈췄는지-캡처가-말해-준다",
  },
  {
    id: "first-page-from-power-on-6",
    post: "first-page-from-power-on",
    question: "캡처에 같은 seq의 SYN만 반복되고 공유기 WAN 쪽 캡처의 출발지가 192.168.50.122(사설 주소)로 찍혀 있다. 무엇이 빠졌나?",
    choices: [
      "서버의 리스닝 소켓",
      "공유기의 NAT(MASQUERADE) 규칙",
      "노트북의 ARP 캐시",
      "서버 인증서의 SAN",
    ],
    answer: 1,
    explanation:
      "NAT가 출발지를 공인 주소로 바꾸지 않아 사설 주소 그대로 나갔고, 서버는 그 주소로 돌아갈 길이 없어 답하지 못했다. 리스닝 소켓이 없으면 SYN 바로 뒤에 RST가 오니 모양이 다르다. 증상은 DROP과 같은 타임아웃이지만 바깥 캡처의 출발지로 구별한다.",
    anchor: "어느-칸에서-멈췄는지-캡처가-말해-준다",
  },
];
