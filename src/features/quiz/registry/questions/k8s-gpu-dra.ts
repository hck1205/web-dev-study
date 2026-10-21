import type { QuizQuestion } from "../types";

export const K8S_GPU_DRA: QuizQuestion[] = [
  {
    id: "k8s-gpu-dra-1",
    post: "k8s-gpu-dra",
    question: "디바이스 플러그인 방식에서 Pod에 어느 GPU 장치를 줄지 정하는 쪽은?",
    choices: [
      "kube-scheduler가 장치 ID를 보고 고른다",
      "API 서버가 노드 상태에서 고른다",
      "노드의 kubelet이 비어 있는 장치를 골라 플러그인의 Allocate를 부른다",
      "컨테이너 런타임이 아무 장치나 꽂는다",
    ],
    answer: 2,
    explanation:
      "스케줄러는 노드 용량에 적힌 nvidia.com/gpu 개수만 보고 노드를 고른다. 어느 장치를 줄지는 그 노드의 kubelet이 정하고, 플러그인이 Allocate 응답으로 꽂을 장치 파일과 환경 변수를 알려 준다.",
    anchor: "디바이스-플러그인이-gpu를-개수로-알린다",
  },
  {
    id: "k8s-gpu-dra-2",
    post: "k8s-gpu-dra",
    question: "limits에 nvidia.com/gpu: 500m을 적은 Pod를 만들면 어떻게 되나?",
    choices: [
      "API 서버가 정수여야 한다며 Pod 생성을 거절한다",
      "GPU 한 장의 절반 시간을 받는다",
      "1로 반올림되어 한 장을 받는다",
      "스케줄러가 Pending으로 둔다",
    ],
    answer: 0,
    explanation:
      "extended resource는 정수만 허용되고 requests와 limits가 같아야 해서 검증 단계에서 바로 거절된다. GPU를 나눠 쓰려면 MIG나 time-slicing처럼 플러그인 쪽에서 한 장을 여러 개로 알리게 해야 한다.",
    anchor: "정수로만-요청과-상한은-같게",
  },
  {
    id: "k8s-gpu-dra-3",
    post: "k8s-gpu-dra",
    question: "GPU 노드에 라벨만 붙이고 테인트를 걸지 않으면 생기기 쉬운 문제는?",
    choices: [
      "GPU Pod가 GPU 노드로 가지 못한다",
      "디바이스 플러그인이 장치를 알리지 못한다",
      "GPU Pod가 다른 GPU Pod를 선점한다",
      "일반 Pod가 GPU 노드의 CPU와 메모리를 차지해 GPU가 남아도 GPU Pod가 못 들어간다",
    ],
    answer: 3,
    explanation:
      "nodeSelector는 GPU Pod를 GPU 노드로 보내는 것만 강제하고 일반 Pod를 막지는 않는다. 테인트를 걸어야 톨러레이션이 없는 일반 Pod가 비싼 GPU 노드에 들어오지 않는다.",
    anchor: "gpu-노드는-따로-묶어-둔다",
  },
  {
    id: "k8s-gpu-dra-4",
    post: "k8s-gpu-dra",
    question: "time-slicing으로 GPU 한 장을 replicas: 4로 나눴다. 한 Pod가 GPU 메모리를 전부 잡으면?",
    choices: [
      "그 Pod만 OOM으로 죽고 나머지는 영향이 없다",
      "메모리 격리가 없어서 같은 장을 쓰는 다른 Pod들도 메모리 할당에 실패한다",
      "플러그인이 그 Pod를 다른 GPU로 옮긴다",
      "스케줄러가 남은 replica를 회수한다",
    ],
    answer: 1,
    explanation:
      "time-slicing은 시간을 번갈아 줄 뿐 메모리와 장애 영역을 나누지 않는다. 메모리와 연산을 칸막이로 나누는 것은 MIG이고, 그래서 격리가 필요하면 MIG를 고른다.",
    anchor: "한-장을-나눠-쓰는-세-가지-방법",
  },
  {
    id: "k8s-gpu-dra-5",
    post: "k8s-gpu-dra",
    question: "DRA에서 메모리 64Gi 이상인 GPU를 요청하는 조건은 어디에 적나?",
    choices: [
      "ResourceClaim(또는 claim 틀)의 요청에 CEL 선택식으로 적는다",
      "ResourceSlice의 attributes에 적는다",
      "Pod의 nodeSelector에 적는다",
      "디바이스 플러그인 설정 파일에 적는다",
    ],
    answer: 0,
    explanation:
      "ResourceSlice는 드라이버가 장치와 속성을 공개하는 객체이고, 사용자의 조건은 ResourceClaim의 selectors에 CEL 식으로 들어간다. 스케줄러가 둘을 맞춰 장치를 고르고 결과를 claim의 status.allocation에 적는다.",
    anchor: "dra는-장치를-설명하고-요청을-조건으로-적는다",
  },
  {
    id: "k8s-gpu-dra-6",
    post: "k8s-gpu-dra",
    question: "두 Pod가 같은 이름의 ResourceClaim을 직접 가리키면 어떻게 되나?",
    choices: [
      "두 번째 Pod는 claim이 이미 쓰여서 Pending이 된다",
      "claim이 두 개로 복사되어 장치도 두 개가 할당된다",
      "두 Pod가 장치 하나를 함께 쓰고, claim은 Pod가 지워져도 남는다",
      "API 서버가 중복 참조라며 거절한다",
    ],
    answer: 2,
    explanation:
      "직접 만든 claim은 reservedFor에 두 Pod가 함께 적히고 같은 장치를 공유한다. 틀로 만든 claim과 달리 Pod가 주인이 아니어서 다 쓴 뒤 사람이 지워야 장치가 풀린다.",
    anchor: "장치-하나를-여러-pod가-함께-쓰기",
  },
  {
    id: "k8s-gpu-dra-7",
    post: "k8s-gpu-dra",
    question: "노드 Allocatable에 nvidia.com/gpu 항목이 아예 없는데 GPU Pod가 Pending이다. 먼저 볼 곳은?",
    choices: [
      "Pod의 톨러레이션 오타",
      "드라이버와 디바이스 플러그인 Pod의 상태와 로그",
      "kube-scheduler의 우선순위 설정",
      "ResourceQuota",
    ],
    answer: 1,
    explanation:
      "노드 용량에 자원 이름이 없다는 것은 플러그인이 kubelet에 장치를 등록하지 못했다는 뜻이다. 스케줄러는 없는 자원을 셀 수 없으니 드라이버 준비 상태와 플러그인 로그부터 본다.",
    anchor: "gpu-pod가-안-뜰-때-보는-순서",
  },
];
