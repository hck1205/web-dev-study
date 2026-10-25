import type { QuizQuestion } from "../types";

export const LEETCODE_MERGE_TWO_SORTED_LISTS: QuizQuestion[] = [
  {
    id: "leetcode-merge-two-sorted-lists-1",
    post: "leetcode-merge-two-sorted-lists",
    question:
      "dummy 풀이에서 반복문이 끝난 뒤 `tail.next = list1 ?? list2`를 빼먹었다. `[1,3,5]`와 `[2,3,6]`을 넣으면 결과는?",
    choices: ["`[1, 2, 3, 3, 5, 6]`", "`[1, 2, 3, 3, 5]`", "`[6]`", "무한 루프"],
    answer: 1,
    explanation:
      "반복문은 `list1`이 비는 순간 끝나서 `list2`에 남은 6이 결과에 붙지 못한다. 마지막에 붙은 5는 원래 꼬리라 `next`가 `null`이어서 오류 없이 조용히 6만 빠진다. `[6]`은 `tail = tail.next`를 빼먹었을 때 나오는 결과다.",
    anchor: "꼬리를-놓치는-실수들",
  },
  {
    id: "leetcode-merge-two-sorted-lists-2",
    post: "leetcode-merge-two-sorted-lists",
    question: "한쪽 리스트가 비면 남은 리스트를 하나씩 붙이지 않고 머리 하나만 `tail.next`에 걸어도 되는 이유는?",
    choices: [
      "남은 리스트는 이미 정렬된 채 이어져 있고, 첫 값이 결과의 마지막 값보다 크거나 같기 때문이다",
      "남은 리스트는 항상 노드가 하나뿐이기 때문이다",
      "LeetCode 채점기가 남은 노드를 자동으로 붙여 주기 때문이다",
      "남은 리스트의 값은 모두 같기 때문이다",
    ],
    answer: 0,
    explanation:
      "남은 노드들은 원래부터 `next`로 정렬된 순서대로 이어져 있으니 머리 하나만 걸면 전체가 딸려 온다. 결과에 마지막으로 붙은 노드는 비교에서 남은 쪽 머리를 이긴 노드라서 순서도 깨지지 않는다. 남은 노드 수와 상관없이 대입 한 번으로 끝난다.",
    anchor: "남은-꼬리를-한-번에-붙여도-되는-이유",
  },
  {
    id: "leetcode-merge-two-sorted-lists-3",
    post: "leetcode-merge-two-sorted-lists",
    question:
      "값이 3인 노드 a(list1)와 b(list2)가 있다. 비교를 `list1.val < list2.val`로 쓰면 결과에서 두 노드의 순서는?",
    choices: [
      "a, b. 항상 list1이 먼저다",
      "실행할 때마다 달라진다",
      "b, a. 같으면 else로 가서 list2가 먼저 붙는다",
      "둘 중 하나만 남는다",
    ],
    answer: 2,
    explanation:
      "`<`는 같은 값에서 거짓이라 else 쪽인 `list2`의 노드가 먼저 붙는다. `<=`로 쓰면 a, b 순서가 지켜지고, 이렇게 같은 값의 원래 순서를 지키는 성질이 안정성이다. 병합 정렬이 안정 정렬인 이유가 이 `<=`다.",
    anchor: "같은-값이면-list1-먼저인-이유",
  },
  {
    id: "leetcode-merge-two-sorted-lists-4",
    post: "leetcode-merge-two-sorted-lists",
    question: "재귀 병합 풀이의 공간 복잡도와 그 이유로 맞는 것은?",
    choices: [
      "O(1). 새 노드를 만들지 않으니까",
      "O(log(n + m)). 매번 문제가 반으로 줄어드니까",
      "O(n · m). 모든 쌍을 비교하니까",
      "O(n + m). 노드마다 호출이 하나씩 콜 스택에 쌓이니까",
    ],
    answer: 3,
    explanation:
      "각 호출은 머리 하나를 고르고 나머지를 아래 호출에 맡기므로, 결과 노드 수만큼 호출이 쌓인다. 그래서 새 노드를 만들지 않아도 콜 스택이 O(n + m)이고, 긴 리스트에서는 스택 오버플로가 난다. 문제가 반으로 줄어드는 건 병합 정렬의 분할 단계 이야기다.",
    anchor: "작은-머리-뒤에-나머지-병합을-붙이는-재귀",
  },
  {
    id: "leetcode-merge-two-sorted-lists-5",
    post: "leetcode-merge-two-sorted-lists",
    question:
      "LeetCode 88처럼 `nums1` 뒤쪽 빈칸에 `nums2`를 합쳐 넣을 때 뒤에서부터 큰 값을 채우는 이유는?",
    choices: [
      "뒤에서부터 하면 비교 횟수가 절반으로 준다",
      "배열은 앞에서부터 쓸 수 없다",
      "앞에서부터 채우면 아직 읽지 않은 `nums1`의 값을 덮어쓰게 된다",
      "큰 값부터 넣어야 정렬이 안정적이다",
    ],
    answer: 2,
    explanation:
      "`nums1`의 앞쪽에는 아직 비교하지 않은 값이 들어 있어서 앞에서부터 쓰면 그 값을 잃는다. 뒤쪽은 비어 있으니 큰 값부터 채우면 덮어쓸 일이 없다. 연결 리스트는 화살표만 다시 이으면 되니 이런 문제가 없다.",
    anchor: "배열이라면",
  },
];
