import type { QuizQuestion } from "../types";

export const GRAFANA_TEMPO_TRACING: QuizQuestion[] = [
  {
    id: "grafana-tempo-tracing-1",
    post: "grafana-tempo-tracing",
    question: "Tempo가 Jaeger + Elasticsearch 구성보다 저장 비용이 싼 가장 큰 이유는?",
    choices: [
      "span을 압축하지 않고 그대로 저장해서",
      "속성마다 찾아보기를 만들지 않고, trace 단위 Parquet 블록과 trace ID용 bloom 필터만 객체 저장소에 두어서",
      "trace를 하루만 보관하도록 강제해서",
      "span의 속성을 모두 버리고 trace ID만 저장해서",
    ],
    answer: 1,
    explanation:
      "Tempo는 블록마다 bloom 필터만 두고 속성 찾아보기를 만들지 않으니 저장과 운영 비용이 객체 저장소 용량 정도로 줄어든다. 대신 조건 검색은 시간 범위 안의 블록을 열 단위로 훑어야 해서 범위가 넓으면 느리다.",
    anchor: "찾아보기-없이-쌓아-두는-저장소",
  },
  {
    id: "grafana-tempo-tracing-2",
    post: "grafana-tempo-tracing",
    question: "trace ID로 조회할 때 블록마다 bloom 필터를 먼저 보는 이유로 맞는 것은?",
    choices: [
      "bloom 필터가 '없다'고 하면 확실히 없으니 그 블록의 데이터를 읽지 않아도 되기 때문에",
      "bloom 필터에 span 본문이 압축돼 들어 있기 때문에",
      "bloom 필터가 '있다'고 하면 반드시 있으니 다른 블록을 볼 필요가 없기 때문에",
      "bloom 필터가 시간 범위 순으로 정렬돼 있기 때문에",
    ],
    answer: 0,
    explanation:
      "bloom 필터의 '없다'는 틀리지 않고 '있다'는 가끔 틀린다. 그래서 '없다'는 블록은 건너뛰고, '있을 수 있다'는 블록만 열어 놓치지 않으면서 읽는 양을 줄인다.",
    anchor: "trace-id-하나는-bloom-필터로-찾는다",
  },
  {
    id: "grafana-tempo-tracing-3",
    post: "grafana-tempo-tracing",
    question: "Tempo 3.x에서 방금 보낸 trace가 ID로는 열리는데 TraceQL 검색에는 30초쯤 안 나온다. 이유는?",
    choices: [
      "검색은 bloom 필터가 만들어진 뒤에만 되기 때문에",
      "metrics-generator가 먼저 처리해야 검색되기 때문에",
      "검색이 기본으로 최근 30초(query_end_cutoff)를 빼고 보기 때문에",
      "Collector의 batch 프로세서가 30초 동안 묶어 두기 때문에",
    ],
    answer: 2,
    explanation:
      "3.0부터 query_end_cutoff 기본값이 30초다. 최근 데이터는 아직 모든 live-store에 도착하지 않았을 수 있어서 불완전한 결과 대신 조금 늦은 결과를 고른 것이다. 실습에서도 검색은 31초 뒤에 나왔고 ID 조회는 바로 됐다.",
    anchor: "방금-보낸-trace가-검색에-안-나온다",
  },
  {
    id: "grafana-tempo-tracing-4",
    post: "grafana-tempo-tracing",
    question: "TraceQL `{ resource.service.name = \"orders\" } >> { resource.service.name = \"payments\" && status = error }`가 고르는 것은?",
    choices: [
      "orders와 payments가 둘 다 실패한 trace의 루트 span",
      "payments가 orders를 부른 trace",
      "orders span 바로 아래 자식 중 실패한 span만",
      "orders span의 자손 중 실패한 payments span",
    ],
    answer: 3,
    explanation:
      ">>는 구조 연산자로, 왼쪽 조건에 맞는 span의 자손 중 오른쪽 조건에 맞는 span을 고른다. 바로 아래 자식만 보려면 >를 쓴다. 실습에서는 실패한 결제 35건이 모두 이 질의에 잡혔다.",
    anchor: "traceql은-span-묶음을-고른다",
  },
  {
    id: "grafana-tempo-tracing-5",
    post: "grafana-tempo-tracing",
    question: "Collector에서 꼬리 샘플링으로 trace의 10%만 Tempo에 보내고, Tempo의 metrics-generator로 요청 수를 셌다. 어떤 일이 생기나?",
    choices: [
      "metrics-generator가 샘플링 비율을 자동으로 알아내 정확히 센다",
      "metrics-generator는 도착한 span만 보므로 요청 수가 실제보다 크게 작게 나온다",
      "꼬리 샘플링은 오류만 남기므로 오류율이 0이 된다",
      "Prometheus가 remote write를 거절해 지표가 비어 있다",
    ],
    answer: 1,
    explanation:
      "metrics-generator는 Tempo에 도착한 span으로 센다. 앞에서 버린 trace는 셀 수 없으니, 샘플링 전의 Collector에서 지표를 만들거나 span에 샘플링 배율을 실어 보정하게 한다.",
    anchor: "metrics-generator는-들어오는-span으로-지표를-미리-만든다",
  },
  {
    id: "grafana-tempo-tracing-6",
    post: "grafana-tempo-tracing",
    question: "Grafana 히스토그램 패널에 exemplar 점은 보이는데 눌러도 trace가 열리지 않는다. 가장 먼저 확인할 것은?",
    choices: [
      "Prometheus 데이터 소스의 exemplar 설정에 적은 라벨 이름이 실제 exemplar 라벨(traceID 또는 trace_id)과 같은지",
      "Tempo의 보관 기간이 1년 이상인지",
      "Loki의 derived field 정규식이 맞는지",
      "히스토그램 칸 경계가 두 배씩 늘어나는지",
    ],
    answer: 0,
    explanation:
      "exemplar 점은 Prometheus가 저장한 것이라 보이지만, Tempo로 가는 링크는 데이터 소스 설정의 라벨 이름으로 만든다. 실습에서 Tempo는 traceID로 보냈고 앱 클라이언트는 보통 trace_id를 쓰니 이름이 어긋나기 쉽다.",
    anchor: "exemplar로-튄-점에서-trace를-연다",
  },
  {
    id: "grafana-tempo-tracing-7",
    post: "grafana-tempo-tracing",
    question: "trace를 열었더니 결제 서버 span 하나만 있고 위쪽 span이 모두 비어 있다. tempo_discarded_spans_total{reason=\"trace_too_large\"}가 올라가 있다면 무슨 일인가?",
    choices: [
      "헤드 샘플링에서 위쪽 서비스만 빠졌다",
      "보관 기간이 지나 위쪽 span만 지워졌다",
      "trace 크기 한도(max_bytes_per_trace)를 넘어 먼저 도착한 span 말고는 버려졌다",
      "query_end_cutoff 때문에 위쪽 span이 아직 안 보인다",
    ],
    answer: 2,
    explanation:
      "실습에서 한도를 500바이트로 낮추자 span 120개 중 100개가 trace_too_large로 버려졌고, 열어 본 trace에는 먼저 도착한 결제 서버 span만 남았다. trace가 통째로 없지 않고 일부만 남아 더 헷갈리니 discard 지표의 reason부터 본다.",
    anchor: "보관-기간과-trace-크기-한도",
  },
];
