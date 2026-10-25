import type { QuizQuestion } from "../types";

export const LEETCODE_VALIDATE_BINARY_SEARCH_TREE: QuizQuestion[] = [
  {
    id: "leetcode-validate-binary-search-tree-1",
    post: "leetcode-validate-binary-search-tree",
    question:
      "노드마다 왼쪽 자식이 작고 오른쪽 자식이 큰지만 확인하는 코드에 `[8, 4, 12, 2, 9, 10, 14]`를 넣으면 무엇이 나오고, 왜 그런가?",
    choices: [
      "true가 나온다. 9는 부모 4보다 커서 통과하지만, 뿌리 8의 왼쪽 가지 안이라 8보다 작아야 한다는 조건은 확인하지 않는다",
      "false가 나온다. 9가 4보다 커서 걸린다",
      "false가 나온다. 12가 10보다 커서 걸린다",
      "오류가 난다. 잎에서 자식을 읽기 때문이다",
    ],
    answer: 0,
    explanation:
      "부모-자식 비교는 모두 통과한다. 하지만 BST 조건은 조상과 모든 자손 사이에 걸리고, 9의 위쪽 끝 8은 할아버지에게서 물려받은 값이라 부모만 봐서는 알 수 없다. 그래서 범위를 내려보내거나 중위 순회로 확인해야 한다.",
    anchor: "바로-아래-자식만-비교하면-놓치는-것",
  },
  {
    id: "leetcode-validate-binary-search-tree-2",
    post: "leetcode-validate-binary-search-tree",
    question: "범위 풀이에서 노드 X의 오른쪽 자식으로 내려갈 때 넘기는 범위는? (X의 범위는 `(low, high)`)",
    choices: [
      "(low, X.val)",
      "(-∞, X.val)",
      "(X.val, ∞)",
      "(X.val, high)",
    ],
    answer: 3,
    explanation:
      "오른쪽 가지는 X보다 커야 하니 아래쪽 끝이 X.val로 바뀐다. 위쪽 끝 high는 조상이 정한 값이라 그대로 물려받는다. high를 ∞로 풀어 버리면 조상의 제한을 잃어 처음의 실수와 같아진다.",
    anchor: "위에서-허용-범위를-좁혀-내려보낸다",
  },
  {
    id: "leetcode-validate-binary-search-tree-3",
    post: "leetcode-validate-binary-search-tree",
    question: "Java에서 경계를 `Integer.MIN_VALUE`, `Integer.MAX_VALUE`로 두고 엄격하게 비교했다. 노드 하나짜리 `[2147483647]`의 결과는?",
    choices: [
      "true. 노드 하나는 항상 BST다",
      "false. 2147483647 >= Integer.MAX_VALUE가 참이라 범위 밖으로 판정한다",
      "오버플로로 음수가 되어 true",
      "컴파일 오류",
    ],
    answer: 1,
    explanation:
      "노드 값이 int 끝값 그 자체일 수 있어서 int 끝값은 경계로 쓸 수 없다. 정답은 true여야 하는데 false가 나온다. 경계를 long으로 넓히거나 null을 제한 없음으로 쓴다.",
    anchor: "경계값과-중복에서-무너지는-코드",
  },
  {
    id: "leetcode-validate-binary-search-tree-4",
    post: "leetcode-validate-binary-search-tree",
    question: "스택 중위 순회로 `[8, 4, 12, 2, 9, 10, 14]`를 검사할 때 false를 내는 순간은?",
    choices: [
      "9를 꺼낼 때. 9가 부모 4보다 크기 때문이다",
      "12를 꺼낼 때. 오른쪽 가지에 처음 들어갈 때다",
      "8을 꺼낼 때. 직전 값 9보다 작아 오름차순이 깨진다",
      "끝까지 다 돌고 나서 배열을 비교할 때",
    ],
    answer: 2,
    explanation:
      "중위 순서는 2, 4, 9, 8, …이다. 9까지는 직전 값보다 커서 통과하고, 8을 꺼낼 때 9보다 작아 바로 false를 돌려준다. 12, 10, 14는 보지도 않고 끝난다.",
    anchor: "스택으로-중위-순회를-멈출-수-있게-한다",
  },
  {
    id: "leetcode-validate-binary-search-tree-5",
    post: "leetcode-validate-binary-search-tree",
    question: "노드마다 왼쪽 가지 최댓값과 오른쪽 가지 최솟값을 새로 구하는 풀이가 일자 트리에서 O(n²)인 이유는?",
    choices: [
      "Math.max가 인자 수만큼 시간이 들어서",
      "노드마다 자기 아래 가지 전체를 다시 훑어, 깊은 노드는 조상 수만큼 반복해서 읽히기 때문에",
      "중위 순회를 두 번 하기 때문에",
      "빈 가지에서 Infinity를 돌려주기 때문에",
    ],
    answer: 1,
    explanation:
      "뿌리에서 왼쪽 가지 전체, 그 자식에서 또 그 아래 전체를 훑으니 같은 노드를 여러 번 읽는다. 일자 트리에서는 그 합이 n + (n-1) + … 로 O(n²)이다. 후위 순회로 최솟값과 최댓값을 한 번만 올리면 O(n)이 된다.",
    anchor: "노드마다-왼쪽-최댓값과-오른쪽-최솟값을-구한다",
  },
];
