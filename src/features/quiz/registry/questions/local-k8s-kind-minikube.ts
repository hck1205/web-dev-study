import type { QuizQuestion } from "../types";

export const LOCAL_K8S_KIND_MINIKUBE: QuizQuestion[] = [
  {
    id: "local-k8s-kind-minikube-1",
    post: "local-k8s-kind-minikube",
    question: "kwok 클러스터에서 존재하지 않는 이미지로 만든 Pod가 Running 1/1로 나온다. 왜 그런가?",
    choices: [
      "kwok이 이미지를 캐시에서 대신 받아 왔다",
      "kubelet이 없고 kwok-controller가 Pod 상태를 Running으로 써 넣을 뿐, 이미지를 받거나 컨테이너를 띄우지 않는다",
      "스케줄러가 이미지 검사를 건너뛰도록 설정되어 있다",
      "ImagePullBackOff는 1분 뒤에야 나타난다",
    ],
    answer: 1,
    explanation:
      "kwok은 컨트롤 플레인만 진짜로 띄우고 노드와 Pod 상태는 흉내 낸다. 그래서 logs, exec, port-forward도 실패한다. 매니페스트 검증과 스케줄링은 진짜지만 앱 동작은 확인할 수 없다.",
    anchor: "running인데-아무것도-돌지-않는다",
  },
  {
    id: "local-k8s-kind-minikube-2",
    post: "local-k8s-kind-minikube",
    question: "노드 500개 클러스터에서 오퍼레이터의 재조정 루프가 API 서버를 얼마나 호출하는지 노트북에서 보고 싶다. 알맞은 도구는?",
    choices: [
      "kwok. 노드가 Node 객체일 뿐이라 수백 개도 몇 초 만에 만든다",
      "kind. 설정 파일에 worker를 500개 적는다",
      "minikube --nodes 500",
      "k3d --agents 500",
    ],
    answer: 0,
    explanation:
      "kind, minikube, k3d는 노드마다 kubelet과 컨테이너 런타임이 실제로 돌아서 노트북에서 수백 개는 무리다. kwok은 실습에서 노드 100개를 1초 안에 만들었고 전체 메모리도 650MiB 안팎이었다.",
    anchor: "노드-100개-pod-1000개를-1분-안에",
  },
  {
    id: "local-k8s-kind-minikube-3",
    post: "local-k8s-kind-minikube",
    question: "kind 클러스터에 type: LoadBalancer Service를 만들었더니 EXTERNAL-IP가 계속 <pending>이다. 이유는?",
    choices: [
      "kind는 Service를 지원하지 않는다",
      "kube-proxy가 아직 규칙을 만들지 않았다",
      "EXTERNAL-IP를 채워 줄 클라우드 컨트롤러가 없다. cloud-provider-kind나 MetalLB를 설치하거나 NodePort와 포트 매핑을 쓴다",
      "Service 포트가 1024보다 작아서다",
    ],
    answer: 2,
    explanation:
      "클라우드에서는 클라우드 컨트롤러가 로드 밸런서를 만들고 주소를 채운다. 로컬에는 그 주인이 없어 pending에 머문다. minikube는 minikube tunnel, k3d는 내장 ServiceLB로 채운다.",
    anchor: "로컬-클러스터에서-안-되는-것들",
  },
  {
    id: "local-k8s-kind-minikube-4",
    post: "local-k8s-kind-minikube",
    question: "로컬에서 docker build로 만든 shop-api:latest를 kind에 `kind load docker-image`로 넣었는데도 ErrImagePull이 난다. 무엇을 의심하나?",
    choices: [
      "kind load가 이미지를 압축만 하고 넣지 않는다",
      "latest 태그라 imagePullPolicy 기본값이 Always여서 노드의 이미지를 두고 레지스트리로 받으러 간다",
      "kind 노드는 amd64 이미지만 받는다",
      "Pod가 control-plane 노드에만 스케줄되어서다",
    ],
    answer: 1,
    explanation:
      ":latest 태그는 imagePullPolicy 기본값이 Always다. :dev처럼 다른 태그를 쓰거나 IfNotPresent를 명시하면 노드에 넣어 둔 이미지를 쓴다. kind 노드의 containerd는 내 도커와 저장소가 다르다는 점도 함께 기억한다.",
    anchor: "kind는-컨테이너를-노드로-쓴다",
  },
  {
    id: "local-k8s-kind-minikube-5",
    post: "local-k8s-kind-minikube",
    question: "로컬 클러스터에서 기본 거부 NetworkPolicy를 만들었는데 Pod끼리 여전히 통신된다. 가장 그럴듯한 원인은?",
    choices: [
      "NetworkPolicy는 네임스페이스를 새로 만들어야 적용된다",
      "kube-proxy가 정책을 늦게 반영한다",
      "로컬 클러스터는 Pod IP를 공유해서 정책이 의미가 없다",
      "정책을 지키는 건 CNI인데, 지금 CNI가 정책을 지원하지 않는다",
    ],
    answer: 3,
    explanation:
      "NetworkPolicy는 API 객체일 뿐이고 실제 차단은 CNI 플러그인이 한다. kind는 기본 CNI를 끄고 Calico나 Cilium을 넣고, minikube는 --cni로 고른다. kwok에는 데이터 플레인이 아예 없다.",
    anchor: "로컬-클러스터에서-안-되는-것들",
  },
  {
    id: "local-k8s-kind-minikube-6",
    post: "local-k8s-kind-minikube",
    question: "컨트롤러 매니저의 기본값(QPS 20, burst 30)에서 Deployment가 Pod 1000개를 만드는 데 대략 몇 초가 걸리나?",
    choices: ["약 5초", "약 33초", "약 48.5초", "약 100초"],
    answer: 2,
    explanation:
      "처음 burst 30개는 바로 나가고 나머지 970개가 초당 20개씩 나가서 (1000 − 30) / 20 = 48.5초다. kwok 실측 50.6초는 여기에 상태 확인 간격이 붙은 값이다.",
    anchor: "노드-100개-pod-1000개를-1분-안에",
  },
];
