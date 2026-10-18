import type { QuizQuestion } from "../types";

export const K8S_POD_BASICS: QuizQuestion[] = [
  {
    id: "k8s-pod-basics-1",
    post: "k8s-pod-basics",
    question: "한 Pod에 nginx 컨테이너 두 개를 넣었더니 하나가 Address already in use로 죽었다. 왜 그럴까?",
    choices: [
      "두 컨테이너가 같은 이미지를 써서 파일 시스템이 겹쳤다",
      "같은 Pod의 컨테이너는 네트워크 namespace를 함께 써서 포트 공간도 하나다",
      "kubelet이 한 Pod에 같은 이미지를 두 번 띄우지 못하게 막는다",
      "Pod IP가 두 개 필요한데 CNI가 하나만 줬다",
    ],
    answer: 1,
    explanation:
      "Pod 안의 컨테이너는 pause가 붙잡은 네트워크 namespace에 함께 합류하므로 IP와 포트 공간이 하나다. 두 nginx가 모두 80을 열려고 하면 늦게 연 쪽이 실패한다. 파일 시스템은 오히려 컨테이너마다 따로다.",
    anchor: "한-pod-안에서-나눠-갖는-것",
  },
  {
    id: "k8s-pod-basics-2",
    post: "k8s-pod-basics",
    question: "앱 컨테이너가 여러 번 재시작했는데도 Pod IP가 그대로인 이유는?",
    choices: [
      "kubelet이 IP를 캐시했다가 같은 값을 다시 붙여 준다",
      "Service가 Pod IP를 고정해 준다",
      "namespace를 pause 컨테이너가 붙잡고 있어서 앱이 재시작해도 sandbox가 유지된다",
      "Pod IP는 노드 IP를 그대로 쓰기 때문이다",
    ],
    answer: 2,
    explanation:
      "네트워크 namespace는 pause(sandbox)가 만들고 들고 있다. 앱 컨테이너는 거기에 합류할 뿐이라 앱이 죽었다 떠도 namespace와 IP가 남는다. sandbox 자체가 다시 만들어지면 그때는 IP가 바뀐다.",
    anchor: "pause-컨테이너가-붙잡고-있는-것",
  },
  {
    id: "k8s-pod-basics-3",
    post: "k8s-pod-basics",
    question: "kubectl get pod에서 NODE 칸이 비어 있고 STATUS가 Pending이다. 어느 단계에서 멈춘 것인가?",
    choices: [
      "스케줄러가 아직 노드를 정하지 못했다",
      "kubelet이 이미지를 받는 중이다",
      "API 서버가 Pod를 저장하지 못했다",
      "컨테이너가 시작했다가 바로 죽었다",
    ],
    answer: 0,
    explanation:
      "스케줄러는 nodeName이 빈 Pod를 골라 노드를 정하고 binding을 만든다. NODE가 비어 있다면 그 단계를 지나지 못한 것이다. 이미지 받기나 컨테이너 시작은 노드가 정해진 뒤 kubelet이 하는 일이고, 저장에 실패했다면 Pod가 목록에 아예 없다.",
    anchor: "kubectl-run-한-줄이-지나가는-길",
  },
  {
    id: "k8s-pod-basics-4",
    post: "k8s-pod-basics",
    question: "떠 있는 Pod의 containerPort를 kubectl patch로 바꾸려 했더니 Forbidden이 났다. 어떻게 해야 하나?",
    choices: [
      "kubectl edit로 바꾸면 허용된다",
      "--force 옵션을 붙여 다시 patch한다",
      "kubelet을 재시작하고 다시 시도한다",
      "Pod 스펙은 대부분 바꿀 수 없으니 새 Pod를 만들어야 하고, 보통은 Deployment의 템플릿을 바꾼다",
    ],
    answer: 3,
    explanation:
      "Pod는 이미지, activeDeadlineSeconds, toleration 추가 같은 몇 가지만 바꿀 수 있다. edit도 같은 API 검사를 받으므로 막힌다. Deployment의 템플릿을 바꾸면 새 ReplicaSet이 새 Pod를 만들어 바꿔 끼운다.",
    anchor: "매니페스트-한-줄씩-읽기",
  },
  {
    id: "k8s-pod-basics-5",
    post: "k8s-pod-basics",
    question: "Deployment가 만든 Pod 하나를 지웠더니 곧바로 새 Pod가 떴다. 맞는 설명은?",
    choices: [
      "지운 Pod가 같은 이름과 IP로 되살아났다",
      "ReplicaSet이 원하는 수보다 적은 것을 보고 같은 템플릿으로 다른 Pod를 만들었다",
      "kubelet이 지운 Pod를 같은 노드에서 재시작했다",
      "삭제가 실패해서 원래 Pod가 그대로 남았다",
    ],
    answer: 1,
    explanation:
      "ReplicaSet 컨트롤러는 셀렉터에 맞는 Pod 수를 원하는 수와 계속 비교하고, 모자라면 새로 만든다. 그래서 새 Pod는 이름 끝 다섯 글자와 IP가 다르고 다른 노드에 놓일 수도 있다. kubelet은 같은 Pod 안의 컨테이너를 재시작할 뿐 지워진 Pod를 되살리지 않는다.",
    anchor: "직접-만든-pod는-아무도-다시-살려-주지-않는다",
  },
  {
    id: "k8s-pod-basics-6",
    post: "k8s-pod-basics",
    question: "웹 앱과 PostgreSQL을 한 Pod에 넣고 replicas를 3으로 늘리면 어떻게 되나?",
    choices: [
      "서로 데이터를 모르는 DB가 세 개 생기고, 앱을 배포할 때마다 DB도 함께 내려간다",
      "DB는 하나만 뜨고 앱만 세 개로 늘어난다",
      "쿠버네티스가 DB 컨테이너를 자동으로 StatefulSet으로 옮긴다",
      "같은 Pod라 세 DB가 자동으로 복제 관계를 맺는다",
    ],
    answer: 0,
    explanation:
      "같은 Pod의 컨테이너는 함께 스케줄되고 함께 늘어나고 함께 다시 만들어진다. 앱만 늘리고 싶어도 DB까지 셋이 되고, 각자 데이터를 따로 갖는다. 따로 늘리고 따로 배포하는 것은 다른 Pod로 나눈다.",
    anchor: "한-pod에-무엇을-같이-넣나",
  },
];
