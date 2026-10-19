import type { QuizQuestion } from "../types";

export const PACKET_CAPTURE_TCPDUMP: QuizQuestion[] = [
  {
    id: "packet-capture-tcpdump-1",
    post: "packet-capture-tcpdump",
    question: "nginx 뒤의 앱 때문에 502가 난다. 서버 앞쪽 인터페이스(s0)만 찍으면 무엇을 놓치나?",
    choices: [
      "클라이언트가 보낸 GET 요청",
      "nginx가 보낸 502 응답",
      "TCP 3-way handshake",
      "nginx와 앱 사이의 뒤쪽 연결(lo)",
    ],
    answer: 3,
    explanation:
      "프록시가 있으면 연결이 두 개다. 같은 서버 안의 nginx와 앱은 127.0.0.1로 lo 인터페이스에서 대화하니 s0에는 나타나지 않는다. -i any로 두 포트를 함께 찍어야 뒤쪽 RST와 앞쪽 502를 한 화면에서 비교할 수 있다.",
    anchor: "어디서-찍을지부터-정한다",
  },
  {
    id: "packet-capture-tcpdump-2",
    post: "packet-capture-tcpdump",
    question: "한 연결의 플래그가 `[S]`, `[S.]`, `[.]`, `[P.]`, `[.]`, `[R.]` 순서로 찍혔고 RST의 출발지는 서버다. 무슨 일인가?",
    choices: [
      "서버가 요청을 받은 뒤 응답 없이 연결을 리셋했다",
      "서버 포트에 듣는 프로그램이 없었다",
      "방화벽이 SYN을 버렸다",
      "정상적으로 요청과 응답을 주고받고 닫았다",
    ],
    answer: 0,
    explanation:
      "연결이 맺어지고 데이터와 ACK까지 오간 뒤 RST가 나왔으니 도중에 끊긴 것이다. 듣는 프로그램이 없었다면 [S] 바로 뒤에 [R.]이 왔을 것이고, 방화벽 DROP이라면 [S]만 반복됐을 것이다.",
    anchor: "장애-장면을-패킷으로-가른다",
  },
  {
    id: "packet-capture-tcpdump-3",
    post: "packet-capture-tcpdump",
    question: "tcpdump에 `-nn`을 습관처럼 붙이는 이유는?",
    choices: [
      "패킷 내용을 16진수로 보려고",
      "IP와 포트를 이름으로 바꾸지 않아 역방향 DNS 조회로 느려지거나 캡처에 섞이지 않게 하려고",
      "모든 인터페이스에서 찍으려고",
      "패킷 앞부분만 저장하려고",
    ],
    answer: 1,
    explanation:
      "이름 풀이를 켜 두면 tcpdump가 IP마다 역방향 DNS를 물어 출력이 늦어지고, 그 DNS 질의가 다시 캡처에 섞인다. 16진수는 -X, 모든 인터페이스는 -i any, 앞부분만 저장은 -s가 맡는다.",
    anchor: "필요한-패킷만-거른다",
  },
  {
    id: "packet-capture-tcpdump-4",
    post: "packet-capture-tcpdump",
    question: "Ubuntu에서 `sudo tcpdump -C 1 -W 3 -w ring.pcap`을 root 소유 폴더에서 실행하자 `ring.pcap0: Permission denied`가 났다. 이유는?",
    choices: [
      "-C 옵션은 pcapng 형식만 지원한다",
      "파일 이름 확장자가 .pcap이 아니다",
      "파일을 돌려 쓸 때는 권한을 tcpdump 사용자로 낮춘 뒤 파일을 열기 때문이다",
      "캡처 버퍼가 부족하다",
    ],
    answer: 2,
    explanation:
      "Ubuntu의 tcpdump는 캡처 장치를 연 뒤 tcpdump 사용자로 바뀌고, -C나 -G를 쓰면 그 뒤에 파일을 연다. tcpdump 사용자가 쓸 수 있는 폴더에 저장하거나 -Z root를 준다. 확장자 제한은 AppArmor 규칙인데 여기서는 이미 .pcap0이라 해당하지 않는다.",
    anchor: "파일로-남기고-wireshark로-연다",
  },
  {
    id: "packet-capture-tcpdump-5",
    post: "packet-capture-tcpdump",
    question: "HTTPS 트래픽을 tcpdump로 찍었을 때 평문으로 볼 수 있는 것은?",
    choices: [
      "요청 경로와 쿠키",
      "응답 본문의 JSON",
      "Authorization 헤더",
      "ClientHello에 실린 접속 이름(SNI)",
    ],
    answer: 3,
    explanation:
      "TLS는 HTTP 요청과 응답 전체를 암호화하지만, 서버가 인증서를 고를 수 있도록 ClientHello의 SNI는 평문으로 보낸다. 내 클라이언트의 내용까지 보려면 SSLKEYLOGFILE로 세션 키를 남겨 Wireshark에서 푼다.",
    anchor: "tls-안은-보이지-않는다-이름만-빼고",
  },
  {
    id: "packet-capture-tcpdump-6",
    post: "packet-capture-tcpdump",
    question: "이미지에 tcpdump가 없는 Docker 컨테이너의 트래픽을 찍는 방법으로 알맞은 것은?",
    choices: [
      "호스트에서 nsenter로 컨테이너 PID의 네트워크 namespace에 들어가 호스트의 tcpdump를 실행한다",
      "호스트에서 -i any로 찍으면 컨테이너 eth0이 그대로 보인다",
      "컨테이너를 --privileged로 다시 만들어야만 한다",
      "Wireshark 표시 필터로 컨테이너 이름을 지정한다",
    ],
    answer: 0,
    explanation:
      "컨테이너는 별도의 네트워크 namespace에 있어서 호스트의 -i any에는 컨테이너 eth0이 아니라 호스트 쪽 veth 짝만 보인다. nsenter -t PID -n으로 그 namespace에서 호스트의 tcpdump를 돌리면 이미지에 도구가 없어도 된다.",
    anchor: "컨테이너와-pod-안에서-찍는다",
  },
];
