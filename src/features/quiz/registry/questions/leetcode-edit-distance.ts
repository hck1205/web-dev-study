import type { QuizQuestion } from "../types";

export const LEETCODE_EDIT_DISTANCE: QuizQuestion[] = [
  {
    id: "leetcode-edit-distance-1",
    post: "leetcode-edit-distance",
    question: "`dp[i][j]`가 word1의 앞 i글자를 word2의 앞 j글자로 바꾸는 최소 횟수일 때, 위 칸 `dp[i-1][j]`에서 1을 더해 오는 것은 어떤 편집인가?",
    choices: [
      "word2의 j번째 글자를 넣기",
      "word1의 i번째 글자를 지우기",
      "word1의 i번째 글자를 word2의 j번째 글자로 바꾸기",
      "두 글자를 맞바꾸기",
    ],
    answer: 1,
    explanation:
      "위 칸은 word1 쪽만 한 글자 짧은 상태다. 거기서 word1의 i번째 글자를 지우면 지금 칸이 된다. 왼쪽 칸에서 오면 넣기, 왼쪽 위에서 오면 바꾸기(같으면 그대로)다.",
    anchor: "마지막-글자로-경우를-나눈다",
  },
  {
    id: "leetcode-edit-distance-2",
    post: "leetcode-edit-distance",
    question: "LCS 표처럼 0번 줄과 0번 칸을 모두 0으로 채우면 (\"ab\", \"xab\")의 결과는?",
    choices: ["1 (정답)", "2", "0 (오답)", "3"],
    answer: 2,
    explanation:
      "0번 칸이 0이면 word2 앞쪽의 x를 넣는 비용이 사라져 0이 나온다. 빈 문자열과의 거리는 길이이므로 0번 줄은 j, 0번 칸은 i여야 한다.",
    anchor: "자주-나오는-버그",
  },
  {
    id: "leetcode-edit-distance-3",
    post: "leetcode-edit-distance",
    question: "sunday와 saturday의 LCS는 5다. `m + n - 2 × LCS`로 편집 거리를 구하면 4가 나오는데 실제 답은 3이다. 왜 다른가?",
    choices: [
      "LCS 계산이 틀렸기 때문에",
      "편집 거리는 대칭이 아니어서",
      "그 식은 넣기·지우기만 셀 때 맞고, 바꾸기 한 번이 지우기+넣기 두 번을 대신할 수 있어서",
      "saturday가 sunday보다 길어서",
    ],
    answer: 2,
    explanation:
      "n을 지우고 r을 넣는 두 번을 n을 r로 바꾸는 한 번으로 줄일 수 있다. 바꾸기 비용을 2로 두면 편집 거리가 정확히 이 식과 같아진다. 편집 거리는 두 문자열을 바꿔 넣어도 같다.",
    anchor: "자주-나오는-버그",
  },
  {
    id: "leetcode-edit-distance-4",
    post: "leetcode-edit-distance",
    question: "배열 하나로 줄인 DP에서 줄을 시작할 때 `diag = dp[0]; dp[0] = i;`가 필요한 이유는?",
    choices: [
      "편집 거리에서는 i번째 줄의 0번 칸이 i(지우기 i번)이고, 그 직전 값이 다음 칸의 왼쪽 위이기 때문에",
      "JavaScript 배열의 0번 칸은 읽기 전용이라서",
      "LCS와 똑같이 0번 칸이 항상 0이어야 해서",
      "word2가 빈 문자열일 때만 필요해서",
    ],
    answer: 0,
    explanation:
      "LCS는 0번 칸이 늘 0이지만 편집 거리는 줄마다 i로 바뀐다. 바꾸기 전 값은 1번 칸에서 쓸 왼쪽 위라 diag에 먼저 옮겨 둔다. 이걸 빼면 (\"abc\", \"x\")에서 3 대신 1이 나온다.",
    anchor: "배열-하나로-줄이기",
  },
  {
    id: "leetcode-edit-distance-5",
    post: "leetcode-edit-distance",
    question: "거리가 k 이하인지만 알면 될 때 `|i - j| > k`인 칸을 계산하지 않아도 되는 이유는?",
    choices: [
      "그 칸들은 항상 0이라서",
      "그 칸에 가려면 넣기나 지우기만 k번 넘게 해야 해서, 거기를 지나는 편집은 이미 k를 넘기 때문에",
      "대각선 칸만 답에 영향을 주기 때문에",
      "문자열 길이가 같을 때만 성립하는 성질이라서",
    ],
    answer: 1,
    explanation:
      "대각선에서 한 칸 벗어날 때마다 넣기나 지우기가 하나 필요하다. 그러니 k칸 넘게 벗어난 칸을 지나는 정렬은 비용이 k보다 크다. 띠 안만 계산하면 O(k · 길이)에 판정한다.",
    anchor: "거리가-k-이하인지만-알면-될-때",
  },
];
