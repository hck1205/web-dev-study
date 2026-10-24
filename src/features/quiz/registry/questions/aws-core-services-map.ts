import type { QuizQuestion } from "../types";

export const AWS_CORE_SERVICES_MAP: QuizQuestion[] = [
  {
    id: "aws-core-services-map-1",
    post: "aws-core-services-map",
    question:
      "실습이 끝나 EC2 인스턴스를 모두 중지했는데 2주 뒤 청구 예정 금액이 계속 늘고 있다. 가장 먼저 의심할 것은?",
    choices: [
      "중지한 인스턴스도 컴퓨팅 요금이 절반씩 나간다",
      "S3 버킷이 비어 있어도 버킷 개수만큼 시간 요금이 붙는다",
      "IAM 사용자 수에 따라 월 요금이 붙는다",
      "인스턴스와 상관없이 켜져 있는 NAT 게이트웨이와 공인 IPv4 주소의 시간 요금",
    ],
    answer: 3,
    explanation:
      "NAT 게이트웨이는 켜져 있는 시간과 처리량에, 공인 IPv4 주소는 2024년 2월부터 시간에 요금이 붙는다. 인스턴스를 멈춰도 이들은 그대로 과금된다. 중지한 인스턴스는 컴퓨팅 요금이 멈추고 EBS 저장 요금만 남는다.",
    anchor: "첫-달-청구서에서-돈이-새는-곳",
  },
  {
    id: "aws-core-services-map-2",
    post: "aws-core-services-map",
    question:
      "프라이빗 서브넷의 EC2가 S3에 하루 수백 GB를 올린다. NAT 게이트웨이 처리 요금을 없애는 가장 간단한 방법은?",
    choices: [
      "S3 게이트웨이 엔드포인트를 만들고 프라이빗 서브넷 라우트 테이블에 연결한다",
      "EC2를 더 큰 인스턴스 타입으로 바꾼다",
      "NAT 게이트웨이를 AZ마다 하나씩 더 만든다",
      "S3 버킷을 다른 리전으로 옮긴다",
    ],
    answer: 0,
    explanation:
      "S3와 DynamoDB는 무료 게이트웨이 엔드포인트를 지원해서, 라우트 테이블에 연결하면 같은 요청이 NAT를 거치지 않는다. NAT를 늘리면 시간 요금만 늘고, 리전을 옮기면 리전 간 전송 요금이 더 붙는다.",
    anchor: "여섯-가지가-붙는-기본-구성",
  },
  {
    id: "aws-core-services-map-3",
    post: "aws-core-services-map",
    question: "루트 사용자를 다루는 방법으로 글의 권장과 맞는 것은?",
    choices: [
      "루트 액세스 키를 CI에 넣어 두면 권한 문제를 피할 수 있다",
      "MFA를 걸고 액세스 키는 만들지 않으며, 일상 작업은 별도 신원으로 한다",
      "루트 비밀번호를 팀원과 공유해 한 계정으로 관리한다",
      "루트는 IAM 정책으로 권한을 줄여 두면 매일 써도 안전하다",
    ],
    answer: 1,
    explanation:
      "루트는 어떤 IAM 정책으로도 제한할 수 없는 만능 권한이라, 새면 피해가 계정 전체에 미친다. MFA로 잠그고 루트 키를 만들지 않으며, 사람은 IAM Identity Center나 MFA를 건 IAM 사용자로, 서버는 역할로 일한다.",
    anchor: "가입한-이메일은-매일-쓰는-열쇠가-아니다",
  },
  {
    id: "aws-core-services-map-4",
    post: "aws-core-services-map",
    question:
      "다른 계정과 '같은 가용 영역'에 리소스를 맞춰 둬야 한다. 무엇을 기준으로 맞춰야 하나?",
    choices: [
      "ap-northeast-2a 같은 AZ 이름",
      "VPC CIDR 대역",
      "apne2-az1 같은 AZ ID",
      "서브넷 이름 태그",
    ],
    answer: 2,
    explanation:
      "AZ 이름(2a, 2b…)은 계정마다 다른 실제 AZ에 붙을 수 있다. 계정 사이에서 물리적으로 같은 AZ를 가리키려면 AZ ID를 쓴다. CIDR과 태그는 AZ 위치와 상관없다.",
    anchor: "리전과-가용-영역은-어디에-짓느냐다",
  },
  {
    id: "aws-core-services-map-5",
    post: "aws-core-services-map",
    question:
      "실습용 RDS 인스턴스를 삭제하지 않고 '중지'만 해 두었다. 몇 주 뒤 무슨 일이 생길 수 있나?",
    choices: [
      "중지한 지 7일이 지나면 RDS가 저절로 다시 켜져 요금이 다시 나간다",
      "중지한 RDS는 30일 뒤 자동으로 삭제된다",
      "중지 상태에서는 저장 요금도 나가지 않으니 아무 일도 없다",
      "자동으로 Multi-AZ로 바뀌어 요금이 두 배가 된다",
    ],
    answer: 0,
    explanation:
      "RDS는 중지 상태를 최대 7일까지만 유지하고 그 뒤 자동으로 시작한다. 중지 중에도 스토리지 요금은 나간다. 오래 안 쓸 DB는 스냅샷을 남기고 삭제하는 편이 맞다.",
    anchor: "첫-달-청구서에서-돈이-새는-곳",
  },
  {
    id: "aws-core-services-map-6",
    post: "aws-core-services-map",
    question:
      "NAT 게이트웨이처럼 일정한 속도로 새는 비용을 가장 일찍 잡을 수 있는 예산 알림 설정은?",
    choices: [
      "실제 요금(ACTUAL) 100% 알림 하나",
      "알림 없이 매달 청구서를 확인한다",
      "CloudTrail 로그를 매일 읽는다",
      "예측 요금(FORECASTED) 알림을 함께 건다",
    ],
    answer: 3,
    explanation:
      "예측 알림은 지금 속도로 가면 이번 달 예산을 넘는다는 것을 미리 알려 주므로, 일정하게 쌓이는 시간 요금을 월초에 잡는다. 실제 요금 100% 알림은 이미 다 쓴 뒤에 온다. CloudTrail은 API 기록이지 비용 알림이 아니다.",
    anchor: "돈이-나가기-전에-알람부터",
  },
  {
    id: "aws-core-services-map-7",
    post: "aws-core-services-map",
    question: "EC2에서 RDS로 접속하면 connection refused가 아니라 타임아웃이 난다. 먼저 볼 곳은?",
    choices: [
      "DB 비밀번호",
      "RDS 보안 그룹이 EC2 보안 그룹에서 오는 DB 포트를 허용하는지",
      "S3 버킷 정책",
      "IAM 사용자의 MFA 설정",
    ],
    answer: 1,
    explanation:
      "타임아웃은 패킷이 상대에 닿지 못했거나 버려졌다는 신호라 보안 그룹이나 라우팅 문제인 경우가 대부분이다. 비밀번호가 틀리면 연결은 되고 인증 오류가 난다. S3 정책과 MFA는 DB 네트워크 접속과 상관없다.",
    anchor: "현장에서-처음-막히는-곳",
  },
];
