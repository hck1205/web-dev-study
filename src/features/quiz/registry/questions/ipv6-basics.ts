import type { QuizQuestion } from "../types";

export const IPV6_BASICS: QuizQuestion[] = [
  {
    id: "ipv6-basics-1",
    post: "ipv6-basics",
    question: "DHCP를 켜지 않았는데 서버에 2001:로 시작하는 글로벌 IPv6 주소가 생겼다. 주소는 어디서 왔나?",
    choices: [
      "커널이 MAC 주소만으로 전 세계에서 유일한 주소를 지어냈다",
      "DNS 서버가 AAAA 레코드로 내려 줬다",
      "라우터 광고(RA)의 /64 프리픽스에 호스트가 만든 인터페이스 ID를 붙였다",
      "링크 로컬 주소가 일정 시간 뒤 글로벌 주소로 승격됐다",
    ],
    answer: 2,
    explanation:
      "SLAAC에서는 라우터가 RA로 프리픽스만 알려 주고 뒤 64비트는 호스트가 스스로 만든다. 프리픽스 없이 MAC만으로는 어느 망의 주소인지 정할 수 없고, 링크 로컬 주소는 승격되지 않고 따로 남는다.",
    anchor: "dhcp-없이-주소를-받는-slaac",
  },
  {
    id: "ipv6-basics-2",
    post: "ipv6-basics",
    question: "IPv6 이웃 요청(NS)을 브로드캐스트 대신 요청 노드 멀티캐스트 주소로 보내서 얻는 효과는?",
    choices: [
      "라우터를 넘어 다른 망의 이웃까지 찾을 수 있다",
      "대상 주소의 뒤 24비트가 같은 노드만 처리하고 나머지 랜카드는 하드웨어에서 버린다",
      "응답(NA)을 암호화해서 위조를 막는다",
      "ARP 캐시가 필요 없어진다",
    ],
    answer: 1,
    explanation:
      "요청 노드 그룹 ff02::1:ffXX:XXXX에는 뒤 24비트가 같은 노드만 가입해 있어서, ARP처럼 망 전체가 질문을 읽지 않는다. NDP도 이웃 테이블을 쓰고, 메시지가 암호화되지는 않는다.",
    anchor: "arp-대신-이웃-요청과-이웃-광고",
  },
  {
    id: "ipv6-basics-3",
    post: "ipv6-basics",
    question: "ip -6 route의 기본 경로가 default via fe80::... 으로 잡혀 있다. 이 상태를 바르게 설명한 것은?",
    choices: [
      "RA를 보낸 라우터의 링크 로컬 주소를 다음 홉으로 쓰는 정상 상태다",
      "글로벌 주소를 못 받아서 임시로 잡힌 잘못된 경로다",
      "fe80 주소는 라우팅이 안 되니 이 서버는 인터넷에 못 나간다",
      "DHCPv6 서버가 게이트웨이를 링크 로컬로 잘못 내려 줬다",
    ],
    answer: 0,
    explanation:
      "RA는 라우터의 링크 로컬 주소에서 오고, 호스트는 그 출발지를 기본 경로의 다음 홉으로 쓴다. 프리픽스가 바뀌어도 경로가 흔들리지 않는 장점이 있다. DHCPv6에는 게이트웨이를 알려 주는 옵션이 아예 없다.",
    anchor: "기본-게이트웨이가-링크-로컬-주소인-이유",
  },
  {
    id: "ipv6-basics-4",
    post: "ipv6-basics",
    question: "IPv6 서버에서 ICMPv6를 전부 DROP하는 규칙을 넣었다. 가장 먼저 생길 문제는?",
    choices: [
      "ping만 안 되고 나머지 통신은 그대로다",
      "TCP 체크섬 검사가 꺼져 데이터가 깨진다",
      "IPv4 통신까지 함께 막힌다",
      "이웃 찾기(NS/NA)와 라우터 광고가 막혀 같은 망 통신과 기본 경로가 깨진다",
    ],
    answer: 3,
    explanation:
      "IPv6의 이웃 찾기, 라우터 광고, 경로 MTU 탐색이 모두 ICMPv6 위에서 돈다. 그래서 IPv4에서 ICMP를 막을 때와 달리 ping 정도로 끝나지 않는다. ip6tables 규칙은 IPv4 트래픽에는 영향을 주지 않는다.",
    anchor: "nat가-없으니-방화벽이-문을-지킨다",
  },
  {
    id: "ipv6-basics-5",
    post: "ipv6-basics",
    question: "DB 포트를 iptables로 막았는데 외부 스캔에서 열려 있다는 보고가 왔다. 서버는 듀얼 스택이다. 먼저 볼 것은?",
    choices: [
      "iptables 규칙의 순서가 뒤집혔는지",
      "ip6tables에 같은 포트를 막는 규칙이 있는지",
      "DB가 127.0.0.1에서만 듣는지",
      "스캐너가 UDP로 스캔했는지",
    ],
    answer: 1,
    explanation:
      "iptables는 IPv4만 걸러 낸다. IPv6로 들어오는 연결은 ip6tables(또는 nftables inet)에 따로 규칙이 있어야 막힌다. 듀얼 스택 서버는 NAT 뒤에 숨어 있지도 않으니 IPv6 쪽이 그대로 열려 있기 쉽다.",
    anchor: "nat가-없으니-방화벽이-문을-지킨다",
  },
  {
    id: "ipv6-basics-6",
    post: "ipv6-basics",
    question: "Docker를 설치해 포워딩을 켠 리눅스 호스트가 재부팅 뒤 IPv6 기본 경로를 잃었다. accept_ra는 1이다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "forwarding=1인 인터페이스는 라우터로 취급돼 accept_ra=1이어도 RA를 무시한다",
      "Docker가 링크 로컬 주소를 지웠다",
      "라우터 광고의 hop limit이 255라서 버려졌다",
      "임시 주소(use_tempaddr)가 켜져서 경로가 바뀌었다",
    ],
    answer: 0,
    explanation:
      "리눅스는 포워딩을 켠 인터페이스를 라우터로 보고 RA를 받지 않는다. 이때는 accept_ra=2로 바꿔야 한다. hop limit 255는 오히려 같은 링크에서 왔다는 증거라 받아들이는 조건이다.",
    anchor: "현장에서-ipv6가-원인일-때",
  },
  {
    id: "ipv6-basics-7",
    post: "ipv6-basics",
    question: "IPv6 전용 모바일 망에서 앱이 api.example.com 대신 설정 파일의 IPv4 주소 203.0.113.7로 직접 접속하자 실패했다. 이유는?",
    choices: [
      "NAT64는 TCP를 지원하지 않는다",
      "IPv4 주소는 TLS 인증서를 받을 수 없다",
      "DNS64가 AAAA를 합성할 기회가 없어서 단말이 그 주소로 보낼 IPv6 목적지를 모른다",
      "Happy Eyeballs가 IPv4 시도를 250ms 늦췄다",
    ],
    answer: 2,
    explanation:
      "NAT64 경로는 DNS64가 64:ff9b::/96 주소를 만들어 줄 때 성립한다. IPv4 리터럴로 접속하면 DNS를 거치지 않으니 단말에는 IPv4 경로도, 합성 주소도 없다. 이 경우를 위해 단말 쪽 변환인 464XLAT가 있다.",
    anchor: "ipv4와-섞여-사는-법",
  },
];
