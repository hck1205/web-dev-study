import type { QuizQuestion } from "../types";

export const PROMETHEUS_BASICS: QuizQuestion[] = [
  {
    id: "prometheus-basics-1",
    post: "prometheus-basics",
    question:
      "새 서비스의 ServiceMonitor를 만들었는데 Targets 화면에 아예 나타나지 않는다. kube-prometheus-stack 환경에서 가장 먼저 확인할 것은?",
    choices: [
      "앱의 /metrics 응답 형식",
      "ServiceMonitor에 Prometheus의 serviceMonitorSelector가 요구하는 라벨(예: release)이 있는지",
      "Grafana 데이터 소스 설정",
      "scrape_interval이 너무 긴지",
    ],
    answer: 1,
    explanation:
      "셀렉터에 맞지 않는 ServiceMonitor는 operator가 생성하는 설정에서 오류 없이 빠진다. Targets에 아예 없다는 건 scrape 전 단계 문제라서 /metrics 형식이나 간격보다 셀렉터와 라벨을 먼저 본다.",
    anchor: "servicemonitor는-설정-파일을-만드는-재료다",
  },
  {
    id: "prometheus-basics-2",
    post: "prometheus-basics",
    question:
      "relabel 규칙 `action: keep, regex: \"true\"`로 Pod 어노테이션을 거르는데, 어노테이션 값이 \"True\"인 Pod가 빠졌다. 왜인가?",
    choices: [
      "relabel의 regex는 앞뒤가 고정되어 값 전체가 정확히 맞아야 하기 때문에",
      "keep 규칙은 숫자 값만 비교하기 때문에",
      "어노테이션은 relabel에서 쓸 수 없기 때문에",
      "metric_relabel_configs에서 다시 걸러졌기 때문에",
    ],
    answer: 0,
    explanation:
      "Prometheus는 relabel regex를 ^(?:...)$로 감싸 값 전체와 비교하고 대소문자도 구분한다. 그래서 \"True\"는 \"true\"에 맞지 않아 keep에서 떨어진다.",
    anchor: "relabel은-라벨-묶음을-한-줄씩-고친다",
  },
  {
    id: "prometheus-basics-3",
    post: "prometheus-basics",
    question:
      "시계열이 많은 Prometheus를 재시작했더니 몇 분 동안 쿼리가 안 되다가, liveness 프로브 때문에 다시 재시작되기를 반복한다. 원인으로 가장 알맞은 것은?",
    choices: [
      "compaction이 끝나지 않아서",
      "remote_write 큐가 가득 차서",
      "WAL 재생이 프로브의 허용 시간보다 오래 걸려서",
      "보존 기간이 지난 블록을 지우는 중이라서",
    ],
    answer: 2,
    explanation:
      "Prometheus는 뜰 때 WAL을 처음부터 읽어 메모리의 head를 복구하고, 그동안 scrape와 쿼리를 하지 못한다. 프로브의 초기 지연과 실패 허용을 이 재생 시간보다 길게 잡아야 반복 재시작을 피한다.",
    anchor: "tsdb는-2시간-단위로-잘라-쌓는다",
  },
  {
    id: "prometheus-basics-4",
    post: "prometheus-basics",
    question: "retention.size를 디스크 볼륨 크기와 똑같이 잡으면 어떤 문제가 생길 수 있나?",
    choices: [
      "블록이 2시간보다 작게 잘린다",
      "retention.time이 무시되어 데이터가 영원히 남는다",
      "remote_write가 자동으로 꺼진다",
      "크기 한도에는 WAL과 head 청크도 들어가서, WAL이 자랄 자리가 없어 디스크가 가득 찰 수 있다",
    ],
    answer: 3,
    explanation:
      "보존은 오래된 블록을 통째로 지우는 방식이고, 크기 계산에는 WAL과 head 청크도 포함된다. 그래서 볼륨의 80~90% 정도로 여유를 두고 잡는다.",
    anchor: "tsdb는-2시간-단위로-잘라-쌓는다",
  },
  {
    id: "prometheus-basics-5",
    post: "prometheus-basics",
    question:
      "remote_write 받는 쪽이 잠시 죽었다. prometheus_remote_storage_samples_failed_total은 0인데 retried_total이 늘고 있다. 무엇을 뜻하나?",
    choices: [
      "데이터가 모두 버려지고 있다",
      "받는 쪽이 데이터를 중복 저장하고 있다",
      "연결 실패 같은 복구 가능한 오류라서 버리지 않고 재시도 중이며, WAL에 남아 있는 동안 다시 보낼 수 있다",
      "write_relabel_configs가 샘플을 걸러 내고 있다",
    ],
    answer: 2,
    explanation:
      "remote_write는 WAL을 꼬리 읽기하며 보내고, 복구 가능한 오류는 재시도한다. 최신 타임스탬프와 보낸 타임스탬프의 차이로 얼마나 밀렸는지 보고, WAL이 정리되기 전에 받는 쪽이 돌아와야 빈틈이 없다.",
    anchor: "한-대를-넘어설-때-federation-remote_write-thanos-mimir",
  },
  {
    id: "prometheus-basics-6",
    post: "prometheus-basics",
    question: "인스턴스 여러 개의 초당 요청 수를 구할 때 `sum(rate(x[1m]))`를 쓰고 `rate(sum(x)[1m])` 꼴을 피하는 이유는?",
    choices: [
      "sum을 먼저 하면 쿼리가 느려져서",
      "rate는 라벨이 하나뿐인 시계열에만 쓸 수 있어서",
      "sum은 게이지에만 쓸 수 있어서",
      "카운터를 먼저 더하면 인스턴스 하나의 재시작(리셋)을 알아볼 수 없어 값이 틀어지기 때문에",
    ],
    answer: 3,
    explanation:
      "rate는 시계열마다 카운터가 줄어든 지점을 리셋으로 보고 이어 붙인다. 먼저 더해 버리면 한 인스턴스의 리셋이 합계 안에 묻혀 감지되지 않는다. 그래서 rate를 먼저, sum을 나중에 한다.",
    anchor: "promql은-세-줄만-손에-익히면-된다",
  },
  {
    id: "prometheus-basics-7",
    post: "prometheus-basics",
    question: "기존 Prometheus를 그대로 두고 장기 보관과 여러 클러스터 조회를 점진적으로 붙이고 싶다. 어느 쪽이 더 자연스러운가?",
    choices: [
      "Thanos sidecar로 2시간 블록을 객체 저장소에 올리고 Thanos Query로 합쳐 묻는다",
      "보존 기간을 1년으로 늘린다",
      "모든 클러스터를 /federate로 원본 시계열까지 끌어온다",
      "Pushgateway를 중앙에 둔다",
    ],
    answer: 0,
    explanation:
      "Thanos는 각 Prometheus 옆에 sidecar를 붙여 블록을 올리는 방식이라 기존 구성을 바꾸지 않고 덧붙일 수 있다. 보존 기간을 크게 늘리면 쿼리 한 번이 블록 수백 개를 열어 메모리가 터지고, federation은 집계 지표 몇 개를 올리는 용도다.",
    anchor: "한-대를-넘어설-때-federation-remote_write-thanos-mimir",
  },
];
