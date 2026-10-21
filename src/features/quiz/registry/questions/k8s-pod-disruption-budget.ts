import type { QuizQuestion } from "../types";

export const K8S_POD_DISRUPTION_BUDGET: QuizQuestion[] = [
  {
    id: "k8s-pod-disruption-budget-1",
    post: "k8s-pod-disruption-budget",
    question: "minAvailable: 2인 PDB가 걸린 Pod 3개짜리 앱에서 PDB가 막아 주는 것은?",
    choices: [
      "누군가 kubectl delete pod로 Pod 두 개를 지우는 것",
      "Deployment 롤링 업데이트가 옛 Pod를 줄이는 것",
      "kubectl drain이 eviction API로 Pod 두 개를 연달아 내보내는 것",
      "노드가 갑자기 꺼져 Pod 두 개가 함께 사라지는 것",
    ],
    answer: 2,
    explanation:
      "PDB는 eviction API를 거치는 자발적 중단만 본다. delete와 ReplicaSet의 축소는 eviction이 아니라서 PDB를 지나치고, 노드 장애 같은 비자발적 중단은 허락을 구할 상대가 없어 막을 수 없다.",
    anchor: "누가-내리느냐에-따라-규칙이-다르다",
  },
  {
    id: "k8s-pod-disruption-budget-2",
    post: "k8s-pod-disruption-budget",
    question: "eviction 요청이 PDB 때문에 거부될 때 API 서버가 429 TooManyRequests를 돌려주는 이유는?",
    choices: [
      "eviction 요청 빈도가 API 서버의 속도 제한을 넘었기 때문에",
      "지금은 허용 수가 0이지만 새 Pod가 Ready가 되면 통과할 수 있는 일시적인 거부이기 때문에",
      "요청한 사용자에게 Pod를 지울 권한이 없기 때문에",
      "Eviction 오브젝트의 형식이 잘못됐기 때문에",
    ],
    answer: 1,
    explanation:
      "429는 나중에 다시 시도하라는 뜻이다. 새 Pod가 Ready가 되면 허용 수가 다시 생기므로 kubectl drain은 5초마다 재시도한다. 권한 문제라면 403, PDB가 둘 이상 겹친 경우라면 재시도해도 안 되는 500이 돌아온다.",
    anchor: "eviction-한-번이-지나가는-길",
  },
  {
    id: "k8s-pod-disruption-budget-3",
    post: "k8s-pod-disruption-budget",
    question: "replicas 7인 Deployment에 maxUnavailable: 30%를 걸었다. ALLOWED DISRUPTIONS는?",
    choices: ["2", "3", "4", "5"],
    answer: 1,
    explanation:
      "퍼센트는 올림한다. 7 × 0.3 = 2.1을 올려 3개까지 내려가도 되고, 남아야 하는 수는 4가 된다. 적어 둔 30%보다 실제로는 더 많이(43%) 내려갈 수 있으니 엄격히 지켜야 하면 정수를 쓴다.",
    anchor: "allowed-disruptions는-이렇게-센다",
  },
  {
    id: "k8s-pod-disruption-budget-4",
    post: "k8s-pod-disruption-budget",
    question: "HPA가 새벽에 minReplicas 3까지 줄이는 앱에 minAvailable: 3인 PDB를 걸었다. 새벽 노드 작업에서 생기는 일은?",
    choices: [
      "HPA가 PDB 때문에 replicas를 3 아래로 못 줄인다",
      "PDB가 replicas에 맞춰 minAvailable을 자동으로 2로 낮춘다",
      "drain이 Pod를 한 번에 하나씩 정상적으로 옮긴다",
      "허용 수가 0이 돼 drain이 끝나지 않는다",
    ],
    answer: 3,
    explanation:
      "정수 minAvailable은 replicas를 따라가지 않는다. replicas가 3으로 줄면 3개가 모두 필요해 허용 수가 0이 되고 drain은 재시도만 반복한다. maxUnavailable: 1처럼 replicas를 따라가는 형태로 걸면 이 문제가 없다.",
    anchor: "hpa와-함께-쓸-때-생기는-일",
  },
  {
    id: "k8s-pod-disruption-budget-5",
    post: "k8s-pod-disruption-budget",
    question: "kubectl get pdb -A에서 web-pdb의 ALLOWED DISRUPTIONS가 0이고 currentHealthy/expectedPods가 0/0이다. 무엇을 의심하나?",
    choices: [
      "PDB 셀렉터가 아무 Pod도 고르지 못하고 있다",
      "web 앱의 Pod가 모두 CrashLoopBackOff다",
      "disruption 컨트롤러가 멈췄다",
      "minAvailable이 replicas와 같다",
    ],
    answer: 0,
    explanation:
      "expectedPods가 0이면 셀렉터에 맞는 Pod가 하나도 없다는 뜻이다. 라벨 오타나 이미 지운 앱의 PDB인 경우가 많다. 이런 PDB는 drain을 막지 않지만 원래 지키려던 앱은 보호받지 못하고 있다.",
    anchor: "drain이-끝나지-않는-설정",
  },
  {
    id: "k8s-pod-disruption-budget-6",
    post: "k8s-pod-disruption-budget",
    question: "CrashLoopBackOff인 Pod 때문에 drain이 막힌다. unhealthyPodEvictionPolicy: AlwaysAllow로 바꾸면?",
    choices: [
      "PDB가 무시되고 모든 Pod가 바로 내보내진다",
      "Running이지만 Ready가 아닌 Pod는 언제든 내보낼 수 있고, 건강한 Pod는 여전히 보호받는다",
      "Pending인 Pod만 내보낼 수 있게 된다",
      "Ready가 아닌 Pod도 건강한 수에 포함돼 허용 수가 늘어난다",
    ],
    answer: 1,
    explanation:
      "AlwaysAllow는 준비 안 된 Running Pod를 PDB 기준과 상관없이 내보내게 한다. 건강한 Pod의 보호는 그대로다. Pending, Succeeded, Failed Pod는 원래 정책과 상관없이 늘 내보낼 수 있다.",
    anchor: "준비-안-된-pod가-drain을-막을-때",
  },
];
