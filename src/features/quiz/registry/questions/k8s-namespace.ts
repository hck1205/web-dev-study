import type { QuizQuestion } from "../types";

export const K8S_NAMESPACE: QuizQuestion[] = [
  {
    id: "k8s-namespace-1",
    post: "k8s-namespace",
    question: "NetworkPolicy도 없는 상태에서 shop-dev의 Pod가 shop-prod의 DB Pod IP로 연결하면 어떻게 되나?",
    choices: [
      "네임스페이스가 다르니 연결이 거부된다",
      "kube-proxy가 다른 네임스페이스로 가는 패킷을 버린다",
      "그대로 연결된다. 네임스페이스는 기본으로 이름만 나눈다",
      "같은 노드에 있을 때만 연결된다",
    ],
    answer: 2,
    explanation:
      "쿠버네티스 네트워크 모델은 모든 Pod가 서로 닿는 것이 기본이고, 네임스페이스는 패킷을 막지 않는다. 막으려면 NetworkPolicy를 걸고, 그걸 집행하는 CNI가 있어야 한다.",
    anchor: "네트워크는-기본으로-열려-있다",
  },
  {
    id: "k8s-namespace-2",
    post: "k8s-namespace",
    question: "팀 네임스페이스에 edit 권한만 받은 사람이 Helm 차트를 설치하다 실패했다. 차트에 들어 있을 가능성이 가장 큰 것은?",
    choices: [
      "Deployment와 Service",
      "ConfigMap과 Secret",
      "PersistentVolumeClaim",
      "CustomResourceDefinition이나 ClusterRole",
    ],
    answer: 3,
    explanation:
      "CRD, ClusterRole, 웹훅 설정 같은 클러스터 단위 리소스는 네임스페이스 권한으로 만들 수 없다. Deployment, Secret, PVC는 모두 네임스페이스 안의 객체라 edit 권한으로 만든다.",
    anchor: "네임스페이스에-들어가는-것과-안-들어가는-것",
  },
  {
    id: "k8s-namespace-3",
    post: "k8s-namespace",
    question: "shop-dev의 Pod 안에서 `api`라는 짧은 이름으로 요청하면 어느 Service로 가나?",
    choices: [
      "shop-dev의 api Service",
      "default 네임스페이스의 api Service",
      "같은 이름의 Service 중 먼저 만든 것",
      "이름이 겹치니 DNS 오류가 난다",
    ],
    answer: 0,
    explanation:
      "Pod의 resolv.conf search 목록 맨 앞에 자기 네임스페이스(shop-dev.svc.cluster.local)가 있어서 짧은 이름은 같은 네임스페이스의 Service로 풀린다. 다른 네임스페이스를 부르려면 api.shop-prod처럼 네임스페이스를 붙인다.",
    anchor: "다른-네임스페이스의-service를-부르는-이름",
  },
  {
    id: "k8s-namespace-4",
    post: "k8s-namespace",
    question: "`kubectl get pods -n shop-prd`가 'No resources found'를 돌려줬다. 먼저 의심할 것은?",
    choices: [
      "Pod가 모두 OOMKilled로 죽었다",
      "네임스페이스 이름에 오타가 있다. 없는 네임스페이스도 조회는 빈 결과로 끝난다",
      "RBAC 권한이 없어서 빈 목록이 왔다",
      "API 서버와 연결이 끊겼다",
    ],
    answer: 1,
    explanation:
      "없는 네임스페이스를 조회하면 에러 대신 빈 결과가 나온다. 권한이 없으면 Forbidden 에러가 나고, 죽은 Pod도 목록에는 남는다. kubectl get ns로 정확한 이름부터 확인한다.",
    anchor: "kubectl이-어느-칸을-보고-있나",
  },
  {
    id: "k8s-namespace-5",
    post: "k8s-namespace",
    question: "운영 네임스페이스에 pod-security.kubernetes.io/enforce=restricted를 걸었다. 기존 Pod는 멀쩡하다. 무엇이 문제가 될 수 있나?",
    choices: [
      "기존 Pod가 1시간 뒤 자동으로 쫓겨난다",
      "Service 엔드포인트에서 기존 Pod가 빠진다",
      "다음 배포에서 새 Pod가 거절되어 새 ReplicaSet이 0개로 멈춘다",
      "네임스페이스를 지울 수 없게 된다",
    ],
    answer: 2,
    explanation:
      "enforce는 이미 떠 있는 Pod를 건드리지 않고 새로 만드는 Pod만 거절한다. 그래서 다음 배포나 노드 교체 때 Pod가 만들어지지 않고 ReplicaSet 이벤트에 FailedCreate만 쌓인다. warn과 audit로 먼저 위반을 고친 뒤 enforce로 올린다.",
    anchor: "권한-한도-보안-수준은-네임스페이스에-건다",
  },
  {
    id: "k8s-namespace-6",
    post: "k8s-namespace",
    question: "네임스페이스가 Terminating에서 멈췄고, conditions에 NamespaceDeletionDiscoveryFailure=True가 있다. 무엇부터 보나?",
    choices: [
      "kubectl get apiservice에서 AVAILABLE이 False인 등록",
      "그 네임스페이스의 Pod 로그",
      "노드의 디스크 사용량",
      "네임스페이스의 ResourceQuota",
    ],
    answer: 0,
    explanation:
      "namespace 컨트롤러는 모든 API 그룹을 확인해야 삭제를 끝낼 수 있다. 응답하지 않는 APIService가 있으면 그 그룹을 확인하지 못해 멈춘다. 그 등록을 고치거나 지우면 바로 끝난다.",
    anchor: "지웠는데-terminating에서-멈출-때",
  },
  {
    id: "k8s-namespace-7",
    post: "k8s-namespace",
    question: "Terminating 네임스페이스의 spec.finalizers를 finalize API로 강제로 비우면 생기는 문제는?",
    choices: [
      "클러스터의 모든 네임스페이스가 함께 지워진다",
      "API 서버가 재시작된다",
      "아무 문제 없다. 권장하는 방법이다",
      "안에 남은 객체가 etcd에 남고, 같은 이름으로 네임스페이스를 만들면 되살아난다",
    ],
    answer: 3,
    explanation:
      "네임스페이스만 사라지고 정리되지 않은 객체와 외부 자원은 그대로 남는다. 그래서 conditions로 원인을 찾아 남은 객체 단위로 finalizer를 다루는 게 먼저다.",
    anchor: "지웠는데-terminating에서-멈출-때",
  },
];
