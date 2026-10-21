import type { QuizQuestion } from "../types";

export const K8S_VPA: QuizQuestion[] = [
  {
    id: "k8s-vpa-1",
    post: "k8s-vpa",
    question: "VPA가 Recreate 모드로 Pod를 바꿨는데 Deployment 템플릿의 requests는 그대로다. 새 Pod의 requests는 어디서 바뀌었나?",
    choices: [
      "updater가 Deployment 템플릿을 잠깐 고쳤다가 되돌렸다",
      "kubelet이 VPA 추천을 읽어 컨테이너를 띄울 때 바꿨다",
      "Pod가 만들어질 때 admission controller(mutating webhook)가 고쳤다",
      "recommender가 ReplicaSet의 템플릿을 고쳤다",
    ],
    answer: 2,
    explanation:
      "VPA는 Deployment를 고치지 않는다. updater가 Pod를 내보내면 ReplicaSet이 템플릿 값으로 새 Pod를 만들고, 그 생성 요청을 admission controller가 가로채 추천값으로 requests와 limits를 바꾼다. 그래서 GitOps 도구와 부딪히지 않지만, webhook이 죽으면 새 Pod는 템플릿 값으로 뜬다.",
    anchor: "세-부품이-나눠-맡는다",
  },
  {
    id: "k8s-vpa-2",
    post: "k8s-vpa",
    question: "메모리를 1분 동안 크게 썼다가 원래대로 돌아왔다. VPA의 메모리 추천이 며칠 동안 높게 남는 이유는?",
    choices: [
      "메모리는 구간마다 정점을 기록해 8일 창의 히스토그램으로 추천하기 때문에",
      "메모리 샘플은 반감기가 없어서 영원히 남기 때문에",
      "metrics-server가 메모리 최댓값만 보고하기 때문에",
      "updater가 메모리를 줄이는 변경을 막기 때문에",
    ],
    answer: 0,
    explanation:
      "메모리는 모자라면 OOMKilled로 죽으니 VPA는 24시간 구간마다 정점 하나를 남기고 8개 구간을 모아 추천한다. 그래서 짧은 튐도 창에서 빠질 때까지 추천에 남는다. CPU는 가중치가 줄어드는 P90이라 낮은 샘플이 쌓이면 금방 내려온다.",
    anchor: "기록이-쌓이는-방식",
  },
  {
    id: "k8s-vpa-3",
    post: "k8s-vpa",
    question: "Pod당 CPU를 350m 쓰는 컨테이너에 VPA가 410m를 추천했다. 차이가 생긴 이유로 맞는 것은?",
    choices: [
      "limits와 requests의 평균을 쓰기 때문에",
      "사용량이 속한 히스토그램 버킷의 끝값에 15% 여유분을 곱하기 때문에",
      "노드 allocatable의 10%를 더하기 때문에",
      "HPA의 목표 사용률을 거꾸로 적용하기 때문에",
    ],
    answer: 1,
    explanation:
      "버킷이 5%씩 커지는 히스토그램에서 350m이 든 버킷의 끝값은 약 357m이고, 여기에 기본 여유분 0.15를 곱해 410m가 된다. limits나 노드 크기는 추천 계산에 들어가지 않는다.",
    anchor: "추천값은-히스토그램에서-나온다",
  },
  {
    id: "k8s-vpa-4",
    post: "k8s-vpa",
    question: "replicas 1인 Deployment에 Recreate VPA를 걸었는데 추천과 requests가 크게 달라도 Pod가 바뀌지 않는다. 가장 먼저 의심할 것은?",
    choices: [
      "recommender가 추천을 만들지 못했다",
      "PDB가 eviction을 막고 있다",
      "kubelet 버전이 낮아 제자리 변경이 안 된다",
      "updater의 min-replicas(기본 2)보다 replicas가 적어 건너뛴다",
    ],
    answer: 3,
    explanation:
      "updater는 살아 있는 replicas가 --min-replicas보다 적으면 'Too few replicas'를 남기고 내보내지 않는다. 하나뿐인 Pod를 내리면 서비스가 끊기기 때문이다. 다음 배포 때 admission controller가 추천을 넣거나, VPA의 updatePolicy.minReplicas로 낮춘다.",
    anchor: "recreate가-pod를-갈아-끼우는-순서",
  },
  {
    id: "k8s-vpa-5",
    post: "k8s-vpa",
    question: "HPA가 CPU 사용률 60%로 돌고 있는 Deployment에 VPA를 CPU까지 맡기면 생기는 일은?",
    choices: [
      "VPA가 requests를 줄이면 사용률이 올라 HPA가 Pod를 늘리고, 다시 VPA가 줄이는 식으로 서로를 흔든다",
      "HPA가 VPA의 추천을 읽어 목표 사용률을 자동으로 바꾼다",
      "VPA는 HPA가 있으면 스스로 Off 모드로 바뀐다",
      "아무 문제 없다. 둘은 서로 다른 필드를 바꾸기 때문이다",
    ],
    answer: 0,
    explanation:
      "HPA의 사용률은 사용량 ÷ requests라서 VPA가 requests를 바꾸면 HPA의 입력이 바뀐다. 문서도 같은 리소스 메트릭에 둘을 함께 쓰지 말라고 한다. VPA는 Off나 메모리만, HPA는 CPU나 커스텀 메트릭으로 나눈다.",
    anchor: "hpa와-같은-cpu에-걸면-서로를-흔든다",
  },
  {
    id: "k8s-vpa-6",
    post: "k8s-vpa",
    question: "VPA를 처음 걸자마자 Recreate로 돌렸더니 Pod가 CPU 50m, 메모리 250Mi로 바뀌었다. 왜 이런 일이 생기고 어떻게 피하나?",
    choices: [
      "minAllowed를 넣지 않아서다. minAllowed만 넣으면 된다",
      "updater가 버그로 lowerBound를 target으로 썼다. VPA를 다시 설치한다",
      "샘플이 거의 없을 때 추천이 최솟값에 머물러서다. Off로 며칠 추천이 안정되는 걸 본 뒤 적용 모드로 바꾼다",
      "admission controller가 Pod 템플릿을 읽지 못해서다. webhook을 재등록한다",
    ],
    answer: 2,
    explanation:
      "기록이 얇으면 recommender는 최소 추천값(CPU 25m, 메모리 250MB)과 minAllowed 중 큰 값을 쓴다. 그 값으로 바뀐 Pod는 lowerBound도 낮아 '범위 안'으로 보이니 12시간 동안 그대로 남을 수 있다. 그래서 도입은 Off로 시작한다.",
    anchor: "처음-몇-분의-추천은-얇다",
  },
];
