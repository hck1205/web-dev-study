import type { QuizQuestion } from "../types";

export const LEETCODE_BINARY_TREE_MAXIMUM_PATH_SUM: QuizQuestion[] = [
  {
    id: "leetcode-binary-tree-maximum-path-sum-1",
    post: "leetcode-binary-tree-maximum-path-sum",
    question:
      "`gain(node)`가 부모에게 `node.val + left + right`(양쪽 이득을 모두 더한 값)를 돌려주도록 바꿨다. 트리 `[1, 2, 3, 4, 5]`에서 무엇이 나오나?",
    choices: [
      "11. 4 → 2 → 5가 답이라 그대로 맞는다",
      "10. 4 → 2 → 1 → 3이 답이 된다",
      "6. 뿌리에서 꺾이는 경로만 본다",
      "15. 2를 두 번 지나는 불가능한 경로까지 더해진다",
    ],
    answer: 3,
    explanation:
      "2가 양쪽 4와 5를 다 더한 11을 부모 1에게 넘기면, 1은 그 값에 3을 붙여 트리 전체 합 15를 만든다. 이 경로는 2를 두 번 지나야 해서 존재할 수 없다. 꺾이는 경로는 기록에만 쓰고, 부모에게는 한쪽 줄만 돌려줘야 정답 11이 나온다.",
    anchor: "한-번의-후위-순회로-두-값을-함께-다루기",
  },
  {
    id: "leetcode-binary-tree-maximum-path-sum-2",
    post: "leetcode-binary-tree-maximum-path-sum",
    question: "`let best = 0`으로 시작한 풀이가 트리 `[-3, -1, -2]`에서 내는 값과 그 이유는?",
    choices: [
      "-1. 가장 큰 음수 노드 하나가 답이라 맞는다",
      "0. 노드를 하나도 고르지 않은 경로가 답처럼 뽑힌다",
      "-6. 세 노드를 모두 더한다",
      "-3. 뿌리만 본다",
    ],
    answer: 1,
    explanation:
      "모든 꺾이는 합이 음수라 처음 값 0을 한 번도 넘지 못하고 0이 그대로 나온다. 경로에는 노드가 적어도 하나 있어야 하니 정답은 -1이다. 답은 -Infinity나 Integer.MIN_VALUE, 뿌리 값에서 시작해야 한다.",
    anchor: "그럴듯하게-틀리는-네-가지",
  },
  {
    id: "leetcode-binary-tree-maximum-path-sum-3",
    post: "leetcode-binary-tree-maximum-path-sum",
    question: "자식 이득을 `Math.max(0, gain(child))`로 0과 비교해 자르는 이유는?",
    choices: [
      "이득이 음수인 쪽은 경로에 넣지 않는 것이 언제나 손해가 아니어서, 그쪽으로 내려가지 않는 선택을 나타낸다",
      "값이 음수면 정수 오버플로가 나기 때문이다",
      "빈 자식이 음수를 돌려주기 때문이다",
      "음수 노드는 경로에 들어갈 수 없다는 규칙 때문이다",
    ],
    answer: 0,
    explanation:
      "음수 이득을 더하면 합이 줄어들 뿐이고 경로가 그쪽으로 꼭 갈 필요가 없으니, 0으로 잘라 그쪽은 가지 않는다. 음수 노드도 경로에 들어갈 수 있다. 예시 트리의 답 35는 뿌리 -10을 피했지만, 음수 노드가 꼭대기인 경로가 답이 되는 트리도 있다.",
    anchor: "꼭대기를-정하고-양쪽으로-내려가-보기",
  },
  {
    id: "leetcode-binary-tree-maximum-path-sum-4",
    post: "leetcode-binary-tree-maximum-path-sum",
    question:
      "예시 트리 `[-10, 9, 20, -6, null, 15, -7, null, null, null, null, 4]`에서 `best` 대신 `return gain(root)`의 값을 답으로 내면?",
    choices: ["35", "34", "25", "41"],
    answer: 2,
    explanation:
      "gain(root)는 뿌리에서 아래로 한 줄만 내려가는 최대 합이라 -10 + 20 + 15 = 25다. 문제의 경로는 뿌리를 지나지 않아도 되고 꺾여도 되므로, 정답은 노드마다 기록해 둔 best의 35(15 → 20)다. 34는 뿌리에서 꺾이는 9 → -10 → 20 → 15다.",
    anchor: "한-번의-후위-순회로-두-값을-함께-다루기",
  },
  {
    id: "leetcode-binary-tree-maximum-path-sum-5",
    post: "leetcode-binary-tree-maximum-path-sum",
    question: "경로가 가장 높은 노드(꼭대기)가 아닌 곳에서는 꺾일 수 없는 이유는?",
    choices: [
      "이진 트리는 노드마다 자식이 하나뿐이라서",
      "부모에서 내려온 경로가 두 자식으로 갈라지려면 그 노드를 두 번 지나야 해서",
      "꺾이면 합이 항상 줄어들어서",
      "경로는 반드시 잎에서 끝나야 해서",
    ],
    answer: 1,
    explanation:
      "꼭대기가 아닌 노드는 부모 쪽 간선을 이미 경로에 쓰고 있다. 거기서 두 자식으로 모두 가려면 그 노드를 들렀다 다시 지나야 하는데, 경로는 같은 노드를 두 번 지날 수 없다. 그래서 경로마다 꺾이는 곳은 꼭대기 하나뿐이고, 꼭대기 기준으로 세면 후보가 n개로 줄어든다.",
    anchor: "길은-꼭대기에서-한-번만-꺾인다",
  },
];
