import type { QuizQuestion } from "../types";

export const NETWORKING_ESSENTIALS_MAP: QuizQuestion[] = [
  {
    id: "networking-essentials-map-1",
    post: "networking-essentials-map",
    question: "노트북이 다른 망에 있는 서버로 처음 패킷을 보낼 때 ARP로 MAC을 묻는 대상은?",
    choices: [
      "서버",
      "DNS 서버",
      "기본 게이트웨이(공유기)",
      "DHCP 서버",
    ],
    answer: 2,
    explanation:
      "서브넷을 보고 목적지가 다른 망이면 다음 칸은 게이트웨이다. 그래서 서버가 아니라 게이트웨이의 MAC을 묻고, IP 목적지는 서버 그대로 둔다.",
    anchor: "같은-망-안의-한-칸",
  },
  {
    id: "networking-essentials-map-2",
    post: "networking-essentials-map",
    question: "집 공유기를 지나 인터넷 라우터 하나를 더 거쳐 서버에 닿은 패킷에서, 노트북이 보낸 것과 달라진 것을 모두 고르면?",
    choices: [
      "MAC 주소만",
      "MAC 주소, TTL, 출발지 IP와 포트",
      "목적지 IP와 포트",
      "아무것도 바뀌지 않는다",
    ],
    answer: 1,
    explanation:
      "MAC은 구간마다 새로 쓰이고 TTL은 라우터마다 줄어든다. 공유기는 NAT로 출발지 IP와 포트까지 공인 주소로 바꾼다. 목적지 IP와 포트는 그대로다.",
    anchor: "망을-건너는-일",
  },
  {
    id: "networking-essentials-map-3",
    post: "networking-essentials-map",
    question: "Wi-Fi에 붙었는데 IP가 169.254.x.x로 잡혔다. 열다섯 개념 중 어디서 문제가 났나?",
    choices: [
      "DHCP: 주소를 빌려주는 대답을 받지 못했다",
      "DNS: 이름을 풀지 못했다",
      "NAT: 공인 주소로 바꾸지 못했다",
      "TCP: 연결을 맺지 못했다",
    ],
    answer: 0,
    explanation:
      "DHCP 대답이 없으면 운영체제가 링크 로컬 대역에서 스스로 주소를 붙인다. DNS나 NAT, TCP는 주소를 받은 다음 단계라 이 증상과는 순서가 맞지 않는다.",
    anchor: "망에-들어서는-순간",
  },
  {
    id: "networking-essentials-map-4",
    post: "networking-essentials-map",
    question: "포트 22로 접속하자 곧바로 Connection refused가 나왔다. 가장 알맞은 해석은?",
    choices: [
      "중간 방화벽이 패킷을 DROP해서 버렸다",
      "DNS가 잘못된 IP를 알려 줬다",
      "경로가 없어서 패킷이 사라졌다",
      "서버까지는 닿았고, 그 포트를 듣는 프로그램이 없거나 방화벽이 REJECT로 거절했다",
    ],
    answer: 3,
    explanation:
      "바로 거절이 돌아왔다면 누군가 RST나 ICMP 오류를 보낸 것이다. DROP이나 경로 문제라면 답이 없어 타임아웃까지 기다리게 된다.",
    anchor: "문-앞의-검문",
  },
  {
    id: "networking-essentials-map-5",
    post: "networking-essentials-map",
    question: "실시간 화상 통화의 음성 데이터에 TCP보다 UDP를 주로 쓰는 이유는?",
    choices: [
      "UDP가 암호화를 기본으로 제공해서",
      "늦게 도착한 음성은 쓸모가 없어서, 재전송을 기다리는 것보다 버리고 다음 것을 쓰는 편이 나아서",
      "UDP 헤더가 더 커서 정보를 많이 담을 수 있어서",
      "UDP만 NAT를 통과할 수 있어서",
    ],
    answer: 1,
    explanation:
      "TCP는 잃어버린 조각을 다시 받을 때까지 뒤의 데이터를 넘기지 않아 지연이 생긴다. 실시간 음성은 늦은 데이터가 의미가 없으니 보장을 포기하고 UDP를 쓴다. UDP 헤더는 8바이트로 오히려 작다.",
    anchor: "프로그램까지-찾아가기",
  },
  {
    id: "networking-essentials-map-6",
    post: "networking-essentials-map",
    question: "카페 Wi-Fi에서 회사 VPN을 켜고 인트라넷에 접속했다. 카페 공유기가 볼 수 있는 것은?",
    choices: [
      "인트라넷 서버의 사설 IP와 요청한 URL",
      "노트북의 VPN 주소 10.9.0.5와 HTTP 헤더",
      "VPN 게이트웨이로 가는 UDP 패킷과 그 크기",
      "아무것도 볼 수 없다",
    ],
    answer: 2,
    explanation:
      "VPN은 원래 패킷을 통째로 암호화해 새 헤더로 다시 싼다. 카페 공유기와 인터넷 라우터는 바깥 헤더, 곧 VPN 게이트웨이로 가는 UDP 패킷과 그 크기만 본다.",
    anchor: "내용을-지키고-주고받기",
  },
];
