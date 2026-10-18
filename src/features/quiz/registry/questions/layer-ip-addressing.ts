import type { QuizQuestion } from "../types";

export const LAYER_IP_ADDRESSING: QuizQuestion[] = [
  {
    id: "layer-ip-addressing-1",
    post: "layer-ip-addressing",
    question: "VPN을 붙인 노트북에서 사내 서버 172.17.5.10에 접속이 안 되고, Docker를 끄면 된다. 가장 그럴듯한 원인은?",
    choices: [
      "Docker가 VPN 프로세스를 막는다",
      "docker0의 172.17.0.0/16 경로가 VPN의 172.16.0.0/12보다 더 길게 맞아서 패킷이 브리지로 간다",
      "Docker가 DNS 설정을 바꾼다",
      "172.17.5.10은 사설 IP라 VPN으로 갈 수 없다",
    ],
    answer: 1,
    explanation:
      "목적지가 여러 경로에 맞으면 커널은 더 긴 프리픽스를 고른다. /16이 /12보다 구체적이라 사내 서버로 갈 패킷이 docker0로 들어가 사라진다. ip route get 172.17.5.10을 치면 dev docker0가 보인다.",
    anchor: "대역이-겹치면-길이-사라진다",
  },
  {
    id: "layer-ip-addressing-2",
    post: "layer-ip-addressing",
    question: "203.0.113.77/26이 속한 망의 망 주소와 브로드캐스트 주소는?",
    choices: [
      "203.0.113.0과 203.0.113.255",
      "203.0.113.64와 203.0.113.127",
      "203.0.113.76과 203.0.113.79",
      "203.0.113.77과 203.0.113.140",
    ],
    answer: 1,
    explanation:
      "/26은 마지막 덩어리의 앞 2비트까지가 망 번호다. 77(01001101)과 192(11000000)를 AND하면 64, 호스트 비트 6개를 모두 1로 채우면 127이다. 그래서 .65부터 .126까지 62개를 쓴다.",
    anchor: "서브넷-마스크를-비트로-보기",
  },
  {
    id: "layer-ip-addressing-3",
    post: "layer-ip-addressing",
    question: "서버에 IP를 넣으면서 /24를 써야 할 곳에 /16을 넣었다. 다른 서브넷(192.168.20.5)과 통신할 때 어떤 일이 생기나?",
    choices: [
      "같은 망으로 착각해서 게이트웨이 대신 ARP로 직접 찾다가 실패한다",
      "아무 문제 없다",
      "모든 트래픽이 게이트웨이로 간다",
      "IP 충돌이 즉시 감지된다",
    ],
    answer: 0,
    explanation:
      "프리픽스가 넓어지면 원래 다른 망인 주소까지 직접 연결된 망으로 판단한다. 그래서 게이트웨이로 보내지 않고 ARP로 상대를 찾는데, 브로드캐스트가 닿지 않으니 FAILED로 끝난다.",
    anchor: "같은-망이면-직접-아니면-게이트웨이로",
  },
  {
    id: "layer-ip-addressing-4",
    post: "layer-ip-addressing",
    question: "다음 중 RFC 1918 사설 대역에 속하는 주소는?",
    choices: ["172.32.0.10", "100.64.0.1", "172.31.200.5", "169.254.169.254"],
    answer: 2,
    explanation:
      "172.16.0.0/12는 172.16.0.0부터 172.31.255.255까지라서 172.31.200.5는 사설 대역이고 172.32.x는 아니다. 100.64.0.0/10은 통신사용 공유 주소(CGNAT), 169.254.0.0/16은 링크 로컬로 각각 따로 정해진 대역이다.",
    anchor: "사설-대역과-특수한-주소들",
  },
  {
    id: "layer-ip-addressing-5",
    post: "layer-ip-addressing",
    question: "AWS VPC에서 /24 서브넷을 만들면 인스턴스에 줄 수 있는 주소는 몇 개인가?",
    choices: ["256개", "254개", "251개", "250개"],
    answer: 2,
    explanation:
      "/24는 주소가 256개인데, AWS는 서브넷마다 처음 네 개(망 주소, VPC 라우터, DNS, 예비)와 마지막 한 개(브로드캐스트)를 예약한다. 보통 망에서 빼는 두 개보다 세 개를 더 쓰는 셈이다.",
    anchor: "망-하나에-몇-대를-붙일-수-있나",
  },
  {
    id: "layer-ip-addressing-6",
    post: "layer-ip-addressing",
    question: "IPv6 서브넷을 보통 /64로 나누는 이유는?",
    choices: [
      "라우터가 /64보다 긴 프리픽스를 처리하지 못해서",
      "기기가 뒤 64비트를 스스로 정하는 자동 설정(SLAAC)이 /64를 전제로 하기 때문에",
      "IPv6 주소가 64비트이기 때문에",
      "브로드캐스트 주소를 두기 위해서",
    ],
    answer: 1,
    explanation:
      "IPv6 주소는 128비트이고, SLAAC은 앞 64비트를 망 번호로 받아 뒤 64비트를 기기가 만든다. 주소가 넉넉해서 서브넷 크기를 아낄 필요도 없다. IPv6에는 브로드캐스트가 없다.",
    anchor: "ipv6-주소-읽기",
  },
];
