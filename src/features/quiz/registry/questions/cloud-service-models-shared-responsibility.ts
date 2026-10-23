import type { QuizQuestion } from "../types";

export const CLOUD_SERVICE_MODELS_SHARED_RESPONSIBILITY: QuizQuestion[] = [
  {
    id: "cloud-service-models-shared-responsibility-1",
    post: "cloud-service-models-shared-responsibility",
    question: "OpenSSL 취약점 공지가 나왔다. EC2 인스턴스에 직접 띄운 Node.js 서비스는 누가 패치하나?",
    choices: [
      "AWS가 하이퍼바이저와 함께 게스트 OS도 자동으로 패치한다",
      "IaaS에서 게스트 OS부터 위는 고객 몫이라 내가 패치하고 서비스를 재시작한다",
      "AWS와 고객이 번갈아 가며 패치한다",
      "EC2는 매일 새 이미지로 교체되므로 패치가 필요 없다",
    ],
    answer: 1,
    explanation:
      "IaaS에서 AWS는 시설, 하드웨어, 가상화까지 맡고 그 위의 OS부터는 고객이 관리한다. 그래서 EC2 안의 라이브러리 패치는 내가 하고, 서비스를 재시작해야 새 라이브러리를 읽는다. 하이퍼바이저 쪽 패치는 AWS 몫이다.",
    anchor: "몇-층까지-빌리느냐",
  },
  {
    id: "cloud-service-models-shared-responsibility-2",
    post: "cloud-service-models-shared-responsibility",
    question: "Lambda 함수를 컨테이너 이미지로 배포했다. 베이스 이미지의 OS 라이브러리에 취약점이 나오면?",
    choices: [
      "관리형 런타임이므로 AWS가 자동으로 패치한다",
      "다음 콜드 스타트 때 AWS가 최신 베이스 이미지로 바꿔 띄운다",
      "이미지 안의 OS와 런타임은 내가 고른 것이라 이미지를 다시 빌드해 배포해야 반영된다",
      "Lambda는 OS가 없어서 영향이 없다",
    ],
    answer: 2,
    explanation:
      "zip으로 배포하면 AWS가 관리하는 런타임 위에서 돌아 패치가 자동으로 반영된다. 이미지로 배포하면 이미지 안의 OS와 런타임은 고객이 고른 것이라 직접 다시 빌드해야 한다. 같은 서비스라도 배포 형태에 따라 칸이 옮겨 간다.",
    anchor: "몇-층까지-빌리느냐",
  },
  {
    id: "cloud-service-models-shared-responsibility-3",
    post: "cloud-service-models-shared-responsibility",
    question: "22번 포트가 0.0.0.0/0으로 열린 보안 그룹 때문에 서버가 뚫렸다. 공동 책임 모델로 판정하면?",
    choices: [
      "보안 그룹은 AWS 기능이므로 AWS 책임이다",
      "규칙의 내용은 고객이 쓰는 설정이라 고객 책임이다. AWS는 보안 그룹이 규칙대로 동작하는 것까지 맡는다",
      "기본값이 위험했다면 언제나 AWS 책임이다",
      "네트워크는 공유 통제라 반반 책임진다",
    ],
    answer: 1,
    explanation:
      "판정 기준은 그 일을 바꿀 손잡이를 누가 쥐었느냐다. 보안 그룹이라는 기능이 제대로 막고 여는 것은 AWS 몫이고, 어떤 규칙을 넣을지는 고객이 정한다. 공개 S3 버킷이나 너무 넓은 IAM 역할도 같은 쪽이다.",
    anchor: "사고가-나면-누구-책임인가",
  },
  {
    id: "cloud-service-models-shared-responsibility-4",
    post: "cloud-service-models-shared-responsibility",
    question: "암호화 없이 만든 RDS 인스턴스에 저장 암호화를 적용하려면?",
    choices: [
      "콘솔에서 암호화 옵션을 켜고 재부팅한다",
      "AWS가 유지 보수 시간에 자동으로 암호화해 준다",
      "스냅숏을 암호화된 사본으로 복사한 뒤 그 사본으로 새 인스턴스를 만든다",
      "파라미터 그룹에서 암호화 파라미터를 바꾼다",
    ],
    answer: 2,
    explanation:
      "RDS의 저장 암호화는 만들 때 정하는 설정이라 기존 인스턴스에 바로 켤 수 없다. 스냅숏을 암호화해 복사하고 그걸로 복원해야 한다. 관리형 DB라도 암호화를 켤지는 고객 칸이라는 예다.",
    anchor: "관리형-db에서도-내가-맡는-것",
  },
  {
    id: "cloud-service-models-shared-responsibility-5",
    post: "cloud-service-models-shared-responsibility",
    question: "가용 영역 하나의 전원이 나가 그 안에만 있던 내 서비스가 통째로 멈췄다. 가장 정확한 설명은?",
    choices: [
      "인프라 장애이므로 서비스가 멈춘 것까지 전부 AWS 책임이다",
      "가용 영역 장애는 고객이 전원을 관리하지 않아서 생긴 고객 책임이다",
      "가용 영역 장애 자체는 AWS 쪽이지만, 여러 가용 영역에 나눠 견디게 설계하는 것은 고객 몫이다",
      "SLA가 있으므로 고객은 아무 설계도 하지 않아도 된다",
    ],
    answer: 2,
    explanation:
      "가용 영역 하나가 나가는 것은 미리 상정된 일이다. 인프라 장애는 AWS 쪽이지만 Multi-AZ처럼 그 장애에 견디는 구조는 고객이 고른다. Well-Architected의 안정성 기둥이 이 부분을 점검한다.",
    anchor: "사고가-나면-누구-책임인가",
  },
  {
    id: "cloud-service-models-shared-responsibility-6",
    post: "cloud-service-models-shared-responsibility",
    question: "책임의 칸은 비슷한데도 FaaS를 PaaS와 따로 부르는 이유로 가장 알맞은 것은?",
    choices: [
      "FaaS는 고객이 OS를 직접 패치해야 해서",
      "FaaS는 이벤트가 올 때만 실행 환경이 생겨 0까지 줄고 호출 단위로 내는 대신, 실행 시간 상한과 콜드 스타트 같은 제약이 있어서",
      "PaaS는 데이터 책임을 공급자가 지고 FaaS는 고객이 져서",
      "FaaS는 항상 PaaS보다 싸서",
    ],
    answer: 1,
    explanation:
      "PaaS 앱은 인스턴스가 늘 떠 있어 상주 비용이 있고 오래 사는 상태와 백그라운드 작업이 된다. FaaS는 단위가 함수 호출이라 요청이 없으면 0이 되지만 실행 시간 상한, 상태 없음, 콜드 스타트, DB 연결 폭증 같은 제약이 따른다. 트래픽이 크고 꾸준하면 오히려 상시 인스턴스가 쌀 수 있다.",
    anchor: "서버리스는-paas와-무엇이-다른가",
  },
  {
    id: "cloud-service-models-shared-responsibility-7",
    post: "cloud-service-models-shared-responsibility",
    question: "함수가 무거워져 메모리 512MB·평균 100ms에서 1GB·500ms가 됐다. 상시 인스턴스와의 손익 지점은 어떻게 되나?",
    choices: [
      "요청당 요금이 커져서 인스턴스가 싸지는 월 요청 수가 크게 내려간다",
      "요청 수 요금만 보므로 손익 지점은 그대로다",
      "실행 시간이 늘면 요청당 요금이 줄어 손익 지점이 올라간다",
      "함수 요금은 실행 시간과 상관이 없다",
    ],
    answer: 0,
    explanation:
      "함수 요금은 요청 수 요금에 메모리와 실행 시간을 곱한 GB-초 요금이 더해진다. 글의 계산에서 손익 지점은 월 약 2,900만 요청에서 약 350만 요청으로 내려왔다. 외부 API를 기다리는 시간에도 GB-초 요금이 붙는다는 점이 함께 드러난다.",
    anchor: "모델을-고르는-기준",
  },
];
