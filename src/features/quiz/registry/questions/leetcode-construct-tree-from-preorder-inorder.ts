import type { QuizQuestion } from "../types";

export const LEETCODE_CONSTRUCT_TREE_FROM_PREORDER_INORDER: QuizQuestion[] = [
  {
    id: "leetcode-construct-tree-from-preorder-inorder-1",
    post: "leetcode-construct-tree-from-preorder-inorder",
    question:
      "preorder `[1, 2, 4, 5, 3, 6]`, inorder `[4, 2, 5, 1, 3, 6]`에서 뿌리 1의 왼쪽 가지에 해당하는 전위 조각은?",
    choices: [
      "[2, 4]",
      "[4, 2, 5]",
      "[2, 4, 5]",
      "[2, 4, 5, 3]",
    ],
    answer: 2,
    explanation:
      "중위에서 1의 위치가 3이라 왼쪽 가지는 노드 3개다. 전위에서는 뿌리 다음 3개 [2, 4, 5]가 왼쪽 가지다. [4, 2, 5]는 같은 가지의 중위 조각이다.",
    anchor: "두-줄-세우기로-트리-하나를-되살린다",
  },
  {
    id: "leetcode-construct-tree-from-preorder-inorder-2",
    post: "leetcode-construct-tree-from-preorder-inorder",
    question: "배열을 잘라 넘기고 `indexOf`로 뿌리를 찾는 풀이가 일자 트리에서 O(n²)이 되는 이유는?",
    choices: [
      "재귀 호출이 노드마다 두 번씩이라서",
      "호출마다 그 가지 크기만큼 indexOf와 slice 비용이 들고, 일자 트리에서는 가지 크기가 n, n-1, …로 천천히 줄어 합이 O(n²)이라서",
      "해시맵 충돌이 많아서",
      "전위 배열을 뒤에서부터 읽어서",
    ],
    answer: 1,
    explanation:
      "균형 트리라면 층마다 비용 합이 O(n)이고 층이 log n개라 O(n log n)이다. 일자 트리는 가지가 하나씩만 줄어 비용이 등차수열로 쌓인다. 인덱스만 넘기고 위치를 해시맵으로 찾으면 O(n)이 된다.",
    anchor: "배열을-잘라서-넘긴다",
  },
  {
    id: "leetcode-construct-tree-from-preorder-inorder-3",
    post: "leetcode-construct-tree-from-preorder-inorder",
    question: "전역 전위 포인터 `pre++`를 쓰는 해시맵 풀이에서 `root.right`를 `root.left`보다 먼저 만들면?",
    choices: [
      "좌우가 뒤집힌 거울 트리가 나온다",
      "결과는 같고 순서만 다르다",
      "오른쪽 가지가 전위 배열에서 왼쪽 가지 몫의 값을 가져가 범위가 엉키고, 예시에서는 호출 스택이 넘쳤다",
      "빈 트리가 나온다",
    ],
    answer: 2,
    explanation:
      "재귀가 노드를 만드는 순서가 전위 순서(나 → 왼쪽 → 오른쪽)와 맞아야 포인터가 맞는 값을 가리킨다. 순서를 바꾸면 1의 오른쪽 범위에 2가 들어가는 식으로 어긋나, 실제로 RangeError가 났다. 거울 트리가 저절로 나오지는 않는다.",
    anchor: "복원-코드가-어긋나는-자리",
  },
  {
    id: "leetcode-construct-tree-from-preorder-inorder-4",
    post: "leetcode-construct-tree-from-preorder-inorder",
    question: "전위와 후위 순회 결과만으로는 트리가 하나로 정해지지 않는 이유는?",
    choices: [
      "자식이 하나뿐인 노드에서 그 자식이 왼쪽인지 오른쪽인지 두 순회 모두 같은 결과를 내기 때문이다",
      "후위 순회는 뿌리를 포함하지 않기 때문이다",
      "두 순회의 길이가 다르기 때문이다",
      "값이 정렬되어 있지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "전위 [1, 2], 후위 [2, 1]은 2가 왼쪽 자식이든 오른쪽 자식이든 똑같이 나온다. 중위는 뿌리가 두 가지 사이에 끼어 있어 왼쪽과 오른쪽을 가를 수 있다. 모든 노드의 자식이 0개나 2개라면 전위와 후위로도 하나로 정해진다.",
    anchor: "순회-조합을-바꾸는-변형들",
  },
  {
    id: "leetcode-construct-tree-from-preorder-inorder-5",
    post: "leetcode-construct-tree-from-preorder-inorder",
    question: "스택 풀이에서 새 노드를 마지막으로 꺼낸 노드의 오른쪽 자식으로 붙이는 때는?",
    choices: [
      "새 값이 꼭대기 값보다 클 때",
      "스택 꼭대기가 중위 배열의 현재 값과 같아 꺼낸 노드가 있을 때. 그 노드의 왼쪽 가지가 끝났다는 뜻이다",
      "스택이 비었을 때만",
      "전위 포인터가 짝수일 때",
    ],
    answer: 1,
    explanation:
      "중위 순서는 왼쪽 가지를 다 적은 다음 자기를 적는다. 그래서 꼭대기가 중위 현재 값과 같으면 그 노드의 왼쪽 가지는 끝났고, 끝난 만큼 꺼낸 뒤 마지막으로 꺼낸 노드의 오른쪽에 붙인다. 크기 비교는 BST에서만 의미가 있다.",
    anchor: "스택-하나로-왼쪽-등뼈를-따라간다",
  },
];
