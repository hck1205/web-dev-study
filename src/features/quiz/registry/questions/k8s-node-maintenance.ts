import type { QuizQuestion } from "../types";

export const K8S_NODE_MAINTENANCE: QuizQuestion[] = [
  {
    id: "k8s-node-maintenance-1",
    post: "k8s-node-maintenance",
    question: "kubectl cordon node-1을 실행한 직후 node-1에서 돌던 Pod와 그 Pod로 가는 트래픽은 어떻게 되나?",
    choices: [
      "Pod가 모두 다른 노드로 옮겨 간다",
      "Pod는 그대로 돌고 트래픽도 계속 들어온다. 새 Pod만 오지 않는다",
      "Pod는 그대로지만 Service가 트래픽을 끊는다",
      "노드가 NotReady가 되어 Pod가 5분 뒤 지워진다",
    ],
    answer: 1,
    explanation:
      "cordon은 spec.unschedulable을 true로 바꿔 unschedulable taint를 붙일 뿐이고 노드는 여전히 Ready다. 있던 Pod를 내보내는 것은 drain이 eviction으로 하는 일이다.",
    anchor: "cordon은-새로-오는-pod만-막는다",
  },
  {
    id: "k8s-node-maintenance-2",
    post: "k8s-node-maintenance",
    question: "drain에 --ignore-daemonsets를 거의 항상 붙이는 이유는?",
    choices: [
      "DaemonSet Pod는 PDB가 없어서 지우면 위험하기 때문이다",
      "DaemonSet Pod를 지우면 노드가 NotReady가 되기 때문이다",
      "지워도 DaemonSet 컨트롤러가 unschedulable taint를 견디는 Pod를 같은 노드에 바로 다시 만들기 때문이다",
      "DaemonSet Pod는 eviction API를 지원하지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "DaemonSet이 만드는 Pod는 unschedulable taint를 견디므로 cordon된 노드에도 다시 뜬다. 지워 봐야 drain이 끝나지 않으니 건드리지 않고 넘어가게 하는 플래그다.",
    anchor: "drain을-멈춰-세우는-세-가지-pod",
  },
  {
    id: "k8s-node-maintenance-3",
    post: "k8s-node-maintenance",
    question: "PDB 허용 수가 0이라 drain이 멈췄다. --force를 붙이면 어떻게 되나?",
    choices: [
      "PDB를 무시하고 바로 지운다",
      "eviction을 그대로 쓰므로 여전히 PDB에 막힌다. --force는 컨트롤러 없는 Pod를 지워도 된다는 뜻이다",
      "PDB를 자동으로 지운 뒤 진행한다",
      "grace period를 0으로 줄여 즉시 종료한다",
    ],
    answer: 1,
    explanation:
      "--force는 다시 만들어 줄 주체가 없는 Pod를 지우는 데 대한 동의일 뿐이다. PDB를 건너뛰는 것은 eviction 대신 DELETE를 보내는 --disable-eviction이다.",
    anchor: "플래그가-포기하게-하는-것",
  },
  {
    id: "k8s-node-maintenance-4",
    post: "k8s-node-maintenance",
    question: "drain이 drained로 끝났는데 비운 노드에 같은 Deployment의 Pod가 다시 떠 있다. 가장 먼저 의심할 것은?",
    choices: [
      "Pod 템플릿에 spec.nodeName이 직접 적혀 있어 스케줄러를 거치지 않는다",
      "drain이 실패했는데 성공으로 잘못 표시됐다",
      "PDB가 그 Pod를 보호했다",
      "kube-proxy가 Pod를 다시 만들었다",
    ],
    answer: 0,
    explanation:
      "nodeName을 정한 Pod는 스케줄러를 건너뛰어 unschedulable 표시를 보지 않으므로 cordon된 노드에도 다시 묶인다. 노드 고정은 nodeSelector나 affinity로 해야 cordon을 존중한다.",
    anchor: "drained라고-끝난-게-아닐-때",
  },
  {
    id: "k8s-node-maintenance-5",
    post: "k8s-node-maintenance",
    question: "노드 3대 중 하나를 drain했더니 새 Pod가 'didn't match pod topology spread constraints'로 Pending이다. 남은 노드에는 자원이 넉넉하다. 왜 그런가?",
    choices: [
      "PDB가 새 Pod의 스케줄링을 막았다",
      "nodeTaintsPolicy 기본값 Ignore 때문에 cordon된 노드도 Pod 0개인 칸으로 계산에 남아 있다",
      "스케줄러가 drain이 끝날 때까지 스케줄링을 멈춘다",
      "maxSkew는 cordon된 노드가 있으면 0으로 바뀐다",
    ],
    answer: 1,
    explanation:
      "taint 있는 노드도 분산 계산에 넣는 것이 기본이라, Pod를 받을 수 없는 노드가 0개인 칸으로 남아 차이를 키운다. nodeTaintsPolicy: Honor로 바꾸면 그 노드를 계산에서 뺀다.",
    anchor: "drained라고-끝난-게-아닐-때",
  },
  {
    id: "k8s-node-maintenance-6",
    post: "k8s-node-maintenance",
    question: "허용 수 0인 PDB가 걸린 앱이 있는 노드에 NoExecute taint를 걸면 어떻게 되나?",
    choices: [
      "drain처럼 429로 막혀 Pod가 그대로 남는다",
      "taint가 거부된다",
      "taint eviction 컨트롤러가 삭제로 Pod를 내려서 PDB와 상관없이 동시에 지워진다",
      "PDB 허용 수가 생길 때까지 하나씩 지운다",
    ],
    answer: 2,
    explanation:
      "taint eviction 컨트롤러는 eviction API가 아니라 삭제를 쓰므로 PDB를 보지 않는다. 실습에서도 허용 수 0인데 Pod 둘이 함께 지워졌다. 그래서 점검은 drain으로 한다.",
    anchor: "taint로-비우면-pdb를-건너뛴다",
  },
  {
    id: "k8s-node-maintenance-7",
    post: "k8s-node-maintenance",
    question: "VM이 하이퍼바이저에서 강제로 꺼진 뒤 StatefulSet의 db-0이 Terminating에 묶여 다른 노드로 가지 않는다. 노드가 꺼진 것을 확인한 뒤 할 일은?",
    choices: [
      "kubelet의 shutdownGracePeriod를 늘린다",
      "kubectl uncordon으로 노드를 다시 연다",
      "PDB를 지운다",
      "node.kubernetes.io/out-of-service taint를 걸어 강제 삭제와 볼륨 분리를 일으킨다",
    ],
    answer: 3,
    explanation:
      "삭제를 확인해 줄 kubelet이 없어 옛 Pod가 남고, StatefulSet은 같은 이름의 Pod를 만들지 못한다. out-of-service taint가 강제 삭제와 즉시 볼륨 분리를 일으킨다. graceful node shutdown은 systemd 신호가 없는 강제 종료에는 동작하지 않는다.",
    anchor: "꺼진-노드를-사람이-선언하기",
  },
];
