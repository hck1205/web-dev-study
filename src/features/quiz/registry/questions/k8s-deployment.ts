import type { QuizQuestion } from "../types";

export const K8S_DEPLOYMENT: QuizQuestion[] = [
  {
    id: "k8s-deployment-1",
    post: "k8s-deployment",
    question: "replicas 10, maxSurge 25%, maxUnavailable 25%인 Deployment가 롤링 업데이트 중 넘지 않는 전체 Pod 수와 지키는 최소 Available 수는?",
    choices: ["12개와 8개", "13개와 8개", "13개와 7개", "12개와 7개"],
    answer: 1,
    explanation:
      "maxSurge는 올림이라 2.5가 3이 되고, maxUnavailable은 내림이라 2.5가 2가 된다. 그래서 전체는 10 + 3 = 13개를 넘지 않고, Available은 10 − 2 = 8개 아래로 내려가지 않는다.",
    anchor: "maxsurge와-maxunavailable이-정하는-두-줄",
  },
  {
    id: "k8s-deployment-2",
    post: "k8s-deployment",
    question: "CI가 같은 `app:latest` 태그로 새 이미지를 올리고 `kubectl apply`를 했는데 Pod가 바뀌지 않는다. 이유는?",
    choices: [
      "imagePullPolicy가 Always가 아니어서 노드가 이미지를 받지 않았다",
      "Pod 템플릿 문자열이 그대로라 새 ReplicaSet이 생기지 않았다",
      "progressDeadlineSeconds가 지나서 배포가 취소됐다",
      "maxSurge가 0이라 새 Pod를 띄울 수 없었다",
    ],
    answer: 1,
    explanation:
      "Deployment는 spec.template이 바뀌어야 새 리비전을 만든다. 태그 문자열이 같으면 템플릿 해시도 같아서 아무 일도 일어나지 않는다. 커밋 SHA 같은 고유한 태그나 다이제스트를 쓰고, 같은 템플릿으로 다시 띄우려면 rollout restart를 쓴다.",
    anchor: "템플릿이-바뀌어야-새-리비전이-생긴다",
  },
  {
    id: "k8s-deployment-3",
    post: "k8s-deployment",
    question: "노드에 여유 자원이 거의 없는 클러스터에서 롤링 업데이트가 첫 Pod부터 멈춘다. 전략을 어떻게 바꾸면 자원 여유 없이도 배포가 진행되나?",
    choices: [
      "maxSurge 1, maxUnavailable 0",
      "maxSurge 0, maxUnavailable 0",
      "maxSurge 0, maxUnavailable 1",
      "minReadySeconds를 늘린다",
    ],
    answer: 2,
    explanation:
      "maxSurge 0이면 더 띄우지 않고 옛 Pod를 먼저 하나 빼서 그 자리에 새 Pod를 띄운다. 대신 배포 중 용량이 하나만큼 줄어든다. 둘 다 0은 API 서버가 거절한다.",
    anchor: "더-띄울-것인가-잠깐-덜-쓸-것인가",
  },
  {
    id: "k8s-deployment-4",
    post: "k8s-deployment",
    question: "ReadWriteOnce 볼륨을 쓰는 앱이 배포 때마다 새 Pod가 볼륨을 붙이지 못해 멈춘다. 가장 알맞은 전략은?",
    choices: [
      "maxSurge를 100%로 올린다",
      "revisionHistoryLimit를 0으로 둔다",
      "progressDeadlineSeconds를 늘린다",
      "Recreate로 바꿔 옛 Pod가 모두 사라진 뒤 새 Pod를 띄운다",
    ],
    answer: 3,
    explanation:
      "롤링 업데이트는 옛 Pod와 새 Pod가 함께 떠 있어서 볼륨을 하나만 붙일 수 있으면 새 Pod가 기다린다. Recreate는 옛 Pod가 다 내려간 뒤 새 Pod를 만들기 때문에 다운타임을 대가로 두 버전이 섞이지 않는다.",
    anchor: "한꺼번에-내리고-올리는-recreate",
  },
  {
    id: "k8s-deployment-5",
    post: "k8s-deployment",
    question: "새 버전이 계속 Ready가 안 되어 progressDeadlineSeconds가 지났다. 쿠버네티스는 무엇을 하나?",
    choices: [
      "Progressing 조건을 False로 표시하고, 되돌리지는 않는다",
      "자동으로 직전 리비전으로 되돌린다",
      "옛 Pod를 모두 지우고 새 Pod만 남긴다",
      "Deployment를 paused로 바꾼다",
    ],
    answer: 0,
    explanation:
      "마감은 실패를 표시하는 시각일 뿐이다. ProgressDeadlineExceeded가 되고 rollout status가 실패로 끝나지만 옛 Pod는 그대로 있고 자동 롤백도 없다. 그래서 CI가 rollout status로 실패를 잡아 undo한다.",
    anchor: "끝나지-않는-배포와-progressdeadlineseconds",
  },
  {
    id: "k8s-deployment-6",
    post: "k8s-deployment",
    question: "리비전 1, 2, 3이 있는 상태에서 `kubectl rollout undo`를 했다. 기록은 어떻게 바뀌나?",
    choices: [
      "1, 2, 3, 4가 되고 리비전 2 템플릿으로 새 ReplicaSet이 만들어진다",
      "1, 2가 되고 리비전 3이 지워진다",
      "1, 3, 4가 되고 리비전 2의 ReplicaSet이 4번으로 다시 쓰인다",
      "1, 2, 3 그대로이고 현재 리비전 표시만 2로 옮겨진다",
    ],
    answer: 2,
    explanation:
      "undo는 리비전 2의 템플릿을 덮어쓰고, 해시가 같으니 그 ReplicaSet을 다시 키운다. 되살린 ReplicaSet은 새 번호 4를 받고 2는 기록에서 사라진다.",
    anchor: "리비전-기록과-되돌리기",
  },
  {
    id: "k8s-deployment-7",
    post: "k8s-deployment",
    question: "CI가 이미지를 바꿨고 kubectl apply도 성공했는데 몇 시간째 새 ReplicaSet이 없다. 먼저 확인할 것은?",
    choices: [
      "PodDisruptionBudget의 minAvailable",
      "Deployment의 spec.paused가 true인지",
      "노드의 커널 버전",
      "Service의 sessionAffinity",
    ],
    answer: 1,
    explanation:
      "rollout pause를 걸고 잊으면 템플릿이 바뀌어도 롤아웃이 시작되지 않고, apply는 성공으로 끝나서 알아차리기 어렵다. PDB는 롤링 업데이트에 관여하지 않는다.",
    anchor: "여러-군데를-고칠-때-pause와-resume",
  },
];
