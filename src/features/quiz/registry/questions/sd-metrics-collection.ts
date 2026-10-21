import type { QuizQuestion } from "../types";

export const SD_METRICS_COLLECTION: QuizQuestion[] = [
  {
    id: "sd-metrics-collection-1",
    post: "sd-metrics-collection",
    question: "pull 수집기가 0.5초마다 읽는 사이에 0.2초만 살다 끝난 배치 작업의 지표는 어떻게 되나?",
    choices: [
      "다음 바퀴에 수집기가 읽어 간다",
      "수집기가 한 번도 보지 못하고 사라진다",
      "수집기가 up=1로 기록한다",
      "앱이 끝날 때 자동으로 수집기에 보낸다",
    ],
    answer: 1,
    explanation:
      "pull은 수집기가 정해진 간격마다 읽으러 가므로, 두 바퀴 사이에 떴다 사라진 작업은 읽을 기회가 없다. 그래서 짧게 사는 작업은 끝나기 전에 보내는 push나 Pushgateway로 보완한다.",
    anchor: "가지러-가거나-보내-오거나",
  },
  {
    id: "sd-metrics-collection-2",
    post: "sd-metrics-collection",
    question: "push 수집기가 내려간 동안 에이전트가 UDP로 다섯 번 보냈다. 에이전트가 받는 결과는?",
    choices: [
      "다섯 번 모두 연결 거부 오류를 받는다",
      "첫 번째만 오류, 나머지는 재시도된다",
      "다섯 번 모두 성공으로 끝난다",
      "수집기가 돌아올 때까지 send가 멈춘다",
    ],
    answer: 2,
    explanation:
      "UDP는 받는 쪽이 있는지 확인하지 않아서 보내는 쪽 콜백은 성공으로 끝난다. 숫자가 버려졌다는 사실을 보내는 쪽이 모르니, push 시스템은 마지막으로 숫자가 온 시각을 따로 지켜본다.",
    anchor: "가지러-가거나-보내-오거나",
  },
  {
    id: "sd-metrics-collection-3",
    post: "sd-metrics-collection",
    question: "대상 1만 개를 수집기에 나눌 때 hash % N 대신 안정 해시 링을 쓰는 이유는?",
    choices: [
      "수집기 수가 바뀔 때 담당이 바뀌는 대상을 꼭 필요한 만큼만으로 줄이려고",
      "수집기마다 정확히 같은 수의 대상을 배정하려고",
      "같은 대상을 두 수집기가 함께 읽게 하려고",
      "해시 계산을 빠르게 하려고",
    ],
    answer: 0,
    explanation:
      "3대에서 4대로 늘렸을 때 나머지 방식은 75%가, 링은 24%가 담당이 바뀌었다. 담당이 바뀐 대상은 틈이 생기고 상태를 다시 쌓아야 하니 적게 옮기는 게 낫다. 부하가 정확히 같아지는 건 아니고 가상 노드로 고르게 만들 뿐이다.",
    anchor: "수집기-한-대가-다-못-읽는다",
  },
  {
    id: "sd-metrics-collection-4",
    post: "sd-metrics-collection",
    question: "push 수집기 그래프가 듬성듬성하다. 수집기 서버에서 먼저 볼 카운터로 알맞은 것은?",
    choices: ["TcpRetransSegs", "UdpRcvbufErrors", "UdpOutDatagrams", "ListenDrops"],
    answer: 1,
    explanation:
      "받기 버퍼가 꽉 차서 커널이 버린 UDP 데이터그램 수가 UdpRcvbufErrors에 쌓인다. 실험에서 2,000줄 중 1,843줄이 여기로 잡혔다. UdpOutDatagrams는 보낸 수라서 받는 쪽 손실을 보여 주지 않는다.",
    anchor: "push는-수집기를-로드-밸런서-뒤에-둔다",
  },
  {
    id: "sd-metrics-collection-5",
    post: "sd-metrics-collection",
    question: "시계열 DB가 30초 멈췄다가 돌아왔다. 큐를 두었고 소비자 여유 처리량이 초당 500점이다. 무엇이 일어나나?",
    choices: [
      "30초치 점을 잃는다",
      "DB가 돌아오는 즉시 그래프가 최신으로 채워진다",
      "잃지는 않지만 밀린 3만 점을 비우는 동안 대시보드와 알림이 늦은 숫자를 본다",
      "수집기가 메모리에 쌓다가 멈춘다",
    ],
    answer: 2,
    explanation:
      "큐가 받아 두니 잃지 않는다. 다만 들어오는 양을 빼고 남는 처리량이 초당 500점이라 3만 점을 비우는 데 1분이 더 걸렸다. 장애 뒤 따라잡는 시간을 줄이려면 소비자를 넉넉히 둔다.",
    anchor: "저장소가-멈추면-수집한-것도-사라진다",
  },
  {
    id: "sd-metrics-collection-6",
    post: "sd-metrics-collection",
    question: "Kafka 파티션 키를 지표 이름만으로 잡았더니 소비자를 늘려도 처리가 밀린다. 왜인가?",
    choices: [
      "이름이 몇 개 안 되고 시계열 수가 이름마다 달라 한 파티션에 몰리기 때문이다",
      "Kafka는 키가 있으면 순서를 보장하지 않기 때문이다",
      "소비자 수가 파티션 수보다 적기 때문이다",
      "이름으로 해시하면 같은 점이 두 파티션에 들어가기 때문이다",
    ],
    answer: 0,
    explanation:
      "이름 넷으로 파티션 12개에 나눴더니 8개가 비고 히스토그램 파티션 하나에 60만 점이 몰렸다. 파티션 하나는 소비자 하나만 읽으니 그 소비자가 병목이 된다. 이름과 라벨을 함께 해시하면 고르게 나뉜다.",
    anchor: "파티션-키를-이름으로만-고르면",
  },
  {
    id: "sd-metrics-collection-7",
    post: "sd-metrics-collection",
    question: "스트림 처리 단계에서 지역별로 미리 합치고 원본을 버렸을 때 생기는 문제는?",
    choices: [
      "쓰기 양이 늘어난다",
      "나중에 서버별처럼 다른 방식으로 다시 묶어 볼 수 없다",
      "조회가 느려진다",
      "에이전트를 깔 수 없게 된다",
    ],
    answer: 1,
    explanation:
      "미리 합치면 쓰기와 조회는 가벼워지지만 원본이 없으니 새로운 묶음으로 다시 계산할 수 없다. 그래서 보통 원본을 짧게라도 남기고 자주 묻는 합계만 미리 만든다.",
    anchor: "어디서-미리-합칠까",
  },
];
