import type { QuizQuestion } from "../types";

export const LEETCODE_NON_OVERLAPPING_INTERVALS: QuizQuestion[] = [
  {
    id: "leetcode-non-overlapping-intervals-1",
    post: "leetcode-non-overlapping-intervals",
    question: "끝이 이른 순으로 훑으며 겹치지 않으면 남기는 그리디가 최적인 근거는?",
    choices: [
      "끝 순으로 정렬하면 겹치는 구간이 모두 이웃하게 모여서",
      "가장 짧은 구간이 항상 가장 먼저 끝나서",
      "어떤 최적해의 첫 구간을 그보다 일찍 끝나는 구간으로 바꿔도 뒤 구간과 겹치지 않고 개수가 같아서",
      "끝 순으로 정렬하면 DP 표가 단조 증가해서",
    ],
    answer: 2,
    explanation:
      "교환 논증이다. 가장 일찍 끝나는 구간 A로 최적해의 첫 구간을 바꿔도 A가 더 일찍 끝나니 뒤 구간들과 여전히 겹치지 않는다. 가장 짧은 구간이 가장 먼저 끝난다는 보장은 없고, 실제로 짧은 것부터 고르는 그리디는 틀린다.",
    anchor: "가장-일찍-끝나는-구간을-남긴다",
  },
  {
    id: "leetcode-non-overlapping-intervals-2",
    post: "leetcode-non-overlapping-intervals",
    question: "`[[1, 5], [4, 7], [6, 10]]`에 '가장 짧은 구간부터 남기는' 그리디를 쓰면 지우는 개수와 정답은?",
    choices: ["1개, 정답 1", "2개, 정답 1", "2개, 정답 2", "0개, 정답 1"],
    answer: 1,
    explanation:
      "가장 짧은 `[4, 7]`을 먼저 남기면 양옆의 `[1, 5]`와 `[6, 10]`이 둘 다 막혀 두 개를 지운다. `[4, 7]` 하나만 지우면 나머지 둘은 겹치지 않으니 정답은 1이다.",
    anchor: "짧은-것부터-남기면-틀린다",
  },
  {
    id: "leetcode-non-overlapping-intervals-3",
    post: "leetcode-non-overlapping-intervals",
    question: "그리디에서 '아직 남긴 구간이 없다'를 `end = 0`으로 시작하면 `[[-3, -1], [-1, 2]]`에서 무슨 일이 생기나?",
    choices: [
      "정답 0을 그대로 낸다",
      "첫 구간만 지워 1을 낸다",
      "무한 루프에 빠진다",
      "두 구간의 시작이 0보다 작아 둘 다 지워 2를 낸다",
    ],
    answer: 3,
    explanation:
      "시작 −3과 −1이 모두 0보다 작아 `s >= end`가 거짓이 되고 둘 다 지워진다. 실제로는 끝점만 닿으니 둘 다 남는다. 이 문제는 값이 음수까지 내려가므로 `-Infinity`로 시작해야 한다.",
    anchor: "end를-0으로-시작한다",
  },
  {
    id: "leetcode-non-overlapping-intervals-4",
    post: "leetcode-non-overlapping-intervals",
    question: "시작 순으로 정렬하고도 정답을 내려면 겹칠 때 어떻게 해야 하나?",
    choices: [
      "하나를 지우고 end를 둘 중 작은 끝으로 둔다",
      "지금 구간을 지우고 end는 그대로 둔다",
      "앞 구간을 지우고 end를 지금 구간의 끝으로 둔다",
      "둘 다 지운다",
    ],
    answer: 0,
    explanation:
      "겹치면 하나는 지워야 하는데, 끝이 이른 쪽을 남겨야 뒤에 자리가 넓다. 그래서 `end = Math.min(end, e)`다. 지금 구간을 무조건 지우면 일찍 시작해 늦게 끝나는 구간이 남아 뒤를 막는다.",
    anchor: "시작-순으로-정렬해도-된다-대신-늦게-끝나는-쪽을-버린다",
  },
  {
    id: "leetcode-non-overlapping-intervals-5",
    post: "leetcode-non-overlapping-intervals",
    question: "구간마다 점수가 있고 남긴 점수 합을 최대로 하라는 변형에서 써야 하는 풀이는?",
    choices: [
      "끝 순 그리디에서 점수가 큰 쪽을 남긴다",
      "점수 순으로 정렬해 겹치지 않으면 남긴다",
      "끝 순으로 정렬하고 dp[i] = max(dp[i-1], dp[p] + 점수), p는 이분 탐색으로 찾는다",
      "시작 순 그리디에 Math.max를 쓴다",
    ],
    answer: 2,
    explanation:
      "점수가 붙으면 일찍 끝나는 구간이 점수가 낮을 수 있어 그리디가 깨진다. 지우거나 남기거나 두 갈래를 DP로 비교하고, 앞에서 끝난 구간 수 p를 이분 탐색으로 찾으면 O(n log n)이다. 이 변형이 1235번이다.",
    anchor: "이분-탐색으로-앞-구간을-바로-찾는다",
  },
];
