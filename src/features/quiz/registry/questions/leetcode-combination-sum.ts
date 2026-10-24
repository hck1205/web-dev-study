import type { QuizQuestion } from "../types";

export const LEETCODE_COMBINATION_SUM: QuizQuestion[] = [
  {
    id: "leetcode-combination-sum-1",
    post: "leetcode-combination-sum",
    question: "Combination Sum 백트래킹에서 재귀 호출에 `go(0, …)`을 넘기면 `[2, 3, 6, 7]`, 7의 결과는 어떻게 되나?",
    choices: [
      "`[[7]]`만 나온다",
      "`[[2,2,3],[7]]`이 그대로 나온다",
      "재귀가 끝나지 않는다",
      "`[[2,2,3],[2,3,2],[3,2,2],[7]]`처럼 순서만 다른 중복이 생긴다",
    ],
    answer: 3,
    explanation:
      "매 자리에서 처음 후보부터 다시 고르니 같은 조합이 여러 순서로 만들어진다. `i`를 넘겨야 후보 배열 순서대로만 골라 한 조합이 한 번만 나온다. `[[7]]`만 나오는 건 `i + 1`을 넘겼을 때다.",
    anchor: "break가-답을-지워-버리는-경우",
  },
  {
    id: "leetcode-combination-sum-2",
    post: "leetcode-combination-sum",
    question: "정렬하지 않은 `[7, 3, 2]`, 18에 `if (cands[i] > remain) break`를 넣으면 왜 답이 빠지나?",
    choices: [
      "남은 합보다 큰 후보 뒤에 더 작은 후보가 있을 수 있는데 그 자리에서 멈춰 버리기 때문이다",
      "같은 수를 다시 쓸 수 없게 되기 때문이다",
      "`remain`이 음수가 되어 재귀가 끝나지 않기 때문이다",
      "break는 답을 바꾸지 않으니 빠지지 않는다",
    ],
    answer: 0,
    explanation:
      "break는 '이 후보가 크면 뒤도 다 크다'는 가정을 깔고 있고, 그 가정은 오름차순 정렬일 때만 맞다. `[7,7]`에서 남은 4일 때 7에서 멈추면 뒤의 2를 못 봐서 `[2,2,7,7]`이 빠진다. 정렬하지 않았다면 `continue`를 써야 한다.",
    anchor: "break가-답을-지워-버리는-경우",
  },
  {
    id: "leetcode-combination-sum-3",
    post: "leetcode-combination-sum",
    question: "JavaScript에서 `[10, 2, 3].sort()`로 정렬한 뒤 break 가지치기를 쓰면 target 12에서 무슨 일이 생기나?",
    choices: [
      "숫자 순서로 정렬되어 정상 동작한다",
      "문자열 순서로 `[10, 2, 3]`이 그대로라, 10을 쓰고 남은 2에서 10을 만나 멈춰 `[2,10]`이 빠진다",
      "`sort()`가 입력을 바꾸지 않아 오류가 난다",
      "모든 답이 두 번씩 나온다",
    ],
    answer: 1,
    explanation:
      "비교자 없는 `sort()`는 값을 문자열로 비교해 \"10\" < \"2\" < \"3\" 순서가 된다. 그래서 가지치기의 전제가 깨지고 답이 빠진다. `(a, b) => a - b` 비교자를 넘겨야 한다.",
    anchor: "break가-답을-지워-버리는-경우",
  },
  {
    id: "leetcode-combination-sum-4",
    post: "leetcode-combination-sum",
    question: "개수를 세는 DP `for (const c of candidates) for (let t = c; t <= target; t++) dp[t] += dp[t - c]`에서 두 반복의 순서를 바꾸면(합이 바깥) 어떻게 되나?",
    choices: [
      "결과가 같다",
      "같은 수를 한 번만 쓰는 개수가 된다",
      "순서만 다른 것도 따로 세는 개수가 되어 `[2,3,6,7]`, 7에서 2 대신 4가 나온다",
      "항상 0이 나온다",
    ],
    answer: 2,
    explanation:
      "후보가 바깥이면 2를 다 붙인 뒤 3을 붙이니 한 조합이 한 순서로만 세진다. 합이 바깥이면 합마다 모든 후보를 마지막 수로 시도해 `[2,2,3]`, `[2,3,2]`, `[3,2,2]`가 따로 세진다. 이게 Combination Sum IV다.",
    anchor: "작은-합의-답으로-큰-합의-답을-쌓기",
  },
  {
    id: "leetcode-combination-sum-5",
    post: "leetcode-combination-sum",
    question: "후보 10개 `[2,3,5,...,12]`로 합 40을 만들 때, 순서까지 다 나열하고 Set으로 지우는 풀이가 극단적으로 느린 이유는?",
    choices: [
      "Set의 조회가 O(n)이라서",
      "답이 1461개뿐인데 같은 조합을 여러 순서로 만들어 호출이 1억 8천만 번을 넘기 때문이다",
      "재귀 깊이가 40을 넘어 콜 스택이 넘치기 때문이다",
      "정렬을 매번 하기 때문에 O(n log n)이 곱해져서",
    ],
    answer: 1,
    explanation:
      "이 풀이는 조합이 아니라 합이 target인 모든 나열을 만든다. 나열의 수가 조합보다 훨씬 빠르게 늘어 183,139,731번 호출에 12초가 걸렸다. 시작 위치를 넘기면 같은 입력에서 3만 7천 번으로 줄어든다.",
    anchor: "순서까지-다-만들고-정렬해서-지우기",
  },
];
