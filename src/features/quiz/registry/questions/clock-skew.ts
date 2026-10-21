import type { QuizQuestion } from "../types";

export const CLOCK_SKEW: QuizQuestion[] = [
  {
    id: "clock-skew-1",
    post: "clock-skew",
    question:
      "1초 걸리는 작업 도중 NTP가 벽시계를 2초 되돌렸다. Date.now() 차이로 잰 시간과 performance.now()로 잰 시간은 어떻게 나오나?",
    choices: [
      "둘 다 약 1초",
      "Date.now()는 약 -1초, performance.now()는 약 1초",
      "Date.now()는 약 3초, performance.now()는 약 1초",
      "둘 다 약 -1초",
    ],
    answer: 1,
    explanation:
      "Date.now()는 벽시계라 되돌린 2초만큼 줄어 음수가 된다. 실험에서는 -973ms였다. performance.now()는 단조 시계라 건너뛰지 않고 1027ms를 돌려줬다. 걸린 시간은 단조 시계로 잰다.",
    anchor: "시간을-잴-때는-단조-시계로",
  },
  {
    id: "clock-skew-2",
    post: "clock-skew",
    question:
      "로그인 직후 API를 부르면 401(jwt not active)이 나고 40초쯤 뒤에는 된다. 가장 먼저 의심할 것은?",
    choices: [
      "검증 서버의 시계가 발급 서버보다 빠르다",
      "발급 서버의 시계가 검증 서버보다 빠르다",
      "토큰의 exp가 너무 짧다",
      "서명 키가 바뀌었다",
    ],
    answer: 1,
    explanation:
      "발급 서버가 빠르면 nbf가 검증 서버 기준으로 미래라 그 시각이 될 때까지 거절된다. 허용 오차(clockTolerance)로 흡수할 수 있지만, 수십 초씩 벌어졌다면 발급 서버의 NTP부터 고친다.",
    anchor: "토큰이-일찍-죽고-늦게-산다",
  },
  {
    id: "clock-skew-3",
    post: "clock-skew",
    question:
      "NTP에서 t1=100.000, t2=100.120, t3=100.121, t4=100.041(초)이다. 클라이언트 시계의 오차는?",
    choices: [
      "서버보다 0.100초 느리다",
      "서버보다 0.120초 느리다",
      "서버보다 0.040초 빠르다",
      "서버보다 0.080초 느리다",
    ],
    answer: 0,
    explanation:
      "오차는 ((t2 - t1) + (t3 - t4)) / 2 = (0.120 + 0.080) / 2 = 0.100초로, 서버가 0.1초 앞서 있다. 이 계산은 가는 길과 오는 길의 지연이 같다고 가정하므로, 경로가 비대칭이면 그 차이의 절반만큼 오차가 남는다.",
    anchor: "서버마다-시계가-다르게-가는-이유",
  },
  {
    id: "clock-skew-4",
    post: "clock-skew",
    question: "윤초 번지기(leap smear)를 쓰는 NTP 서버와 쓰지 않는 서버를 한 시스템에 섞으면 안 되는 이유는?",
    choices: [
      "번지는 서버는 윤초 당일 응답하지 않기 때문",
      "번지는 동안 두 종류의 서버가 최대 0.5초까지 어긋나 클라이언트 시계가 흔들리기 때문",
      "번지기를 하면 시계가 1초 되돌아가기 때문",
      "번지기는 stratum을 높여 서버를 버리게 하기 때문",
    ],
    answer: 1,
    explanation:
      "번지기는 1초를 24시간에 걸쳐 조금씩 흡수하므로 그동안 번지지 않는 서버와 값이 다르다. 둘을 함께 보면 클라이언트는 어느 쪽이 맞는지 모르고 흔들린다. 시계가 되돌아가지 않는다는 점은 번지기의 장점이다.",
    anchor: "윤초와-번지기",
  },
  {
    id: "clock-skew-5",
    post: "clock-skew",
    question: "램포트 시계에서 L(a) = 1, L(b) = 3이다. 이것만으로 말할 수 있는 것은?",
    choices: [
      "a가 b의 원인이다",
      "b는 a의 원인이 아니다",
      "a와 b는 동시다",
      "a는 실제로 b보다 2단위 먼저 일어났다",
    ],
    answer: 1,
    explanation:
      "b가 a의 원인이었다면 L(b) < L(a)여야 하니 b는 a의 원인이 아니다. 하지만 L(a) < L(b)라고 a가 b의 원인이라는 보장은 없어서, a가 원인인지 동시인지는 알 수 없다. 그걸 가리려면 벡터 시계가 필요하다.",
    anchor: "시계-없이-순서를-정한다",
  },
  {
    id: "clock-skew-6",
    post: "clock-skew",
    question:
      "시계가 5초 느린 노드 B가 A의 쓰기를 복제로 받아 본 뒤 고쳐 썼다. 벽시계 LWW와 HLC LWW로 각각 합치면?",
    choices: [
      "둘 다 B의 쓰기가 남는다",
      "벽시계로는 A의 쓰기가 남고, HLC로는 B의 쓰기가 남는다",
      "벽시계로는 B의 쓰기가 남고, HLC로는 A의 쓰기가 남는다",
      "둘 다 A의 쓰기가 남는다",
    ],
    answer: 1,
    explanation:
      "B의 벽시계 타임스탬프는 5초 느려 A보다 작으니, 원인을 보고 나중에 쓴 B의 값이 사라진다. HLC는 A의 타임스탬프를 받을 때 물리 부분을 끌어올려 B의 쓰기가 반드시 뒤가 된다. 대신 B의 HLC가 자기 벽시계보다 앞서 가는 비용이 있다.",
    anchor: "물리-시각과-논리-숫자를-합친-hlc",
  },
  {
    id: "clock-skew-7",
    post: "clock-skew",
    question:
      "created_at을 PostgreSQL now()로 채우고 '마지막으로 읽은 created_at 이후' 행을 가져가는 동기화 작업이 가끔 행을 놓친다. 왜인가?",
    choices: [
      "now()가 서버마다 다른 시각을 돌려주기 때문",
      "now()는 트랜잭션 시작 시각이라, 오래 걸려 나중에 커밋한 행이 이미 지나간 시각을 갖기 때문",
      "now()는 초 단위로만 저장되기 때문",
      "now()가 UTC가 아니기 때문",
    ],
    answer: 1,
    explanation:
      "now()는 트랜잭션 안에서 계속 같은 값이고 시작 시각이다. 긴 트랜잭션이 늦게 커밋하면 이미 읽고 지나간 시각의 행이 새로 나타난다. 순서가 중요하면 커밋 순서를 따르는 값을 기준으로 삼는다.",
    anchor: "정렬-기준으로-앱-서버의-시각을-쓰면",
  },
];
