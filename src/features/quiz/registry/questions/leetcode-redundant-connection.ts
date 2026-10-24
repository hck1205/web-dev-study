import type { QuizQuestion } from "../types";

export const LEETCODE_REDUNDANT_CONNECTION: QuizQuestion[] = [
  {
    id: "leetcode-redundant-connection-1",
    post: "leetcode-redundant-connection",
    question: "간선을 목록 순서대로 union하다가 처음으로 양끝의 대표가 같은 간선을 바로 돌려줘도 \"가장 나중에 나온 답\"이 되는 이유는?",
    choices: [
      "유니온 파인드가 간선을 뒤에서부터 보기 때문에",
      "그 간선이 만든 고리의 나머지 간선은 모두 먼저 나왔고, 고리는 하나뿐이라 고리 위에서 가장 나중 간선이 그 간선이기 때문에",
      "고리 위 간선은 언제나 목록 끝에 몰려 있기 때문에",
      "경로 압축이 순서를 정렬해 주기 때문에",
    ],
    answer: 1,
    explanation:
      "그 간선을 넣기 전에는 고리가 없었으니, 고리의 다른 간선은 전부 그보다 앞에 있다. 나무에 간선 하나를 더한 그래프라 고리는 하나뿐이다. 그래서 처음 고리를 닫은 간선이 고리 위 간선 중 가장 나중 것이다.",
    anchor: "이을-때마다-이미-길이-있는지-찾는다",
  },
  {
    id: "leetcode-redundant-connection-2",
    post: "leetcode-redundant-connection",
    question: "글의 예시 [[1,2],[2,3],[1,4],[4,5],[3,5],[5,6]]에서 마지막 간선 [5,6]이 답이 될 수 없는 이유는?",
    choices: [
      "지우면 정점 6이 떨어져 나가 그래프가 이어져 있지 않기 때문에",
      "6이 가장 큰 번호라서",
      "[5,6]이 고리를 닫는 간선이라서",
      "지우면 간선 수가 n - 1보다 적어져서",
    ],
    answer: 0,
    explanation:
      "[5,6]은 고리 밖 간선이다. 지우면 간선은 n - 1개가 되지만 6이 끊어져 나무가 아니다. 지우면 나무가 되는 간선은 고리 위의 간선뿐이고, 그중 목록에서 가장 나중인 [3,5]가 답이다.",
    anchor: "나무에-더해진-간선-하나",
  },
  {
    id: "leetcode-redundant-connection-3",
    post: "leetcode-redundant-connection",
    question: "뒤에서부터 간선을 빼 보는 풀이와 이을 때마다 길을 찾는 풀이는 각각 어떤 입력에서 느려지나?",
    choices: [
      "둘 다 정점 번호가 뒤섞인 입력에서 느리다",
      "빼 보기는 고리가 늦게 닫힐 때, 길 찾기는 답이 앞쪽에 있을 때",
      "빼 보기는 답이 목록 앞쪽이고 뒤에 긴 꼬리가 있을 때, 길 찾기는 긴 줄을 먼저 깔고 마지막에 고리를 닫을 때",
      "둘 다 어떤 입력에서도 O(n)이다",
    ],
    answer: 2,
    explanation:
      "빼 보기는 뒤의 꼬리 간선을 뺄 때마다 그래프가 끊어져 BFS를 계속 다시 한다. 길 찾기는 간선마다 지금까지 깐 긴 줄을 끝까지 훑는다. n = 1,000에서 각각 50만 번 정도 방문했고, 서로의 나쁜 입력에서는 빨랐다.",
    anchor: "두-가지-나쁜-입력으로-재-보면",
  },
  {
    id: "leetcode-redundant-connection-4",
    post: "leetcode-redundant-connection",
    question: "차수가 1인 정점(잎)을 큐로 계속 지우면 끝에 남는 정점은?",
    choices: [
      "차수가 가장 큰 정점 하나",
      "아무것도 남지 않는다",
      "번호가 가장 작은 정점들",
      "고리 위의 정점들. 고리 안에서 이웃이 둘이라 차수가 2 밑으로 떨어지지 않는다",
    ],
    answer: 3,
    explanation:
      "잎을 지우면 이웃의 차수가 줄어 새 잎이 생기고, 나무 부분은 바깥부터 모두 깎인다. 고리 위의 정점은 고리 안에서만도 이웃이 둘이라 끝까지 남는다. 남은 정점 사이의 간선 중 목록에서 가장 나중 것이 답이다.",
    anchor: "잎을-깎아-내면-고리만-남는다",
  },
  {
    id: "leetcode-redundant-connection-5",
    post: "leetcode-redundant-connection",
    question: "무방향 그래프에서 DFS로 고리를 찾을 때 방금 지나온 부모 정점을 건너뛰지 않으면 어떻게 되나?",
    choices: [
      "고리를 영원히 찾지 못한다",
      "첫 간선부터 고리로 잘못 판정한다. 간선 a - b가 b의 이웃 목록에도 있어 a를 길 위에서 다시 만나기 때문이다",
      "답은 맞지만 느려진다",
      "재귀 깊이가 두 배가 된다",
    ],
    answer: 1,
    explanation:
      "무방향 간선은 양쪽 이웃 목록에 모두 들어 있다. a에서 b로 내려간 뒤 b의 이웃 a를 보면 a가 길 위에 있으니 고리처럼 보인다. 부모를 건너뛰어야 진짜 고리만 찾는다.",
    anchor: "0번-정점-같은-대표-고리-밖-간선",
  },
];
