import type { QuizQuestion } from "../types";

export const LEETCODE_SHORTEST_PATH_IN_BINARY_MATRIX: QuizQuestion[] = [
  {
    id: "leetcode-shortest-path-in-binary-matrix-1",
    post: "leetcode-shortest-path-in-binary-matrix",
    question: "이 문제에서 BFS로 처음 닿은 길이를 그 칸의 최단 길이로 확정해도 되는 이유는?",
    choices: [
      "격자가 정사각형이라서",
      "한 걸음의 비용이 대각선까지 모두 같아, 길이 k인 칸을 다 꺼낸 뒤에야 길이 k + 1인 칸이 나와서",
      "도착 칸이 항상 가장 마지막 겹에 있어서",
      "벽이 있는 칸은 큐에 들어가지 않아서",
    ],
    answer: 1,
    explanation:
      "큐는 먼저 넣은 것을 먼저 꺼내고 모든 걸음 비용이 1이라, 겹 순서가 곧 길이 순서다. 그래서 처음 닿은 길이보다 짧은 길이 나중에 나올 수 없다. 걸음마다 비용이 다르면 이 논리가 깨져 다익스트라가 필요하다.",
    anchor: "가까운-칸부터-한-겹씩-넓히는-bfs",
  },
  {
    id: "leetcode-shortest-path-in-binary-matrix-2",
    post: "leetcode-shortest-path-in-binary-matrix",
    question: "격자 [[0,1,0],[0,1,0],[0,0,0]]에서 상하좌우 네 방향만 쓰는 BFS는 무엇을 내나?",
    choices: ["5", "4", "3", "-1"],
    answer: 0,
    explanation:
      "맞는 답은 (0,0) → (1,0) → (2,1) → (2,2)로 대각선을 한 번 써서 4다. 네 방향만 쓰면 (2,0)을 거쳐 아랫줄을 따라가야 해서 5가 나온다. 이 문제는 여덟 방향 이동이라 방향 배열부터 확인해야 한다.",
    anchor: "칸-수와-대각선에서-틀린다",
  },
  {
    id: "leetcode-shortest-path-in-binary-matrix-3",
    post: "leetcode-shortest-path-in-binary-matrix",
    question: "BFS에서 방문 표시를 큐에서 꺼낼 때 하면 어떻게 되나?",
    choices: [
      "더 짧은 길을 놓쳐 답이 틀린다",
      "무한 루프에 빠진다",
      "답은 같지만 같은 칸이 여러 이웃에서 여러 번 큐에 들어가 일이 늘어난다",
      "도착 칸을 꺼내지 못해 -1이 나온다",
    ],
    answer: 2,
    explanation:
      "꺼낼 때 표시하면 아직 꺼내지 않은 칸을 다른 이웃이 또 넣는다. 빈 100 × 100에서 큐에 넣는 횟수가 1만 번에서 39,403번으로 늘었다. 답은 첫 번째로 꺼낸 값이 여전히 최단이라 맞지만, 넣을 때 표시하는 게 정석이다.",
    anchor: "가까운-칸부터-한-겹씩-넓히는-bfs",
  },
  {
    id: "leetcode-shortest-path-in-binary-matrix-4",
    post: "leetcode-shortest-path-in-binary-matrix",
    question: "여덟 방향 이동 격자에서 A*의 어림값으로 맞는 것은?",
    choices: [
      "맨해튼 거리 (남은 행 + 남은 열)",
      "유클리드 거리의 제곱",
      "남은 칸 전체의 개수",
      "체비셰프 거리 max(남은 행, 남은 열)",
    ],
    answer: 3,
    explanation:
      "한 걸음에 행과 열을 하나씩 동시에 줄일 수 있으니 남은 걸음은 적어도 max(남은 행, 남은 열)이고, 벽이 있으면 더 늘 뿐이라 실제를 넘지 않는다. 맨해튼 거리는 대각선 때문에 실제보다 커져 최단 길을 놓칠 수 있다. 글의 4 × 4 격자에서 맨해튼 A*는 5 대신 6을 냈다.",
    anchor: "도착점-쪽으로-기울이는-a",
  },
  {
    id: "leetcode-shortest-path-in-binary-matrix-5",
    post: "leetcode-shortest-path-in-binary-matrix",
    question: "출발 칸이 벽인지 검사하지 않은 BFS가 [[1]]에서 내는 값은?",
    choices: ["-1", "1", "0", "오류가 난다"],
    answer: 1,
    explanation:
      "출발 칸을 길이 1로 큐에 넣고 꺼내 보니 도착 칸이라 1을 돌려준다. 맞는 답은 출발 칸이 막혀 있으니 -1이다. 도착 칸이 벽인 경우는 BFS가 벽을 큐에 넣지 않아 저절로 걸러지지만 출발 칸은 직접 검사해야 한다.",
    anchor: "칸-수와-대각선에서-틀린다",
  },
];
