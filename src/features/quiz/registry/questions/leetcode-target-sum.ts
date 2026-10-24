import type { QuizQuestion } from "../types";

export const LEETCODE_TARGET_SUM: QuizQuestion[] = [
  {
    id: "leetcode-target-sum-1",
    post: "leetcode-target-sum",
    question: "nums = [2, 1, 1, 3], target = 1을 부분집합 합 문제로 바꾸면 + 쪽에 둘 수들의 합 P는 얼마인가?",
    choices: ["3", "4", "1", "7"],
    answer: 1,
    explanation:
      "P - N = target, P + N = total에서 P = (total + target) / 2다. total이 7, target이 1이라 P는 4다. 합이 4가 되도록 고르는 방법 3가지가 부호를 붙이는 방법 3가지와 하나씩 대응한다.",
    anchor: "더하기-바구니의-합은-정해져-있다",
  },
  {
    id: "leetcode-target-sum-2",
    post: "leetcode-target-sum",
    question: "부분집합 풀이에서 합 반복을 작은 쪽부터(`for s = x; s <= P; s++`) 돌면 어떻게 되나?",
    choices: [
      "같은 수를 여러 번 쓰는 무한 배낭이 되어 답이 커진다",
      "0이 있을 때만 틀린다",
      "결과는 같고 조금 느려질 뿐이다",
      "배열 밖을 읽어 오류가 난다",
    ],
    answer: 0,
    explanation:
      "작은 쪽부터 돌면 dp[s - x]가 이미 이번 수를 반영한 값이라 같은 수를 또 쓴다. 부호는 수마다 하나라 한 번씩만 써야 하므로 큰 쪽부터 돈다. [2, 1, 1, 3]에서 3 대신 11이 나온다.",
    anchor: "합을-작은-쪽부터-돈다",
  },
  {
    id: "leetcode-target-sum-3",
    post: "leetcode-target-sum",
    question: "nums = [0, 0, 1], target = 1의 답은?",
    choices: ["1", "2", "3", "4"],
    answer: 3,
    explanation:
      "+0과 -0이 같은 값을 내서 0 하나마다 경우가 두 배가 된다. 1은 +1이어야 하니 2 × 2 = 4다. 0을 건너뛰는 최적화를 넣으면 1이 나와 틀린다.",
    anchor: "0을-건너뛴다",
  },
  {
    id: "leetcode-target-sum-4",
    post: "leetcode-target-sum",
    question: "메모이제이션의 열쇠로 지금 합만 쓰고 몇 번째 수인지(i)를 빼면 왜 틀리나?",
    choices: [
      "합이 음수가 되면 Map에 넣을 수 없어서",
      "같은 합이라도 남은 수가 다르면 target을 만드는 방법 수가 달라서",
      "재귀가 끝나지 않아서",
      "부호를 붙이는 순서가 바뀌어서",
    ],
    answer: 1,
    explanation:
      "go(i, sum)의 답은 남은 수와 지금 합에 함께 달려 있다. 합만 열쇠로 쓰면 다른 i의 답을 재사용해 [1, 2, 3], target 0에서 정답 2 대신 1이 나온다.",
    anchor: "메모-열쇠에서-i를-뺀다",
  },
  {
    id: "leetcode-target-sum-5",
    post: "leetcode-target-sum",
    question: "n이 40이고 각 수가 10^9까지라 DP 표를 만들 수 없을 때 알맞은 풀이는?",
    choices: [
      "부분집합 합 1차원 배열",
      "부호 재귀 브루트포스",
      "앞 절반과 뒤 절반의 합을 각각 해시맵으로 세고 target - s를 찾는 중간에서 만나기",
      "합 축 2차원 표",
    ],
    answer: 2,
    explanation:
      "값이 크면 합의 범위가 커서 표를 만들 수 없고, 2^40 브루트포스는 너무 느리다. 절반씩 2^20개 합을 세고 짝을 해시맵으로 찾으면 O(2^(n/2))로 끝난다.",
    anchor: "반씩-나눠-세고-가운데서-맞춘다",
  },
];
