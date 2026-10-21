import type { QuizQuestion } from "../types";

export const K8S_STATEFULSET: QuizQuestion[] = [
  {
    id: "k8s-statefulset-1",
    post: "k8s-statefulset",
    question: "StatefulSet pg(replicas 3, 기본 정책)를 만들었는데 pg-0만 있고 pg-1이 생기지 않는다. 먼저 볼 것은?",
    choices: [
      "headless Service의 clusterIP가 None인지",
      "pg-0이 Running이고 Ready인지",
      "PV의 회수 정책이 Retain인지",
      "partition 값이 0인지",
    ],
    answer: 1,
    explanation:
      "기본 정책인 OrderedReady는 앞 번호가 모두 Ready가 돼야 다음 번호를 만든다. pg-0의 readiness가 실패하면 replicas를 올려도 pg-1은 생기지 않는다. headless Service가 없으면 DNS 이름만 안 생길 뿐 Pod는 만들어진다.",
    anchor: "하나가-ready가-돼야-다음을-만든다",
  },
  {
    id: "k8s-statefulset-2",
    post: "k8s-statefulset",
    question: "whenScaled: Delete로 둔 StatefulSet을 3에서 2로 줄였다가 다시 3으로 늘렸다. pg-2는 어떤 디스크로 뜨나?",
    choices: [
      "옛 data-pg-2가 묶여 있던 디스크를 그대로 다시 붙인다",
      "pg-1의 디스크를 함께 쓴다",
      "같은 이름의 새 PVC가 생겨 빈 디스크로 시작한다",
      "PVC가 없어서 pg-2가 영원히 Pending이다",
    ],
    answer: 2,
    explanation:
      "줄일 때 컨트롤러가 사라질 Pod를 PVC의 owner로 걸어 두고, Pod가 지워지면 PVC도 지워진다. 다시 늘리면 같은 이름의 PVC가 새로 만들어지는데, 옛 PV는 Released 상태로 이전 claimRef를 들고 있어 새 PVC에 묶이지 않는다. 그래서 데이터가 비어 있다.",
    anchor: "남길지-지울지-정하는-persistentvolumeclaimretentionpolicy",
  },
  {
    id: "k8s-statefulset-3",
    post: "k8s-statefulset",
    question: "replicas 3인 StatefulSet에 partition=2를 주고 이미지를 바꿨다. 어떤 Pod가 새 버전이 되나?",
    choices: [
      "pg-2만",
      "pg-0과 pg-1",
      "pg-0만",
      "셋 모두, 다만 두 대씩 동시에",
    ],
    answer: 0,
    explanation:
      "partition 이상인 번호만 새 템플릿을 받는다. 번호 2 이상은 pg-2 하나다. partition 아래의 Pod는 지워져도 옛 리비전으로 다시 뜨고, partition을 0으로 내려야 pg-1, pg-0 순서로 바뀐다.",
    anchor: "업데이트는-큰-번호부터-하나씩-partition으로-끊어서",
  },
  {
    id: "k8s-statefulset-4",
    post: "k8s-statefulset",
    question: "새 리비전의 pg-2가 Pending으로 멈춰서 rollout undo를 했다. 그런데 pg-2는 여전히 깨진 리비전으로 Pending이다. 다음에 할 일은?",
    choices: [
      "replicas를 늘려 다른 Pod가 대신 받게 한다",
      "podManagementPolicy를 Parallel로 바꾼다",
      "컨트롤러가 알아서 고칠 때까지 기다린다",
      "깨진 리비전의 pg-2를 직접 지운다",
    ],
    answer: 3,
    explanation:
      "OrderedReady에서는 컨트롤러가 깨진 Pod가 Ready가 되기를 계속 기다려서 템플릿을 되돌려도 그 Pod를 바꾸지 않는다. 깨진 Pod를 지우면 되돌린 템플릿으로 다시 뜬다. podManagementPolicy는 만든 뒤에 바꿀 수 없는 필드다.",
    anchor: "롤아웃이-멈췄을-때",
  },
  {
    id: "k8s-statefulset-5",
    post: "k8s-statefulset",
    question: "pg-1이 있던 노드가 응답을 멈췄다. Deployment Pod와 달리 pg-1이 다른 노드에 바로 다시 뜨지 않는 이유는?",
    choices: [
      "StatefulSet은 노드 장애를 감지하지 못한다",
      "같은 번호의 Pod가 동시에 둘 떠서 같은 디스크에 쓰는 일을 막으려고 옛 Pod가 사라질 때까지 기다린다",
      "headless Service가 옛 IP를 계속 가리키기 때문이다",
      "PVC가 ReadWriteMany가 아니면 다른 노드에 붙일 수 없기 때문이다",
    ],
    answer: 1,
    explanation:
      "StatefulSet은 같은 이름의 Pod가 많아야 하나만 있도록 지킨다. 응답 없는 노드의 Pod는 지워졌다고 확인해 줄 kubelet이 없어서 Terminating에 머문다. 노드가 꺼졌음을 확인한 뒤 out-of-service taint를 걸거나 강제 삭제해야 다른 노드에 다시 뜬다.",
    anchor: "노드가-죽으면-statefulset은-기다린다",
  },
  {
    id: "k8s-statefulset-6",
    post: "k8s-statefulset",
    question: "DB Pod가 재시작된 뒤 일부 앱만 pg-0.pg.data.svc.cluster.local로 계속 연결 시간 초과가 난다. 의심할 곳으로 가장 알맞은 것은?",
    choices: [
      "앱이 처음 받은 IP를 캐시해 새 Pod IP로 다시 해석하지 않는다",
      "StatefulSet이 Pod 이름을 바꿨다",
      "PVC가 다른 PV에 묶였다",
      "headless Service에 VIP가 새로 생겼다",
    ],
    answer: 0,
    explanation:
      "StatefulSet이 고정해 주는 것은 이름이지 IP가 아니다. 새 Pod가 새 IP를 받으면 DNS는 5초 TTL로 새 답을 주지만, JVM DNS 캐시나 처음 해석한 주소를 계속 쓰는 연결 풀은 옛 IP로 붙으려 한다. 앱 쪽 DNS 캐시와 재연결 설정을 본다.",
    anchor: "pod마다-붙는-dns-이름",
  },
];
