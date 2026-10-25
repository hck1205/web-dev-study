import type { QuizQuestion } from "../types";

export const LEETCODE_COIN_CHANGE_II: QuizQuestion[] = [
  {
    id: "leetcode-coin-change-ii-1",
    post: "leetcode-coin-change-ii",
    question: "1차원 풀이에서 금액을 바깥, 동전을 안쪽 반복문에 두면 coins = [1, 3, 4], amount = 6에서 무엇이 나오나?",
    choices: ["4", "6", "9", "0"],
    answer: 2,
    explanation:
      "금액을 바깥에 두면 dp[a]가 마지막에 낸 동전마다 경우를 나눠 더하므로 4+1+1과 1+1+4가 따로 세어진다. 그래서 묶음 4가지가 아니라 순서를 센 9가 나온다. 이것이 Combination Sum IV의 답이다.",
    anchor: "반복문을-뒤집으면-순서까지-센다",
  },
  {
    id: "leetcode-coin-change-ii-2",
    post: "leetcode-coin-change-ii",
    question: "2차원 점화식 `dp[i][a] = dp[i-1][a] + dp[i][a-c]`에서 두 번째 항을 윗줄 `dp[i-1][a-c]`로 바꾸면 무엇을 세게 되나?",
    choices: [
      "순서까지 따진 나열",
      "동전마다 최대 한 번만 쓰는 묶음",
      "동전을 정확히 두 번씩 쓰는 묶음",
      "최소 동전 개수",
    ],
    answer: 1,
    explanation:
      "같은 줄 왼쪽은 c를 계속 써도 되는 상태라 무한 개를 표현한다. 윗줄로 바꾸면 c를 하나 쓰고 바로 다음 동전으로 넘어가 0/1 배낭이 된다. 1차원에서는 금액을 큰 쪽부터 도는 것과 같다.",
    anchor: "같은-줄-왼쪽-칸이-이미-그-합을-들고-있다",
  },
  {
    id: "leetcode-coin-change-ii-3",
    post: "leetcode-coin-change-ii",
    question: "`dp[0] = 1`로 두는 이유로 가장 알맞은 것은?",
    choices: [
      "배열의 첫 칸은 비워 둘 수 없어서",
      "최소 개수 문제와 초기값을 맞추기 위해",
      "동전이 하나도 없을 때 답이 1이 되도록 하는 관례일 뿐 결과에는 영향이 없다",
      "0원을 만드는 방법은 아무것도 안 내는 한 가지이고, 모든 칸이 이 값에서 덧셈으로 자라기 때문",
    ],
    answer: 3,
    explanation:
      "개수 세기는 덧셈만 하므로 씨앗이 0이면 모든 칸이 0으로 남는다. amount = 0이 입력으로 오면 답도 1이어야 한다. 최소 개수 문제는 Infinity로 채우고 dp[0] = 0이라 초기값이 다르다.",
    anchor: "0원-칸을-0으로-둔다",
  },
  {
    id: "leetcode-coin-change-ii-4",
    post: "leetcode-coin-change-ii",
    question: "탑다운 재귀를 `go(rest) = Σ go(rest - c)`처럼 남은 금액만 상태로 짜면 왜 틀리나?",
    choices: [
      "재귀 깊이가 너무 깊어져서 항상 스택이 넘친다",
      "메모를 -1로 표시하지 않아서",
      "다음 동전으로 아무거나 고를 수 있어 순서만 다른 묶음이 따로 세어진다",
      "rest가 음수가 될 수 있어서",
    ],
    answer: 2,
    explanation:
      "1 다음 4와 4 다음 1이 서로 다른 호출 경로가 되어 순열을 센다. 이번에 고를 수 있는 동전의 시작 번호를 상태에 넣어 동전 번호가 줄어들지 않는 순서로만 고르게 해야 묶음을 한 번씩 센다.",
    anchor: "재귀에서-남은-금액만-상태로-둔다",
  },
  {
    id: "leetcode-coin-change-ii-5",
    post: "leetcode-coin-change-ii",
    question: "답은 32비트에 들어가지만 중간 칸이 넘칠 수 있다. Java의 `int` 배열로 풀어도 답이 맞는 이유는?",
    choices: [
      "Java는 넘치면 예외를 던지고 자동으로 long으로 다시 계산해서",
      "덧셈만 하므로 감긴 값도 2^32로 나눈 나머지가 보존되고, 진짜 답이 32비트 안이면 그대로 맞기 때문",
      "중간 칸은 절대 넘치지 않아서",
      "LeetCode가 Java에서만 작은 입력을 주기 때문",
    ],
    answer: 1,
    explanation:
      "int 덧셈은 넘치면 2^32 기준으로 감기지만 덧셈의 나머지는 보존된다. 게다가 답 칸에 더해지는 칸은 모두 답보다 크지 않다. C++은 부호 있는 정수의 넘침이 정의되지 않은 동작이라 unsigned나 long long을 쓴다.",
    anchor: "세-언어로-쓴-1차원-풀이",
  },
];
