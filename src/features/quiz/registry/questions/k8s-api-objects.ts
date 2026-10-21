import type { QuizQuestion } from "../types";

export const K8S_API_OBJECTS: QuizQuestion[] = [
  {
    id: "k8s-api-objects-1",
    post: "k8s-api-objects",
    question: "kubectl apply 직후 스크립트가 status.readyReplicas를 읽어 배포 성공으로 판단했다. 무엇을 먼저 확인해야 이 판단을 믿을 수 있나?",
    choices: [
      "metadata.resourceVersion이 숫자로 커졌는지",
      "metadata.uid가 바뀌었는지",
      "metadata.generation과 status.observedGeneration이 같은지",
      "last-applied-configuration 어노테이션이 생겼는지",
    ],
    answer: 2,
    explanation:
      "generation은 spec이 바뀔 때 오르고, 컨트롤러는 처리한 generation을 observedGeneration에 적는다. 둘이 다르면 지금 status는 옛 spec 기준이다. resourceVersion은 status만 바뀌어도 바뀌니 기준이 되지 못한다.",
    anchor: "generation과-observedgeneration",
  },
  {
    id: "k8s-api-objects-2",
    post: "k8s-api-objects",
    question: "Deployment에 라벨 하나만 추가했다. metadata의 두 숫자는 어떻게 되나?",
    choices: [
      "generation과 resourceVersion이 모두 그대로다",
      "resourceVersion만 바뀌고 generation은 그대로다",
      "generation만 오르고 resourceVersion은 그대로다",
      "둘 다 바뀌고 새 ReplicaSet이 생긴다",
    ],
    answer: 1,
    explanation:
      "라벨은 metadata라 spec 변경이 아니다. 객체가 바뀌었으니 resourceVersion은 새 값이 되지만 generation은 오르지 않는다. Deployment 템플릿 안의 라벨이 아니니 새 ReplicaSet도 생기지 않는다.",
    anchor: "generation과-observedgeneration",
  },
  {
    id: "k8s-api-objects-3",
    post: "k8s-api-objects",
    question: "kubectl get -o yaml로 받은 파일을 고쳐 kubectl replace를 했더니 Conflict(409)가 났다. 왜인가?",
    choices: [
      "파일에 담긴 resourceVersion이 그 사이 바뀐 서버 객체와 달라서",
      "replace는 status 하위 리소스에만 쓸 수 있어서",
      "uid가 같은 객체는 두 번 저장할 수 없어서",
      "strict 필드 검증에 걸려서",
    ],
    answer: 0,
    explanation:
      "replace는 파일의 resourceVersion을 실어 덮어쓰고, 그 사이 다른 쓰기가 있었으면 서버가 낙관적 잠금으로 거절한다. 최신 객체를 다시 읽어 변경을 얹고 재시도한다. strict 검증 실패는 409가 아니라 400 BadRequest다.",
    anchor: "resourceversion은-낙관적-잠금의-버전-번호다",
  },
  {
    id: "k8s-api-objects-4",
    post: "k8s-api-objects",
    question: "kubectl delete가 deleted라고 답했는데 객체가 계속 남아 있다. 가장 먼저 볼 필드는?",
    choices: [
      "spec.replicas",
      "status.conditions의 Available",
      "metadata.labels",
      "metadata.deletionTimestamp와 metadata.finalizers",
    ],
    answer: 3,
    explanation:
      "finalizer가 남아 있으면 DELETE는 deletionTimestamp만 찍고 객체를 지우지 않는다. finalizer 이름으로 주인 컨트롤러를 찾아 정리를 끝내게 하는 것이 순서다. 무작정 떼면 그 컨트롤러가 지키던 바깥 자원이 남는다.",
    anchor: "finalizer가-삭제를-붙잡는다",
  },
  {
    id: "k8s-api-objects-5",
    post: "k8s-api-objects",
    question: "Deployment를 --cascade=orphan으로 지운 뒤 같은 매니페스트를 다시 apply했다. 남아 있던 ReplicaSet은 어떻게 되나?",
    choices: [
      "주인이 없으니 가비지 컬렉터가 곧 지운다",
      "새 Deployment가 셀렉터로 찾아 입양하고 템플릿에 맞춰 숫자를 조정한다",
      "uid가 달라서 새 Deployment와 무관하게 계속 남는다",
      "같은 이름의 ReplicaSet을 만들 수 없어 apply가 실패한다",
    ],
    answer: 1,
    explanation:
      "orphan은 자식의 ownerReferences에서 주인만 지운다. 주인 없는 ReplicaSet은 셀렉터가 맞는 새 Deployment가 입양하고, 템플릿이 같은 것은 올리고 다른 것은 0으로 내린다. 가비지 컬렉터는 처음부터 주인이 없는 객체는 지우지 않는다.",
    anchor: "주인을-지우면-자식은",
  },
  {
    id: "k8s-api-objects-6",
    post: "k8s-api-objects",
    question: "같은 HPA를 /apis/autoscaling/v1 과 /apis/autoscaling/v2 경로로 읽었더니 uid가 같았다. 이유로 맞는 것은?",
    choices: [
      "etcd에 한 벌만 저장돼 있고 API 서버가 요청한 버전 모양으로 변환해 돌려주기 때문",
      "v1 객체를 만들면 API 서버가 v2 복사본을 따로 만들기 때문",
      "uid는 이름에서 계산되는 해시라서",
      "v1은 v2의 별칭일 뿐 필드 모양이 같기 때문",
    ],
    answer: 0,
    explanation:
      "버전은 같은 객체를 보는 서로 다른 창이다. 저장 버전으로 한 벌만 있고, v1으로 읽으면 metrics 배열이 targetCPUUtilizationPercentage 하나로 보이는 것처럼 모양만 바뀐다. 그래서 버전 이전은 객체를 새로 만드는 일이 아니라 매니페스트를 다시 쓰는 일이다.",
    anchor: "apiversion은-그룹과-버전이다",
  },
];
