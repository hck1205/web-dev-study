import type { QuizQuestion } from "../types";

export const LEETCODE_BINARY_TREE_RIGHT_SIDE_VIEW: QuizQuestion[] = [
  {
    id: "leetcode-binary-tree-right-side-view-1",
    post: "leetcode-binary-tree-right-side-view",
    question: "트리 `[1, 2, 3, 4, 5, null, null, 6]`의 오른쪽에서 본 모습은?",
    choices: ["[1, 3]", "[1, 2, 4, 6]", "[1, 3, 5, 6]", "[1, 3, 5]"],
    answer: 2,
    explanation:
      "층은 [1], [2, 3], [4, 5], [6]이고 층마다 마지막을 고르면 [1, 3, 5, 6]이다. 오른쪽 가지 3이 둘째 층에서 끝나서 아래층에서는 왼쪽 가지의 5와 6이 보인다. [1, 3]은 오른쪽 포인터만 따라간 결과, [1, 2, 4, 6]은 왼쪽에서 본 모습이다.",
    anchor: "층마다-가장-오른쪽에-있는-노드",
  },
  {
    id: "leetcode-binary-tree-right-side-view-2",
    post: "leetcode-binary-tree-right-side-view",
    question: "BFS에서 층을 시작하기 전에 `size = queue.length`를 변수로 고정하는 이유는?",
    choices: [
      "루프 안에서 다음 층 자식이 큐에 들어오며 길이가 바뀌어, 조건에서 다시 읽으면 층 경계가 무너지기 때문이다",
      "queue.length를 읽는 비용이 O(n)이라서",
      "자바스크립트 배열은 길이가 음수가 될 수 있어서",
      "고정하지 않으면 큐에 null이 들어가서",
    ],
    answer: 0,
    explanation:
      "층을 시작하는 순간 큐에는 이번 층 노드만 있다. 꺼내는 동안 자식이 뒤에 쌓이니, 횟수를 미리 고정해야 이번 층만 처리하고 마지막 노드를 정확히 알 수 있다. 글의 실험에서 길이를 다시 읽는 코드는 [4]라는 엉뚱한 답을 냈다.",
    anchor: "층의-크기를-고정하고-마지막만-적는다",
  },
  {
    id: "leetcode-binary-tree-right-side-view-3",
    post: "leetcode-binary-tree-right-side-view",
    question: "오른쪽 자식을 먼저 방문하는 DFS에서 `depth === res.length`일 때만 값을 적으면 답이 되는 이유는?",
    choices: [
      "깊이가 깊을수록 값이 크기 때문이다",
      "오른쪽에 있는 노드일수록 먼저 방문되니, 어떤 깊이에 처음 닿은 노드가 그 층의 가장 오른쪽이다",
      "res.length는 항상 트리 높이와 같기 때문이다",
      "왼쪽 노드는 방문하지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "답 배열 길이가 깊이와 같다는 건 그 깊이를 처음 방문한다는 뜻이다. 오른쪽부터 내려가니 처음 닿는 노드가 가장 오른쪽이다. 왼쪽 노드도 방문은 한다. 그 아래 노드가 보일 수 있기 때문이다.",
    anchor: "오른쪽부터-내려가며-처음-닿은-깊이를-적는다",
  },
  {
    id: "leetcode-binary-tree-right-side-view-4",
    post: "leetcode-binary-tree-right-side-view",
    question: "꽉 찬 이진 트리에서 BFS와 DFS의 추가 공간을 비교하면?",
    choices: [
      "둘 다 O(1)이다",
      "BFS는 O(log n), DFS는 O(n)이다",
      "둘 다 늘 O(n)이다",
      "BFS는 가장 넓은 층만큼 O(n)에 가깝고, DFS는 높이만큼 O(log n)이다",
    ],
    answer: 3,
    explanation:
      "꽉 찬 트리의 마지막 층에는 노드의 절반 가까이가 있어 큐가 그만큼 커진다. DFS 호출 스택은 높이 log n만큼만 쌓인다. 일자 트리에서는 반대로 BFS가 유리하다.",
    anchor: "오른쪽부터-내려가며-처음-닿은-깊이를-적는다",
  },
  {
    id: "leetcode-binary-tree-right-side-view-5",
    post: "leetcode-binary-tree-right-side-view",
    question: "오른쪽 먼저 DFS에서 이미 적힌 깊이의 노드를 만나면 바로 `return`하도록 바꿨다. 예시 트리에서 결과는?",
    choices: [
      "[1, 3, 5, 6] 그대로다. 가려진 노드는 필요 없다",
      "[1, 3]. 2에서 돌아오는 바람에 그 아래 5와 6을 보지 못한다",
      "[1, 2, 4, 6]",
      "무한 재귀에 빠진다",
    ],
    answer: 1,
    explanation:
      "2는 둘째 층에서 3에 가려지지만, 그 아래 5와 6은 셋째, 넷째 층에서 보인다. 가려진 노드에서 돌아오면 그 자손을 놓친다. 그래서 적지 않을 때도 재귀는 계속해야 한다.",
    anchor: "층을-잘못-나누는-코드",
  },
];
