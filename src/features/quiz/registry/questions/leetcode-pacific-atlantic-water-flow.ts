import type { QuizQuestion } from "../types";

export const LEETCODE_PACIFIC_ATLANTIC_WATER_FLOW: QuizQuestion[] = [
  {
    id: "leetcode-pacific-atlantic-water-flow-1",
    post: "leetcode-pacific-atlantic-water-flow",
    question: "칸마다 물방울을 따라가는 대신 바다 쪽 가장자리에서 거꾸로 오르면 왜 O(m · n)이 되나?",
    choices: [
      "가장자리 칸이 적어서 출발점이 적기 때문에",
      "바다마다 한 번의 탐색으로 모든 칸의 답이 나오고, 칸마다 한 번씩만 보기 때문에",
      "높이를 정렬해 두기 때문에",
      "같은 높이 칸을 건너뛰기 때문에",
    ],
    answer: 1,
    explanation:
      "물이 a에서 b로 흐를 수 있으면 b에서 a로 거슬러 오를 수 있으니, 바다 쪽 가장자리 전체를 출발점으로 한 번만 오르면 그 바다로 흐르는 모든 칸이 표시된다. 칸마다 큐에 한 번만 들어가니 바다 둘이면 O(m · n)이다. 칸마다 따로 출발하면 같은 길을 반복해 O((m · n)²)이 된다.",
    anchor: "바다에서-거꾸로-거슬러-오른다",
  },
  {
    id: "leetcode-pacific-atlantic-water-flow-2",
    post: "leetcode-pacific-atlantic-water-flow",
    question: "칸마다 [태평양, 대서양] 결과를 메모하는 DFS가 [[1,1],[3,1]]에서 틀리는 이유는?",
    choices: [
      "재귀가 너무 깊어져서",
      "가장자리 판정을 잘못해서",
      "같은 높이 칸끼리 고리가 생겨, 계산 중인 칸이 돌려준 false를 받은 칸이 틀린 답을 영구히 저장해서",
      "높이가 3인 칸 때문에 물이 막혀서",
    ],
    answer: 2,
    explanation:
      "(1,1)이 같은 높이의 (0,1)에게 물을 때 (0,1)은 아직 계산 중이라 [false, false]를 돌려주고, (1,1)은 태평양에 못 간다고 저장해 버린다. 나중에 (0,1)의 답이 참이 되어도 고쳐지지 않는다. 물이 같은 높이로도 흐르는 규칙 때문에 계산 순서에 고리가 생긴다.",
    anchor: "칸마다-결과를-기억하면-같은-높이에서-틀린다",
  },
  {
    id: "leetcode-pacific-atlantic-water-flow-3",
    post: "leetcode-pacific-atlantic-water-flow",
    question: "거꾸로 오르는 BFS에서 if (heights[nr][nc] > heights[r][c]) continue로 쓰면 [[1,2],[2,1]]의 결과는?",
    choices: [
      "[[0,1],[1,0]]",
      "[]",
      "[[0,0],[1,1]]",
      "[[0,0],[0,1],[1,0],[1,1]]",
    ],
    answer: 3,
    explanation:
      "높은 칸을 건너뛰면 바닷물이 낮은 쪽으로 내려가서, 대서양 쪽 2에서 왼쪽 위 1로 내려가 그 칸을 대서양에도 닿는다고 표시한다. 정답은 [[0,1],[1,0]]이다. 거꾸로 오를 때는 이웃이 지금 칸보다 낮으면 건너뛴다.",
    anchor: "부등호-방향과-모서리",
  },
  {
    id: "leetcode-pacific-atlantic-water-flow-4",
    post: "leetcode-pacific-atlantic-water-flow",
    question: "200 × 200 격자가 전부 같은 높이일 때 거꾸로 오르는 재귀 DFS가 실패한 이유는?",
    choices: [
      "모든 칸이 서로 같은 높이라 재귀가 격자를 따라 4만 단계까지 깊어져서",
      "답이 4만 칸이라 결과 배열이 넘쳐서",
      "같은 높이 칸에서 무한 루프에 빠져서",
      "가장자리 칸이 두 번 출발해서",
    ],
    answer: 0,
    explanation:
      "평지에서는 어느 칸에서든 모든 이웃으로 오를 수 있어 재귀가 돌아오지 않고 칸 수만큼 쌓인다. Node 기본 설정에서 RangeError가 났다. 방문 표시가 있으니 무한 루프는 아니고, 같은 생각을 큐로 하는 BFS는 20ms쯤에 끝났다.",
    anchor: "같은-방향을-재귀-dfs로-오르면",
  },
  {
    id: "leetcode-pacific-atlantic-water-flow-5",
    post: "leetcode-pacific-atlantic-water-flow",
    question: "두 바다를 BFS 한 번으로 처리하는 비트 풀이에서 칸 하나가 큐에 들어가는 최대 횟수는?",
    choices: ["한 번", "두 번", "네 번", "이웃 수만큼"],
    answer: 1,
    explanation:
      "칸의 비트는 0에서 1이나 2로, 다시 3으로만 늘어나고, 비트가 늘어날 때만 큐에 넣는다. 그래서 많아야 두 번 들어가고 전체가 O(m · n)이다. 바다가 k개면 많아야 k번이다.",
    anchor: "한-번의-bfs에-두-바다를-싣는다",
  },
];
