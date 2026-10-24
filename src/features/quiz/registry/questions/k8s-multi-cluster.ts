import type { QuizQuestion } from "../types";

export const K8S_MULTI_CLUSTER: QuizQuestion[] = [
  {
    id: "k8s-multi-cluster-1",
    post: "k8s-multi-cluster",
    question: "운영과 개발을 같은 클러스터에 두다가 따로 떼어 내는 가장 큰 이유는?",
    choices: [
      "네임스페이스는 Pod 수에 제한이 있어서",
      "컨트롤 플레인·CNI·어드미션 웹훅처럼 클러스터 전체가 공유하는 것이 고장 나면 모든 앱이 같이 흔들려서",
      "클러스터를 나누면 컨트롤 플레인 비용이 줄어서",
      "kubectl은 한 클러스터에 네임스페이스를 두 개 이상 다루지 못해서",
    ],
    answer: 1,
    explanation:
      "클러스터 하나는 컨트롤 플레인, etcd, CNI, 웹훅을 공유해서 개발 쪽 실수가 운영까지 멈출 수 있다. 나누면 오히려 컨트롤 플레인 비용은 클러스터 수만큼 늘어난다.",
    anchor: "하나로-버티다가-나누게-되는-순간",
  },
  {
    id: "k8s-multi-cluster-2",
    post: "k8s-multi-cluster",
    question: "API 서버를 바깥에 열 수 없는 매장·공장 엣지 클러스터 수백 개에 배포할 때 pull 방식(Fleet, OCM)이 잘 맞는 이유는?",
    choices: [
      "pull 방식은 git을 쓰지 않아서 더 빠르다",
      "pull 방식은 클러스터 상태를 보고하지 않아도 허브가 정확히 안다",
      "각 클러스터의 에이전트가 허브로 나가는 연결만 있으면 되고, 허브가 모든 클러스터의 관리자 자격을 들고 있지 않아도 된다",
      "pull 방식은 잘못된 변경이 여러 클러스터에 퍼지지 않게 자동으로 막아 준다",
    ],
    answer: 2,
    explanation:
      "push 방식은 중앙이 각 API 서버에 접속해야 해서 사설망 클러스터에 길을 뚫어야 하고 모든 자격을 한곳에 모은다. pull 방식은 연결 방향이 반대라 이 문제가 없지만, 상태는 에이전트가 보고해야만 알 수 있다.",
    anchor: "같은-앱을-여러-클러스터에-내려보내기",
  },
  {
    id: "k8s-multi-cluster-3",
    post: "k8s-multi-cluster",
    question: "ApplicationSet 클러스터 생성기로 모든 운영 클러스터에 자동 배포하도록 했다. 클러스터를 나눈 의미를 지키려면 무엇을 더 해야 하나?",
    choices: [
      "배포를 스테이징 → 작은 운영 클러스터 → 나머지처럼 단계로 나누고 단계 사이에 오류율을 본다",
      "selfHeal을 끈다",
      "클러스터마다 다른 git 저장소를 쓴다",
      "모든 클러스터를 같은 리전에 둔다",
    ],
    answer: 0,
    explanation:
      "자동으로 맞춰 주는 도구는 잘못된 변경도 모든 클러스터에 동시에 맞춘다. 단계적으로 내보내야 한 번의 실수가 모든 리전을 동시에 망가뜨리지 않는다.",
    anchor: "같은-앱을-여러-클러스터에-내려보내기",
  },
  {
    id: "k8s-multi-cluster-4",
    post: "k8s-multi-cluster",
    question: "Cluster API의 관리 클러스터가 몇 시간 동안 죽었다. 워크로드 클러스터에는 어떤 일이 생기나?",
    choices: [
      "워크로드 클러스터의 Pod가 모두 멈춘다",
      "워크로드 클러스터의 VM이 자동으로 지워진다",
      "워크로드 클러스터의 kubeconfig가 즉시 무효가 된다",
      "이미 만들어진 클러스터는 계속 돌고, 새로 만들거나 업그레이드하는 일만 멈춘다",
    ],
    answer: 3,
    explanation:
      "관리 클러스터는 클러스터를 만들고 고치는 컨트롤러가 사는 곳이라, 멈추면 조정만 멈추고 이미 있는 VM과 컨트롤 플레인은 그대로 돈다. 다만 관리 클러스터의 리소스를 잃으면 어떤 VM이 어느 클러스터 것인지의 기록도 잃으니 백업과 이전 방법을 정해 둔다.",
    anchor: "클러스터-자체를-선언하는-cluster-api",
  },
  {
    id: "k8s-multi-cluster-5",
    post: "k8s-multi-cluster",
    question: "MCS API로 서비스를 내보냈는데, 미국 클러스터의 shop 네임스페이스는 유럽 클러스터의 shop과 다른 팀 것이었다. 무엇이 깨지나?",
    choices: [
      "ServiceExport가 만들어지지 않는다",
      "네임스페이스 동일성 전제가 깨져 같은 이름의 서비스 엔드포인트가 엉뚱한 팀의 서비스와 섞일 수 있다",
      "cluster.local 이름이 다른 클러스터를 가리키게 된다",
      "MCS API는 네임스페이스를 보지 않으므로 아무 문제가 없다",
    ],
    answer: 1,
    explanation:
      "MCS API는 ClusterSet 안의 같은 이름 네임스페이스가 같은 주인과 의미를 갖는다고 가정한다. 이 가정이 깨지면 내보낸 서비스가 다른 팀의 같은 이름 서비스와 합쳐질 수 있다. cluster.local 이름은 여전히 자기 클러스터만 가리킨다.",
    anchor: "다른-클러스터의-서비스를-이름으로-부르기",
  },
  {
    id: "k8s-multi-cluster-6",
    post: "k8s-multi-cluster",
    question: "서울과 도쿄 클러스터가 각각 60% 부하로 돌다가 서울 결제 Pod가 빠져 메시가 도쿄로 장애 조치했다. 가장 먼저 걱정할 것은?",
    choices: [
      "도쿄로 가는 요청의 mTLS가 꺼진다",
      "DNS TTL 때문에 요청이 서울로 계속 간다",
      "도쿄가 두 리전 몫인 약 120%를 받게 되어 장애가 옮겨 갈 수 있다",
      "east-west 게이트웨이가 요청을 서울로 되돌려 보낸다",
    ],
    answer: 2,
    explanation:
      "장애 조치는 트래픽을 옮길 뿐 용량을 만들지 않는다. 오토스케일러가 따라오는 몇 분 동안 버틸 여유를 평소에 남겨 둬야 한다. 메시 안의 장애 조치는 DNS 캐시를 거치지 않는다.",
    anchor: "메시를-클러스터-너머로-넓히면",
  },
  {
    id: "k8s-multi-cluster-7",
    post: "k8s-multi-cluster",
    question: "클러스터를 다섯 개로 나눴는데 노드 교체 중 모든 클러스터에서 동시에 ImagePullBackOff가 났다. 가장 그럴듯한 원인은?",
    choices: [
      "하나뿐인 이미지 레지스트리 같은 공유 의존성이 죽었다",
      "클러스터마다 CNI 버전이 달라서",
      "ServiceExport를 너무 많이 만들어서",
      "kubectl 컨텍스트가 잘못 설정되어서",
    ],
    answer: 0,
    explanation:
      "모든 클러스터에서 같은 시각에 같은 에러가 나면 공유하는 것을 의심한다. 레지스트리가 죽으면 떠 있는 Pod는 괜찮지만 새 노드나 스케일 아웃에서 이미지를 받지 못한다. 리전별 미러나 풀스루 캐시로 대비한다.",
    anchor: "여러-클러스터에서-생기는-장애와-실수",
  },
];
