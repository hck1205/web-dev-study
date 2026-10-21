import type { QuizQuestion } from "../types";

export const K8S_BATCH_KUEUE: QuizQuestion[] = [
  {
    id: "k8s-batch-kueue-1",
    post: "k8s-batch-kueue",
    question: "GPU 8장 클러스터에 6장씩 필요한 학습 Job 두 개를 동시에 올렸더니 둘 다 4개씩만 Running이다. 왜 이런 일이 생기나?",
    choices: [
      "GPU 드라이버가 Pod 4개까지만 지원해서",
      "ResourceQuota가 네임스페이스마다 4장으로 막아서",
      "기본 스케줄러가 Pod를 하나씩 배치하고 Job 전체가 들어갈 수 있는지는 보지 않아서",
      "kubelet이 GPU를 노드당 2장까지만 할당해서",
    ],
    answer: 2,
    explanation:
      "kube-scheduler는 Pod 단위로 자리를 찾기 때문에 두 Job의 Pod가 엇갈려 들어가 GPU를 반씩 나눠 갖는다. 분산 학습은 모든 워커가 모여야 시작하니 서로를 기다리는 교착이 된다.",
    anchor: "기본-스케줄러는-pod-하나씩-본다",
  },
  {
    id: "k8s-batch-kueue-2",
    post: "k8s-batch-kueue",
    question: "Kueue가 아직 받아들이지 않은 Job이 Pod를 만들지 않는 이유는?",
    choices: [
      "Kueue 웹훅이 Job의 spec.suspend를 true로 만들어 두기 때문",
      "Kueue가 Pod 생성 요청을 API 서버에서 거절하기 때문",
      "Kueue가 별도 스케줄러로 Pod를 붙잡고 있기 때문",
      "LocalQueue가 Pod 수를 0으로 고정하기 때문",
    ],
    answer: 0,
    explanation:
      "Kueue는 queue-name 라벨이 붙은 Job을 suspend 상태로 만들고, 몫이 확보되면 suspend를 false로 바꿔 Job 컨트롤러가 Pod를 만들게 한다. 배치 자체는 그 뒤 기본 kube-scheduler가 한다.",
    anchor: "대기열을-따로-두는-kueue",
  },
  {
    id: "k8s-batch-kueue-3",
    post: "k8s-batch-kueue",
    question: "Kueue에서 Job이 받아들여진 뒤 특정 GPU 노드 종류로 가게 만드는 것은?",
    choices: [
      "LocalQueue의 spec.clusterQueue",
      "ResourceFlavor의 nodeLabels와 tolerations를 Kueue가 Pod 템플릿에 넣는 것",
      "Cohort의 이름",
      "Workload의 priority",
    ],
    answer: 1,
    explanation:
      "Kueue는 몫을 센 ResourceFlavor의 nodeLabels와 tolerations를 Pod에 넣고 Job을 풀어 준다. 그래서 flavor의 라벨이 실제 노드 라벨과 다르면 받아들여졌는데도 Pod가 Pending에 머문다.",
    anchor: "몫을-정하는-네-가지-객체",
  },
  {
    id: "k8s-batch-kueue-4",
    post: "k8s-batch-kueue",
    question: "team-ml이 cohort에서 빌린 GPU로 학습 중인데 빌려준 팀(team-vision)의 Job이 왔다. team-vision의 ClusterQueue에 reclaimWithinCohort: Any가 있으면 어떻게 되나?",
    choices: [
      "빌려준 팀의 Job이 빌린 Job이 끝날 때까지 기다린다",
      "두 Job이 GPU를 time-slicing으로 나눠 쓴다",
      "빌려준 팀의 몫이 자동으로 늘어난다",
      "빌린 쪽 Workload를 내보내고 그 Job은 다시 suspend되어 대기열로 간다",
    ],
    answer: 3,
    explanation:
      "reclaimWithinCohort는 돌려받는 쪽 큐에 적는 규칙이고, Any면 빌려 간 Workload를 우선순위와 상관없이 내보낸다. 기본값 Never면 자기 몫인데도 기다리기만 한다. 내보낸 학습은 체크포인트가 없으면 처음부터 다시 해야 하므로 빌린 몫에는 짧은 Job이나 체크포인트가 잦은 Job을 보낸다.",
    anchor: "남는-몫을-빌리고-돌려받는다",
  },
  {
    id: "k8s-batch-kueue-5",
    post: "k8s-batch-kueue",
    question: "Kueue가 GPU 몫을 받아들였는데 노드에 GPU가 흩어져 있어 일부 Pod만 뜨는 틈을 메우는 방법은?",
    choices: [
      "queueingStrategy를 StrictFIFO로 바꾼다",
      "borrowingLimit을 0으로 둔다",
      "waitForPodsReady로 시간 안에 다 안 뜨면 내보내거나, PodGroup gang 정책으로 묶음을 한꺼번에 배치한다",
      "LocalQueue를 네임스페이스마다 두 개씩 만든다",
    ],
    answer: 2,
    explanation:
      "Kueue는 몫만 세고 배치는 스케줄러가 하므로 둘 사이에 틈이 있다. waitForPodsReady는 시간 기준으로 all-or-nothing을 흉내 내고, gang scheduling은 minCount개를 동시에 놓을 수 있을 때만 배치해 틈을 직접 막는다.",
    anchor: "몫은-맞았는데-pod가-안-뜨는-경우",
  },
  {
    id: "k8s-batch-kueue-6",
    post: "k8s-batch-kueue",
    question: "JobSet에서 워커 Pod 하나가 실패하면 기본으로 묶음 전체를 다시 띄우는 이유는?",
    choices: [
      "분산 학습은 워커 하나가 빠지면 나머지가 집합 통신에서 멈춰 있기 때문",
      "Job 컨트롤러가 Pod 하나만 다시 띄우는 기능이 없기 때문",
      "Kueue가 실패한 Pod의 몫을 회수하기 때문",
      "headless Service가 Pod 이름을 바꾸기 때문",
    ],
    answer: 0,
    explanation:
      "분산 학습의 워커들은 서로 통신하며 같은 스텝을 진행하므로 하나가 빠지면 나머지도 진행하지 못한다. 그래서 failurePolicy의 기본 restartStrategy인 Recreate가 묶음 전체를 다시 만들고 maxRestarts로 횟수를 제한한다.",
    anchor: "학습-job을-한-덩어리로-jobset",
  },
  {
    id: "k8s-batch-kueue-7",
    post: "k8s-batch-kueue",
    question: "queue-name 라벨이 없는 Job이 Kueue 몫과 상관없이 바로 돌고 있다. 무엇을 확인하나?",
    choices: [
      "ResourceFlavor의 tolerations",
      "Kueue 설정의 manageJobsWithoutQueueName 값",
      "ClusterQueue의 queueingStrategy",
      "JobSet의 failurePolicy",
    ],
    answer: 1,
    explanation:
      "manageJobsWithoutQueueName이 false(기본)면 라벨이 없는 Job은 Kueue를 거치지 않는다. 몫을 우회하는 Job을 막으려면 이 값을 켜고 시스템 네임스페이스는 managedJobsNamespaceSelector로 뺀다.",
    anchor: "배치-클러스터에서-막히는-순간",
  },
];
