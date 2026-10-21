import type { QuizQuestion } from "../types";

export const K8S_JOB_CRONJOB: QuizQuestion[] = [
  {
    id: "k8s-job-cronjob-1",
    post: "k8s-job-cronjob",
    question: "backoffLimit 3인 Job이 계속 실패한다. Pod는 모두 몇 개 만들어지고, 재시도 사이 간격은 어떻게 되나?",
    choices: [
      "3개, 간격은 매번 10초",
      "3개, 간격은 10초·20초·40초",
      "4개, 간격은 10초·20초·40초",
      "4개, 간격 없이 바로",
    ],
    answer: 2,
    explanation:
      "첫 시도 하나에 재시도 셋, 모두 넷이다. 실패한 Pod 수가 한도 3을 넘는 네 번째 실패에서 BackoffLimitExceeded로 멈춘다. 재시도 간격은 10초에서 두 배씩 늘고 상한은 10분이다.",
    anchor: "실패를-몇-번까지-참나-backofflimit",
  },
  {
    id: "k8s-job-cronjob-2",
    post: "k8s-job-cronjob",
    question: "activeDeadlineSeconds로 실패한 Job의 원인을 보려는데 Pod 로그가 없다. 왜인가?",
    choices: [
      "시간 한도에 걸리면 컨트롤러가 돌던 Pod를 지우기 때문이다",
      "ttlSecondsAfterFinished가 기본으로 0이기 때문이다",
      "restartPolicy가 Never라 로그를 남기지 않기 때문이다",
      "시간 한도는 backoffLimit을 0으로 바꾸기 때문이다",
    ],
    answer: 0,
    explanation:
      "DeadlineExceeded가 되면 Job 컨트롤러가 활성 Pod를 지우고 Job을 실패시킨다. Pod가 사라지니 kubectl logs로 볼 수 없다. 로그를 클러스터 밖으로 모으거나 작업이 진행 위치를 남기게 해야 한다.",
    anchor: "시간-한도와-뒷정리",
  },
  {
    id: "k8s-job-cronjob-3",
    post: "k8s-job-cronjob",
    question: "Indexed Job 네 번호 중 2번만 계속 실패해서 나머지까지 멈추는 일을 막고 싶다. 무엇을 쓰나?",
    choices: [
      "parallelism을 1로 줄인다",
      "backoffLimitPerIndex로 번호마다 실패를 따로 센다",
      "activeDeadlineSeconds를 늘린다",
      "completionMode를 NonIndexed로 바꾼다",
    ],
    answer: 1,
    explanation:
      "backoffLimit은 Job 전체의 실패를 세서 한 번호가 한도를 다 쓰면 모두 멈춘다. backoffLimitPerIndex는 번호마다 따로 세서 2번만 실패로 표시하고 나머지는 끝까지 간다. 이후 failedIndexes에 적힌 번호만 다시 돌리면 된다.",
    anchor: "번호마다-따로-세는-backofflimitperindex",
  },
  {
    id: "k8s-job-cronjob-4",
    post: "k8s-job-cronjob",
    question: "backoffLimit 6인 마이그레이션 Job이 설정 오류로 같은 실패를 여섯 번 반복한다. 한 번에 멈추게 하려면?",
    choices: [
      "restartPolicy를 OnFailure로 바꾼다",
      "ttlSecondsAfterFinished를 0으로 둔다",
      "parallelism을 0으로 둔다",
      "앱이 설정 오류에 정해진 종료 코드를 쓰게 하고 podFailurePolicy의 FailJob 규칙을 건다",
    ],
    answer: 3,
    explanation:
      "podFailurePolicy는 종료 코드나 Pod 조건으로 실패를 가른다. onExitCodes에 그 코드를 걸고 action을 FailJob으로 두면 backoffLimit과 상관없이 첫 실패에서 멈추고, 메시지에 걸린 규칙 번호가 남는다. podFailurePolicy는 restartPolicy가 Never여야 쓸 수 있다.",
    anchor: "실패의-종류를-가르는-podfailurepolicy",
  },
  {
    id: "k8s-job-cronjob-5",
    post: "k8s-job-cronjob",
    question: "backoffLimit 0인 Job이 노드 drain 한 번에 실패로 끝나는 것을 막으려면?",
    choices: [
      "podFailurePolicy에 DisruptionTarget 조건을 Ignore하는 규칙을 넣는다",
      "drain할 때 --ignore-daemonsets를 준다",
      "completions를 2로 올린다",
      "Job에 PriorityClass를 준다",
    ],
    answer: 0,
    explanation:
      "Eviction API로 쫓겨난 Pod에는 DisruptionTarget 조건이 붙는다. 이 조건에 Ignore 규칙을 걸면 실패 수에 넣지 않고 다른 노드에 새 Pod를 만든다. --ignore-daemonsets는 DaemonSet Pod를 남기는 옵션이라 상관없다.",
    anchor: "쫓겨난-pod는-세지-않는다",
  },
  {
    id: "k8s-job-cronjob-6",
    post: "k8s-job-cronjob",
    question: "매분 도는 CronJob을 3분 넘게 suspend했다가 풀었다. startingDeadlineSeconds는 300이다. 몇 개의 밀린 Job이 만들어지나?",
    choices: [
      "놓친 회차 수만큼 세 개",
      "하나도 만들지 않고 다음 회차를 기다린다",
      "놓친 회차 중 가장 최근 하나",
      "100개를 넘지 않는 한 모두",
    ],
    answer: 2,
    explanation:
      "CronJob 컨트롤러는 놓친 회차를 세지만 그중 마지막 하나만 실행한다. 실습에서도 01:24, 01:25, 01:26을 놓친 뒤 01:26 회차 하나만 만들어졌다. 회차마다 꼭 돌아야 하는 작업은 마지막 처리 지점부터 이어서 처리하게 만들거나 빠진 회차를 감시한다.",
    anchor: "cronjob은-놓친-회차를-몰아서-돌리지-않는다",
  },
  {
    id: "k8s-job-cronjob-7",
    post: "k8s-job-cronjob",
    question: "Job에 podFailurePolicy가 없을 때 Pod에 삭제 표시가 붙으면 교체 Pod는 언제 생기나?",
    choices: [
      "옛 Pod가 Failed가 된 뒤에",
      "삭제 표시가 붙자마자. 그래서 옛 Pod와 잠깐 겹칠 수 있다",
      "다음 backoff 간격이 지난 뒤에",
      "사람이 suspend를 풀어야 생긴다",
    ],
    answer: 1,
    explanation:
      "기본 교체 정책 TerminatingOrFailed는 deletionTimestamp가 보이면 바로 새 Pod를 만든다. 옛 Pod가 종료 유예 시간 동안 아직 돌 수 있어 같은 자원에 쓰는 작업은 겹친다. podReplacementPolicy: Failed를 주면 옛 Pod가 완전히 끝난 뒤에 만들고, podFailurePolicy가 있으면 이게 기본이다.",
    anchor: "쫓겨난-pod는-세지-않는다",
  },
];
