import type { QuizQuestion } from "../types";

export const LEETCODE_DIAMETER_OF_BINARY_TREE: QuizQuestion[] = [
  {
    id: "leetcode-diameter-of-binary-tree-1",
    post: "leetcode-diameter-of-binary-tree",
    question:
      "트리 `[1, 2, null, 4, 5, 6, null, null, 7]`에서 `height(root.left) + height(root.right)`만 돌려주면 무엇이 나오고, 정답과 왜 다른가?",
    choices: [
      "4가 나오고 정답이다",
      "3이 나온다. 가장 긴 길 6-4-2-5-7은 뿌리가 아니라 2에서 꺾이는데 뿌리에서 꺾이는 길만 쟀기 때문이다",
      "5가 나온다. 노드 수를 셌기 때문이다",
      "0이 나온다. 뿌리의 오른쪽이 비어 있어서 계산이 멈춘다",
    ],
    answer: 1,
    explanation:
      "뿌리 1은 왼쪽 자식만 있어서 뿌리에서 꺾이는 길은 3 + 0 = 3이다. 지름 4는 2에서 꺾인다. 그래서 모든 노드에서 꺾이는 길을 후보로 재야 한다.",
    anchor: "지름-계산이-하나씩-어긋나는-자리",
  },
  {
    id: "leetcode-diameter-of-binary-tree-2",
    post: "leetcode-diameter-of-binary-tree",
    question: "후위 순회 풀이에서 재귀 함수가 지름 후보가 아니라 높이를 부모에게 돌려주는 이유는?",
    choices: [
      "높이가 지름보다 항상 커서 최댓값 비교에 유리하다",
      "자바스크립트 함수는 값을 하나만 돌려줄 수 있어서다",
      "부모가 이어 붙일 수 있는 건 한쪽으로만 내려가는 길이다. 양쪽으로 꺾인 길에 부모를 붙이면 세 갈래가 되어 길이 아니다",
      "높이를 돌려줘야 꼬리 재귀 최적화가 된다",
    ],
    answer: 2,
    explanation:
      "꺾인 길은 그 노드에서 완성되고 위로 이어질 수 없다. 부모에게는 한쪽 가지의 깊이, 즉 높이만 의미가 있다. 그래서 반환값은 높이로, 답은 바깥 변수로 나눈다.",
    anchor: "높이를-올려-보내며-지름은-옆에-적어-둔다",
  },
  {
    id: "leetcode-diameter-of-binary-tree-3",
    post: "leetcode-diameter-of-binary-tree",
    question: "노드마다 `height`를 새로 불러 왼쪽과 오른쪽 높이를 더하는 풀이가 한쪽으로 늘어선 트리에서 O(n²)이 되는 이유는?",
    choices: [
      "노드 하나의 높이가 그 노드의 조상 수만큼 반복해서 계산되고, 일자 트리에서는 조상이 O(n)개라서",
      "Math.max가 O(n)이라서",
      "일자 트리에서는 빈 자리가 n²개 생겨서",
      "BFS를 노드마다 돌리기 때문에",
    ],
    answer: 0,
    explanation:
      "뿌리에서 한 번, 자식에서 또 한 번 높이를 재니 깊은 노드일수록 여러 번 다시 계산된다. 균형 트리면 조상이 O(log n)개라 O(n log n)이지만 일자 트리에서는 O(n²)이다. 노드마다 BFS를 돌리는 건 첫 번째 풀이다.",
    anchor: "노드마다-왼쪽-높이와-오른쪽-높이를-다시-잰다",
  },
  {
    id: "leetcode-diameter-of-binary-tree-4",
    post: "leetcode-diameter-of-binary-tree",
    question: "BFS 두 번 풀이가 성립하는 전제로 맞는 것은?",
    choices: [
      "트리가 균형 잡혀 있어야 한다",
      "첫 BFS를 반드시 뿌리에서 시작해야 한다",
      "노드 값이 모두 양수여야 한다",
      "그래프가 트리이고 간선 가중치가 음수가 아니어야 한다. 그러면 아무 노드에서 가장 먼 노드가 어떤 지름의 끝점이다",
    ],
    answer: 3,
    explanation:
      "아무 노드에서 시작해도 가장 먼 노드는 지름의 한쪽 끝이라 시작점은 상관없다. 이 성질은 사이클이 없고 가중치가 음수가 아닐 때만 성립한다. 노드 값은 거리 계산에 쓰이지 않는다.",
    anchor: "아무-데서나-가장-먼-곳-거기서-다시-가장-먼-곳",
  },
  {
    id: "leetcode-diameter-of-binary-tree-5",
    post: "leetcode-diameter-of-binary-tree",
    question: "Python에서 `best`를 클래스 변수로 두고 `self.best = max(...)`로 갱신했다. 같은 `Solution` 객체로 예시 트리를 푼 다음 `[1, 2]`를 풀면?",
    choices: [
      "1이 나온다. 매번 새로 계산하니 문제없다",
      "4가 나온다. 앞 호출에서 커진 best가 객체에 남아 있기 때문이다",
      "UnboundLocalError가 난다",
      "0이 나온다. 클래스 변수는 호출마다 초기화된다",
    ],
    answer: 1,
    explanation:
      "self.best에 대입하면 인스턴스 속성이 생기고, 같은 객체를 다시 쓰면 그 값이 남는다. 그래서 두 번째 호출이 앞의 4보다 작은 1을 넘지 못한다. 상태는 함수 호출 안의 지역 변수나 nonlocal로 가둔다.",
    anchor: "지름-계산이-하나씩-어긋나는-자리",
  },
];
