import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_COMMON_SUBSEQUENCE: QuizQuestion[] = [
  {
    id: "leetcode-longest-common-subsequence-1",
    post: "leetcode-longest-common-subsequence",
    question: "앞에서부터 맞는 글자를 바로 짝짓는 그리디로 \"stone\"과 \"longest\"의 LCS를 구하면 몇이 나오고, 왜 틀리나?",
    choices: [
      "3, 그리디도 이 입력에서는 맞다",
      "1, s만 짝지어지고 멈춰서",
      "2, s를 longest 끝의 s에 짝지으면서 o·n·e를 쓸 기회를 잃어서",
      "0, 첫 글자 s가 longest의 첫 글자와 달라서",
    ],
    answer: 2,
    explanation:
      "그리디는 s와 t를 longest의 끝에 짝지어 \"st\"로 2를 낸다. 하지만 o, n, e를 고르면 3이다. 지금의 짝이 뒤에 남는 기회를 바꾸니 모든 선택을 비교하는 DP가 필요하다.",
    anchor: "stone과-longest를-손으로-맞춰-보기",
  },
  {
    id: "leetcode-longest-common-subsequence-2",
    post: "leetcode-longest-common-subsequence",
    question: "마지막 글자가 같을 때 `dp[i][j] = dp[i-1][j-1] + 1`만 보고 위·왼쪽 칸을 따로 비교하지 않아도 되는 이유는?",
    choices: [
      "같은 글자끼리 짝지은 최적해가 항상 존재해서, 위·왼쪽 칸이 왼쪽 위 + 1보다 클 수 없기 때문에",
      "위·왼쪽 칸은 언제나 0이기 때문에",
      "글자가 같으면 두 문자열의 길이가 같아지기 때문에",
      "LeetCode 입력에서는 같은 글자가 한 번씩만 나오기 때문에",
    ],
    answer: 0,
    explanation:
      "어떤 최적해가 그 글자를 쓰지 않더라도 마지막 짝을 이 글자로 바꿔 끼우면 길이가 같은 해가 된다. 그래서 짝짓는 쪽이 손해가 아니다. 위·왼쪽 칸이 0이라는 건 사실이 아니다.",
    anchor: "맨-앞-두-글자만-보고-갈래-나누기",
  },
  {
    id: "leetcode-longest-common-subsequence-3",
    post: "leetcode-longest-common-subsequence",
    question: "한 줄 DP에서 `diag` 변수 없이 글자가 같을 때 `dp[j-1] + 1`을 쓰면 (\"ab\", \"aab\")의 결과는?",
    choices: ["2 (정답)", "1", "0", "3 (오답)"],
    answer: 3,
    explanation:
      "`dp[j-1]`은 이미 이번 줄 값으로 바뀐 왼쪽 칸이라, 같은 a가 aab의 두 a와 모두 짝지어진 것처럼 1, 2로 쌓인다. 그 뒤 b까지 더해 3이 된다. 덮어쓰기 전 값을 `diag`로 들고 가야 왼쪽 위를 쓸 수 있다.",
    anchor: "두-줄-그리고-한-줄",
  },
  {
    id: "leetcode-longest-common-subsequence-4",
    post: "leetcode-longest-common-subsequence",
    question: "LCS를 LIS로 바꿔 풀 때 text2에서 같은 글자의 자리들을 큰 번호부터 거꾸로 넣는 이유는?",
    choices: [
      "이분 탐색이 내림차순 입력에서만 동작해서",
      "text1의 글자 하나가 text2의 여러 자리와 동시에 짝지어지는 것을 막으려고",
      "자리 번호가 큰 쪽이 답에 더 유리해서",
      "Map이 키를 거꾸로 저장해서",
    ],
    answer: 1,
    explanation:
      "앞에서부터 넣으면 한 글자의 자리들이 증가 수열을 이뤄, (\"a\", \"aaa\")에서 답 1 대신 3이 나온다. 거꾸로 넣으면 같은 글자 자리끼리는 감소하니 증가 수열에 하나만 들어간다.",
    anchor: "lis로-바꿔-풀기",
  },
  {
    id: "leetcode-longest-common-subsequence-5",
    post: "leetcode-longest-common-subsequence",
    question: "최장 공통 부분 문자열(연속)을 구하려면 LCS 표에서 무엇을 바꿔야 하나?",
    choices: [
      "글자가 같을 때 +1 대신 +2를 한다",
      "표를 오른쪽 아래부터 채운다",
      "글자가 다르면 0으로 끊고, 답을 마지막 칸이 아니라 표 전체의 최댓값으로 한다",
      "아무것도 바꿀 필요가 없다. 두 문제의 답은 같다",
    ],
    answer: 2,
    explanation:
      "연속해야 하니 글자가 다르면 이어 오던 길이가 끊긴다. 그래서 0으로 두고, 끝나는 위치가 어디든 될 수 있으니 표 전체의 최댓값이 답이다. \"abcde\"와 \"abfde\"는 부분 문자열로 2, 부분 수열로 4라 두 답은 다르다.",
    anchor: "그럴듯한데-틀리는-코드",
  },
];
