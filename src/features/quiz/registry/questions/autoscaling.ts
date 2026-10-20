import type { QuizQuestion } from "../types";

export const AUTOSCALING: QuizQuestion[] = [
  {
    id: "autoscaling-1",
    post: "autoscaling",
    question: "시뮬레이션에서 스파이크 때 놓친 요청을 가장 크게 줄인 변경은?",
    choices: [
      "판단 주기를 60초에서 15초로 줄이기",
      "새 인스턴스가 준비되는 시간을 180초에서 30초로 줄이기(웜 풀)",
      "목표 사용률을 60%에서 70%로 올리기",
      "최대 대수를 늘리기",
    ],
    answer: 1,
    explanation:
      "판단 주기만 줄였을 때는 14.1%에서 11.2%로 조금 나아졌지만, 준비 시간을 30초로 줄이자 1.6%가 됐다. 반응 시간의 대부분이 부팅과 워밍업이라서 그 부분을 줄이는 것이 정책을 다듬는 것보다 효과가 크다.",
    anchor: "스파이크와-늘어나는-속도의-경주",
  },
  {
    id: "autoscaling-2",
    post: "autoscaling",
    question: "매일 9시에 쿠폰을 열고 새 인스턴스 준비에 3분이 걸린다. 예약 작업은 언제 걸어야 하나?",
    choices: [
      "9시 정각",
      "9시 1분, 부하가 오른 것을 확인한 뒤",
      "8시 57분보다 앞서, 준비 시간만큼 당겨서",
      "전날 밤 자정",
    ],
    answer: 2,
    explanation:
      "예약은 부하가 오는 시각에서 준비 시간을 뺀 시각에 걸어야 한다. 시뮬레이션에서 스파이크 100초 전에 예약하자 부팅이 끝나기 전에 스파이크가 와서 3.8%를 놓쳤다. 여유를 두고 일찍 거는 게 안전하다.",
    anchor: "스파이크와-늘어나는-속도의-경주",
  },
  {
    id: "autoscaling-3",
    post: "autoscaling",
    question: "대부분의 시간을 외부 API 응답을 기다리는 서비스에서 요청이 밀리는데 오토스케일링이 동작하지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "CPU 사용률 기준이라 기다리는 동안 CPU가 낮아서",
      "최소 대수가 너무 커서",
      "쿨다운이 너무 짧아서",
      "헬스 체크가 너무 자주 돌아서",
    ],
    answer: 0,
    explanation:
      "I/O를 기다리는 서비스는 요청이 밀려도 CPU가 낮게 나와 CPU 기준 정책이 늘리지 않는다. 인스턴스당 요청 수나 밀린 메시지 수처럼 부하에 직접 비례하는 지표로 바꾼다.",
    anchor: "무엇을-보고-늘리나",
  },
  {
    id: "autoscaling-4",
    post: "autoscaling",
    question: "부하가 경계선 근처에서 출렁일 때 늘렸다 줄였다를 반복하는 것을 막는 방법으로 알맞은 것은?",
    choices: [
      "늘리는 경계와 줄이는 경계를 같은 값으로 맞춘다",
      "판단 주기를 1초로 줄인다",
      "늘릴 때도 5분을 기다린다",
      "줄이는 쪽에 쿨다운이나 안정화 창을 둬서 천천히 줄인다",
    ],
    answer: 3,
    explanation:
      "늘리는 건 빠르게, 줄이는 건 천천히가 원칙이다. 시뮬레이션에서 시간당 64번이던 변경이 쿨다운으로 22번, 최근 5분 내내 낮을 때만 줄이는 안정화 창으로 3번이 됐다. 늘릴 때까지 늦추면 스파이크를 놓친다.",
    anchor: "줄일-때는-천천히",
  },
  {
    id: "autoscaling-5",
    post: "autoscaling",
    question: "앱 서버를 10대에서 30대로 늘렸더니 에러가 오히려 늘었다. 먼저 의심할 것은?",
    choices: [
      "LB 알고리즘",
      "늘어난 커넥션 풀이 DB의 최대 커넥션 수를 넘었거나 DB가 병목이다",
      "새 인스턴스의 OS 버전",
      "목표 사용률이 너무 높다",
    ],
    answer: 1,
    explanation:
      "서버마다 커넥션 풀이 있으니 대수가 세 배면 DB 커넥션도 세 배가 된다. 병목이 뒤에 있으면 앞을 늘려도 소용없고 오히려 악화된다. 앱 서버 최대 대수는 DB 커넥션 한도에서 거꾸로 계산해 둔다.",
    anchor: "오토스케일링이-도와주지-못할-때",
  },
  {
    id: "autoscaling-6",
    post: "autoscaling",
    question: "쿠버네티스에서 HPA가 replicas를 올렸는데 새 Pod가 Pending으로 남는다. 무엇이 필요한가?",
    choices: [
      "HPA의 안정화 창을 늘린다",
      "readiness probe를 끈다",
      "Pending Pod를 보고 노드를 띄우는 노드 오토스케일러(Cluster Autoscaler, Karpenter)",
      "Deployment를 StatefulSet으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "HPA는 Pod 수만 늘리고 노드는 늘리지 않는다. 노드에 requests를 받아 줄 자리가 없으면 Pod는 Pending이고, 노드 오토스케일러가 새 노드를 만들어야 들어간다. 그 시간이 반응 시간에 더해진다.",
    anchor: "쿠버네티스에서는-두-층이-따로-늘어난다",
  },
];
