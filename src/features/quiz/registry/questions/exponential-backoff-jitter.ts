import type { QuizQuestion } from "../types";

export const EXPONENTIAL_BACKOFF_JITTER: QuizQuestion[] = [
  {
    id: "exponential-backoff-jitter-1",
    post: "exponential-backoff-jitter",
    question: "Redis 재시작 뒤 연결 시도 그래프가 1초, 2초, 4초 간격으로 뾰족하게 솟는다. 가장 가능성 높은 원인은?",
    choices: [
      "Redis의 maxclients 설정이 너무 낮다",
      "앱들이 지터 없는 지수 백오프로 같은 순간 재연결하고 있다",
      "앱들이 재시도를 전혀 하지 않는다",
      "Redis가 1, 2, 4초마다 연결을 끊는다",
    ],
    answer: 1,
    explanation:
      "같은 순간 끊긴 클라이언트들이 같은 공식을 따르면 같은 순간 돌아온다. 봉우리 사이가 두 배씩 벌어지는 빗살 모양은 지터 없는 지수 백오프의 흔적이다.",
    anchor: "같은-순간-실패하면-같은-순간-돌아온다",
  },
  {
    id: "exponential-backoff-jitter-2",
    post: "exponential-backoff-jitter",
    question: "1000개 클라이언트 시뮬레이션에서 지터 없는 지수 백오프의 요청 수가 고정 100ms 간격과 같았던 이유는?",
    choices: [
      "지수 백오프가 실제로는 고정 간격으로 동작하기 때문이다",
      "cap이 너무 작아서다",
      "실패한 클라이언트들이 항상 같은 칸에 함께 도착해 매번 20개만 붙었기 때문이다",
      "서버 용량이 시간에 따라 줄었기 때문이다",
    ],
    answer: 2,
    explanation:
      "기다림이 길어져도 모두 같은 순간 돌아오니 몰림은 그대로고, 매 파도마다 서버가 받을 수 있는 만큼만 붙는다. 기다림만 늘었을 뿐 요청 수도 몰림도 줄지 않았다.",
    anchor: "클라이언트-천-개로-재-본다",
  },
  {
    id: "exponential-backoff-jitter-3",
    post: "exponential-backoff-jitter",
    question: "equal jitter가 full jitter와 다른 점은?",
    choices: [
      "공식값의 절반은 반드시 기다려 최소 대기를 보장하는 대신 덜 흩어진다",
      "직전 대기 시간을 기준으로 다음 범위를 정한다",
      "cap을 쓰지 않는다",
      "난수 없이 공식값을 그대로 쓴다",
    ],
    answer: 0,
    explanation:
      "equal은 t/2 + random(0, t/2)라서 난수가 0이어도 절반은 기다린다. 직전 대기로 범위를 정하는 건 decorrelated jitter다.",
    anchor: "무작위를-섞는-세-가지-방법",
  },
  {
    id: "exponential-backoff-jitter-4",
    post: "exponential-backoff-jitter",
    question: "여러 클라이언트가 503과 함께 Retry-After: 3을 받았다. 가장 나은 처리는?",
    choices: [
      "정확히 3초 뒤에 다시 보낸다",
      "Retry-After를 무시하고 자기 백오프 공식을 쓴다",
      "3초보다 일찍, 1초 뒤에 다시 보낸다",
      "최소 3초를 기다리고 작은 지터를 더하되, 데드라인을 넘으면 바로 실패한다",
    ],
    answer: 3,
    explanation:
      "Retry-After는 이보다 일찍 오지 말라는 뜻이다. 같은 값을 받은 클라이언트가 모두 정확히 3초 뒤에 오면 다시 몰리니 지터를 더하고, 기다려도 의미 없는 경우는 바로 실패한다.",
    anchor: "서버가-기다릴-시간을-알려-줄-때-retry-after",
  },
  {
    id: "exponential-backoff-jitter-5",
    post: "exponential-backoff-jitter",
    question: "Retry-After 값으로 HTTP 날짜보다 초 단위 숫자가 다루기 쉬운 이유는?",
    choices: [
      "숫자가 더 짧아서 헤더 크기가 줄기 때문이다",
      "받은 시각부터 세니 서버와 클라이언트의 시계 차이에 영향을 받지 않기 때문이다",
      "HTTP 날짜는 429에서 쓸 수 없기 때문이다",
      "초 단위가 밀리초까지 표현할 수 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "HTTP 날짜는 절대 시각이라 받는 쪽 시계가 어긋나면 너무 일찍이나 늦게 돌아온다. 초 단위 값은 응답을 받은 순간부터 세면 되니 시계 차이가 문제가 되지 않는다.",
    anchor: "서버가-기다릴-시간을-알려-줄-때-retry-after",
  },
  {
    id: "exponential-backoff-jitter-6",
    post: "exponential-backoff-jitter",
    question: "Go 1.19로 만든 서비스에 지터를 넣었는데도 재연결이 같은 순간 몰린다. 의심할 것은?",
    choices: [
      "math/rand 전역 생성기가 고정 시드로 시작해 모든 인스턴스가 같은 난수 수열을 쓴다",
      "Go의 time.Sleep이 정확하지 않다",
      "지터를 넣으면 원래 몰림이 더 심해진다",
      "cap이 너무 커서다",
    ],
    answer: 0,
    explanation:
      "Go 1.20 이전에는 rand.Seed를 부르지 않으면 모든 프로세스가 같은 수열을 뽑았다. 같은 순간 실패하면 같은 지터로 돌아오니 지터가 없는 것과 같다.",
    anchor: "값-고르기와-흔한-실수",
  },
  {
    id: "exponential-backoff-jitter-7",
    post: "exponential-backoff-jitter",
    question: "매시 정각에 수백 대 서버에서 같은 배치가 돌며 DB에 파도가 친다. 백오프와 같은 원리의 해법은?",
    choices: [
      "배치 주기를 30분으로 줄인다",
      "DB 커넥션 풀을 늘린다",
      "systemd 타이머의 RandomizedDelaySec나 무작위 sleep으로 실행 시각을 흩는다",
      "배치를 모두 같은 서버로 모은다",
    ],
    answer: 2,
    explanation:
      "같은 시각에 맞춰 움직이는 것은 모두 동기화된 몰림을 만든다. 재시도에 지터를 넣듯 실행 시각에도 무작위를 섞어 흩는다.",
    anchor: "재시도-말고도-같은-시각에-몰리는-것들",
  },
];
