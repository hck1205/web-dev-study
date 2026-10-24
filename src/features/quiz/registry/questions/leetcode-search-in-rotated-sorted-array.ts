import type { QuizQuestion } from "../types";

export const LEETCODE_SEARCH_IN_ROTATED_SORTED_ARRAY: QuizQuestion[] = [
  {
    id: "leetcode-search-in-rotated-sorted-array-1",
    post: "leetcode-search-in-rotated-sorted-array",
    question: "회전된 정렬 배열에서 O(log n) 탐색이 가능한 근거는?",
    choices: [
      "회전된 배열도 전체를 보면 거의 정렬돼 있기 때문이다",
      "가운데로 자르면 꺾이는 곳은 한쪽에만 있어 다른 쪽은 반드시 오름차순이고, 그쪽 범위로 target의 위치를 판단할 수 있기 때문이다",
      "최솟값이 항상 가운데에 있기 때문이다",
      "값이 서로 달라서 해시처럼 바로 찾을 수 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "꺾이는 곳은 한 군데뿐이라 잘린 두 절반 중 하나는 정렬돼 있다. 정렬된 쪽은 양 끝 값이 곧 범위라 target이 그 안에 있는지 바로 알고, 없으면 반대쪽으로 가서 절반을 버린다.",
    anchor: "가운데로-자르면-한쪽은-반드시-정렬돼-있다",
  },
  {
    id: "leetcode-search-in-rotated-sorted-array-2",
    post: "leetcode-search-in-rotated-sorted-array",
    question: "정렬 여부를 `nums[lo] < nums[mid]`(등호 없음)로 판단하는 코드에 `[3, 1]`, target 1을 넣으면?",
    choices: [
      "1을 돌려준다. 등호는 결과에 영향이 없다",
      "무한 루프에 빠진다",
      "-1을 돌려준다. mid가 lo와 같을 때 오른쪽이 정렬됐다고 잘못 판단해서다",
      "0을 돌려준다",
    ],
    answer: 2,
    explanation:
      "lo = mid = 0이라 3 < 3이 거짓이고, 오른쪽 [3, 1]이 정렬됐다고 본다. '1이 3 초과 1 이하인가'가 거짓이라 hi = -1로 끝난다. 한 칸짜리 왼쪽 절반은 정렬된 것이니 <=로 판단해야 한다.",
    anchor: "numslo--numsmid로-정렬-여부를-판단한다",
  },
  {
    id: "leetcode-search-in-rotated-sorted-array-3",
    post: "leetcode-search-in-rotated-sorted-array",
    question: "`[25, 31, -4, 1, 3, 8, 12, 17]`에서 31을 찾을 때 첫 비교(mid = 3, 값 1)에서 일어나는 일은?",
    choices: [
      "왼쪽 25~1이 정렬됐다고 보고 왼쪽으로 간다",
      "오른쪽 1~17이 정렬된 쪽인데 31이 그 범위에 없어서 왼쪽(hi = 2)으로 간다",
      "1이 31보다 작으니 평범한 이분 탐색처럼 오른쪽으로 간다",
      "어느 쪽이 정렬됐는지 알 수 없어 양 끝을 한 칸씩 줄인다",
    ],
    answer: 1,
    explanation:
      "왼쪽 끝 25가 가운데 1보다 커서 왼쪽에 꺾이는 곳이 있다. 그래서 오른쪽 1~17이 정렬된 쪽이고, 31은 그 범위 밖이니 꺾인 왼쪽으로 간다. 평범한 이분 탐색처럼 값만 비교하면 오른쪽으로 가서 못 찾는다.",
    anchor: "정렬된-절반을-골라-한-번에-찾는다",
  },
  {
    id: "leetcode-search-in-rotated-sorted-array-4",
    post: "leetcode-search-in-rotated-sorted-array",
    question: "꺾이는 곳 k를 알 때 회전 전 배열의 i번 칸은 지금 몇 번 칸에 있나?",
    choices: ["(i + k) % n", "(i - k) % n", "i + k", "(n - k + i) / 2"],
    answer: 0,
    explanation:
      "회전 전 0번(최솟값)이 지금 k번에 있으니 모든 칸이 k만큼 밀렸고, 끝을 넘으면 앞으로 돌아온다. 그래서 0~n-1에서 평범한 이분 탐색을 하고 값을 읽을 때만 nums[(mid + k) % n]으로 읽는다.",
    anchor: "회전을-풀어서-보는-가상-인덱스",
  },
  {
    id: "leetcode-search-in-rotated-sorted-array-5",
    post: "leetcode-search-in-rotated-sorted-array",
    question: "같은 값을 허용하는 81번에서 `nums[lo] === nums[mid] === nums[hi]`일 때 처리와 그 영향은?",
    choices: [
      "왼쪽이 정렬됐다고 보고 그대로 진행한다. O(log n)이 유지된다",
      "배열을 정렬한 뒤 찾는다. O(n log n)이 된다",
      "해시 셋을 만든다. O(1)이 된다",
      "양 끝을 한 칸씩 줄인다. 거의 모든 값이 같으면 최악 O(n)이 된다",
    ],
    answer: 3,
    explanation:
      "[1, 0, 1, 1, 1]처럼 꺾였는데도 양 끝과 가운데가 같아 어느 쪽이 정렬됐는지 알 수 없다. 가운데에 같은 값이 있으니 양 끝을 버려도 target을 잃지 않지만, 한 칸씩만 줄어서 최악은 O(n)이다.",
    anchor: "같은-값이-있어도-된다면-81-search-in-rotated-sorted-array-ii",
  },
];
