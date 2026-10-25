import type { QuizQuestion } from "../types";

export const LEETCODE_FIND_MINIMUM_IN_ROTATED_SORTED_ARRAY: QuizQuestion[] = [
  {
    id: "leetcode-find-minimum-in-rotated-sorted-array-1",
    post: "leetcode-find-minimum-in-rotated-sorted-array",
    question: "`nums[mid] < nums[hi]`일 때 `hi = mid`로 줄이는 근거는?",
    choices: [
      "mid부터 hi까지 오름차순이라 그 구간의 최소는 mid이고, mid가 답일 수도 있다",
      "mid 왼쪽은 모두 mid보다 크다",
      "꺾이는 곳이 mid와 hi 사이에 있다",
      "mid가 최댓값이라 버려도 된다",
    ],
    answer: 0,
    explanation:
      "가운데가 오른쪽 끝보다 작으면 그 사이에 꺾이는 곳이 없어 오름차순이다. 그러니 mid 오른쪽 칸들은 최솟값이 아니고 mid는 후보로 남긴다. mid 왼쪽에 더 작은 값이 있을 수 있어서 구간을 lo~mid로 줄인다.",
    anchor: "가운데를-오른쪽-끝과-비교한다",
  },
  {
    id: "leetcode-find-minimum-in-rotated-sorted-array-2",
    post: "leetcode-find-minimum-in-rotated-sorted-array",
    question: "`nums[mid] >= nums[lo]`면 `lo = mid + 1`, 아니면 `hi = mid`로 짠 코드에 회전하지 않은 `[-4, 1, 3, 8, 12, 17, 25, 31]`을 넣으면?",
    choices: ["-4", "1", "31", "무한 루프"],
    answer: 2,
    explanation:
      "정렬된 배열에서는 가운데가 늘 왼쪽 끝 이상이라 lo만 계속 오른쪽으로 가 마지막 칸 31에 멈춘다. 왼쪽이 정렬됐다는 사실은 최솟값의 위치를 알려 주지 않는다. 오른쪽 끝과 비교하면 이런 예외가 없다.",
    anchor: "가운데를-왼쪽-끝과-비교한다",
  },
  {
    id: "leetcode-find-minimum-in-rotated-sorted-array-3",
    post: "leetcode-find-minimum-in-rotated-sorted-array",
    question: "분할 정복 풀이는 양쪽 절반을 모두 재귀 호출하는데도 O(log n)인 이유는?",
    choices: [
      "자바스크립트 엔진이 재귀를 반복문으로 바꿔 주기 때문이다",
      "회전된 구간을 반으로 자르면 한쪽은 정렬된 조각이라 양 끝 비교 한 번으로 바로 돌아오기 때문이다",
      "Math.min이 O(1)이기 때문이다",
      "배열 길이가 5000 이하이기 때문이다",
    ],
    answer: 1,
    explanation:
      "꺾이는 곳은 한 군데라 반으로 자르면 한쪽에만 들어 있다. 다른 쪽은 nums[lo] <= nums[hi]라 즉시 답한다. 그래서 단계마다 더 들어가는 호출이 하나뿐이고 호출 수가 약 2 log n이다. 100만 칸에서 41번이었다.",
    anchor: "정렬된-조각은-바로-답한다-분할-정복",
  },
  {
    id: "leetcode-find-minimum-in-rotated-sorted-array-4",
    post: "leetcode-find-minimum-in-rotated-sorted-array",
    question: "중복이 허용되는 154번에서 `nums[mid] === nums[hi]`일 때 해야 하는 일과 그 결과는?",
    choices: [
      "hi = mid로 줄인다. 여전히 O(log n)이다",
      "lo = mid + 1로 줄인다. 여전히 O(log n)이다",
      "hi를 한 칸만 줄인다. 최악 O(n)이 된다",
      "배열을 정렬한다. O(n log n)이 된다",
    ],
    answer: 2,
    explanation:
      "[3, 3, 1, 3]과 [3, 1, 3, 3, 3]은 가운데와 끝이 같지만 최솟값이 서로 반대쪽에 있어서 버릴 절반을 정할 수 없다. 같은 값이 mid에 남아 있으니 hi 하나는 버려도 안전하다. 거의 모든 값이 같으면 한 칸씩 줄어 O(n)이다.",
    anchor: "같은-값이-있어도-된다면-154-find-minimum-in-rotated-sorted-array-ii",
  },
  {
    id: "leetcode-find-minimum-in-rotated-sorted-array-5",
    post: "leetcode-find-minimum-in-rotated-sorted-array",
    question: "`[12, 17, 25, 31, -4, 1, 3, 8]`은 정렬 배열을 몇 번 회전한 것이고, 그 값은 어떻게 구하나?",
    choices: [
      "3번. 최댓값의 인덱스다",
      "4번. 최솟값의 인덱스다",
      "5번. 배열 길이에서 최솟값 인덱스를 뺀 값이다",
      "8번. 회전 횟수는 배열 길이와 같다",
    ],
    answer: 1,
    explanation:
      "원래 0번에 있던 최솟값이 회전으로 k번 자리에 가므로 최솟값의 인덱스가 회전 횟수다. -4가 4번에 있으니 4번이다. 최댓값은 그 바로 왼쪽 칸인 3번이다.",
    anchor: "몇-번-회전했는지-구하라면",
  },
];
