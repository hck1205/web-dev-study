import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_INCREASING_SUBSEQUENCE: QuizQuestion[] = [
  {
    id: "leetcode-longest-increasing-subsequence-1",
    post: "leetcode-longest-increasing-subsequence",
    question: "`dp[i]`를 \"nums[i]로 끝나는 가장 긴 증가 수열의 길이\"로 둘 때, 답을 `dp[n-1]`로 내면 `[1, 2, 3, 0]`에서 무엇이 나오나?",
    choices: ["3", "4", "1", "0"],
    answer: 2,
    explanation:
      "마지막 원소 0은 앞의 어떤 값보다도 작아서 0으로 끝나는 증가 수열은 0 하나뿐이라 dp[3] = 1이다. 가장 긴 수열 1, 2, 3은 마지막 원소로 끝나지 않는다. 그래서 답은 dp 전체의 최댓값으로 내야 한다.",
    anchor: "이-원소로-끝나는-가장-긴-줄",
  },
  {
    id: "leetcode-longest-increasing-subsequence-2",
    post: "leetcode-longest-increasing-subsequence",
    question: "tails 풀이에서 같은 길이의 수열 중 끝값이 가장 작은 것만 남겨도 되는 이유는?",
    choices: [
      "끝값이 작은 수열이 항상 원래 배열에서 더 앞에 있기 때문",
      "끝값이 큰 수열에 붙일 수 있는 값은 끝값이 작은 수열에도 붙일 수 있고, 그 반대는 아니기 때문",
      "이분 탐색은 작은 값만 찾을 수 있기 때문",
      "같은 길이의 수열은 하나뿐이기 때문",
    ],
    answer: 1,
    explanation:
      "뒤에 x를 붙이려면 x가 끝값보다 커야 한다. 끝값이 작을수록 붙일 수 있는 x가 많아지니 끝값이 큰 수열은 손해만 본다. 그래서 길이마다 가장 작은 끝값 하나만 들고 있어도 답을 놓치지 않는다.",
    anchor: "길이마다-가장-작은-끝값만-남긴다",
  },
  {
    id: "leetcode-longest-increasing-subsequence-3",
    post: "leetcode-longest-increasing-subsequence",
    question: "`[3, 4, 1]`을 tails 풀이로 처리한 뒤의 tails와, 그것이 의미하는 바로 옳은 것은?",
    choices: [
      "[3, 4]. 실제 LIS다",
      "[1, 4]. 실제 LIS다",
      "[1]. 마지막 값만 남는다",
      "[1, 4]. 길이 2는 맞지만 1이 4보다 뒤에 있어 부분 수열이 아니다",
    ],
    answer: 3,
    explanation:
      "3, 4가 차례로 붙고 1이 3 자리를 덮어써서 [1, 4]가 된다. 길이 2는 맞지만 1은 원래 배열에서 4보다 뒤라 1, 4는 부분 수열이 아니다. 실제 수열이 필요하면 원소를 놓을 때 부모를 적어 두고 거꾸로 따라간다.",
    anchor: "길이마다-가장-작은-끝값만-남긴다",
  },
  {
    id: "leetcode-longest-increasing-subsequence-4",
    post: "leetcode-longest-increasing-subsequence",
    question: "엄격한 증가 LIS를 구하는데 tails 이분 탐색을 upper bound(`tails[mid] <= x`면 오른쪽)로 쓰면 `[7, 7, 7, 7]`에서 무엇이 나오나?",
    choices: ["1", "4", "0", "2"],
    answer: 1,
    explanation:
      "upper bound는 같은 값 다음 자리를 고르니 7이 올 때마다 새 칸이 생겨 4가 된다. 엄격한 증가에서는 같은 값이 같은 칸을 덮어써야 하므로 lower bound가 맞다. upper bound는 같은 값을 허용하는 비감소 버전에서 쓴다.",
    anchor: "틀리기-쉬운-자리",
  },
  {
    id: "leetcode-longest-increasing-subsequence-5",
    post: "leetcode-longest-increasing-subsequence",
    question: "Russian Doll Envelopes에서 너비가 같은 봉투들을 높이 내림차순으로 정렬하는 이유는?",
    choices: [
      "같은 너비 봉투끼리 높이 LIS에 함께 들어가 잘못 겹치는 일을 막으려고",
      "이분 탐색이 내림차순 배열에서만 동작해서",
      "높이가 큰 봉투를 먼저 넣어야 답이 커져서",
      "정렬을 안정 정렬로 만들려고",
    ],
    answer: 0,
    explanation:
      "너비가 같으면 서로 안에 넣을 수 없는데, 높이를 오름차순으로 두면 높이만 보는 LIS가 둘을 이어 붙일 수 있다. 내림차순으로 두면 같은 너비끼리는 증가 수열을 이룰 수 없어 이 실수가 막힌다. 그 뒤 높이 배열에 O(n log n) LIS를 쓴다.",
    anchor: "면접관이-조건을-바꾸면",
  },
];
