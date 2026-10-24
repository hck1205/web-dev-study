import type { QuizQuestion } from "../types";

export const LEETCODE_SERIALIZE_AND_DESERIALIZE_BINARY_TREE: QuizQuestion[] = [
  {
    id: "leetcode-serialize-and-deserialize-binary-tree-1",
    post: "leetcode-serialize-and-deserialize-binary-tree",
    question: "노드가 4개인 이진 트리를 빈자리마다 `#`를 적는 전위 순회로 직렬화하면 토큰은 몇 개인가?",
    choices: ["4개", "8개", "9개", "트리 모양에 따라 다르다"],
    answer: 2,
    explanation:
      "노드 n개짜리 이진 트리는 자식 자리가 2n개이고 그중 n-1개를 뿌리가 아닌 노드가 차지하니, 빈자리는 언제나 n+1개다. 그래서 토큰은 모양과 상관없이 n + (n+1) = 2n+1개, 노드 4개면 9개다. 예시 트리 5,2,#,3,#,#,8,#,#도 9개다.",
    anchor: "빈자리까지-층-순서로-적기",
  },
  {
    id: "leetcode-serialize-and-deserialize-binary-tree-2",
    post: "leetcode-serialize-and-deserialize-binary-tree",
    question: "전위 순회와 중위 순회 결과를 함께 적는 직렬화가 이 문제에서 실패하는 이유는?",
    choices: [
      "같은 값이 여러 번 나오면 중위 순회에서 뿌리 위치를 하나로 정할 수 없어서",
      "음수 값을 문자열로 바꿀 수 없어서",
      "두 순회를 합치면 문자열이 O(n²) 길이가 되어서",
      "중위 순회는 재귀 없이 구할 수 없어서",
    ],
    answer: 0,
    explanation:
      "복원은 전위의 첫 값을 중위에서 찾아 왼쪽과 오른쪽을 나누는 방식이라 값이 모두 달라야 한다. 뿌리 1에 왼쪽 자식 1인 트리와 오른쪽 자식 1인 트리는 둘 다 1,1|1,1이 되어 구분할 수 없다. 이 문제는 값 중복을 막지 않으니 쓸 수 없다. 길이는 값을 두 번 적어 두 배일 뿐 O(n)이다.",
    anchor: "전위와-중위를-두-줄로-적기",
  },
  {
    id: "leetcode-serialize-and-deserialize-binary-tree-3",
    post: "leetcode-serialize-and-deserialize-binary-tree",
    question: "빈자리에 `#`를 끼우더라도 중위 순회로는 트리를 하나로 복원할 수 없는 이유는?",
    choices: [
      "중위 순회는 빈자리 개수가 n+1개가 아니라서",
      "중위 순회는 값이 정렬되어 나와서",
      "중위 순회는 오른쪽 서브트리를 먼저 적어서",
      "뿌리가 문자열 가운데 어딘가에 묻혀, 어디서 나눌지 알 수 없어서",
    ],
    answer: 3,
    explanation:
      "전위는 뿌리가 맨 앞, 후위는 맨 끝이라 읽는 쪽이 시작점을 안다. 중위는 뿌리가 가운데 있어서 위치를 알려 주는 정보가 없다. 뿌리 1에 왼쪽 자식 2인 트리와 뿌리 2에 오른쪽 자식 1인 트리가 둘 다 #,2,#,1,#가 된다.",
    anchor: "후위-순회로-적고-뒤에서부터-읽기",
  },
  {
    id: "leetcode-serialize-and-deserialize-binary-tree-4",
    post: "leetcode-serialize-and-deserialize-binary-tree",
    question:
      "검증 없는 재귀 `deserialize`에 토큰이 모자란 문자열 `\"1,2\"`를 넣었더니 `RangeError: Maximum call stack size exceeded`가 났다. 왜 그런가?",
    choices: [
      "1과 2가 같은 깊이라서 순환이 생겨서",
      "토큰이 떨어지면 `undefined`를 읽는데 `#`가 아니라서 NaN 값 노드를 만들며 끝없이 내려가서",
      "split이 빈 문자열을 만들어서",
      "값이 두 개뿐이라 뿌리를 찾지 못해서",
    ],
    answer: 1,
    explanation:
      "`tokens[i++]`가 범위를 넘으면 `undefined`가 되고, `undefined`는 `\"#\"`가 아니니 새 노드를 만들고 또 자식을 읽으러 내려간다. 멈출 `#`가 영원히 오지 않아 스택이 넘친다. 토큰이 모자라면 에러를 내고, 끝났을 때 토큰이 정확히 다 소비됐는지 확인해야 한다.",
    anchor: "받은-문자열을-그대로-믿으면",
  },
  {
    id: "leetcode-serialize-and-deserialize-binary-tree-5",
    post: "leetcode-serialize-and-deserialize-binary-tree",
    question: "이진 탐색 트리(LeetCode 449)라면 `#` 없이 전위 순회 값만 적어도 복원되는 이유는?",
    choices: [
      "BST는 항상 꽉 찬 트리라서 빈자리가 없어서",
      "BST의 전위 순회는 정렬된 순서라서",
      "각 자리에 올 수 있는 값의 범위가 정해져 있어, 다음 값이 범위를 벗어나면 그 자리가 빈자리임을 알 수 있어서",
      "BST는 값이 중복될 수 있어서",
    ],
    answer: 2,
    explanation:
      "BST에서 왼쪽 자리는 부모보다 작고 오른쪽 자리는 크다는 범위가 정해져 있다. 복원할 때 그 범위를 들고 내려가다가 다음 값이 범위 밖이면 그 자리를 비우면 된다. 정렬된 순서가 나오는 건 중위 순회이고, BST가 꽉 찬 트리일 필요도 없다.",
    anchor: "면접관이-이어서-묻는-것",
  },
];
