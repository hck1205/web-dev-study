import type { QuizQuestion } from "../types";

export const LEETCODE_FIND_FIRST_LAST_POSITION_SORTED_ARRAY: QuizQuestion[] = [
  {
    id: "leetcode-find-first-last-position-sorted-array-1",
    post: "leetcode-find-first-last-position-sorted-array",
    question: "이분 탐색으로 target 하나를 찾은 뒤 양옆으로 넓히는 풀이가 이 문제의 요구를 못 맞추는 이유는?",
    choices: [
      "찾은 자리가 항상 처음 자리라서 오른쪽만 넓히면 되기 때문이다",
      "같은 값이 k개면 O(log n + k)라서, 배열 전체가 target이면 O(n)이 되기 때문이다",
      "빈 배열에서 항상 예외가 나기 때문이다",
      "정렬된 배열에서는 같은 값이 떨어져 있을 수 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "넓히는 데 같은 값의 개수만큼 걸려서 최악에 O(n)이다. 길이 10만 배열이 전부 같은 값이면 이분 탐색 두 번보다 수백 배 느렸다. 정렬된 배열에서 같은 값은 반드시 한 덩어리로 붙어 있다.",
    anchor: "하나를-찾은-뒤-양옆으로-번진다",
  },
  {
    id: "leetcode-find-first-last-position-sorted-array-2",
    post: "leetcode-find-first-last-position-sorted-array",
    question: "nums = [1, 3, 3, 3, 5, 7, 7, 9]에서 lowerBound(3)과 upperBound(3)의 값은?",
    choices: ["1과 3", "0과 4", "1과 4", "2와 4"],
    answer: 2,
    explanation:
      "3 이상이 처음 나오는 자리는 1번, 3보다 큰 값이 처음 나오는 자리는 값 5가 있는 4번이다. 그래서 범위는 [1, 4 - 1] = [1, 3]이다. upper bound는 마지막 자리 자체가 아니라 그 다음 자리다.",
    anchor: "경계-두-개를-lower-bound-하나로",
  },
  {
    id: "leetcode-find-first-last-position-sorted-array-3",
    post: "leetcode-find-first-last-position-sorted-array",
    question: "[lowerBound(target), upperBound(target) - 1]을 확인 없이 돌려주면 target = 4일 때 결과는?",
    choices: ["[-1, -1]", "[4, 4]", "[3, 4]", "[4, 3]"],
    answer: 3,
    explanation:
      "4가 없으면 두 경계가 같은 자리(4번)라 끝이 시작보다 앞선 [4, 3]이 나온다. 그래서 lower bound 자리가 배열 끝인지, 그 값이 target인지 먼저 확인하고 [-1, -1]을 돌려준다. 확인 순서를 바꾸면 배열 밖을 읽는다.",
    anchor: "경계를-확인하지-않으면-엉뚱한-범위가-나온다",
  },
  {
    id: "leetcode-find-first-last-position-sorted-array-4",
    post: "leetcode-find-first-last-position-sorted-array",
    question: "닫힌 구간 [lo, hi]로 처음 자리를 찾을 때 target을 만나면 ans = mid로 적고 hi를 어떻게 바꿔야 하나?",
    choices: [
      "hi = mid - 1. 본 칸을 버려야 구간이 줄고, 후보는 ans가 기억한다",
      "hi = mid. mid도 후보라서 남겨야 한다",
      "lo = mid + 1. 오른쪽을 더 봐야 한다",
      "바로 return mid 한다",
    ],
    answer: 0,
    explanation:
      "닫힌 구간에서 hi = mid로 두면 lo와 hi가 같아진 뒤 구간이 더 줄지 않아 끝나지 않는다. mid를 후보로 남기는 일은 ans 변수가 맡는다. hi = mid가 맞는 건 반열린 구간 lower bound일 때다.",
    anchor: "찾아도-멈추지-않고-한쪽으로-더-간다",
  },
  {
    id: "leetcode-find-first-last-position-sorted-array-5",
    post: "leetcode-find-first-last-position-sorted-array",
    question: "마지막 자리를 lowerBound(target + 1) - 1로 구하는 방법이 틀리는 경우는?",
    choices: [
      "target이 배열에 하나뿐일 때",
      "배열이 실수이거나, 자바에서 target이 Integer.MAX_VALUE라 target + 1이 넘칠 때",
      "배열 길이가 홀수일 때",
      "target이 음수일 때",
    ],
    answer: 1,
    explanation:
      "실수 배열에서는 target과 target + 1 사이 값까지 포함해 버린다. 자바에서 MAX_VALUE + 1은 MIN_VALUE로 넘쳐 마지막 자리가 -1이 됐다. upper bound를 따로 두면 두 경우 모두 맞다.",
    anchor: "경계를-확인하지-않으면-엉뚱한-범위가-나온다",
  },
];
