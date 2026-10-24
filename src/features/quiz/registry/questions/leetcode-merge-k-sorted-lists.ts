import type { QuizQuestion } from "../types";

export const LEETCODE_MERGE_K_SORTED_LISTS: QuizQuestion[] = [
  {
    id: "leetcode-merge-k-sorted-lists-1",
    post: "leetcode-merge-k-sorted-lists",
    question:
      "결과를 빈 리스트로 시작해 `result = mergeTwo(result, lists[i])`로 하나씩 차례로 합치면 시간 복잡도는? (N은 전체 노드 수, k는 리스트 수)",
    choices: [
      "O(N log k). 두 리스트 병합이 O(n)이니까",
      "O(N). 노드마다 한 번씩만 붙이니까",
      "O(N·k). 커진 결과를 합칠 때마다 다시 걷기 때문에",
      "O(k log N). 리스트 수만큼만 합치니까",
    ],
    answer: 2,
    explanation:
      "i번째 합치기는 지금까지 쌓인 결과 전체를 다시 걷는다. 리스트 길이가 N/k라면 N/k·(1 + 2 + … + k)로 약 N·k/2가 된다. 비슷한 크기끼리 둘씩 짝지어 합쳐야 라운드마다 노드를 한 번씩만 걸어 O(N log k)가 된다.",
    anchor: "하나씩-차례로-합치기",
  },
  {
    id: "leetcode-merge-k-sorted-lists-2",
    post: "leetcode-merge-k-sorted-lists",
    question: "최소 힙 풀이에서 힙에 동시에 들어 있는 노드는 많아야 몇 개인가?",
    choices: [
      "k개. 리스트마다 지금 차례인 노드 하나씩만 들어 있다",
      "N개. 모든 노드를 처음에 넣는다",
      "2개. 두 리스트 병합처럼 비교한다",
      "log k개. 힙의 높이만큼",
    ],
    answer: 0,
    explanation:
      "처음에 각 리스트의 머리만 넣고, 노드를 하나 꺼낼 때 같은 리스트의 다음 노드 하나만 넣는다. 그래서 힙 크기는 k를 넘지 않고, 넣기와 꺼내기가 O(log k)다. 리스트가 끝나면 채울 노드가 없어 힙이 줄어든다.",
    anchor: "머리들을-최소-힙에-넣어-두기",
  },
  {
    id: "leetcode-merge-k-sorted-lists-3",
    post: "leetcode-merge-k-sorted-lists",
    question:
      "Python에서 `heapq.heappush(heap, (node.val, node))`로 머리를 넣었다. 값이 같은 두 머리가 들어오면 어떻게 되나?",
    choices: [
      "먼저 넣은 노드가 항상 먼저 나온다",
      "값이 같은 노드 하나가 사라진다",
      "아무 문제 없다. heapq는 첫 원소만 비교한다",
      "튜플의 두 번째 원소인 노드끼리 비교하다가 TypeError가 난다",
    ],
    answer: 3,
    explanation:
      "튜플은 첫 원소가 같으면 두 번째 원소를 비교하는데, `ListNode`에는 `<`가 정의돼 있지 않아 `TypeError`가 난다. `(값, 리스트 번호, 노드)`처럼 서로 다른 숫자를 가운데 끼우면 노드까지 비교가 내려가지 않는다. 같은 값이 없는 예시로만 테스트하면 놓치기 쉽다.",
    anchor: "python과-java로-쓰면",
  },
  {
    id: "leetcode-merge-k-sorted-lists-4",
    post: "leetcode-merge-k-sorted-lists",
    question: "샤드 열 개의 정렬된 결과에서 전체 상위 20개만 필요하다. 힙이 둘씩 짝지어 합치기보다 나은 이유는?",
    choices: [
      "힙이 시간 복잡도 차수가 더 낮아서",
      "힙은 20번만 꺼내면 끝나지만, 짝짓기는 마지막 라운드가 끝나야 첫 값이 확정되기 때문에",
      "짝짓기는 리스트가 짝수 개일 때만 동작해서",
      "힙은 메모리를 전혀 쓰지 않아서",
    ],
    answer: 1,
    explanation:
      "힙은 가장 작은 값을 하나씩 바로 내놓으니 필요한 개수만큼만 꺼내고 멈출 수 있다. 짝짓기는 전체를 합쳐야 결과의 첫 값이 정해진다. 전체 차수는 둘 다 O(N log k)이고, 짝짓기는 홀수 개 리스트도 처리한다.",
    anchor: "앞에서-m개만-필요하다면",
  },
  {
    id: "leetcode-merge-k-sorted-lists-5",
    post: "leetcode-merge-k-sorted-lists",
    question: "값 범위(-10^4 ~ 10^4)를 칸 번호로 쓰는 버킷 풀이가 일반적인 답이 되지 못하는 이유는?",
    choices: [
      "같은 값이 여러 개면 노드를 잃기 때문이다",
      "연결 리스트에서는 버킷을 만들 수 없기 때문이다",
      "값 범위가 작은 정수라는 제약에 기대므로, 값이 큰 정수나 실수면 쓸 수 없기 때문이다",
      "비교를 너무 많이 해서 느리기 때문이다",
    ],
    answer: 2,
    explanation:
      "버킷 수가 값 범위 R만큼 필요해서 O(N + R) 시간과 O(R) 공간이 든다. 값이 64비트 타임스탬프라면 버킷을 만들 수 없고 실수는 칸 번호가 될 수 없다. 같은 값은 버킷 끝에 이어 매달아 잃지 않고, 비교는 한 번도 하지 않는다.",
    anchor: "값-범위가-좁다는-걸-이용한-버킷",
  },
];
