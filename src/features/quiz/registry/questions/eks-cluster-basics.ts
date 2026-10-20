import type { QuizQuestion } from "../types";

export const EKS_CLUSTER_BASICS: QuizQuestion[] = [
  {
    id: "eks-cluster-basics-1",
    post: "eks-cluster-basics",
    question: "IAM AdministratorAccess를 가진 동료가 kubectl에서 Unauthorized(401)를 받는다. 가장 먼저 볼 것은?",
    choices: [
      "노드 보안 그룹의 10250 포트",
      "그 IAM 주체가 클러스터의 access entry(또는 aws-auth)에 등록돼 있는지",
      "vpc-cni 애드온 버전",
      "서브넷의 남은 IP 수",
    ],
    answer: 1,
    explanation:
      "IAM 권한은 AWS API 권한이고, 쿠버네티스 안의 신원과 권한은 access entry가 따로 준다. 등록이 없으면 401, 등록은 있는데 권한 범위가 모자라면 403이다.",
    anchor: "kubectl이-iam으로-로그인하는-길",
  },
  {
    id: "eks-cluster-basics-2",
    post: "eks-cluster-basics",
    question: "aws eks get-token이 만드는 토큰의 정체는?",
    choices: [
      "IAM 비밀 키를 base64로 감싼 값",
      "클러스터가 발급한 서비스 어카운트 JWT",
      "STS GetCallerIdentity를 부르는 미리 서명된 URL",
      "kubeconfig에 저장된 고정 비밀번호",
    ],
    answer: 2,
    explanation:
      "토큰을 풀면 클러스터 이름까지 서명에 넣은 STS 주소가 나온다. API 서버가 이 주소를 대신 호출해 IAM ARN을 알아내고, 토큰은 15분만 유효하다. 비밀 키는 들어 있지 않다.",
    anchor: "kubectl이-iam으로-로그인하는-길",
  },
  {
    id: "eks-cluster-basics-3",
    post: "eks-cluster-basics",
    question: "kubectl get은 되는데 kubectl logs와 exec만 timeout이 난다. 의심할 곳은?",
    choices: [
      "컨트롤 플레인에서 EKS ENI를 거쳐 노드 kubelet(10250)으로 오는 길을 노드 보안 그룹이 막았다",
      "access entry가 없다",
      "서브넷 IP가 바닥났다",
      "토큰이 만료됐다",
    ],
    answer: 0,
    explanation:
      "get은 API 서버까지만 가지만 logs, exec, port-forward는 API 서버가 노드의 kubelet에 붙는다. 이 연결은 반대 방향이라 노드 보안 그룹이 클러스터 보안 그룹에서 오는 10250을 받아야 한다.",
    anchor: "컨트롤-플레인은-aws-계정에-있다",
  },
  {
    id: "eks-cluster-basics-4",
    post: "eks-cluster-basics",
    question: "노드 CPU와 메모리가 남는데 Pod가 ContainerCreating에서 failed to assign an IP address로 멈춘다. 왜 이런 일이 생기나?",
    choices: [
      "CoreDNS가 Pod 이름을 못 풀어서",
      "Pod가 서브넷의 실제 IP를 쓰고, warm pool이 Pod 수보다 많은 주소를 미리 가져가 서브넷이 먼저 바닥나서",
      "kube-proxy가 iptables 규칙을 못 만들어서",
      "Pod Identity 에이전트가 없어서",
    ],
    answer: 1,
    explanation:
      "VPC CNI는 노드 ENI의 보조 IP를 Pod에 준다. 기본 WARM_ENI_TARGET=1은 ENI 하나만큼의 IP를 더 쥐고 있어서 서브넷 주소가 빨리 준다. 접두사 위임, WARM_IP_TARGET 조정, 보조 CIDR로 푼다.",
    anchor: "서브넷-ip가-먼저-바닥난다",
  },
  {
    id: "eks-cluster-basics-5",
    post: "eks-cluster-basics",
    question: "EKS Pod Identity가 IRSA보다 클러스터를 바꿀 때 편한 이유는?",
    choices: [
      "자격 증명이 만료되지 않아서",
      "노드 IAM 역할을 그대로 쓰기 때문에",
      "Fargate에서만 동작해서",
      "역할 신뢰 정책이 pods.eks.amazonaws.com만 믿고, 클러스터와 ServiceAccount의 연결은 EKS API로 따로 정해서",
    ],
    answer: 3,
    explanation:
      "IRSA는 신뢰 정책에 클러스터의 OIDC 주소가 박혀 클러스터를 새로 만들면 역할마다 고쳐야 한다. Pod Identity는 연결만 새로 만들면 된다. Fargate나 EKS 밖 클러스터에는 여전히 IRSA를 쓴다.",
    anchor: "pod에-aws-권한-주기",
  },
  {
    id: "eks-cluster-basics-6",
    post: "eks-cluster-basics",
    question: "vpc-cni 애드온을 노드 그룹보다 먼저(before_compute) 까는 이유는?",
    choices: [
      "노드가 Pod에 IP를 줄 수 있어야 Ready가 되기 때문에",
      "애드온 요금을 줄이려고",
      "CoreDNS가 vpc-cni 안에 들어 있어서",
      "access entry가 vpc-cni에 저장되어서",
    ],
    answer: 0,
    explanation:
      "CNI가 없는 노드는 Pod 네트워크를 만들 수 없어 NotReady로 남는다. 반대로 coredns는 돌 노드가 있어야 뜨니 노드 뒤에 깐다.",
    anchor: "애드온도-버전이-있다",
  },
  {
    id: "eks-cluster-basics-7",
    post: "eks-cluster-basics",
    question: "관리형 노드 그룹 업데이트가 PodEvictionFailure로 실패했다. 먼저 볼 것은?",
    choices: [
      "서브넷 라우트 테이블",
      "kubeconfig의 exec 설정",
      "ALLOWED DISRUPTIONS가 0인 PodDisruptionBudget",
      "S3 state 잠금",
    ],
    answer: 2,
    explanation:
      "롤링 교체는 옛 노드를 drain하면서 PDB를 지킨다. PDB가 Pod를 하나도 못 빼게 막으면 노드를 비우지 못하고 업데이트가 실패한다. kubectl get pdb -A로 찾는다.",
    anchor: "eks에서-막히는-순간",
  },
];
