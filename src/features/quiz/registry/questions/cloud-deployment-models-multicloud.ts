import type { QuizQuestion } from "../types";

export const CLOUD_DEPLOYMENT_MODELS_MULTICLOUD: QuizQuestion[] = [
  {
    id: "cloud-deployment-models-multicloud-1",
    post: "cloud-deployment-models-multicloud",
    question: "사내 데이터센터와 AWS 계정을 둘 다 쓰지만 서로 네트워크도 계정도 이어져 있지 않다. 이 상태를 하이브리드 클라우드라고 부르기 어려운 이유는?",
    choices: [
      "하이브리드는 퍼블릭 클라우드 두 곳을 써야 하기 때문이다",
      "하이브리드의 핵심은 둘을 쓰는 것이 아니라 네트워크와 신원으로 이어 한 시스템처럼 쓰는 것이기 때문이다",
      "사내 데이터센터는 클라우드가 아니기 때문이다",
      "AWS는 하이브리드를 지원하지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "하이브리드는 사내와 퍼블릭 클라우드가 연결돼 함께 동작하는 구성이다. 서로 떨어져 따로 도는 두 환경은 그냥 두 시스템이다. 퍼블릭 사업자를 둘 이상 쓰는 것은 멀티 클라우드다.",
    anchor: "누가-하드웨어를-갖고-누가-운영하나",
  },
  {
    id: "cloud-deployment-models-multicloud-2",
    post: "cloud-deployment-models-multicloud",
    question: "1년 전 기본 대역으로 만든 VPC를 사내망과 Direct Connect로 이으려는데 라우팅이 되지 않는다. 가장 흔한 원인은?",
    choices: [
      "Direct Connect는 BGP를 쓰지 않는다",
      "VPN 터널이 하나뿐이다",
      "VPC와 사내망의 IP 대역이 겹쳐 어느 쪽으로 보낼지 정할 수 없다",
      "보안 그룹이 ICMP를 막았다",
    ],
    answer: 2,
    explanation:
      "대역이 겹치면 라우팅 테이블이 목적지를 구분하지 못한다. 고치려면 NAT로 우회하거나 VPC를 새로 만들어 옮겨야 하니, 하이브리드 가능성이 있으면 처음부터 회사 전체에서 대역을 나눠 쓴다.",
    anchor: "하이브리드에서-실제로-어려운-것-길",
  },
  {
    id: "cloud-deployment-models-multicloud-3",
    post: "cloud-deployment-models-multicloud",
    question: "클라우드의 앱이 사내 DB를 전용선(왕복 8ms) 너머로 읽는다. 화면 하나가 쿼리 50개를 차례로 날리면 네트워크만으로 늘어나는 시간은?",
    choices: ["8ms", "50ms", "약 160ms", "400ms"],
    answer: 3,
    explanation:
      "차례로 날리는 쿼리마다 왕복이 붙으니 50 × 8ms = 400ms다. 그래서 하이브리드에서는 자주 대화하는 앱과 데이터를 같은 쪽에 두고, 경계는 API로 나눈다.",
    anchor: "하이브리드에서-어려운-것-신원과-이중-운영",
  },
  {
    id: "cloud-deployment-models-multicloud-4",
    post: "cloud-deployment-models-multicloud",
    question: "Terraform으로 인프라를 관리하면 AWS에서 GCP로 옮기기 쉬워진다는 말에 대해 맞는 설명은?",
    choices: [
      "같은 도구와 작업 흐름은 유지되지만, 리소스 정의는 사업자마다 달라 다시 써야 한다",
      "같은 코드가 provider만 바꾸면 그대로 돈다",
      "Terraform은 한 사업자만 지원한다",
      "Terraform을 쓰면 데이터 송신 요금이 면제된다",
    ],
    answer: 0,
    explanation:
      "Terraform은 여러 사업자를 같은 언어로 다루게 해 줄 뿐, VPC·IAM·관리형 서비스의 리소스 모델은 사업자마다 다르다. 이식성은 도구보다 무엇을 쓰느냐(표준 인터페이스)에서 나온다.",
    anchor: "벤더-종속은-어디서-생기나",
  },
  {
    id: "cloud-deployment-models-multicloud-5",
    post: "cloud-deployment-models-multicloud",
    question: "99.95% 클라우드 두 곳에 전환 구성을 했는데 전환 성공률이 50%이고, 두 쪽이 99.95%짜리 DNS를 함께 쓴다. 클라우드 하나만 쓸 때와 비교하면?",
    choices: [
      "중단 시간이 거의 0으로 줄어든다",
      "클라우드 하나일 때와 정확히 같다",
      "공통 의존과 낮은 전환 성공률 때문에 오히려 월 중단 시간이 늘어난다",
      "중단 시간이 절반으로 준다",
    ],
    answer: 2,
    explanation:
      "계산하면 월 21.6분이던 중단이 32.4분으로 늘어난다. 공통 의존이 하나 더 생겼고 전환이 자주 실패하기 때문이다. 멀티 클라우드는 전환 훈련과 공통 의존 제거가 있어야 효과가 난다.",
    anchor: "가용성은-숫자로-따진다",
  },
  {
    id: "cloud-deployment-models-multicloud-6",
    post: "cloud-deployment-models-multicloud",
    question: "사내 서버의 배치 작업이 S3에 파일을 올려야 한다. 장기 액세스 키를 서버에 심는 대신 쓸 수 있는 방법은?",
    choices: [
      "버킷을 퍼블릭으로 연다",
      "IAM Roles Anywhere로 사내 PKI 인증서를 제시해 임시 자격 증명을 받는다",
      "루트 계정 키를 환경 변수로 넣는다",
      "VPN을 연결하면 자격 증명이 필요 없다",
    ],
    answer: 1,
    explanation:
      "IAM Roles Anywhere는 X.509 인증서로 역할을 빌려 짧게 사는 자격 증명을 준다. 네트워크를 이어도 S3 API 호출에는 여전히 자격 증명이 필요하고, 장기 키는 유출 사고의 흔한 원인이다.",
    anchor: "하이브리드에서-어려운-것-신원과-이중-운영",
  },
  {
    id: "cloud-deployment-models-multicloud-7",
    post: "cloud-deployment-models-multicloud",
    question: "법무팀이 \"고객 데이터는 국내에 있어야 한다\"고 했다. 설계 전에 가장 먼저 할 일은?",
    choices: [
      "바로 사내 데이터센터를 증설한다",
      "멀티 클라우드로 두 사업자에 나눠 저장한다",
      "요구가 데이터 거주(국내 보관)인지 자체 장비 보관인지 문장으로 확인한다",
      "모든 데이터를 Deep Archive에 넣는다",
    ],
    answer: 2,
    explanation:
      "국내 보관이라면 국내 리전과 고객 관리 키로 충분할 수 있고, 자체 장비 보관이라면 하이브리드가 된다. 요구를 정확히 읽지 않으면 필요 없는 하이브리드 운영 비용을 몇 년 동안 낸다.",
    anchor: "규제-요구를-다시-읽는다",
  },
];
