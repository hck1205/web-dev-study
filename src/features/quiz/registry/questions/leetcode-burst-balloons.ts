import type { QuizQuestion } from "../types";

export const LEETCODE_BURST_BALLOONS: QuizQuestion[] = [
  {
    id: "leetcode-burst-balloons-1",
    post: "leetcode-burst-balloons",
    question: "구간에서 '처음' 터뜨릴 풍선 k로 나누면 DP가 틀리는 이유는?",
    choices: [
      "k가 사라지면 양쪽 끝 풍선이 이웃이 되어, 두 구간의 점수가 서로의 순서에 따라 달라지기 때문에",
      "처음 터뜨린 풍선의 점수는 항상 0이라서",
      "구간이 세 개로 나뉘어 상태가 3차원이 되기 때문에",
      "처음 터뜨릴 풍선은 언제나 가장 작은 숫자로 정해져 있어서",
    ],
    answer: 0,
    explanation:
      "k를 먼저 터뜨리면 왼쪽 구간의 오른쪽 끝과 오른쪽 구간의 왼쪽 끝이 붙는다. 그 이웃이 아직 남았는지는 상대 구간의 순서에 달려서 두 구간을 따로 풀 수 없다. 그래서 [2, 4, 3, 5]에서 115 대신 107이 나온다.",
    anchor: "처음-터뜨릴-풍선으로-나누면-안-되는-이유",
  },
  {
    id: "leetcode-burst-balloons-2",
    post: "leetcode-burst-balloons",
    question: "`dp[l][r]`을 'l과 r은 남기고 그 사이를 모두 터뜨리는 최대 점수'로 정의했다. k를 마지막에 터뜨릴 때 k가 받는 점수는?",
    choices: [
      "`a[k-1] × a[k] × a[k+1]`",
      "`a[l] × a[k] × a[r]`",
      "`a[k] × a[k]`",
      "`dp[l][k] × dp[k][r]`",
    ],
    answer: 1,
    explanation:
      "k가 마지막이면 그 순간 구간 안의 다른 풍선은 모두 사라졌으니 이웃은 남겨 둔 끝 l과 r이다. `a[k-1]`, `a[k+1]`은 원래 배열의 이웃일 뿐 그때는 이미 터졌다.",
    anchor: "마지막에-터뜨릴-풍선으로-나눈다",
  },
  {
    id: "leetcode-burst-balloons-3",
    post: "leetcode-burst-balloons",
    question: "바텀업에서 `for (l = 0; …) for (r = l + 2; …)`처럼 l을 작은 쪽부터 돌리면 왜 틀리나?",
    choices: [
      "r이 배열 범위를 벗어나서",
      "k가 l보다 작아져서",
      "`dp[k][r]`(k가 l보다 큰 행)이 아직 채워지지 않은 상태로 쓰여서",
      "양 끝의 1이 덮어써져서",
    ],
    answer: 2,
    explanation:
      "`dp[l][r]`은 `dp[l][k]`와 `dp[k][r]`을 쓰는데, k가 l보다 큰 행은 l을 작은 쪽부터 돌면 아직 0이다. 길이 순서로 돌거나 l을 큰 쪽부터 돌아야 한다. 그렇지 않으면 [2, 4, 3, 5]에서 40이 나온다.",
    anchor: "짧은-구간부터-채우는-바텀업",
  },
  {
    id: "leetcode-burst-balloons-4",
    post: "leetcode-burst-balloons",
    question: "`[1, 2, 3]`에서 '숫자가 작은 풍선부터 터뜨리는' 그리디의 점수와 실제 최댓값은?",
    choices: ["12와 12", "11과 12", "6과 12", "11과 11"],
    answer: 1,
    explanation:
      "작은 것부터면 1(2점), 2(6점), 3(3점)으로 11점이다. 2를 먼저 터뜨리면 6점, 그다음 1이 3 옆에서 3점, 마지막 3이 3점으로 12점이다. 지금의 선택이 이웃을 바꾸니 그리디가 통하지 않는다.",
    anchor: "2-4-3-5를-손으로-터뜨려-보기",
  },
  {
    id: "leetcode-burst-balloons-5",
    post: "leetcode-burst-balloons",
    question: "막대 자르기 비용(LeetCode 1547)은 '처음 자르는 위치'로 나눠도 되는데 풍선은 안 되는 이유는?",
    choices: [
      "막대 문제는 최솟값, 풍선 문제는 최댓값을 구해서",
      "막대는 길이가 정수라서",
      "막대는 자르면 두 조각이 바로 독립이지만, 풍선은 터지면 양쪽이 새로 이웃이 되어 엮이기 때문에",
      "막대 문제는 구간 DP가 아니어서",
    ],
    answer: 2,
    explanation:
      "자른 막대의 두 조각은 서로 비용에 영향을 주지 않는다. 풍선은 하나가 터지면 양쪽 풍선이 이웃이 되어 점수가 엮인다. 선택 후에 두 부분이 독립인지가 '처음'과 '마지막' 중 무엇으로 나눌지를 정한다.",
    anchor: "같은-생각으로-풀리는-구간-문제들",
  },
];
