import type { QuizQuestion } from "../types";

export const SPRING_BOOT_OBSERVABILITY: QuizQuestion[] = [
  {
    id: "spring-boot-observability-1",
    post: "spring-boot-observability",
    question:
      "Observation에 highCardinalityKeyValue(\"order.id\", id)로 넣은 값은 어디에 나타나나?",
    choices: [
      "지표 태그와 span 속성 양쪽",
      "지표 태그에만",
      "span 속성에만",
      "어디에도 기록되지 않는다",
    ],
    answer: 2,
    explanation:
      "높은 카디널리티 값은 지표 태그로 쓰면 값마다 시계열이 생기므로 span 속성으로만 간다. 실험에서도 /actuator/prometheus의 order_price_seconds에는 currency만 있었고 order.id=7은 span에서만 보였다. 지표와 span 양쪽에 들어가는 건 lowCardinalityKeyValue다.",
    anchor: "계측-한-번에-신호가-셋-나온다",
  },
  {
    id: "spring-boot-observability-2",
    post: "spring-boot-observability",
    question:
      "payments.get().uri(\"/payments/\" + id)로 200개의 서로 다른 주문을 호출했다. http_client_requests_seconds_count 시계열은 어떻게 되나?",
    choices: [
      "uri=\"/payments/{id}\" 한 줄로 묶인다",
      "실제 경로가 태그로 들어가다가 기본 상한 100개에서 멈추고 경고가 남는다",
      "200줄이 모두 생긴다",
      "지표가 하나도 생기지 않는다",
    ],
    answer: 1,
    explanation:
      "템플릿 없이 문자열로 넘기면 실제 경로가 uri 태그가 된다. 부트는 max-uri-tags 기본 100으로 막고 MaximumAllowableTagsMeterFilter가 'Are you using uriVariables?' 경고를 남긴다. uri(\"/payments/{id}\", id)처럼 넘기면 한 줄로 묶인다.",
    anchor: "주문-id를-태그로-넣으면",
  },
  {
    id: "spring-boot-observability-3",
    post: "spring-boot-observability",
    question:
      "태그 조합이 method 2 × uri 20 × status 5인 Timer에 기본 percentiles-histogram(칸 69줄)을 켜고 Pod 30개로 돌리면 시계열은 대략 몇 개인가?",
    choices: ["600", "14,400", "43만 2천", "300만"],
    answer: 2,
    explanation:
      "조합 200개마다 _count, _sum, _max 3줄과 칸 69줄이 붙어 72줄이고, 200 × 72 = 14,400이다. Pod마다 따로 생기니 30을 곱해 432,000이 된다. 그래서 히스토그램은 필요한 지표에만 켜고 SLO 경계 몇 개로 칸을 줄인다.",
    anchor: "히스토그램은-칸-수만큼-시계열을-늘린다",
  },
  {
    id: "spring-boot-observability-4",
    post: "spring-boot-observability",
    question:
      "로그에서 찾은 traceId로 Tempo를 검색했는데 없는 경우가 많다. 별도 설정을 하지 않은 스프링 부트라면 가장 먼저 의심할 것은?",
    choices: [
      "로그 패턴이 traceId를 잘못 찍는다",
      "Tempo의 보존 기간이 너무 짧다",
      "OTLP가 gRPC만 지원한다",
      "기본 샘플링 확률이 0.1이라 대부분의 trace를 내보내지 않는다",
    ],
    answer: 3,
    explanation:
      "management.tracing.sampling.probability의 기본값은 0.1이다. 로그에는 샘플링과 상관없이 trace ID가 찍히므로 로그엔 있는데 Tempo엔 없는 증상이 된다. traceparent 끝 플래그가 02면 샘플링되지 않은 것이고 03이면 샘플링된 것이다.",
    anchor: "trace를-otlp로-내보낸다",
  },
  {
    id: "spring-boot-observability-5",
    post: "spring-boot-observability",
    question:
      "결제 서비스 쪽 span이 주문 trace와 이어지지 않고 따로 생긴다. 주문 서비스가 RestClient.create()로 클라이언트를 만들었다면 이유는?",
    choices: [
      "자동 설정된 Builder를 거치지 않아 Observation이 붙지 않고 traceparent 헤더가 빠진다",
      "RestClient는 원래 trace를 지원하지 않는다",
      "결제 서비스의 샘플링 확률이 다르다",
      "OTLP 엔드포인트가 서비스마다 달라서다",
    ],
    answer: 0,
    explanation:
      "부트가 만든 RestClient.Builder를 주입받아 써야 Observation이 붙어 traceparent가 들어간다. 헤더가 없으면 받는 쪽이 새 trace를 시작한다. 실험에서는 Builder를 써서 결제 쪽이 받은 traceparent 가운데에 클라이언트 span ID가 들어 있었다.",
    anchor: "trace를-otlp로-내보낸다",
  },
  {
    id: "spring-boot-observability-6",
    post: "spring-boot-observability",
    question: "/actuator/prometheus에서 exemplar(# 뒤의 trace_id)를 보려면 무엇이 필요한가?",
    choices: [
      "기본 텍스트 형식으로 긁으면 항상 보인다",
      "tracing과 히스토그램을 켜고 OpenMetrics 형식(Accept 헤더)으로 요청한다",
      "logging.structured.format.console=ecs를 켠다",
      "management.metrics.tags.application을 준다",
    ],
    answer: 1,
    explanation:
      "exemplar는 히스토그램 칸에 붙고 OpenMetrics 형식에서만 나온다. 부트는 기본으로 샘플링된 trace만 exemplar로 붙인다(exemplars.include=sampled-traces). Prometheus도 exemplar 저장 기능을 켜야 받는다.",
    anchor: "지표의-튄-점에서-trace로",
  },
  {
    id: "spring-boot-observability-7",
    post: "spring-boot-observability",
    question:
      "G1을 쓰는 앱에서 힙 영역별 사용률 패널을 id마다 jvm_memory_used_bytes / jvm_memory_max_bytes로 그렸더니 Eden과 Survivor가 음수로 나온다. 이유는?",
    choices: [
      "used가 바이트가 아니라 킬로바이트 단위다",
      "max 값은 앱 재시작 때만 갱신된다",
      "G1은 Eden과 Survivor의 최대 크기를 따로 정하지 않아 max가 -1로 나온다",
      "heap 영역에는 max 지표가 없다",
    ],
    answer: 2,
    explanation:
      "G1은 Eden과 Survivor 크기를 상황에 따라 바꾸므로 jvm_memory_max_bytes가 -1이다. 나누면 음수가 된다. 한도 선은 Old Gen의 max로 긋고 사용량은 영역을 더해서 본다.",
    anchor: "jvm-대시보드에-올릴-것",
  },
];
