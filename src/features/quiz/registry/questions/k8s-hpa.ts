import type { QuizQuestion } from "../types";

export const K8S_HPA: QuizQuestion[] = [
  {
    id: "k8s-hpa-1",
    post: "k8s-hpa",
    question: "replicas 3, CPU 목표 60%인 HPA에서 현재 평균 사용률이 64%다. HPA는 어떻게 하나?",
    choices: [
      "ceil(3 × 64/60) = 4로 늘린다",
      "목표를 넘었으니 한 개씩 늘린다",
      "비율 1.067이 허용 오차 0.1 안이라 그대로 둔다",
      "안정화 창 5분이 지난 뒤 늘린다",
    ],
    answer: 2,
    explanation:
      "HPA는 현재/목표 비율이 0.9~1.1 사이면 움직이지 않는다. 64/60은 약 1.067이라 허용 오차 안이다. 늘릴 때의 안정화 창은 기본 0초다.",
    anchor: "공식은-한-줄이다",
  },
  {
    id: "k8s-hpa-2",
    post: "k8s-hpa",
    question: "HPA의 TARGETS가 `<unknown>/60%`이고 이벤트에 `missing request for cpu in container`가 찍힌다. 원인은?",
    choices: [
      "metrics-server가 설치되지 않았다",
      "Pod의 컨테이너 중 하나에 CPU requests가 없어 사용률을 계산할 수 없다",
      "CPU limits가 requests보다 작다",
      "maxReplicas에 이미 도달했다",
    ],
    answer: 1,
    explanation:
      "Utilization 목표는 requests 대비 퍼센트라서 분모인 requests가 없으면 계산하지 못한다. 사이드카처럼 컨테이너 하나만 빠져도 같은 오류가 난다. metrics-server 문제라면 no metrics returned 같은 다른 메시지가 나온다.",
    anchor: "requests가-없으면-계산할-수-없다",
  },
  {
    id: "k8s-hpa-3",
    post: "k8s-hpa",
    question: "부하가 내려가 CPU가 18%가 됐는데 Pod 8개가 5분 동안 그대로다. 왜 그런가?",
    choices: [
      "metrics-server가 5분마다 한 번만 수집한다",
      "Deployment의 progressDeadlineSeconds 때문이다",
      "줄일 때는 지난 5분 추천값 중 가장 큰 값을 쓰는 안정화 창이 있다",
      "HPA는 줄이는 기능이 없고 사람이 줄여야 한다",
    ],
    answer: 2,
    explanation:
      "scaleDown의 기본 stabilizationWindowSeconds는 300초라서 창 안에 남은 큰 추천값이 빠질 때까지 줄이지 않는다. 잠깐 내려갔다 오르는 출렁임에 Pod를 줄였다 늘리는 걸 막는 장치다.",
    anchor: "줄일-때는-5분을-기다린다",
  },
  {
    id: "k8s-hpa-4",
    post: "k8s-hpa",
    question: "behavior의 scaleUp 기본 정책(15초마다 Pods 4, Percent 100, selectPolicy Max)에서 지금 3개, 공식상 8개가 필요하면 다음 바퀴에 몇 개가 되나?",
    choices: ["6개", "7개", "8개", "4개"],
    answer: 1,
    explanation:
      "100% 정책은 3개를 더해 6개, Pods 정책은 4개를 더해 7개까지 허용하고, Max는 더 많이 늘리는 쪽을 고른다. 그래서 8이 아니라 7에서 멈췄다가 다음 바퀴에 다시 계산한다.",
    anchor: "behavior로-속도를-정한다",
  },
  {
    id: "k8s-hpa-5",
    post: "k8s-hpa",
    question: "HPA가 replicas를 10으로 올렸는데 새 Pod가 Pending이다. 노드를 늘리는 것은 누구의 일인가?",
    choices: [
      "HPA가 다음 바퀴에 노드를 요청한다",
      "kube-scheduler가 클라우드에 노드를 만든다",
      "Cluster Autoscaler나 Karpenter 같은 노드 오토스케일러",
      "Deployment 컨트롤러",
    ],
    answer: 2,
    explanation:
      "HPA는 replicas만 고친다. 자리가 없어 Pending인 Pod를 보고 노드를 붙이는 것은 노드 오토스케일러이고, 그 사이 몇 분이 걸린다. 그래서 목표 사용률에 여유를 두거나 예약 스케일링을 쓴다.",
    anchor: "함께-쓰면-부딪히는-것들",
  },
  {
    id: "k8s-hpa-6",
    post: "k8s-hpa",
    question: "HPA를 쓰는 Deployment 매니페스트에 `replicas: 2`가 남아 있다. 피크 시간에 배포하면 무슨 일이 생기나?",
    choices: [
      "apply 순간 HPA가 늘려 둔 replicas가 2로 돌아갔다가 다시 오른다",
      "HPA가 매니페스트 값을 무시하니 아무 일도 없다",
      "API 서버가 충돌로 apply를 거절한다",
      "HPA가 삭제된다",
    ],
    answer: 0,
    explanation:
      "apply나 GitOps 동기화는 매니페스트의 replicas로 덮어쓰고, HPA는 다음 바퀴에야 다시 늘린다. 그 사이 용량이 줄어드니 HPA가 있으면 replicas 필드를 매니페스트에서 뺀다.",
    anchor: "함께-쓰면-부딪히는-것들",
  },
  {
    id: "k8s-hpa-7",
    post: "k8s-hpa",
    question: "CPU 기반 HPA에 minReplicas: 0을 넣으면 거절된다. 근본적인 이유는?",
    choices: [
      "Deployment는 replicas 0을 지원하지 않는다",
      "Pod가 0개면 CPU 사용률을 잴 수 없어 다시 늘릴 신호가 없다",
      "metrics-server가 0개 Pod를 오류로 본다",
      "ResourceQuota가 0을 막는다",
    ],
    answer: 1,
    explanation:
      "0개에서는 Pod 메트릭이 없으니 Object나 External 메트릭이 있어야 하고, 그마저도 HPAScaleToZero 알파 기능 게이트가 필요하다. 실무에서는 KEDA가 0과 1 사이를 맡는다.",
    anchor: "0개까지-줄일-수-있나",
  },
];
