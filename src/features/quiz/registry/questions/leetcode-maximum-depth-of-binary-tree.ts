import type { QuizQuestion } from "../types";

export const LEETCODE_MAXIMUM_DEPTH_OF_BINARY_TREE: QuizQuestion[] = [
  {
    id: "leetcode-maximum-depth-of-binary-tree-1",
    post: "leetcode-maximum-depth-of-binary-tree",
    question:
      "최대 깊이 코드 `1 + Math.max(f(left), f(right))`에서 `max`만 `min`으로 바꿔 최소 깊이를 구했다. 트리 `[1, 2]`(뿌리 1, 왼쪽 자식 2)에서 무엇이 나오고, 왜 그런가?",
    choices: [
      "2가 나온다. 잎 2까지 노드가 둘이라서 정답이다",
      "0이 나온다. 빈 오른쪽이 먼저 계산되어서",
      "1이 나온다. 빈 오른쪽이 돌려준 0을 min이 골라, 잎이 아닌 1을 잎처럼 셌기 때문이다",
      "무한 재귀에 빠진다. 빈 자식에서 멈추지 않아서",
    ],
    answer: 2,
    explanation:
      "1은 오른쪽이 비어 있을 뿐 잎이 아니다. 그런데 빈 쪽이 0을 돌려주니 min이 그 0을 골라 1 + 0 = 1이 된다. 최대 깊이에서는 0이 max에서 뽑히지 않아 문제가 없었을 뿐이고, 최소 깊이는 한쪽 자식이 없으면 있는 쪽만 봐야 한다.",
    anchor: "깊이-계산에서-자주-틀리는-곳",
  },
  {
    id: "leetcode-maximum-depth-of-binary-tree-2",
    post: "leetcode-maximum-depth-of-binary-tree",
    question: "층 단위 BFS로 최대 깊이를 구할 때 추가 공간이 가장 많이 드는 트리는?",
    choices: [
      "모든 층이 꽉 찬 이진 트리. 마지막 층에 노드의 절반 가까이가 한꺼번에 들어 있다",
      "한쪽으로만 이어진 일자 트리. 깊이가 n이라서",
      "노드가 하나뿐인 트리",
      "어떤 트리든 공간은 O(h)로 같다",
    ],
    answer: 0,
    explanation:
      "BFS는 한 층의 노드를 한꺼번에 들고 있어서 공간이 트리의 최대 너비에 비례한다. 꽉 찬 트리는 마지막 층에 노드 절반이 몰려 O(n)이 되고, 일자 트리는 층마다 노드가 하나라 O(1)이다. 깊이에 비례하는 건 DFS 쪽이다.",
    anchor: "한-층씩-내려가며-층을-센다",
  },
  {
    id: "leetcode-maximum-depth-of-binary-tree-3",
    post: "leetcode-maximum-depth-of-binary-tree",
    question:
      "노드를 방문할 때마다 `[...path, node.val]`로 지금까지의 길을 복사해 넘기고, 잎에서 길을 모아 가장 긴 길이를 고르는 풀이가 있다. 한쪽으로 기운 일자 트리에서 시간 복잡도는?",
    choices: ["O(n)", "O(n log n)", "O(h)", "O(n²)"],
    answer: 3,
    explanation:
      "깊이 d인 노드에서 길이 d짜리 배열을 복사하니, 전체 시간은 모든 노드의 깊이를 더한 O(n·h)다. 일자 트리는 h가 n이라 1 + 2 + … + n으로 O(n²)이 된다. 길이만 필요하니 배열 대신 층수 숫자 하나를 넘기면 O(n)으로 줄어든다.",
    anchor: "뿌리에서-잎까지-길을-모두-적어-두기",
  },
  {
    id: "leetcode-maximum-depth-of-binary-tree-4",
    post: "leetcode-maximum-depth-of-binary-tree",
    question:
      "Python으로 쓴 재귀 풀이 `1 + max(max_depth(root.left), max_depth(root.right))`가 깊이 5000짜리 일자 트리에서 `RecursionError`를 냈다. 가장 안전한 해결은?",
    choices: [
      "`max` 대신 `if`문으로 비교해 함수 호출을 줄인다",
      "deque를 쓰는 BFS나 직접 만든 스택을 쓰는 반복 DFS로 바꾼다",
      "`sys.setrecursionlimit`을 10억으로 올린다",
      "기저 사례를 잎으로 바꿔 빈 자식 호출을 없앤다",
    ],
    answer: 1,
    explanation:
      "Python의 기본 재귀 한도는 1000이라 깊은 트리에서는 재귀 자체가 막힌다. 반복문으로 바꾸면 노드를 힙 메모리의 스택이나 큐에 두므로 깊이와 상관없이 돈다. 한도를 터무니없이 올리면 예외 대신 C 스택이 넘쳐 프로세스가 죽을 수 있고, 빈 자식 호출을 없애도 호출 깊이는 그대로다.",
    anchor: "자식에게-물어보고-하나를-더한다",
  },
  {
    id: "leetcode-maximum-depth-of-binary-tree-5",
    post: "leetcode-maximum-depth-of-binary-tree",
    question:
      "Morris 순회로 깊이를 잴 때, 임시 다리를 타고 `cur`로 돌아온 순간 `depth`에서 `steps`(왼쪽 자식에서 오른쪽으로 걸은 걸음 수)를 빼는 이유는?",
    choices: [
      "다리를 지운 만큼 트리 노드 수가 줄어들어서",
      "오른쪽 서브트리를 건너뛰기 위해서",
      "돌아오기 직전 방문한 노드는 cur보다 정확히 steps층 아래에 있어서, 빼면 cur의 층수가 되기 때문이다",
      "중복 방문한 노드를 깊이에서 제외하려고",
    ],
    answer: 2,
    explanation:
      "다리는 왼쪽 서브트리의 가장 오른쪽 노드에서 cur로 걸려 있고, 그 노드는 cur.left에서 오른쪽으로 steps-1번 더 내려간 곳이라 cur보다 steps층 깊다. 다리를 타면 그 층 차이를 한 번에 올라오므로 depth를 steps만큼 줄여야 맞는다. 트리 노드 수는 바뀌지 않는다.",
    anchor: "스택도-큐도-없이-실을-걸어-내려가기",
  },
];
