import type { QuizQuestion } from "../types";

export const LEETCODE_ROTTING_ORANGES: QuizQuestion[] = [
  {
    id: "leetcode-rotting-oranges-1",
    post: "leetcode-rotting-oranges",
    question: "매분 상자를 훑으며 옆에 곰팡이 귤이 있는 귤을 그 자리에서 바로 2로 바꾸면, 글의 3 × 4 예시(정답 6)에서 몇이 나오나?",
    choices: [
      "2. 방금 상한 귤이 같은 훑기 안에서 오른쪽과 아래 귤을 또 상하게 해서",
      "6. 바꾸는 시점은 답에 영향이 없어서",
      "7. 마지막에 1분을 더 세서",
      "-1. 빈칸 때문에 번지지 못해서",
    ],
    answer: 0,
    explanation:
      "왼쪽 위부터 훑으니 방금 바꾼 귤이 같은 훑기에서 다음 칸을 또 상하게 해서 곰팡이가 1분에 여러 칸을 달린다. 첫 훑기에 일곱 개, 둘째 훑기에 마지막 하나가 상해 2가 나온다. 이번 1분에 바뀔 귤을 모았다가 한꺼번에 바꿔야 한다.",
    anchor: "매분-상자-전체를-다시-훑는다",
  },
  {
    id: "leetcode-rotting-oranges-2",
    post: "leetcode-rotting-oranges",
    question: "처음 곰팡이 귤을 모두 한 큐에 넣고 BFS를 시작해도 귤마다 가장 가까운 곰팡이까지의 거리가 맞는 이유는?",
    choices: [
      "곰팡이 귤이 많을수록 BFS가 빨라져서",
      "큐가 곰팡이 귤을 번호순으로 정렬해 주어서",
      "모든 곰팡이 귤과 길이 0으로 이어진 가짜 출발점 하나에서 BFS를 한 것과 같아서",
      "DFS와 결과가 항상 같아서",
    ],
    answer: 2,
    explanation:
      "가짜 출발점에서 평범한 BFS를 하면 첫 겹이 처음 곰팡이 귤 전부가 된다. 그래서 다중 출발 BFS는 가장 가까운 곰팡이 귤까지의 최단 거리를 모든 칸에 한 번에 준다. 귤마다 따로 BFS를 하던 일을 한 번으로 합친 것이다.",
    anchor: "곰팡이-귤을-모두-한-큐에-넣고-출발한다",
  },
  {
    id: "leetcode-rotting-oranges-3",
    post: "leetcode-rotting-oranges",
    question: "겹으로 나누는 BFS에서 반복 조건을 `while (queue.length > 0)`만 두면 [[2]]의 결과는?",
    choices: ["0", "-1", "무한 루프", "1"],
    answer: 3,
    explanation:
      "멀쩡한 귤이 없는데도 큐에 곰팡이 귤이 있어 반복이 한 번 돌고 1분이 더해진다. 같은 이유로 예시에서도 6 대신 7이 나온다. 반복 조건에 fresh > 0을 함께 넣으면 정확히 멈춘다.",
    anchor: "1분을-더-세거나-멀쩡한-귤을-잊거나",
  },
  {
    id: "leetcode-rotting-oranges-4",
    post: "leetcode-rotting-oranges",
    question: "곰팡이 귤에서 DFS로 도착 시각을 적고 더 빠른 시각을 찾으면 덮어쓰는 풀이가 꽉 찬 50 × 50 상자에서 느린 이유는?",
    choices: [
      "DFS가 먼저 찾는 길이 짧은 길이 아니라서, 더 짧은 길을 찾을 때마다 그 뒤를 다시 걷기 때문에",
      "재귀 호출 자체가 큐보다 수천 배 느려서",
      "빈칸을 건너뛰지 못해서",
      "곰팡이 귤이 하나뿐이라 출발점이 부족해서",
    ],
    answer: 0,
    explanation:
      "DFS는 한 방향으로 멀리 돌아간 시각을 먼저 적고, 나중에 더 짧은 길이 닿으면 덮어쓰고 그 뒤를 전부 다시 탐색한다. 2,500칸에서 호출이 601만 번이었다. BFS는 처음 닿은 시각이 곧 최단이라 칸마다 한 번이면 된다.",
    anchor: "dfs로-시각을-덮어쓰면-같은-칸을-수천-번-본다",
  },
  {
    id: "leetcode-rotting-oranges-5",
    post: "leetcode-rotting-oranges",
    question: "칸마다 상한 시각을 적는 BFS에서 `last = time[id]`로 덮어쓰기만 해도 마지막 값이 최댓값인 이유는?",
    choices: [
      "time 배열을 마지막에 정렬하기 때문에",
      "BFS 큐에는 시각 t인 칸 뒤에 t + 1인 칸이 붙어서 시각이 줄지 않는 순서로 들어가기 때문에",
      "곰팡이 귤이 하나뿐일 때만 성립하는 우연이라서",
      "격자를 오른쪽 아래로만 훑기 때문에",
    ],
    answer: 1,
    explanation:
      "BFS는 가까운 칸부터 큐에 넣으니 큐 안의 시각이 줄어드는 일이 없다. 그래서 마지막으로 적은 시각이 가장 큰 시각이다. 곰팡이 귤이 여럿이어도 모두 시각 0으로 시작하니 같다.",
    anchor: "겹을-나누지-않고-시각을-칸에-적는다",
  },
];
