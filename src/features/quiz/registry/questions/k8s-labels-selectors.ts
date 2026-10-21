import type { QuizQuestion } from "../types";

export const K8S_LABELS_SELECTORS: QuizQuestion[] = [
  {
    id: "k8s-labels-selectors-1",
    post: "k8s-labels-selectors",
    question: "kubectl get pods -l 'tier!=api' 결과에 tier 라벨이 아예 없는 다른 앱의 Pod가 섞여 나왔다. 왜인가?",
    choices: [
      "kubectl이 라벨이 없는 Pod를 기본으로 함께 보여 줘서",
      "!=는 그 키가 없거나 값이 다른 객체를 모두 고르기 때문에",
      "라벨 셀렉터가 대소문자를 구분하지 않아서",
      "tier 라벨이 네임스페이스에서 상속돼서",
    ],
    answer: 1,
    explanation:
      "등호 기반의 !=와 집합 기반의 notin은 키가 없는 객체도 통과시킨다. 그래서 의도한 범위로 좁히려면 app=shop 같은 긍정 조건을 함께 건다. 이 셀렉터로 delete를 하면 남의 Pod까지 지워진다.",
    anchor: "같다와-다르다로-고르기",
  },
  {
    id: "k8s-labels-selectors-2",
    post: "k8s-labels-selectors",
    question: "주문 API 요청 일부만 connection refused로 실패하고 앱 로그에는 흔적이 없다. 가장 먼저 볼 것은?",
    choices: [
      "Service 셀렉터와 EndpointSlice에 들어간 Pod 이름",
      "Deployment의 revisionHistoryLimit",
      "노드의 커널 버전",
      "ConfigMap의 resourceVersion",
    ],
    answer: 0,
    explanation:
      "셀렉터가 넓으면 같은 앱 라벨을 단 캐시나 스테이징 Pod까지 엔드포인트에 들어가 요청 일부가 엉뚱한 곳으로 간다. EndpointSlice의 targetRef 이름을 뽑아 보고 그 셀렉터로 Pod 라벨을 비교하면 누가 끼어들었는지 보인다.",
    anchor: "service는-셀렉터로-엔드포인트를-만든다",
  },
  {
    id: "k8s-labels-selectors-3",
    post: "k8s-labels-selectors",
    question: "app=worker 라벨로 손으로 띄운 Pod 세 개 중 둘이 갑자기 사라졌다. 같은 네임스페이스에 무엇이 생겼을 가능성이 크나?",
    choices: [
      "app=worker 라벨을 고르는 NetworkPolicy",
      "app=worker를 셀렉터로 쓰는 Service",
      "셀렉터가 app=worker이고 replicas가 1인 ReplicaSet",
      "app=worker 라벨이 붙은 ConfigMap",
    ],
    answer: 2,
    explanation:
      "ReplicaSet은 셀렉터에 맞고 controller 주인이 없는 Pod를 입양한 뒤 replicas에 맞춰 넘치는 것을 지운다. 이벤트에 Deleted pod 메시지가 남는다. Service와 NetworkPolicy는 고르기만 하고 Pod 수를 바꾸지 않는다.",
    anchor: "셀렉터가-남의-pod를-고르면",
  },
  {
    id: "k8s-labels-selectors-4",
    post: "k8s-labels-selectors",
    question: "셀렉터가 app=web으로 같은 Deployment 둘 중 하나를 --cascade=orphan으로 지웠다. 남은 ReplicaSet의 Pod가 모두 내려간 이유는?",
    choices: [
      "orphan 삭제가 결국 background 삭제와 같아서",
      "가비지 컬렉터가 주인 없는 ReplicaSet을 지워서",
      "Service가 엔드포인트를 비워서",
      "셀렉터가 같은 다른 Deployment가 주인 없는 ReplicaSet을 입양해 옛 리비전으로 보고 0으로 줄여서",
    ],
    answer: 3,
    explanation:
      "주인을 잃은 ReplicaSet의 라벨이 다른 Deployment의 셀렉터에 맞으면 그 Deployment가 입양한다. 템플릿이 다르니 옛 리비전으로 보고 0으로 내린다. 셀렉터를 앱마다 유일하게 지어야 하는 이유다.",
    anchor: "셀렉터가-남의-pod를-고르면",
  },
  {
    id: "k8s-labels-selectors-5",
    post: "k8s-labels-selectors",
    question: "Deployment 셀렉터에 넣기에 가장 알맞은 라벨 조합은?",
    choices: [
      "app.kubernetes.io/name과 app.kubernetes.io/instance",
      "app.kubernetes.io/version과 커밋 해시",
      "app.kubernetes.io/managed-by 하나",
      "track(canary/stable)과 version",
    ],
    answer: 0,
    explanation:
      "셀렉터는 만든 뒤 바꿀 수 없으니 바뀌지 않으면서 그 설치본을 유일하게 가리키는 라벨만 넣는다. name과 instance가 그 조합이고 Helm 기본 차트도 이 둘을 셀렉터에 쓴다. 버전이나 트랙은 배포마다 바뀌니 템플릿 라벨에만 둔다.",
    anchor: "권장-라벨-appkubernetesio",
  },
  {
    id: "k8s-labels-selectors-6",
    post: "k8s-labels-selectors",
    question: "kubectl get pods --field-selector metadata.labels.app=shop 이 field label not supported 에러를 낸다. 이유는?",
    choices: [
      "필드 셀렉터는 != 만 지원해서",
      "필드 셀렉터는 종류마다 서버가 정한 필드만 쓸 수 있고 라벨은 그 대상이 아니어서",
      "필드 셀렉터는 -A와 함께 써야 해서",
      "Pod는 필드 셀렉터를 전혀 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "필드 셀렉터는 metadata.name, metadata.namespace와 종류별로 정해진 몇 개 필드(Pod는 spec.nodeName, status.phase 등)만 된다. 라벨로 거를 때는 -l을 쓴다. Pod도 필드 셀렉터를 지원하고 연산자는 =, ==, != 이다.",
    anchor: "필드-셀렉터",
  },
];
