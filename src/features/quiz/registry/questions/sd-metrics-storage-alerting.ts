import type { QuizQuestion } from "../types";

export const SD_METRICS_STORAGE_ALERTING: QuizQuestion[] = [
  {
    id: "sd-metrics-storage-alerting-1",
    post: "sd-metrics-storage-alerting",
    question: "원본이 7일을 넘겨 지워지기 직전에만 1분 칸을 만들면 어떤 문제가 생기나?",
    choices: [
      "1분 칸이 원본보다 작아진다",
      "최근 7일 동안은 1분 칸이 비어서 최근 2일 조회도 원본을 다 읽어야 한다",
      "1시간 칸을 만들 수 없게 된다",
      "원본이 7일보다 빨리 지워진다",
    ],
    answer: 1,
    explanation:
      "위 단계를 늦게 채우면 최근 구간에는 거친 단계가 없어서 조회가 원본 1만 7천 점을 읽게 된다. 그래서 원본이 들어오는 대로 위 단계도 채우고, 각 단계가 자기 보관 기간을 통째로 갖게 한다.",
    anchor: "1년을-세-해상도로-나눠-담는다",
  },
  {
    id: "sd-metrics-storage-alerting-2",
    post: "sd-metrics-storage-alerting",
    question: "30초 동안 CPU가 100%로 튀었다. 그 시각의 1시간 칸에서 이 사실이 남는 값은?",
    choices: ["평균", "건수", "최댓값", "최솟값"],
    answer: 2,
    explanation:
      "1시간 360점 중 3점이라 평균은 14.6%로 평소와 같아 보였다. 최댓값을 함께 담아 둔 덕분에 100을 찍은 흔적이 남았다. 그래서 칸에는 건수, 합계, 최솟값, 최댓값을 함께 둔다.",
    anchor: "스파이크는-평균-속에-묻힌다",
  },
  {
    id: "sd-metrics-storage-alerting-3",
    post: "sd-metrics-storage-alerting",
    question: "패널 폭 1,000점으로 최근 10일을 물었다. 원본은 7일, 1분 칸은 30일 보관한다. 어느 단계를 읽나?",
    choices: [
      "원본 10초, 원본이 가장 정확하니까",
      "1시간 칸, 가장 가벼우니까",
      "원본 7일과 1시간 칸을 섞어서",
      "1분 칸, 원하는 간격보다 촘촘하면서 10일을 다 덮으니까",
    ],
    answer: 3,
    explanation:
      "원하는 간격은 864초인데 원본은 7일까지만 있어 범위를 덮지 못한다. 1분 칸은 864초보다 촘촘하고 30일을 덮으니 이걸 읽어 15분씩 묶는다. 1시간 칸도 덮지만 원하는 간격보다 거칠어 고르지 않는다.",
    anchor: "패널-폭이-읽을-해상도를-정한다",
  },
  {
    id: "sd-metrics-storage-alerting-4",
    post: "sd-metrics-storage-alerting",
    question: "30초마다 새로 고치는 '최근 1시간' 패널에 요청 범위 (from, to)를 그대로 캐시 키로 썼다. 결과는?",
    choices: [
      "새로 고칠 때마다 현재 시각이 달라 한 번도 맞지 않는다",
      "두 번째부터는 모두 캐시에서 나온다",
      "마지막 칸만 다시 읽는다",
      "캐시가 너무 커져 서버가 멈춘다",
    ],
    answer: 0,
    explanation:
      "키에 now가 들어가니 매번 다른 키가 된다. 실험에서도 20번 모두 빗나갔다. 범위를 1분 칸으로 자르고 끝난 칸만 캐시하면 저장소가 읽는 양이 7,200줄에서 484줄로 줄었다.",
    anchor: "조회-서비스-앞에-캐시를-둔다",
  },
  {
    id: "sd-metrics-storage-alerting-5",
    post: "sd-metrics-storage-alerting",
    question: "알림 상태를 평가기 메모리에만 두었는데 울리고 있던 중에 평가기가 재시작됐다. 무슨 일이 생기나?",
    choices: [
      "알림이 즉시 해소된다",
      "이미 울린 걸 잊고 대기부터 다시 시작해 같은 사건으로 또 울린다",
      "아무 일도 없다. 큐가 상태를 기억한다",
      "평가기가 저장소에서 원본을 다시 읽어 상태를 정확히 복원한다",
    ],
    answer: 1,
    explanation:
      "재시작한 평가기는 firing이었다는 걸 모르니 pending부터 다시 세고, for 시간이 지나면 같은 사건으로 다시 전화한다. 실험에서 75초와 165초에 두 번 울렸다. 상태를 바깥 저장소에 두면 이어서 평가한다.",
    anchor: "알림-상태를-어디에-두나",
  },
  {
    id: "sd-metrics-storage-alerting-6",
    post: "sd-metrics-storage-alerting",
    question: "발송기가 보낸 직후 죽어서 같은 알림 메시지를 다시 받는다. 두 번 전화하지 않게 하는 중복 판별 키로 알맞은 것은?",
    choices: [
      "메시지가 발행된 시각",
      "발송기 인스턴스 이름",
      "규칙 이름과 라벨로 만든 지문에 사건이 시작된 시각을 붙인 것",
      "무작위 UUID",
    ],
    answer: 2,
    explanation:
      "키는 같은 사건이면 언제 다시 보내도 같아야 한다. 지문과 시작 시각은 사건 동안 바뀌지 않는다. 발행 시각이나 무작위 값은 매번 달라져 같은 사건도 다른 알림으로 보인다.",
    anchor: "알림-상태를-어디에-두나",
  },
  {
    id: "sd-metrics-storage-alerting-7",
    post: "sd-metrics-storage-alerting",
    question: "늘 울리는 알림을 바깥 시스템으로 보내 지켜보는 장치에서, 바깥 시스템을 같은 Kafka에 두면 안 되는 이유는?",
    choices: [
      "Kafka는 알림을 저장할 수 없어서",
      "알림이 너무 많이 쌓여서",
      "Kafka의 순서 보장이 깨져서",
      "Kafka가 죽으면 알림 파이프라인과 감시 장치가 함께 죽어 아무도 알려 주지 않아서",
    ],
    answer: 3,
    explanation:
      "알림 시스템은 고장 나면 조용해지는데, 조용함은 정상과 구분되지 않는다. 그래서 늘 오는 신호가 끊기면 바깥에서 사람을 부른다. 감시하는 쪽이 같은 부품에 기대면 함께 죽어 의미가 없다.",
    anchor: "알림-시스템이-죽으면-누가-알려-주나",
  },
];
