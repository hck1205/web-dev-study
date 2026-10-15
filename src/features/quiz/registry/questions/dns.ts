import type { QuizQuestion } from "../types";

export const DNS: QuizQuestion[] = [
  {
    id: "dns-1",
    post: "dns",
    question: "재귀 리졸버가 루트 서버에 www.example.com을 물었을 때 루트 서버가 돌려주는 것은?",
    choices: [
      "www.example.com의 IP 주소",
      ".com을 맡은 네임서버 목록 (위임)",
      "example.com의 SOA 레코드",
      "다른 루트 서버의 주소",
    ],
    answer: 1,
    explanation:
      "루트는 아래 층이 어디 있는지만 안다. .com 네임서버 목록과 그 IP를 위임으로 돌려주면, 리졸버가 그 서버로 직접 다시 묻는 반복 질의를 이어 간다.",
    anchor: "이름-하나를-찾기까지",
  },
  {
    id: "dns-2",
    post: "dns",
    question: "A 레코드의 IP를 바꾼 뒤 일부 사용자만 한동안 옛 IP로 접속하는 가장 직접적인 이유는?",
    choices: [
      "권한 있는 네임서버가 변경을 다른 서버에 순서대로 복사하는 중이라서",
      "루트 서버가 하루에 한 번만 갱신되어서",
      "사용자 브라우저가 HTTP 캐시에 IP를 저장해서",
      "리졸버들이 캐시한 옛 답이 각자의 TTL이 끝날 때까지 남아 있어서",
    ],
    answer: 3,
    explanation:
      "DNS에는 변경을 밀어 주는 장치가 없다. 권한 있는 서버는 즉시 새 답을 주지만, 리졸버와 OS·브라우저 캐시는 옛 답을 TTL 동안 들고 있다가 만료된 뒤에야 다시 묻는다.",
    anchor: "전파된다는-말의-오해",
  },
  {
    id: "dns-3",
    post: "dns",
    question: "새 서브도메인을 만들기 전에 한 번 조회했더니, 만든 뒤에도 한동안 NXDOMAIN이 나온다. 이 '없다'는 답이 캐시되는 시간을 정하는 것은?",
    choices: [
      "존의 SOA 레코드 (SOA의 TTL과 MINIMUM 중 작은 값)",
      "새로 만든 레코드의 TTL",
      "부모 존 NS 레코드의 TTL",
      "리졸버가 정한 고정값 48시간",
    ],
    answer: 0,
    explanation:
      "리졸버는 NXDOMAIN 같은 부정 응답도 캐시한다. 그 기간은 응답에 함께 오는 SOA 레코드의 TTL과 MINIMUM 필드 중 작은 값으로 정해진다.",
    anchor: "캐시와-ttl이-만드는-시차",
  },
  {
    id: "dns-4",
    post: "dns",
    question: "example.com 자체(도메인 꼭대기)에 CNAME을 걸 수 없는 이유는?",
    choices: [
      "CNAME은 IPv6를 지원하지 않아서",
      "CNAME은 서브도메인에만 쓰도록 TLD가 막아 두어서",
      "꼭대기에는 SOA와 NS가 반드시 있는데, CNAME이 있는 이름에는 다른 레코드가 함께 있을 수 없어서",
      "CNAME 응답은 UDP 512바이트를 넘어서",
    ],
    answer: 2,
    explanation:
      "CNAME은 '이 이름은 저 이름의 별명'이라는 뜻이라 같은 이름에 다른 레코드를 둘 수 없다. 꼭대기에는 SOA와 NS가 필수라 충돌하고, 그래서 Alias나 CNAME 평탄화 같은 기능이 생겼다.",
    anchor: "도메인-꼭대기에는-cname을-걸-수-없다",
  },
  {
    id: "dns-5",
    post: "dns",
    question: "방화벽에서 TCP 53번을 막았을 때 생길 수 있는 문제는?",
    choices: [
      "모든 DNS 조회가 즉시 실패한다",
      "응답이 커서 TC 플래그가 켜진 조회(DNSSEC 등)만 실패한다",
      "DoH 조회만 실패한다",
      "아무 문제 없다. DNS는 UDP만 쓴다",
    ],
    answer: 1,
    explanation:
      "평소 질의는 UDP로 끝나지만, 응답이 UDP 한도를 넘으면 서버가 TC 플래그를 켜고 클라이언트는 TCP로 다시 묻는다. TCP 53을 막으면 큰 응답에서만 실패하는 찾기 어려운 장애가 된다.",
    anchor: "udp로-묻다가-tcp로-넘어갈-때",
  },
  {
    id: "dns-6",
    post: "dns",
    question: "DoH와 DNSSEC에 대한 설명으로 옳은 것은?",
    choices: [
      "DNSSEC은 질의 내용을 암호화해 엿보기를 막는다",
      "DoH를 쓰면 권한 있는 서버의 답이 위조되지 않았음이 보장된다",
      "둘은 같은 기능이라 하나만 쓰면 된다",
      "DoH는 나와 리졸버 사이 구간을 암호화하고, DNSSEC은 답에 서명을 붙여 위조 여부를 검증한다",
    ],
    answer: 3,
    explanation:
      "DoH는 통로를 암호화할 뿐 리졸버가 받은 데이터의 진위는 보장하지 않는다. DNSSEC은 서명으로 데이터가 진짜인지 확인하지만 암호화는 하지 않는다. 둘은 서로 다른 문제를 푼다.",
    anchor: "답이-진짜인지-확인하는-dnssec",
  },
  {
    id: "dns-7",
    post: "dns",
    question: "dig로는 새 IP가 나오는데 브라우저는 옛 서버로 간다. 가능한 설명으로 가장 알맞은 것은?",
    choices: [
      "dig는 hosts 파일과 OS·브라우저 캐시를 거치지 않고 DNS 서버에 직접 묻기 때문이다",
      "dig는 항상 루트 서버부터 묻기 때문이다",
      "브라우저는 IPv6만 쓰기 때문이다",
      "dig 결과의 TTL이 0이기 때문이다",
    ],
    answer: 0,
    explanation:
      "dig와 nslookup은 DNS 서버에 직접 질의하는 도구라 hosts 파일과 OS 캐시를 보지 않는다. 앱이 실제로 받는 답은 getent hosts 같은 OS 해석 경로로 확인한다.",
    anchor: "dig로-직접-확인하기",
  },
];
