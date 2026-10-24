import type { QuizQuestion } from "../types";

export const LEETCODE_BINARY_SEARCH: QuizQuestion[] = [
  {
    id: "leetcode-binary-search-1",
    post: "leetcode-binary-search",
    question: "`lo = 0, hi = nums.length - 1`로 시작하는 닫힌 구간 풀이에서 반복 조건을 `lo < hi`로 쓰면 어떤 입력에서 틀리나?",
    choices: [
      "배열이 비어 있을 때 nums[-1]을 읽는다",
      "`[5]`에서 5를 찾을 때 반복을 한 번도 돌지 않고 -1을 돌려준다",
      "배열 길이가 짝수일 때 무한 루프에 빠진다",
      "target이 배열 맨 앞보다 작을 때 0을 돌려준다",
    ],
    answer: 1,
    explanation:
      "닫힌 구간에서 lo === hi는 한 칸이 남은 상태다. lo < hi로 돌면 그 마지막 한 칸을 확인하지 않고 끝나서 [5]의 5나 [1, 3]의 3을 놓친다. 빈 배열은 hi가 -1이라 어느 조건이든 반복을 돌지 않는다.",
    anchor: "이렇게-짜면-틀린다",
  },
  {
    id: "leetcode-binary-search-2",
    post: "leetcode-binary-search",
    question: "`[-4, 1, 3, 8, 12, 17, 25, 31]`에서 닫힌 구간 풀이로 10을 찾으면 -1을 돌려줄 때 lo는 얼마이고, 그 값은 무엇을 뜻하나?",
    choices: [
      "3, 10보다 작은 마지막 값의 자리",
      "5, 처음 본 mid의 자리",
      "4, 10이 들어갈 자리(10 이상이 처음 나오는 자리)",
      "8, 배열 길이",
    ],
    answer: 2,
    explanation:
      "mid가 3(8), 5(17), 4(12)를 차례로 보고 lo = 4, hi = 3에서 끝난다. 실패로 끝날 때 lo는 항상 target 이상이 처음 나오는 자리라 8과 12 사이인 4번이다. 그래서 Search Insert Position은 이 lo를 그대로 돌려주면 된다.",
    anchor: "반복문으로-옮기고-닫힌-구간을-끝까지-지킨다",
  },
  {
    id: "leetcode-binary-search-3",
    post: "leetcode-binary-search",
    question: "자바에서 `lo = 2_000_000_000, hi = 2_100_000_000`일 때 `(lo + hi) / 2`가 음수가 되는 이유와 고친 식은?",
    choices: [
      "int 덧셈이 2^31 - 1을 넘어 음수로 돌아가서다. `lo + (hi - lo) / 2`로 쓴다",
      "정수 나눗셈이 0 쪽으로 버려서다. `Math.ceil`로 쓴다",
      "자바의 / 연산이 실수를 돌려줘서다. `(int)`로 감싼다",
      "배열 인덱스가 long이라서다. `(long) lo`로 쓴다",
    ],
    answer: 0,
    explanation:
      "합 41억은 int의 최댓값 약 21억을 넘어 -97483648처럼 음수가 된다. 차이를 반으로 나눠 lo에 더하면 중간값이 넘치지 않는다. 인덱스가 음수가 아니라면 (lo + hi) >>> 1도 맞는다.",
    anchor: "파이썬과-자바로-옮기면",
  },
  {
    id: "leetcode-binary-search-4",
    post: "leetcode-binary-search",
    question: "반열린 구간 풀이(`hi = nums.length`, `lo < hi`)에서 `nums[mid] === target`이어도 멈추지 않고 `hi = mid`로 계속 좁히는 이유는?",
    choices: [
      "mid를 버리지 않으면 무한 루프에 빠지기 때문이다",
      "target보다 큰 값이 mid 왼쪽에 있을 수 있기 때문이다",
      "같은 값이 더 왼쪽에 있을 수 있어서, target 이상이 처음 나오는 자리를 확정하려는 것이다",
      "반복 횟수를 줄이기 위해서다",
    ],
    answer: 2,
    explanation:
      "이 풀이는 값을 찾는 게 아니라 target 이상이 처음 나오는 경계를 찾는다. 같은 값이 여러 개라도 첫 번째 자리를 돌려주고, 없을 때는 들어갈 자리가 된다. 그 대신 찾자마자 멈추는 닫힌 구간 풀이보다 반복이 한두 번 더 돈다.",
    anchor: "경계를-먼저-찾고-나중에-확인한다-반열린-구간",
  },
  {
    id: "leetcode-binary-search-5",
    post: "leetcode-binary-search",
    question: "자바 `Arrays.binarySearch({-4, 1, 3, 8, 12, 17, 25, 31}, 10)`의 결과는?",
    choices: ["-1", "4", "-4", "-5"],
    answer: 3,
    explanation:
      "못 찾으면 -(들어갈 자리) - 1을 돌려준다. 10이 들어갈 자리는 4라서 -5다. 1을 더 빼는 이유는 들어갈 자리가 0일 때도 음수로 '없음'을 표현하기 위해서다.",
    anchor: "표준-라이브러리에-맡기기",
  },
];
