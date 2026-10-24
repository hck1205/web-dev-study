import type { QuizQuestion } from "../types";

export const LEETCODE_SWIM_IN_RISING_WATER: QuizQuestion[] = [
  {
    id: "leetcode-swim-in-rising-water-1",
    post: "leetcode-swim-in-rising-water",
    question: "격자 [[0,5,6],[2,8,3],[4,7,1]]에서 (0,0)부터 (2,2)까지 갈 수 있는 가장 이른 시간은?",
    choices: ["1", "6", "7", "8"],
    answer: 1,
    explanation:
      "왼쪽 길 0→2→4→7→1은 7, 가운데를 지나면 8, 오른쪽 길 0→5→6→3→1은 6을 넘어야 한다. 도착 칸 높이가 1이어도 거기까지 가는 길의 가장 높은 칸이 잠겨야 하니 6이다.",
    anchor: "길에서-가장-높은-칸이-잠길-때까지",
  },
  {
    id: "leetcode-swim-in-rising-water-2",
    post: "leetcode-swim-in-rising-water",
    question: "물 높이 t로 이분 탐색을 할 수 있는 근거는?",
    choices: [
      "격자가 정렬되어 있어서",
      "높이가 모두 달라서",
      "BFS가 최단 거리를 주어서",
      "t에서 도착할 수 있으면 t + 1에서도 도착할 수 있어 답이 한 번만 바뀌어서",
    ],
    answer: 3,
    explanation:
      "물이 더 차면 잠긴 칸이 늘기만 하니 갈 수 있는 곳도 줄지 않는다. 그래서 '불가능 … 가능'으로 한 번만 바뀌는 단조로운 답이고, 가운데 t로 BFS를 해서 범위를 반씩 줄일 수 있다. 격자 자체는 정렬되어 있지 않다.",
    anchor: "물-높이를-하나씩-올려-본다",
  },
  {
    id: "leetcode-swim-in-rising-water-3",
    post: "leetcode-swim-in-rising-water",
    question: "이 문제의 다익스트라에서 힙에 넣을 때 방문 표시를 해도 맞는 이유는?",
    choices: [
      "격자 그래프에는 사이클이 없어서",
      "모든 칸 높이가 달라서 힙에 같은 값이 들어가지 않아서",
      "넣는 값이 max(꺼낸 값, 그 칸 높이)이고 칸 높이는 고정, 꺼낸 값은 커지기만 해서 처음 넣을 때가 가장 작아서",
      "도착 칸만 정확하면 되고 다른 칸 값은 틀려도 돼서",
    ],
    answer: 2,
    explanation:
      "비용이 간선이 아니라 칸에 붙어 있어서 어느 이웃에서 오든 그 칸 높이는 같다. 꺼내는 값은 단조롭게 커지니 처음 넣을 때의 값이 최소다. 간선 무게가 다른 Network Delay Time이나 높이 차가 비용인 Path With Minimum Effort에서는 이 논리가 깨진다.",
    anchor: "넣을-때-표시해도-되는-이유",
  },
  {
    id: "leetcode-swim-in-rising-water-4",
    post: "leetcode-swim-in-rising-water",
    question: "[[3,2],[0,1]]에서 힙을 [0, 0, 0]으로 시작하면 무엇이 나오나?",
    choices: ["0", "1", "2", "3"],
    answer: 1,
    explanation:
      "출발 칸 높이 3을 건너뛰고 아래 0, 오른쪽 1을 거쳐 도착 칸을 1로 꺼낸다. 출발 칸도 잠겨야 헤엄을 시작할 수 있으니 답은 3이고, 처음 넣는 값은 grid[0][0]이어야 한다.",
    anchor: "출발-칸과-더하기-습관에서-틀린다",
  },
  {
    id: "leetcode-swim-in-rising-water-5",
    post: "leetcode-swim-in-rising-water",
    question: "유니온 파인드 풀이가 정렬 없이 O(n² α)로 끝나는 이유는?",
    choices: [
      "높이가 0부터 n² - 1까지 서로 달라서 pos[높이] 배열로 높이 순서대로 칸을 바로 찾을 수 있어서",
      "유니온 파인드가 내부에서 정렬을 대신 해 줘서",
      "격자가 n ≤ 50이라 상수로 봐서",
      "출발 칸과 도착 칸만 합치면 되어서",
    ],
    answer: 0,
    explanation:
      "높이가 순열이라 높이 자체를 배열 인덱스로 쓸 수 있다. 높이 순서대로 칸을 열며 이미 열린 이웃과 합치고, 출발과 도착이 처음 이어지는 높이가 답이다. 높이가 겹치거나 범위가 크면 정렬이 필요해 O(n² log n)이 된다.",
    anchor: "물을-실제로-채우는-유니온-파인드",
  },
];
