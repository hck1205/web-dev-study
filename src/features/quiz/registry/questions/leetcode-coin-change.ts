import type { QuizQuestion } from "../types";

export const LEETCODE_COIN_CHANGE: QuizQuestion[] = [
  {
    id: "leetcode-coin-change-1",
    post: "leetcode-coin-change",
    question: "동전 [186, 419, 83, 408], 금액 6249에서 큰 동전부터 최대한 쓰는 탐욕은 무엇을 내나? (실제 답은 20)",
    choices: ["20", "21", "-1", "15"],
    answer: 2,
    explanation:
      "419를 14개, 186을 2개 쓰고 남은 11원을 83으로 채우지 못해 -1을 낸다. 한 번 내린 결정을 되돌리지 않으니 막다른 길에 들어가도 다른 길을 찾지 않는다. 탐욕은 개수가 많아지는 것뿐 아니라 답이 있는데 없다고 말할 수도 있다.",
    anchor: "큰-동전부터-집으면-틀린다",
  },
  {
    id: "leetcode-coin-change-2",
    post: "leetcode-coin-change",
    question: "Java에서 불가능을 `Integer.MAX_VALUE`로 두고 `dp[a] = Math.min(dp[a], dp[a - c] + 1)`로 쓰면 `[2]`, 3에서 무엇이 나오나?",
    choices: ["-1", "-2147483648", "2147483647", "1"],
    answer: 1,
    explanation:
      "dp[1]이 MAX_VALUE인 채로 남고, dp[3]을 구할 때 MAX_VALUE + 1이 넘쳐 -2147483648이 된다. 이 음수가 min에서 이겨 그대로 답이 된다. 불가능은 amount + 1처럼 넘치지 않으면서 실제 답이 될 수 없는 값으로 둔다.",
    anchor: "python과-java로-옮길-때",
  },
  {
    id: "leetcode-coin-change-3",
    post: "leetcode-coin-change",
    question: "최소 동전 수를 구할 때 바깥 반복문을 금액에서 동전으로 바꾸면 어떻게 되나?",
    choices: [
      "같은 동전을 한 번만 쓰게 되어 답이 커진다",
      "순서가 다른 조합을 따로 세서 답이 작아진다",
      "답은 같다. 금액을 작은 쪽부터 올리면 같은 동전을 여러 번 쓰는 경우도 반영된다",
      "dp[0]을 다시 정해야 해서 답이 1 커진다",
    ],
    answer: 2,
    explanation:
      "안쪽에서 금액을 작은 쪽부터 올리면 dp[a - c]에 이미 c를 쓴 결과가 들어 있어 같은 동전을 여러 번 쓰는 것이 반영된다. 최솟값은 어떤 순서로 세든 같은 묶음이 같은 개수라 답이 바뀌지 않는다. 순서가 답을 바꾸는 건 방법의 수를 셀 때(518번과 377번)다.",
    anchor: "바깥-반복문을-동전으로-바꿔도-될까",
  },
  {
    id: "leetcode-coin-change-4",
    post: "leetcode-coin-change",
    question: "큰 동전부터 많이 쓰는 분기 한정 DFS가 짝수 동전과 홀수 금액에서 수십억 번을 호출하는 이유는?",
    choices: [
      "정렬을 매번 다시 하기 때문",
      "답이 없어서 잘라 낼 기준인 \"지금까지의 최솟값\"이 끝까지 생기지 않기 때문",
      "짝수 동전은 나눗셈이 느리기 때문",
      "재귀 깊이가 금액만큼 깊어지기 때문",
    ],
    answer: 1,
    explanation:
      "이 DFS는 이미 찾은 답보다 동전이 많아지는 가지를 잘라 빨라진다. 답이 없으면 best가 계속 Infinity라 아무 가지도 잘리지 않아 모든 조합을 다 본다. 재귀 깊이는 동전 종류 수만큼이라 금액과 상관없다.",
    anchor: "큰-동전부터-깊이-파고-잘라-내기",
  },
  {
    id: "leetcode-coin-change-5",
    post: "leetcode-coin-change",
    question: "탑다운 메모 풀이가 동전 [1, 2, 5], 금액 10000에서 Node.js 기본 설정으로 실패하는 이유는?",
    choices: [
      "장부(Map)에 10000개를 넣을 수 없어서",
      "시간 복잡도가 지수라서",
      "Infinity를 장부에 적을 수 없어서",
      "1원 동전으로 10000 → 9999 → … 재귀가 만 단계 내려가 콜 스택을 넘기 때문",
    ],
    answer: 3,
    explanation:
      "메모가 있어 시간은 O(amount × k)지만, 첫 동전이 1원이면 재귀가 금액을 1씩 줄이며 만 단계를 내려간다. Node.js 기본 스택에서 RangeError가 났고 Python도 재귀 한도 1000에 걸린다. 바텀업 표는 같은 복잡도에 스택을 쓰지 않는다.",
    anchor: "금액마다-답을-적어-두면",
  },
];
