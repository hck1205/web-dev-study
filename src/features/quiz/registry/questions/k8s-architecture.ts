import type { QuizQuestion } from "../types";

export const K8S_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "k8s-architecture-1",
    post: "k8s-architecture",
    question: "쿠버네티스 부품 중 etcd에 직접 읽고 쓰는 것은?",
    choices: [
      "kube-scheduler와 kube-controller-manager",
      "모든 노드의 kubelet",
      "kube-apiserver 하나뿐",
      "kube-proxy",
    ],
    answer: 2,
    explanation:
      "etcd에 닿는 부품은 API 서버뿐이다. 스케줄러, 컨트롤러, kubelet은 모두 API 서버를 통해 오브젝트를 watch하고 고친다. 그래서 검증과 권한 확인이 한곳에서 이뤄지고, 부품끼리 서로를 부르지 않아도 된다.",
    anchor: "모든-부품은-api-서버하고만-이야기한다",
  },
  {
    id: "k8s-architecture-2",
    post: "k8s-architecture",
    question: "CI에서 kubectl apply가 'created'를 찍고 성공했다. 이것만으로 알 수 있는 것은?",
    choices: [
      "Pod가 모두 Running이 됐다",
      "오브젝트가 검증을 통과해 etcd에 저장됐다",
      "스케줄러가 노드를 정했다",
      "이미지가 노드에 내려받아졌다",
    ],
    answer: 1,
    explanation:
      "apply는 API 서버가 저장하고 201을 돌려주면 끝난다. ReplicaSet, Pod, 노드 배정, 컨테이너 기동은 그 뒤 각 부품이 따로 한다. 컨트롤러 매니저를 멈춘 실습에서도 created는 나왔지만 ReplicaSet이 생기지 않았으니, 배포 완료는 rollout status로 기다려야 한다.",
    anchor: "부품을-하나씩-멈춰-보면",
  },
  {
    id: "k8s-architecture-3",
    post: "k8s-architecture",
    question: "새 Pod가 Pending이고 NODE가 비어 있으며 이벤트가 하나도 없다. 가장 먼저 의심할 것은?",
    choices: [
      "스케줄러가 죽었거나 Pod의 schedulerName이 없는 스케줄러를 가리킨다",
      "노드의 CPU가 모자라다",
      "이미지 이름에 오타가 있다",
      "kube-proxy 규칙이 깨졌다",
    ],
    answer: 0,
    explanation:
      "자원이 모자라 못 가는 경우라면 스케줄러가 FailedScheduling 이벤트를 남긴다. 이벤트조차 없다는 건 스케줄러가 그 Pod를 보지 못했다는 뜻이다. 이미지 문제는 노드가 정해진 뒤 kubelet 단계에서 나온다.",
    anchor: "부품을-하나씩-멈춰-보면",
  },
  {
    id: "k8s-architecture-4",
    post: "k8s-architecture",
    question: "watch로 본 새 Pod가 rv 567(노드 없음) → 569(노드 정해짐) → 574(Running)로 바뀌었다. 569와 574를 쓴 부품은 차례로?",
    choices: [
      "ReplicaSet 컨트롤러, 스케줄러",
      "API 서버, etcd",
      "kubelet, 스케줄러",
      "스케줄러, 노드의 kubelet",
    ],
    answer: 3,
    explanation:
      "스케줄러가 binding으로 nodeName을 채우고, 그 노드의 kubelet이 컨테이너를 띄운 뒤 status를 Running으로 고친다. 같은 오브젝트를 여러 부품이 고쳐도 resourceVersion을 조건으로 보내니 서로의 변경을 덮어쓰지 않는다.",
    anchor: "watch-하나로-상태가-흘러간다",
  },
  {
    id: "k8s-architecture-5",
    post: "k8s-architecture",
    question: "etcd를 3대에서 4대로 늘리면 어떻게 되나?",
    choices: [
      "두 대까지 잃어도 쓰기가 된다",
      "견딜 수 있는 장애 수는 한 대 그대로이고 과반만 커진다",
      "읽기 성능만 두 배가 된다",
      "리더가 두 개가 되어 쓰기가 빨라진다",
    ],
    answer: 1,
    explanation:
      "과반이 3대일 때 2, 4대일 때 3이라 둘 다 한 대까지만 잃어도 된다. 짝수로 늘리면 쓰기마다 동의해야 할 수만 늘어나니 3대나 5대처럼 홀수로 둔다.",
    anchor: "etcd에는-무엇이-어떻게-들어-있나",
  },
  {
    id: "k8s-architecture-6",
    post: "k8s-architecture",
    question: "노드의 kubelet 하트비트가 끊겨 노드가 NotReady가 됐다. 그 위 Pod의 kubectl get pods 출력은 어떻게 보이나?",
    choices: [
      "STATUS가 바로 Terminating으로 바뀐다",
      "STATUS가 Unknown으로 바뀌고 Pod가 즉시 다른 노드에서 다시 뜬다",
      "마지막 보고값인 Running이 그대로 보이지만 Ready 조건은 False가 된다",
      "Pod가 목록에서 사라진다",
    ],
    answer: 2,
    explanation:
      "상태를 보고할 kubelet이 말이 없으니 API 서버는 마지막 값을 들고 있다. 노드 컨트롤러가 Ready 조건만 False로 바꿔 엔드포인트에서 뺀다. Pod는 기본 300초 toleration이 지난 뒤에야 쫓겨나고 다른 노드에 새로 만들어진다.",
    anchor: "리더는-lease-하나로-정한다",
  },
  {
    id: "k8s-architecture-7",
    post: "k8s-architecture",
    question: "직접 세운 클러스터에서 LoadBalancer Service의 EXTERNAL-IP가 계속 pending이다. 이유는?",
    choices: [
      "kube-proxy가 NodePort 규칙을 만들지 못해서",
      "로드 밸런서를 실제로 만들 cloud-controller-manager나 그 역할의 컨트롤러가 없어서",
      "Service에 셀렉터가 없어서",
      "etcd가 Service를 저장하지 못해서",
    ],
    answer: 1,
    explanation:
      "Service 오브젝트와 NodePort, kube-proxy 규칙은 다 만들어지지만 클라우드에 로드 밸런서를 요청하는 건 cloud-controller-manager의 몫이다. 온프레미스에서는 MetalLB 같은 컨트롤러를 넣거나 Ingress와 NodePort로 우회한다.",
    anchor: "cloud-controller-manager가-없으면-생기는-일",
  },
];
