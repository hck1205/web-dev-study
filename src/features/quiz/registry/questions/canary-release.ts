import type { QuizQuestion } from "../types";

export const CANARY_RELEASE: QuizQuestion[] = [
  {
    id: "canary-release-1",
    post: "canary-release",
    question: "`split_clients \"${request_id}\"`로 5%를 카나리로 보냈다. 사용자가 요청을 5번씩 보낼 때 일어나는 일로 옳은 것은?",
    choices: [
      "사용자의 5%만 카나리를 보고, 그 사람들은 항상 카나리에 머문다",
      "약 22%의 사용자가 카나리를 한 번은 보고, 그 사람들은 두 버전을 오간다",
      "모든 사용자가 다섯 번째 요청에서 카나리를 본다",
      "요청 ID는 해시할 수 없어서 모두 stable로 간다",
    ],
    answer: 1,
    explanation:
      "요청마다 따로 나누니 다섯 번 중 한 번이라도 걸릴 확률은 1 − 0.95⁵ ≈ 22.6%이고, 실제로 2000명 중 449명이 두 버전을 오갔다. 사람마다 고정하려면 사용자 ID나 쿠키를 해시한다.",
    anchor: "요청마다-나눌까-사람마다-나눌까",
  },
  {
    id: "canary-release-2",
    post: "canary-release",
    question: "1% 카나리 단계에서 요청 100건 중 에러가 1건 났다. stable 에러율은 0.5%다. 어떻게 판단하는 게 맞나?",
    choices: [
      "에러율이 두 배이니 바로 중단한다",
      "카나리 Pod를 하나 더 띄워 1%를 2%로 만든다",
      "표본이 너무 작아 우연과 구분할 수 없으니, 최소 요청 수가 쌓일 때까지 기다리거나 큰 문제만 본다",
      "에러 1건은 무시하고 곧바로 100%로 승격한다",
    ],
    answer: 2,
    explanation:
      "100건에서 기대 에러 수는 0.5건이라 한 건만 나도 1%가 된다. 시뮬레이션에서 \"두 배면 중단\" 규칙은 멀쩡한 카나리를 23.6% 확률로 멈췄다. 작은 단계에서는 큰 문제만 잡고, 미묘한 차이는 요청이 충분히 쌓인 뒤 판단한다.",
    anchor: "작은-비율은-증거가-적다",
  },
  {
    id: "canary-release-3",
    post: "canary-release",
    question: "카나리와 같은 시각에 옛 버전을 같은 수로 새로 띄워 baseline으로 비교하는 이유는?",
    choices: [
      "stable의 부하를 줄이기 위해",
      "막 뜬 프로세스의 차가운 캐시·JIT 효과를 양쪽에 똑같이 넣어 버전 차이만 남기기 위해",
      "롤백할 때 baseline으로 바로 넘어가기 위해",
      "Prometheus가 stable 지표를 수집하지 못하기 때문에",
    ],
    answer: 1,
    explanation:
      "오래 떠 있던 stable과 막 뜬 카나리는 버전 말고도 캐시와 JIT 상태가 다르다. 같은 조건으로 새로 띄운 옛 버전과 비교하면 그 차이가 상쇄된다. 롤백 대상은 여전히 stable이다.",
    anchor: "작은-비율은-증거가-적다",
  },
  {
    id: "canary-release-4",
    post: "canary-release",
    question: "5% 카나리의 에러율이 3%인데 전체 대시보드는 0.5%에서 0.6%로만 올라 아무도 몰랐다. 가장 먼저 고칠 것은?",
    choices: [
      "카나리 비율을 1%로 낮춘다",
      "대시보드 새로고침 주기를 줄인다",
      "메트릭과 로그에 version이나 track=canary 라벨을 붙여 카나리를 따로 볼 수 있게 한다",
      "에러율 대신 CPU 사용률을 본다",
    ],
    answer: 2,
    explanation:
      "전체 평균에서는 5%의 3%가 0.15%p로 희석된다. 버전 라벨이 있어야 카나리와 stable을 나란히 비교할 수 있다. 비율을 낮추면 오히려 증거가 더 적어진다.",
    anchor: "카나리가-거짓말하는-순간",
  },
  {
    id: "canary-release-5",
    post: "canary-release",
    question: "AnalysisTemplate으로 5xx 비율을 보는데, 트래픽이 거의 없는 새벽에 분석이 늘 통과한다. 의심할 것은?",
    choices: [
      "카나리 요청이 0이면 분모가 0이라 결과가 비거나 NaN이 되고, 조건식이 그걸 통과로 처리한다",
      "Prometheus가 새벽에는 수집을 멈춘다",
      "failureLimit이 너무 작다",
      "setWeight가 새벽에는 무시된다",
    ],
    answer: 0,
    explanation:
      "요청이 없으면 비율 쿼리의 분모가 0이 된다. 그 값이 성공인지 실패인지는 조건식에 달렸고, 흔히 통과로 끝난다. 요청 수 자체를 조건에 넣어 \"증거가 없다\"를 따로 다룬다.",
    anchor: "argo-rollouts와-flagger가-자동으로-하는-일",
  },
  {
    id: "canary-release-6",
    post: "canary-release",
    question: "가중치를 단계마다 nginx reload로 바꾸는 카나리에서 reload 직후 ECONNRESET이 몇 건 보였다. 원인과 대응으로 맞는 것은?",
    choices: [
      "카나리 버전의 버그이므로 중단한다",
      "새 연결을 여는 순간이 옛 워커 정리와 겹친 것이다. 멱등한 요청 재시도를 두거나 reload 없이 가중치를 바꾸는 프록시를 쓴다",
      "keepalive 설정 때문이니 upstream keepalive를 끈다",
      "weight 합이 100이 아니어서 생긴다",
    ],
    answer: 1,
    explanation:
      "이미 열린 연결로 요청할 때는 reload 중에도 실패가 없었고, 연결을 한꺼번에 새로 열 때만 몇 건이 끊겼다. 카나리는 reload를 여러 번 하니 클라이언트 재시도나 Envoy xDS 같은 동적 설정으로 이 틈을 메운다.",
    anchor: "지표가-다음-단계를-정한다",
  },
];
