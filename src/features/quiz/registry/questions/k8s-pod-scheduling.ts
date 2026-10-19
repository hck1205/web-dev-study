import type { QuizQuestion } from "../types";

export const K8S_POD_SCHEDULING: QuizQuestion[] = [
  {
    id: "k8s-pod-scheduling-1",
    post: "k8s-pod-scheduling",
    question: "FailedScheduling에 1 node(s) had untolerated taint, 4 node(s) didn't match Pod's node affinity/selector가 찍혔다. taint만 풀어 주면 반드시 스케줄될까?",
    choices: [
      "그렇다. taint가 유일한 이유다",
      "그렇다. affinity는 점수에만 영향을 준다",
      "아니다. 스케줄러는 노드마다 처음 걸린 이유만 세므로 그 노드도 라벨 조건에 걸릴 수 있다",
      "아니다. taint는 풀 수 없다",
    ],
    answer: 2,
    explanation:
      "메시지는 노드별 첫 탈락 이유를 묶어 센 것이다. taint로 세어진 노드가 nodeSelector 라벨도 없다면 taint를 풀어도 다음 필터에서 떨어진다. 그래서 고친 뒤에는 이벤트를 다시 읽는다.",
    anchor: "failedscheduling-한-줄-읽기",
  },
  {
    id: "k8s-pod-scheduling-2",
    post: "k8s-pod-scheduling",
    question: "배치 Pod에 dedicated=batch toleration을 줬는데 배치 전용 노드가 아닌 일반 노드에도 뜬다. 왜 그럴까?",
    choices: [
      "toleration은 그 노드에 가도 된다는 허가일 뿐, 그 노드로 가라는 지시가 아니기 때문이다",
      "taint effect를 PreferNoSchedule로 걸었기 때문이다",
      "toleration의 operator를 Exists로 써야 해서다",
      "스케줄러가 toleration을 무시하는 버그다",
    ],
    answer: 0,
    explanation:
      "taint는 다른 Pod가 들어오지 못하게 막고, toleration은 그 막힘을 통과하게 해 줄 뿐이다. 전용 노드로만 보내려면 node affinity나 nodeSelector를 함께 걸어야 한다.",
    anchor: "taint는-노드가-pod를-가려-받는-표시다",
  },
  {
    id: "k8s-pod-scheduling-3",
    post: "k8s-pod-scheduling",
    question: "노드가 갑자기 죽었는데 그 위의 Pod가 약 5분 동안 다른 노드에 다시 만들어지지 않았다. 왜인가?",
    choices: [
      "스케줄러가 5분마다 한 번씩만 돌기 때문이다",
      "Pod마다 unreachable·not-ready NoExecute taint를 300초 견디는 toleration이 기본으로 들어가 있어서다",
      "kubelet이 Pod를 재시작하려고 기다리는 중이라서다",
      "CrashLoopBackOff 최대 대기가 5분이라서다",
    ],
    answer: 1,
    explanation:
      "노드가 응답을 멈추면 NoExecute taint가 붙고, 어드미션이 넣어 둔 기본 toleration이 300초 동안 버틴다. 그 뒤에 Pod가 지워지고 컨트롤러가 다른 노드에 새로 만든다. 이 시간은 tolerationSeconds로 조절한다.",
    anchor: "taint는-노드가-pod를-가려-받는-표시다",
  },
  {
    id: "k8s-pod-scheduling-4",
    post: "k8s-pod-scheduling",
    question: "노드 3개짜리 클러스터에서 required pod anti-affinity(hostname)를 건 replicas 3 Deployment를 롤링 업데이트하면 어떻게 되기 쉬운가?",
    choices: [
      "옛 Pod를 먼저 모두 지우고 새 Pod를 띄운다",
      "anti-affinity는 롤링 업데이트 중에는 무시된다",
      "새 Pod가 다른 존으로 자동으로 간다",
      "maxSurge로 띄울 새 Pod가 모든 노드에 이미 같은 라벨의 Pod가 있어 Pending이 되고 배포가 멈춘다",
    ],
    answer: 3,
    explanation:
      "옛 Pod와 새 Pod는 같은 라벨이라 anti-affinity 계산에 함께 들어간다. 노드마다 이미 하나씩 있으니 추가 Pod가 갈 곳이 없다. 흩어 놓기는 보통 preferred나 topologySpreadConstraints로 한다.",
    anchor: "pod끼리-붙이고-떼어-놓기",
  },
  {
    id: "k8s-pod-scheduling-5",
    post: "k8s-pod-scheduling",
    question: "topologySpreadConstraints(maxSkew 1, zone, DoNotSchedule)로 존 두 개에 3개씩 나눠 놓았다. 나중에 한 존의 Pod가 지워지고 다른 존에 다시 만들어져 4:2가 됐다. 스케줄러는 어떻게 하나?",
    choices: [
      "곧바로 Pod 하나를 옮겨 3:3으로 맞춘다",
      "이미 떠 있는 Pod는 옮기지 않는다. 분산은 스케줄할 때만 계산된다",
      "Deployment를 다시 만든다",
      "4개 있는 존의 Pod를 Evicted로 만든다",
    ],
    answer: 1,
    explanation:
      "스케줄러는 Pod를 놓는 순간에만 규칙을 확인하고, 놓인 Pod를 다시 옮기지 않는다. 깨진 균형을 맞추려면 Pod를 지워 다시 스케줄되게 하거나 descheduler 같은 별도 도구를 쓴다.",
    anchor: "존마다-고르게-나눈다",
  },
  {
    id: "k8s-pod-scheduling-6",
    post: "k8s-pod-scheduling",
    question: "batch-low(값 1000) 클래스를 만들고 서비스 Pod에는 클래스를 주지 않았다. 높은 우선순위 Pod가 preemption을 하면 누가 먼저 밀려나기 쉬운가?",
    choices: [
      "batch-low Pod. 이름이 low이기 때문이다",
      "아무도 밀려나지 않는다. 클래스가 없는 Pod는 보호된다",
      "클래스가 없는 서비스 Pod. 우선순위가 0이라 1000보다 낮다",
      "system-node-critical Pod",
    ],
    answer: 2,
    explanation:
      "PriorityClass가 없는 Pod의 우선순위는 globalDefault 클래스가 없으면 0이다. 그래서 low라는 이름의 1000짜리보다 낮다. 클래스를 도입하면 globalDefault를 두거나 모든 워크로드에 클래스를 적는다.",
    anchor: "자리가-없으면-덜-중요한-pod를-밀어낸다",
  },
];
