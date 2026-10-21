import type { QuizQuestion } from "../types";

export const K8S_CONTROLLERS_RECONCILE: QuizQuestion[] = [
  {
    id: "k8s-controllers-reconcile-1",
    post: "k8s-controllers-reconcile",
    question: "컨트롤러가 꺼진 동안 replicas를 6, 0, 5로 바꿨다. 다시 켜진 컨트롤러는 어떻게 움직이나?",
    choices: [
      "6개를 만들고, 모두 지운 뒤 5개를 만든다",
      "목록을 다시 받아 지금 Pod 수와 5를 비교하고 차이만 메운다",
      "놓친 이벤트를 etcd에서 다시 받아 차례로 처리한다",
      "마지막 이벤트를 받지 못했으니 아무것도 하지 않는다",
    ],
    answer: 1,
    explanation:
      "쿠버네티스 컨트롤러는 level-triggered라 이벤트 내용이 아니라 지금 상태를 다시 읽고 판단한다. 재시작하면 list부터 받으니 중간 값은 상관없다. 꺼져 있던 동안의 이벤트를 다시 받을 방법은 없다.",
    anchor: "이벤트가-아니라-상태를-보고-움직인다",
  },
  {
    id: "k8s-controllers-reconcile-2",
    post: "k8s-controllers-reconcile",
    question: "Pod 100개가 한꺼번에 바뀌었는데 주인 ReplicaSet의 reconcile은 몇 번만 돌았다. 무엇 덕분인가?",
    choices: [
      "API 서버가 이벤트를 100개 중 하나만 보내서",
      "kubelet이 이벤트를 묶어서 보내서",
      "작업 큐가 같은 키를 한 번만 담고 처리 중인 키를 합쳐서",
      "etcd compaction이 이벤트를 지워서",
    ],
    answer: 2,
    explanation:
      "이벤트 핸들러는 객체가 아니라 네임스페이스/이름 키를 큐에 넣고, 큐는 같은 키를 중복해서 담지 않는다. reconcile은 키 하나로 지금 상태를 다시 읽으니 몇 번 합쳐도 결과가 같다. API 서버는 이벤트를 모두 보낸다.",
    anchor: "informer와-작업-큐",
  },
  {
    id: "k8s-controllers-reconcile-3",
    post: "k8s-controllers-reconcile",
    question: "직접 만든 컨트롤러가 status를 쓸 때마다 다시 깨어나 끝없이 reconcile을 돈다. 가장 그럴듯한 원인은?",
    choices: [
      "값이 같아도 매번 status를 써서 그 변경이 다시 이벤트가 되기 때문",
      "리더 선출을 켜 두었기 때문",
      "ownerReferences를 달았기 때문",
      "watch에 allowWatchBookmarks를 줬기 때문",
    ],
    answer: 0,
    explanation:
      "쓰면 resourceVersion이 바뀌고, 그 MODIFIED 이벤트가 같은 키를 다시 큐에 넣는다. 바뀐 게 없으면 쓰지 않아야 루프가 멈춘다. 멱등한 reconcile은 할 일이 없으면 아무것도 쓰지 않는다.",
    anchor: "몇-번을-돌려도-같은-결과-멱등성",
  },
  {
    id: "k8s-controllers-reconcile-4",
    post: "k8s-controllers-reconcile",
    question: "컨트롤러의 update가 409 Conflict를 받았다. 올바른 처리는?",
    choices: [
      "resourceVersion을 빼고 다시 보내 강제로 덮어쓴다",
      "컨트롤러 프로세스를 재시작한다",
      "에러로 보고 키를 영영 버린다",
      "최신 객체를 다시 읽어 변경을 얹어 쓰거나, 키를 큐에 다시 넣는다",
    ],
    answer: 3,
    explanation:
      "409는 읽은 뒤 다른 쓰기가 끼어들었다는 신호다. 다시 읽고 다시 쓰거나 다음 reconcile에 맡기면 된다. resourceVersion 없이 덮어쓰면 끼어든 쪽의 변경이 사라진다.",
    anchor: "409를-만나면-다시-읽는다",
  },
  {
    id: "k8s-controllers-reconcile-5",
    post: "k8s-controllers-reconcile",
    question: "실습 컨트롤러로 만든 Pod들이, 원하는 상태 ConfigMap을 지우자 함께 사라졌다. 누가 지웠나?",
    choices: [
      "실습 컨트롤러의 reconcile",
      "컨트롤러 매니저의 가비지 컬렉터",
      "kube-scheduler",
      "kubectl delete가 하위 객체까지 직접 지워서",
    ],
    answer: 1,
    explanation:
      "Pod의 ownerReferences에 ConfigMap이 주인으로 적혀 있어서 주인이 사라지자 가비지 컬렉터가 지웠다. 실습 컨트롤러는 원하는 상태가 없다며 아무것도 하지 않았다. 클러스터 밖 자원은 가비지 컬렉터가 못 지우니 finalizer로 직접 정리한다.",
    anchor: "돌려-보기-만들고-지우고-다시-맞추기",
  },
  {
    id: "k8s-controllers-reconcile-6",
    post: "k8s-controllers-reconcile",
    question: "spec을 바꿨는데 컨트롤러가 반응하지 않는다. 첫 번째로 비교할 두 값은?",
    choices: [
      "uid와 creationTimestamp",
      "replicas와 readyReplicas",
      "metadata.generation과 status.observedGeneration",
      "Lease의 acquireTime과 leaseTransitions",
    ],
    answer: 2,
    explanation:
      "두 값이 다르면 컨트롤러가 아직 그 spec을 처리하지 못한 것이다. 그다음 컨트롤러가 살아 있고 리더 Lease가 갱신되는지, 작업 큐 깊이와 재시도 지표, 권한을 차례로 본다. replicas 비교는 처리된 뒤의 결과다.",
    anchor: "컨트롤러가-일을-안-할-때-보는-순서",
  },
];
