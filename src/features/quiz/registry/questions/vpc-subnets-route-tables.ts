import type { QuizQuestion } from "../types";

export const VPC_SUBNETS_ROUTE_TABLES: QuizQuestion[] = [
  {
    id: "vpc-subnets-route-tables-1",
    post: "vpc-subnets-route-tables",
    question: "새로 만든 서브넷에 공인 IP를 붙인 서버를 띄웠는데 밖에서 접속이 안 된다. 서브넷을 퍼블릭 라우트 테이블에 연결하지 않았다면 무슨 일이 일어난 걸까?",
    choices: [
      "서브넷이 어떤 라우트 테이블도 쓰지 않아 모든 패킷이 버려진다",
      "서브넷이 메인 라우트 테이블을 따르는데, 거기에 IGW 경로가 없다",
      "공인 IP가 자동으로 해제된다",
      "AWS가 가장 최근에 만든 라우트 테이블을 자동으로 연결한다",
    ],
    answer: 1,
    explanation:
      "명시적으로 연결하지 않은 서브넷은 메인 라우트 테이블을 쓴다. 메인 테이블에 IGW 경로가 없으면 응답이 IGW로 가지 못해 공인 IP가 있어도 밖에서 열리지 않는다.",
    anchor: "서브넷의-성격은-라우트-테이블이-정한다",
  },
  {
    id: "vpc-subnets-route-tables-2",
    post: "vpc-subnets-route-tables",
    question: "라우트 테이블에 0.0.0.0/0 → nat, 10.0.0.0/16 → local, 10.1.0.0/16 → pcx가 있다. 목적지 10.1.3.4는 어디로 가나?",
    choices: [
      "nat. 기본 경로가 테이블 맨 위에 있으니까",
      "local. VPC 경로가 항상 우선이니까",
      "pcx. 맞는 줄 중 프리픽스가 가장 길다",
      "버려진다. 두 줄이 동시에 맞으면 충돌이다",
    ],
    answer: 2,
    explanation:
      "10.1.3.4는 0.0.0.0/0과 10.1.0.0/16에 모두 속하고, 더 긴 /16이 이긴다. local은 10.0.0.0/16이라 애초에 맞지 않는다. 적힌 순서는 경로 선택과 상관없다.",
    anchor: "여러-줄이-맞으면-가장-구체적인-줄이-이긴다",
  },
  {
    id: "vpc-subnets-route-tables-3",
    post: "vpc-subnets-route-tables",
    question: "NAT 게이트웨이를 지운 뒤 그 AZ의 서버에서 VPC 안 DB는 되는데 외부 API만 timeout이 난다. 라우트 테이블에서 무엇이 보일까?",
    choices: [
      "기본 경로의 State가 blackhole",
      "local 경로가 사라짐",
      "기본 경로의 Origin이 EnableVgwRoutePropagation",
      "라우트 테이블 자체가 삭제됨",
    ],
    answer: 0,
    explanation:
      "대상을 지워도 경로는 남고 State가 blackhole로 바뀐다. 그 경로로 가는 패킷은 버려지지만 VPC 안은 local 경로라 영향이 없어서 안은 되고 밖만 안 되는 증상이 된다.",
    anchor: "가리키던-대상이-사라지면-blackhole이-된다",
  },
  {
    id: "vpc-subnets-route-tables-4",
    post: "vpc-subnets-route-tables",
    question: "비용을 줄이려고 NAT 게이트웨이 하나를 모든 AZ가 같이 쓰게 했다. 이때 생기는 위험으로 가장 알맞은 것은?",
    choices: [
      "NAT 게이트웨이의 공인 IP가 매일 바뀐다",
      "NAT가 있는 AZ가 장애를 내면 모든 AZ의 외부 호출이 멈추고, 평소에는 AZ 간 전송 요금이 붙는다",
      "보안 그룹 규칙이 AZ마다 다르게 적용된다",
      "VPC 안의 서브넷끼리 통신이 끊긴다",
    ],
    answer: 1,
    explanation:
      "NAT 게이트웨이는 AZ 하나에만 산다. 그 AZ가 멈추면 그 NAT를 가리키는 모든 테이블이 나갈 길을 잃는다. 다른 AZ에서 넘어오는 트래픽에는 AZ 간 전송 요금도 붙는다.",
    anchor: "nat-게이트웨이는-한-az에만-산다",
  },
  {
    id: "vpc-subnets-route-tables-5",
    post: "vpc-subnets-route-tables",
    question: "프라이빗 서브넷의 기본 경로를 NAT 대신 IGW로 바꿨다. 공인 IP가 없는 서버는 어떻게 될까?",
    choices: [
      "인터넷에 바로 나간다",
      "NAT보다 빨라진다",
      "IGW에서 버려져 timeout이 난다",
      "IGW가 자동으로 공인 IP를 붙여 준다",
    ],
    answer: 2,
    explanation:
      "IGW는 공인 IP 짝이 있는 ENI의 트래픽만 바꿔 내보낸다. 실습에서도 짝이 없는 10.0.2.10의 SYN은 IGW의 DROP 규칙 카운터만 올리고 사라졌다.",
    anchor: "프라이빗-테이블을-igw로-바꾸면",
  },
  {
    id: "vpc-subnets-route-tables-6",
    post: "vpc-subnets-route-tables",
    question: "NAT 게이트웨이 뒤의 서버가 오래 쉬던 DB 연결을 다시 쓰자 connection reset이 난다. 가장 그럴듯한 원인과 대책은?",
    choices: [
      "NACL이 RST를 보낸다. NACL 규칙을 지운다",
      "350초 유휴 타임아웃으로 NAT가 연결을 잊었다. keepalive를 그보다 짧게 잡는다",
      "목적지별 55,000개 한도에 걸렸다. 서버를 늘린다",
      "라우트 테이블이 blackhole이 됐다. 경로를 다시 넣는다",
    ],
    answer: 1,
    explanation:
      "NAT 게이트웨이는 350초 동안 패킷이 없는 연결을 표에서 지우고, 그 뒤 들어오는 패킷에 RST를 돌려준다. TCP keepalive를 350초보다 짧게 두면 연결이 표에서 지워지지 않는다. 55,000개 한도는 새 연결이 실패하는 증상이다.",
    anchor: "nat-게이트웨이에서-터지는-것들",
  },
];
