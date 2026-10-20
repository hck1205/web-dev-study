import type { QuizQuestion } from "../types";

export const DISTRIBUTED_TRACING: QuizQuestion[] = [
  {
    id: "distributed-tracing-1",
    post: "distributed-tracing",
    question:
      "orders가 inventory를 부를 때 traceparent의 네 칸 중 서비스를 건널 때마다 바뀌는 칸은?",
    choices: ["version", "trace id", "parent id", "flags"],
    answer: 2,
    explanation:
      "trace id는 처음 만든 서비스 이후로 그대로 물려받고, parent id 칸에는 요청을 보낸 쪽 span의 id가 들어간다. 받는 쪽은 그 값을 자기 서버 span의 부모로 적는다. flags는 앞에서 내린 샘플링 결정을 그대로 전한다.",
    anchor: "traceparent-한-줄-뜯어보기",
  },
  {
    id: "distributed-tracing-2",
    post: "distributed-tracing",
    question:
      "OpenTelemetry를 붙였는데 Jaeger에 span이 하나도 없고 앱 로그에도 오류가 없다. 실습에서 실제 원인은?",
    choices: [
      "샘플링 비율이 0으로 설정되어 있었다",
      "Jaeger 2.10이 OTLP 수신 포트를 localhost에만 열어 다른 네임스페이스에서 보낸 span이 거부됐다",
      "pg 계측이 HTTP 계측과 충돌했다",
      "trace id가 모두 0이었다",
    ],
    answer: 1,
    explanation:
      "Jaeger 2.10은 기본으로 127.0.0.1:4318에서만 들었고, SDK는 내보내기 실패를 기본으로 조용히 넘긴다. 화면이 비어 있으면 수집기가 듣는 주소와 앱이 보내는 주소부터 확인하고, OTEL_LOG_LEVEL=debug로 진단 로그를 켠다.",
    anchor: "세-서비스에-opentelemetry-붙이기",
  },
  {
    id: "distributed-tracing-3",
    post: "distributed-tracing",
    question:
      "주문 하나에서 재고 조회를 차례로 세 번 부르는 trace를 보고 Promise.all로 병렬화했더니 전체는 465ms에서 243ms로 줄었다. trace에서 함께 확인한 사실은?",
    choices: [
      "각 쿼리도 함께 빨라져서 문제가 해결됐다",
      "각 쿼리는 오히려 느려졌다. 인덱스 없는 전체 스캔 세 개가 동시에 자원을 나눠 썼기 때문이다",
      "병렬화하자 trace가 셋으로 쪼개졌다",
      "DB 연결 수가 줄어 pg.connect span이 사라졌다",
    ],
    answer: 1,
    explanation:
      "쿼리 하나하나는 113~151ms에서 155~225ms로 늘었다. 응답 시간만 보면 해결된 것 같지만 느린 칸(인덱스 없는 쿼리)은 그대로였고, 인덱스를 만들자 전체가 20ms가 됐다.",
    anchor: "병렬로-바꿔도-느린-칸은-그대로였다",
  },
  {
    id: "distributed-tracing-4",
    post: "distributed-tracing",
    question:
      "Node.js 서비스에서 HttpInstrumentation만 켰는데, 내장 fetch로 부른 하위 서비스가 새 trace로 시작했다. 왜인가?",
    choices: [
      "fetch는 HTTPS만 지원해서",
      "fetch는 undici라는 별도 구현 위에 있어 http 모듈 계측이 헤더를 넣지 못했다",
      "하위 서비스가 traceparent를 지원하지 않는 버전이라서",
      "부모 기반 샘플러가 그 요청을 버렸기 때문에",
    ],
    answer: 1,
    explanation:
      "HttpInstrumentation은 http·https 모듈을 감싸는데, Node의 fetch는 undici를 쓰므로 traceparent가 붙지 않았다. 오류 없이 trace가 쪼개진다. instrumentation-undici를 추가하면 이어진다.",
    anchor: "헤더가-한-번-끊기면-추적도-끊긴다",
  },
  {
    id: "distributed-tracing-5",
    post: "distributed-tracing",
    question: "헤드 샘플링 25%만 쓰는 시스템에서 장애 난 요청의 trace를 찾기 어려운 이유는?",
    choices: [
      "헤드 샘플링은 오류가 난 trace를 우선 버리도록 되어 있어서",
      "trace를 시작할 때 결정하므로 그 요청이 느리거나 실패할지 모른 채 같은 비율로 버리기 때문에",
      "헤드 샘플링을 쓰면 trace id가 만들어지지 않아서",
      "Collector가 꼬리 샘플링과 충돌해서",
    ],
    answer: 1,
    explanation:
      "헤드 샘플링은 첫 서비스에서 trace id로 결정을 내리고 플래그로 전파한다. 결과를 모르는 상태라 장애 요청의 75%도 함께 버린다. 꼬리 샘플링은 끝난 뒤 오류·지연을 보고 고르므로 이런 trace를 건질 수 있다.",
    anchor: "다-저장할-수-없어서-고른다",
  },
  {
    id: "distributed-tracing-6",
    post: "distributed-tracing",
    question: "꼬리 샘플링을 하는 Collector를 여러 대로 늘릴 때 추가로 필요한 것은?",
    choices: [
      "서비스마다 샘플링 비율을 100%에서 0%로 낮추는 설정",
      "한 trace의 span이 같은 Collector에 모이도록 trace id 기준으로 나눠 주는 계층",
      "Jaeger를 Collector 수만큼 띄우는 것",
      "traceparent 대신 B3 헤더로 바꾸는 것",
    ],
    answer: 1,
    explanation:
      "꼬리 샘플링은 trace 전체를 봐야 결정할 수 있어서 같은 trace의 span이 한 인스턴스에 모여야 한다. 그래서 앞에 trace id로 라우팅하는 계층(loadbalancing exporter)을 둔다. 샘플링을 끄면 꼬리 샘플링이 볼 span 자체가 사라진다.",
    anchor: "다-저장할-수-없어서-고른다",
  },
  {
    id: "distributed-tracing-7",
    post: "distributed-tracing",
    question:
      "헤드 샘플링으로 저장하지 않기로 한 요청(flags 00)의 trace id로 로그를 검색하면 어떻게 되나?",
    choices: [
      "trace id가 없어서 검색할 수 없다",
      "Jaeger에는 없지만 세 서비스의 로그는 같은 trace id로 묶여 나온다",
      "첫 서비스의 로그만 나온다",
      "로그에도 trace id가 00으로 찍힌다",
    ],
    answer: 1,
    explanation:
      "저장하지 않기로 한 요청도 trace id는 만들어지고 헤더로 전파된다. 실습에서도 Jaeger는 trace not found였지만 gateway, orders, inventory 로그가 같은 trace id로 이어졌다. 그래서 trace id를 요청 ID로 쓰는 팀이 많다.",
    anchor: "로그와-trace를-trace_id로-잇는다",
  },
];
