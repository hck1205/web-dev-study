import type { QuizQuestion } from "../types";

export const K8S_DAEMONSET: QuizQuestion[] = [
  {
    id: "k8s-daemonset-1",
    post: "k8s-daemonset",
    question: "노드 4대 클러스터에서 node-exporter DaemonSet의 DESIRED가 3이다. 가장 먼저 의심할 것은?",
    choices: [
      "replicas가 3으로 적혀 있다",
      "한 노드에 DaemonSet이 견디지 못하는 taint가 있다",
      "스케줄러가 꺼져 있다",
      "maxUnavailable이 1이다",
    ],
    answer: 1,
    explanation:
      "DaemonSet에는 replicas가 없고 조건에 맞는 노드 수가 곧 DESIRED다. control-plane 노드의 NoSchedule taint처럼 견디지 못하는 taint가 있는 노드는 처음부터 빠진다. maxUnavailable은 업데이트 속도만 정한다.",
    anchor: "노드-수가-곧-replicas다",
  },
  {
    id: "k8s-daemonset-2",
    post: "k8s-daemonset",
    question: "GPU 노드에 NoSchedule taint를 건 지 몇 주 뒤, 로그 수집기를 재배포하자 그 노드의 로그만 끊겼다. 왜인가?",
    choices: [
      "NoSchedule taint가 걸린 즉시 수집기 Pod가 쫓겨났다",
      "GPU 노드는 hostPath를 쓸 수 없다",
      "NoSchedule은 이미 있던 Pod를 두지만, 재배포 때 새 Pod는 그 노드에 만들어지지 않는다",
      "재배포 때 maxSurge가 걸려 포트가 겹쳤다",
    ],
    answer: 2,
    explanation:
      "NoSchedule은 새로 놓는 것만 막아서 taint를 건 직후에는 아무 일도 없다. 재배포로 Pod를 새로 만드는 순간 그 노드는 조건에서 빠지고 에이전트가 조용히 사라진다. 노드 전체를 덮어야 하는 에이전트는 operator: Exists toleration으로 모든 taint를 견디게 둔다.",
    anchor: "taint를-나중에-걸면-에이전트가-사라진다",
  },
  {
    id: "k8s-daemonset-3",
    post: "k8s-daemonset",
    question: "hostNetwork를 쓰는 node-exporter에 maxSurge 1, maxUnavailable 0을 걸었더니 롤아웃이 멈췄다. 이유는?",
    choices: [
      "hostNetwork Pod는 hostPort가 자동으로 채워져서 같은 노드의 새 Pod가 포트 충돌로 배치되지 못한다",
      "DaemonSet은 maxSurge를 지원하지 않는다",
      "maxUnavailable이 0이면 API 서버가 거절한다",
      "새 이미지의 readiness probe가 실패했다",
    ],
    answer: 0,
    explanation:
      "hostNetwork Pod는 containerPort와 같은 값으로 hostPort가 채워진다. 옛 Pod가 9100번을 쥐고 있으니 새 Pod는 FailedScheduling으로 Pending이고, 옛 Pod는 새 Pod가 Ready가 되기 전에는 지워지지 않아 서로를 기다린다. maxUnavailable 방식으로 바꾸면 풀린다.",
    anchor: "업데이트-하나-빼고-넣기-하나-더-넣고-빼기",
  },
  {
    id: "k8s-daemonset-4",
    post: "k8s-daemonset",
    question: "꽉 찬 노드에서 새 로그 수집기 DaemonSet이 Pending이라 system-node-critical 우선순위를 줬다. 무엇을 각오해야 하나?",
    choices: [
      "수집기 Pod가 모든 노드에서 재시작을 반복한다",
      "모든 노드에서 동시에 우선순위가 낮은 앱 Pod가 선점당해 밀려날 수 있다",
      "kube-system 네임스페이스가 아니면 적용되지 않는다",
      "노드의 allocatable이 그만큼 늘어난다",
    ],
    answer: 1,
    explanation:
      "높은 우선순위의 DaemonSet Pod는 자리를 만들려고 같은 노드의 낮은 우선순위 Pod를 선점한다. 실습에서도 앱 Pod 셋이 한꺼번에 Preempted로 밀려 Pending이 됐다. 에이전트를 넣기 전에 노드마다 남은 자리를 계산한다.",
    anchor: "노드-자원을-먼저-떼어-간다",
  },
  {
    id: "k8s-daemonset-5",
    post: "k8s-daemonset",
    question: "노드를 cordon한 뒤 그 노드의 DaemonSet Pod를 지웠다. 무슨 일이 일어나나?",
    choices: [
      "cordon된 노드라 Pod가 다시 생기지 않는다",
      "다른 노드에 두 번째 Pod가 생긴다",
      "DaemonSet이 Failed 상태가 된다",
      "기본 unschedulable toleration 덕분에 같은 노드에 다시 뜬다",
    ],
    answer: 3,
    explanation:
      "컨트롤러는 DaemonSet Pod에 node.kubernetes.io/unschedulable toleration을 자동으로 붙인다. 그래서 cordon한 노드에도 다시 뜨고, 노드를 끄기 직전까지 로그와 메트릭이 남는다. drain이 --ignore-daemonsets를 요구하는 것도 같은 이유다.",
    anchor: "drain과-cordon-앞에서",
  },
  {
    id: "k8s-daemonset-6",
    post: "k8s-daemonset",
    question: "셸 없는 에이전트 Pod에 kubectl debug로 임시 컨테이너를 붙였다. 다 본 뒤에는 어떻게 되나?",
    choices: [
      "kubectl debug를 끝내면 자동으로 사라진다",
      "patch로 ephemeralContainers 항목을 지우면 된다",
      "Pod 스펙에 남고 뗄 수 없어서, Pod가 다시 만들어질 때까지 그대로다",
      "DaemonSet 템플릿에도 추가되어 모든 노드에 퍼진다",
    ],
    answer: 2,
    explanation:
      "임시 컨테이너는 ephemeralcontainers 하위 리소스로 추가만 되고, 지우려 하면 may not be removed로 거절된다. Pod가 재생성될 때까지 남으니 디버깅 이미지는 작게, 명령은 끝나는 것으로 준다. 템플릿에는 영향이 없다.",
    anchor: "노드-에이전트를-들여다볼-때",
  },
];
