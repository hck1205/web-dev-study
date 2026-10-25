import type { QuizQuestion } from "../types";

export const LEETCODE_COUNT_PRIMES: QuizQuestion[] = [
  {
    id: "leetcode-count-primes-1",
    post: "leetcode-count-primes",
    question: "에라토스테네스의 체에서 소수 i의 배수를 2 × i가 아니라 i × i부터 지워도 되는 이유는?",
    choices: [
      "i × i보다 작은 배수는 소수일 수 있어서 지우면 안 되기 때문",
      "i × i보다 작은 배수 i × m은 m의 소인수가 i보다 작아 이미 지워졌기 때문",
      "i × i부터 지워야 시간 복잡도가 O(n)이 되기 때문",
      "2 × i부터 지우면 답이 틀리기 때문",
    ],
    answer: 1,
    explanation:
      "m이 i보다 작으면 m의 소인수 q도 i보다 작고, q의 차례에 i × m이 이미 지워졌다. 2 × i부터 지워도 답은 같지만 지우는 횟수가 늘 뿐이다. 500만에서 i × i부터는 약 1,119만 번, 2 × i부터는 약 1,153만 번이었다.",
    anchor: "왜-i--i부터-지우나",
  },
  {
    id: "leetcode-count-primes-2",
    post: "leetcode-count-primes",
    question: "countPrimes(13)의 답은?",
    choices: [
      "6",
      "4",
      "5",
      "7",
    ],
    answer: 2,
    explanation:
      "n보다 작은 소수만 센다. 2, 3, 5, 7, 11의 5개이고 13 자신은 빠진다. n 이하로 읽어 13까지 세면 6이 나오는데, n이 소수일 때만 틀려서 10이나 100 같은 테스트로는 잡히지 않는다.",
    anchor: "n보다-작은-소수를-센다",
  },
  {
    id: "leetcode-count-primes-3",
    post: "leetcode-count-primes",
    question: "Java에서 for (int j = i * i; j < n; j += i)를 아무 검사 없이 모든 소수 i에 대해 돌리면 n = 10만에서 무슨 일이 생기나?",
    choices: [
      "i가 46,341 이상이면 i * i가 int를 넘어 음수가 되고, 음수 인덱스로 접근해 예외가 난다",
      "정상적으로 9592가 나온다",
      "i * i가 0이 되어 무한 반복에 빠진다",
      "컴파일 오류가 난다",
    ],
    answer: 0,
    explanation:
      "46,341²은 2^31 - 1을 넘어서 int 곱셈 결과가 음수로 넘친다. 음수는 j < n을 통과하니 배열에 접근하다 ArrayIndexOutOfBoundsException이 난다. (long) i * i로 비교하거나 지우는 반복을 √n까지로 묶으면 피한다.",
    anchor: "python과-java에서-체를-빠르게",
  },
  {
    id: "leetcode-count-primes-4",
    post: "leetcode-count-primes",
    question: "선형 체에서 i % p === 0이 되는 순간 소수 목록 반복을 멈추는 이유는?",
    choices: [
      "그 뒤의 소수는 모두 n보다 커서",
      "i가 소수가 아니라는 걸 알게 되어서",
      "나머지 연산이 느려서 일찍 끝내려고",
      "그 뒤의 소수 p'를 곱한 p' × i는 가장 작은 소인수가 p라서, 나중에 p를 곱하는 차례에 지워지기 때문",
    ],
    answer: 3,
    explanation:
      "i가 p로 나눠떨어지면 p' × i도 p로 나눠떨어지니 가장 작은 소인수가 p'이 아니다. 그 수는 나중에 다른 i'에서 p × i'로 지워진다. 예를 들어 12는 3 × 4가 아니라 2 × 6으로 지워진다. 이렇게 해서 모든 합성수가 한 번씩만 지워진다.",
    anchor: "모든-합성수를-정확히-한-번씩-지우는-체",
  },
  {
    id: "leetcode-count-primes-5",
    post: "leetcode-count-primes",
    question: "n = 500만에서 O(n)인 선형 체가 O(n log log n)인 에라토스테네스의 체보다 실제로 느렸던 이유로 알맞은 것은?",
    choices: [
      "선형 체가 더 많은 칸을 지워서",
      "칸마다 소수 목록을 훑으며 곱셈과 나머지 연산을 하고, 지우는 칸이 메모리에서 띄엄띄엄 떨어져 있어서",
      "선형 체는 재귀를 써서",
      "선형 체는 일반 배열만 쓸 수 있어서",
    ],
    answer: 1,
    explanation:
      "선형 체는 지우는 횟수가 465만 번으로 에라토스테네스(약 1,119만 번)의 절반도 안 된다. 하지만 에라토스테네스의 안쪽 반복은 덧셈과 저장 하나라 아주 싸고 메모리를 차례로 훑는다. log log n이 3도 안 되는 범위에서는 이런 상수 차이가 차수 차이보다 크다.",
    anchor: "여섯-풀이를-같은-n으로-재-보면",
  },
];
