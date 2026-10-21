import type { QuizQuestion } from "../types";

export const ALERTING: QuizQuestion[] = [
  {
    id: "alerting-1",
    post: "alerting",
    question: "새벽에 사람을 깨우는 페이지를 거는 기준으로 가장 알맞은 것은?",
    choices: [
      "CPU, 메모리, 디스크처럼 자원 사용률이 80%를 넘을 때",
      "로그에 ERROR 줄이 하나라도 찍힐 때",
      "사용자가 겪는 오류율이나 지연이 목표를 넘고 사람이 당장 손을 써야 할 때",
      "배포가 끝났을 때마다 확인용으로",
    ],
    answer: 2,
    explanation:
      "페이지는 긴급하고, 사람이 행동할 수 있고, 사용자에게 보이는 문제에만 건다. 자원 사용률 같은 원인은 사용자 피해로 이어지지 않을 때가 많아서 대시보드에 두고, 알림을 받은 뒤 원인을 찾는 데 쓴다.",
    anchor: "증상에-걸고-원인은-대시보드로",
  },
  {
    id: "alerting-2",
    post: "alerting",
    question:
      "rate(...[5m]) > 0.05, for: 5m 규칙에서 10분부터 9% 실패가 시작됐는데 17분에도 알림이 없었다. 가장 그럴듯한 이유는?",
    choices: [
      "Alertmanager의 group_wait가 아직 끝나지 않아서",
      "5분 창 안에 정상이던 시간이 섞여 비율이 문턱을 늦게 넘었고, 그 뒤로 for 5분을 또 채워야 해서",
      "for가 조건이 처음 참이 된 시각이 아니라 규칙을 올린 시각부터 세서",
      "rate가 카운터 재시작으로 값을 버려서",
    ],
    answer: 1,
    explanation:
      "창이 평균을 내기 때문에 실패가 시작되고 3분이 지난 13분에야 비율이 5%를 넘었다. 거기서 for 5분을 채워 18분에 firing이 됐다. 울리기까지의 시간은 창이 문턱을 넘는 시간과 for를 더한 값이다.",
    anchor: "for는-조건이-버텨야-하는-시간이다",
  },
  {
    id: "alerting-3",
    post: "alerting",
    question: "서비스 전체가 죽었을 때 인스턴스별 알림 수십 개가 함께 오지 않게 하려면 Alertmanager에서 무엇을 쓰나?",
    choices: [
      "silence를 기간 없이 걸어 둔다",
      "repeat_interval을 길게 늘린다",
      "group_by에 instance를 추가한다",
      "서비스 전체 다운 알림을 source로, 인스턴스 알림을 target으로 하는 inhibit 규칙을 equal: [job]과 함께 둔다",
    ],
    answer: 3,
    explanation:
      "inhibition은 큰 알림이 firing인 동안 같은 범위의 작은 알림을 보내지 않는다. equal로 같은 서비스에만 적용되게 해야 다른 서비스 알림까지 눌리지 않는다. group_by에 instance를 넣으면 오히려 묶기가 사실상 꺼진다.",
    anchor: "묶고-누르고-잠재운다",
  },
  {
    id: "alerting-4",
    post: "alerting",
    question:
      "서비스 디스커버리에서 api 타깃이 통째로 사라졌는데 sum(up{job=\"api\"}) == 0 알림이 울리지 않았다. 왜 그런가?",
    choices: [
      "up 시계열 자체가 없어져 식의 결과가 비었고, 결과가 없으면 알림도 없기 때문이다",
      "up은 타깃이 사라지면 1로 고정되기 때문이다",
      "sum은 빈 입력에 0을 돌려주지만 for가 리셋되기 때문이다",
      "Alertmanager가 사라진 타깃의 알림을 자동으로 누르기 때문이다",
    ],
    answer: 0,
    explanation:
      "PromQL에서 입력 시계열이 없으면 sum의 결과도 비어 있고, 비교할 값이 없으니 알림이 생기지 않는다. 데이터가 없을 때 울리게 하려면 absent(up{job=\"api\"})를 따로 건다.",
    anchor: "알림이-울리지-않는-장애",
  },
  {
    id: "alerting-5",
    post: "alerting",
    question: "문턱 근처에서 조건이 오르내려 알림이 울렸다 풀렸다를 반복한다. 풀림을 줄이려고 Prometheus 2.42부터 쓸 수 있는 설정은?",
    choices: ["group_interval", "keep_firing_for", "evaluation_interval", "resend_delay"],
    answer: 1,
    explanation:
      "keep_firing_for는 조건이 거짓이 된 뒤에도 정한 시간 동안 firing을 유지해 같은 사건이 여러 번의 페이지로 쪼개지지 않게 한다. for는 짧은 튐을 거르는 쪽이고, group_interval은 Alertmanager가 바뀐 묶음을 다시 보내는 간격이다.",
    anchor: "for는-조건이-버텨야-하는-시간이다",
  },
  {
    id: "alerting-6",
    post: "alerting",
    question: "알림 경로 자체(Alertmanager, 수신자 설정)가 죽었을 때 이를 알아채는 흔한 방법은?",
    choices: [
      "모든 알림의 for를 0으로 줄인다",
      "Alertmanager를 한 대만 두어 설정을 단순하게 한다",
      "항상 firing인 Watchdog 알림을 두고, 그 알림이 바깥 감시 서비스에 끊기면 그쪽이 사람을 부르게 한다",
      "Prometheus의 scrape_interval을 늘린다",
    ],
    answer: 2,
    explanation:
      "항상 울리는 알림이 주기적으로 도착하는지를 바깥에서 지켜보면 알림 경로 어디가 끊겨도 알 수 있다. dead man's switch라고도 부른다. Alertmanager 자체는 여러 대를 클러스터로 묶어 한 대가 죽어도 알림이 나가게 한다.",
    anchor: "알림이-울리지-않는-장애",
  },
];
