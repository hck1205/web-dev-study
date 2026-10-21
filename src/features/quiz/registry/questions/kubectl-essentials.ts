import type { QuizQuestion } from "../types";

export const KUBECTL_ESSENTIALS: QuizQuestion[] = [
  {
    id: "kubectl-essentials-1",
    post: "kubectl-essentials",
    question: "kubectl get은 되는데 kubectl logs와 exec만 i/o timeout으로 실패한다. 먼저 의심할 곳은?",
    choices: [
      "kubeconfig의 현재 컨텍스트가 틀렸다",
      "RBAC에 pods 조회 권한이 없다",
      "API 서버에서 노드의 kubelet(10250)으로 가는 네트워크가 막혔다",
      "etcd가 응답하지 않는다",
    ],
    answer: 2,
    explanation:
      "get은 API 서버의 기록만 읽지만 logs와 exec는 API 서버가 노드의 kubelet으로 요청을 넘겨야 한다. 권한 문제라면 Forbidden이 나오고, 타임아웃이면 컨트롤 플레인에서 노드 10250으로 가는 길을 본다.",
    anchor: "logs-exec-port-forward는-노드까지-간다",
  },
  {
    id: "kubectl-essentials-2",
    post: "kubectl-essentials",
    question: "kubectl port-forward svc/api 18080:80으로 요청이 잘 됐다. 이것으로 확인된 것은?",
    choices: [
      "Service 뒤의 모든 Pod가 정상이다",
      "Service가 고른 Pod 중 하나가 이 요청에 정상 응답한다",
      "Service의 ClusterIP와 kube-proxy 규칙이 정상이다",
      "로드 밸런싱이 고르게 된다",
    ],
    answer: 1,
    explanation:
      "port-forward는 Service의 셀렉터로 Pod 하나를 골라 그 Pod에 직접 스트림을 연다. ClusterIP와 엔드포인트, 로드 밸런싱은 거치지 않으니 Pod 하나의 응답만 확인된 것이다.",
    anchor: "port-forward는-pod-하나에-붙는다",
  },
  {
    id: "kubectl-essentials-3",
    post: "kubectl-essentials",
    question: "에러가 Pod 하나에서만 나는데 kubectl logs deploy/api로 보니 에러가 없다. 왜 그럴 수 있나?",
    choices: [
      "deploy/api는 Pod 하나만 골라 보여 주기 때문에",
      "Deployment 로그는 따로 저장되기 때문에",
      "--tail 기본값이 0이라서",
      "로그는 ReplicaSet 단위로만 볼 수 있어서",
    ],
    answer: 0,
    explanation:
      "상위 객체 이름으로 logs를 치면 kubectl이 Found 3 pods, using pod/...처럼 하나를 골라 보여 준다. 여러 Pod를 함께 보려면 -l app=api --prefix로 라벨로 묻는다.",
    anchor: "logs-exec-port-forward는-노드까지-간다",
  },
  {
    id: "kubectl-essentials-4",
    post: "kubectl-essentials",
    question: "스크립트에서 kubectl get -o jsonpath로 받은 값이 비어 있었는데 종료 코드는 0이었다. 가장 그럴듯한 원인은?",
    choices: [
      "API 서버가 일시적으로 빈 목록을 돌려줬다",
      "jsonpath에서 필드 이름을 틀렸다",
      "kubectl 버전이 서버보다 높다",
      "출력이 표 형식이라 잘렸다",
    ],
    answer: 1,
    explanation:
      "jsonpath는 없는 필드를 만나도 에러 없이 빈 값을 낸다. 그래서 스크립트에서는 값이 비었는지 따로 확인하고, 표현식은 작은따옴표로 감싸 셸 해석을 막는다.",
    anchor: "칸을-고르는-출력-옵션",
  },
  {
    id: "kubectl-essentials-5",
    post: "kubectl-essentials",
    question: "Pod가 ImagePullBackOff 상태다. 다음에 볼 것으로 가장 알맞은 것은?",
    choices: [
      "kubectl logs로 앱 로그를 본다",
      "kubectl exec로 들어가 이미지를 확인한다",
      "kubectl port-forward로 응답을 확인한다",
      "kubectl describe의 Events를 본다",
    ],
    answer: 3,
    explanation:
      "컨테이너가 시작되지 않았으니 로그도 없고 exec할 프로세스도 없다. 뜨지 못한 Pod는 스케줄러와 kubelet이 남긴 이벤트가 이유를 알려 준다.",
    anchor: "장애-때-치는-순서",
  },
  {
    id: "kubectl-essentials-6",
    post: "kubectl-essentials",
    question: "kubectl get pods --watch를 -v=6으로 보면 요청이 두 개 보인다. 두 번째 요청의 역할은?",
    choices: [
      "첫 목록의 resourceVersion 이후 변화만 스트림으로 받는다",
      "첫 목록을 다시 받아 비교한다",
      "Pod마다 따로 상태를 묻는다",
      "이벤트 객체를 읽는다",
    ],
    answer: 0,
    explanation:
      "watch는 목록을 한 번 받고, 그 응답의 resourceVersion을 붙여 watch=true 요청을 연다. 그 뒤로 ADDED, MODIFIED, DELETED 이벤트를 받아 목록을 고친다.",
    anchor: "--watch로-바뀌는-순간을-본다",
  },
];
