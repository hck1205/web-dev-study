import type { QuizQuestion } from "../types";

export const LEETCODE_BINARY_TREE_LEVEL_ORDER_TRAVERSAL: QuizQuestion[] = [
  {
    id: "leetcode-binary-tree-level-order-traversal-1",
    post: "leetcode-binary-tree-level-order-traversal",
    question:
      "층 순회에서 `size`를 고정하지 않고 `for (let k = 0; k < queue.length; k++) { const node = queue.shift(); ... }`로 썼다. 트리 `[8, 4, 12, 2, 6, null, 14, null, null, 5]`의 결과는?",
    choices: [
      "[[8], [4, 12], [2, 6, 14], [5]]로 정답이 나온다",
      "[[8, 4, 12], [2, 6], [14], [5]]처럼 다음 층 노드가 앞 층에 섞인다",
      "[[8], [4], [12], [2], [6], [14], [5]]처럼 노드마다 한 층이 된다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "8을 꺼내면 길이가 0이 됐다가 4, 12가 들어와 2가 되고, k = 1이 여전히 길이보다 작아 4까지 첫 층에 들어간다. 꺼내며 줄고 넣으며 늘어나는 길이를 매번 다시 읽어서 층 경계가 무너진 것이다. 큐 길이는 바퀴를 시작할 때 한 번만 읽어 고정해야 한다.",
    anchor: "층-경계가-무너지는-실수들",
  },
  {
    id: "leetcode-binary-tree-level-order-traversal-2",
    post: "leetcode-binary-tree-level-order-traversal",
    question: "BFS에서 한 층을 꺼내기 직전의 큐 길이가 정확히 그 층의 노드 수가 되는 이유는?",
    choices: [
      "큐가 노드를 값 순서로 정렬해 두기 때문이다",
      "이진 트리는 층마다 노드 수가 두 배로 늘기 때문이다",
      "큐에 들어간 노드는 다시 나오지 않기 때문이다",
      "위층은 이미 다 꺼냈고, 이번 층은 아직 하나도 꺼내지 않아 그 자식(다음 층)도 아직 안 들어왔기 때문이다",
    ],
    answer: 3,
    explanation:
      "자식은 부모를 꺼낼 때 큐에 들어간다. 이번 층의 첫 노드를 꺼내기 직전에는 다음 층 노드가 하나도 들어오지 않았고 위층은 다 빠졌으니, 큐에는 이번 층만 남아 있다. 층마다 노드가 두 배가 되는 건 꽉 찬 트리에서만 맞는 이야기다.",
    anchor: "큐-길이를-먼저-세어-두고-그만큼만-꺼낸다",
  },
  {
    id: "leetcode-binary-tree-level-order-traversal-3",
    post: "leetcode-binary-tree-level-order-traversal",
    question:
      "스택에 `[노드, 깊이]`를 넣는 반복 DFS로 층 순회를 하면서 자식을 왼쪽, 오른쪽 순서로 push했다. 트리 `[8, 4, 12, 2, 6, null, 14, null, null, 5]`의 결과는?",
    choices: [
      "[[8], [12, 4], [14, 6, 2], [5]]처럼 층 안의 순서가 뒤집힌다",
      "[[8], [4, 12], [2, 6, 14], [5]]로 정답이 나온다",
      "[[5], [2, 6, 14], [4, 12], [8]]처럼 층 순서가 뒤집힌다",
      "깊이가 틀려서 층이 섞인다",
    ],
    answer: 0,
    explanation:
      "스택은 나중에 넣은 것이 먼저 나와서, 왼쪽을 먼저 넣으면 오른쪽 자식이 먼저 방문된다. 깊이는 정확히 따라가니 층 묶음은 맞지만, 각 층 안에 오른쪽 노드부터 쌓인다. 왼쪽부터 방문하려면 오른쪽을 먼저 넣어야 한다.",
    anchor: "재귀-없이-스택으로-같은-일을-하기",
  },
  {
    id: "leetcode-binary-tree-level-order-traversal-4",
    post: "leetcode-binary-tree-level-order-traversal",
    question: "노드가 아주 많고 높이는 낮은, 넓고 얕은 트리에서 추가 메모리를 덜 쓰는 쪽은?",
    choices: [
      "BFS. 큐는 항상 O(1) 공간만 쓴다",
      "둘 다 O(n)이라 차이가 없다",
      "깊이를 들고 내려가는 DFS. 공간이 트리 높이 h에 비례하기 때문이다",
      "층마다 다시 내려가는 풀이. 결과 배열 외에는 아무것도 저장하지 않는다",
    ],
    answer: 2,
    explanation:
      "BFS의 큐는 가장 넓은 층의 노드 수 w만큼 커지고, DFS는 지금 내려간 길의 길이인 높이 h만큼만 호출 스택을 쓴다. 넓고 얕은 트리는 w가 크고 h가 작으니 DFS가 유리하다. 반대로 좁고 깊은 트리에서는 BFS가 유리하다.",
    anchor: "깊이를-들고-내려가며-칸에-꽂아-넣기",
  },
  {
    id: "leetcode-binary-tree-level-order-traversal-5",
    post: "leetcode-binary-tree-level-order-traversal",
    question:
      "d = 0부터 높이까지 늘려 가며 매번 뿌리에서 d번 내려가 그 층 노드를 모으는 풀이가 있다. 한쪽으로 기운 일자 트리에서 시간 복잡도는?",
    choices: ["O(n)", "O(n²)", "O(n log n)", "O(h)"],
    answer: 1,
    explanation:
      "d번째 층을 모을 때마다 그 위의 모든 층을 다시 지나가서 전체가 O(n·h)다. 일자 트리는 높이가 n이라 1 + 2 + … + n으로 O(n²)이 된다. 균형 트리라면 h가 log n이라 O(n log n)이지만, 큐로 다음 층을 줄 세워 두면 어떤 모양이든 O(n)이다.",
    anchor: "층마다-뿌리부터-다시-내려가기",
  },
];
