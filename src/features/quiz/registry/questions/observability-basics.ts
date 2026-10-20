import type { QuizQuestion } from "../types";

export const OBSERVABILITY_BASICS: QuizQuestion[] = [
  {
    id: "observability-basics-1",
    post: "observability-basics",
    question: "대시보드의 오류율과 p50이 평소와 같은데 '쿠폰을 넣은 주문만 느리다'는 문의가 왔다. 지표만으로 원인을 찾기 어려운 이유는?",
    choices: [
      "Prometheus가 5초마다만 수집해서 느린 요청을 놓치기 때문에",
      "지표는 미리 정한 레이블로 이미 합쳐진 숫자라 쿠폰 같은 새 기준으로 다시 쪼갤 수 없기 때문에",
      "p50은 원래 느린 요청을 반영하지 않는 잘못된 지표이기 때문에",
      "쿠폰 요청은 HTTP 계측에 잡히지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "지표는 route, status처럼 미리 정한 레이블로만 나눌 수 있는 합계다. 쿠폰 필드가 레이블에 없으면 나중에 그 기준으로 다시 묶을 방법이 없다. 요청마다 필드를 남긴 로그나 trace에서 묶어야 답이 나온다.",
    anchor: "쿠폰-하나가-p99를-끌어올렸다",
  },
  {
    id: "observability-basics-2",
    post: "observability-basics",
    question: "요청이 열 배로 늘었을 때 저장량이 거의 그대로인 신호는?",
    choices: ["요청마다 남기는 구조화 로그", "trace의 span", "카운터와 히스토그램 같은 지표", "세 신호 모두 요청 수에 비례한다"],
    answer: 2,
    explanation:
      "지표는 일정 간격으로 센 숫자라 앱 하나가 scrape마다 내놓는 샘플 수가 요청 수와 상관없이 일정하다. 로그와 span은 요청마다 생기니 요청 수에 비례해 쌓인다.",
    anchor: "세-가지-신호는-서로-다른-질문에-답한다",
  },
  {
    id: "observability-basics-3",
    post: "observability-basics",
    question: "p99 그래프의 튄 점에서 바로 그 요청의 trace를 여는 데 쓰는 것은?",
    choices: ["exemplar", "recording rule", "service discovery", "baggage"],
    answer: 0,
    explanation:
      "exemplar는 히스토그램 칸마다 그 칸에 들어간 요청 하나의 trace_id와 실제 값을 붙여 둔 것이다. Prometheus는 exemplar-storage 기능을 켜야 저장하고, 그 trace_id로 trace와 로그를 찾아간다.",
    anchor: "지표의-튄-점에서-trace와-로그로-건너가기",
  },
  {
    id: "observability-basics-4",
    post: "observability-basics",
    question: "Loki에서 trace_id로 로그를 찾으려 한다. trace_id를 어디에 두는 게 맞나?",
    choices: [
      "스트림 레이블로 두어 {trace_id=\"...\"}로 찾는다",
      "로그 본문(또는 구조화 메타데이터)에 두고 |= 나 json 필터로 찾는다",
      "로그 파일 이름에 넣는다",
      "trace_id는 로그에 남기지 않고 trace 저장소에서만 본다",
    ],
    answer: 1,
    explanation:
      "요청마다 값이 다른 trace_id를 레이블로 만들면 스트림이 요청 수만큼 생겨 저장소가 무너진다. 레이블은 app, env, level처럼 값 종류가 적은 것만 두고, trace_id는 본문에 남겨 필터로 찾는다.",
    anchor: "지표의-튄-점에서-trace와-로그로-건너가기",
  },
  {
    id: "observability-basics-5",
    post: "observability-basics",
    question: "method 3개, route 2개, 사용자 5,000명을 레이블로 둔 히스토그램(칸 11개)의 시계열 수는?",
    choices: ["30,000", "330,000", "420,000", "360,000"],
    answer: 2,
    explanation:
      "레이블 조합은 3 × 2 × 5,000 = 30,000개이고, 조합마다 칸 11개와 +Inf, _sum, _count로 14개 시계열이 생겨 420,000개가 된다. 끝없이 늘어나는 사용자 ID는 지표가 아니라 로그나 trace 필드로 둔다.",
    anchor: "무엇이든-레이블로-만들-수는-없다",
  },
  {
    id: "observability-basics-6",
    post: "observability-basics",
    question: "OpenTelemetry를 쓰면 trace 백엔드를 Jaeger에서 다른 서비스로 바꿀 때 주로 어디를 고치나?",
    choices: [
      "모든 서비스의 계측 코드",
      "Collector의 exporters 설정",
      "각 서비스의 HTTP 헤더 형식",
      "Prometheus의 scrape 설정",
    ],
    answer: 1,
    explanation:
      "앱은 OTLP로 Collector에 보내기만 하고, 어느 백엔드로 보낼지는 Collector의 exporters가 정한다. 그래서 백엔드를 바꾸거나 둘에 같이 보내는 일을 앱 배포 없이 할 수 있다.",
    anchor: "opentelemetry는-계측과-저장소-사이의-약속",
  },
  {
    id: "observability-basics-7",
    post: "observability-basics",
    question: "오류율 그래프를 '오류 로그 줄 수'로 그려 두었다. 로그 비용을 줄이려 샘플링을 켜면 무슨 일이 생기나?",
    choices: [
      "아무 영향이 없다",
      "샘플링 비율만큼 그래프가 틀어진다. 세는 일은 지표에 맡겨야 한다",
      "오류 로그는 샘플링 대상이 아니라서 성공 요청 수만 늘어 보인다",
      "Loki가 자동으로 비율을 보정한다",
    ],
    answer: 1,
    explanation:
      "로그를 골라 남기기 시작하면 줄 수는 더 이상 실제 건수가 아니다. 오류율 같은 숫자는 요청마다 카운터를 올리는 지표에서 세야 로그 샘플링과 상관없이 맞는다.",
    anchor: "어디서부터-들일까",
  },
];
