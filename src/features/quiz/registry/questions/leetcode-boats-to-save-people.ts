import type { QuizQuestion } from "../types";

export const LEETCODE_BOATS_TO_SAVE_PEOPLE: QuizQuestion[] = [
  {
    id: "leetcode-boats-to-save-people-1",
    post: "leetcode-boats-to-save-people",
    question: "정렬 후 양 끝 투 포인터 풀이에서 가장 무거운 사람(r)은 매번 움직이고 가장 가벼운 사람(l)은 짝이 될 때만 움직이는 이유는?",
    choices: [
      "가벼운 사람은 혼자 타는 게 손해라서 끝까지 남겨 두기 위해",
      "무거운 사람이 가장 가벼운 사람과도 못 타면 누구와도 못 타서, 혼자 보낸다는 결정이 확실하기 때문에",
      "무거운 사람부터 보내야 보트의 무게 제한을 덜 쓰기 때문에",
      "r을 움직여야 반복이 n번 안에 끝나기 때문에, 순서는 상관없다",
    ],
    answer: 1,
    explanation:
      "가장 가벼운 사람과의 합이 limit을 넘으면 다른 누구와 더해도 넘는다. 그래서 무거운 사람은 짝이 있든 없든 이번 보트에 태워도 손해가 없다. 반대로 가벼운 사람은 가장 무거운 사람과 못 타도 다른 사람과는 탈 수 있어서, 역할을 뒤집으면 [1, 2, 3, 4], limit 4에서 4척이 나온다.",
    anchor: "가장-무거운-사람은-가장-가벼운-사람과-탄다",
  },
  {
    id: "leetcode-boats-to-save-people-2",
    post: "leetcode-boats-to-save-people",
    question: "limit = 5, people = [1, 2, 3, 4]를 정렬해 이웃끼리 묶는 탐욕은 몇 척을 내고, 정답은 몇 척인가?",
    choices: [
      "이웃끼리 2척, 정답 2척",
      "이웃끼리 4척, 정답 2척",
      "이웃끼리 3척, 정답 2척",
      "이웃끼리 3척, 정답 3척",
    ],
    answer: 2,
    explanation:
      "이웃끼리 묶으면 [1, 2]가 한 척이고 3과 4는 합이 7이라 따로 타서 3척이다. 정답은 [1, 4], [2, 3]의 2척이다. 가벼운 사람을 가벼운 사람끼리 써 버리면 무거운 사람이 짝을 잃는다.",
    anchor: "가벼운-사람끼리-먼저-묶으면-틀린다",
  },
  {
    id: "leetcode-boats-to-save-people-3",
    post: "leetcode-boats-to-save-people",
    question: "바꿔치기 논증에서 h는 x와, l은 y와 타던 최적해를 h와 l, x와 y로 바꿔도 되는 근거는?",
    choices: [
      "y가 h보다 가볍거나 같으니 x + y ≤ x + h ≤ limit이다",
      "x가 l보다 가볍거나 같으니 x + y ≤ l + y ≤ limit이다",
      "h + l ≤ limit이니 다른 짝은 상관없다",
      "x와 y는 언제나 혼자 탈 수 있으니 보트 수가 줄어든다",
    ],
    answer: 0,
    explanation:
      "h가 가장 무거우니 y ≤ h이고, 원래 h와 x가 같이 탔으니 x + h ≤ limit이다. 둘을 이으면 x + y ≤ limit이라 x와 y를 한 보트에 태울 수 있고 보트 수는 그대로다. x는 l보다 무겁거나 같아서 두 번째 보기의 부등식은 성립하지 않는다.",
    anchor: "바꿔치기로-보이는-최적성",
  },
  {
    id: "leetcode-boats-to-save-people-4",
    post: "leetcode-boats-to-save-people",
    question: "반복 조건을 while (l < r)로 쓰면 people = [5], limit = 5의 결과는?",
    choices: [
      "1. 결과는 같다",
      "2. 한 사람을 두 번 센다",
      "무한 루프",
      "0. 가운데 남은 한 사람을 태우지 않고 끝난다",
    ],
    answer: 3,
    explanation:
      "l과 r이 처음부터 같은 칸이라 l < r이 거짓이고 반복이 한 번도 돌지 않는다. 짝을 못 찾은 사람도 보트를 타야 하니 l === r인 경우까지 처리하는 l <= r가 맞다. 짝짓기만 하는 Two Sum II와 다른 점이다.",
    anchor: "짝짓기-문제처럼-등호를-뺀다",
  },
  {
    id: "leetcode-boats-to-save-people-5",
    post: "leetcode-boats-to-save-people",
    question: "보트에 3명까지 탈 수 있을 때 '가장 무거운 사람에 가벼운 사람부터 채우기'가 틀리는 이유로 맞는 것은?",
    choices: [
      "세 명의 합은 정수 범위를 넘기 때문에",
      "정렬이 안정 정렬이 아니라서",
      "가장 가벼운 사람을 무거운 사람에게 주면 다른 보트의 빈자리를 메울 사람이 사라지는데, 두 명일 때의 바꿔치기 논증이 더는 성립하지 않기 때문에",
      "투 포인터는 세 개의 값을 동시에 볼 수 없기 때문에",
    ],
    answer: 2,
    explanation:
      "limit 5, [1, 2, 2, 2, 3]에서 탐욕은 [3, 1], [2, 2], [2]로 3척을 내지만 [3, 2], [1, 2, 2]면 2척이다. 두 명일 때는 h의 짝을 l로 바꿔도 손해가 없었지만 세 명이면 그 보장이 깨진다. k명 버전은 상자 채우기 문제라 일반적으로 빠른 정확한 해법이 알려져 있지 않다.",
    anchor: "세-명이-탈-수-있다면",
  },
];
