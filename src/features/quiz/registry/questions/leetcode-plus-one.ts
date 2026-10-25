import type { QuizQuestion } from "../types";

export const LEETCODE_PLUS_ONE: QuizQuestion[] = [
  {
    id: "leetcode-plus-one-1",
    post: "leetcode-plus-one",
    question: "9가 아닌 칸에서 멈추는 풀이로 [2, 4, 9, 9]에 1을 더할 때, 값이 바뀌는 칸은 몇 개인가?",
    choices: [
      "1개",
      "3개",
      "4개",
      "2개",
    ],
    answer: 1,
    explanation:
      "오른쪽의 9 두 개가 0이 되고 4가 5가 된 뒤 반복을 빠져나온다. 그래서 세 칸이 바뀌고 맨 앞의 2는 보지도 않는다. 올림을 끝까지 들고 가는 풀이라면 2도 계산하지만 값은 바뀌지 않는다.",
    anchor: "9가-아닌-칸에서-멈춘다",
  },
  {
    id: "leetcode-plus-one-2",
    post: "leetcode-plus-one",
    question: "결과 배열의 길이가 입력보다 하나 길어지는 경우는?",
    choices: [
      "맨 앞 칸이 9일 때",
      "맨 뒤 칸이 9일 때",
      "모든 칸이 9일 때",
      "배열 길이가 100일 때",
    ],
    answer: 2,
    explanation:
      "하나라도 9가 아닌 칸이 있으면 올림이 그 칸에서 멈추니 길이가 그대로다. 맨 앞이 9여도 [9, 1]처럼 뒤에 9가 아닌 칸이 있으면 늘지 않는다. 전부 9일 때만 1 뒤에 0이 n개인 새 배열이 된다.",
    anchor: "2499와-999에-1을-더해-보기",
  },
  {
    id: "leetcode-plus-one-3",
    post: "leetcode-plus-one",
    question: "0부터 차례로 1씩 더해 가는 카운터에서, 9가 아닌 칸에서 멈추는 방식으로 더하면 한 번에 평균 몇 칸이 바뀌나?",
    choices: [
      "약 1.11칸",
      "자릿수의 절반",
      "자릿수 전체",
      "약 2칸",
    ],
    answer: 0,
    explanation:
      "끝자리가 9일 확률이 1/10, 끝 두 자리가 99일 확률이 1/100이라 기댓값은 1 + 1/10 + 1/100 + ... ≈ 1.111이다. 0부터 999,999까지 실제로 세어도 1.111111이 나왔다. 평균 2칸은 2진수 카운터의 값이다.",
    anchor: "평균적으로-몇-칸을-보나",
  },
  {
    id: "leetcode-plus-one-4",
    post: "leetcode-plus-one",
    question: "JavaScript에서 Number(digits.join(\"\")) + 1로 푸는 방법이 틀리는 이유는?",
    choices: [
      "join이 숫자 사이에 쉼표를 넣어서",
      "Number가 2^53 - 1까지만 정수를 정확히 담아, 그보다 큰 수는 변환할 때부터 반올림되기 때문",
      "Number가 100자리를 넘으면 NaN이 되어서",
      "+ 1이 문자열 이어 붙이기가 되어서",
    ],
    answer: 1,
    explanation:
      "90071992547409931처럼 2^53을 넘는 수는 Number로 바꾸는 순간 가까운 표현 가능한 값으로 반올림되어 끝자리가 틀린다. Number로 바꾼 뒤라 + 1은 덧셈이 되고, join(\"\")은 구분자 없이 붙인다. 100자리는 NaN이 아니라 1e+99 같은 근삿값이 된다.",
    anchor: "숫자로-바꿔서-더한다",
  },
  {
    id: "leetcode-plus-one-5",
    post: "leetcode-plus-one",
    question: "1이 아니라 k를 더하는 문제로 바꾸면 9가 아닌 칸에서 멈추는 풀이를 그대로 쓸 수 없는 이유는?",
    choices: [
      "k가 음수일 수 있어서",
      "배열을 뒤집어야 해서",
      "결과 길이가 항상 늘어나서",
      "올림이 0이나 1이 아니라 더 클 수 있어 칸이 9보다 작아도 올림이 생기기 때문",
    ],
    answer: 3,
    explanation:
      "1을 더할 때는 칸이 9보다 작으면 올림이 생기지 않는다는 성질 덕분에 바로 멈출 수 있었다. k를 더하면 5 + 7처럼 9보다 작은 칸에서도 올림이 생기고 올림 크기도 1을 넘을 수 있다. 그래서 k를 올림으로 들고 끝까지 가는 덧셈으로 돌아간다.",
    anchor: "1이-아닌-것을-더하거나-빼면",
  },
];
