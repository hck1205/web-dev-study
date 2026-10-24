import type { QuizQuestion } from "../types";

export const LEETCODE_MAX_CONSECUTIVE_ONES_III: QuizQuestion[] = [
  {
    id: "leetcode-max-consecutive-ones-iii-1",
    post: "leetcode-max-consecutive-ones-iii",
    question: "nums = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1], k = 2에서 0 위치에 가짜 벽을 붙인 z = [-1, 1, 2, 5, 7, 10]으로 답을 구하면?",
    choices: [
      "5. z[3] - z[0] - 1이라서",
      "10. 배열 길이라서",
      "7. 벽 2와 10 사이 칸 수 z[5] - z[2] - 1이 가장 커서",
      "6. 1의 개수라서",
    ],
    answer: 2,
    explanation:
      "k = 2면 k + 1 = 3칸 떨어진 벽끼리 짝을 짓는다. 후보는 5 - (-1) - 1 = 5, 7 - 1 - 1 = 5, 10 - 2 - 1 = 7이고 가장 큰 7이 답이다. 5는 첫 후보일 뿐이다.",
    anchor: "0의-위치만-적어-두고-k--1칸-간격을-잰다",
  },
  {
    id: "leetcode-max-consecutive-ones-iii-2",
    post: "leetcode-max-consecutive-ones-iii",
    question: "0 위치 풀이에서 양 끝의 가짜 벽 -1과 n을 빼면 어떤 입력에서 틀리나?",
    choices: [
      "0이 하나도 없는 입력",
      "답이 되는 줄이 배열 왼쪽 끝이나 오른쪽 끝에 닿는 입력",
      "k = 0인 입력",
      "0이 연달아 나오는 입력",
    ],
    answer: 1,
    explanation:
      "가짜 벽이 없으면 진짜 0끼리만 짝을 지어 배열 끝까지 이어지는 줄을 잴 수 없다. 예시의 정답 7은 오른쪽 끝에 닿는 줄이라 벽이 10번(배열 밖)에 있어야 잡히고, 빼면 5가 나온다. 0이 없는 입력은 따로 n을 돌려주는 검사가 처리한다.",
    anchor: "뒤집을-0을-잘못-고르는-코드들",
  },
  {
    id: "leetcode-max-consecutive-ones-iii-3",
    post: "leetcode-max-consecutive-ones-iii",
    question: "쿠폰을 빚지는 창(줄어들지 않는 창)에서 k가 음수인 동안의 창은 무엇인가?",
    choices: [
      "0이 k개보다 많아 실제로는 만들 수 없지만, 지금까지의 최대 길이를 들고 미끄러지는 창",
      "언제나 정답 구간",
      "길이가 줄어드는 창",
      "버그라서 나오면 안 되는 상태",
    ],
    answer: 0,
    explanation:
      "빚이 있으면 창을 늘리지 않고 한 칸 밀기만 하니 길이는 그대로다. 이 창 자체는 0이 너무 많아 만들 수 없지만, 길이는 이미 달성한 최대값이다. 창이 커지는 건 빚이 없을 때뿐이라 마지막 길이 n - l이 답이 된다.",
    anchor: "남은-쿠폰을-빚지는-창",
  },
  {
    id: "leetcode-max-consecutive-ones-iii-4",
    post: "leetcode-max-consecutive-ones-iii",
    question: "가장 긴 1의 줄 길이에 k를 더하는 풀이가 ([1, 0, 1], 1)에서 틀리는 이유는?",
    choices: [
      "k를 두 번 더해서",
      "1의 줄을 잘못 세서",
      "0이 없다고 착각해서",
      "0 하나를 바꾸면 양옆 1 줄이 이어지는 효과를 놓쳐 3 대신 2가 나와서",
    ],
    answer: 3,
    explanation:
      "가운데 0을 바꾸면 1 + 1 + 1로 길이 3이 된다. 가장 긴 줄(1)에 k(1)를 더하면 2라 이 연결을 놓친다. 바꿀 0이 없는 ([1, 1], 5)에서는 배열 길이를 넘는 7이 나오기도 한다.",
    anchor: "뒤집을-0을-잘못-고르는-코드들",
  },
  {
    id: "leetcode-max-consecutive-ones-iii-5",
    post: "leetcode-max-consecutive-ones-iii",
    question: "기본 창에서 0이 k개를 넘어 왼쪽을 줄이고 나면 l은 어디에 멈추나?",
    choices: [
      "언제나 r과 같은 자리",
      "창 안의 가장 왼쪽 0 바로 다음 칸, 곧 어떤 0의 위치 + 1",
      "언제나 0번 칸",
      "가장 가까운 1의 위치",
    ],
    answer: 1,
    explanation:
      "1을 빼서는 0 개수가 줄지 않으니 while은 가장 왼쪽 0을 뺄 때까지 간다. 그래서 줄이기를 마친 l은 벽(0) 바로 다음이다. 예시에서 r = 5일 때 l = 2, r = 7일 때 l = 3이었고, 이게 0 위치 풀이의 z[i] + 1과 같다.",
    anchor: "창의-왼쪽-끝은-언제나-벽-바로-다음이다",
  },
];
