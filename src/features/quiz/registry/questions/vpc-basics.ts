import type { QuizQuestion } from "../types";

export const VPC_BASICS: QuizQuestion[] = [
  {
    id: "vpc-basics-1",
    post: "vpc-basics",
    question: "공인 IP로 잘 접속되는 EC2 인스턴스에서 ip addr을 쳤더니 사설 IP만 보인다. 왜 그럴까?",
    choices: [
      "공인 IP는 보조 인터페이스에 붙어 있어서 eth0에는 안 보인다",
      "인터넷 게이트웨이가 공인 IP와 사설 IP를 1:1로 바꿔 주고 운영체제는 그 변환을 모른다",
      "보안 그룹이 공인 IP를 숨긴다",
      "DHCP가 아직 공인 IP를 내려주지 않았다",
    ],
    answer: 1,
    explanation:
      "IGW가 들어오는 패킷의 목적지와 나가는 패킷의 출발지를 바꿔 쓰기 때문에 인스턴스의 랜카드에는 사설 IP만 있다. 자기 공인 IP가 필요하면 인스턴스 메타데이터에 물어야 한다.",
    anchor: "공인-ip는-인스턴스-안에-없다",
  },
  {
    id: "vpc-basics-2",
    post: "vpc-basics",
    question: "프라이빗 서브넷의 라우트 테이블에서 기본 경로를 IGW로 바꿨다. 공인 IP가 없는 그 서브넷의 서버에서 apt update는 어떻게 될까?",
    choices: [
      "바로 된다. IGW가 알아서 NAT를 해 준다",
      "DNS만 되고 HTTP는 안 된다",
      "여전히 나가지 못한다. IGW는 공인 IP 짝이 있는 ENI의 패킷만 바꿔 준다",
      "서브넷이 자동으로 퍼블릭으로 바뀌면서 공인 IP가 할당된다",
    ],
    answer: 2,
    explanation:
      "IGW는 공인 IP와 짝지어진 사설 IP만 변환한다. 짝이 없는 패킷은 버려지므로 공인 IP 없는 서버는 NAT 게이트웨이를 거쳐야 나간다.",
    anchor: "공인-ip는-인스턴스-안에-없다",
  },
  {
    id: "vpc-basics-3",
    post: "vpc-basics",
    question: "AWS에서 10.0.1.0/24 서브넷에 인스턴스에 줄 수 있는 주소는 몇 개인가?",
    choices: ["256개", "254개", "251개", "250개"],
    answer: 2,
    explanation:
      "망 주소, VPC 라우터(.1), DNS(.2), 예비(.3), 브로드캐스트까지 다섯 개를 AWS가 예약한다. 일반 망처럼 두 개만 빼서 254개로 계산하면 Pod마다 IP를 쓰는 EKS에서 주소 계획이 어긋난다.",
    anchor: "주소-다섯-개는-처음부터-내-것이-아니다",
  },
  {
    id: "vpc-basics-4",
    post: "vpc-basics",
    question: "두 VPC가 모두 10.0.0.0/16을 쓴다. 이 상태에서 생기는 문제로 맞는 것은?",
    choices: [
      "같은 리전에 만들 수 없다",
      "평소에는 문제없지만 두 VPC를 라우팅으로 이으려 할 때 경로를 둘 수 없다",
      "두 VPC의 인스턴스 IP가 충돌해서 패킷이 섞인다",
      "인터넷 게이트웨이를 하나만 공유해야 한다",
    ],
    answer: 1,
    explanation:
      "VPC는 패킷이 VPC 단위로 캡슐화되어 격리되므로 같은 대역을 써도 섞이지 않는다. 하지만 내 라우트 테이블에서 그 대역은 이미 내 것이라 저쪽으로 가는 경로를 넣을 수 없고, 피어링도 맺어지지 않는다.",
    anchor: "vpc끼리는-같은-대역을-써도-섞이지-않는다",
  },
  {
    id: "vpc-basics-5",
    post: "vpc-basics",
    question: "웹 앱에 SSRF 취약점이 있을 때 IMDSv2가 막아 주는 것은?",
    choices: [
      "공격자가 서버에게 169.254.169.254로 단순 GET을 시켜 IAM 자격 증명을 빼 가는 것",
      "공격자가 SSH로 인스턴스에 들어오는 것",
      "보안 그룹 규칙이 바뀌는 것",
      "DNS 응답이 위조되는 것",
    ],
    answer: 0,
    explanation:
      "IMDSv2는 PUT으로 받은 토큰을 헤더에 실어야 메타데이터를 돌려준다. URL만 바꿀 수 있는 단순한 SSRF로는 PUT과 헤더를 만들기 어려워서 자격 증명 유출을 막는다.",
    anchor: "vpc-안의-dns와-메타데이터",
  },
  {
    id: "vpc-basics-6",
    post: "vpc-basics",
    question: "VPC 안의 서버로 접속했더니 바로 Connection refused가 났다. 가장 먼저 의심할 곳은?",
    choices: [
      "보안 그룹 인바운드 규칙",
      "네트워크 ACL",
      "라우트 테이블",
      "서버에서 그 포트를 듣는 프로세스",
    ],
    answer: 3,
    explanation:
      "refused는 패킷이 서버까지 가서 RST를 받았다는 뜻이다. 보안 그룹과 NACL은 거절 응답 없이 버리므로 timeout으로 나타난다. 그래서 refused면 VPC보다 앱과 포트를 먼저 본다.",
    anchor: "현장에서-vpc-때문에-막히는-순간",
  },
];
