import type { QuizQuestion } from "../types";

export const METRICS_TYPES: QuizQuestion[] = [
  {
    id: "metrics-types-1",
    post: "metrics-types",
    question: "앱이 90초 동안 한 번 재시작했다. 그 구간의 요청 수를 가장 제대로 구하는 쿼리는?",
    choices: [
      "avg_over_time(http_requests_total[100s])",
      "마지막 값 − 처음 값",
      "sum(increase(http_requests_total[100s]))",
      "max(http_requests_total) − min(http_requests_total)"
    ],
    answer: 2,
    explanation:
      "increase는 값이 줄어든 곳을 리셋으로 보고 줄어든 뒤의 값을 이어 붙인다. 실습에서 단순 빼기는 983, increase는 실제 1,776건에 가까운 1,755였다. 재시작 전 마지막 scrape 이후의 몇 건만 잃는다.",
    anchor: "rate는-카운터를-어떻게-읽나",
  },
  {
    id: "metrics-types-2",
    post: "metrics-types",
    question: "처음 부하를 줄 때 오류율이 로그로 센 값(1.67%)보다 낮게(1.39%) 나왔다. 원인과 해결로 맞는 것은?",
    choices: [
      "increase가 정수를 내림한다. round()를 씌운다",
      "summary를 써야 오류율이 정확하다",
      "Prometheus가 500 응답을 일부 버린다. scrape 간격을 줄인다",
      "레이블 조합이 처음 쓰일 때 시계열이 생겨, 처음 본 값까지의 증가분을 rate가 못 본다. 시작할 때 0으로 만들어 둔다"
    ],
    answer: 3,
    explanation:
      "Prometheus는 처음 본 값이 0에서 시작했다고 가정하지 않아, 시계열이 575에서 처음 보이면 그 575건은 rate에 들어가지 않는다. 드물게 생기는 오류 레이블일수록 피해가 크니 inc(labels, 0)으로 미리 만들어 둔다.",
    anchor: "rate는-카운터를-어떻게-읽나",
  },
  {
    id: "metrics-types-3",
    post: "metrics-types",
    question: "검색 API의 p90이 히스토그램으로는 0.553초, 실제로는 0.715초였다. 이 오차의 원인은?",
    choices: [
      "0.5~1초 칸 안의 값이 고르게 퍼져 있다고 가정해 선형으로 짐작했는데 실제로는 0.7~0.9초에 몰려 있어서",
      "히스토그램은 최근 1분만 보기 때문에",
      "_sum과 _count로 평균을 냈기 때문에",
      "rate 범위가 너무 짧아서"
    ],
    answer: 0,
    explanation:
      "histogram_quantile은 칸 안의 분포를 모르니 칸 안을 고르게 메운다고 보고 짐작한다. 칸이 넓고 값이 한쪽에 몰릴수록 오차가 커진다. 0.6, 0.7, 0.8, 0.9초 칸을 더하자 p90 오차가 0.2%로 줄었다.",
    anchor: "히스토그램은-칸으로-센다",
  },
  {
    id: "metrics-types-4",
    post: "metrics-types",
    question: "서버 10대의 서비스 전체 p99를 알고 싶다. 서머리 대신 히스토그램을 고르는 이유는?",
    choices: [
      "히스토그램은 시계열을 덜 만들기 때문에",
      "히스토그램이 더 정확한 분위수를 주기 때문에",
      "히스토그램은 칸별 개수를 더한 뒤 분위수를 구할 수 있지만, 서머리의 분위수는 서버끼리 평균 내거나 더할 수 없기 때문에",
      "서머리는 Prometheus에서 쿼리할 수 없기 때문에"
    ],
    answer: 2,
    explanation:
      "분위수는 합치려면 원래 값이 다시 필요하다. 실습에서 두 서버 p99의 평균은 467.7ms였지만 실제 합친 p99는 867.1ms였다. 히스토그램은 sum by (le)로 칸을 더한 뒤 계산하니 합칠 수 있다.",
    anchor: "서머리는-정확하지만-더할-수-없다",
  },
  {
    id: "metrics-types-5",
    post: "metrics-types",
    question: "밤에 요청이 뜸해지자 서머리로 그린 p99 그래프가 0으로 떨어졌다. 가장 그럴듯한 해석은?",
    choices: [
      "카운터 리셋이 일어났다",
      "히스토그램 칸이 모자라다",
      "밤에는 응답이 0초로 빨라졌다",
      "서머리의 시간 창(maxAgeSeconds) 안에 값이 없어 분위수가 0으로 나온 것이다"
    ],
    answer: 3,
    explanation:
      "서머리는 최근 창 안의 값으로만 분위수를 계산해서, 창이 비면 0을 내놓는다. 실습에서도 1분 뒤 p99가 0이 됐지만 _count는 3,000 그대로였다.",
    anchor: "서머리는-정확하지만-더할-수-없다",
  },
  {
    id: "metrics-types-6",
    post: "metrics-types",
    question: "Prometheus 시계열이 갑자기 늘었다. 가장 먼저 열어 볼 곳과 당장의 조치로 맞는 것은?",
    choices: [
      "/api/v1/status/tsdb에서 시계열 많은 지표와 레이블을 찾고, metric_relabel_configs로 그 레이블을 떨어뜨리며 sample_limit을 건다",
      "scrape_interval을 1초로 줄인다",
      "히스토그램 칸을 늘린다",
      "Grafana 대시보드를 지우고 Prometheus를 재시작한다"
    ],
    answer: 0,
    explanation:
      "TSDB 상태 API는 시계열이 많은 지표와 값 종류가 많은 레이블을 바로 보여 준다. 실습에서는 user_id가 범인이었다. relabel로 당장 막고, 코드에서 레이블을 빼거나 틀로 바꾼다.",
    anchor: "레이블-하나가-scrape를-서른-배로",
  },
];
