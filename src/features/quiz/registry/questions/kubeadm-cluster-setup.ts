import type { QuizQuestion } from "../types";

export const KUBEADM_CLUSTER_SETUP: QuizQuestion[] = [
  {
    id: "kubeadm-cluster-setup-1",
    post: "kubeadm-cluster-setup",
    question: "kubeadm init은 API 서버가 아직 없는데도 API 서버를 포함한 컨트롤 플레인을 띄운다. 어떻게 가능할까?",
    choices: [
      "kubeadm이 API 서버 프로세스를 직접 fork해서 띄운다",
      "containerd가 /etc/kubernetes/pki의 인증서를 보고 알아서 띄운다",
      "kubelet이 /etc/kubernetes/manifests의 static Pod 매니페스트를 보고 직접 띄운다",
      "임시 API 서버를 띄웠다가 진짜 API 서버로 교체한다",
    ],
    answer: 2,
    explanation:
      "kubeadm은 etcd, API 서버, 컨트롤러 매니저, 스케줄러를 static Pod 매니페스트로 디렉터리에 놓기만 한다. kubelet이 그 디렉터리를 지켜보다가 API 서버 없이도 Pod를 직접 띄운다. kubeadm이 프로세스를 직접 실행하지는 않는다.",
    anchor: "init이-하는-일을-dry-run으로-본다",
  },
  {
    id: "kubeadm-cluster-setup-2",
    post: "kubeadm-cluster-setup",
    question: "init이 끝났는데 노드가 NotReady이고 CoreDNS Pod가 Pending에 머문다. 가장 흔한 원인은?",
    choices: [
      "CNI 플러그인을 아직 설치하지 않았다",
      "부트스트랩 토큰이 만료됐다",
      "admin.conf를 홈 디렉터리에 복사하지 않았다",
      "control-plane taint 때문에 CoreDNS가 갈 곳이 없다",
    ],
    answer: 0,
    explanation:
      "kubeadm은 Pod 네트워크를 설치하지 않는다. Calico, Cilium 같은 CNI를 올리기 전까지 노드는 NotReady이고 CoreDNS는 Pending이다. admin.conf 복사는 kubectl을 쓰기 위한 일이라 노드 상태와는 상관없다.",
    anchor: "init이-끝나면-할-일",
  },
  {
    id: "kubeadm-cluster-setup-3",
    post: "kubeadm-cluster-setup",
    question: "kubeadm join의 --discovery-token-ca-cert-hash는 무엇을 막으려고 있나?",
    choices: [
      "토큰이 24시간 넘게 쓰이는 것",
      "새 노드가 가짜 API 서버를 진짜 클러스터로 믿고 자격 증명을 넘기는 것",
      "같은 노드가 두 번 등록되는 것",
      "워커가 컨트롤 플레인으로 잘못 붙는 것",
    ],
    answer: 1,
    explanation:
      "새 노드는 아직 클러스터 CA를 모르기 때문에, cluster-info로 받은 CA 공개 키의 SHA-256을 이 해시와 비교해 진짜 클러스터인지 확인한다. 토큰은 반대로 노드가 들어와도 된다는 걸 API 서버에 증명한다. 해시 검사를 건너뛰는 옵션은 이름부터 unsafe다.",
    anchor: "워커는-토큰-하나로-들어온다",
  },
  {
    id: "kubeadm-cluster-setup-4",
    post: "kubeadm-cluster-setup",
    question: "첫 컨트롤 플레인을 --upload-certs로 init하고 다음 날 cp2를 --control-plane --certificate-key로 붙이려 했더니 실패했다. 이유와 해결은?",
    choices: [
      "certificate-key는 한 번 쓰면 사라지므로 cp1을 다시 init해야 한다",
      "control-plane-endpoint가 바뀌었으므로 인증서를 다시 찍어야 한다",
      "kubeadm-certs Secret이 2시간 뒤 지워졌으므로 cp1에서 init phase upload-certs로 다시 올리고 새 키를 받는다",
      "etcd 멤버가 짝수가 되므로 cp3을 먼저 붙여야 한다",
    ],
    answer: 2,
    explanation:
      "CA 키가 담긴 kubeadm-certs Secret은 오래 남지 않도록 2시간 뒤 지워진다. dry-run에서도 이 수명을 관리하는 토큰의 만료가 정확히 2시간 뒤로 잡혔다. 늦었다면 upload-certs 단계만 다시 돌려 새 키를 받으면 된다.",
    anchor: "컨트롤-플레인을-세-대로",
  },
  {
    id: "kubeadm-cluster-setup-5",
    post: "kubeadm-cluster-setup",
    question: "etcd 멤버를 3대에서 4대로 늘리면 버틸 수 있는 장애 수는 어떻게 되나?",
    choices: [
      "1대에서 2대로 늘어난다",
      "그대로 1대다. 과반이 2에서 3으로 올라가기 때문이다",
      "0대로 줄어든다. 짝수는 리더를 뽑지 못한다",
      "4대 모두 살아 있어야 쓰기가 된다",
    ],
    answer: 1,
    explanation:
      "과반은 floor(n/2)+1이라 4대의 과반은 3이고, 1대까지만 꺼져도 된다. 3대와 버티는 수는 같은데 고장 날 서버만 하나 많아진다. 짝수라고 리더를 못 뽑는 건 아니지만 이득이 없어서 홀수로 둔다.",
    anchor: "stacked-etcd와-외부-etcd",
  },
  {
    id: "kubeadm-cluster-setup-6",
    post: "kubeadm-cluster-setup",
    question: "stacked etcd 3대 클러스터에서 컨트롤 플레인 하나가 디스크 고장으로 죽어 kubeadm reset을 돌리지 못했다. 그 노드를 그냥 버려 두면 어떤 위험이 있나?",
    choices: [
      "죽은 노드의 Pod가 영원히 Running으로 보인다",
      "API 서버 인증서가 즉시 만료된다",
      "etcd가 죽은 멤버를 계속 셈에 넣어, 한 대가 더 죽으면 과반을 잃는다",
      "kubelet이 다른 노드로 static Pod를 옮겨 띄운다",
    ],
    answer: 2,
    explanation:
      "reset은 자기 etcd 멤버를 클러스터에서 지우는 단계를 포함하지만, 노드가 죽으면 그 단계가 돌지 않는다. 남은 노드에서 etcdctl member remove로 지우지 않으면 멤버 수는 여전히 3이라, 하나가 더 죽는 순간 1/3만 남아 쓰기가 멈춘다.",
    anchor: "노드를-빼는-순서",
  },
  {
    id: "kubeadm-cluster-setup-7",
    post: "kubeadm-cluster-setup",
    question: "EKS 같은 관리형 서비스를 써도 사용자에게 남는 일은?",
    choices: [
      "etcd 스냅숏을 직접 뜨는 일",
      "API 서버 앞 로드 밸런서를 구성하는 일",
      "컨트롤 플레인 인증서를 1년마다 갱신하는 일",
      "노드와 CNI·CoreDNS 같은 애드온 버전을 지원 기간 안에 따라가는 일",
    ],
    answer: 3,
    explanation:
      "관리형 서비스는 컨트롤 플레인 가용성, 인증서, etcd 백업, 앞단 로드 밸런서를 맡는다. 노드, 애드온 버전, 노드 업그레이드와 그 위의 워크로드는 여전히 사용자 몫이다.",
    anchor: "관리형-서비스가-대신-맡는-것",
  },
];
