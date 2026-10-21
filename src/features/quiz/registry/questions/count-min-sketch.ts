import type { QuizQuestion } from "../types";

export const COUNT_MIN_SKETCH: QuizQuestion[] = [
  {
    id: "count-min-sketch-1",
    post: "count-min-sketch",
    question: "Count-Min Sketch에서 질의할 때 d개 칸 중 최솟값을 답하는 이유는?",
    choices: [
      "모든 칸이 진짜 횟수 이상이라, 다른 원소가 가장 덜 섞인 칸이 진짜에 가장 가깝기 때문에",
      "최솟값이 진짜 횟수의 하한이라 안전하게 덜 세려고",
      "평균보다 계산이 빨라서",
      "행마다 다른 원소를 세기 때문에",
    ],
    answer: 0,
    explanation:
      "각 칸에는 그 원소의 횟수에 같은 칸으로 해시된 다른 원소들의 횟수가 더해져 있어 모두 진짜 이상이다. 그중 가장 작은 칸이 오염이 가장 적다. 그래서 CMS는 덜 세지 않고 더 세는 쪽으로만 틀린다.",
    anchor: "행마다-다른-해시로-한-칸씩-더한다",
  },
  {
    id: "count-min-sketch-2",
    post: "count-min-sketch",
    question: "오차 ε는 그대로 두고 오차를 넘을 확률 δ를 0.01에서 0.0001로 줄이려면 표를 어떻게 바꿔야 하나?",
    choices: [
      "너비를 100배로 늘린다",
      "깊이(행 수)를 늘린다. ln(1/δ)라서 5행에서 10행 정도가 된다",
      "카운터를 8바이트로 바꾼다",
      "해시 함수를 하나로 줄인다",
    ],
    answer: 1,
    explanation:
      "너비 ⌈e/ε⌉는 오차의 크기를, 깊이 ⌈ln(1/δ)⌉는 그 오차를 넘을 확률을 정한다. ln(100) ≈ 4.6에서 ln(10000) ≈ 9.2로 바뀌니 행을 약 두 배로 늘리면 된다. 확률을 100배 줄이는 데 메모리는 두 배면 된다.",
    anchor: "너비는-ε-깊이는-δ로-정한다",
  },
  {
    id: "count-min-sketch-3",
    post: "count-min-sketch",
    question: "CMS로 \"로그인 실패 5회 이상이면 잠금\"을 구현했더니 실패한 적 없는 사용자도 잠긴다. 가장 그럴듯한 원인은?",
    choices: [
      "CMS가 가끔 덜 세기 때문에",
      "오차가 εN이라는 절대값이라 문턱 5가 오차보다 훨씬 작기 때문에",
      "보수적 갱신을 써서",
      "깊이가 너무 깊어서",
    ],
    answer: 1,
    explanation:
      "CMS의 오차는 진짜 횟수와 상관없이 εN 규모로 붙어서, 작은 횟수는 몇 배씩 부풀 수 있다. 문턱이 εN과 같은 자릿수면 무고한 키가 대량으로 걸린다. 문턱을 εN보다 충분히 크게 두거나 정확한 카운터로 다시 확인한다.",
    anchor: "너비는-ε-깊이는-δ로-정한다",
  },
  {
    id: "count-min-sketch-4",
    post: "count-min-sketch",
    question: "보수적 갱신(conservative update)에 대한 설명으로 옳은 것은?",
    choices: [
      "모든 칸을 올리되 최댓값만 답한다",
      "현재 최솟값과 같은 칸만 올려 오차를 줄이지만, 빼기 갱신을 안전하게 지원하지 못한다",
      "덜 세는 대신 메모리를 절반으로 줄인다",
      "칸마다 더해서 합친 결과가 한 표로 센 결과와 항상 같다",
    ],
    answer: 1,
    explanation:
      "최솟값보다 큰 칸은 올려도 그 원소의 추정이 바뀌지 않으니 올리지 않는다. 측정에서 평균 과대 추정이 약 절반이 됐다. 대신 빼면 덜 세는 일이 생길 수 있고, 표끼리 더한 결과는 상한이긴 해도 한 표로 보수적 갱신한 결과와 같지 않다.",
    anchor: "보수적-갱신은-필요한-만큼만-올린다",
  },
  {
    id: "count-min-sketch-5",
    post: "count-min-sketch",
    question: "행마다 해시를 h1 + i·h2 (mod w)로 만들었더니 몇 번 안 나온 키가 상위권에 올라왔다. 왜인가?",
    choices: [
      "이중 해싱은 원소를 저장하기 때문에",
      "두 키의 h1, h2가 mod w로 같으면 모든 행에서 같은 칸에 떨어져, 행 사이 독립이 깨지기 때문에",
      "h2가 홀수라서",
      "깊이가 너무 얕아서",
    ],
    answer: 1,
    explanation:
      "이중 해싱에서는 h1과 h2가 같은 두 키가 모든 행에서 충돌한다. 그 확률이 (1/w)^d가 아니라 1/w²이라 키가 많으면 인기 원소마다 그런 짝이 생긴다. CMS는 모든 행이 함께 오염되는 사건이 곧 큰 오차라서 행마다 독립인 해시를 써야 한다.",
    anchor: "행끼리-독립이어야-한다",
  },
  {
    id: "count-min-sketch-6",
    post: "count-min-sketch",
    question: "Redis에서 TOPK.RESERVE key 10만 주고 검색어 8만 종류를 넣었더니 상위 목록이 엉망이다. 무엇을 고쳐야 하나?",
    choices: [
      "k를 100으로 늘린다",
      "decay를 1로 바꾼다",
      "너비 기본값 8이 너무 작으니 원소 종류에 맞춰 너비를 크게 지정한다",
      "TOPK.ADD 대신 TOPK.INCRBY를 쓴다",
    ],
    answer: 2,
    explanation:
      "TOPK의 기본 너비는 8, 깊이는 7이라 원소 종류가 많으면 칸마다 충돌이 심해 횟수가 크게 깎인다. 너비를 2,000으로 주고 다시 넣자 상위 10개가 횟수까지 정확했다. 너비는 k가 아니라 서로 다른 원소 수에 맞춰 잡는다.",
    anchor: "상위-k개는-힙을-붙여서",
  },
  {
    id: "count-min-sketch-7",
    post: "count-min-sketch",
    question: "API 서버 20대가 각자 센 요청 횟수를 합쳐야 한다. Lossy Counting 대신 CMS가 맞는 이유는?",
    choices: [
      "CMS는 원소 이름을 저장해서",
      "CMS는 항상 덜 세서 안전해서",
      "같은 크기와 해시의 CMS는 칸마다 더하면 정확히 합쳐지고, 아무 키나 물을 수 있어서",
      "CMS가 Lossy Counting보다 항상 메모리를 적게 써서",
    ],
    answer: 2,
    explanation:
      "CMS 표는 선형이라 칸별 덧셈이 한 표에 모두 넣은 것과 똑같다. Lossy Counting 표는 지운 시점이 서버마다 달라 단순히 더할 수 없고, 표에 없는 키는 답하지 못한다. 메모리는 상위 목록만 필요할 때 오히려 Lossy Counting이 작았다.",
    anchor: "lossy-counting과-같은-데이터로",
  },
];
