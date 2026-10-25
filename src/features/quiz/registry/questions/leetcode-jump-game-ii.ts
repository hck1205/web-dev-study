import type { QuizQuestion } from "../types";

export const LEETCODE_JUMP_GAME_II: QuizQuestion[] = [
  {
    id: "leetcode-jump-game-ii-1",
    post: "leetcode-jump-game-ii",
    question: "nums = [2, 1, 3, 1, 1, 2, 1]에서 최소 점프 횟수는?",
    choices: ["2", "4", "5", "3"],
    answer: 3,
    explanation:
      "한 번 뛰어 닿는 칸은 1, 2번, 두 번 뛰어 처음 닿는 칸은 3, 4, 5번, 6번은 세 번째 점프에서 처음 닿는다. 경로로 쓰면 0 → 2 → 5 → 6이다. 2번 만에 가려면 0번이 닿는 1, 2번 중 하나에서 6번에 닿아야 하는데 둘 다 5번까지가 최대다.",
    anchor: "손으로-무리를-나눠-본다",
  },
  {
    id: "leetcode-jump-game-ii-2",
    post: "leetcode-jump-game-ii",
    question: "층 끝 세기 풀이가 최소 점프 수를 보장하는 이유로 가장 알맞은 것은?",
    choices: [
      "매번 가장 멀리 뛰는 칸을 고르기 때문",
      "간선 길이가 모두 1인 그래프의 BFS 층을 세는 것과 같고, 층이 언제나 이어진 칸 번호라 끝 번호만으로 셀 수 있기 때문",
      "배열을 뒤에서부터 훑기 때문",
      "숫자가 가장 큰 칸으로 뛰기 때문",
    ],
    answer: 1,
    explanation:
      "i번째 층은 정확히 i번 뛰어 처음 닿는 칸들이고, BFS에서는 처음 닿는 층 번호가 최단 거리다. 각 칸의 점프 범위가 이어져 있어서 층도 이어진 구간이 되고, 그래서 curEnd와 farthest 두 숫자로 충분하다. 어느 칸으로 뛸지는 고르지 않는다.",
    anchor: "왜-최소인가",
  },
  {
    id: "leetcode-jump-game-ii-3",
    post: "leetcode-jump-game-ii",
    question: "반복을 i < nums.length - 1이 아니라 i < nums.length로 돌리면 [1, 2]에서 무엇이 나오나?",
    choices: ["2", "1", "0", "무한 반복"],
    answer: 0,
    explanation:
      "i = 1에서 curEnd가 1이라 층 끝에 닿았다며 점프를 하나 더 센다. 이미 마지막 칸에 서 있는데 한 번 더 뛰는 셈이라 정답 1 대신 2가 나온다. 같은 이유로 [0]에서는 0 대신 1이 나온다.",
    anchor: "마지막-칸까지-반복한다",
  },
  {
    id: "leetcode-jump-game-ii-4",
    post: "leetcode-jump-game-ii",
    question: "[3, 3, 1, 2, 3, 3]에서 0번이 닿는 칸 중 다음 출발점으로 골라야 하는 칸과 그 이유는?",
    choices: [
      "1번. 숫자 3이 가장 크기 때문",
      "2번. 가운데 칸이라서",
      "3번. 3 + 2 = 5로 다시 닿는 곳이 가장 멀기 때문",
      "어느 칸이든 답은 같다",
    ],
    answer: 2,
    explanation:
      "기준은 칸의 숫자가 아니라 j + nums[j]다. 1번은 4번까지, 3번은 5번(마지막 칸)까지 가서 3번을 고르면 2번 만에 끝난다. 숫자가 큰 1번을 고르면 3번 뛰게 된다.",
    anchor: "범위에서-숫자가-가장-큰-칸으로-뛴다",
  },
  {
    id: "leetcode-jump-game-ii-5",
    post: "leetcode-jump-game-ii",
    question: "칸마다 밟는 비용이 다르고 총비용을 최소로 해야 하는 변형에서 맞는 접근은?",
    choices: [
      "층 끝 세기를 그대로 쓴다",
      "층의 개수가 아니라 비용 합이 기준이라 앞에서 퍼뜨리는 DP로 돌아간다",
      "매번 가장 멀리 뛴다",
      "끝에서 가장 먼 출발점을 찾는다",
    ],
    answer: 1,
    explanation:
      "층 끝 세기는 모든 점프 비용이 같아서 층 번호가 곧 답일 때만 성립한다. 비용이 다르면 dp[j] = min(dp[i] + cost[j])로 퍼뜨리는 DP가 맞고, 점프 거리가 k 이하면 창의 최솟값을 덱으로 관리해 O(n)으로 줄인다.",
    anchor: "칸마다-밟는-비용이-다르다면",
  },
];
