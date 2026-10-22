import type { QuizQuestion } from "../types";

export const OTEL_COLLECTOR_PIPELINE: QuizQuestion[] = [
  {
    id: "otel-collector-pipeline-1",
    post: "otel-collector-pipeline",
    question: "Collector 설정에 attributes 프로세서를 정의했는데 span의 속성이 하나도 바뀌지 않았다. 가장 먼저 의심할 곳은?",
    choices: [
      "exporter의 verbosity가 basic이라서",
      "프로세서를 service.pipelines의 processors 목록에 넣지 않아서",
      "receiver를 gRPC가 아니라 HTTP로 열어서",
      "batch 프로세서가 속성을 원래대로 되돌려서",
    ],
    answer: 1,
    explanation:
      "부품은 receivers·processors 아래에 정의만 해서는 아무 일도 하지 않고, service.pipelines에 넣어야 동작한다. 정의만 하고 파이프라인에 빼먹는 실수가 흔해서 띄우기 전에 validate로 연결을 확인한다.",
    anchor: "받는-칸-고치는-칸-내보내는-칸",
  },
  {
    id: "otel-collector-pipeline-2",
    post: "otel-collector-pipeline",
    question: "memory_limiter를 프로세서 목록의 맨 앞에 두는 이유로 가장 알맞은 것은?",
    choices: [
      "batch보다 앞에 있어야 묶음 크기가 정해지기 때문에",
      "앞에 두지 않으면 설정 검사에서 오류가 나기 때문에",
      "거절할 데이터라면 다른 프로세서가 일을 하기 전에 거절해야 메모리를 아끼기 때문에",
      "memory_limiter가 속성을 지워서 뒤의 프로세서가 가벼워지기 때문에",
    ],
    answer: 2,
    explanation:
      "프로세서는 적힌 순서대로 돌기 때문에, 어차피 거절할 데이터에 가공 비용을 쓰지 않으려면 memory_limiter를 맨 앞에 둔다. memory_limiter는 내용을 건드리지 않고 힙 사용량만 보고 받거나 거절한다.",
    anchor: "프로세서는-적은-순서대로-돈다",
  },
  {
    id: "otel-collector-pipeline-3",
    post: "otel-collector-pipeline",
    question: "attributes 프로세서의 hash 액션으로 enduser.id(이메일)를 바꿨다. 이 처리에 대한 설명으로 맞는 것은?",
    choices: [
      "소금 없는 SHA-256이라 같은 사용자는 같은 값이 되고, 이메일 목록이 있으면 맞춰 볼 수 있다",
      "실행할 때마다 다른 무작위 값이 되어 사용자별로 모아 볼 수 없다",
      "되돌릴 수 없으니 개인정보 기준의 익명화로 충분하다",
      "Collector가 비밀 키로 암호화해서 백엔드에서만 풀 수 있다",
    ],
    answer: 0,
    explanation:
      "실습에서 user0@example.com의 해시가 sha256sum 결과와 같았다. 같은 값은 늘 같은 해시라 사용자별 조회는 되지만, 후보 이메일을 하나씩 해시하면 되돌려 맞출 수 있어 가명 처리일 뿐 익명화가 아니다.",
    anchor: "나가기-전에-지운다",
  },
  {
    id: "otel-collector-pipeline-4",
    post: "otel-collector-pipeline",
    question: "게이트웨이가 꺼진 동안 에이전트 로그에 'sending queue is full'과 'Rejecting data'가 찍혔다. 이때 일어나는 일은?",
    choices: [
      "큐 맨 앞의 묶음을 다시 보내는 중이라 아직 잃은 데이터는 없다",
      "에이전트가 큐를 디스크로 옮겨 계속 받는다",
      "에이전트가 자동으로 다른 게이트웨이를 찾아 보낸다",
      "새로 들어온 데이터를 큐에 넣지 못해 앱에 오류로 돌려주고, 앱이 시간 안에 못 보내면 버려진다",
    ],
    answer: 3,
    explanation:
      "Will retry는 큐에 있는 것을 다시 보내는 중이라는 뜻이고, Rejecting data는 들어오는 것을 받지 못했다는 뜻이다. 거절은 receiver를 거쳐 앱 SDK로 돌아가고, SDK가 자기 시간 제한을 넘기면 그 묶음은 사라진다. 실습에서 1,024개가 이렇게 없어졌다.",
    anchor: "백엔드가-멈추면-큐가-받아-낸다",
  },
  {
    id: "otel-collector-pipeline-5",
    post: "otel-collector-pipeline",
    question: "게이트웨이가 꺼진 채로 큐에 span 600개가 쌓여 있을 때 에이전트를 재시작했다. file_storage를 큐 저장소로 연결한 경우와 아닌 경우의 차이는?",
    choices: [
      "둘 다 종료할 때 큐를 비우려고 기다리므로 차이가 없다",
      "메모리 큐는 종료와 함께 600개를 버리고, 디스크 큐는 재시작 뒤 600개를 이어서 보낸다",
      "디스크 큐는 중복을 막아 주므로 정확히 한 번 전달된다",
      "메모리 큐도 재시작하면 앱이 다시 보내 주므로 잃지 않는다",
    ],
    answer: 1,
    explanation:
      "실습에서 메모리 큐는 'interrupted due to shutdown'과 함께 데이터를 버렸고, 디스크 큐는 재시작 뒤 600개가 모두 게이트웨이에 도착했다. 다만 응답을 받기 전에 죽으면 다시 보내므로 디스크 큐도 중복이 생길 수 있는 최소 한 번 전달이다.",
    anchor: "재시작하면-메모리-큐는-사라진다",
  },
  {
    id: "otel-collector-pipeline-6",
    post: "otel-collector-pipeline",
    question: "컨테이너 메모리 한도 256MiB에 memory_limiter limit_mib: 200을 줬는데 거절이 시작되기 전에 OOM으로 죽었다. 가장 그럴듯한 이유는?",
    choices: [
      "memory_limiter는 Go 힙만 보는데 프로세스 RSS는 힙보다 훨씬 커서",
      "spike_limit_mib를 주지 않으면 memory_limiter가 꺼져서",
      "memory_limiter는 metrics 파이프라인에서만 동작해서",
      "batch 프로세서가 memory_limiter보다 먼저 메모리를 확보해서",
    ],
    answer: 0,
    explanation:
      "실습에서 힙은 61MiB인데 RSS는 240MiB였다. 힙 기준 한도가 컨테이너 한도에 닿기 전에 RSS가 먼저 한도를 넘을 수 있으니, 컨테이너 한도 대비 비율(limit_percentage)과 GOMEMLIMIT을 쓰고 필요한 부품만 넣은 배포판으로 기본 메모리를 줄인다.",
    anchor: "memory_limiter는-거절해서-살아남는다",
  },
  {
    id: "otel-collector-pipeline-7",
    post: "otel-collector-pipeline",
    question: "게이트웨이 Collector 세 대를 일반 L4 로드 밸런서 뒤에 두고 꼬리 샘플링을 켰다. 어떤 문제가 생기고 어떻게 푸나?",
    choices: [
      "샘플링 비율이 세 배가 되므로 비율을 3으로 나눈다",
      "게이트웨이끼리 span을 주고받느라 느려지므로 한 대로 줄인다",
      "한 trace의 span이 여러 게이트웨이에 흩어져 반쪽으로 판단하므로, 앞단에 trace ID로 나누는 load_balancing exporter를 둔다",
      "꼬리 샘플링은 에이전트에서만 동작하므로 DaemonSet으로 옮긴다",
    ],
    answer: 2,
    explanation:
      "꼬리 샘플링은 trace 하나의 span을 모두 본 뒤 판단하는데, 요청 단위로 나누는 로드 밸런서는 span을 흩어 놓는다. load_balancing exporter가 trace ID를 해시해 같은 trace를 늘 같은 게이트웨이로 보내면, 실습처럼 다른 묶음으로 나간 부모와 자식 span도 한 곳에 모인다.",
    anchor: "꼬리-샘플링을-하려면-trace를-한-곳에-모은다",
  },
];
