import type { QuizQuestion } from "../types";

export const LEETCODE_STOCK_WITH_COOLDOWN: QuizQuestion[] = [
  {
    id: "leetcode-stock-with-cooldown-1",
    post: "leetcode-stock-with-cooldown",
    question: "세 상태(hold, sold, rest) 풀이에서 쿨다운 규칙은 어디에 들어가 있나?",
    choices: [
      "sold를 계산할 때 가격을 두 번 더한다",
      "hold로 들어오는 화살표가 rest에서만 출발한다",
      "rest가 hold에서 바로 넘어올 수 있다",
      "마지막에 hold까지 포함해 최댓값을 고른다",
    ],
    answer: 1,
    explanation:
      "살 수 있는 건 rest 상태뿐이고, 오늘 판 sold는 다음 날 반드시 rest로 넘어간다. 그래서 sold에서 바로 hold로 가는 길이 없어 판 다음 날 사는 일이 생길 수 없다.",
    anchor: "하루를-세-상태로-나눈다",
  },
  {
    id: "leetcode-stock-with-cooldown-2",
    post: "leetcode-stock-with-cooldown",
    question: "변수 세 개 풀이를 `hold = max(hold, rest - p); sold = hold + p; rest = max(rest, sold);` 순서로 쓰면 [1, 4, 2, 5, 3, 6]에서 무엇이 나오나?",
    choices: ["6", "4", "9", "0"],
    answer: 2,
    explanation:
      "오늘 바꾼 hold와 sold를 같은 날 다시 써서 rest가 오늘 판 돈을 바로 받는다. 그러면 다음 날 그 돈으로 살 수 있어 쿨다운이 사라지고, 쿨다운 없는 답인 9가 나온다.",
    anchor: "갱신-순서가-틀려서-같은-날-정보가-섞인다",
  },
  {
    id: "leetcode-stock-with-cooldown-3",
    post: "leetcode-stock-with-cooldown",
    question: "hold와 free 두 상태로 풀 때, 살 때 이틀 전 free를 쓰는 이유는?",
    choices: [
      "이틀 전까지 주식 없이 마쳤다면 어제는 팔지 않았다는 보장이 있어서",
      "어제 free는 항상 음수라서",
      "이틀 전 값이 어제 값보다 항상 크기 때문에",
      "같은 날 사고팔면 이익이 음수가 되기 때문에",
    ],
    answer: 0,
    explanation:
      "오늘 사려면 어제가 쿨다운이 아니어야 한다. 어제 free에는 어제 판 경우가 섞여 있지만 이틀 전 free에서 출발하면 어제는 쉬었다. free2 대신 free를 쓰면 쿨다운 없는 122번 풀이가 된다.",
    anchor: "이틀-전-장부로-사는-두-상태-버전",
  },
  {
    id: "leetcode-stock-with-cooldown-4",
    post: "leetcode-stock-with-cooldown",
    question: "`[1, 5, 4, 9]`에서 오르막 구간을 앞에서부터 잡고 쿨다운에 걸리는 구간은 버리는 탐욕은 얼마를 내고, 정답은 얼마인가?",
    choices: ["탐욕 8, 정답 8", "탐욕 4, 정답 9", "탐욕 5, 정답 8", "탐욕 4, 정답 8"],
    answer: 3,
    explanation:
      "탐욕은 1→5로 4를 벌고, 4가 쿨다운에 걸려 4→9를 버린다. 정답은 두 구간을 합쳐 1에 사서 9에 파는 8이다. 뒤를 봐야 판단할 수 있어서 DP가 필요하다.",
    anchor: "오르는-구간을-앞에서부터-잡으면-틀린다",
  },
  {
    id: "leetcode-stock-with-cooldown-5",
    post: "leetcode-stock-with-cooldown",
    question: "`dp[i] = max(dp[i-1], max_j(dp[j-2] + prices[i] - prices[j]))` 풀이를 O(n)으로 줄일 때 들고 다니는 값은?",
    choices: [
      "지금까지의 최저가 prices[j]",
      "dp[j-2] - prices[j]의 최댓값",
      "dp[i-1] + prices[i]의 최댓값",
      "지금까지 거래한 횟수",
    ],
    answer: 1,
    explanation:
      "i가 바뀌어도 dp[j-2] - prices[j] 부분은 j에만 달려 있어 최댓값을 누적하면 안쪽 반복문이 사라진다. 이 값이 곧 상태 기계의 hold다. 최저가만 들고 다니면 쿨다운 전의 이익 dp[j-2]가 빠진다.",
    anchor: "마지막으로-판-날로-나누는-다른-길",
  },
];
