import type { QuizQuestion } from "../types";

export const K8S_NODE_AUTOSCALING_KARPENTER: QuizQuestion[] = [
  {
    id: "k8s-node-autoscaling-karpenter-1",
    post: "k8s-node-autoscaling-karpenter",
    question: "노드 CPU 사용률이 95%인데 노드 오토스케일러가 노드를 늘리지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "scan-interval이 너무 길다",
      "Pending Pod가 없다. 노드 오토스케일러는 사용률이 아니라 Unschedulable Pod의 requests를 보고 늘린다",
      "HPA의 목표 사용률이 너무 높다",
      "노드 그룹의 최솟값이 0이다",
    ],
    answer: 1,
    explanation:
      "CA와 Karpenter는 스케줄러가 넣을 곳이 없다고 표시한 Pending Pod를 신호로 쓴다. 이미 떠 있는 Pod가 CPU를 많이 써도 새 Pod가 Pending이 되지 않으면 노드는 늘지 않는다. requests가 실제 사용량보다 작게 잡혀 있으면 이런 일이 생긴다.",
    anchor: "pending-pod가-노드를-부른다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-2",
    post: "k8s-node-autoscaling-karpenter",
    question: "allocatable이 3.9코어, 7.9코어인 두 노드 그룹이 있다. CPU 4코어를 요청하는 Pod 하나가 Pending이면 least-waste expander는 어디를 늘리나?",
    choices: [
      "4코어 그룹. 남는 CPU가 0이라서",
      "두 그룹을 하나씩 늘린다",
      "8코어 그룹. 4코어 그룹 노드에는 Pod가 들어가지 않는다",
      "아무것도 늘리지 않는다",
    ],
    answer: 2,
    explanation:
      "노드의 allocatable은 시스템 예약분을 빼서 3.9코어라 4코어 Pod가 들어가지 않는다. 들어갈 수 있는 그룹은 8코어 그룹뿐이고 3.9코어가 남는다. requests를 노드 크기에 딱 맞추면 한 단계 큰 노드가 뜨고 절반이 비는 이유다.",
    anchor: "cluster-autoscaler는-노드-그룹을-늘린다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-3",
    post: "k8s-node-autoscaling-karpenter",
    question: "Karpenter가 1코어 Pod 10개를 보고 16코어 노드 한 대를 띄웠다. NodeClaim에 인스턴스 타입 후보를 30개나 넘기는 이유는?",
    choices: [
      "그중 하나에 클라우드 여유가 없으면 다음 후보로 바로 넘어가고, 스팟에서는 회수 가능성까지 따져 고르게 하려고",
      "30대를 한꺼번에 띄워 가장 먼저 붙는 것만 남기려고",
      "후보가 많을수록 노드 부팅이 빨라지기 때문에",
      "NodePool limits를 계산하려고",
    ],
    answer: 0,
    explanation:
      "Karpenter는 묶음의 requests가 들어가는 타입을 여럿 넘기고, AWS에서는 EC2 Fleet이 그중에서 고른다. 특정 타입에 용량이 없을 때 다른 타입으로 바로 넘어갈 수 있고, 스팟은 price-capacity-optimized로 싸면서도 회수 가능성이 낮은 쪽을 고른다.",
    anchor: "karpenter는-pod를-보고-인스턴스를-고른다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-4",
    post: "k8s-node-autoscaling-karpenter",
    question: "스팟 16코어 노드에 Pod 3개만 남았는데 'SpotToSpotConsolidation is disabled' 이벤트만 쌓인다. 무슨 뜻인가?",
    choices: [
      "스팟 노드는 consolidation 대상이 아니다",
      "PDB가 eviction을 막고 있다",
      "NodePool의 budgets가 0이다",
      "스팟 노드를 더 작은 스팟 노드로 바꾸는 replace는 기능 게이트를 켜야 하고, 지금은 Pod를 다른 곳에 옮겨 지우는 것만 가능하다",
    ],
    answer: 3,
    explanation:
      "스팟 노드의 삭제 consolidation은 기본으로 되지만 스팟에서 스팟으로 바꾸는 replace는 SpotToSpotConsolidation 게이트가 필요하다. 켜더라도 1대를 1대로 바꿀 때는 더 싼 후보 타입이 15개 이상이어야 한다. 가장 싼 스팟으로 계속 내려가 회수가 잦은 타입에 몰리는 것을 막으려는 제한이다.",
    anchor: "빈자리를-모아-노드를-줄인다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-5",
    post: "k8s-node-autoscaling-karpenter",
    question: "Karpenter consolidation의 replace에서 옛 노드를 비우기 전에 먼저 하는 일은?",
    choices: [
      "옛 노드의 Pod를 모두 delete한다",
      "대체 노드를 띄워 Ready가 될 때까지 기다린다",
      "PDB를 잠시 지운다",
      "NodePool의 limits를 늘린다",
    ],
    answer: 1,
    explanation:
      "Karpenter는 대체 노드를 먼저 띄워 준비되면 옛 노드에 disrupted taint를 걸고 eviction API로 Pod를 내보낸다. 대체 노드가 실패하면 처음부터 다시 한다. eviction이라서 PDB가 막으면 DisruptionBlocked 이벤트를 남기고 기다린다.",
    anchor: "빈자리를-모아-노드를-줄인다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-6",
    post: "k8s-node-autoscaling-karpenter",
    question: "Karpenter를 쓰는 클러스터에서 스팟 노드가 경고 없이 꺼지고 Pod가 한꺼번에 사라진다. 먼저 확인할 것은?",
    choices: [
      "interruption queue(SQS)와 EventBridge 규칙이 설정돼 Karpenter가 회수 경고를 받고 있는지",
      "consolidateAfter 값",
      "expireAfter가 너무 짧은지",
      "HPA의 minReplicas",
    ],
    answer: 0,
    explanation:
      "AWS의 스팟 회수 경고는 2분 전에 오는데, Karpenter는 EventBridge가 SQS 큐로 보낸 이벤트를 구독해서만 이를 안다. 큐 설정이 비어 있으면 미리 비우지 못하고 인스턴스가 그냥 사라진다. 앱의 종료 시간이 2분 안에 끝나는지도 함께 본다.",
    anchor: "스팟은-2분-전에-알려-준다",
  },
  {
    id: "k8s-node-autoscaling-karpenter-7",
    post: "k8s-node-autoscaling-karpenter",
    question: "1.37 클러스터에서 HPA minReplicas를 0으로 두려 한다. 맞는 설명은?",
    choices: [
      "HPAScaleToZero가 GA라서 CPU 메트릭만으로도 0까지 줄일 수 있다",
      "여전히 알파라 관리형 클러스터에서는 쓸 수 없다",
      "1.37에서 베타로 기본 활성화됐지만 Object나 External 메트릭이 있어야 0이 허용된다",
      "minReplicas 0은 노드 오토스케일러가 있어야만 허용된다",
    ],
    answer: 2,
    explanation:
      "HPAScaleToZero는 1.16부터 1.36까지 알파였고 1.37에서 베타가 되며 기본으로 켜졌다. 0개면 Pod의 CPU를 잴 수 없으니 큐 길이 같은 Object나 External 메트릭이 있어야 다시 늘릴 신호가 생긴다. 그 이전 버전에서는 KEDA가 0과 1 사이를 맡는다.",
    anchor: "0개까지-내리는-이야기",
  },
];
