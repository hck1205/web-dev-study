import type { QuizQuestion } from "../types";

export const ROUTE53_ROUTING_POLICIES: QuizQuestion[] = [
  {
    id: "route53-routing-policies-1",
    post: "route53-routing-policies",
    question: "같은 이름으로 퍼블릭·프라이빗 호스팅 영역을 만들었다. www 레코드는 퍼블릭에만 있다. VPC 안의 EC2가 www를 물으면 어떻게 되나?",
    choices: [
      "프라이빗에 없으니 퍼블릭 영역의 값을 대신 답한다",
      "프라이빗 영역이 이기고, 거기 없는 이름이라 NXDOMAIN을 받는다",
      "두 영역의 값을 모두 답한다",
      "VPC 속성에 따라 무작위로 하나를 고른다",
    ],
    answer: 1,
    explanation:
      "VPC 안에서는 프라이빗 영역이 먼저이고, 그 영역에 없는 이름은 퍼블릭으로 넘어가 찾지 않는다. 그래서 밖에서는 열리는 www가 VPC 안에서는 없는 이름이 된다.",
    anchor: "이름을-담는-상자-호스팅-영역",
  },
  {
    id: "route53-routing-policies-2",
    post: "route53-routing-policies",
    question: "example.com 꼭대기를 ALB로 보내려 한다. CNAME 대신 Alias A 레코드를 쓰는 이유로 맞는 것은?",
    choices: [
      "Alias는 TTL을 1초로 줄일 수 있어서",
      "Alias는 ALB의 IP를 고정해 주기 때문에",
      "도메인 꼭대기에는 CNAME을 둘 수 없고, Alias는 A 레코드로 바로 답하기 때문에",
      "CNAME은 헬스 체크를 붙일 수 없어서",
    ],
    answer: 2,
    explanation:
      "꼭대기 이름에는 SOA와 NS가 있어 CNAME을 함께 둘 수 없다. Alias는 Route 53 안에서 대상의 현재 IP를 찾아 A 레코드로 답하므로 이 제약을 피한다. TTL은 대상 자원의 것을 따라 직접 정할 수 없다.",
    anchor: "도메인-꼭대기와-aws-자원을-가리키는-alias",
  },
  {
    id: "route53-routing-policies-3",
    post: "route53-routing-policies",
    question: "지연 시간 정책을 쓰는데 서울 사용자가 미국 리전의 답을 받는다. 가장 그럴듯한 원인은?",
    choices: [
      "사용자의 재귀 리졸버가 미국에 있고 ECS를 보내지 않아서",
      "서울 리전의 가중치가 0이라서",
      "TTL이 너무 길어서",
      "Alias 레코드를 써서",
    ],
    answer: 0,
    explanation:
      "Route 53이 보는 질의자는 사용자가 아니라 리졸버다. 회사 VPN 등으로 리졸버가 미국에 있고 EDNS Client Subnet도 없으면 미국 기준으로 가장 빠른 리전을 답한다.",
    anchor: "같은-이름에-다른-답을-주는-규칙",
  },
  {
    id: "route53-routing-policies-4",
    post: "route53-routing-policies",
    question: "가중치 레코드 둘의 헬스 체크가 모두 비정상이 됐다. Route 53의 동작은?",
    choices: [
      "아무 레코드도 답하지 않는다(NODATA)",
      "SERVFAIL을 돌려준다",
      "가장 최근에 정상이던 레코드만 답한다",
      "전부 정상인 것처럼 보고 원래 가중치대로 답한다",
    ],
    answer: 3,
    explanation:
      "헬스 체크 설정 실수로 서비스가 DNS에서 통째로 사라지지 않도록 전부 비정상이면 전부 정상처럼 다룬다(fail open). 그래서 전부 빨간색인데 트래픽이 흐르는 건 정상 동작이다.",
    anchor: "헬스-체크가-레코드를-빼는-과정",
  },
  {
    id: "route53-routing-policies-5",
    post: "route53-routing-policies",
    question: "헬스 체크 간격 30초, 실패 임계값 3, 레코드 TTL 60초다. 리전이 죽은 뒤 어떤 사용자가 새 답을 받기까지 최악으로 걸리는 시간에 가장 가까운 것은(클라이언트 캐시 제외)?",
    choices: ["약 30초", "약 60초", "약 150초", "약 10분"],
    answer: 2,
    explanation:
      "감지에 30초 × 3 = 약 90초가 들고, 직전에 답을 받아 간 리졸버가 TTL 60초 동안 옛 답을 들고 있다. 여기에 런타임 DNS 캐시와 열린 연결이 더해지면 더 길어진다.",
    anchor: "전환이-늦어지는-시간을-계산한다",
  },
  {
    id: "route53-routing-policies-6",
    post: "route53-routing-policies",
    question: "가중치 5:95로 카나리를 했는데 짧은 구간마다 새 버전 비율이 0%와 30%를 오간다. 왜 그런가?",
    choices: [
      "Route 53이 가중치를 정수 단위로 반올림해서",
      "비율이 질의 단위라서, 큰 리졸버 하나가 받은 답을 TTL 동안 수많은 사용자가 함께 쓰기 때문에",
      "헬스 체크가 새 버전을 계속 빼서",
      "가중치 합이 100이 아니라서",
    ],
    answer: 1,
    explanation:
      "리졸버 하나가 새 버전 IP를 받으면 TTL 동안 그 뒤의 사용자 전부가 새 버전으로 간다. 그래서 DNS 가중치는 리전 이전처럼 느린 이동에 어울리고, 정밀한 카나리는 로드 밸런서 가중치나 기능 플래그로 한다.",
    anchor: "가중치로-카나리를-하면-생기는-일",
  },
  {
    id: "route53-routing-policies-7",
    post: "route53-routing-policies",
    question: "회사 데이터센터 서버가 VPC 프라이빗 호스팅 영역의 이름을 풀어야 한다. 필요한 것은?",
    choices: [
      "아웃바운드 엔드포인트와 전달 규칙",
      "프라이빗 영역을 퍼블릭으로 바꾸기",
      "인바운드 엔드포인트와, 그 IP로 넘기는 회사 DNS의 조건부 전달",
      "회사 DNS가 10.0.0.2로 직접 묻게 하기",
    ],
    answer: 2,
    explanation:
      "VPC Resolver는 VPC 밖에서 접근할 수 없어서 인바운드 엔드포인트라는 문을 낸다. 회사 DNS가 해당 도메인을 엔드포인트 IP로 넘기면 VPC 안에서 묻는 것처럼 답한다. 아웃바운드는 반대 방향, VPC에서 회사 이름을 풀 때 쓴다.",
    anchor: "회사-데이터센터와-vpc의-dns를-잇는다",
  },
];
