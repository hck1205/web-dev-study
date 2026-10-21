import type { QuizQuestion } from "../types";

export const GRAFANA_DASHBOARDS: QuizQuestion[] = [
  {
    id: "grafana-dashboards-1",
    post: "grafana-dashboards",
    question:
      "패널을 줌인하면 rate 그래프가 띄엄띄엄 끊긴다. 쿼리는 `rate(x[$__interval])`이다. 가장 알맞은 처방은?",
    choices: [
      "패널을 Stat으로 바꾼다",
      "범위를 $__rate_interval로 바꾸고 데이터 소스의 scrape 간격 설정을 실제 값과 맞춘다",
      "maxDataPoints를 늘린다",
      "자동 새로 고침 간격을 줄인다",
    ],
    answer: 1,
    explanation:
      "줌인하면 $__interval이 scrape 간격보다 작아져 범위 안에 샘플이 하나뿐이라 rate가 비게 된다. $__rate_interval은 max(interval + scrape, scrape × 4)라서 이런 경우에도 샘플이 충분히 들어간다.",
    anchor: "__interval과-__rate_interval",
  },
  {
    id: "grafana-dashboards-2",
    post: "grafana-dashboards",
    question: "scrape 간격 5초, 패널의 interval이 60초일 때 Grafana가 $__rate_interval 자리에 넣는 값은?",
    choices: ["20s", "1m", "1m5s", "4m"],
    answer: 2,
    explanation:
      "max(60 + 5, 5 × 4) = 65초라서 1m5s가 들어간다. 실습에서도 executedQueryString에 [1m5s]가 찍혔다. interval이 15초였을 때는 max(20, 20)으로 20s였다.",
    anchor: "__interval과-__rate_interval",
  },
  {
    id: "grafana-dashboards-3",
    post: "grafana-dashboards",
    question:
      "다중 선택 변수 instance에서 All을 골랐더니 패널이 No data가 됐다. 쿼리는 `instance=\"$instance\"`다. 원인은?",
    choices: [
      "All은 Prometheus에서 지원하지 않는 값이라서",
      "변수의 refresh 설정이 1이라서",
      "데이터 소스 uid가 바뀌어서",
      "여러 값이 (a|b) 같은 정규식으로 펼쳐지는데 =로 비교해서, 그런 이름의 값을 찾게 되기 때문에",
    ],
    answer: 3,
    explanation:
      "Prometheus 데이터 소스는 다중 값을 이스케이프한 뒤 |로 이어 괄호로 감싼다. =는 문자열 그대로 비교하므로 맞는 시계열이 없다. =~로 바꾸면 정규식으로 비교해 둘 다 맞는다.",
    anchor: "변수는-쿼리-문자열을-바꾸는-치환이다",
  },
  {
    id: "grafana-dashboards-4",
    post: "grafana-dashboards",
    question:
      "CI가 /api/dashboards/db로 대시보드를 올렸는데 412와 version-mismatch가 돌아왔다. 무엇을 뜻하고, git을 원본으로 쓰는 CI라면 어떻게 하나?",
    choices: [
      "서버의 버전이 올린 JSON의 버전과 달라 덮어쓰기를 막은 것이다. git이 원본이면 overwrite: true로 올린다",
      "JSON 문법 오류다. jq로 검사한다",
      "권한이 없다는 뜻이다. admin 계정으로 올린다",
      "데이터 소스가 없다는 뜻이다. 데이터 소스를 먼저 만든다",
    ],
    answer: 0,
    explanation:
      "Grafana는 대시보드 version으로 낙관적 잠금을 해서, 그사이 다른 저장이 있었으면 412로 막는다. git이 유일한 원본이라면 overwrite: true로 덮고, 이력은 /versions로 남는다.",
    anchor: "대시보드를-코드로-두는-세-가지-방법",
  },
  {
    id: "grafana-dashboards-5",
    post: "grafana-dashboards",
    question: "프로비저닝 디렉터리로 읽힌 대시보드를 UI에서 저장하려 하면 어떻게 되나?",
    choices: [
      "저장되고, 다음 프로비저닝 주기에 파일 내용으로 다시 덮인다",
      "새 대시보드로 복제되어 저장된다",
      "Cannot save provisioned dashboard로 거절된다(allowUiUpdates가 false일 때)",
      "파일에 자동으로 다시 써진다",
    ],
    answer: 2,
    explanation:
      "프로비저닝된 대시보드는 파일이 원본이라 UI·API 저장이 막힌다. 실습에서도 400과 함께 그 메시지가 돌아왔다. 고치려면 JSON을 내보내 파일(git)에 반영한다.",
    anchor: "대시보드를-코드로-두는-세-가지-방법",
  },
  {
    id: "grafana-dashboards-6",
    post: "grafana-dashboards",
    question:
      "사람을 깨우는 핵심 알림을 Grafana 알림이 아니라 Prometheus 규칙과 Alertmanager에 두는 이유로 가장 알맞은 것은?",
    choices: [
      "Grafana 알림은 임계값 비교를 할 수 없어서",
      "Prometheus 규칙은 Prometheus가 직접 평가해 Grafana가 죽어도 울리고, 규칙 파일을 promtool로 시험할 수 있어서",
      "Alertmanager만 슬랙으로 보낼 수 있어서",
      "Grafana 알림은 for를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "Grafana 알림은 Grafana가 데이터 소스에 쿼리해 평가하므로 Grafana 가용성에 묶인다. 대신 여러 데이터 소스에 같은 방식으로 규칙을 걸 수 있다는 장점이 있어서, 담당을 나눠 쓰는 경우가 많다.",
    anchor: "grafana-알림과-alertmanager",
  },
];
