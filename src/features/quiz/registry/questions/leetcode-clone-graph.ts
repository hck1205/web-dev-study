import type { QuizQuestion } from "../types";

export const LEETCODE_CLONE_GRAPH: QuizQuestion[] = [
  {
    id: "leetcode-clone-graph-1",
    post: "leetcode-clone-graph",
    question: "장부 없이 이웃마다 같은 함수로 복사하는 재귀가 노드 두 개짜리 [[2],[1]]에서도 멈추지 않는 이유는?",
    choices: [
      "무방향 그래프라 1과 2가 서로를 가리켜 간선 하나가 이미 사이클이라서",
      "노드 수가 100을 넘어서",
      "이웃 목록이 비어 있어서",
      "val이 겹쳐서",
    ],
    answer: 0,
    explanation:
      "1을 복사하려면 2를, 2를 복사하려면 다시 1을 복사해야 해서 끝없이 들어간다. 트리는 자식이 부모를 가리키지 않아 이 문제가 없다. 이미 만든 복사본을 기억하는 장부가 이 고리를 끊는다.",
    anchor: "이웃을-따라-그대로-복사하면-끝나지-않는다",
  },
  {
    id: "leetcode-clone-graph-2",
    post: "leetcode-clone-graph",
    question: "DFS 풀이에서 copies.set(n, c)를 이웃을 모두 복사한 뒤로 옮기면 어떻게 되나?",
    choices: [
      "결과는 같고 조금 느려진다",
      "이웃 순서만 바뀐다",
      "노드를 다시 만날 때 장부가 비어 있어 무한 재귀에 빠진다",
      "복사본 일부가 원본 노드가 된다",
    ],
    answer: 2,
    explanation:
      "이웃을 따라가다 이 노드로 돌아왔을 때 장부에서 찾아야 재귀가 멈춘다. 적기 전에 이웃으로 들어가면 장부가 비어 있어 메모 없는 재귀와 같아진다. 실제로 노드 두 개짜리에서 RangeError가 났다.",
    anchor: "원본에서-복사본으로-가는-장부",
  },
  {
    id: "leetcode-clone-graph-3",
    post: "leetcode-clone-graph",
    question: "BFS에서 \"처음 보는 이웃일 때만\" 복사본 이웃 목록에 넣으면 사각형 [[2,4],[1,3],[2,4],[1,3]]의 결과는?",
    choices: [
      "[[2,4],[1,3],[2,4],[1,3]]",
      "[[2,4],[1,3],[],[1]]",
      "[[2,4],[3],[],[]]",
      "[[],[],[],[]]",
    ],
    answer: 2,
    explanation:
      "처음 발견할 때 지나간 간선만 이어져서 BFS 나무 모양만 남는다. 1′는 2′와 4′를 알고 2′는 3′만 알며, 3′와 4′는 이웃이 없다. 잇기는 장부에 있든 없든 이웃마다 매번 해야 한다.",
    anchor: "잇기를-빼먹거나-원본을-돌려주거나",
  },
  {
    id: "leetcode-clone-graph-4",
    post: "leetcode-clone-graph",
    question: "길이 101짜리 배열을 장부로 쓸 수 있는 이유는?",
    choices: [
      "배열이 해시맵보다 항상 빠르기 때문에",
      "val이 1부터 100까지 겹치지 않아 val을 칸 번호로 쓸 수 있어서",
      "그래프가 무방향이라서",
      "간선이 100개 이하라서",
    ],
    answer: 1,
    explanation:
      "이 문제는 값이 노드마다 다르고 범위가 1에서 100이라 val이 곧 노드 번호다. 값이 겹치거나 범위가 크면 배열 장부가 성립하지 않아 노드 객체를 키로 쓰는 해시맵으로 돌아가야 한다. 면접에서는 조건에 기댄 최적화라고 밝혀야 한다.",
    anchor: "val이-번호라면-배열이-장부다",
  },
  {
    id: "leetcode-clone-graph-5",
    post: "leetcode-clone-graph",
    question: "JavaScript의 structuredClone으로 사각형 그래프를 복사하면 어떻게 되나?",
    choices: [
      "사이클 때문에 TypeError가 난다",
      "무한 루프에 빠진다",
      "원본 노드를 그대로 돌려준다",
      "모양은 같게 복사되지만 노드가 Node 클래스가 아닌 평범한 Object가 된다",
    ],
    answer: 3,
    explanation:
      "structuredClone은 사이클을 처리하지만 클래스의 프로토타입은 옮기지 않아 instanceof Node가 false다. 사이클에서 TypeError가 나는 쪽은 JSON.stringify다. Python의 deepcopy는 클래스는 지키지만 재귀라 긴 경로 그래프에서 RecursionError가 났다.",
    anchor: "언어가-주는-깊은-복사는-어떤가",
  },
];
