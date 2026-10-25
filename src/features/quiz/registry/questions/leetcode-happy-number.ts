import type { QuizQuestion } from "../types";

export const LEETCODE_HAPPY_NUMBER: QuizQuestion[] = [
  {
    id: "leetcode-happy-number-1",
    post: "leetcode-happy-number",
    question: "자릿수 제곱합을 되풀이할 때 숫자가 끝없이 커지는 경우가 없는 이유는?",
    choices: [
      "제곱합은 항상 원래 수의 절반 이하이기 때문",
      "네 자리 이상의 수는 다음 값이 많아야 81 × 자릿수라 반드시 작아지기 때문",
      "입력이 2^31 - 1 이하로 제한되어 있기 때문",
      "1에 닿으면 멈추기 때문",
    ],
    answer: 1,
    explanation:
      "d자리 수의 다음 값은 81d 이하인데 d가 4 이상이면 81d가 10^(d-1)보다 작다. 그래서 어떤 수든 999 이하로 내려오고 그 뒤로 243 이하에 머문다. 입력 제한이 없어도 성립하는 성질이고, 19의 다음 값 82처럼 절반 이하가 아닌 경우도 있다.",
    anchor: "숫자가-끝없이-커지지-않는-이유",
  },
  {
    id: "leetcode-happy-number-2",
    post: "leetcode-happy-number",
    question: "플로이드 풀이에서 slow와 fast를 둘 다 n에서 출발시키고 while (fast !== 1 && slow !== fast)로 돌리면?",
    choices: [
      "n이 1이 아니면 반복이 한 번도 돌지 않아 모두 false가 된다",
      "정상적으로 동작한다",
      "불행한 수에서 무한 반복에 빠진다",
      "행복한 수에서 무한 반복에 빠진다",
    ],
    answer: 0,
    explanation:
      "시작하자마자 slow === fast라 조건이 거짓이 되어 반복을 건너뛴다. 그 뒤 fast === 1을 보면 n이 1일 때만 true다. 토끼를 한 걸음 앞에 두거나 do...while로 먼저 움직인 뒤 비교한다.",
    anchor: "고리를-찾다가-자주-틀리는-곳",
  },
  {
    id: "leetcode-happy-number-3",
    post: "leetcode-happy-number",
    question: "고리 안에서 두 걸음씩 가는 포인터가 한 걸음씩 가는 포인터를 건너뛰지 않고 반드시 만나는 이유는?",
    choices: [
      "고리 길이가 항상 짝수이기 때문",
      "빠른 포인터가 1에서 멈추기 때문",
      "한 번 움직일 때마다 둘 사이 간격이 정확히 1씩 줄기 때문",
      "느린 포인터가 고리 입구에서 기다리기 때문",
    ],
    answer: 2,
    explanation:
      "빠른 쪽은 두 칸, 느린 쪽은 한 칸 가니 간격이 1씩 줄어 2, 1, 0으로 가며 0을 건너뛰지 않는다. 그래서 고리 길이가 L이면 L번 안에 만난다. 2의 고리 길이는 8이라 짝수지만 그것과는 관계가 없다.",
    anchor: "고리-안에서-반드시-만나는-이유",
  },
  {
    id: "leetcode-happy-number-4",
    post: "leetcode-happy-number",
    question: "while (n !== 1 && n !== 4) n = next(n); return n === 1; 이 코드가 맞는 근거는?",
    choices: [
      "4는 가장 작은 불행한 수라서",
      "불행한 수는 모두 짝수라서",
      "4의 다음 값이 4라서",
      "십진수에서 1이 아닌 고리는 4를 포함한 여덟 칸짜리 하나뿐이라서",
    ],
    answer: 3,
    explanation:
      "999 이하를 모두 계산하면 고리는 1과 4, 16, 37, 58, 89, 145, 42, 20 두 개뿐이고, 더 큰 수는 999 이하로 내려오니 모든 수에 성립한다. 고리 안의 수는 여덟 걸음 안에 4를 지난다. 가장 작은 불행한 수는 2이고 4의 다음 값은 16이다.",
    anchor: "행복하지-않은-수는-모두-4를-지난다",
  },
  {
    id: "leetcode-happy-number-5",
    post: "leetcode-happy-number",
    question: "JavaScript에서 자릿수를 떼어 낼 때 Math.floor 없이 n = n / 10으로 쓰면 next(19)는?",
    choices: [
      "82로 정상이다",
      "84.64646464646465처럼 소수가 섞인 값이 나온다",
      "0이 나온다",
      "무한 반복에 빠진다",
    ],
    answer: 1,
    explanation:
      "n이 1.9, 0.19처럼 소수가 되어 n > 0이 오래 참이고, 그동안 n % 10의 소수 나머지까지 제곱해 더한다. 반복은 숫자가 0으로 반올림될 때 325번 만에 끝나서 무한 반복은 아니다. 정수 나눗셈이 없는 JavaScript에서는 Math.floor를 써야 한다.",
    anchor: "다음-숫자를-계산하는-함수",
  },
];
