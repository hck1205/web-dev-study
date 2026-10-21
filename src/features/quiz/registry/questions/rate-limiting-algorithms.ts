import type { QuizQuestion } from "../types";

export const RATE_LIMITING_ALGORITHMS: QuizQuestion[] = [
  {
    id: "rate-limiting-algorithms-1",
    post: "rate-limiting-algorithms",
    question: "\"10초에 5개\" 고정 윈도 제한을 걸었는데 9초부터 11초 사이에 요청이 9개 넘게 통과했다. 가장 그럴듯한 이유는?",
    choices: [
      "Redis의 INCR가 원자적이지 않아서",
      "칸이 바뀌는 10초에 카운터가 0이 되어 경계 앞뒤로 각각 한도만큼 통과해서",
      "토큰이 용량을 넘게 쌓여서",
      "EXPIRE에 NX를 붙여서 키가 지워지지 않아서",
    ],
    answer: 1,
    explanation:
      "고정 윈도는 칸이 바뀌는 순간 직전 칸의 기록을 잊는다. 그래서 칸 끝과 다음 칸 처음에 몰아 보내면 짧은 시간에 한도의 두 배까지 지나간다. INCR 자체는 원자적이라 원인이 아니다.",
    anchor: "창을-고정하면-경계에서-두-배가-샌다",
  },
  {
    id: "rate-limiting-algorithms-2",
    post: "rate-limiting-algorithms",
    question: "슬라이딩 로그를 분당 1000번 한도의 일반 API에 쓰기 꺼리는 이유는?",
    choices: [
      "경계에서 한도의 두 배가 새기 때문에",
      "평균 속도를 지키지 못하기 때문에",
      "키마다 요청 시각을 한도만큼 저장해야 해서 메모리가 크게 들기 때문에",
      "Redis에서 정렬 집합을 쓸 수 없기 때문에",
    ],
    answer: 2,
    explanation:
      "슬라이딩 로그는 정확한 대신 통과한 요청의 시각을 모두 들고 있어야 한다. 요청 1000개를 담은 ZSET은 키 하나에 약 110KB였고, 숫자 하나짜리 고정 윈도 키는 56바이트였다. 그래서 로그인처럼 한도가 작은 곳에 주로 쓴다.",
    anchor: "요청-시각을-다-적어-두는-슬라이딩-로그",
  },
  {
    id: "rate-limiting-algorithms-3",
    post: "rate-limiting-algorithms",
    question: "용량 5, 초당 0.5개 토큰 버킷에서 아무 10초 구간에 통과할 수 있는 최대 요청 수는?",
    choices: ["5개", "10개", "15개", "제한이 없다"],
    answer: 1,
    explanation:
      "어떤 길이 W의 구간에서든 최대 \"용량 + 속도 × W\"개가 통과한다. 5 + 0.5 × 10 = 10개다. 쉬다가 몰아서 쓰는 요청에 너그러운 대신, 계속 몰아치면 평균 속도로 묶인다.",
    anchor: "토큰-버킷은-몰림을-얼마나-봐줄지-정한다",
  },
  {
    id: "rate-limiting-algorithms-4",
    post: "rate-limiting-algorithms",
    question: "초당 처리량이 고정된 외부 문자 발송사로 보내는 호출 앞에 둘 제한 방식으로 가장 알맞은 것은?",
    choices: [
      "고정 윈도",
      "용량이 큰 토큰 버킷",
      "슬라이딩 윈도 카운터",
      "대기열을 쓰는 리키 버킷",
    ],
    answer: 3,
    explanation:
      "대기열을 쓰는 리키 버킷은 몰려서 들어와도 일정한 간격으로 내보내서, 뒤의 시스템이 보는 속도를 고르게 만든다. 토큰 버킷은 용량만큼 몰림을 그대로 넘겨 버린다. 대신 대기열에서 기다리는 지연이 생긴다.",
    anchor: "새는-양동이는-내보내는-속도를-고르게-만든다",
  },
  {
    id: "rate-limiting-algorithms-5",
    post: "rate-limiting-algorithms",
    question: "토큰 버킷을 Redis에서 HMGET으로 읽고 앱에서 계산해 HSET으로 쓰게 했더니, 용량 10인데 동시 요청 40개가 모두 통과했다. 왜인가?",
    choices: [
      "여러 요청이 쓰기 전에 같은 토큰 수를 읽어서 토큰 하나로 여러 요청이 통과했기 때문에",
      "Redis가 HSET을 비동기로 처리하기 때문에",
      "키에 PEXPIRE를 걸지 않았기 때문에",
      "앱 서버 시계가 Redis보다 빨라서",
    ],
    answer: 0,
    explanation:
      "읽기, 계산, 쓰기가 나뉘어 있으면 그 사이에 다른 요청이 끼어들어 같은 값을 읽는다. Lua 스크립트로 묶으면 Redis가 스크립트를 한 번에 처리해 정확히 10개만 통과했다.",
    anchor: "서버가-여러-대면-세는-일이-경쟁이-된다",
  },
  {
    id: "rate-limiting-algorithms-6",
    post: "rate-limiting-algorithms",
    question: "Lua 토큰 버킷 스크립트에서 현재 시각을 앱 서버가 넘겨주지 않고 Redis의 TIME으로 읽는 이유는?",
    choices: [
      "TIME이 Date.now()보다 정밀해서",
      "앱 서버들의 시계가 서로 어긋나 있으면 토큰이 거꾸로 계산될 수 있어서",
      "Lua 스크립트는 인자를 받을 수 없어서",
      "TIME을 쓰면 키 수명이 자동으로 걸려서",
    ],
    answer: 1,
    explanation:
      "서버마다 시계가 조금씩 다르면, 늦은 시계를 가진 서버가 저장한 시각 때문에 흐른 시간이 음수가 되거나 너무 크게 잡힌다. 모든 계산을 Redis 한 곳의 시계로 하면 이 어긋남이 사라진다.",
    anchor: "서버가-여러-대면-세는-일이-경쟁이-된다",
  },
];
