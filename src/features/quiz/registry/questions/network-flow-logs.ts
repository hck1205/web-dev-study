import type { QuizQuestion } from "../types";

export const NETWORK_FLOW_LOGS: QuizQuestion[] = [
  {
    id: "network-flow-logs-1",
    post: "network-flow-logs",
    question: "흐름 로그가 여러 패킷을 하나의 흐름으로 묶을 때 기준으로 쓰는 값은?",
    choices: [
      "출발지·목적지 MAC 주소",
      "출발지·목적지 IP, 출발지·목적지 포트, 프로토콜",
      "TCP 시퀀스 번호",
      "HTTP 요청 경로와 Host 헤더",
    ],
    answer: 1,
    explanation:
      "다섯 값(5-튜플)이 같은 패킷을 한 흐름으로 합쳐 패킷 수와 바이트를 더한다. 그래서 응답 방향은 출발지와 목적지가 뒤집혀 별도의 흐름이 된다. 흐름 로그에는 HTTP 같은 L7 내용이 남지 않는다.",
    anchor: "패킷-대신-대화의-요약을-남긴다",
  },
  {
    id: "network-flow-logs-2",
    post: "network-flow-logs",
    question:
      "호스트의 eth0에서 libpcap으로 흐름을 만드는 softflowd 레코드에 ACCEPT·REJECT 판정이 없는 이유는?",
    choices: [
      "NetFlow v9에는 판정 필드를 넣을 수 없어서",
      "패킷을 방화벽보다 앞에서 보기 때문에 들어온 사실만 알고 방화벽이 무엇을 했는지는 모른다",
      "softflowd가 UDP만 기록해서",
      "판정은 수집기 nfcapd가 붙이기 때문에",
    ],
    answer: 1,
    explanation:
      "libpcap이 보는 지점은 netfilter보다 앞이라, SYN만 있고 답이 없는 흐름은 막혔는지 서버가 꺼졌는지 구분하지 못한다. 판정을 알려면 판정을 내린 쪽의 기록이 필요하다. 클라우드 흐름 로그는 보안 그룹과 NACL을 적용하는 자리에서 만들어서 판정을 붙일 수 있다.",
    anchor: "리눅스에서-흐름-레코드-만들어-보기",
  },
  {
    id: "network-flow-logs-3",
    post: "network-flow-logs",
    question: "conntrack 이벤트로 흐름 로그를 만들면 생기는 한계로 맞는 것은?",
    choices: [
      "방화벽이 첫 패킷을 버린 연결은 항목이 확정되지 않아 기록에 나오지 않는다",
      "바이트 수를 셀 수 없다",
      "UDP 흐름은 기록되지 않는다",
      "한 연결의 양방향이 항상 두 줄로 나뉜다",
    ],
    answer: 0,
    explanation:
      "버려진 SYN은 conntrack 항목이 확정되기 전에 사라져 DESTROY 이벤트가 없다. 그래서 ACCEPT만 남는 기록이 된다. nf_conntrack_acct를 켜면 바이트도 정확히 세고, 한 줄에 양방향이 함께 들어 있다.",
    anchor: "리눅스에서-흐름-레코드-만들어-보기",
  },
  {
    id: "network-flow-logs-4",
    post: "network-flow-logs",
    question:
      "NAT 게이트웨이 처리 요금이 튀었다. NAT 게이트웨이 ENI의 흐름 로그로 원래 보낸 서버를 찾으려면 무엇이 필요한가?",
    choices: [
      "기본 형식의 srcaddr만 있으면 충분하다",
      "action 필드",
      "사용자 지정 형식의 pkt-srcaddr 필드",
      "log-status 필드",
    ],
    answer: 2,
    explanation:
      "NAT를 지나 나간 줄의 srcaddr은 NAT 게이트웨이 자신의 주소다. 변환되기 전 원래 출발지는 pkt-srcaddr에 남으므로, 흐름 로그를 만들 때 이 필드를 넣어 두어야 서버별로 묶을 수 있다. 흐름 로그 형식은 나중에 바꿀 수 없다.",
    anchor: "nat-게이트웨이-뒤에서는-주소가-바뀐다",
  },
  {
    id: "network-flow-logs-5",
    post: "network-flow-logs",
    question: "VPC 흐름 로그에 53번 포트 트래픽이 하나도 없다. 가장 그럴듯한 설명은?",
    choices: [
      "흐름 로그가 UDP를 기록하지 않아서",
      "Amazon 제공 DNS(VPC의 .2 주소)로 가는 질의는 흐름 로그에 기록되지 않아서",
      "DNS가 고장 나서 질의가 나가지 않았기 때문에",
      "집계 간격이 10분이라서",
    ],
    answer: 1,
    explanation:
      "Amazon 제공 DNS, 인스턴스 메타데이터, Time Sync, DHCP 트래픽은 흐름 로그에서 빠진다. 질의 내용이 필요하면 Route 53 Resolver 쿼리 로그를 따로 켠다. 직접 운영하는 DNS 서버로 가는 트래픽은 기록된다.",
    anchor: "vpc-흐름-로그-한-줄-읽기",
  },
  {
    id: "network-flow-logs-6",
    post: "network-flow-logs",
    question:
      "1:10 샘플링으로 만든 흐름 데이터로 답하기 어려운 질문은? (실습에서 흐름 수가 420개에서 228개로 줄었다)",
    choices: [
      "전체 트래픽의 대략적인 바이트 수",
      "대역폭을 가장 많이 쓰는 상대",
      "이 서버가 저 DB에 한 번이라도 붙었는지",
      "시간대별 트래픽의 대략적인 추이",
    ],
    answer: 2,
    explanation:
      "샘플링 비율만큼 곱하면 총량과 큰 흐름은 어림할 수 있지만, 패킷이 몇 개뿐인 짧은 흐름은 통째로 빠지기 쉽다. 그래서 한 번이라도 통신했는지, 스캔 시도가 몇 번이었는지 같은 질문에는 샘플링 없는 기록이 필요하다.",
    anchor: "다-기록하면-비싸고-덜-기록하면-놓친다",
  },
  {
    id: "network-flow-logs-7",
    post: "network-flow-logs",
    question: "흐름 로그만으로 답할 수 없는 질문은?",
    choices: [
      "보안 그룹 규칙을 좁히기 전에 실제로 DB에 붙는 출발지 목록",
      "배포 이후 내부 대역에서 막힌 연결 시도",
      "API 응답이 느린 원인이 재전송인지 서버 처리인지",
      "어느 서버가 AZ 간 전송량을 많이 만드는지",
    ],
    answer: 2,
    explanation:
      "흐름 로그에는 지연, 재전송, URL 같은 정보가 없다. 느린 원인은 호스트 지표, 패킷 캡처, 분산 추적으로 본다. 나머지 셋은 출발지·목적지·포트·판정·바이트를 묶으면 답할 수 있다.",
    anchor: "흐름-로그를-들고-현장에-갈-때",
  },
];
