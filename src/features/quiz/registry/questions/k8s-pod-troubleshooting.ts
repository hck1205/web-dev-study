import type { QuizQuestion } from "../types";

export const K8S_POD_TROUBLESHOOTING: QuizQuestion[] = [
  {
    id: "k8s-pod-troubleshooting-1",
    post: "k8s-pod-troubleshooting",
    question: "STATUS가 CreateContainerConfigError인 Pod에 kubectl logs를 쳤더니 에러만 나온다. 어디를 봐야 하나?",
    choices: [
      "앱 설정 파일의 문법",
      "kubectl logs --previous",
      "노드의 syslog",
      "describe의 Events나 컨테이너 waiting 메시지. 컨테이너가 한 번도 돌지 않아 로그가 없다",
    ],
    answer: 3,
    explanation:
      "CreateContainerConfigError는 컨테이너를 만들기 전 단계에서 멈춘 것이라 앱 로그가 생긴 적이 없다. waiting 메시지에 secret \"orders-db\" not found처럼 빠진 Secret이나 키가 적혀 있다. 그걸 만들면 kubelet이 다음 시도에서 컨테이너를 만든다.",
    anchor: "createcontainerconfigerror-설정이-비어-있다",
  },
  {
    id: "k8s-pod-troubleshooting-2",
    post: "k8s-pod-troubleshooting",
    question: "kubectl get events --sort-by=.lastTimestamp로 보니 Scheduled 이벤트들이 시간과 상관없이 맨 위에 몰려 있다. 왜 그럴까?",
    choices: [
      "스케줄러 이벤트는 lastTimestamp가 비어 있어서 정렬에서 맨 앞으로 간다",
      "스케줄러의 시계가 틀렸다",
      "이벤트 TTL이 지나서다",
      "kubectl 버전이 서버와 달라서다",
    ],
    answer: 0,
    explanation:
      "스케줄러 이벤트는 새 이벤트 API로 기록되어 lastTimestamp 대신 eventTime을 쓴다. 빈 값은 정렬에서 앞으로 가기 때문에 순서가 섞인다. 시간 순으로 보려면 .metadata.creationTimestamp로 정렬한다.",
    anchor: "이벤트는-정렬부터-틀린다",
  },
  {
    id: "k8s-pod-troubleshooting-3",
    post: "k8s-pod-troubleshooting",
    question: "새 네임스페이스에 배포했더니 비공개 레지스트리 이미지가 ImagePullBackOff다. 다른 네임스페이스에서는 잘 받아진다. 가장 그럴듯한 원인은?",
    choices: [
      "새 네임스페이스의 노드에 디스크가 없다",
      "imagePullSecrets로 쓰는 Secret이 새 네임스페이스에 없거나 연결되지 않았다",
      "이미지 태그가 latest라서다",
      "readiness probe가 실패해서다",
    ],
    answer: 1,
    explanation:
      "Secret은 네임스페이스를 넘지 못해서 레지스트리 인증 Secret을 새 네임스페이스에도 만들고 Pod나 ServiceAccount의 imagePullSecrets에 연결해야 한다. ErrImagePull 이벤트에 401이나 403이 보이면 인증 문제다.",
    anchor: "imagepullbackoff-이미지를-받지-못했다",
  },
  {
    id: "k8s-pod-troubleshooting-4",
    post: "k8s-pod-troubleshooting",
    question: "CrashLoopBackOff인 Pod의 Last State가 Terminated, Exit Code 127이다. 무엇을 의심하나?",
    choices: [
      "메모리 limits 초과",
      "liveness probe 실패",
      "실행하려는 명령을 찾지 못했다. command 오타나 셸이 없는 이미지에서 sh -c를 쓴 경우",
      "SIGTERM을 받고 정상 종료했다",
    ],
    answer: 2,
    explanation:
      "127은 셸이 명령을 찾지 못했을 때의 종료 코드다. command 오타나 셸이 없는 이미지가 흔한 원인이다. 메모리 초과는 137에 OOMKilled, SIGTERM 종료는 143으로 나온다.",
    anchor: "crashloopbackoff-뜨자마자-죽는다",
  },
  {
    id: "k8s-pod-troubleshooting-5",
    post: "k8s-pod-troubleshooting",
    question: "지운 Pod가 몇 분째 Terminating이고, 노드는 Ready이며 finalizers에 example.com/upload-report가 남아 있다. 먼저 할 일은?",
    choices: [
      "바로 kubectl delete --force --grace-period=0을 친다",
      "finalizer를 붙인 컨트롤러가 살아 있는지, 하려던 일이 무엇인지 확인한다",
      "노드를 재부팅한다",
      "Deployment를 지운다",
    ],
    answer: 1,
    explanation:
      "finalizer가 남아 있으면 그걸 붙인 컨트롤러가 일을 마치고 지워 줘야 객체가 사라진다. finalizer를 직접 지우거나 강제 삭제하면 그 뒷정리를 건너뛰고 되돌릴 수 없다. 컨트롤러가 정말 없어졌을 때만 finalizer를 지운다.",
    anchor: "terminating에서-안-넘어간다",
  },
  {
    id: "k8s-pod-troubleshooting-6",
    post: "k8s-pod-troubleshooting",
    question: "셸이 없는 distroless 컨테이너 안에서 localhost:8080/healthz 응답을 직접 확인하고 싶다. 가장 알맞은 방법은?",
    choices: [
      "kubectl debug로 busybox 임시 컨테이너를 붙여 같은 네트워크 namespace에서 요청한다",
      "kubectl exec -it로 sh를 실행한다",
      "이미지에 curl을 넣어 다시 빌드하고 배포한다",
      "kubectl port-forward 없이는 불가능하다",
    ],
    answer: 0,
    explanation:
      "임시 컨테이너는 Pod의 네트워크 namespace를 공유하므로 localhost로 앱 포트에 닿는다. --target을 주면 앱의 프로세스도 보인다. 셸이 없는 이미지에서는 exec로 sh를 띄울 수 없고, 디버깅을 위해 이미지를 다시 만들 필요도 없다.",
    anchor: "셸이-없는-컨테이너는-kubectl-debug로-연다",
  },
];
