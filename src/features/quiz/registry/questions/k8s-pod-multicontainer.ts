import type { QuizQuestion } from "../types";

export const K8S_POD_MULTICONTAINER: QuizQuestion[] = [
  {
    id: "k8s-pod-multicontainer-1",
    post: "k8s-pod-multicontainer",
    question: "앱과 프록시를 둘 다 spec.containers에 넣었더니 배포할 때마다 앱이 ECONNREFUSED로 한 번씩 죽는다. 원인은?",
    choices: [
      "프록시 이미지가 앱보다 커서 늦게 받아진다",
      "일반 컨테이너는 순서대로 시작 요청만 할 뿐 앞의 것이 준비되기를 기다리지 않는다",
      "Pod의 네트워크 namespace가 컨테이너마다 달라서다",
      "readiness probe가 없어서다",
    ],
    answer: 1,
    explanation:
      "같은 Pod의 일반 컨테이너는 사실상 동시에 뜨고, 앱이 먼저 떠서 아직 열리지 않은 프록시 포트를 부르면 연결이 거부된다. 네트워크 namespace는 오히려 공유한다. 프록시를 네이티브 사이드카로 옮기면 앱보다 먼저 뜬다.",
    anchor: "일반-컨테이너끼리는-순서가-없다",
  },
  {
    id: "k8s-pod-multicontainer-2",
    post: "k8s-pod-multicontainer",
    question: "쿠버네티스에서 네이티브 사이드카를 만드는 방법은?",
    choices: [
      "spec.containers의 컨테이너에 restartPolicy: Always를 준다",
      "Pod에 sidecar: true 어노테이션을 단다",
      "spec.initContainers의 컨테이너에 restartPolicy: Always를 준다",
      "spec.sidecars 필드에 적는다",
    ],
    answer: 2,
    explanation:
      "네이티브 사이드카는 init 자리에서 restartPolicy: Always를 받은 컨테이너다. 순서대로 먼저 뜨되 끝나기를 기다리지 않고 계속 돈다. 일반 컨테이너에 같은 필드를 넣으면 API 서버가 may not be set for non-init containers로 거절한다.",
    anchor: "네이티브-사이드카는-init-자리에서-계속-돈다",
  },
  {
    id: "k8s-pod-multicontainer-3",
    post: "k8s-pod-multicontainer",
    question: "정산 Job의 주 컨테이너는 끝났는데 Job이 완료되지 않고 Pod가 1/2 Running이다. 로그 전달기는 일반 컨테이너로 붙어 있다. 가장 깔끔한 해결은?",
    choices: [
      "로그 전달기를 네이티브 사이드카로 옮겨, 주 컨테이너가 끝나면 kubelet이 사이드카를 끝내게 한다",
      "Job의 backoffLimit을 0으로 바꾼다",
      "restartPolicy를 Always로 바꾼다",
      "activeDeadlineSeconds를 늘린다",
    ],
    answer: 0,
    explanation:
      "Pod가 Succeeded가 되려면 모든 일반 컨테이너가 끝나야 하는데, 로그 전달기는 끝날 이유가 없다. 네이티브 사이드카는 일반 컨테이너가 모두 끝나면 kubelet이 정리하므로 Job이 완료된다. activeDeadlineSeconds는 Job을 실패로 끊을 뿐이다.",
    anchor: "job이-끝나지-않는-이유",
  },
  {
    id: "k8s-pod-multicontainer-4",
    post: "k8s-pod-multicontainer",
    question: "Pod를 지울 때 네이티브 사이드카는 언제 SIGTERM을 받나?",
    choices: [
      "Pod 삭제 즉시 가장 먼저",
      "일반 컨테이너와 동시에",
      "SIGTERM 없이 바로 SIGKILL을 받는다",
      "일반 컨테이너가 모두 끝난 뒤, 정의 역순으로",
    ],
    answer: 3,
    explanation:
      "네이티브 사이드카는 일반 컨테이너가 다 끝난 뒤에 끝나서, 앱의 마지막 로그와 바깥 호출이 사이드카를 거쳐 나갈 수 있다. 다만 유예 시간은 Pod 전체가 함께 쓰므로 앱이 다 써 버리면 사이드카는 정리할 틈이 없다.",
    anchor: "네이티브-사이드카는-init-자리에서-계속-돈다",
  },
  {
    id: "k8s-pod-multicontainer-5",
    post: "k8s-pod-multicontainer",
    question: "2코어 노드에 app 1000m, 사이드카 500m, init 컨테이너 warmup 1800m인 Pod를 놓는다. 사이드카를 warmup보다 앞에 두면 어떻게 되나?",
    choices: [
      "요구량은 순서와 상관없이 1800m라 들어간다",
      "warmup이 도는 동안 사이드카도 자리를 써서 2300m가 필요해 Insufficient cpu로 Pending이 된다",
      "사이드카의 requests는 스케줄링에 반영되지 않는다",
      "요구량이 모든 컨테이너의 합인 3300m가 된다",
    ],
    answer: 1,
    explanation:
      "사이드카는 시작한 뒤 계속 자리를 쓰므로, 뒤에 오는 init 컨테이너가 돌 때 그 requests에 더해진다. warmup을 먼저 두면 1800m와 1500m 중 큰 1800m로 들어가고, 사이드카를 먼저 두면 2300m라 2코어 노드에 안 들어간다.",
    anchor: "사이드카도-자리를-차지한다",
  },
  {
    id: "k8s-pod-multicontainer-6",
    post: "k8s-pod-multicontainer",
    question: "로그 사이드카를 붙인 Pod들이 며칠 뒤 노드 DiskPressure와 함께 쫓겨나기 시작했다. 먼저 볼 것은?",
    choices: [
      "사이드카의 CPU limits",
      "앱의 readiness probe",
      "로그 emptyDir에 sizeLimit이 있는지, 앱이 로그 파일을 돌려쓰는지",
      "Service의 selector",
    ],
    answer: 2,
    explanation:
      "앱이 파일을 돌려쓰지 않으면 emptyDir이 노드 디스크를 계속 먹는다. sizeLimit이 없으면 노드 전체가 DiskPressure에 걸려 다른 Pod까지 쫓겨난다. 로그를 돌려쓰게 하고 sizeLimit을 넉넉하게 건다.",
    anchor: "로그-사이드카를-붙일-때-챙길-것",
  },
];
