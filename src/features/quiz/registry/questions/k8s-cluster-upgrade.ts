import type { QuizQuestion } from "../types";

export const K8S_CLUSTER_UPGRADE: QuizQuestion[] = [
  {
    id: "k8s-cluster-upgrade-1",
    post: "k8s-cluster-upgrade",
    question: "단일 컨트롤 플레인 클러스터를 1.34에서 1.37로 바로 올리면 안 되는 가장 근본적인 이유는?",
    choices: [
      "kubeadm 패키지 저장소가 마이너마다 달라서",
      "API 폐기와 저장 형식 이동이 한 마이너씩 단계적으로 일어나서, 중간 단계를 건너뛴 데이터를 새 API 서버가 읽어야 하기 때문",
      "kubelet이 새 버전을 받아들이지 못해서",
      "etcd가 두 마이너 이상 차이 나면 데이터를 지워서",
    ],
    answer: 1,
    explanation:
      "옛 API 버전을 지우기 전에 중간 릴리스가 새 버전으로 저장하도록 옮겨 두기 때문에 API 서버는 한 칸씩 가야 한다. 저장소 주소 문제는 불편일 뿐이고, kubelet은 오히려 3 마이너까지 뒤처져도 된다.",
    anchor: "한-번에-한-마이너씩만-올라가는-이유",
  },
  {
    id: "k8s-cluster-upgrade-2",
    post: "k8s-cluster-upgrade",
    question: "kube-apiserver가 모두 1.37일 때 허용되지 않는 조합은?",
    choices: [
      "kubelet 1.34",
      "kubectl 1.38",
      "kube-scheduler 1.36",
      "kube-controller-manager 1.35",
    ],
    answer: 3,
    explanation:
      "controller-manager와 scheduler는 API 서버보다 1 마이너까지만 뒤처질 수 있어 1.35는 범위 밖이다. kubelet은 3 뒤까지, kubectl은 위아래 1까지 허용된다.",
    anchor: "누가-누구보다-앞서면-안-되나",
  },
  {
    id: "k8s-cluster-upgrade-3",
    post: "k8s-cluster-upgrade",
    question: "HA 컨트롤 플레인 셋 중 하나만 1.37로 올린 상태에서 워커 노드의 kubelet을 1.37로 올리면 왜 문제인가?",
    choices: [
      "로드 밸런서가 1.36 API 서버로 보내면 kubelet이 API 서버보다 새 상태가 되기 때문",
      "kubelet과 API 서버가 같은 버전이면 인증서가 충돌하기 때문",
      "1.37 kubelet은 HA 클러스터를 지원하지 않기 때문",
      "API 서버가 그 노드의 등록을 거절하기 때문",
    ],
    answer: 0,
    explanation:
      "API 서버가 섞여 있는 동안에는 가장 옛 API 서버가 기준이라 kubelet은 1.36보다 새면 안 된다. API 서버는 새 kubelet의 등록을 막지 않으니 규칙은 사람이 지켜야 한다.",
    anchor: "ha-클러스터에서는-범위가-더-좁아진다",
  },
  {
    id: "k8s-cluster-upgrade-4",
    post: "k8s-cluster-upgrade",
    question: "노드 kubelet을 1.34에 둔 채 컨트롤 플레인만 1.35, 1.36, 1.37로 올렸다. 다음에 1.38로 가려면?",
    choices: [
      "그대로 컨트롤 플레인을 1.38로 올리면 된다",
      "kubectl만 1.38로 올리면 된다",
      "노드를 먼저 1.35 이상으로 올려야 한다",
      "etcd를 먼저 다운그레이드해야 한다",
    ],
    answer: 2,
    explanation:
      "kubelet은 API 서버보다 3 마이너까지만 뒤처질 수 있다. 1.38 API 서버에 1.34 kubelet은 4 차이라 규칙 밖이므로 노드부터 올려야 한다. 문서도 노드가 계속 3 뒤에 머물면 컨트롤 플레인을 더 못 올린다고 경고한다.",
    anchor: "올리는-순서는-규칙에서-나온다",
  },
  {
    id: "k8s-cluster-upgrade-5",
    post: "k8s-cluster-upgrade",
    question: "kubeadm upgrade plan 출력의 맨 위 표(Components that must be upgraded manually)에 나오는 것은?",
    choices: [
      "kubeadm이 apply 때 자동으로 올리는 etcd와 API 서버",
      "kubeadm이 대신 올려 주지 않아 노드마다 패키지로 올려야 하는 kubelet",
      "사라질 예정인 API 목록",
      "실패한 사전 점검 항목",
    ],
    answer: 1,
    explanation:
      "kubeadm은 컨트롤 플레인 스태틱 Pod와 애드온은 올리지만 kubelet 패키지는 건드리지 않는다. 그래서 노드마다 drain, kubeadm upgrade node, 패키지 설치, kubelet 재시작, uncordon을 따로 한다.",
    anchor: "kubeadm-upgrade-plan이-보여-주는-것",
  },
  {
    id: "k8s-cluster-upgrade-6",
    post: "k8s-cluster-upgrade",
    question: "EKS 관리형 노드 그룹 업데이트가 PodEvictionFailure로 실패했다. 가장 먼저 확인할 것은?",
    choices: [
      "새 AMI의 커널 버전",
      "계정의 EC2 인스턴스 한도",
      "kubectl 버전",
      "허용 수가 0인 PDB나 같은 Pod를 고르는 PDB 여럿",
    ],
    answer: 3,
    explanation:
      "EKS는 옛 노드를 eviction으로 비우고 15분 안에 못 비우면 PodEvictionFailure로 멈춘다. 대표 원인은 지나치게 엄격한 PDB다. EC2 한도나 용량 문제는 새 노드를 못 띄우는 NodeCreationFailure 쪽이다.",
    anchor: "관리형-클러스터는-노드를-갈아-끼운다",
  },
  {
    id: "k8s-cluster-upgrade-7",
    post: "k8s-cluster-upgrade",
    question: "kubeadm으로 1.37에 올린 뒤 일주일 지나 문제가 생겼다. 1.36 시점으로 확실히 돌아가는 방법은?",
    choices: [
      "kubeadm upgrade apply v1.36.5를 실행한다",
      "/etc/kubernetes/tmp의 백업 매니페스트를 그대로 복사한다",
      "업그레이드 직전에 떠 둔 etcd 스냅숏으로 복원하고, 그 사이 변경은 잃는다",
      "kubelet만 1.36으로 내린다",
    ],
    answer: 2,
    explanation:
      "컨트롤 플레인 다운그레이드는 공식 절차가 없다. 새 API 서버가 etcd에 쓴 데이터를 옛 버전이 이해한다는 보장이 없기 때문이다. /etc/kubernetes/tmp 백업은 apply 도중 실패했을 때의 자동 롤백용이다.",
    anchor: "되돌리기는-생각보다-좁다",
  },
];
