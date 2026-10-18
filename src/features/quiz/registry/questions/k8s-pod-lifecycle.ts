import type { QuizQuestion } from "../types";

export const K8S_POD_LIFECYCLE: QuizQuestion[] = [
  {
    id: "k8s-pod-lifecycle-1",
    post: "k8s-pod-lifecycle",
    question: "모니터링 스크립트가 kubectl get pods의 STATUS 칸에서 Running만 정상으로 본다. 무엇이 문제인가?",
    choices: [
      "STATUS 칸은 phase를 그대로 보여 주므로 문제없다",
      "Running은 phase가 아니라서 절대 나오지 않는다",
      "STATUS 칸은 kubectl이 phase, 컨테이너 reason, 삭제 표시를 섞어 고른 말이라 상태 판단에는 phase와 조건을 읽어야 한다",
      "STATUS 칸은 노드의 상태를 보여 준다",
    ],
    answer: 2,
    explanation:
      "ContainerCreating이나 CrashLoopBackOff는 컨테이너의 waiting reason이고, Terminating은 deletionTimestamp를 보고 kubectl이 붙인 말이다. Running이어도 READY가 0/1이면 트래픽을 받지 못한다. 그래서 자동화는 status.phase와 Ready 조건을 읽는다.",
    anchor: "status-칸은-phase가-아니다",
  },
  {
    id: "k8s-pod-lifecycle-2",
    post: "k8s-pod-lifecycle",
    question: "설정을 고쳤는데도 CrashLoopBackOff였던 Pod가 몇 분째 다시 뜨지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "kubelet의 재시작 대기 시간이 두 배씩 늘어 최대 5분까지 커져 있어서",
      "CrashLoopBackOff가 되면 Pod를 직접 지우기 전에는 절대 재시작하지 않아서",
      "스케줄러가 그 Pod를 다른 노드로 옮기는 중이라서",
      "이미지를 매번 새로 받아야 해서",
    ],
    answer: 0,
    explanation:
      "kubelet은 10초에서 시작해 두 배씩 늘려 300초에서 멈추는 대기 시간을 둔다. 고친 뒤에도 남은 대기가 끝나야 다시 시도한다. 급하면 Pod를 지우거나 rollout restart로 대기 시간이 0부터 시작하는 새 Pod를 받는다.",
    anchor: "crashloopbackoff는-기다리는-중이라는-뜻",
  },
  {
    id: "k8s-pod-lifecycle-3",
    post: "k8s-pod-lifecycle",
    question: "RESTARTS가 5인 Pod가 왜 죽었는지 알고 싶다. 먼저 볼 곳은?",
    choices: [
      "kubectl logs의 현재 로그와 State",
      "kubectl logs --previous와 describe의 Last State(Reason, Exit Code)",
      "노드의 /var/log/syslog",
      "Deployment의 이벤트",
    ],
    answer: 1,
    explanation:
      "지금 컨테이너는 막 재시작했거나 대기 중이라 원인이 없다. 직전에 죽은 컨테이너의 로그는 --previous로, 죽은 이유와 종료 코드는 lastState에 남는다. Error에 1이면 앱 에러, OOMKilled에 137이면 메모리 한도다.",
    anchor: "crashloopbackoff는-기다리는-중이라는-뜻",
  },
  {
    id: "k8s-pod-lifecycle-4",
    post: "k8s-pod-lifecycle",
    question: "앱이 SIGTERM을 받으면 바로 리스닝을 멈추도록 잘 만들었는데, 배포할 때마다 502가 몇 개씩 난다. 왜 그럴까?",
    choices: [
      "SIGTERM이 오기 전에 SIGKILL이 먼저 오기 때문이다",
      "Ingress가 종료 중인 Pod로 일부러 요청을 보내기 때문이다",
      "terminationGracePeriodSeconds가 너무 길어서다",
      "엔드포인트 제거가 모든 노드와 Ingress에 퍼지는 것과 SIGTERM이 동시에 출발해서, 아직 규칙을 못 바꾼 곳에서 새 연결이 들어오기 때문이다",
    ],
    answer: 3,
    explanation:
      "Pod를 지우면 EndpointSlice 정리와 kubelet의 preStop·SIGTERM이 동시에 시작된다. 규칙이 다 바뀌기 전에 앱이 소켓을 닫으면 새 연결이 거부된다. preStop에 몇 초 sleep을 두어 엔드포인트가 빠질 시간을 번다.",
    anchor: "prestop에-sleep을-두는-이유",
  },
  {
    id: "k8s-pod-lifecycle-5",
    post: "k8s-pod-lifecycle",
    question: "terminationGracePeriodSeconds를 30으로 둔 채 preStop에 sleep 25를 넣었다. 어떤 일이 생기나?",
    choices: [
      "유예 시간은 SIGTERM 이후부터 세므로 아무 문제 없다",
      "preStop이 유예 시간 안에서 쓰여서, 앱이 SIGTERM 뒤 정리할 시간이 5초쯤밖에 남지 않는다",
      "preStop이 길면 kubelet이 훅을 건너뛴다",
      "API 서버가 이 설정을 거부한다",
    ],
    answer: 1,
    explanation:
      "유예 시간은 삭제 시각부터 세는 전체 마감이고 preStop도 그 안에서 쓴다. 25초를 기다리고 나면 SIGTERM 뒤 5초 안에 끝내지 못한 프로세스는 SIGKILL을 받는다. 유예 시간은 preStop과 앱 정리 시간을 합친 것보다 넉넉하게 잡는다.",
    anchor: "prestop에-sleep을-두는-이유",
  },
  {
    id: "k8s-pod-lifecycle-6",
    post: "k8s-pod-lifecycle",
    question: "엔트리포인트 셸 스크립트 마지막 줄이 node app.js이고, Pod가 항상 유예 시간을 꽉 채운 뒤 137로 끝난다. 원인과 처방은?",
    choices: [
      "셸이 PID 1로 남아 SIGTERM을 무시하고 자식에게도 전달하지 않는다. exec node app.js로 바꾸거나 tini를 PID 1로 둔다",
      "메모리 한도 초과다. limits를 늘린다",
      "Node.js는 SIGTERM을 받을 수 없다. SIGINT로 바꾼다",
      "preStop이 없어서다. preStop을 추가한다",
    ],
    answer: 0,
    explanation:
      "PID namespace의 PID 1은 핸들러를 등록하지 않은 신호를 무시한다. 셸이 PID 1이면 SIGTERM이 앱까지 가지 않고, 결국 유예 시간 뒤 SIGKILL(137)로 끝난다. reason이 OOMKilled가 아니라 Error라면 메모리 문제는 아니다.",
    anchor: "pid-1은-sigterm을-그냥-넘긴다",
  },
];
