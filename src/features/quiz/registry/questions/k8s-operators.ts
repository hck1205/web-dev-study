import type { QuizQuestion } from "../types";

export const K8S_OPERATORS: QuizQuestion[] = [
  {
    id: "k8s-operators-1",
    post: "k8s-operators",
    question: "Backup 오퍼레이터가 CronJob은 ownerReferences로 묶고, 저장소 경로는 finalizer로 정리하는 이유는?",
    choices: [
      "CronJob은 finalizer를 달 수 없는 종류라서",
      "가비지 컬렉터는 클러스터 안 객체만 지우고, 클러스터 밖 자원은 오퍼레이터가 직접 치워야 해서",
      "finalizer가 ownerReferences보다 빠르게 지워서",
      "저장소 경로는 네임스페이스가 없어서 ownerReferences를 쓸 수 없어서",
    ],
    answer: 1,
    explanation:
      "ownerReferences로 묶인 자식은 주인이 사라지면 가비지 컬렉터가 지운다. 버킷 같은 바깥 자원은 가비지 컬렉터가 모르니 finalizer로 삭제를 붙잡고 오퍼레이터가 정리한 뒤 뗀다.",
    anchor: "운영-지식을-코드로-옮긴-컨트롤러",
  },
  {
    id: "k8s-operators-2",
    post: "k8s-operators",
    question: "오퍼레이터가 꺼진 동안 지운 Backup이 남아 있어 finalizer를 손으로 뗐다. 어떤 결과가 남나?",
    choices: [
      "Backup과 CronJob은 사라지지만 저장소의 경로는 아무도 지우지 않고 남는다",
      "Backup은 지워지고 오퍼레이터가 다시 켜지면 저장소 경로도 정리한다",
      "CronJob이 남아 계속 백업을 돈다",
      "API 서버가 finalizer 제거를 거절한다",
    ],
    answer: 0,
    explanation:
      "finalizer를 떼면 객체가 즉시 지워지고 CronJob은 가비지 컬렉터가 지운다. 정리할 대상이 사라졌으니 오퍼레이터가 다시 켜져도 바깥 자원을 치울 기회가 없다. 실습에서도 shop-users-db가 남았다.",
    anchor: "오퍼레이터가-멈춘-채로-지우면",
  },
  {
    id: "k8s-operators-3",
    post: "k8s-operators",
    question: "오퍼레이터가 바깥 자원(버킷)을 만들기 전에 finalizer부터 다는 이유는?",
    choices: [
      "finalizer가 있어야 버킷 API를 부를 권한이 생겨서",
      "finalizer를 달면 generation이 올라 reconcile이 빨라져서",
      "버킷을 먼저 만들면 finalizer를 달기 전에 지워진 Backup의 버킷을 아무도 치우지 않을 수 있어서",
      "API 서버가 finalizer 없는 CR의 status 쓰기를 막아서",
    ],
    answer: 2,
    explanation:
      "만들고 나서 finalizer를 다는 사이에 객체가 지워지면 삭제를 붙잡을 장치가 없어 바깥 자원이 고아가 된다. 그래서 finalizer를 먼저 달고, 그 변경 이벤트로 다시 들어와 자원을 만든다.",
    anchor: "지울-때는-바깥부터-치운다-finalizer",
  },
  {
    id: "k8s-operators-4",
    post: "k8s-operators",
    question: "오퍼레이터가 status를 쓸 때마다 lastTransitionTime을 지금 시각으로 바꿨더니 API 요청이 끝없이 늘었다. 왜인가?",
    choices: [
      "lastTransitionTime 형식이 틀려서 재시도가 반복된다",
      "status 쓰기가 MODIFIED 이벤트를 만들고, 그 reconcile이 또 다른 값을 쓰는 고리가 생겨서",
      "status 서브리소스는 초당 쓰기 횟수가 제한되어서",
      "CronJob 컨트롤러가 status 변경마다 Job을 새로 만들어서",
    ],
    answer: 1,
    explanation:
      "자기가 쓴 변경에 다시 깨어나는 건 정상이지만, 그때 바뀐 게 없으면 쓰지 않아야 루프가 멈춘다. 조건의 시각은 status가 바뀔 때만 고치는 것이 관례이고 meta.SetStatusCondition도 그렇게 한다.",
    anchor: "돌려-보기-만들고-바꾸고-되돌리기",
  },
  {
    id: "k8s-operators-5",
    post: "k8s-operators",
    question: "오퍼레이터가 만든 CronJob의 schedule을 kubectl patch로 바꿨더니 1초 안에 원래대로 돌아왔다. 무엇을 보면 원인을 확인할 수 있나?",
    choices: [
      "CronJob의 ownerReferences와 managedFields의 manager",
      "CronJob 컨트롤러의 로그",
      "노드의 kubelet 로그",
      "CronJob의 successfulJobsHistoryLimit",
    ],
    answer: 0,
    explanation:
      "ownerReferences에 Backup이 주인으로 있고 managedFields의 manager가 오퍼레이터면, 오퍼레이터가 CronJob 이벤트를 받아 원하는 모양을 force로 다시 적용한 것이다. 고치려면 CR(Backup)을 바꾼다.",
    anchor: "오퍼레이터-때문에-막히는-순간",
  },
  {
    id: "k8s-operators-6",
    post: "k8s-operators",
    question: "팀에 Helm 차트가 이미 있고, 설치한 뒤에는 따로 판단할 운영 절차가 없다. 가장 알맞은 선택은?",
    choices: [
      "kubebuilder로 오퍼레이터를 새로 만든다",
      "Operator SDK의 Ansible 오퍼레이터로 감싼다",
      "CRD만 만들고 컨트롤러 없이 쓴다",
      "Helm 차트를 그대로 쓴다",
    ],
    answer: 3,
    explanation:
      "만든 뒤에 계속 지켜보며 판단할 일이 없으면 능력 단계로 1단계이고, 차트나 Kustomize로 충분하다. 오퍼레이터는 높은 권한으로 도는 코드라 유지할 이유가 있을 때만 만든다.",
    anchor: "오퍼레이터를-만들지-말아야-할-때",
  },
  {
    id: "k8s-operators-7",
    post: "k8s-operators",
    question: "status.conditions에 Ready 조건을 관례대로 두면 생기는 이점으로 맞는 것은?",
    choices: [
      "API 서버가 Ready=False인 CR의 수정을 막아 준다",
      "가비지 컬렉터가 Ready=False인 자식을 정리한다",
      "kubectl wait --for=condition=Ready처럼 기존 도구가 특별 처리 없이 상태를 읽는다",
      "스케줄러가 Ready=True인 CR을 우선 처리한다",
    ],
    answer: 2,
    explanation:
      "type, status, reason, message, lastTransitionTime 모양을 따르면 kubectl wait, ArgoCD, CI 스크립트가 같은 규칙으로 상태를 판정한다. 실습에서도 kubectl wait가 audit-db의 Ready를 그대로 기다렸다.",
    anchor: "statusconditions는-기계와-사람이-함께-읽는다",
  },
];
