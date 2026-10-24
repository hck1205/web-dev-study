import type { QuizQuestion } from "../types";

export const LEETCODE_COUNTING_BITS: QuizQuestion[] = [
  {
    id: "leetcode-counting-bits-1",
    post: "leetcode-counting-bits",
    question: "`ans[i] = ans[i >> 1] + (i & 1)`을 0부터 차례로 채우면 항상 맞는 값이 나오는 이유는?",
    choices: [
      "i >> 1이 i의 1 개수를 절반으로 만든 값이라서",
      "i >> 1은 i보다 작아 이미 채워져 있고, 한 칸 밀면 맨 아래 비트만 빠지기 때문",
      "i & 1이 i의 1 개수 전체를 돌려주기 때문",
      "배열이 0으로 채워져 있어서 어떤 순서로 채워도 같기 때문",
    ],
    answer: 1,
    explanation:
      "오른쪽으로 한 칸 밀면 맨 아래 비트 하나만 사라지고 나머지 1은 그대로다. 그래서 i의 개수는 `i >> 1`의 개수에 빠진 비트를 더한 값이다. `i >> 1`이 i보다 작으니 작은 수부터 채우면 이미 구해 둔 값을 꺼내 쓴다.",
    anchor: "한-칸-민-수의-답에-맨-아래-비트를-더한다",
  },
  {
    id: "leetcode-counting-bits-2",
    post: "leetcode-counting-bits",
    question: "`ans[i] = ans[i & (i - 1)] + 1`로 ans[6]을 구할 때 꺼내 쓰는 칸은?",
    choices: ["ans[3]", "ans[2]", "ans[5]", "ans[4]"],
    answer: 3,
    explanation:
      "6은 110이고 `6 & 5`는 110 & 101 = 100, 즉 4다. 가장 낮은 1을 끈 수라 1이 정확히 하나 적다. ans[3]은 `i >> 1` 점화식, ans[2]는 가장 높은 비트를 떼는 점화식이 보는 칸이다.",
    anchor: "가장-낮은-1을-끈-수의-답에-1을-더한다",
  },
  {
    id: "leetcode-counting-bits-3",
    post: "leetcode-counting-bits",
    question: "`ans[i] = ans[i >> 1] + i & 1`처럼 괄호를 빼면 어떻게 되나?",
    choices: [
      "결과가 같다. 연산 순서는 왼쪽부터라서",
      "문법 에러가 난다",
      "`&`가 `+`보다 우선순위가 낮아 `(ans[i >> 1] + i) & 1`이 되어 0과 1만 나온다",
      "i가 홀수일 때만 1이 더해져 정답이 된다",
    ],
    answer: 2,
    explanation:
      "JavaScript, Java, Python 모두 `&`가 `+`보다 나중에 계산된다. 그래서 더한 값의 맨 아래 비트만 남아 0이나 1이 나온다. 에러 없이 그럴듯한 숫자가 나오니 비트 연산이 섞인 식에는 괄호를 친다.",
    anchor: "괄호를-빼먹은-점화식",
  },
  {
    id: "leetcode-counting-bits-4",
    post: "leetcode-counting-bits",
    question: "수마다 1을 따로 세는 풀이가 O(n log n)이고 점화식 풀이가 O(n)인 차이는 어디서 오나?",
    choices: [
      "점화식은 이미 구한 작은 수의 답을 다시 쓰고, 따로 세는 풀이는 수마다 비트를 처음부터 훑기 때문",
      "점화식 풀이는 내장 함수를 쓰기 때문",
      "따로 세는 풀이는 정렬을 하기 때문",
      "점화식 풀이는 n의 절반만 계산하기 때문",
    ],
    answer: 0,
    explanation:
      "따로 세면 수 i마다 비트 길이 약 log i만큼 돈다. 점화식은 i보다 작은 수의 답에 상수 번 연산만 더하니 칸마다 O(1)이다. 동적 계획법의 재사용이 이 차이를 만든다.",
    anchor: "수마다-따로-세기",
  },
  {
    id: "leetcode-counting-bits-5",
    post: "leetcode-counting-bits",
    question: "0부터 n까지 1의 총개수만 필요하고 n이 10^12라면 가장 알맞은 방법은?",
    choices: [
      "길이 n + 1인 배열을 점화식으로 채우고 더한다",
      "값이 p인 자리마다 0과 1이 p개씩 번갈아 나오는 주기를 이용해 자리별로 센다",
      "n 하나의 1 개수에 n을 곱한다",
      "Uint8Array로 배열을 만들면 충분하다",
    ],
    answer: 1,
    explanation:
      "10^12칸 배열은 만들 수 없다. 값 p인 자리는 2p 주기로 0이 p개, 1이 p개씩 나오니 꽉 찬 주기와 남는 부분만 계산하면 된다. 자리 수만큼 돌아 O(log n)이다.",
    anchor: "조건을-바꿔-묻는다면",
  },
];
