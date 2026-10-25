import type { QuizQuestion } from "../types";

export const LEETCODE_INVERT_BINARY_TREE: QuizQuestion[] = [
  {
    id: "leetcode-invert-binary-tree-1",
    post: "leetcode-invert-binary-tree",
    question:
      "중위 순서로 `invert(root.left)` → 두 자식 바꾸기 → `invert(root.right)`를 짰다. 트리 `[5, 3, 8, 1, 4, null, 9]`에서 이 코드가 틀린 답을 내는 이유는?",
    choices: [
      "중위 순회는 뿌리를 먼저 방문하지 않아서 뿌리의 자식이 바뀌지 않는다",
      "바꾼 뒤의 오른쪽은 방금 뒤집은 원래 왼쪽 가지라 두 번 뒤집혀 원래대로 돌아오고, 원래 오른쪽 가지는 손대지 않는다",
      "재귀 호출이 세 번이라 호출 스택이 넘친다",
      "중위 순회는 잎에서 null을 돌려주지 않아 오류가 난다",
    ],
    answer: 1,
    explanation:
      "바꾸기가 두 재귀 호출 사이에 끼어들어 `root.right`가 가리키는 대상이 바뀐다. 그래서 3 가지는 두 번 뒤집혀 제자리로, 8 가지는 한 번도 뒤집히지 않고 끝나 `[5, 8, 3, null, 9, 1, 4]`가 나온다. 바꾼 다음 `root.left`로 내려가면 맞는 답이 된다.",
    anchor: "중위-순서로-하면-한쪽이-두-번-뒤집힌다",
  },
  {
    id: "leetcode-invert-binary-tree-2",
    post: "leetcode-invert-binary-tree",
    question: "`root.left = root.right; root.right = root.left;`처럼 임시 변수 없이 두 줄로 바꾸면 어떻게 되나?",
    choices: [
      "정상적으로 바뀐다. 대입은 동시에 일어난다",
      "TypeError가 나서 바로 알 수 있다",
      "두 포인터가 모두 원래 오른쪽 가지를 가리키고, 원래 왼쪽 가지는 잃어버린다",
      "두 포인터가 모두 null이 된다",
    ],
    answer: 2,
    explanation:
      "첫 줄에서 왼쪽의 원래 값이 덮어써지고, 둘째 줄은 방금 넣은 오른쪽 값을 다시 읽는다. 오류 없이 같은 가지가 두 번 붙은 틀린 트리가 나와서 찾기 어렵다. 임시 변수나 구조 분해 대입, Python 튜플 대입을 써야 한다.",
    anchor: "뒤집기-코드가-조용히-틀리는-경우",
  },
  {
    id: "leetcode-invert-binary-tree-3",
    post: "leetcode-invert-binary-tree",
    question: "스택 풀이에서 노드를 꺼내는 순서가 뒤죽박죽이어도 결과가 같은 이유는?",
    choices: [
      "노드마다 두 자식을 바꾸는 일이 서로 독립이라, 모든 노드를 한 번씩만 들르면 순서와 상관없이 같은 거울상이 된다",
      "스택은 항상 전위 순서로 꺼내기 때문이다",
      "자바스크립트 배열은 내부적으로 정렬되기 때문이다",
      "결과가 같지 않다. 반드시 BFS 순서로 꺼내야 한다",
    ],
    answer: 0,
    explanation:
      "한 노드의 포인터를 바꾸는 일은 다른 노드의 포인터에 영향을 주지 않는다. 그래서 들르는 순서는 상관없고 빠짐없이 한 번씩만 들르면 된다. 중위 순서가 틀린 건 순서 때문이 아니라 같은 가지를 두 번 들렀기 때문이다.",
    anchor: "재귀-없이-스택에-쌓아-두고-꺼낸다",
  },
  {
    id: "leetcode-invert-binary-tree-4",
    post: "leetcode-invert-binary-tree",
    question: "BFS(큐) 풀이의 추가 공간이 가장 커지는 트리 모양은?",
    choices: [
      "한쪽으로만 이어진 일자 트리",
      "노드가 하나뿐인 트리",
      "트리 모양과 상관없이 늘 O(1)이다",
      "모든 층이 꽉 찬 트리. 마지막 층에 노드의 절반 가까이가 한꺼번에 큐에 들어간다",
    ],
    answer: 3,
    explanation:
      "큐에는 한 층 정도의 노드가 함께 들어 있다. 꽉 찬 트리는 마지막 층이 가장 넓어 O(n)까지 커진다. 일자 트리에서는 큐에 늘 하나뿐이라, 스택 풀이와 반대로 깊고 좁은 트리에 유리하다.",
    anchor: "한-층씩-줄-세워-뒤집는다",
  },
  {
    id: "leetcode-invert-binary-tree-5",
    post: "leetcode-invert-binary-tree",
    question: "BST `[5, 3, 8, 1, 4, null, 9]`를 뒤집은 뒤 중위 순회로 값을 읽으면 무엇이 나오나?",
    choices: [
      "1, 3, 4, 5, 8, 9",
      "5, 8, 3, 9, 4, 1",
      "9, 8, 5, 4, 3, 1",
      "5, 3, 1, 4, 8, 9",
    ],
    answer: 2,
    explanation:
      "뒤집으면 모든 노드에서 큰 쪽이 왼쪽, 작은 쪽이 오른쪽으로 온다. 중위 순회는 왼쪽부터 읽으니 내림차순이 나온다. 5, 8, 3, 9, 4, 1은 층 순서로 읽은 값이다.",
    anchor: "거울-트리에서-뻗어-나가는-문제들",
  },
];
