import type { QuizQuestion } from "../types";

export const LEETCODE_LOWEST_COMMON_ANCESTOR_OF_BST: QuizQuestion[] = [
  {
    id: "leetcode-lowest-common-ancestor-of-bst-1",
    post: "leetcode-lowest-common-ancestor-of-bst",
    question:
      "BST 반복 풀이의 비교를 `p.val <= cur.val && q.val <= cur.val`이면 왼쪽, `>=`이면 오른쪽으로 바꿨다. 뿌리 20, 왼쪽 10, 10의 왼쪽 5인 트리에서 `p = 10`, `q = 5`를 넣으면?",
    choices: [
      "10이 나온다. 같은 값도 갈라지는 경우로 처리되어서",
      "null이 나온다. 10에서 둘 다 10 이하라 왼쪽으로 내려가 답을 지나치기 때문이다",
      "5가 나온다. 더 깊은 쪽이 답이 되어서",
      "20이 나온다. 뿌리에서 바로 멈춰서",
    ],
    answer: 1,
    explanation:
      "10에 도착했을 때 10과 5가 모두 10 이하라서 왼쪽 5로 내려가고, 5에서는 둘 다 5 이상이라 오른쪽 빈자리로 떨어져 null이 된다. 값이 같다는 건 그 노드가 바로 찾는 노드라는 뜻이라, 엄격한 `<`와 `>`로 비교해 같은 경우가 else로 빠지게 해야 한다.",
    anchor: "갈림길-판정에서-틀리는-곳",
  },
  {
    id: "leetcode-lowest-common-ancestor-of-bst-2",
    post: "leetcode-lowest-common-ancestor-of-bst",
    question:
      "Java에서 `while ((cur.val - p.val) * (cur.val - q.val) > 0)`으로 같은 쪽인지 판정하는 코드가 값이 큰 트리에서 틀린 답을 낸다. 이유는?",
    choices: [
      "뺄셈 결과가 음수가 되면 비교 연산자가 거꾸로 동작해서",
      "곱셈이 정수 나눗셈처럼 소수점을 버려서",
      "값이 같은 노드가 있으면 곱이 0이 되어서",
      "두 차의 곱이 int 범위를 넘어 부호가 뒤집히면, 같은 쪽인데도 갈라졌다고 판단해서",
    ],
    answer: 3,
    explanation:
      "값이 ±10^9까지라 두 차의 곱은 4×10^18까지 커지는데 int는 약 ±21억까지만 담는다. 넘친 곱이 음수가 되면 루프가 일찍 멈추고 엉뚱한 조상을 돌려준다. 곱하기 전에 long으로 바꾸거나, if 두 개로 따로 비교하면 된다.",
    anchor: "반복문-하나로-끝내기",
  },
  {
    id: "leetcode-lowest-common-ancestor-of-bst-3",
    post: "leetcode-lowest-common-ancestor-of-bst",
    question:
      "BST 성질을 쓰지 않는 일반 트리 풀이(양쪽 서브트리에 묻는 재귀)가 BST 반복 풀이보다 느린 가장 큰 이유는?",
    choices: [
      "답이 이미 한쪽에서 정해졌어도, 위쪽 노드는 그걸 모르고 나머지 서브트리까지 다 돌아서",
      "재귀 호출이 반복문보다 몇 배 느려서",
      "같은 노드를 두 번씩 방문해서",
      "노드 값을 비교하지 않고 참조를 비교해서",
    ],
    answer: 0,
    explanation:
      "일반 트리 풀이는 값으로 방향을 정할 수 없어서, 예를 들어 5와 18의 답 10을 찾은 뒤에도 뿌리 20이 오른쪽 30 서브트리를 전부 돈다. 그래서 최악 O(n)이다. BST 풀이는 두 값이 모두 작으면 오른쪽을 볼 필요가 없다는 걸 알아서 길 하나, O(h)만 본다.",
    anchor: "양쪽-서브트리에-물어서-받아-올리기",
  },
  {
    id: "leetcode-lowest-common-ancestor-of-bst-4",
    post: "leetcode-lowest-common-ancestor-of-bst",
    question: "BST에서 두 값이 처음으로 다른 방향을 가리키는 노드가 가장 가까운 공통 조상인 이유로 맞는 것은?",
    choices: [
      "그 노드가 두 값의 평균에 가장 가까워서",
      "그 노드의 깊이가 두 노드 깊이의 중간이라서",
      "왼쪽 서브트리의 노드는 오른쪽에 있는 값을 자손으로 둘 수 없어서, 그보다 깊은 공통 조상이 있을 수 없기 때문이다",
      "BST에서는 모든 노드가 공통 조상이라서",
    ],
    answer: 2,
    explanation:
      "갈라지는 노드까지는 두 값이 늘 같은 쪽에 있었으니 공통 조상이 맞다. 거기서 하나는 왼쪽, 하나는 오른쪽으로 가면, 더 깊은 노드는 어느 한쪽 서브트리에만 속해서 둘을 함께 품을 수 없다. 값의 평균이나 깊이와는 관계가 없다.",
    anchor: "둘이-같은-쪽이면-같이-내려간다",
  },
  {
    id: "leetcode-lowest-common-ancestor-of-bst-5",
    post: "leetcode-lowest-common-ancestor-of-bst",
    question: "1, 2, 3, …, n을 차례로 넣어 만든 BST에서 반복 풀이의 최악 시간 복잡도는?",
    choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: 1,
    explanation:
      "정렬된 순서로 넣으면 모든 노드가 오른쪽 자식만 가져 높이가 n인 일자 트리가 된다. 반복 풀이는 O(h)라서 이때 O(n)이다. 풀이가 아니라 트리 모양의 문제라, 높이를 log n으로 지키려면 AVL이나 레드-블랙 같은 균형 트리가 필요하다.",
    anchor: "반복문-하나로-끝내기",
  },
];
