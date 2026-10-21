import type { QuizQuestion } from "../types";

export const K8S_LEARNING_ROADMAP: QuizQuestion[] = [
  {
    id: "k8s-learning-roadmap-1",
    post: "k8s-learning-roadmap",
    question: "kubectl apply가 성공했다는 응답은 어느 시점에 돌아오나?",
    choices: [
      "Pod가 Running이 된 뒤",
      "스케줄러가 노드를 정한 뒤",
      "API 서버가 검사를 마치고 etcd에 저장한 뒤",
      "EndpointSlice에 Pod 주소가 오른 뒤",
    ],
    answer: 2,
    explanation:
      "apply의 응답은 원하는 상태가 etcd에 저장되는 순간 끝난다. 그 뒤의 ReplicaSet 생성, 스케줄링, 컨테이너 실행은 모두 비동기다. 그래서 apply가 됐는데 안 뜬다면 그 뒤 어느 부품에서 멈췄는지 이벤트로 찾는다.",
    anchor: "kubectl-apply-한-줄이-지나는-부품들",
  },
  {
    id: "k8s-learning-roadmap-2",
    post: "k8s-learning-roadmap",
    question: "FailedScheduling 메시지가 '0/2 nodes are available: 2 Insufficient cpu.'다. 먼저 펼 글로 가장 알맞은 것은?",
    choices: [
      "노드 오토스케일링(노드가 모자라 늘려야 하는지)",
      "NetworkPolicy",
      "CoreDNS",
      "Pod Security Admission",
    ],
    answer: 0,
    explanation:
      "Insufficient는 requests 합이 노드의 allocatable을 넘었다는 뜻이라 노드가 모자란 것이다. 노드 오토스케일러가 이 Pod를 보고 노드를 붙이는지 확인한다. untolerated taint나 affinity 불일치라면 내가 건 조건 문제라 스케줄링 글로 간다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "k8s-learning-roadmap-3",
    post: "k8s-learning-roadmap",
    question: "'pods \"web\" is forbidden: violates PodSecurity \"restricted:latest\"'가 났다. Role에 권한을 더 주면 어떻게 되나?",
    choices: [
      "바로 해결된다",
      "해결되지 않는다. RBAC가 아니라 Pod Security Admission이 막은 것이다",
      "Role이 아니라 ClusterRole을 주면 해결된다",
      "kubeconfig를 바꾸면 해결된다",
    ],
    answer: 1,
    explanation:
      "Forbidden이라는 말은 같지만 violates PodSecurity가 붙으면 네임스페이스의 보안 수준에 Pod 설정이 걸린 것이다. 권한을 넓혀도 그대로 막히고, securityContext를 고치거나 네임스페이스 라벨을 검토해야 한다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "k8s-learning-roadmap-4",
    post: "k8s-learning-roadmap",
    question: "레플리카 3개, minAvailable 2인 PDB가 걸린 Deployment가 있다. drain 중 첫 Pod는 나갔는데 두 번째 eviction이 계속 429다. 가장 흔한 이유는?",
    choices: [
      "drain에 --force를 주지 않았다",
      "PDB는 drain에 적용되지 않는다",
      "API 서버가 과부하라 요청 수 제한에 걸렸다",
      "대신 뜬 Pod가 아직 준비되지 않아 지금 준비된 Pod가 2개뿐이다",
    ],
    answer: 3,
    explanation:
      "첫 Pod가 나간 뒤 대신할 Pod가 Ready가 되기 전에는 준비된 Pod가 2개라 하나 더 빼면 minAvailable을 깬다. 대신할 Pod가 자리가 없어 Pending이면 노드가 붙을 때까지 drain이 멈춘다. 여기서 429는 요청 수 제한이 아니라 PDB의 거절이다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "k8s-learning-roadmap-5",
    post: "k8s-learning-roadmap",
    question: "로드맵에서 01 기초(구조, API 오브젝트, 컨트롤러)를 02 워크로드보다 먼저 읽으라고 하는 이유는?",
    choices: [
      "01이 더 쉬워서",
      "02의 글이 대부분 컨트롤러가 상태 차이를 메운다는 전제 위에 쓰여 있어서",
      "02는 자격증 시험에 나오지 않아서",
      "01을 읽어야 kubectl이 설치되어서",
    ],
    answer: 1,
    explanation:
      "Deployment, StatefulSet, Job 모두 원하는 상태와 지금 상태의 차이를 메우는 컨트롤러다. 그 문장을 먼저 잡으면 02부터 07까지 같은 패턴이 반복되는 게 보이고, 07에서는 그 루프를 직접 오퍼레이터로 구현한다.",
    anchor: "여덟-칸은-서로-기대고-있다",
  },
  {
    id: "k8s-learning-roadmap-6",
    post: "k8s-learning-roadmap",
    question: "증상 규칙을 위에서부터 맞추는 표에서 'forbidden' 규칙을 'podsecurity' 규칙보다 위에 두면 생기는 일은?",
    choices: [
      "Pod Security에 막힌 증상이 RBAC 글로 가서 권한만 넓히게 된다",
      "아무 차이가 없다",
      "모든 증상이 기본 글로 간다",
      "podsecurity 규칙이 더 먼저 실행된다",
    ],
    answer: 0,
    explanation:
      "처음 맞는 규칙에서 멈추므로 넓은 규칙이 위에 있으면 좁은 규칙까지 가지 못한다. violates PodSecurity 메시지에도 forbidden이 들어 있어서 RBAC 규칙에 먼저 걸린다. 그래서 좁은 규칙을 넓은 규칙보다 위에 둔다.",
    anchor: "증상-문장에서-첫-글-고르기",
  },
];
