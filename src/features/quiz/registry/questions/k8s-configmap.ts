import type { QuizQuestion } from "../types";

export const K8S_CONFIGMAP: QuizQuestion[] = [
  {
    id: "k8s-configmap-1",
    post: "k8s-configmap",
    question: "envFrom으로 ConfigMap을 넣은 Deployment에서 ConfigMap의 LOG_LEVEL만 바꿨다. 몇 분이 지나도 로그 수준이 그대로인 이유는?",
    choices: [
      "kubelet 동기화 주기가 아직 돌지 않아서",
      "환경 변수는 프로세스가 시작할 때만 정해지고, Pod 템플릿이 그대로라 롤아웃도 일어나지 않아서",
      "ConfigMap을 바꾸려면 immutable을 먼저 false로 바꿔야 해서",
      "envFrom은 ConfigMap의 첫 번째 키만 읽어서",
    ],
    answer: 1,
    explanation:
      "환경 변수는 컨테이너 프로세스가 뜰 때 받는 값이라 밖에서 바꿀 수 없다. Pod 템플릿에는 ConfigMap 이름만 있으니 Deployment도 바뀐 게 없다고 보고 롤아웃하지 않는다. kubelet 동기화는 볼륨으로 마운트한 파일에만 해당한다.",
    anchor: "환경-변수는-컨테이너가-뜰-때-한-번만-읽힌다",
  },
  {
    id: "k8s-configmap-2",
    post: "k8s-configmap",
    question: "ConfigMap을 볼륨으로 마운트한 Pod에서 값을 바꾼 직후 파일을 읽으면 아직 옛 값이 나온다. 가장 그럴듯한 설명은?",
    choices: [
      "볼륨 마운트는 Pod가 재시작해야만 갱신된다",
      "API 서버가 변경을 etcd에 쓰는 데 몇 분이 걸린다",
      "kubelet이 주기적인 동기화(기본 1분) 때 파일을 새로 쓰기 때문에 지연이 있다",
      "ConfigMap 파일은 앱이 열 때마다 API 서버에서 직접 읽어 온다",
    ],
    answer: 2,
    explanation:
      "kubelet은 Pod를 주기적으로 다시 맞출 때 마운트한 ConfigMap이 최신인지 보고 파일을 새로 쓴다. 그래서 동기화 주기와 캐시 지연만큼 늦게 바뀐다. 재시작 없이도 결국 바뀐다는 점이 환경 변수와 다르다.",
    anchor: "마운트한-파일은-늦게-바뀐다",
  },
  {
    id: "k8s-configmap-3",
    post: "k8s-configmap",
    question: "nginx.conf 하나만 subPath로 꽂았더니 ConfigMap을 고쳐도 파일이 끝까지 그대로다. 왜 그런가?",
    choices: [
      "subPath는 컨테이너가 뜰 때의 실제 파일을 바인드 마운트해서, 나중에 ..data 링크가 바뀌어도 따라가지 않는다",
      "subPath로 마운트하면 ConfigMap이 자동으로 immutable이 된다",
      "nginx가 파일을 잠가서 kubelet이 쓰지 못한다",
      "subPath는 Secret에서만 갱신을 지원한다",
    ],
    answer: 0,
    explanation:
      "kubelet은 새 디렉터리에 파일을 쓰고 ..data 링크를 바꾸는 식으로 갱신한다. subPath는 시작할 때 옛 디렉터리 안의 파일을 꽂아 두었으니 링크가 바뀌어도 그대로다. 디렉터리째 마운트하고 include하거나, 바뀔 때 롤아웃해야 한다.",
    anchor: "subpath로-꽂은-파일은-끝까지-그대로다",
  },
  {
    id: "k8s-configmap-4",
    post: "k8s-configmap",
    question: "Pod 템플릿에 ConfigMap 해시 어노테이션을 넣어 배포하다가 설정 실수로 장애가 났다. kubectl rollout undo를 했는데도 고쳐지지 않는 이유는?",
    choices: [
      "rollout undo는 어노테이션을 되돌리지 않아서",
      "옛 ReplicaSet이 이미 지워져서",
      "rollout undo는 replicas만 되돌려서",
      "템플릿은 돌아가도 ConfigMap은 하나뿐이고 이미 새 값이라서",
    ],
    answer: 3,
    explanation:
      "롤백은 Pod 템플릿을 옛 ReplicaSet의 것으로 돌릴 뿐, 같은 이름의 ConfigMap 내용은 건드리지 않는다. 그래서 옛 Pod도 새 설정을 읽는다. ConfigMap 이름에 내용 해시를 붙이면 옛 ConfigMap이 남아 있어 롤백과 함께 설정도 돌아간다.",
    anchor: "설정이-바뀌면-pod를-다시-띄우게-하기",
  },
  {
    id: "k8s-configmap-5",
    post: "k8s-configmap",
    question: "immutable: true로 만든 ConfigMap에 대한 설명으로 맞는 것은?",
    choices: [
      "data는 못 바꾸지만 immutable을 false로 돌리면 다시 고칠 수 있다",
      "data도 immutable 필드도 바꿀 수 없고, kubelet이 그 ConfigMap에 watch를 걸지 않는다",
      "라벨과 어노테이션도 바꿀 수 없다",
      "Pod가 이 ConfigMap을 환경 변수로만 쓸 수 있다",
    ],
    answer: 1,
    explanation:
      "한 번 잠그면 data와 immutable 모두 Forbidden으로 거절되고, 바꾸려면 지우고 다시 만들어야 한다. 라벨 같은 메타데이터는 바꿀 수 있다. 바뀔 일이 없으니 kubelet이 watch를 걸지 않아 큰 클러스터에서 API 서버 부담이 준다.",
    anchor: "immutable로-잠그기",
  },
  {
    id: "k8s-configmap-6",
    post: "k8s-configmap",
    question: "300KB짜리 대시보드 ConfigMap을 kubectl apply로 올리자 metadata.annotations: Too long 오류가 났다. 가장 간단한 해결은?",
    choices: [
      "ConfigMap 1MiB 한도를 API 서버 옵션으로 늘린다",
      "binaryData로 옮겨 크기를 줄인다",
      "kubectl apply --server-side로 적용해 last-applied 어노테이션을 남기지 않는다",
      "immutable: true를 달아 어노테이션 검사를 건너뛴다",
    ],
    answer: 2,
    explanation:
      "클라이언트 쪽 apply는 적용한 내용 전체를 last-applied-configuration 어노테이션에 복사하는데, 어노테이션은 합쳐서 256KiB까지라 1MiB보다 먼저 걸린다. 서버 쪽 apply는 이 어노테이션을 쓰지 않아 통과한다. binaryData는 base64라 오히려 커진다.",
    anchor: "1mib를-넘으면-만들어지지-않는다",
  },
];
