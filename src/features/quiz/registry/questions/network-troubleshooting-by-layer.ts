import type { QuizQuestion } from "../types";

export const NETWORK_TROUBLESHOOTING_BY_LAYER: QuizQuestion[] = [
  {
    id: "network-troubleshooting-by-layer-1",
    post: "network-troubleshooting-by-layer",
    question: "`curl -v` 출력이 `Trying 10.11.2.20:443...`에서 멈춰 있다. 다음으로 볼 곳은?",
    choices: [
      "인증서 만료일",
      "TCP 연결 단계: nc -zv로 refused인지 timeout인지 본다",
      "nginx의 proxy_read_timeout",
      "DNS 레코드",
    ],
    answer: 1,
    explanation:
      "Trying 줄은 이름 풀이가 끝나고 TCP 연결을 시도하는 중이라는 뜻이라, DNS는 이미 지나갔고 TLS는 아직 시작도 안 했다. 연결 단계부터 아래로 내려가며 확인한다.",
    anchor: "먼저-curl-한-번으로-어디서-멈췄는지-본다",
  },
  {
    id: "network-troubleshooting-by-layer-2",
    post: "network-troubleshooting-by-layer",
    question: "`curl -w` 결과가 `dns=0.0004 tcp=0.0005 tls=0.0051 ttfb=3.0136 total=3.0136 code=504`다. 시간을 쓴 곳은?",
    choices: [
      "DNS 서버가 느렸다",
      "TCP SYN이 재전송됐다",
      "서버가 요청을 처리하는 동안(TLS 끝부터 첫 바이트까지)",
      "본문을 내려받는 동안",
    ],
    answer: 2,
    explanation:
      "값은 누적 시각이라 단계별로 빼서 본다. ttfb에서 tls를 빼면 약 3초로, 서버가 응답 헤더를 보내기까지 기다린 시간이다. 504와 함께라면 프록시가 뒤쪽 응답을 기다리다 포기했다는 뜻이다.",
    anchor: "먼저-curl-한-번으로-어디서-멈췄는지-본다",
  },
  {
    id: "network-troubleshooting-by-layer-3",
    post: "network-troubleshooting-by-layer",
    question: "다른 망의 주소로 연결하자 정확히 3초 뒤에 `No route to host`가 났다. 라우터에서 무슨 일이 있었을 가능성이 큰가?",
    choices: [
      "라우터의 라우팅 테이블에 그 망이 없었다",
      "목적지 서버가 RST를 보냈다",
      "MTU가 맞지 않아 패킷이 버려졌다",
      "마지막 망에서 그 IP의 MAC을 ARP로 세 번 물었지만 답이 없었다",
    ],
    answer: 3,
    explanation:
      "리눅스 라우터는 ARP를 1초 간격으로 세 번 묻고, 답이 없으면 ICMP host unreachable을 돌려준다. 그래서 약 3초 뒤에 실패한다. 경로가 아예 없었다면 기다림 없이 바로 Network is unreachable이 왔을 것이다.",
    anchor: "다음-칸의-mac을-얻었는지",
  },
  {
    id: "network-troubleshooting-by-layer-4",
    post: "network-troubleshooting-by-layer",
    question: "mtr 보고서에서 1번 홉만 Loss 40%이고 목적지는 0%다. 어떻게 해석하나?",
    choices: [
      "그 라우터가 자기가 만드는 ICMP 응답 수를 제한한 것으로, 장애가 아니다",
      "1번 홉 구간에서 패킷 40%가 사라지고 있다",
      "목적지가 ICMP를 막았다",
      "MTU 블랙홀이 1번 홉에 있다",
    ],
    answer: 0,
    explanation:
      "라우터는 지나가는 패킷은 넘기지만 자기가 직접 보내는 TTL 초과 응답은 개수를 제한한다. 그 뒤 홉과 목적지가 0%라면 실제로는 아무것도 잃지 않은 것이다. 진짜 손실은 어느 홉부터 목적지까지 이어진다.",
    anchor: "목적지까지-닿는지",
  },
  {
    id: "network-troubleshooting-by-layer-5",
    post: "network-troubleshooting-by-layer",
    question: "`dig`는 새 주소 10.11.2.20을 주는데 앱은 계속 접속에 실패한다. 앱과 같은 경로로 이름을 풀어 보려면?",
    choices: [
      "dig +trace",
      "ping",
      "getent hosts",
      "nslookup에 다른 DNS 서버를 준다",
    ],
    answer: 2,
    explanation:
      "dig는 DNS 서버에 직접 물어서 /etc/hosts를 보지 않는다. getent는 nsswitch 순서대로 hosts 파일과 DNS를 거치니 앱이 받는 답과 같다. 실습에서는 hosts에 남은 옛 주소 10.11.2.99가 범인이었다.",
    anchor: "이름이-맞는-주소로-풀리는지",
  },
  {
    id: "network-troubleshooting-by-layer-6",
    post: "network-troubleshooting-by-layer",
    question: "`openssl s_client -connect 10.11.2.20:443`으로 확인했더니 기대와 다른 이름의 인증서가 왔다. 무엇을 빠뜨렸을 가능성이 큰가?",
    choices: [
      "-CAfile 옵션",
      "-servername으로 SNI를 보내는 것",
      "-brief 옵션",
      "TLS 1.3 강제",
    ],
    answer: 1,
    explanation:
      "서버가 여러 인증서를 들고 있으면 ClientHello의 SNI를 보고 고른다. IP로만 붙어서 SNI를 보내지 않으면 기본 인증서가 온다. -CAfile은 검증에 쓸 CA를 정할 뿐 어떤 인증서가 오는지는 바꾸지 않는다.",
    anchor: "tls가-맺어지는지",
  },
];
