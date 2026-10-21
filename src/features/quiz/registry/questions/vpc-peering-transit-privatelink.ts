import type { QuizQuestion } from "../types";

export const VPC_PEERING_TRANSIT_PRIVATELINK: QuizQuestion[] = [
  {
    id: "vpc-peering-transit-privatelink-1",
    post: "vpc-peering-transit-privatelink",
    question: "A–B, B–C 피어링이 있다. A의 라우트 테이블에 C 대역을 A–B 피어링으로 넣었을 때 A에서 C로 보낸 패킷은?",
    choices: [
      "B가 넘겨 주어 C에 닿는다",
      "B에서 넘어가지 못하고 조용히 사라진다",
      "AWS가 A–C 피어링을 자동으로 만든다",
      "B의 NAT 게이트웨이를 거쳐 C에 닿는다",
    ],
    answer: 1,
    explanation:
      "피어링은 전이되지 않아서 피어링으로 들어온 패킷은 그 VPC 안의 주소에만 닿는다. 경로는 넣을 수 있지만 B를 넘지 못하고 사라진다. 상대 VPC의 NAT나 IGW를 빌리는 엣지 간 라우팅도 안 된다.",
    anchor: "친구의-친구는-친구가-아니다",
  },
  {
    id: "vpc-peering-transit-privatelink-2",
    post: "vpc-peering-transit-privatelink",
    question: "피어링을 수락하고 A 쪽 라우트 테이블에만 B 대역을 넣었다. A에서 B 서버로 접속하면 어떻게 될까?",
    choices: [
      "바로 연결된다. 경로는 한쪽만 있으면 된다",
      "Connection refused가 난다",
      "요청은 B에 닿지만 응답이 돌아올 경로가 없어 timeout이 난다",
      "피어링이 pending-acceptance로 돌아간다",
    ],
    answer: 2,
    explanation:
      "B의 테이블에 A 대역 경로가 없으면 응답은 기본 경로를 타고 엉뚱한 곳으로 빠진다. 요청은 갔는데 응답이 오지 않으니 timeout이다. 경로는 항상 양쪽에 넣는다.",
    anchor: "다리-하나에-vpc-둘-피어링",
  },
  {
    id: "vpc-peering-transit-privatelink-3",
    post: "vpc-peering-transit-privatelink",
    question: "인수한 회사의 VPC가 우리 VPC와 똑같이 10.0.0.0/16을 쓴다. 상대가 우리 결제 API 하나만 쓰면 된다면 무엇이 맞나?",
    choices: [
      "VPC 피어링을 맺는다",
      "Transit Gateway에 두 VPC를 붙인다",
      "PrivateLink로 결제 API 앞 NLB를 엔드포인트 서비스로 내놓는다",
      "두 VPC의 local 경로를 지운다",
    ],
    answer: 2,
    explanation:
      "피어링과 TGW는 라우팅이라 겹치는 대역 사이를 이을 수 없다. PrivateLink는 소비자 서브넷의 ENI로 연결을 대신 이어 주므로 대역이 겹쳐도 되고 노출 범위도 서비스 하나로 좁다.",
    anchor: "망을-잇지-않고-서비스-하나만-내놓기-privatelink",
  },
  {
    id: "vpc-peering-transit-privatelink-4",
    post: "vpc-peering-transit-privatelink",
    question: "Transit Gateway에서 prod와 dev는 shared에만 닿고 서로는 못 닿게 하려면?",
    choices: [
      "prod와 dev VPC의 보안 그룹을 모두 막는다",
      "TGW 라우트 테이블을 나눠, prod와 dev가 보는 테이블에는 shared 대역만 전파한다",
      "TGW를 두 개 만들어 각각 붙인다",
      "prod와 dev 사이에 피어링을 맺고 막는다",
    ],
    answer: 1,
    explanation:
      "attachment마다 어느 TGW 테이블을 볼지(연결)와 어느 테이블에 대역을 적을지(전파)를 따로 정할 수 있다. prod 테이블에 dev 대역이 없으면 TGW가 그 패킷을 버린다.",
    anchor: "vpc가-많아지면-다리-대신-허브-transit-gateway",
  },
  {
    id: "vpc-peering-transit-privatelink-5",
    post: "vpc-peering-transit-privatelink",
    question: "PrivateLink로 들어온 요청에서 제공자 서버 로그에 찍히는 출발지 IP는?",
    choices: [
      "소비자 서버의 사설 IP",
      "소비자 엔드포인트 ENI의 IP",
      "제공자 NLB의 사설 IP",
      "소비자 NAT 게이트웨이의 공인 IP",
    ],
    answer: 2,
    explanation:
      "실습에서도 제공자 서버 로그에는 NLB 주소 10.0.3.20이 찍혔다. 소비자 정보가 필요하면 NLB에서 프록시 프로토콜 v2를 켜고 엔드포인트 ID를 읽는다.",
    anchor: "망을-잇지-않고-서비스-하나만-내놓기-privatelink",
  },
  {
    id: "vpc-peering-transit-privatelink-6",
    post: "vpc-peering-transit-privatelink",
    question: "STS 인터페이스 엔드포인트를 만들었는데 STS 호출이 여전히 NAT 게이트웨이로 나간다. 먼저 볼 것은?",
    choices: [
      "엔드포인트 사설 DNS와 VPC의 DNS 속성 두 개가 켜져 있는지",
      "NAT 게이트웨이의 유휴 타임아웃",
      "TGW attachment의 어플라이언스 모드",
      "피어링 할당량",
    ],
    answer: 0,
    explanation:
      "사설 DNS가 꺼져 있으면 서비스 이름이 공인 IP로 풀려 기본 경로인 NAT로 나간다. 엔드포인트의 사설 DNS와 VPC의 enableDnsSupport, enableDnsHostnames를 모두 켜야 이름이 엔드포인트 ENI IP로 풀린다.",
    anchor: "망을-잇지-않고-서비스-하나만-내놓기-privatelink",
  },
];
