import type { QuizQuestion } from "../types";

export const SD_LEADERBOARD_SCALING: QuizQuestion[] = [
  {
    id: "sd-leaderboard-scaling-1",
    post: "sd-leaderboard-scaling",
    question: "순위표 키 lb:2026-10 하나를 Redis Cluster 노드 10대에 올리면 어떻게 되나?",
    choices: [
      "멤버가 10대에 고르게 나뉘어 쓰기도 10분의 1씩 받는다",
      "Cluster가 점수 구간별로 자동 분할한다",
      "키 하나는 슬롯 하나에 속해서 한 노드가 그 정렬된 셋 전체를 갖고 쓰기도 다 받는다",
      "정렬된 셋은 Cluster에서 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "Redis Cluster는 키 이름을 해시해 슬롯에 넣고 슬롯을 노드에 나눈다. 정렬된 셋은 키 하나라 통째로 한 노드에 있으니, 순위표를 여러 키로 쪼개는 일은 애플리케이션이 해야 한다.",
    anchor: "키-하나는-나눠지지-않는다",
  },
  {
    id: "sd-leaderboard-scaling-2",
    post: "sd-leaderboard-scaling",
    question:
      "점수 구간 샤드에서 41점 사용자가 샤드 2 안에서 ZREVRANK 106201이고, 위 샤드 3의 ZCARD가 252022다. 화면에 보일 순위는?",
    choices: [
      "106,202위",
      "358,224위",
      "252,023위",
      "358,223위",
    ],
    answer: 1,
    explanation:
      "위 구간 샤드의 사람은 모두 내 앞이니 106,201 + 252,022 = 358,223이다. ZREVRANK는 0부터 센 값이라 화면에는 1을 더한 358,224위로 보여 준다.",
    anchor: "점수-구간으로-나누기",
  },
  {
    id: "sd-leaderboard-scaling-3",
    post: "sd-leaderboard-scaling",
    question: "월간 토너먼트에서 점수 구간 샤드의 경계를 지난달 말 분포로 고정해 두면 생기는 일은?",
    choices: [
      "월초에 모두 0점이라 가장 낮은 구간 샤드 하나에 전원이 몰린다",
      "월말에 맨 위 샤드가 비어 상위 10명을 못 구한다",
      "샤드 사이 이동이 아예 생기지 않는다",
      "해시 샤드보다 상위 10명 조회가 느려진다",
    ],
    answer: 0,
    explanation:
      "매달 모두 0점에서 시작하니 1일에는 전원이 샤드 0에 있고 한 달 동안 위로 올라간다. 그래서 지난달 같은 시점의 분포를 쓰거나 주기적으로 경계를 다시 정하고 사용자를 옮겨야 한다.",
    anchor: "점수가-경계를-넘을-때",
  },
  {
    id: "sd-leaderboard-scaling-4",
    post: "sd-leaderboard-scaling",
    question: "사용자 ID 해시 샤드 네 대에서 '10만 등부터 10명'을 보여 주려면 왜 비싼가?",
    choices: [
      "ZREVRANGE가 해시 샤드에서는 O(N)으로 바뀌어서",
      "해시 샤드는 점수를 정렬하지 않아서",
      "샤드마다 ZCARD를 먼저 불러야 해서",
      "10만 등이 어느 샤드의 몇 번째인지 몰라 샤드마다 앞의 100,010명을 받아 합쳐야 해서",
    ],
    answer: 3,
    explanation:
      "샤드마다 정렬은 되어 있지만 전체에서의 위치는 모른다. 그래서 각 샤드에서 앞부분을 다 받아 병합해야 하고, 측정에서 한 대는 22µs였던 일이 샤드마다 30~38ms가 걸렸다.",
    anchor: "나눈-대가를-재-본다",
  },
  {
    id: "sd-leaderboard-scaling-5",
    post: "sd-leaderboard-scaling",
    question:
      "동점을 깨려고 점수를 '승수 × 2^41 + (2^41 − 1 − 밀리초 시각)'으로 만들었다. 승수가 5,000일 때 무엇이 문제인가?",
    choices: [
      "Lua 스크립트에서 곱셈을 할 수 없다",
      "점수가 음수가 된다",
      "점수가 2의 53제곱을 넘어 반올림되어 1ms 차이가 사라지고 순서가 틀릴 수 있다",
      "ZADD가 오류를 낸다",
    ],
    answer: 2,
    explanation:
      "Redis 점수는 배정밀도 실수라 2의 53제곱까지만 정수를 정확히 담는다. 실험에서 1ms 먼저 도달한 amy와 bob의 점수가 같아져 이름순으로 bob이 위에 섰고, 오류는 나지 않았다. 시각 단위를 초로 줄이고 최대 점수를 미리 계산해 둔다.",
    anchor: "먼저-도달한-사람이-위에-서게",
  },
  {
    id: "sd-leaderboard-scaling-6",
    post: "sd-leaderboard-scaling",
    question: "순위표를 원본 DB에서 다시 만들 때 새 키에 채운 뒤 RENAME으로 바꾸는 이유는?",
    choices: [
      "RENAME이 ZADD보다 빨라서",
      "반쯤 채운 순위표가 사용자에게 보이지 않게 하려고",
      "새 키는 메모리를 덜 써서",
      "RENAME하면 복제본에 전달되지 않아서",
    ],
    answer: 1,
    explanation:
      "지금 키를 직접 고치면 채우는 동안 순위가 엉망으로 보인다. 새 키를 다 채운 뒤 RENAME하면 사용자는 옛 것이나 새 것 중 하나만 본다. 그사이 들어온 판은 판 ID로 중복을 거르며 다시 반영한다.",
    anchor: "다-잃었을-때-다시-만들기",
  },
  {
    id: "sd-leaderboard-scaling-7",
    post: "sd-leaderboard-scaling",
    question: "쓰기 샤딩한 NoSQL 테이블로 리더보드를 만들 때 흔히 하는 타협은?",
    choices: [
      "정확한 등수 대신 주기적으로 계산한 분포 경계로 '상위 몇 %'를 보여 준다",
      "상위 10명을 보여 주지 않는다",
      "쓰기를 한 파티션에 모은다",
      "점수를 문자열로 저장한다",
    ],
    answer: 0,
    explanation:
      "파티션 안에서 내 앞에 몇 개가 있는지 빨리 세 주는 연산이 없어서 정확한 순위가 비싸다. 점수 분포로 구간 경계를 미리 계산해 두고 내 점수가 어느 구간인지 보여 주며, 정확한 순위는 상위권에게만 준다.",
    anchor: "redis-없이-nosql로-만든다면",
  },
];
