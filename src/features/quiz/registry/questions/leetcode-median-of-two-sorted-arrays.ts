import type { QuizQuestion } from "../types";

export const LEETCODE_MEDIAN_OF_TWO_SORTED_ARRAYS: QuizQuestion[] = [
  {
    id: "leetcode-median-of-two-sorted-arrays-1",
    post: "leetcode-median-of-two-sorted-arrays",
    question: "자르기 풀이에서 A에서 i개, B에서 j개를 왼쪽 무리로 보냈다. 올바른 나눔인지 확인하는 조건은?",
    choices: [
      "`A[i-1] <= A[i]`이고 `B[j-1] <= B[j]`",
      "`A[i-1] <= B[j]`이고 `B[j-1] <= A[i]`",
      "`A[i-1] <= B[j-1]`",
      "`i === j`",
    ],
    answer: 1,
    explanation:
      "각 배열 안은 이미 정렬돼 있어서 A 안, B 안의 비교는 늘 참이다. 남은 건 엇갈린 두 쌍으로, A 왼쪽 끝이 B 오른쪽 처음 이하이고 B 왼쪽 끝이 A 오른쪽 처음 이하면 왼쪽 무리 전체가 오른쪽 무리 전체 이하가 된다.",
    anchor: "짧은-배열을-어디서-자를지-이분-탐색한다",
  },
  {
    id: "leetcode-median-of-two-sorted-arrays-2",
    post: "leetcode-median-of-two-sorted-arrays",
    question: "`A = [3, 8, 13, 15, 20, 24]`, `B = [1, 2, 4, 6, 7, 10, 11]`에서 첫 시도 i = 3, j = 4일 때 일어나는 일은?",
    choices: [
      "올바른 나눔이라 중앙값 13을 돌려준다",
      "B 왼쪽 끝 6이 A 오른쪽 처음 15보다 작아 i를 늘린다",
      "A 왼쪽 끝 13이 B 오른쪽 처음 7보다 커서 A에서 너무 많이 가져왔으니 i를 줄인다",
      "j가 범위를 벗어나 배열을 바꾼다",
    ],
    answer: 2,
    explanation:
      "aLeft 13 > bRight 7이라 왼쪽 무리에 오른쪽보다 큰 값이 섞였다. A에서 덜 가져와야 하니 hi = i - 1이다. 이후 i = 1을 거쳐 i = 2, j = 5에서 멈추고 중앙값은 max(8, 7) = 8이다.",
    anchor: "짧은-배열을-어디서-자를지-이분-탐색한다",
  },
  {
    id: "leetcode-median-of-two-sorted-arrays-3",
    post: "leetcode-median-of-two-sorted-arrays",
    question: "자르기 풀이를 짧은 배열이 아니라 긴 배열에서 하면 어떤 문제가 생기나?",
    choices: [
      "j = half - i가 음수가 되거나 짧은 배열 길이를 넘어 배열 밖을 읽는다",
      "시간 복잡도가 O(m + n)이 된다",
      "홀수일 때 중앙값이 오른쪽 최솟값이 된다",
      "아무 문제도 없고 조금 느려질 뿐이다",
    ],
    answer: 0,
    explanation:
      "i가 긴 배열 길이까지 갈 수 있어서 half - i가 음수가 된다. [1, …, 8]과 [9]에서는 j가 -3까지 내려가 undefined와 비교하다 답을 못 찾았다. 짧은 쪽에서 자르면 j가 늘 0~n 안에 있다.",
    anchor: "왜-짧은-쪽에서-자르나",
  },
  {
    id: "leetcode-median-of-two-sorted-arrays-4",
    post: "leetcode-median-of-two-sorted-arrays",
    question: "k번째 수 풀이에서 A의 k/2번째 값이 B의 k/2번째 값보다 작을 때 A의 앞쪽 k/2개를 버려도 되는 이유는?",
    choices: [
      "A가 B보다 짧기 때문이다",
      "A의 앞쪽 값은 모두 음수이기 때문이다",
      "버려도 k를 그대로 두면 되기 때문이다",
      "그 값보다 작은 값은 많아야 k - 2개라, A의 앞쪽 k/2개는 모두 k - 1번째 이하라 k번째가 될 수 없기 때문이다",
    ],
    answer: 3,
    explanation:
      "A의 k/2번째 값보다 작을 수 있는 건 A의 앞쪽 k/2 - 1개와 B의 앞쪽 k/2 - 1개뿐이다. 그래서 그 값과 그 앞은 순위가 k보다 앞이다. 버린 만큼 k에서 빼고 남은 곳에서 찾으니 k가 매번 절반이 된다.",
    anchor: "k번째-수를-찾으며-절반씩-버린다",
  },
  {
    id: "leetcode-median-of-two-sorted-arrays-5",
    post: "leetcode-median-of-two-sorted-arrays",
    question: "왼쪽 무리 크기를 `(m + n + 1) / 2`(내림) 대신 `(m + n) / 2`(내림)로 잡고 반환식은 그대로 두면?",
    choices: [
      "결과가 같다. 홀짝은 반환식에서만 처리하기 때문이다",
      "홀수일 때 왼쪽 무리가 하나 적어져 왼쪽 최댓값이 중앙값이 아니게 된다. 예시에서 8 대신 7이 나온다",
      "짝수일 때만 틀린다",
      "무한 루프에 빠진다",
    ],
    answer: 1,
    explanation:
      "홀수 개에서 (m + n) / 2를 쓰면 오른쪽 무리가 하나 많아 중앙값은 오른쪽 최솟값이 된다. 반환식이 왼쪽 최댓값을 보니 한 칸 앞의 값이 나온다. half와 '홀수일 때 어느 끝을 보나'는 짝으로 정한다.",
    anchor: "half를-m--n--2로-잡는다",
  },
];
