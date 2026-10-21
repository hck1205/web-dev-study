import type { QuizQuestion } from "../types";

export const K8S_IN_PLACE_RESIZE: QuizQuestion[] = [
  {
    id: "k8s-in-place-resize-1",
    post: "k8s-in-place-resize",
    question: "도는 Pod의 CPU limits를 재시작 없이 올리려고 kubectl patch pod로 resources를 보냈더니 'pod updates may not change fields' 오류가 났다. 무엇을 바꿔야 하나?",
    choices: [
      "--subresource resize를 붙여 resize 하위 리소스로 보낸다",
      "--force를 붙여 다시 보낸다",
      "Deployment의 템플릿을 고친다",
      "--subresource status로 보낸다",
    ],
    answer: 0,
    explanation:
      "Pod spec의 resources는 일반 patch로는 여전히 바꿀 수 없고 resize 하위 리소스로만 바뀐다. kubectl 1.32 이상이 필요하다. Deployment 템플릿을 고치면 롤링 업데이트로 Pod가 새로 뜨고, status 하위 리소스는 kubelet이 보고하는 곳이다.",
    anchor: "resize-하위-리소스로-요청한다",
  },
  {
    id: "k8s-in-place-resize-2",
    post: "k8s-in-place-resize",
    question: "resize 요청이 'pod/api patched'로 끝났다. CPU가 실제로 바뀌었는지 확인하려면 무엇을 보나?",
    choices: [
      "spec.containers[].resources가 새 값인지",
      "metadata.generation이 올랐는지",
      "status.containerStatuses[].resources가 새 값이 됐는지와 PodResize 조건이 사라졌는지",
      "Deployment의 rollout status",
    ],
    answer: 2,
    explanation:
      "API 서버는 원하는 값을 spec에 적을 뿐이고, kubelet이 cgroup을 바꾼 뒤 status.containerStatuses[].resources에 실제 값을 보고한다. spec과 generation은 요청이 접수됐다는 뜻이지 적용됐다는 뜻이 아니다. 진행 중이면 PodResizeInProgress, 막히면 PodResizePending 조건이 붙는다.",
    anchor: "원하는-값-배정된-값-실제-값",
  },
  {
    id: "k8s-in-place-resize-3",
    post: "k8s-in-place-resize",
    question: "JVM 앱 컨테이너의 메모리 resizePolicy를 RestartContainer로 두는 이유로 가장 알맞은 것은?",
    choices: [
      "메모리 resize는 Pod를 다른 노드로 옮겨야 하기 때문에",
      "힙 크기를 시작할 때 정하는 런타임은 한도가 바뀌어도 모르고, 한도를 줄이면 OOMKilled 위험이 있기 때문에",
      "RestartContainer여야 resize가 더 빨리 끝나기 때문에",
      "NotRequired로는 메모리를 늘릴 수 없기 때문에",
    ],
    answer: 1,
    explanation:
      "CPU는 cgroup quota만 바꾸면 프로세스가 모른 채 적용되지만, JVM 힙처럼 시작 때 정한 메모리 크기는 한도가 바뀌어도 그대로다. 줄일 때는 사용량이 새 한도보다 크면 OOM 위험도 있다. RestartContainer는 Pod가 아니라 컨테이너만 재시작해 이름과 IP는 유지된다.",
    anchor: "메모리는-재시작이-필요할-수-있다",
  },
  {
    id: "k8s-in-place-resize-4",
    post: "k8s-in-place-resize",
    question: "requests cpu 500m·memory 512Mi, limits cpu 1·memory 512Mi인 Pod의 CPU requests를 1로 올리는 resize가 거절됐다. 이유는?",
    choices: [
      "CPU requests는 limits보다 작아야 하기 때문에",
      "노드에 자리가 없기 때문에",
      "메모리 resizePolicy가 RestartContainer라서",
      "requests와 limits가 CPU와 메모리 모두 같아져 QoS가 Burstable에서 Guaranteed로 바뀌기 때문에",
    ],
    answer: 3,
    explanation:
      "QoS 클래스는 Pod를 만들 때 정해지고 resize로 바꿀 수 없다. 메모리는 이미 requests와 limits가 같으니 CPU까지 같아지면 Guaranteed가 된다. API 서버가 'Pod QOS Class may not change as a result of resizing'으로 거절한다. 노드 자리 문제는 API 서버가 아니라 kubelet이 판정한다.",
    anchor: "바꿀-수-없는-것들",
  },
  {
    id: "k8s-in-place-resize-5",
    post: "k8s-in-place-resize",
    question: "노드에 실제로 쓰이는 requests는 절반뿐인데 새 Pod가 Insufficient cpu로 Pending이다. 같은 노드에 resize를 요청해 둔 Pod가 있다면 이유는?",
    choices: [
      "스케줄러가 결정이 안 난 resize Pod를 원하는 값, 배정된 값, 실제 값 중 가장 큰 값으로 세기 때문에",
      "resize 중인 노드는 자동으로 cordon되기 때문에",
      "kubelet이 resize 동안 새 Pod를 받지 않기 때문에",
      "resize가 끝날 때까지 ResourceQuota가 잠기기 때문에",
    ],
    answer: 0,
    explanation:
      "결정이 안 난 resize가 있으면 스케줄러는 그 Pod의 몫을 세 값 중 최댓값으로 잡는다. 늘리려던 자리에 새 Pod가 끼어들어 resize가 영영 막히는 것을 막으려는 것이다. 그래서 노드가 비어 보여도 새 Pod가 Pending이 될 수 있다.",
    anchor: "노드에-자리가-없을-때",
  },
  {
    id: "k8s-in-place-resize-6",
    post: "k8s-in-place-resize",
    question: "Deployment가 관리하는 Pod 하나를 손으로 resize했다. 이후에 일어나는 일은?",
    choices: [
      "ReplicaSet이 템플릿과 다르다고 보고 곧바로 Pod를 되돌린다",
      "Deployment 템플릿이 resize한 값으로 자동 갱신된다",
      "Pod는 바뀐 값으로 계속 돌지만, 롤아웃이나 재생성 때 템플릿 값으로 돌아간다",
      "ReplicaSet이 그 Pod를 지우고 새 Pod를 만든다",
    ],
    answer: 2,
    explanation:
      "ReplicaSet은 Pod 수만 맞출 뿐 도는 Pod의 resources를 되돌리지 않는다. 템플릿은 그대로라 다음 롤아웃이나 Pod 재생성 때 옛 값으로 돌아간다. 오래 쓸 값은 템플릿에 반영하거나 VPA의 InPlaceOrRecreate에 맡긴다.",
    anchor: "deployment와는-따로-논다",
  },
];
