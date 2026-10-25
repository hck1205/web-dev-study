import type { QuizQuestion } from "../types";

export const LEETCODE_NUMBER_OF_CONNECTED_COMPONENTS: QuizQuestion[] = [
  {
    id: "leetcode-number-of-connected-components-1",
    post: "leetcode-number-of-connected-components",
    question: "n = 7, edges = [[0,1],[1,2],[3,4],[5,4],[3,5]]에서 `n - edges.length`가 정답 3이 아니라 2를 내는 이유는?",
    choices: [
      "정점 6이 간선에 없어서 세지 못하기 때문에",
      "간선 [3,5]가 이미 같은 묶음인 3과 5를 이어 묶음 수를 줄이지 않는데도 하나를 빼기 때문에",
      "간선이 무방향이라 두 번 세기 때문에",
      "정점 번호가 0부터 시작해서",
    ],
    answer: 1,
    explanation:
      "간선이 묶음을 하나 줄이는 건 서로 다른 두 묶음을 이을 때뿐이다. 삼각형의 세 번째 간선은 고리를 닫을 뿐인데 이 식은 그것까지 뺀다. 그래서 n - E는 고리가 없는 숲에서만 맞는다.",
    anchor: "정점-수에서-간선-수를-빼면-된다는-착각",
  },
  {
    id: "leetcode-number-of-connected-components-2",
    post: "leetcode-number-of-connected-components",
    question: "유니온 파인드 풀이에서 count를 언제 하나 빼야 하나?",
    choices: [
      "간선을 하나 볼 때마다",
      "find를 호출할 때마다",
      "두 끝의 대표가 달라서 실제로 두 묶음을 합쳤을 때만",
      "두 끝의 대표가 같을 때만",
    ],
    answer: 2,
    explanation:
      "대표가 다르면 두 묶음이 하나가 되니 개수가 준다. 대표가 같으면 이미 같은 묶음이라 고리를 닫는 간선이고 개수는 그대로다. 간선마다 빼면 n - E 착각과 같아진다.",
    anchor: "합칠-때마다-하나씩-빼는-유니온-파인드",
  },
  {
    id: "leetcode-number-of-connected-components-3",
    post: "leetcode-number-of-connected-components",
    question: "Python에서 인접 리스트 재귀 DFS를 기본 설정으로 돌렸을 때, 문제 조건(n ≤ 2,000) 안에서 실패하는 입력은?",
    choices: [
      "간선이 하나도 없는 2,000개 정점",
      "정점 2,000개, 간선 5,000개의 무작위 그래프",
      "정점이 모두 따로인 그래프",
      "정점 1,000개 이상이 한 줄로 이어진 사슬",
    ],
    answer: 3,
    explanation:
      "사슬에서는 재귀가 정점 수만큼 깊어진다. Python 기본 재귀 한도가 1,000이라 990개 사슬은 버티고 1,000개 사슬에서 RecursionError가 났다. BFS나 유니온 파인드는 재귀가 없어 이 문제가 없다.",
    anchor: "인접-리스트에서-이웃만-따라간다",
  },
  {
    id: "leetcode-number-of-connected-components-4",
    post: "leetcode-number-of-connected-components",
    question: "Map에 간선에 나온 정점만 키로 넣고 그 키만 훑어 묶음을 세면 n = 6, edges = [[5,4],[4,3],[0,2]]의 결과는?",
    choices: ["2", "3", "6", "0"],
    answer: 0,
    explanation:
      "정점 1은 어떤 간선에도 없어서 Map의 키가 아니다. {3,4,5}와 {0,2} 두 묶음만 세어 2가 나온다. 정답은 혼자인 1까지 더해 3이다. 바깥 반복은 0부터 n - 1까지 모든 정점을 돌아야 한다.",
    anchor: "간선에-없는-정점-대표-대신-부모-단방향-간선",
  },
  {
    id: "leetcode-number-of-connected-components-5",
    post: "leetcode-number-of-connected-components",
    question: "간선이 하나씩 계속 추가되면서 그때마다 연결 요소 수를 물을 때 유니온 파인드가 BFS보다 나은 이유는?",
    choices: [
      "BFS는 무방향 그래프를 다루지 못해서",
      "BFS는 추가될 때마다 전체를 다시 훑어야 하지만, 유니온 파인드는 새 간선 하나를 union하고 count를 돌려주면 끝나서",
      "유니온 파인드는 간선을 지울 수도 있어서",
      "BFS는 재귀를 꼭 써야 해서",
    ],
    answer: 1,
    explanation:
      "유니온 파인드는 지금까지의 묶음 정보를 들고 있어서 새 간선마다 거의 상수 시간에 개수를 갱신한다. BFS는 상태를 들고 있지 않아 매번 O(V + E)로 다시 센다. 다만 유니온 파인드는 쪼개기를 못 해서 간선이 지워지면 다른 방법이 필요하다.",
    anchor: "연결-요소-문제가-바뀌면",
  },
];
