import type { QuizQuestion } from "../types";

export const CLOUDWATCH_METRICS_LOGS_ALARMS: QuizQuestion[] = [
  {
    id: "cloudwatch-metrics-logs-alarms-1",
    post: "cloudwatch-metrics-logs-alarms",
    question: "EC2 인스턴스가 OOM으로 프로세스를 죽였는데 CloudWatch 기본 지표에서 메모리 그래프를 찾을 수 없다. 왜 그럴까?",
    choices: [
      "상세 모니터링을 켜지 않아서 메모리 지표가 숨겨져 있다",
      "기본 지표는 하이퍼바이저가 밖에서 볼 수 있는 것만 담고, 게스트 OS 안의 메모리 사용은 에이전트가 재서 보내야 한다",
      "메모리 지표는 AWS/EBS 네임스페이스에 있다",
      "메모리 지표는 15일이 지나면 지워진다",
    ],
    answer: 1,
    explanation:
      "하이퍼바이저는 CPU 시간이나 네트워크 양은 알지만 OS 안에서 메모리를 누가 쓰는지는 모른다. 상세 모니터링은 주기를 1분으로 줄일 뿐 메모리 지표를 만들어 주지 않는다. CloudWatch Agent로 mem_used_percent를 보내야 한다.",
    anchor: "기본-지표는-하이퍼바이저가-보는-것까지만",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-2",
    post: "cloudwatch-metrics-logs-alarms",
    question: "Latency 지표에 디버깅용으로 InstanceId 차원을 추가했더니 요금이 크게 늘었다. 이유는?",
    choices: [
      "차원을 추가하면 지표 해상도가 1초로 바뀐다",
      "InstanceId 차원은 상세 모니터링 요금을 함께 켠다",
      "이름이 같아도 차원 값 조합마다 별도 지표로 세고 지표마다 월 요금이 붙어, 인스턴스 수만큼 지표가 곱해졌다",
      "차원이 늘면 로그 수집량도 같이 늘어난다",
    ],
    answer: 2,
    explanation:
      "CloudWatch는 네임스페이스, 이름, 차원 조합 하나를 지표 하나로 센다. 1,500개 조합에 인스턴스 20대가 곱해지면 3만 개가 된다. 세부 값은 차원 대신 로그나 EMF의 비차원 필드로 남긴다.",
    anchor: "지표-하나는-이름과-차원의-조합이다",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-3",
    post: "cloudwatch-metrics-logs-alarms",
    question: "결제 실패를 세는 지표 필터를 오늘 만들었다. 어제 장애 시간대의 실패 건수를 알고 싶다면?",
    choices: [
      "지표 필터는 소급하지 않으니 어제 구간은 Logs Insights로 따로 센다",
      "지표 필터를 만들면 지난 15일 로그로 그래프가 자동으로 채워진다",
      "지표 필터의 defaultValue를 1로 바꾸면 과거가 채워진다",
      "경보를 만들면 과거 구간도 평가해 준다",
    ],
    answer: 0,
    explanation:
      "지표 필터는 만든 뒤 들어오는 로그에만 적용된다. 지난 로그는 Logs Insights 쿼리로 세야 한다. defaultValue는 맞는 줄이 없는 기간에 0 같은 값을 남기는 설정일 뿐이다.",
    anchor: "로그에서-지표를-뽑는-지표-필터",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-4",
    post: "cloudwatch-metrics-logs-alarms",
    question: "1분 기간, 3개 중 2개(기준 90%) 경보에서 최근 점이 95, 60, 93이다. 상태는?",
    choices: [
      "OK. 마지막 점만 본다",
      "INSUFFICIENT_DATA. 세 점이 연속으로 넘어야 판단한다",
      "OK. 평균이 90을 넘지 않는다",
      "ALARM. 3개 중 2개가 기준을 넘었다",
    ],
    answer: 3,
    explanation:
      "N개 중 M개는 창 안에서 기준을 넘은 점의 개수를 센다. 연속일 필요도 없고 평균을 내지도 않는다. 95와 93 두 개가 넘었으니 ALARM이다.",
    anchor: "경보는-세-가지-상태를-오간다",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-5",
    post: "cloudwatch-metrics-logs-alarms",
    question: "에이전트가 보내는 메모리 사용률 경보를 TreatMissingData=notBreaching으로 두었다. 서버가 멈춰 에이전트도 죽으면 어떻게 되나?",
    choices: [
      "빈칸이 기준 초과로 채워져 바로 ALARM이 된다",
      "빈칸이 정상으로 채워져 창이 넘어갈수록 경보가 OK로 풀린다",
      "경보가 마지막 상태를 그대로 유지한다",
      "경보가 자동으로 삭제된다",
    ],
    answer: 1,
    explanation:
      "notBreaching은 빈칸을 기준 안으로 본다. 와야 정상인 지표에서 이 설정을 쓰면 서버가 나빠질수록 경보가 풀린다. 이런 지표는 breaching으로 두거나 missing에 INSUFFICIENT_DATA 알림을 건다.",
    anchor: "데이터가-오지-않을-때-경보는-무엇을-믿나",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-6",
    post: "cloudwatch-metrics-logs-alarms",
    question: "orders-로 시작하는 여러 경보가 ALARM이 될 때마다 같은 Lambda를 부르고 싶다. 가장 알맞은 방법은?",
    choices: [
      "경보마다 Lambda를 직접 alarm action으로 건다",
      "지표 필터로 경보 상태를 센다",
      "EventBridge 규칙으로 CloudWatch Alarm State Change 이벤트를 alarmName prefix와 state로 걸러 Lambda를 대상으로 둔다",
      "Logs Insights 쿼리를 1분마다 돌린다",
    ],
    answer: 2,
    explanation:
      "경보는 상태가 바뀔 때마다 기본 이벤트 버스에 상태 변화 이벤트를 낸다. 규칙 하나의 이벤트 패턴으로 여러 경보를 묶어 반응할 수 있다. 대상 호출이 계속 실패하면 이벤트가 버려지니 DLQ를 붙여 둔다.",
    anchor: "경보-다음에-일어나는-일-sns와-eventbridge",
  },
  {
    id: "cloudwatch-metrics-logs-alarms-7",
    post: "cloudwatch-metrics-logs-alarms",
    question: "Grafana에 CloudWatch 패널이 많은 대시보드를 30초 자동 새로고침으로 여러 사람이 켜 두었다. 무엇이 늘어나나?",
    choices: [
      "패널이 그릴 때마다 부르는 GetMetricData API 요금",
      "로그 수집 요금",
      "사용자 지정 지표 개수",
      "경보 평가 주기",
    ],
    answer: 0,
    explanation:
      "Grafana는 CloudWatch 지표를 그릴 때 GetMetricData를 부르고, 요청한 지표 수만큼 요금이 붙는다. 새로고침 간격을 늘리거나 Metric Streams로 필요한 지표만 다른 저장소로 밀어내 줄일 수 있다.",
    anchor: "prometheusgrafana와-같이-쓸-때",
  },
];
