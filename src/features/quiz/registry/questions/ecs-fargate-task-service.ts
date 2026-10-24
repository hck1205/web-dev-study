import type { QuizQuestion } from "../types";

export const ECS_FARGATE_TASK_SERVICE: QuizQuestion[] = [
  {
    id: "ecs-fargate-task-service-1",
    post: "ecs-fargate-task-service",
    question: "ECS에서 '태스크를 항상 N개 유지하고, 하나가 죽으면 새로 띄우며, 로드 밸런서에 등록·해제한다'를 책임지는 것은?",
    choices: [
      "컨테이너 에이전트",
      "서비스",
      "태스크 정의",
      "클러스터"
    ],
    answer: 1,
    explanation:
      "서비스는 원하는 수를 유지하고 배포·로드 밸런서 연동을 맡는다(쿠버네티스 Deployment에 해당). 태스크 정의는 레시피(불변 버전), 클러스터는 담는 논리적 경계, 컨테이너 에이전트는 EC2 노드에서 지시를 받아 컨테이너를 실행하는 쪽이다.",
    anchor: "클러스터-태스크-서비스가-각각-맡는-일",
  },
  {
    id: "ecs-fargate-task-service-2",
    post: "ecs-fargate-task-service",
    question: "태스크가 뜨자마자 CannotPullContainerError로 STOPPED가 반복된다. 가장 먼저 볼 곳은?",
    choices: [
      "앱 코드의 예외 처리",
      "서비스의 minimumHealthyPercent 값",
      "실행 역할(execution role)에 ECR pull 권한이 있는지, 프라이빗 서브넷이면 ECR로 가는 경로가 있는지",
      "태스크 역할(task role)의 S3 권한"
    ],
    answer: 2,
    explanation:
      "이미지를 가져오지 못한 것이므로 앱이 아니라 인프라 문제다. 이미지 pull은 실행 역할로 한다. 실행 역할의 ECR 권한, 프라이빗 서브넷의 ECR 경로(NAT·VPC 엔드포인트), 태그·리전을 본다. 태스크 역할은 앱이 뜬 뒤 AWS 호출에 쓰이므로 이 증상과 다르다.",
    anchor: "권한이-두-종류로-나뉘는-이유",
  },
  {
    id: "ecs-fargate-task-service-3",
    post: "ecs-fargate-task-service",
    question: "앱 컨테이너는 정상으로 떠 있는데 앱이 S3를 호출할 때만 AccessDenied가 난다. 원인은?",
    choices: [
      "실행 역할에 ECR 권한이 없다",
      "awsvpc 모드가 꺼져 있다",
      "태스크 정의의 CPU 값이 너무 낮다",
      "태스크 역할에 S3 권한이 없다"
    ],
    answer: 3,
    explanation:
      "앱 코드가 AWS를 호출할 때 쓰는 권한은 태스크 역할이다. 앱이 떠 있는데 특정 AWS 호출만 막히면 태스크 역할 문제다. 실행 역할은 이미지 pull·로그처럼 컨테이너를 띄우기 위해 인프라가 쓰는 권한이라 역할이 다르다.",
    anchor: "권한이-두-종류로-나뉘는-이유",
  },
  {
    id: "ecs-fargate-task-service-4",
    post: "ecs-fargate-task-service",
    question: "awsvpc 네트워크 모드의 특징으로 맞는 것은?",
    choices: [
      "Fargate에서는 쓸 수 없고 EC2에서만 가능하다",
      "태스크마다 ENI와 VPC 사설 IP를 하나씩 받아 보안 그룹·서브넷을 직접 쓰지만, 서브넷 IP를 태스크 수만큼 먹는다",
      "모든 태스크가 호스트의 포트를 공유해 동적 포트 매핑이 필요하다",
      "태스크가 공인 IP를 반드시 하나씩 받는다"
    ],
    answer: 1,
    explanation:
      "awsvpc는 태스크마다 ENI와 사설 IP를 주어 포트 충돌이 없고 보안 그룹을 직접 건다. Fargate의 유일한 모드이고 EC2에서도 권장된다. 단점은 서브넷 IP를 태스크 수만큼 소비하는 것이다. 포트를 공유하는 건 bridge 모드다.",
    anchor: "태스크-정의-한-장-읽기",
  },
  {
    id: "ecs-fargate-task-service-5",
    post: "ecs-fargate-task-service",
    question: "서비스 롤링 업데이트에서 desired 3, minimumHealthyPercent 100, maximumPercent 200으로 설정하면 배포는 어떻게 진행되나?",
    choices: [
      "한 번에 모든 태스크를 새 버전으로 교체한다",
      "태스크를 2개로 줄여 배포한다",
      "새 태스크 3개를 먼저 띄워 6개가 됐다가 옛 3개를 내려, 건강한 수가 한 번도 3 아래로 떨어지지 않는다",
      "옛 3개를 먼저 모두 내린 뒤 새 3개를 띄운다"
    ],
    answer: 2,
    explanation:
      "min 100%는 배포 중에도 건강한 태스크를 최소 desired만큼 유지하라는 뜻이고, max 200%는 잠깐 두 배까지 허용한다는 뜻이다. 그래서 새 것을 먼저 띄우고 옛 것을 내려 무중단이 된다. min 50·max 100이면 추가 용량 없이 절반씩 교체해 느리지만 싸다.",
    anchor: "서비스가-원하는-수를-유지하고-배포한다",
  },
  {
    id: "ecs-fargate-task-service-6",
    post: "ecs-fargate-task-service",
    question: "EC2 시작 유형에서 서비스 오토스케일링으로 태스크를 늘렸는데 새 태스크가 PROVISIONING에서 멈췄다. 이유와 해결은?",
    choices: [
      "실행 역할이 만료된 것으로, 역할을 다시 만든다",
      "태스크 정의 리비전이 낡은 것으로, 새 리비전을 만든다",
      "Fargate로 바꾸면 태스크가 자동으로 두 배가 된다",
      "태스크를 받을 노드가 부족한 것으로, 용량 공급자로 EC2 오토스케일링 그룹을 엮어 노드도 함께 늘어나게 한다"
    ],
    answer: 3,
    explanation:
      "서비스 오토스케일링은 태스크 개수만 조절한다. EC2 시작 유형에서는 그 태스크를 받을 노드가 없으면 스케줄되지 못하고 멈추므로, 용량 공급자로 노드도 함께 늘어나게 해야 한다. Fargate는 노드가 없어 이 문제가 없다.",
    anchor: "스스로-개수를-조절하기-서비스-오토스케일링",
  },
  {
    id: "ecs-fargate-task-service-7",
    post: "ecs-fargate-task-service",
    question: "ECS 대신 EKS를 고르는 것이 더 합당한 경우는?",
    choices: [
      "IAM·ALB와의 기본 연동만 필요할 때",
      "쿠버네티스 생태계(Helm·오퍼레이터)를 쓰거나 다른 클라우드·온프레미스로의 포터빌리티가 필요할 때",
      "AWS 안에서 최대한 단순하게, 컨트롤 플레인 요금 없이 돌리고 싶을 때",
      "쿠버네티스를 전혀 모르는 작은 팀이 빠르게 시작하고 싶을 때"
    ],
    answer: 1,
    explanation:
      "EKS는 쿠버네티스 생태계를 그대로 쓰고 포터빌리티가 좋지만 컨트롤 플레인 요금과 학습 곡선, 버전·애드온 운영 부담이 따른다. 단순함·저비용·AWS 네이티브 연동이 우선이면 ECS가 맞다. 둘 다 Fargate로 노드를 없앨 수 있다.",
    anchor: "ecs를-고를까-eks를-고를까",
  },
];
